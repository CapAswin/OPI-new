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
                href: 'insight.html',
                key: 'navPageInsights',
                label: 'Insights',
                children: [
                    { href: 'insight.html#insight-hero', key: 'navInsightHero', label: 'Hero' },
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
                href: 'aml.html',
                key: 'navPageAml',
                label: 'AML'
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
            pageTitle: 'Our Team | Opulent Prime',
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
            navAboutPhilosophy: 'Investment Philosophy',
            navAboutSolutions: 'Strategic Solutions',
            navAboutStrategy: 'Execution Strategy',
            navAboutContact: 'Contact',
            navPageContact: 'Contact',
            navContactInquiry: 'Investor Relations Inquiry',
            navCta: 'Request Consultation',
            teamsHeroEyebrow: 'The architects of wealth',
            teamsHeroTitle: 'Expertise driven by institutional integrity.',
            teamsHeroText:
                'Meet the visionary leaders and specialist advisors dedicated to safeguarding and accelerating your legacy through Opulent Prime\'s disciplined capital and architectural wealth strategy.',
            teamsSectionExec: 'Executive leadership',
            teamsExecBlurb:
                'The core architects of Opulent Prime, steering the firm toward precision-based growth and generational stability.',
            teamsCeoBio:
                'With over three decades of institutional experience, Muhammad Asif Pervaiz architected the firm\'s foundational principles of stability and disciplined risk management.',
            teamsSectionAD: 'Associate Directors',
            teamsADIntro: 'Specialist strategists',
            teamsAD1Focus: 'Strategic asset allocation',
            teamsAD2Focus: 'Portfolio management',
            teamsAD3Focus: 'Institutional advisory',
            teamsAD4Focus: 'Economic research',
            teamsAD5Focus: 'Compliance & risk',
            teamsAD6Focus: 'Global market operations',
            teamsSMEyebrow: 'Relationship leadership',
            teamsSectionSM: 'Client Success Managers',
            teamsSMIntro:
                'Our client success leadership ensures that every relationship is seamless, professional, and aligned with long-term capital objectives.',
            teamsSMLiaison: 'Dedicated liaison',
            teamsSM1Role: 'Regional Sales Manager',
            teamsSM2Role: 'Institutional partnerships',
            teamsSM3Role: 'HNI strategy lead',
            teamsSM4Role: 'Global accounts director',
            teamsBandCtaTitle: 'Ready to consult with our specialist team?',
            teamsBandCtaButton: 'Book a strategy session',
            teamsRole1: 'Chairman & CEO',
            teamsRole2: 'VP Managing Director',
            teamsRole3: 'Managing Director',
            footerText: 'An Opulent Group. Designing wealth allocation through architectural precision and regional stability since 2010.',
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
            contactMinimalTitle: 'Start a confidential conversation with our investment team.',
            contactMinimalText: 'Disciplined guidance for long-term capital allocation.',
            contactMinimalButton: 'Contact Our Investment Team',
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
            pageTitle: 'فريقنا | أوبولنت برايم',
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
            navPageEsg: 'ESG',
            navPageAml: 'AML',
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
            navPageTeam: 'فريقنا',
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
            teamsHeroEyebrow: 'مهندسو الثروة',
            teamsHeroTitle: 'خبرة تقودها النزاهة المؤسسية.',
            teamsHeroText:
                'تعرّف على القادة صانعي الرؤية والمستشارين المتخصصين المكرسين لحماية وترسيخ إرثك عبر رأس مال منضبط واستراتيجية ثروة معمارية لدى أوبولنت برايم.',
            teamsSectionExec: 'القيادة التنفيذية',
            teamsExecBlurb:
                'المهندسون الأساسيون لأوبولنت برايم، يوجهون المؤسسة نحو نمو دقيق واستقرار عبر الأجيال.',
            teamsCeoBio:
                'مع أكثر من ثلاثة عقود من الخبرة المؤسسية، صاغ محمد آصف برويز المبادئ الأساسية للمؤسسة: الاستقرار وإدارة المخاطر بانضباط.',
            teamsSectionAD: 'المديرون المساعدون',
            teamsADIntro: 'استراتيجيون متخصصون',
            teamsAD1Focus: 'تخصيص الأصول الاستراتيجي',
            teamsAD2Focus: 'إدارة المحافظ',
            teamsAD3Focus: 'الاستشارات المؤسسية',
            teamsAD4Focus: 'البحث الاقتصادي',
            teamsAD5Focus: 'الامتثال والمخاطر',
            teamsAD6Focus: 'عمليات الأسواق العالمية',
            teamsSMEyebrow: 'قيادة العلاقات',
            teamsSectionSM: 'مديرو نجاح العملاء',
            teamsSMIntro:
                'يضمن قادة نجاح العملاء لدينا أن تكون كل علاقة سلسة ومهنية ومتسقة مع أهداف رأس المال طويلة الأمد.',
            teamsSMLiaison: 'اتصال مخصص',
            teamsSM1Role: 'مدير مبيعات إقليمي',
            teamsSM2Role: 'شراكات مؤسسية',
            teamsSM3Role: 'قائد استراتيجية HNI',
            teamsSM4Role: 'مدير حسابات عالمي',
            teamsBandCtaTitle: 'هل تريد الاستشارة من فريقنا المتخصص؟',
            teamsBandCtaButton: 'احجز جلسة استراتيجية',
            teamsRole1: 'رئيس مجلس الإدارة والرئيس التنفيذي',
            teamsRole2: 'نائب المدير العام',
            teamsRole3: 'المدير العام',
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
            footerMark: 'أوبولنت جروب',
            contactMinimalTitle: 'ابدأ محادثة سرية مع فريق الاستثمار لدينا.',
            contactMinimalText: 'إرشاد منضبط لتخصيص رأس المال على المدى الطويل.',
            contactMinimalButton: 'تواصل مع فريق الاستثمار',
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
