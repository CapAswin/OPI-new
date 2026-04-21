window.OpulentSite.init({
    header: {
        homeHref: 'index.html',
        brandKey: 'brand',
        brandLabel: 'Opulent Group',
        logoSrc: 'assets/images/logo_black.png',
        logoAlt: 'Opulent Group',
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
                            { href: 'insight.html#insight-sub-real-estate', key: 'navInsightEstate', label: 'Real Estate' },
                            { href: 'insight.html#insight-sub-technology', key: 'navInsightTech', label: 'Technology' }
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
                            { href: 'about.html#about-sub-marketing', key: 'navAboutMarketing', label: 'Marketing' },
                            { href: 'about.html#about-sub-ai', key: 'navAboutAI', label: 'AI Automation' }
                        ]
                    },
                    { href: 'about.html#about-philosophy', key: 'navAboutPhilosophy', label: 'Philosophy' },
                    { href: 'about.html#about-solutions', key: 'navAboutSolutions', label: 'Solutions' },
                    { href: 'about.html#about-strategy', key: 'navAboutStrategy', label: 'Strategy' },
                    { href: 'contact.html#inquiry-form', key: 'navAboutContact', label: 'Contact' }
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
            pageTitle: 'Portfolio | Opulent Group',
            brand: 'Opulent Group',
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
            navAboutHero: 'Company Overview',
            navAboutVision: 'Strategic Vision',
            navAboutEcosystem: 'Business Ecosystem',
            navAboutMarketing: 'Marketing Advisory',
            navAboutAI: 'AI Transformation',
            navAboutPhilosophy: 'Investment Philosophy',
            navAboutSolutions: 'Strategic Solutions',
            navAboutStrategy: 'Execution Strategy',
            navAboutContact: 'Contact',
            navPageContact: 'Contact',
            navContactInquiry: 'Investor Relations Inquiry',
            navCta: 'Request Consultation',
            portfolioHeroEyebrow: 'Capital Allocation',
            portfolioHeroTitle: 'Portfolio',
            portfolioHeroText:
                'How we deploy capital across real assets, hospitality, and an integrated brand ecosystem.',
            portfolioCard1Title: 'Active Investments',
            portfolioCard1Item1: 'Real estate developments',
            portfolioCard1Item2: 'Hospitality ventures',
            portfolioCard1Item3: 'Luxury asset holdings',
            portfolioCard2Title: 'Ecosystem Strength',
            portfolioCard2Text: 'Our integrated brands create internal value cycles:',
            portfolioCard2Item1: 'Marketing drives visibility',
            portfolioCard2Item2: 'Influencer ecosystem drives demand',
            portfolioCard2Item3: 'Real estate & assets capture value',
            portfolioCard3Title: 'Ongoing Expansion',
            portfolioCard3Text: 'We continuously identify:',
            portfolioCard3Item1: 'Pre-launch opportunities',
            portfolioCard3Item2: 'Undervalued assets',
            portfolioCard3Item3: 'Scalable business models',
            portfolioCtaTitle: 'Discuss allocation with our team',
            portfolioCtaText: 'We align capital with disciplined frameworks across the Opulent ecosystem.',
            portfolioCtaButton: 'Contact Our Investment Team',
            footerText: '© 2024 Opulent Group. Architectural Excellence in Global Investment.',
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
            footerMark: 'OPULENT GROUP',
            footerOffices: 'Offices',
            footerOffice1: 'London',
            footerOffice2: 'New York',
            footerOffice3: 'Singapore',
            footerGovernance: 'Governance',
            footerGov1: 'Regulatory Compliance',
            footerGov2: 'Privacy Policy',
            footerEsg: 'ESG',
            footerEsg1: 'Sustainability Report'
        },
        ar: {
            pageTitle: 'المحفظة | مجموعة أوبولنت',
            brand: 'مجموعة أوبولنت',
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
            navAboutPhilosophy: 'الفلسفة',
            navAboutSolutions: 'الحلول',
            navAboutStrategy: 'الاستراتيجية',
            navAboutContact: 'التواصل',
            navPageContact: 'التواصل',
            navContactInquiry: 'استفسار المستثمر',
            navCta: 'اطلب استشارة',
            portfolioHeroEyebrow: 'تخصيص رأس المال',
            portfolioHeroTitle: 'المحفظة',
            portfolioHeroText: 'كيف نوزع رأس المال عبر الأصول العقارية والضيافة ومنظومة علامات متكاملة.',
            portfolioCard1Title: 'الاستثمارات النشطة',
            portfolioCard1Item1: 'مشروعات تطوير عقاري',
            portfolioCard1Item2: 'مشروعات ضيافة',
            portfolioCard1Item3: 'حيازات أصول فاخرة',
            portfolioCard2Title: 'قوة المنظومة',
            portfolioCard2Text: 'علاماتنا المتكاملة تصنع دوائر قيمة داخلية:',
            portfolioCard2Item1: 'التسويق يصنع الظهور',
            portfolioCard2Item2: 'منظومة المؤثرين تولد الطلب',
            portfolioCard2Item3: 'العقارات والأصول تلتقط القيمة',
            portfolioCard3Title: 'توسع مستمر',
            portfolioCard3Text: 'نواصل تحديد:',
            portfolioCard3Item1: 'فرص ما قبل الإطلاق',
            portfolioCard3Item2: 'أصول منخفضة التقييم',
            portfolioCard3Item3: 'نماذج أعمال قابلة للتوسع',
            portfolioCtaTitle: 'ناقش التخصيص مع فريقنا',
            portfolioCtaText: 'نواءم رأس المال مع أطر منضبطة عبر منظومة أوبولنت.',
            portfolioCtaButton: 'تواصل مع فريق الاستثمار',
            footerText: '© 2024 مجموعة أوبولنت. تميز معماري في الاستثمار العالمي.',
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
            footerMark: 'أوبولنت جروب',
            footerOffices: 'المكاتب',
            footerOffice1: 'لندن',
            footerOffice2: 'نيويورك',
            footerOffice3: 'سنغافورة',
            footerGovernance: 'الحوكمة',
            footerGov1: 'الامتثال التنظيمي',
            footerGov2: 'سياسة الخصوصية',
            footerEsg: 'الاستدامة والمسؤولية',
            footerEsg1: 'تقرير الاستدامة'
        }
    }
});
