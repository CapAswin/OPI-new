const SITE_UI_I18N = {
    en: {
        mobileMenuTitle: 'Menu',
        mobileMenuOpen: 'Open navigation menu',
        mobileMenuClose: 'Close navigation menu',
        mobileMenuSocial: 'Connect with us',
        footerAddress:
            'Office # 804 - 8th Floor, White Swan Building, Trade Centre District, Sheikh Zayed Road, Dubai, United Arab Emirates.',
        footerLegalPrivacy: 'Privacy Policy',
        footerLegalTerms: 'Terms of Service',
        footerLegalNavLabel: 'Legal and policies',
        footerResearch: 'Research Sources',
        footerResearchTag: 'External Sites',
        footerResearchPri: 'Principles for Responsible Investment (UN PRI)',
        footerResearchGri: 'Global Reporting Initiative (GRI)',
        footerResearchTcfd: 'Task Force on Climate-related Financial Disclosures (TCFD)',
        bandCtaTitle: 'Ready to consult with our specialist team?',
        bandCtaButton: 'Book a strategy session',
        footerText:
            'An Opulent Group. Designing wealth allocation through architectural precision and regional stability since 2010.',
        footerModel: 'Model',
        footerModel1: 'Disciplined Execution',
        footerModel2: 'Asset Allocation',
        footerModel3: 'AML',
        footerRegions: 'Regions',
        footerRegions1: 'Dubai DWC',
        footerRegions2: 'Global Network',
        footerRegions3: 'UAE Advantage',
        footerGroup: 'Group',
        footerGroup1: 'Opulent Group',
        footerGroup2: 'Opportunities',
        footerGroup3: 'Contact',
        footerBottom:
            '© 2024 Opulent Prime Investment DWC LLC. All rights reserved. Diversify intelligently.',
        footerMark: 'OPULENT GROUP',
        footerConnect: 'Connect with us',
        footerHeadOfficeLabel: 'Group head office:',
        insightFocusSector: 'Focus sector',
    },
    ar: {
        mobileMenuTitle: 'القائمة',
        mobileMenuOpen: 'فتح القائمة',
        mobileMenuClose: 'إغلاق القائمة',
        mobileMenuSocial: 'تواصل معنا',
        footerAddress:
            'مكتب رقم 804، الطابق الثامن، مبنى وايت سوان، منطقة المركز التجاري، شارع الشيخ زايد، دبي، الإمارات العربية المتحدة.',
        footerLegalPrivacy: 'سياسة الخصوصية',
        footerLegalTerms: 'شروط الاستخدام',
        footerLegalAml: 'مكافحة غسل الأموال',
        footerLegalNavLabel: 'القانون والسياسات',
        footerResearch: 'مصادر البحث',
        footerResearchTag: 'مواقع خارجية',
        footerExternalNewTab: 'خارجي · يفتح في تبويب جديد',
        footerResearchPri: 'مبادئ الاستثمار المسؤول (UN PRI)',
        footerResearchGri: 'المبادرة العالمية لإعداد التقارير (GRI)',
        footerResearchTcfd: 'فريق عمل الإفصاحات المالية المتعلقة بالمناخ (TCFD)',
        bandCtaTitle: 'هل تريد الاستشارة من فريقنا المتخصص؟',
        bandCtaButton: 'احجز جلسة استراتيجية',
        footerText:
            'إحدى شركات مجموعة أوبولنت. نصمّم تخصيص الثروة بدقة معمارية واستقرار إقليمي منذ 2010.',
        footerModel: 'النموذج',
        footerModel1: 'تنفيذ منضبط',
        footerModel2: 'توزيع الأصول',
        footerModel3: 'مكافحة غسل الأموال',
        footerRegions: 'المناطق',
        footerRegions1: 'دبي الجنوب (DWC)',
        footerRegions2: 'شبكة عالمية',
        footerRegions3: 'مزايا الإمارات',
        footerGroup: 'المجموعة',
        footerGroup1: 'مجموعة أوبولنت',
        footerGroup2: 'الفرص',
        footerGroup3: 'التواصل',
        footerBottom:
            '© 2024 شركة أوبولنت برايم للاستثمار — مدينة دبي للإنترنت ذ.م.م. جميع الحقوق محفوظة. نوّع بذكاء.',
        footerMark: 'أوبولنت جروب',
        footerConnect: 'تواصل معنا',
        footerHeadOfficeLabel: 'المقر الرئيسي للمجموعة:',
        insightFocusSector: 'قطاع التركيز',
    },
};

/**
 * Home hero carousel verticals — same order as the Insights “Interconnected System” cards.
 * `field` = short sector label shown on Insights cards; `brand` / `title` / `text` stay for links & accessibility.
 */
