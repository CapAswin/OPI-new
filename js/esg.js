document.addEventListener('DOMContentLoaded', function () {
    const accordion = document.getElementById('esg-accordion');
    if (!accordion) return;

    function setItemState(item, shouldOpen) {
        const trigger = item.querySelector('.esg-accordion-trigger');
        const body = item.querySelector('.esg-accordion-body');
        const icon = item.querySelector('.esg-accordion-icon');

        trigger.setAttribute('aria-expanded', String(shouldOpen));
        icon.style.transform = shouldOpen ? 'rotate(180deg)' : '';

        item.classList.toggle('border-primary-container', shouldOpen);
        item.classList.toggle('bg-surface-container-low', shouldOpen);
        item.classList.toggle('border-outline-variant', !shouldOpen);
        item.classList.toggle('bg-surface-container-lowest', !shouldOpen);

        if (shouldOpen) {
            body.hidden = false;
            body.style.height = '0px';
            requestAnimationFrame(function () {
                body.style.height = body.scrollHeight + 'px';
            });
            return;
        }

        body.style.height = body.scrollHeight + 'px';
        requestAnimationFrame(function () {
            body.style.height = '0px';
        });
    }

    accordion.querySelectorAll('.esg-accordion-body').forEach(function (body) {
        body.classList.remove('hidden');
        body.hidden = true;
        body.style.height = '0px';
        body.style.overflow = 'hidden';
        body.style.transition = 'height 300ms ease';
    });

    accordion.addEventListener('transitionend', function (event) {
        if (!event.target.classList.contains('esg-accordion-body') || event.propertyName !== 'height') {
            return;
        }

        const body = event.target;
        const item = body.closest('.esg-accordion-item');
        const isOpen = item.querySelector('.esg-accordion-trigger').getAttribute('aria-expanded') === 'true';

        if (isOpen) {
            body.style.height = 'auto';
        } else {
            body.hidden = true;
        }
    });

    accordion.querySelectorAll('.esg-accordion-trigger').forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            const item = trigger.closest('.esg-accordion-item');
            const body = item.querySelector('.esg-accordion-body');
            const isOpen = !body.hidden;

            accordion.querySelectorAll('.esg-accordion-item').forEach(function (el) {
                if (el !== item) {
                    setItemState(el, false);
                }
            });

            setItemState(item, !isOpen);
        });
    });

    window.addEventListener('resize', function () {
        accordion.querySelectorAll('.esg-accordion-item').forEach(function (item) {
            const trigger = item.querySelector('.esg-accordion-trigger');
            const body = item.querySelector('.esg-accordion-body');

            if (trigger.getAttribute('aria-expanded') === 'true') {
                body.style.height = 'auto';
            }
        });
    });
});

