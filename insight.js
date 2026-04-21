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
                    {
                        href: 'index.html#uae-advantage',
                        key: 'navHomeUae',
                        label: 'UAE Advantage',
                        children: [
                            {
                                href: 'index.html#uae-advantage',
                                key: 'navHomeUaeGov',
                                label: 'Governance'
                            },
                            {
                                href: 'index.html#uae-advantage',
                                key: 'navHomeUaeStability',
                                label: 'Stability'
                            }
                        ]
                    },
                    {
                        href: 'index.html#ecosystem',
                        key: 'navHomeEco',
                        label: 'Ecosystem',
                        children: [
                            {
                                href: 'index.html#ecosystem',
                                key: 'navHomeEcoEstate',
                                label: 'Real Estate'
                            },
                            {
                                href: 'index.html#ecosystem',
                                key: 'navHomeEcoTech',
                                label: 'IT & AI'
                            }
                        ]
                    },
                    { href: 'contact.html', key: 'navHomeContact', label: 'Contact' }
                ]
            },
            {
                href: 'insight.html',
                key: 'navPageInsights',
                label: 'Insights',
                children: [
                    { href: 'insight.html#insight-hero', key: 'navInsightHero', label: 'Hero' },
                    { href: 'insight.html#insight-shift', key: 'navInsightShift', label: 'Wealth Shift' },
                    {
                        href: 'insight.html#insight-system',
                        key: 'navInsightSystem',
                        label: 'Interconnected System',
                        children: [
                            {
                                href: 'insight.html#insight-sub-real-estate',
                                key: 'navInsightEstate',
                                label: 'Real Estate'
                            },
                            {
                                href: 'insight.html#insight-sub-technology',
                                key: 'navInsightTech',
                                label: 'Technology'
                            }
                        ]
                    }
                ]
            },
            {
                href: 'portfolio.html',
                key: 'navPagePortfolio',
                label: 'Portfolio',
                children: [
                    { href: 'portfolio.html#portfolio-hero', key: 'navPortfolioHero', label: 'Overview' },
                    {
                        href: 'portfolio.html#portfolio-active',
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
                        label: 'Ongoing Expansion'
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
                    {
                        href: 'about.html#ecosystem',
                        key: 'navAboutEcosystem',
                        label: 'Ecosystem',
                        children: [
                            {
                                href: 'about.html#about-sub-marketing',
                                key: 'navAboutMarketing',
                                label: 'Marketing'
                            },
                            {
                                href: 'about.html#about-sub-ai',
                                key: 'navAboutAI',
                                label: 'AI Automation'
                            }
                        ]
                    }
                ]
            },
            {
                href: 'contact.html',
                key: 'navPageContact',
                label: 'Contact'
            }
        ],
        actions: [
            {
                key: 'navCta',
                label: 'Request Consultation',
                href: 'contact.html',
                className:
                    'bg-primary text-on-primary px-5 md:px-6 py-2.5 rounded-full font-semibold hover:bg-primary-container transition-all'
            }
        ]
    },
    translations: {
        en: {
            pageTitle: 'Insights | Opulent Group',
            brand: 'Opulent Prime',
            navPageHome: 'Home',
            navHomeHero: 'Hero',
            navHomeUae: 'UAE Advantage',
            navHomeUaeGov: 'Governance',
            navHomeUaeStability: 'Stability',
            navHomeEco: 'Ecosystem',
            navHomeEcoEstate: 'Real Estate',
            navHomeEcoTech: 'IT & AI',
            navHomeContact: 'Contact',
            navPageInsights: 'Insights',
            navInsightHero: 'Hero',
            navInsightShift: 'Wealth Shift',
            navInsightSystem: 'Interconnected System',
            navInsightEstate: 'Real Estate',
            navInsightTech: 'Technology',
            navPagePortfolio: 'Portfolio',
            navPortfolioHero: 'Overview',
            navPortfolioActive: 'Active Investments',
            navPortfolioEcosystem: 'Ecosystem Strength',
            navPortfolioExpansion: 'Ongoing Expansion',
            navPageAbout: 'About Us',
            navAboutHero: 'About Intro',
            navAboutVision: 'Vision',
            navAboutEcosystem: 'Ecosystem',
            navAboutMarketing: 'Marketing',
            navAboutAI: 'AI Automation',
            navPageContact: 'Contact',
            navContactInquiry: 'Investor Inquiry',
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
            navPageInsights: 'الرؤى',
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
            navPageAbout: 'من نحن',
            navAboutHero: 'مقدمة',
            navAboutVision: 'الرؤية',
            navAboutEcosystem: 'المنظومة',
            navAboutMarketing: 'التسويق',
            navAboutAI: 'أتمتة الذكاء الاصطناعي',
            navPageContact: 'التواصل',
            navContactInquiry: 'استفسار المستثمر',
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