const SITE_HOME_ECOSYSTEM_CARDS = [
    {
        href: 'portfolio.html',
        en: {
            field: 'Real estate',
            brand: 'Opulent Prime Properties',
            title: 'Own the Future of Dubai',
            text: 'Prime real estate opportunities curated for global investors seeking stability, growth, and legacy returns.'
        },
        ar: {
            field: 'العقارات الفاخرة',
            brand: 'أوبولنت برايم العقارية',
            title: 'امتلك مستقبل دبي',
            text: 'فرص عقارية مميزة مختارة للمستثمرين العالميين الباحثين عن الاستقرار والنمو وعوائد الإرث.'
        }
    },
    {
        href: 'portfolio.html',
        en: {
            field: 'Interiors',
            brand: 'Opulent Interiors',
            title: 'Capital. Curated. Elevated.',
            text: 'Connecting global investors to diversified, high-performance opportunities across luxury and innovation.'
        },
        ar: {
            field: 'التصاميم الداخلية الفاخرة',
            brand: 'أوبولنت للتصاميم الداخلية',
            title: 'رأس مال مُنتقى. مُصاغ بعناية. مُرتقى.',
            text: 'نربط المستثمرين العالميين بفرص متنوعة عالية الأداء عبر الفخامة والابتكار.'
        }
    },
    {
        href: 'portfolio.html',
        en: {
            field: 'Luxury cars',
            brand: 'Opulent Luxury Cars',
            title: 'Drive the Extraordinary',
            text: 'Access elite luxury vehicles for lifestyle, investment, and high-performance experiences.'
        },
        ar: {
            field: 'السيارات الفاخرة',
            brand: 'أوبولنت للسيارات الفاخرة',
            title: 'قد السيارة الاستثنائية',
            text: 'وصول إلى سيارات فاخرة للنمط الحياتي والاستثمار وتجارب الأداء العالي.'
        }
    },
    {
        href: 'portfolio.html',
        en: {
            field: 'Digital marketing',
            brand: 'ULEGENDARY DIGITAL',
            title: 'Where Brands Become Powerhouses',
            text: 'Strategic digital growth and performance marketing designed to scale businesses beyond limits.'
        },
        ar: {
            field: 'التسويق الرقمي',
            brand: 'ULEGENDARY DIGITAL',
            title: 'حيث تصبح العلامات قوى مؤثرة',
            text: 'نمو رقمي استراتيجي وتسويق أداء مصمم لتوسيع الأعمال بلا حدود.'
        }
    },
    {
        href: 'portfolio.html',
        en: {
            field: 'AI & social intelligence',
            brand: 'PostMate.ai',
            title: 'The Future of Social Intelligence',
            text: 'A next-generation AI platform redefining how content is created, managed, and scaled.'
        },
        ar: {
            field: 'الذكاء الاصطناعي والاجتماعي',
            brand: 'PostMate.ai',
            title: 'مستقبل الذكاء الاجتماعي',
            text: 'منصة ذكاء اصطناعي من الجيل القادم تعيد تعريف إنشاء المحتوى وإدارته وتوسيعه.'
        }
    },
    {
        href: 'portfolio.html#portfolio-ecosystem',
        en: {
            field: 'Influencers & creators',
            brand: 'Opulent Influencers House',
            title: 'Influence, Engineered',
            text: 'A powerful ecosystem where creators, brands, and audiences converge to build authority and impact.'
        },
        ar: {
            field: 'المؤثرون والمبدعون',
            brand: 'أوبولنت إنفلونسرز هاوس',
            title: 'تأثير مُهندَس',
            text: 'منظومة قوية تلتقي فيها المواهب والعلامات والجماهير لبناء النفوذ والأثر.'
        }
    },
    {
        href: 'contact.html',
        en: {
            field: 'Mortgages',
            brand: 'Opulent Prime Mortgages',
            title: 'Financing Made Effortless',
            text: 'Seamless mortgage solutions for on-market and off-market properties, tailored for smart investors.'
        },
        ar: {
            field: 'الرهون العقارية',
            brand: 'أوبولنت برايم للرهن العقاري',
            title: 'تمويل بلا تعقيد',
            text: 'حلول رهن سلسة لعقارات داخل وخارج السوق، مصممة للمستثمرين الأذكياء.'
        }
    },
    {
        href: 'portfolio.html',
        en: {
            field: 'Luxury watches',
            brand: 'Opulent Luxury Watches',
            title: 'Timepieces That Outperform Time',
            text: 'Invest in rare and iconic watches that combine heritage, prestige, and appreciating value.'
        },
        ar: {
            field: 'الساعات الفاخرة',
            brand: 'أوبولنت للساعات الفاخرة',
            title: 'ساعات تتفوّق على الزمن',
            text: 'استثمر في ساعات نادرة وأيقونية تجمع بين الإرث والهيبة والقيمة المتنامية.'
        }
    },
    {
        href: 'portfolio.html',
        en: {
            field: 'Exclusive watches',
            brand: 'Aurelion Vantier',
            title: 'Rarity Beyond Time',
            text: 'Ultra-exclusive timepieces — limited to 100 globally, crafted for collectors who define legacy.'
        },
        ar: {
            field: 'ساعات حصرية',
            brand: 'أوريليون فانتييه',
            title: 'ندرة تتجاوز الزمن',
            text: 'ساعات فائقة الحصرية — محدودة إلى 100 قطعة عالمياً، صُممت لهواة جمع يصنعون الإرث.'
        }
    }
];

function mergePageTranslationsWithSiteUi(pageTranslations) {
    const page = pageTranslations && typeof pageTranslations === 'object' ? pageTranslations : {};
    return {
        en: { ...SITE_UI_I18N.en, ...(page.en || {}) },
        ar: { ...SITE_UI_I18N.ar, ...(page.ar || {}) }
    };
}

