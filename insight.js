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
                    { href: 'index.html#hero', key: 'navHomeHero', label: 'Hero' },
                    { href: 'index.html#uae-advantage', key: 'navHomeUae', label: 'UAE Advantage' },
                    { href: 'index.html#ecosystem', key: 'navHomeEco', label: 'Ecosystem' },
                    { href: 'index.html#contact', key: 'navHomeContact', label: 'Contact' }
                ]
            },
            {
                href: 'insight.html',
                key: 'navPageInsights',
                label: 'Insights',
                children: [
                    { href: '#insight-hero', key: 'navInsightHero', label: 'Hero' },
                    {
                        href: '#insight-shift',
                        key: 'navInsightShift',
                        label: 'Wealth Shift',
                        children: [
                            { href: '#insight-sub-governance', key: 'navInsightGov', label: 'Governance' },
                            { href: '#insight-sub-predictability', key: 'navInsightPredictability', label: 'Predictability' }
                        ]
                    },
                    {
                        href: '#insight-system',
                        key: 'navInsightSystem',
                        label: 'Interconnected System',
                        children: [
                            { href: '#insight-sub-real-estate', key: 'navInsightEstate', label: 'Real Estate' },
                            { href: '#insight-sub-technology', key: 'navInsightTech', label: 'Technology' }
                        ]
                    }
                ]
            },
            {
                href: 'about.html',
                key: 'navPageAbout',
                label: 'About Us',
                children: [
                    { href: 'about.html#about-us', key: 'navAboutHero', label: 'About Intro' },
                    { href: 'about.html#vision', key: 'navAboutVision', label: 'Vision' },
                    { href: 'about.html#ecosystem', key: 'navAboutEcosystem', label: 'Ecosystem' },
                    { href: 'about.html#portfolio', key: 'navAboutPortfolio', label: 'Portfolio' }
                ]
            }
        ],
        actions: [
            {
                key: 'navCta',
                label: 'Request Consultation',
                href: 'index.html#contact',
                className: 'bg-primary text-on-primary px-5 md:px-6 py-2.5 rounded-full font-semibold hover:bg-primary-container transition-all'
            }
        ]
    },
    translations: {
        en: {
            pageTitle: 'Insights | Opulent Group',
            navPageHome: 'Home',
            navHomeHero: 'Hero',
            navHomeUae: 'UAE Advantage',
            navHomeEco: 'Ecosystem',
            navHomeContact: 'Contact',
            navPageInsights: 'Insights',
            navInsightHero: 'Hero',
            navInsightShift: 'Wealth Shift',
            navInsightGov: 'Governance',
            navInsightPredictability: 'Predictability',
            navInsightSystem: 'Interconnected System',
            navInsightEstate: 'Real Estate',
            navInsightTech: 'Technology',
            navPageAbout: 'About Us',
            navAboutHero: 'About Intro',
            navAboutVision: 'Vision',
            navAboutEcosystem: 'Ecosystem',
            navAboutPortfolio: 'Portfolio',
            navCta: 'Request Consultation',
            footerText: 'An Opulent Group entity. Designing wealth allocation through architectural precision and regional stability since 2010.',
            footerModel: 'Model',
            footerModel1: 'Disciplined Execution',
            footerModel2: 'Asset Allocation',
            footerModel3: 'Compliance',
            footerRegions: 'Regions',
            footerRegions1: 'Dubai DWC',
            footerRegions2: 'Global Network',
            footerRegions3: 'UAE Advantage',
            footerGroup: 'Group',
            footerGroup1: 'Opulent Group',
            footerGroup2: 'Career Opportunities',
            footerGroup3: 'Contact Terminal',
            footerBottom: '© 2024 Opulent Prime Investment DWC LLC. All rights reserved. Diversify intelligently.',
            footerMark: 'OPULENT GROUP'
        },
        ar: {
            pageTitle: 'الرؤى | مجموعة أوبولنت',
            navPageHome: 'الرئيسية',
            navHomeHero: 'البداية',
            navHomeUae: 'ميزة الإمارات',
            navHomeEco: 'المنظومة',
            navHomeContact: 'التواصل',
            navPageInsights: 'الرؤى',
            navInsightHero: 'البداية',
            navInsightShift: 'تحول الثروة',
            navInsightGov: 'الحوكمة',
            navInsightPredictability: 'قابلية التنبؤ',
            navInsightSystem: 'النظام المتكامل',
            navInsightEstate: 'العقارات',
            navInsightTech: 'التقنية',
            navPageAbout: 'من نحن',
            navAboutHero: 'مقدمة',
            navAboutVision: 'الرؤية',
            navAboutEcosystem: 'المنظومة',
            navAboutPortfolio: 'المحفظة',
            navCta: 'اطلب استشارة',
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
            footerBottom: '© 2024 أوبولنت برايم للاستثمار ش.ذ.م.م. جميع الحقوق محفوظة. نوّع بذكاء.',
            footerMark: 'أوبولنت جروب'
        }
    }
});
