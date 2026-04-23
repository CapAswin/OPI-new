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
        footerLegalAml: 'AML',
        footerLegalNavLabel: 'Legal and policies',
        footerResearch: 'Research Sources',
        footerResearchTag: 'External Sites',
        footerResearchPri: 'Principles for Responsible Investment (UN PRI)',
        footerResearchGri: 'Global Reporting Initiative (GRI)',
        footerResearchTcfd: 'Task Force on Climate-related Financial Disclosures (TCFD)',
        bandCtaTitle: 'Ready to consult with our specialist team?',
        bandCtaButton: 'Book a strategy session',
    },
    ar: {
        mobileMenuTitle: 'القائمة',
        mobileMenuOpen: 'فتح القائمة',
        mobileMenuClose: 'إغلاق القائمة',
        mobileMenuSocial: 'تواصل معنا',
        footerAddress:
            'مكتب رقم 804، الطابق الثامن، مبنى وايت سوان، منطقة المركز التجاري، شارع الشيخ زايد، دبي، الإمارات العربية المتحدة.',
        footerLegalPrivacy: 'سياسة الخصوصية',
        footerLegalTerms: 'شروط الخدمة',
        footerLegalAml: 'مكافحة غسل الأموال',
        footerLegalNavLabel: 'السياسات والعقود',
        footerResearch: 'مصادر البحث',
        footerResearchTag: 'مواقع خارجية',
        footerExternalNewTab: 'خارجي · يفتح في تبويب جديد',
        footerResearchPri: 'مبادئ الاستثمار المسؤول (UN PRI)',
        footerResearchGri: 'المبادرة العالمية لإعداد التقارير (GRI)',
        footerResearchTcfd: 'فريق عمل الإفصاحات المالية المتعلقة بالمناخ (TCFD)',
        bandCtaTitle: 'هل تريد الاستشارة من فريقنا المتخصص؟',
        bandCtaButton: 'احجز جلسة استراتيجية',
    },
};

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
        ? `<img class="h-9 sm:h-10 w-auto object-contain" src="${config.logoSrc}" alt="${config.logoAlt || config.brandLabel}" />`
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
        return items
            .map((item) => {
                const hasChildren = Array.isArray(item.children) && item.children.length > 0;
                const i18nAttr = item.key ? ` data-i18n="${item.key}"` : '';
                if (!hasChildren) {
                    return `
                        <div class="site-mobile-nav__details">
                            <a class="site-mobile-nav__summary site-mobile-nav__summary--link" href="${item.href || '#'}"${i18nAttr}>
                                ${item.label || ''}
                            </a>
                        </div>
                    `;
                }

                const childMarkup = item.children
                    .map((child) => {
                        const childHasChildren = Array.isArray(child.children) && child.children.length > 0;
                        const childI18nAttr = child.key ? ` data-i18n="${child.key}"` : '';
                        if (!childHasChildren) {
                            return `
                                <a class="site-mobile-nav__sublink" href="${child.href || '#'}"${childI18nAttr}>
                                    ${child.label || ''}
                                </a>
                            `;
                        }

                        const grandChildren = child.children
                            .map((grandChild) => {
                                const grandI18nAttr = grandChild.key ? ` data-i18n="${grandChild.key}"` : '';
                                return `
                                    <a class="site-mobile-nav__tertiary" href="${grandChild.href || '#'}"${grandI18nAttr}>
                                        ${grandChild.label || ''}
                                    </a>
                                `;
                            })
                            .join('');

                        return `
                            <details class="site-mobile-nav__details site-mobile-nav__details--nested">
                                <summary class="site-mobile-nav__summary site-mobile-nav__summary--nested"${childI18nAttr}>
                                    ${child.label || ''}
                                </summary>
                                <div class="site-mobile-nav__group">
                                    ${grandChildren}
                                </div>
                            </details>
                        `;
                    })
                    .join('');

                return `
                    <details class="site-mobile-nav__details">
                        <summary class="site-mobile-nav__summary"${i18nAttr}>
                            ${item.label || ''}
                        </summary>
                        <div class="site-mobile-nav__group">
                            ${childMarkup}
                        </div>
                    </details>
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

    const navEl = header.querySelector('.site-header-nav');
    if (navEl) {
        setupMegaNavDismissOnNavigate(header, navEl);
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
            label: 'LinkedIn',
            href: '#',
            path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
        },
        {
            label: 'Instagram',
            href: '#',
            path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
        },
        {
            label: 'Facebook',
            href: '#',
            path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
        },
        {
            label: 'WhatsApp',
            href: '#',
            path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'
        },
        {
            label: 'TikTok',
            href: '#',
            path: 'M12.525.02c1.31-.02 2.61-.01 3.918-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v3.6c-1.89-.35-3.78-1.39-5.06-3.03v8.03c0 4.26-3.44 7.7-7.7 7.7-4.26 0-7.7-3.44-7.7-7.7 0-4.26 3.44-7.7 7.7-7.7.14 0 .28.01.42.02V9.5c-.14-.01-.28-.02-.42-.02-2.54 0-4.6 2.06-4.6 4.6s2.06 4.6 4.6 4.6 4.6-2.06 4.6-4.6v-8.8h3.92z'
        },
    ];

    return items
        .map(
            (item) => `
        <a class="site-footer-social__link" href="${item.href}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}">
            <svg class="site-footer-social__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${item.path}"/></svg>
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
                    <img class="h-10 w-auto object-contain" src="assets/images/OPI-DWC.png" alt="Opulent Prime" />
                </div>
                <p class="text-[#43474d] dark:text-slate-400 mb-8" data-i18n="footerText">
                    An Opulent Group. Designing wealth allocation through architectural precision and regional stability since 2010.
                </p>
                <p class="mb-8 max-w-sm text-[#43474d] dark:text-slate-400" data-i18n="footerAddress">
                    Office # 804 - 8th Floor, White Swan Building, Trade Centre District, Sheikh Zayed Road, Dubai, United Arab Emirates.
                </p>
                <div class="site-footer-social">
                    ${renderFooterSocialLinks()}
                </div>
            </div>
            <div class="site-footer-links grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 w-full md:w-auto">
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
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="about.html" data-i18n="footerGroup1">Opulent Group</a></li>
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="contact.html" data-i18n="footerGroup2">Career Opportunities</a></li>
                        <li><a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="contact.html" data-i18n="footerGroup3">Contact Terminal</a></li>
                    </ul>
                </div>
                <div class="site-footer-research rounded-md border border-outline-variant/25 bg-white/65 dark:bg-slate-800/35 px-5 py-5">
                    <h4 class="site-footer-research__title font-bold text-primary dark:text-blue-300 mb-4 text-xs md:text-sm leading-tight">
                        <span data-i18n="footerResearch">Research Sources</span>
                        <span class="site-footer-research__tag" data-i18n="footerResearchTag">External Sites</span>
                    </h4>
                    <ul class="space-y-4">
                        <li>
                            <a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="https://www.unpri.org/" target="_blank" rel="noopener noreferrer" aria-label="مبادئ الاستثمار المسؤول (يفتح في تبويب جديد)">
                                <span data-i18n="footerResearchPri">Principles for Responsible Investment (UN PRI)</span>
                            </a>
                        </li>
                        <li>
                            <a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="https://www.globalreporting.org/" target="_blank" rel="noopener noreferrer" aria-label="المبادرة العالمية لإعداد التقارير (يفتح في تبويب جديد)">
                                <span data-i18n="footerResearchGri">Global Reporting Initiative (GRI)</span>
                            </a>
                        </li>
                        <li>
                            <a class="text-[#43474d] dark:text-slate-400 hover:text-[#002542] dark:hover:text-blue-300 transition-colors" href="https://www.fsb-tcfd.org/" target="_blank" rel="noopener noreferrer" aria-label="فريق عمل الإفصاحات المالية المتعلقة بالمناخ (يفتح في تبويب جديد)">
                                <span data-i18n="footerResearchTcfd">Task Force on Climate-related Financial Disclosures (TCFD)</span>
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
                    <a class="text-[#43474d] hover:text-[#002542] dark:text-slate-400 dark:hover:text-blue-300 underline-offset-2 hover:underline transition-colors" href="aml.html" data-i18n="footerLegalAml">AML</a>
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
    init(config) {
        document.addEventListener('DOMContentLoaded', () => {
            createSiteHeader(config.header);
            createSiteFooter();
            updateSiteHeaderHeight();
            setupSmoothScroll();
            setupMobileMenu();
            setupMobileLanguageMenu();
            setupLanguageSwitcher(config.translations);

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