/** Single source for main-site header structure; pages may pass a partial `header` to override fields (e.g. brand). */
const SITE_DEFAULT_HEADER = {
    homeHref: 'index.html',
    brandKey: 'brand',
    brandLabel: 'Opulent Prime',
    logoSrc: 'assets/images/logos/logo_black.png',
    logoAlt: 'Opulent Prime',
    nav: [
        {
            href: 'index.html',
            key: 'navPageHome',
            label: 'Home',
            children: [
                {
                    href: 'index.html#uae-advantage',
                    key: 'navHomeUae',
                    label: 'UAE Advantage',
                    children: [
                        { href: 'index.html#uae-advantage', key: 'navHomeUaeGov', label: 'Governance' },
                        { href: 'index.html#uae-advantage', key: 'navHomeUaeStability', label: 'Stability' }
                    ]
                },
                {
                    href: 'index.html#ecosystem',
                    key: 'navHomeEco',
                    label: 'Ecosystem',
                    children: [
                        { href: 'index.html#ecosystem', key: 'navHomeEcoEstate', label: 'Real Estate' },
                        { href: 'index.html#ecosystem', key: 'navHomeEcoTech', label: 'IT & AI' }
                    ]
                },
                { href: 'contact.html', key: 'navHomeContact', label: 'Contact' }
            ]
        },
        {
            href: 'about.html',
            key: 'navPageAbout',
            label: 'About Us',
            children: [
                { href: 'about.html', key: 'navAboutHero', label: 'About Intro' },
                { href: 'about.html#vision', key: 'navAboutVision', label: 'Vision' },
                {
                    href: 'about.html#ecosystem',
                    key: 'navAboutEcosystem',
                    label: 'Ecosystem',
                    children: [
                        { href: 'about.html#ecosystem', key: 'navAboutMarketing', label: 'Marketing' },
                        { href: 'about.html#ecosystem', key: 'navAboutAI', label: 'AI Automation' }
                    ]
                },
                { href: 'about.html#about-philosophy', key: 'navAboutPhilosophy', label: 'Philosophy' },
                { href: 'about.html#about-solutions', key: 'navAboutSolutions', label: 'Solutions' },
                { href: 'about.html#about-strategy', key: 'navAboutStrategy', label: 'Strategy' },
                { href: 'contact.html', key: 'navAboutContact', label: 'Contact' }
            ]
        },
        {
            href: 'teams.html',
            key: 'navPageTeam',
            label: 'Our Team'
        },
        {
            href: 'portfolio.html',
            key: 'navPagePortfolio',
            label: 'Portfolio',
            children: [
                { href: 'portfolio.html#portfolio-hero', key: 'navPortfolioHero', label: 'Overview' },
                {
                    href: 'portfolio.html#portfolio',
                    key: 'navPortfolioActive',
                    label: 'Active Investments'
                },
                {
                    href: 'portfolio.html#portfolio-ecosystem',
                    key: 'navPortfolioEcosystem',
                    label: 'Ecosystem Strength'
                },
                {
                    href: 'portfolio.html#portfolio-expansion',
                    key: 'navPortfolioExpansion',
                    label: 'Expansion Pipeline'
                }
            ]
        },
        {
            href: 'insight.html',
            key: 'navPageInsights',
            label: 'Insights',
            children: [
                { href: 'insight.html', key: 'navInsightHero', label: 'Hero' },
                {
                    href: 'insight.html#insight-shift',
                    key: 'navInsightShift',
                    label: 'Wealth Shift',
                    children: [
                        { href: 'insight.html#insight-shift', label: 'Governance' },
                        { href: 'insight.html#insight-shift', label: 'Predictability' },
                        { href: 'insight.html#insight-shift', label: 'Mobility' },
                        { href: 'insight.html#insight-shift', label: 'Vision' }
                    ]
                },
                {
                    href: 'insight.html#insight-system',
                    key: 'navInsightSystem',
                    label: 'Interconnected System',
                    children: [
                        { href: 'insight.html#insight-system', key: 'navInsightEstate', label: 'Real Estate' },
                        { href: 'insight.html#insight-system', key: 'navInsightTech', label: 'Technology' }
                    ]
                }
            ]
        },
        {
            href: 'blog.html',
            key: 'navPageBlog',
            label: 'Blog'
        },
        {
            href: 'esg.html',
            key: 'navPageEsg',
            label: 'ESG'
        },
        {
            href: 'contact.html',
            key: 'navPageContact',
            label: 'Contact'
        }
    ],
    actions: []
};

function resolveSiteHeader(userHeader) {
    if (userHeader === undefined) {
        return SITE_DEFAULT_HEADER;
    }
    const h = userHeader && typeof userHeader === 'object' ? userHeader : {};
    return {
        ...SITE_DEFAULT_HEADER,
        ...h,
        nav: h.nav !== undefined ? h.nav : SITE_DEFAULT_HEADER.nav,
        actions: h.actions !== undefined ? h.actions : SITE_DEFAULT_HEADER.actions
    };
}

// Mega sub-nav (desktop dropdown) feature flag.
// Disabled for now; keep code for future re-enable.
const ENABLE_MEGA_SUB_NAV = false;

