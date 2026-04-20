function createSiteHeader(config) {
    const header = document.querySelector('[data-site-header]');
    if (!header) return;

    const navLinks = config.nav
        .map(
            (item) => `
                <a
                    class="text-[#43474d] dark:text-slate-400 font-medium hover:text-[#002542] dark:hover:text-white transition-colors"
                    href="${item.href}"
                    data-i18n="${item.key}"
                >${item.label}</a>
            `
        )
        .join('');

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
            <a class="site-brand text-2xl font-bold tracking-tighter text-[#002542] dark:text-white uppercase" href="${config.homeHref}" data-i18n="${config.brandKey}">
                ${config.brandLabel}
            </a>
            <nav class="site-header-nav hidden md:flex items-center gap-8 font-headline tracking-tight">
                ${navLinks}
            </nav>
            <div class="site-header-actions flex items-center gap-3 md:gap-6">
                <div class="lang-switcher inline-flex items-center rounded-full border border-outline-variant/30 bg-white/80 p-1">
                    <button class="lang-switcher__button" type="button" data-lang="en">EN</button>
                    <button class="lang-switcher__button" type="button" data-lang="ar">AR</button>
                </div>
                ${actions}
            </div>
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
            setupSmoothScroll();
            setupLanguageSwitcher(config.translations);
        });
    }
};