window.OpulentSite.init({
    header: {
        homeHref: 'index.html',
        brandKey: 'brand',
        brandLabel: 'Opulent Prime',
        logoSrc: 'assets/images/logo_black.png',
        logoAlt: 'Opulent Prime',
        nav: [
            {
                href: 'index.html',
                key: 'navPageHome',
                label: 'Home',
                children: [
                    { href: 'index.html', key: 'navHomeHero', label: 'Hero' },
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
                            { href: 'index.html#ecosystem-tech', key: 'navHomeEcoTech', label: 'IT & AI' }
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
                            { href: 'about.html#about-sub-marketing', key: 'navAboutMarketing', label: 'Marketing' },
                            { href: 'about.html#about-sub-ai', key: 'navAboutAI', label: 'AI Automation' }
                        ]
                    },
                    { href: 'about.html#about-philosophy', label: 'Philosophy' },
                    { href: 'about.html#about-solutions', label: 'Solutions' },
                    { href: 'about.html#about-strategy', label: 'Strategy' },
                    { href: 'contact.html', label: 'Contact' }
                ]
            },
            {
                href: 'teams.html',
                key: 'navPageTeam',
                label: 'Our Team',
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
                            { href: 'insight.html#insight-sub-governance', label: 'Governance' },
                            { href: 'insight.html#insight-sub-predictability', label: 'Predictability' },
                            { href: 'insight.html#insight-sub-mobility', label: 'Mobility' },
                            { href: 'insight.html#insight-sub-vision', label: 'Vision' }
                        ]
                    },
                    {
                        href: 'insight.html#insight-system',
                        key: 'navInsightSystem',
                        label: 'Interconnected System',
                        children: [
                            { href: 'insight.html#insight-sub-real-estate', key: 'navInsightEstate', label: 'Real Estate' },
                            { href: 'insight.html#insight-sub-technology', key: 'navInsightTech', label: 'Technology' }
                        ]
                    }
                ]
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
    },
    translations: {
        en: {
            pageTitle: 'ESG & Compliance Framework | Opulent Prime',
            brand: 'Opulent Prime',
            navPageHome: 'Home',
            navHomeHero: 'Executive Overview',
            navHomeUae: 'Strategic UAE Advantage',
            navHomeUaeGov: 'Regulatory Governance',
            navHomeUaeStability: 'Macroeconomic Stability',
            navHomeEco: 'Investment Ecosystem',
            navHomeEcoEstate: 'Prime Real Estate',
            navHomeEcoTech: 'Digital Infrastructure & AI',
            navHomeContact: 'Contact',
            navPageInsights: 'Insights',
            navPageEsg: 'ESG',
            navPageAml: 'AML',
            navInsightHero: 'Insights Overview',
            navInsightShift: 'Global Wealth Reallocation',
            navInsightSystem: 'Interconnected Value System',
            navInsightEstate: 'Real Estate Dynamics',
            navInsightTech: 'Technology Outlook',
            navPagePortfolio: 'Portfolio',
            navPortfolioHero: 'Portfolio Overview',
            navPortfolioActive: 'Current Investment Positions',
            navPortfolioEcosystem: 'Ecosystem Synergies',
            navPortfolioExpansion: 'Expansion Pipeline',
            navPageAbout: 'About Us',
            navPageTeam: 'Our Team',
            navAboutHero: 'Company Overview',
            navAboutVision: 'Strategic Vision',
            navAboutEcosystem: 'Business Ecosystem',
            navAboutMarketing: 'Marketing Advisory',
            navAboutAI: 'AI Transformation',
            navPageContact: 'Contact',
            esgHeroEyebrow: 'Responsible Capital',
            esgHeroTitle: 'ESG & Compliance Framework',
            esgHeroOrg: 'Opulent Prime Investment DWC LLC',
            esgHeroText: 'An integrated approach to environmental stewardship, social impact, and governance discipline across every investment decision.',
            esgSectionTitle: 'Three ESG pillars',
            esgPillar1Title: 'Environmental',
            esgPillar1Text: 'Prioritizing efficient assets, resource optimization, and long-horizon sustainability in portfolio design.',
            esgPillar2Title: 'Social',
            esgPillar2Text: 'Supporting inclusive growth through ethical partnerships, workforce development, and community value creation.',
            esgPillar3Title: 'Governance',
            esgPillar3Text: 'Applying transparent oversight, compliance controls, and accountable decision frameworks across operations.',
            footerText: 'An Opulent Group. Designing wealth allocation through architectural precision and regional stability since 2010.',
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
            footerGroup2: 'Career Opportunities',
            footerGroup3: 'Contact Terminal',
            footerBottom: '© 2024 Opulent Prime Investment DWC LLC. All rights reserved. Diversify intelligently.'
        },
        ar: {
            pageTitle: 'الاستدامة والمسؤولية | مجموعة أوبولنت',
            brand: 'أوبولنت برايم',
            navPageHome: 'الرئيسية',
            navHomeHero: 'البداية',
            navHomeUae: 'ميزة الإمارات',
            navHomeUaeGov: 'الحوكمة',
            navHomeUaeStability: 'الاستقرار',
            navHomeEco: 'المنظومة',
            navHomeEcoEstate: 'العقارات',
            navHomeEcoTech: 'التقنية والذكاء الاصطناعي',
            navHomeContact: 'التواصل',
            navPageAbout: 'من نحن',
            navPageInsights: 'الرؤى',
            navPageEsg: 'الاستدامة والمسؤولية',
            navPageAml: 'مكافحة غسل الأموال',
            navInsightHero: 'البداية',
            navInsightShift: 'تحول الثروة',
            navInsightSystem: 'النظام المتكامل',
            navInsightEstate: 'العقارات',
            navInsightTech: 'التقنية',
            navPagePortfolio: 'المحفظة',
            navPortfolioHero: 'نظرة عامة',
            navPortfolioActive: 'الاستثمارات النشطة',
            navPortfolioEcosystem: 'قوة المنظومة',
            navPortfolioExpansion: 'التوسع المستمر',
            navPageTeam: 'فريقنا',
            navAboutHero: 'مقدمة',
            navAboutVision: 'الرؤية',
            navAboutEcosystem: 'المنظومة',
            navAboutMarketing: 'التسويق',
            navAboutAI: 'أتمتة الذكاء الاصطناعي',
            navPageContact: 'التواصل',
            esgHeroEyebrow: 'رأس مال مسؤول',
            esgHeroTitle: 'إطار ESG والامتثال',
            esgHeroOrg: 'أوبولنت برايم للاستثمار ش.ذ.م.م',
            esgHeroText: 'نهج متكامل للاستدامة البيئية والأثر الاجتماعي والانضباط الحوكمي في كل قرار استثماري.',
            esgSectionTitle: 'ركائز ESG الثلاث',
            esgPillar1Title: 'البيئة',
            esgPillar1Text: 'إعطاء الأولوية للأصول الكفؤة وتحسين الموارد والاستدامة طويلة الأجل في تصميم المحافظ.',
            esgPillar2Title: 'المجتمع',
            esgPillar2Text: 'دعم النمو الشامل عبر شراكات أخلاقية وتطوير الكفاءات وخلق قيمة للمجتمع.',
            esgPillar3Title: 'الحوكمة',
            esgPillar3Text: 'تطبيق رقابة شفافة وضوابط امتثال وأطر مساءلة عبر جميع العمليات.',
            footerText: 'إحدى جهات مجموعة أوبولنت. نصمم توزيع الثروة بدقة معمارية واستقرار إقليمي منذ 2010.',
            footerModel: 'النموذج',
            footerModel1: 'تنفيذ منضبط',
            footerModel2: 'توزيع الأصول',
            footerModel3: 'الامتثال',
            footerRegions: 'المناطق',
            footerRegions1: 'دبي الجنوب',
            footerRegions2: 'شبكة عالمية',
            footerRegions3: 'ميزة الإمارات',
            footerGroup: 'المجموعة',
            footerGroup1: 'مجموعة أوبولنت',
            footerGroup2: 'الفرص المهنية',
            footerGroup3: 'مركز التواصل',
            footerBottom: '© 2024 أوبولنت برايم للاستثمار ش.ذ.م.م. جميع الحقوق محفوظة. نوّع بذكاء.'
        }
    }
});