function updateSiteHeaderHeight() {
    const header = document.querySelector('[data-site-header]');
    if (!header) return;

    const headerRect = header.getBoundingClientRect();
    const headerHeight = Math.max(0, Math.ceil(headerRect.height || 0));
    if (headerHeight) {
        document.documentElement.style.setProperty('--site-header-height', `${headerHeight}px`);
    }

    const nav = header.querySelector('.site-header-nav');
    const navBottom = nav
        ? Math.max(0, Math.ceil(nav.getBoundingClientRect().bottom || 0))
        : headerHeight;

    if (navBottom) {
        document.documentElement.style.setProperty('--site-nav-bottom', `${navBottom}px`);
    }
}

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
        ? `<img class="object-contain" src="${config.logoSrc}" alt="${config.logoAlt || config.brandLabel}" />`
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
                const isActive = isCurrentPage(item.href);
                const activeClass = isActive ? 'is-active' : '';
                const currentAttr = isActive ? ' aria-current="page"' : '';
                const baseLinkClass = `site-nav-link ${activeClass}`;

                if (!hasChildren) {
                    return `<a class="${baseLinkClass}" href="${item.href || '#'}"${i18nAttr}${currentAttr}>${item.label || ''}</a>`;
                }

                return `
                    <div class="relative group flex h-full items-center">
                        <a class="${baseLinkClass} inline-flex items-center gap-1" href="${item.href || '#'}"${i18nAttr}${currentAttr}>
                            ${item.label || ''}
                        </a>
                        <div class="site-mega-dropdown">
                            <div class="border-t border-outline-variant/20 bg-white shadow-lg dark:bg-slate-900/95">
                                <div class="mx-auto w-full max-w-[1440px] px-4 md:px-10 py-5">
                                    ${renderMegaColumns(item.children)}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            })
            .join('');
    }

    function renderMobileNavItems(items) {
        // Mobile menu: top-level only (no subcategories for now).
        return items
            .map((item) => {
                const i18nAttr = item.key ? ` data-i18n="${item.key}"` : '';
                return `
                    <div class="site-mobile-nav__details">
                        <a class="site-mobile-nav__summary site-mobile-nav__summary--link" href="${item.href || '#'}"${i18nAttr}>
                            ${item.label || ''}
                        </a>
                    </div>
                `;
            })
            .join('');
    }

    const navLinks = renderTopNavItems(config.nav || []);
    const mobileNavLinks = renderMobileNavItems(config.nav || []);

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
        <div class="site-header-shell flex justify-between items-center max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-2 min-h-[80px] gap-3">
            <a class="site-brand text-base sm:text-lg font-semibold tracking-tight text-[#002542] dark:text-white" href="${config.homeHref}"${brandI18nAttr}>
                ${brandMarkup}
            </a>
            <nav class="site-header-nav hidden lg:flex items-center gap-0.5 md:gap-1 font-headline tracking-tight">
                ${navLinks}
            </nav>
            <div class="site-header-actions flex items-center gap-1 sm:gap-2">
                <div class="lang-switcher relative inline-flex items-center">
                    <button class="lang-switcher__trigger" type="button" data-lang-trigger aria-label="Open language selector" aria-expanded="false">
                        <span class="material-symbols-outlined lang-switcher__icon" aria-hidden="true">language</span>
                    </button>
                    <div class="lang-switcher__menu-mobile" data-lang-menu>
                        <button class="lang-switcher__button lang-switcher__button--mobile" type="button" data-lang="en">English</button>
                        <button class="lang-switcher__button lang-switcher__button--mobile" type="button" data-lang="ar">العربية</button>
                    </div>
                </div>
                <button class="site-mobile-menu-button lg:hidden" type="button" data-mobile-menu-toggle aria-label="Open navigation menu" aria-expanded="false">
                    <span class="material-symbols-outlined" aria-hidden="true">menu</span>
                </button>
                ${actions}
            </div>
        </div>
        <div class="site-mobile-menu lg:hidden" data-mobile-menu>
            <div class="site-mobile-menu__panel">
                <div class="site-mobile-menu__head">
                    <span class="site-mobile-menu__title" data-i18n="mobileMenuTitle">Menu</span>
                    <button class="site-mobile-menu__close" type="button" data-mobile-menu-close aria-label="Close navigation menu">
                        <span class="material-symbols-outlined" aria-hidden="true">close</span>
                    </button>
                </div>
                <div class="site-mobile-menu__scroll">
                    <nav class="site-mobile-nav" data-mobile-menu-nav>
                        ${mobileNavLinks}
                    </nav>
                </div>
                <div class="site-mobile-menu__foot">
                    <p class="site-mobile-menu__social-label" data-i18n="mobileMenuSocial">Connect with us</p>
                    <div class="site-footer-social site-mobile-menu__social" aria-label="Social links">
                        ${renderFooterSocialLinks()}
                    </div>
                </div>
            </div>
        </div>
    `;

    header.classList.toggle('site-mega-disabled', !ENABLE_MEGA_SUB_NAV);

    const navEl = header.querySelector('.site-header-nav');
    if (navEl) {
        // NOTE: Mega sub-nav is disabled for now. Turn ENABLE_MEGA_SUB_NAV back on
        // to restore the hover/focus dropdown behavior.
        if (ENABLE_MEGA_SUB_NAV) {
            setupMegaNavDismissOnNavigate(header, navEl);
        }
    }
}

