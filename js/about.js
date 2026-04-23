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
                            { href: 'index.html#uae-governance', key: 'navHomeUaeGov', label: 'Governance' },
                            { href: 'index.html#uae-stability', key: 'navHomeUaeStability', label: 'Stability' }
                        ]
                    },
                    {
                        href: 'index.html#ecosystem',
                        key: 'navHomeEco',
                        label: 'Ecosystem',
                        children: [
                            { href: 'index.html#ecosystem-estate', key: 'navHomeEcoEstate', label: 'Real Estate' },
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
                label: 'Our Team',
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
            pageTitle: 'About Us | Opulent Group',
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
            heroBrand: 'Opulent Prime Investment',
            heroTitle: 'Institutional Asset Management. Structured for the Long Term.',
            visionTitle: 'Established with a single mandate.',
            visionText: 'Founded in Dubai in 2010, Opulent Prime Investment was built on the principle that capital preservation and structured growth are not competing objectives — they are complementary disciplines. We manage multi-sector portfolios for qualified investors seeking long-term, risk-adjusted returns.',
            visionQuote: '"We do not chase yield. We engineer allocation — across asset classes, time horizons, and risk profiles — to deliver consistent, compounding value."',
            visionYears: 'Years in Operation',
            visionHeadquarters: 'Dubai, UAE',
            ecoTitle: 'Five Integrated Verticals',
            ecoText: 'Our portfolio spans five sectors, each selected for structural demand, capital efficiency, and long-term value retention.',
            eco1Title: 'Marketing & Brand Strategy',
            eco1Text: 'Institutional-grade brand positioning and demand generation — creating measurable market presence for portfolio companies.',
            eco2Title: 'Prime Real Estate',
            eco2Text: 'Direct acquisition and active management of commercial and residential assets in high-demand UAE corridors.',
            eco3Title: 'Luxury Assets',
            eco3Text: 'Allocation to tangible alternative assets with demonstrated value retention — horology, fine automotive, and collectibles.',
            eco4Title: 'Influencer & Digital Platforms',
            eco4Text: 'Proprietary digital distribution networks that generate measurable demand and brand equity across portfolio verticals.',
            eco5Title: 'Technology & AI Infrastructure',
            eco5Text: 'Exposure to AI automation, operational technology, and fintech — sectors with structural, long-cycle demand.',
            portfolioTitle: 'Portfolio Overview',
            portfolioCard1Title: 'Active Positions',
            portfolioCard1Item1: 'Real estate acquisitions and developments',
            portfolioCard1Item2: 'Hospitality asset holdings',
            portfolioCard1Item3: 'Luxury and alternative asset positions',
            portfolioCard2Title: 'Integrated Value Creation',
            portfolioCard2Text: 'Our verticals are designed to reinforce one another:',
            portfolioCard2Item1: 'Marketing builds brand equity and market reach',
            portfolioCard2Item2: 'Digital platforms generate demand across sectors',
            portfolioCard2Item3: 'Real estate and assets capture and retain value',
            portfolioCard3Title: 'Pipeline & Expansion',
            portfolioCard3Text: 'Our investment committee continuously evaluates:',
            portfolioCard3Item1: 'Pre-market and off-market opportunities',
            portfolioCard3Item2: 'Undervalued assets with structural upside',
            portfolioCard3Item3: 'Scalable platforms with defensible market positions',
            philosophyTitle: 'Investment Philosophy',
            philosophy1: 'Capital is allocated, not accumulated.',
            philosophy2: 'Risk is defined, not avoided.',
            philosophy3: 'Returns are compounded, not extracted.',
            solutionsTitle: 'Allocation Framework',
            solutionsText: 'Our investment model is governed by three structural constants and three time-horizon tiers.',
            constantsTitle: 'Structural Constants',
            constant1: 'Time Horizon',
            constant1Text: 'Duration of capital exposure',
            constant2: 'Risk Tolerance',
            constant2Text: 'Defined variance parameters',
            constant3: 'Return Profile',
            constant3Text: 'Compounded, risk-adjusted yield',
            tiersTitle: 'Investment Tiers',
            tiersHorizon: 'Horizon',
            tiersFocus: 'Mandate',
            tiersRisk: 'Risk Profile',
            tier1Name: 'Short-Term',
            tier1Focus: 'Liquidity & Capital Preservation',
            tier1Risk: 'Conservative',
            tier2Name: 'Mid-Term',
            tier2Focus: 'Diversified Growth',
            tier2Risk: 'Moderate',
            tier3Name: 'Long-Term',
            tier3Focus: 'Equity Participation & Appreciation',
            tier3Risk: 'Strategic',
            allocationShortEyebrow: '12 – 18 Months',
            allocationShortTitle: 'Short-Term Capital Deployment',
            allocationShortPoint1: 'Priority on capital liquidity and accessibility',
            allocationShortPoint2: 'Conservative risk parameters with defined downside limits',
            allocationShortPoint3: 'Fixed and semi-fixed return structures',
            allocationShortCta: 'Discuss Liquidity Options',
            allocationMidEyebrow: '18 – 24 Months',
            allocationMidTitle: 'Mid-Term Allocation',
            allocationMidPoint1: 'Balanced exposure across two or more asset classes.',
            allocationMidPoint2: 'Blended return model targeting risk-adjusted yield optimisation.',
            allocationMidCta: 'Review Allocation Structure',
            allocationLongEyebrow: '24+ Months',
            allocationLongTitle: 'Long-Term Capital Commitment',
            allocationLongText: 'Designed for investors with a multi-year mandate. This tier prioritises direct equity participation, asset appreciation, and compounding returns across extended market cycles.',
            allocationLongLabel1: 'Structure',
            allocationLongValue1: 'Equity Participation',
            allocationLongLabel2: 'Objective',
            allocationLongValue2: 'Capital Appreciation',
            coreStrategyTitle: 'Portfolio Allocation',
            coreStrategyText: 'Capital distributed across four asset classes in proportion to risk-adjusted return potential.',
            coreStrategyItem1: 'Prime Real Estate',
            coreStrategyItem2: 'Hospitality',
            coreStrategyItem3: 'Luxury Assets',
            coreStrategyItem4: 'Technology & AI',
            strategyTitle: 'Capital Deployment Model',
            strategyText: 'A structured approach to capital distribution that balances active deployment with disciplined reserve management.',
            strategy1: '60–65% Active Deployment',
            strategy1Text: 'Allocated across portfolio verticals based on current market conditions and mandate.',
            strategy2: '30–35% Capital Reserve',
            strategy2Text: 'Maintained as a liquidity buffer for risk management and opportunistic reallocation.',
            strategyModel: 'Model',
            strategyRatio: 'Deployment Ratio',
            contactTitle: 'Risk is defined. Not avoided.',
            contactText: 'Every capital movement at Opulent Prime Investment is subject to structured variance analysis. Our risk framework is not reactive — it is embedded in the allocation model from inception.',
            contactButton: 'Speak with Our Investment Team',
            footerText: 'Opulent Prime Investment DWC LLC. Institutional asset management headquartered in Dubai since 2010.',
            footerModel: 'Framework',
            footerModel1: 'Capital Allocation',
            footerModel2: 'Risk Management',
            footerModel3: 'Compliance & ESG',
            footerRegions: 'Jurisdiction',
            footerRegions1: 'Dubai DWC',
            footerRegions2: 'Global Mandate',
            footerRegions3: 'UAE Positioning',
            footerGroup: 'Firm',
            footerGroup1: 'Opulent Prime Investment',
            footerGroup2: 'Careers',
            footerGroup3: 'Investor Relations',
            footerBottom: '© 2024 Opulent Prime Investment DWC LLC. All rights reserved.',
            footerMark: 'OPULENT PRIME',
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
            pageTitle: 'من نحن | مجموعة أوبولنت',
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
            heroBrand: 'مجموعة أوبولنت',
            heroTitle: 'دقة في التنفيذ',
            visionTitle: 'الرؤية',
            visionText: 'تأسست مجموعة أوبولنت في دبي عام 2010 انطلاقاً من قناعة واضحة: الثروة الحقيقية لا تُجمع فقط، بل تُبنى عبر فهم عميق لحركة رأس المال العالمية.',
            visionQuote: '"تتجاوز مهمتنا الاستثمار التقليدي. نحن نستبق تحولات المشهد العالمي لضمان حفظ القيمة على المدى الطويل وتحقيق نمو استراتيجي لشركائنا."',
            visionYears: 'سنوات من التميز',
            visionHeadquarters: 'المقر العالمي',
            ecoTitle: 'منظومتنا',
            ecoText: 'خمسة قطاعات متكاملة صُممت لاقتناص القيمة عبر الاقتصاد العالمي الحديث.',
            eco1Title: 'التسويق',
            eco1Text: 'تموضع استراتيجي للعلامات التجارية وحملات عالية الأثر لقيادة الأسواق العالمية.',
            eco2Title: 'العقارات',
            eco2Text: 'استحواذات مؤسسية عالية العائد ومشروعات سكنية فاخرة.',
            eco3Title: 'الأصول الفاخرة',
            eco3Text: 'تنسيق استثمارات بديلة نادرة من الساعات الفاخرة إلى الأصول السيارة الراقية.',
            eco4Title: 'منصات المؤثرين',
            eco4Text: 'تسخير قوة الانتباه الرقمي عبر هياكل شبكية مملوكة.',
            eco5Title: 'أتمتة الأعمال بالذكاء الاصطناعي',
            eco5Text: 'دمج الشبكات العصبية في سير العمل التشغيلي لتحقيق أعلى كفاءة.',
            portfolioTitle: 'نظرة على المحفظة',
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
            philosophyTitle: 'الفلسفة الأساسية',
            philosophy1: 'الثروة تُخصص.',
            philosophy2: 'المخاطر تُوزع.',
            philosophy3: 'النمو يتضاعف.',
            solutionsTitle: 'حلول الاستثمار',
            solutionsText: 'يرتكز إطارنا على ثلاثة ثوابت وثلاثة مستويات محددة للتخصيص.',
            constantsTitle: 'الثوابت الثلاثة',
            constant1: 'الوقت',
            constant1Text: 'مدة التعرض',
            constant2: 'المخاطر',
            constant2Text: 'احتمال التباين',
            constant3: 'العائد',
            constant3Text: 'العائد التراكمي',
            tiersTitle: 'مستويات التخصيص',
            tiersHorizon: 'الأفق',
            tiersFocus: 'التركيز',
            tiersRisk: 'مستوى المخاطر',
            tier1Name: 'قصير المدى',
            tier1Focus: 'السيولة والزخم',
            tier1Risk: 'متوسط',
            tier2Name: 'متوسط المدى',
            tier2Focus: 'نمو متوازن',
            tier2Risk: 'منضبط',
            tier3Name: 'طويل المدى',
            tier3Focus: 'بناء ثروة مستدامة',
            tier3Risk: 'استراتيجي',
            allocationShortEyebrow: '12 إلى 18 شهراً',
            allocationShortTitle: 'منظور قصير المدى',
            allocationShortPoint1: 'التركيز على السيولة',
            allocationShortPoint2: 'مستوى مخاطر أقل',
            allocationShortPoint3: 'عوائد ثابتة/شبه ثابتة',
            allocationShortCta: 'استكشف السيولة',
            allocationMidEyebrow: '18+ إلى 24 شهراً',
            allocationMidTitle: 'تخصيص متوسط المدى',
            allocationMidPoint1: 'نمو متوازن عبر قطاعات متنوعة.',
            allocationMidPoint2: 'نموذج عوائد مختلط ومتقدم لتحسين العائد.',
            allocationMidCta: 'عرض نموذج التخصيص',
            allocationLongEyebrow: '24+ شهراً',
            allocationLongTitle: 'بناء الثروة طويلة الأجل',
            allocationLongText: 'مصمم لتحقيق نمو مؤسسي مستدام. تركز هذه الفئة على المشاركة المباشرة في الملكية والارتفاع الكبير في قيمة الأصول عبر دورات ممتدة.',
            allocationLongLabel1: 'الاستراتيجية',
            allocationLongValue1: 'بناء الثروة',
            allocationLongLabel2: 'المشاركة',
            allocationLongValue2: 'حصة ملكية',
            coreStrategyTitle: 'الاستراتيجية الأساسية والنموذج',
            coreStrategyText: 'عرض تخصيص بسيط وواضح لدعم اتخاذ القرار بسرعة.',
            coreStrategyItem1: 'عقارات متميزة',
            coreStrategyItem2: 'الضيافة',
            coreStrategyItem3: 'الأصول الفاخرة',
            coreStrategyItem4: 'تقنية المعلومات والذكاء الاصطناعي',
            strategyTitle: 'الاستراتيجية والنموذج الأساسي',
            strategyText: 'نعتمد نموذجاً منضبطاً لتوزيع رأس المال يضمن المرونة التشغيلية والملاءة طويلة الأمد.',
            strategy1: '60-65% تخصيص رأسمال نشط',
            strategy1Text: 'يوجّه إلى فرص السوق والنمو التشغيلي.',
            strategy2: '30-35% احتياطي رأسمالي',
            strategy2Text: 'يُحتفظ به لتخفيف المخاطر واقتناص الفرص الاستراتيجية.',
            strategyModel: 'النموذج',
            strategyRatio: 'نسبة A-R',
            contactTitle: 'إدارة ذكية للمخاطر',
            contactText: 'في مجموعة أوبولنت نحن لا نتجنب المخاطر، بل نُعرّفها. كل حركة لرأس المال تخضع لتحليل صارم للتباين لضمان أن يكون نمونا نتيجة محسوبة لا رهناً للصدفة.',
            contactButton: 'تواصل مع فريق الاستثمار',
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

(function initAboutCoreStrategyChart() {
    const canvas = document.getElementById('about-core-strategy-chart');
    if (!canvas || typeof window.Chart === 'undefined') return;
    const section = document.getElementById('about-strategy');
    if (!section) return;

    let chartInstance = null;

    function renderChart() {
        if (chartInstance) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        chartInstance = new window.Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Premium Real Estate', 'Hospitality', 'Luxury Assets', 'IT & AI'],
                datasets: [
                    {
                        data: [45, 29, 21, 5],
                        backgroundColor: ['#002542', '#4c616c', '#87a5ca', '#cfe6f2'],
                        borderColor: '#ffffff',
                        borderWidth: 4,
                        hoverOffset: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                cutout: '65%',
                animation: {
                    duration: 1400,
                    easing: 'easeOutQuart'
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return `${context.label}: ${context.parsed}%`;
                            }
                        }
                    }
                }
            }
        });
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                renderChart();
                observer.disconnect();
            });
        },
        { threshold: 0.35 }
    );

    observer.observe(section);
})();

(function initInvestmentModelAnimations() {
    const section = document.getElementById('investment-model');
    if (!section) return;

    let animated = false;

    function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    function animateCounter(el, from, to, duration) {
        const start = performance.now();
        function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.round(from + (to - from) * easeOutQuart(progress));
            el.textContent = value;
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    function animateProgress(bar, toPercent, duration) {
        const start = performance.now();
        function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            bar.style.width = (toPercent * easeOutQuart(progress)) + '%';
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    function runAnimations() {
        if (animated) return;
        animated = true;

        section.querySelectorAll('[data-counter]').forEach(function (el) {
            const from = parseInt(el.dataset.countFrom, 10) || 0;
            const to = parseInt(el.dataset.countTo, 10) || 0;
            animateCounter(el, from, to, 1400);
        });

        section.querySelectorAll('[data-progress-to]').forEach(function (bar) {
            const to = parseFloat(bar.dataset.progressTo) || 0;
            animateProgress(bar, to, 1400);
        });
    }

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                runAnimations();
                observer.disconnect();
            });
        },
        { threshold: 0.3 }
    );

    observer.observe(section);
})();
