from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

from PIL import Image


@dataclass(frozen=True)
class Target:
    src: str
    max_kb: int


TARGETS: list[Target] = [
    Target("Opulent-interiors.jpeg", 300),
    Target("Prime-Properties.jpeg", 250),
    Target("Opulent-Prime-Mortgages.jpeg", 250),
    Target("ULEGENDARY-DIGITAL.jpeg", 250),
    Target("OpulentInfluencersHouse.jpeg", 250),
    Target("PostMate.jpeg", 250),
    Target("Aurelion-Vantier2.jpeg", 250),
    Target("Opulent-Luxury-Cars2.jpeg", 250),
    Target("Opulent-Luxury-Watches.jpeg", 250),
    Target("Opulent-Luxury-Cars.jpeg", 250),
]


def _resize_to_max_width(img: Image.Image, max_width: int) -> Image.Image:
    if img.width <= max_width:
        return img
    scale = max_width / float(img.width)
    new_size = (max_width, max(1, int(round(img.height * scale))))
    return img.resize(new_size, Image.Resampling.LANCZOS)


def _save_webp_with_budget(img: Image.Image, out_path: Path, max_kb: int) -> tuple[int, int]:
    out_path.parent.mkdir(parents=True, exist_ok=True)

    # Try descending quality until we hit budget (or reach floor).
    # These are full-bleed heroes; 2200px wide + ~60-80 quality usually lands within targets.
    for quality in range(82, 44, -3):
        img.save(
            out_path,
            format="WEBP",
            quality=quality,
            method=6,
            optimize=True,
        )
        size_kb = int(out_path.stat().st_size / 1024)
        if size_kb <= max_kb:
            return quality, size_kb

    size_kb = int(out_path.stat().st_size / 1024)
    return 45, size_kb


def main() -> None:
    repo_root = Path(__file__).resolve().parents[1]
    src_dir = repo_root / "assets" / "images" / "hero" / "carousel"

    max_width = int(os.environ.get("HERO_MAX_WIDTH", "2200"))
    print(f"Source dir: {src_dir}")
    print(f"Max width:  {max_width}px")
    print("")

    for target in TARGETS:
        src_path = src_dir / target.src
        out_path = src_dir / (Path(target.src).stem + ".webp")
        if not src_path.exists():
            raise SystemExit(f"Missing source image: {src_path}")

        with Image.open(src_path) as im:
            im = im.convert("RGB")
            im = _resize_to_max_width(im, max_width=max_width)
            quality, size_kb = _save_webp_with_budget(im, out_path, max_kb=target.max_kb)

        print(f"{src_path.name:28} -> {out_path.name:28}  q={quality:2d}  {size_kb:4d}KB (target ≤ {target.max_kb}KB)")

    print("\nDone.")


if __name__ == "__main__":
    main()