function setupMobileMenu() {
    const menu = document.querySelector('[data-mobile-menu]');
    const openButton = document.querySelector('[data-mobile-menu-toggle]');
    const closeButton = document.querySelector('[data-mobile-menu-close]');
    if (!menu || !openButton || !closeButton) return;

    const htmlEl = document.documentElement;
    let savedScrollY = 0;

    function setOpenState(isOpen) {
        menu.classList.toggle('is-open', isOpen);
        openButton.setAttribute('aria-expanded', String(isOpen));
        htmlEl.classList.toggle('site-mobile-menu-open', isOpen);
        document.body.classList.toggle('site-mobile-menu-open', isOpen);
        document.body.classList.toggle('menu-open', isOpen);

        if (isOpen) {
            savedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${savedScrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.width = '100%';
        } else {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.width = '';
            window.requestAnimationFrame(() => {
                window.scrollTo(0, savedScrollY);
            });
        }
    }

    openButton.addEventListener('click', () => setOpenState(true));
    closeButton.addEventListener('click', () => setOpenState(false));
    menu.addEventListener('click', (event) => {
        if (event.target === menu) setOpenState(false);
    });

    menu.querySelectorAll('a[href]').forEach((link) => {
        link.addEventListener('click', () => setOpenState(false));
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1023) {
            setOpenState(false);
        }
    });
}

function setupMegaNavDismissOnNavigate(siteHeader, navEl) {
    const hideClass = 'site-mega-force-hide';
    const lockClass = 'site-mega-locked';
    const megaGroups = Array.from(navEl.querySelectorAll('.group')).filter((group) =>
        Boolean(group.querySelector('.site-mega-dropdown'))
    );

    function lockGroup(groupToOpen) {
        if (!groupToOpen) return;
        siteHeader.classList.add(lockClass);
        megaGroups.forEach((group) => {
            if (group === groupToOpen) {
                group.setAttribute('data-mega-open', 'true');
            } else {
                group.removeAttribute('data-mega-open');
            }
        });
    }

    function unlockAllGroups() {
        siteHeader.classList.remove(lockClass);
        megaGroups.forEach((group) => group.removeAttribute('data-mega-open'));
    }

    megaGroups.forEach((group) => {
        group.addEventListener('mouseenter', () => {
            lockGroup(group);
        });
        group.addEventListener('focusin', () => {
            lockGroup(group);
        });
    });

    navEl.querySelectorAll('.site-mega-dropdown a[href]').forEach((link) => {
        link.addEventListener('click', () => {
            siteHeader.classList.add(hideClass);
            if (document.activeElement === link) {
                link.blur();
            }
        });
    });

    siteHeader.addEventListener('mouseleave', () => {
        siteHeader.classList.remove(hideClass);
        unlockAllGroups();
    });

    siteHeader.addEventListener('focusout', (event) => {
        const nextFocused = event.relatedTarget;
        if (nextFocused && siteHeader.contains(nextFocused)) return;
        siteHeader.classList.remove(hideClass);
        unlockAllGroups();
    });

    siteHeader.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        siteHeader.classList.remove(hideClass);
        unlockAllGroups();
    });
}

function renderFooterSocialLinks() {
    const items = [
        {
            label: 'Email',
            href: 'mailto:desk@opinvestments.ae',
            path: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z'
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/company/opulentprimeinvestment',
            path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
        },
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/op.investments/?hl=en',
            path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
        },
        {
            label: 'Facebook',
            href: 'https://www.facebook.com/opinvestment',
            path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
        },
        {
            label: 'WhatsApp',
            href: 'https://wa.me/971554118178',
            path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'
        },
        {
            label: 'TikTok',
            href: 'https://www.tiktok.com/@opinvestments',
            path: 'M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z',
            viewBox: '0 0 448 512'
        },
    ];

    return items
        .map(
            (item) => `
        <a class="site-footer-social__link" href="${item.href}" ${item.href.startsWith('mailto') ? '' : 'target="_blank" rel="noopener noreferrer"'} aria-label="${item.label}">
            <svg class="site-footer-social__icon" viewBox="${item.viewBox || '0 0 24 24'}" fill="currentColor" aria-hidden="true"><path d="${item.path}"/></svg>
        </a>
    `
        )
        .join('');
}

