function createSiteHeader(config) {
    const header = document.querySelector('[data-site-header]');
    if (!header) return;
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    function normalizePagePath(href) {
        if (!href || href.startsWith('#')) return 'index.html';
        const cleanHref = href.split('#')[0].split('?')[0];
        if (!cleanHref || cleanHref === '/') return 'index.html';
        const fileName = cleanHref.split('/').pop();
        return fileName || 'index.html';
    }

    function isCurrentPage(href) {
        const navPath = normalizePagePath(href);
        return navPath === currentPath || (currentPath === '' && navPath === 'index.html');
    }

    const brandMarkup = config.logoSrc
        ? `<img class="h-10 w-auto object-contain" src="${config.logoSrc}" alt="${config.logoAlt || config.brandLabel}" />`
        : config.brandLabel;
    const brandI18nAttr = config.logoSrc ? '' : ` data-i18n="${config.brandKey}"`;

    function renderMegaColumns(children) {
        const columns = children
            .map((section) => {
                const sectionI18nAttr = section.key ? ` data-i18n="${section.key}"` : '';
                const hasSubItems = Array.isArray(section.children) && section.children.length > 0;
                const subLinks = hasSubItems
                    ? section.children
                        .map((subItem) => {
                            const subI18nAttr = subItem.key ? ` data-i18n="${subItem.key}"` : '';
                            return `
                                <li>
                                    <a class="block py-1.5 text-sm text-[#43474d] hover:text-[#002542] dark:text-slate-300 dark:hover:text-white transition-colors" href="${subItem.href || '#'}"${subI18nAttr}>
                                        ${subItem.label || ''}
                                    </a>
                                </li>
                            `;
                        })
                        .join('')
                    : `
                        <li>
                            <a class="block py-1.5 text-sm text-[#43474d] hover:text-[#002542] dark:text-slate-300 dark:hover:text-white transition-colors" href="${section.href || '#'}"${sectionI18nAttr}>
                                ${section.label || ''}
                            </a>
                        </li>
                    `;

                return `
                    <div class="min-w-0 px-5 py-1 first:pl-0 last:pr-0 border-r border-outline-variant/20 last:border-r-0">
                        <a class="block mb-3 text-base font-semibold text-[#002542] hover:text-primary dark:text-white dark:hover:text-blue-300 transition-colors" href="${section.href || '#'}"${sectionI18nAttr}>
                            ${section.label || ''}
                        </a>
                        <ul class="space-y-1">
                            ${subLinks}
                        </ul>
                    </div>
                `;
            })
            .join('');

        const columnCount = Math.max(children.length, 1);
        return `
            <div class="grid gap-0" style="grid-template-columns: repeat(${columnCount}, minmax(0, 1fr));">
                ${columns}
            </div>
        `;
    }

    function renderTopNavItems(items) {
        return items
            .map((item) => {
                const hasChildren = Array.isArray(item.children) && item.children.length > 0;
                const i18nAttr = item.key ? ` data-i18n="${item.key}"` : '';
                const activeClass = isCurrentPage(item.href) ? 'text-[#002542] dark:text-white font-semibold' : '';
                const baseLinkClass = `text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-white ${activeClass} font-medium transition-colors`;

                if (!hasChildren) {
                    return `<a class="${baseLinkClass}" href="${item.href || '#'}"${i18nAttr}>${item.label || ''}</a>`;
                }

                return `
                    <div class="relative group h-20 flex items-center">
                        <a class="${baseLinkClass} inline-flex items-center gap-1.5" href="${item.href || '#'}"${i18nAttr}>
                            ${item.label || ''}
                            <span class="material-symbols-outlined text-base">expand_more</span>
                        </a>
                        <div class="site-mega-dropdown fixed left-0 right-0 top-20 z-40">
                            <div class="border-t border-outline-variant/30 bg-white shadow-2xl dark:bg-slate-900/95">
                                <div class="mx-auto w-full max-w-[1440px] px-6 md:px-12 py-6">
                                    ${renderMegaColumns(item.children)}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            })
            .join('');
    }

    const navLinks = renderTopNavItems(config.nav || []);

    const actions = config.actions
        .map((item) => {
            const tag = item.href ? 'a' : 'button';
            const hrefAttr = item.href ? ` href="${item.href}"` : '';
            return `
                <${tag}
                    class="${item.className}"
                    ${hrefAttr}
                    data-i18n="${item.key}"
                >${item.label}</${tag}>
            `;
        })
        .join('');

    header.innerHTML = `
        <div class="site-header-shell flex justify-between items-center max-w-[1440px] mx-auto px-6 md:px-12 h-20 gap-4">
            <a class="site-brand text-2xl font-bold tracking-tighter text-[#002542] dark:text-white uppercase" href="${config.homeHref}"${brandI18nAttr}>
                ${brandMarkup}
            </a>
            <nav class="site-header-nav hidden md:flex items-center gap-8 font-headline tracking-tight">
                ${navLinks}
            </nav>
            <div class="site-header-actions flex items-center gap-3 md:gap-6">
                <div class="lang-switcher inline-flex items-center rounded-full border border-outline-variant/30 bg-white/80 p-1">
                    <span class="material-symbols-outlined lang-switcher__icon" aria-hidden="true">public</span>
                    <button class="lang-switcher__button" type="button" data-lang="en">EN</button>
                    <button class="lang-switcher__button" type="button" data-lang="ar">AR</button>
                </div>
                ${actions}
            </div>
        </div>
    `;

    const navEl = header.querySelector('.site-header-nav');
    if (navEl) {
        setupMegaNavDismissOnNavigate(header, navEl);
    }
}

function setupMegaNavDismissOnNavigate(siteHeader, navEl) {
    const hideClass = 'site-mega-force-hide';

    navEl.querySelectorAll('.site-mega-dropdown a[href]').forEach((link) => {
        link.addEventListener('click', () => {
            siteHeader.classList.add(hideClass);
            if (document.activeElement === link) {
                link.blur();
            }
        });
    });

    navEl.addEventListener('mouseleave', () => {
        siteHeader.classList.remove(hideClass);
    });
}

function createSiteFooter() {
    const footer = document.querySelector('[data-site-footer]');
    if (!footer) return;

    footer.className = 'bg-[#f3f4f5] dark:bg-slate-900 font-body text-sm tracking-wide leading-relaxed';
    footer.innerHTML = `
        <div class="max-w-[1440px] mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-start gap-8">
            <div class="max-w-xs">
                <div class="mb-6">
                    <img class="h-10 w-auto object-contain" src="assets/images/logo_black.png" alt="Opulent Prime" />
                </div>
                <p class="text-[#43474d] dark:text-slate-400 mb-8" data-i18n="footerText">
                    An Opulent Group entity. Designing wealth allocation through architectural precision and regional stability since 2010.
                </p>
                <div class="flex gap-4">
                    <a class="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                        <span class="material-symbols-outlined text-lg">public</span>
                    </a>
                    <a class="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                        <span class="material-symbols-outlined text-lg">business_center</span>
                    </a>
                </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-16">
                <div>
                    <h4 class="font-bold text-primary dark:text-blue-400 mb-6 uppercase tracking-widest text-xs" data-i18n="footerModel">Model</h4>
                    <ul class="space-y-4">
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="index.html#ecosystem" data-i18n="footerModel1">Disciplined Execution</a></li>
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="index.html#vision" data-i18n="footerModel2">Asset Allocation</a></li>
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="index.html#contact" data-i18n="footerModel3">Compliance</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-primary dark:text-blue-400 mb-6 uppercase tracking-widest text-xs" data-i18n="footerRegions">Regions</h4>
                    <ul class="space-y-4">
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="index.html#uae-advantage" data-i18n="footerRegions1">Dubai DWC</a></li>
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="index.html#hero" data-i18n="footerRegions2">Global Network</a></li>
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="index.html#uae-advantage" data-i18n="footerRegions3">UAE Advantage</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-primary dark:text-blue-400 mb-6 uppercase tracking-widest text-xs" data-i18n="footerGroup">Group</h4>
                    <ul class="space-y-4">
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="about.html" data-i18n="footerGroup1">Opulent Group</a></li>
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="index.html#contact" data-i18n="footerGroup2">Career Opportunities</a></li>
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="index.html#contact" data-i18n="footerGroup3">Contact Terminal</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="max-w-[1440px] mx-auto px-6 md:px-12 py-8 border-t border-outline-variant/10 text-xs text-[#43474d] dark:text-slate-500 flex justify-between items-center gap-4 flex-col md:flex-row">
            <span data-i18n="footerBottom">© 2024 Opulent Prime Investment DWC LLC. All rights reserved. Diversify intelligently.</span>
            <span class="font-bold tracking-widest text-primary/40 uppercase" data-i18n="footerMark">OPULENT GROUP</span>
        </div>
    `;
}

function applyTranslations(language, translations) {
    const dictionary = translations[language] || translations.en || {};
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('is-rtl', language === 'ar');

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        if (!(key in dictionary)) return;
        element.textContent = dictionary[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
        const key = element.dataset.i18nHtml;
        if (!(key in dictionary)) return;
        element.innerHTML = dictionary[key];
    });

    const title = document.querySelector('title');
    if (title && dictionary.pageTitle) {
        title.textContent = dictionary.pageTitle;
    }

    document.querySelectorAll('.lang-switcher__button').forEach((button) => {
        const isActive = button.dataset.lang === language;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    document.querySelectorAll('.lang-switcher').forEach((switcher) => {
        switcher.dataset.activeLang = language;
        const icon = switcher.querySelector('.lang-switcher__icon');
        if (!icon) return;
        icon.textContent = 'public';
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const target = anchor.getAttribute('href');
            if (!target || target === '#') return;

            const section = document.querySelector(target);
            if (!section) return;

            event.preventDefault();
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

function setupLanguageSwitcher(translations) {
    const savedLanguage = localStorage.getItem('opulent-language');
    const initialLanguage = savedLanguage && translations[savedLanguage] ? savedLanguage : 'en';

    applyTranslations(initialLanguage, translations);

    document.querySelectorAll('.lang-switcher__button').forEach((button) => {
        button.addEventListener('click', () => {
            const nextLanguage = button.dataset.lang;
            if (!translations[nextLanguage]) return;
            localStorage.setItem('opulent-language', nextLanguage);
            applyTranslations(nextLanguage, translations);
        });
    });
}

window.OpulentSite = {
    init(config) {
        document.addEventListener('DOMContentLoaded', () => {
            createSiteHeader(config.header);
            createSiteFooter();
            setupSmoothScroll();
            setupLanguageSwitcher(config.translations);
        });
    }
};