function createSiteFooter() {
    const footer = document.querySelector('[data-site-footer]');
    if (!footer) return;

    footer.className = 'site-footer bg-[#f3f4f5] dark:bg-slate-900 font-body text-sm tracking-wide leading-relaxed';
    footer.innerHTML = `
        <div class="site-footer-top max-w-[1440px] mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-start gap-8">
            <div class="max-w-xs">
                <div class="mb-6">
                    <img class="h-10 w-auto object-contain" src="assets/images/logos/OPI-DWC.png" alt="Opulent Prime" />
                </div>
                <p class="text-[#43474d] dark:text-slate-400 mb-8" data-i18n="footerText">
                    An Opulent Group. Designing wealth allocation through architectural precision and regional stability since 2010.
                </p>
                <p class="mb-8 max-w-sm text-[#43474d] dark:text-slate-400">
                    <strong class="font-bold" data-i18n="footerHeadOfficeLabel">Group head office:</strong>
                    <span data-i18n="footerAddress">Office # 804 - 8th Floor, White Swan Building, Trade Centre District, Sheikh Zayed Road, Dubai, United Arab Emirates.</span>
                </p>
                <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-400 mb-3" data-i18n="footerConnect">Connect with us</p>
                    <div class="site-footer-social">
                        ${renderFooterSocialLinks()}
                    </div>
                </div>
            </div>
            <div class="site-footer-links grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 w-full md:w-auto">
                <div>
                    <h4 class="font-bold text-primary dark:text-blue-400 mb-6 uppercase tracking-widest text-xs" data-i18n="footerModel">Model</h4>
                    <ul class="space-y-4">
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="index.html#ecosystem" data-i18n="footerModel1">Disciplined Execution</a></li>
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="index.html#vision" data-i18n="footerModel2">Asset Allocation</a></li>
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="aml.html" data-i18n="footerModel3">AML</a></li>
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
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="https://opulentgroupdubai.com/" target="_blank" rel="noopener noreferrer" data-i18n="footerGroup1">Opulent Group</a></li>
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="contact.html" data-i18n="footerGroup2">Opportunities</a></li>
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="contact.html" data-i18n="footerGroup3">Contact</a></li>
                    </ul>
                </div>
                <div class="site-footer-research rounded-md border border-outline-variant/25 bg-white/65 dark:bg-slate-800/35 px-5 py-5">
                    <h4 class="site-footer-research__title font-bold text-primary dark:text-blue-300 mb-4 text-xs md:text-sm leading-tight">
                        <span data-i18n="footerResearch">Research Sources</span>
                        <span class="site-footer-research__tag" data-i18n="footerResearchTag">External Sites</span>
                    </h4>
                    <ul class="space-y-3">
                        <li>
                            <a class="site-footer-research-link group relative inline-flex items-center gap-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:focus-visible:outline-blue-400" href="https://www.unpri.org/" target="_blank" rel="noopener noreferrer" data-i18n-aria-label="footerResearchPri" aria-label="Principles for Responsible Investment (UN PRI)">
                                <span class="site-footer-research-link__url">www.unpri.org</span>
                                <span role="tooltip" data-i18n="footerResearchPri" class="pointer-events-none invisible absolute bottom-full left-1/2 z-30 mb-2 w-max max-w-[min(18rem,calc(100vw-2rem))] origin-bottom -translate-x-1/2 translate-y-2 scale-95 rounded-xl border border-slate-400/45 bg-gradient-to-b from-slate-200 to-slate-300 px-3.5 py-2 text-left text-[0.78rem] leading-snug text-slate-800 opacity-0 shadow-lg shadow-slate-500/15 backdrop-blur transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[transform,opacity] motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:transition-none motion-reduce:duration-0 motion-reduce:will-change-auto line-clamp-3 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:shadow-xl group-hover:shadow-slate-500/20 group-focus-visible:visible group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 group-focus-visible:shadow-xl group-focus-visible:shadow-slate-500/20 dark:border-slate-500/50 dark:from-slate-500 dark:to-slate-600 dark:text-slate-100 dark:shadow-black/25 dark:group-hover:shadow-black/35 dark:group-focus-visible:shadow-black/35">Principles for Responsible Investment (UN PRI)</span>
                            </a>
                        </li>
                        <li>
                            <a class="site-footer-research-link group relative inline-flex items-center gap-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:focus-visible:outline-blue-400" href="https://www.globalreporting.org/" target="_blank" rel="noopener noreferrer" data-i18n-aria-label="footerResearchGri" aria-label="Global Reporting Initiative (GRI)">
                                <span class="site-footer-research-link__url">www.globalreporting.org</span>
                                <span role="tooltip" data-i18n="footerResearchGri" class="pointer-events-none invisible absolute bottom-full left-1/2 z-30 mb-2 w-max max-w-[min(18rem,calc(100vw-2rem))] origin-bottom -translate-x-1/2 translate-y-2 scale-95 rounded-xl border border-slate-400/45 bg-gradient-to-b from-slate-200 to-slate-300 px-3.5 py-2 text-left text-[0.78rem] leading-snug text-slate-800 opacity-0 shadow-lg shadow-slate-500/15 backdrop-blur transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[transform,opacity] motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:transition-none motion-reduce:duration-0 motion-reduce:will-change-auto line-clamp-3 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:shadow-xl group-hover:shadow-slate-500/20 group-focus-visible:visible group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 group-focus-visible:shadow-xl group-focus-visible:shadow-slate-500/20 dark:border-slate-500/50 dark:from-slate-500 dark:to-slate-600 dark:text-slate-100 dark:shadow-black/25 dark:group-hover:shadow-black/35 dark:group-focus-visible:shadow-black/35">Global Reporting Initiative (GRI)</span>
                            </a>
                        </li>
                        <li>
                            <a class="site-footer-research-link group relative inline-flex items-center gap-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:focus-visible:outline-blue-400" href="https://www.fsb-tcfd.org/" target="_blank" rel="noopener noreferrer" data-i18n-aria-label="footerResearchTcfd" aria-label="Task Force on Climate-related Financial Disclosures (TCFD)">
                                <span class="site-footer-research-link__url">www.fsb-tcfd.org</span>
                                <span role="tooltip" data-i18n="footerResearchTcfd" class="pointer-events-none invisible absolute bottom-full left-1/2 z-30 mb-2 w-max max-w-[min(18rem,calc(100vw-2rem))] origin-bottom -translate-x-1/2 translate-y-2 scale-95 rounded-xl border border-slate-400/45 bg-gradient-to-b from-slate-200 to-slate-300 px-3.5 py-2 text-left text-[0.78rem] leading-snug text-slate-800 opacity-0 shadow-lg shadow-slate-500/15 backdrop-blur transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[transform,opacity] motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:transition-none motion-reduce:duration-0 motion-reduce:will-change-auto line-clamp-3 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:shadow-xl group-hover:shadow-slate-500/20 group-focus-visible:visible group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 group-focus-visible:shadow-xl group-focus-visible:shadow-slate-500/20 dark:border-slate-500/50 dark:from-slate-500 dark:to-slate-600 dark:text-slate-100 dark:shadow-black/25 dark:group-hover:shadow-black/35 dark:group-focus-visible:shadow-black/35">Task Force on Climate-related Financial Disclosures (TCFD)</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="max-w-[1440px] mx-auto px-6 md:px-12 py-8 border-t border-outline-variant/10 text-xs text-[#43474d] dark:text-slate-500">
            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <span class="text-start" data-i18n="footerBottom">© 2024 Opulent Prime Investment DWC LLC. All rights reserved. Diversify intelligently.</span>
                <nav class="site-footer-legal flex flex-wrap items-center gap-x-5 gap-y-2 md:justify-end text-start" aria-label="Legal and policies">
                    <a class="text-[#43474d] hover:text-[#002542] dark:text-slate-400 dark:hover:text-blue-300 underline-offset-2 hover:underline transition-colors" href="policy.html" data-i18n="footerLegalPrivacy">Privacy Policy</a>
                    <a class="text-[#43474d] hover:text-[#002542] dark:text-slate-400 dark:hover:text-blue-300 underline-offset-2 hover:underline transition-colors" href="terms.html" data-i18n="footerLegalTerms">Terms of Service</a>
                </nav>
            </div>
        </div>
    `;

    requestAnimationFrame(updateSiteHeaderHeight);
}

function applyTranslations(language, translations) {
    const pageDict = translations[language] || translations.en || {};
    const uiDict = SITE_UI_I18N[language] || SITE_UI_I18N.en;
    const dictionary = { ...uiDict, ...pageDict };
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

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const key = element.dataset.i18nPlaceholder;
        if (!(key in dictionary)) return;
        element.setAttribute('placeholder', dictionary[key]);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
        const key = element.dataset.i18nAriaLabel;
        if (!(key in dictionary)) return;
        element.setAttribute('aria-label', dictionary[key]);
    });

    const title = document.querySelector('title');
    if (title && dictionary.pageTitle) {
        title.textContent = dictionary.pageTitle;
    }

    const openNavBtn = document.querySelector('[data-mobile-menu-toggle]');
    if (openNavBtn && dictionary.mobileMenuOpen) {
        openNavBtn.setAttribute('aria-label', dictionary.mobileMenuOpen);
    }
    const closeNavBtn = document.querySelector('[data-mobile-menu-close]');
    if (closeNavBtn && dictionary.mobileMenuClose) {
        closeNavBtn.setAttribute('aria-label', dictionary.mobileMenuClose);
    }

    const footerLegalNav = document.querySelector('.site-footer-legal');
    if (footerLegalNav && dictionary.footerLegalNavLabel) {
        footerLegalNav.setAttribute('aria-label', dictionary.footerLegalNavLabel);
    }

    document.querySelectorAll('.lang-switcher__button').forEach((button) => {
        const isActive = button.dataset.lang === language;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    document.querySelectorAll('.lang-switcher').forEach((switcher) => {
        switcher.dataset.activeLang = language;
        const icon = switcher.querySelector('.lang-switcher__icon');
        if (icon) icon.textContent = 'language';
        const label = switcher.querySelector('.lang-switcher__label');
        if (label) {
            label.textContent = language === 'ar' ? 'العربية' : 'Language';
        }
    });

    document.dispatchEvent(
        new CustomEvent('opulent:language-changed', {
            detail: { language: language }
        })
    );
}

function setupSmoothScroll() {
    const currentFile = () => window.location.pathname.split('/').pop() || 'index.html';
    const pendingHashStorageKey = 'opulent-pending-hash-navigation';

    function parseHashLink(rawHref) {
        if (!rawHref || rawHref === '#') return null;
        const hashIdx = rawHref.indexOf('#');
        if (hashIdx < 0) return null;

        const pathPart = rawHref.slice(0, hashIdx);
        const hash = rawHref.slice(hashIdx);
        if (hash.length <= 1) return null;

        const cur = currentFile();
        const targetFile = !pathPart ? cur : pathPart.split('/').pop() || 'index.html';
        return { hash, targetFile, currentFile: cur };
    }

    function scrollToHashTarget(hash, behavior) {
        const section = hash === '#hero'
            ? document.querySelector('[data-home-hero]') || document.querySelector(hash)
            : document.querySelector(hash);
        if (!section) return false;

        if (hash === '#hero') {
            const heroTop = Math.max(0, section.getBoundingClientRect().top + window.scrollY);
            window.scrollTo({
                top: heroTop,
                behavior: behavior || 'smooth'
            });
            return true;
        }

        const header = document.querySelector('[data-site-header]');
        const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height || 0) : 0;
        const targetTop = Math.max(0, section.getBoundingClientRect().top + window.scrollY - headerHeight);

        window.scrollTo({
            top: targetTop,
            behavior: behavior || 'smooth'
        });
        return true;
    }

    function consumePendingHashNavigation() {
        const pendingHash = sessionStorage.getItem(pendingHashStorageKey);
        if (!pendingHash) return;

        sessionStorage.removeItem(pendingHashStorageKey);
        window.requestAnimationFrame(() => {
            scrollToHashTarget(pendingHash, 'smooth');
        });
    }

    if (window.location.hash && window.location.hash.length > 1) {
        window.requestAnimationFrame(() => {
            scrollToHashTarget(window.location.hash, 'auto');
        });
    }
    consumePendingHashNavigation();

    document.addEventListener('click', (event) => {
        const anchor = event.target.closest('a[href*="#"]');
        if (!anchor) return;
        const raw = anchor.getAttribute('href');
        const parsed = parseHashLink(raw);
        if (!parsed) return;

        const hasExplicitPath = raw.indexOf('#') > 0;
        const isImplicitHomeHash = !hasExplicitPath;
        const hashExistsOnCurrentPage = Boolean(document.querySelector(parsed.hash));

        event.preventDefault();
        // If a nav item uses a bare hash (e.g. "#hero") from a non-home page,
        // route to home page and then scroll to the target section.
        if (isImplicitHomeHash && !hashExistsOnCurrentPage) {
            sessionStorage.setItem(pendingHashStorageKey, parsed.hash);
            window.location.assign(`index.html${parsed.hash}`);
            return;
        }

        if (parsed.targetFile === parsed.currentFile) {
            scrollToHashTarget(parsed.hash, 'smooth');
            return;
        }

        sessionStorage.setItem(pendingHashStorageKey, parsed.hash);
        window.location.assign(raw);
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
            document.querySelectorAll('.lang-switcher').forEach((switcher) => {
                switcher.classList.remove('is-open');
                const trigger = switcher.querySelector('[data-lang-trigger]');
                if (trigger) {
                    trigger.setAttribute('aria-expanded', 'false');
                }
            });
        });
    });
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

let insightEcosystemCardsLangListenerBound = false;

function mountInsightEcosystemCards() {
    const grid = document.querySelector('[data-insight-ecosystem-cards]');
    if (!grid) return;

    const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    const ui = SITE_UI_I18N[lang] || SITE_UI_I18N.en;
    const sectorEyebrow = ui.insightFocusSector || SITE_UI_I18N.en.insightFocusSector;

    grid.innerHTML = SITE_HOME_ECOSYSTEM_CARDS.map((card) => {
        const copy = card[lang] || card.en;
        const main = copy.field || copy.brand;
        const label = `${sectorEyebrow}. ${main}. ${copy.brand}`;
        return `
            <div class="flex min-h-[160px] flex-col items-start justify-start text-start bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-lg shadow-sm border border-white/10">
                <p class="m-0 mb-4 font-bold uppercase tracking-[0.12em] text-slate-400" style="font-size:10px">${escapeHtml(sectorEyebrow)}</p>
                <p class="m-0 text-white font-headline text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-tight">${escapeHtml(main)}</p>
            </div>
        `;
    }).join('');
}

function setupMobileLanguageMenu() {
    document.querySelectorAll('.lang-switcher').forEach((switcher) => {
        const trigger = switcher.querySelector('[data-lang-trigger]');
        if (!trigger) return;

        trigger.addEventListener('click', (event) => {
            event.stopPropagation();
            const willOpen = !switcher.classList.contains('is-open');
            document.querySelectorAll('.lang-switcher').forEach((item) => {
                item.classList.remove('is-open');
                const itemTrigger = item.querySelector('[data-lang-trigger]');
                if (itemTrigger) itemTrigger.setAttribute('aria-expanded', 'false');
            });
            switcher.classList.toggle('is-open', willOpen);
            trigger.setAttribute('aria-expanded', String(willOpen));
        });
    });

    document.addEventListener('click', (event) => {
        document.querySelectorAll('.lang-switcher.is-open').forEach((switcher) => {
            if (switcher.contains(event.target)) return;
            switcher.classList.remove('is-open');
            const trigger = switcher.querySelector('[data-lang-trigger]');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
    });
}

window.OpulentSite = {
    mountInsightEcosystemCards,
    init(config) {
        document.addEventListener('DOMContentLoaded', () => {
            createSiteHeader(resolveSiteHeader(config.header));
            createSiteFooter();
            updateSiteHeaderHeight();
            setupSmoothScroll();
            setupMobileMenu();
            setupMobileLanguageMenu();
            setupLanguageSwitcher(mergePageTranslationsWithSiteUi(config.translations));

            mountInsightEcosystemCards();
            if (!insightEcosystemCardsLangListenerBound) {
                insightEcosystemCardsLangListenerBound = true;
                document.addEventListener('opulent:language-changed', mountInsightEcosystemCards);
            }

            let resizeTimer = null;
            window.addEventListener('resize', () => {
                if (resizeTimer) window.clearTimeout(resizeTimer);
                resizeTimer = window.setTimeout(() => {
                    updateSiteHeaderHeight();
                }, 120);
            });
        });
    }
};
