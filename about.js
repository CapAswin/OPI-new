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
                    { href: '#about-us', key: 'navAboutHero', label: 'About Intro' },
                    { href: '#vision', key: 'navAboutVision', label: 'Vision' },
                    {
                        href: '#ecosystem',
                        key: 'navAboutEcosystem',
                        label: 'Ecosystem',
                        children: [
                            { href: '#about-sub-marketing', key: 'navAboutMarketing', label: 'Marketing' },
                            { href: '#about-sub-ai', key: 'navAboutAI', label: 'AI Automation' }
                        ]
                    },
                    { href: '#about-philosophy', key: 'navAboutPhilosophy', label: 'Philosophy' },
                    { href: '#about-solutions', key: 'navAboutSolutions', label: 'Solutions' },
                    { href: '#about-strategy', key: 'navAboutStrategy', label: 'Strategy' },
                    { href: 'contact.html#inquiry-form', key: 'navAboutContact', label: 'Contact' }
                ]
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
            heroBrand: 'Opulent Group',
            heroTitle: 'Precision in Execution',
            visionTitle: 'The Vision',
            visionText: 'Established in 2010 in Dubai, Opulent Group was founded on a singular realization: true wealth is not merely accumulated, it is architected through a deep understanding of global capital movement.',
            visionQuote: '"Our mission transcends traditional investment. We anticipate shifts in the global landscape to ensure long-term value preservation and strategic growth for our partners."',
            visionYears: 'Years of Excellence',
            visionHeadquarters: 'Global Headquarters',
            ecoTitle: 'Our Ecosystem',
            ecoText: 'Five integrated verticals designed to capture value across the modern global economy.',
            eco1Title: 'Marketing',
            eco1Text: 'Strategic brand positioning and high-impact outreach for global market dominance.',
            eco2Title: 'Real Estate',
            eco2Text: 'High-yield institutional acquisitions and residential luxury developments.',
            eco3Title: 'Luxury Assets',
            eco3Text: 'Curating rare alternative investments from horology to fine automotive assets.',
            eco4Title: 'Influencer Platforms',
            eco4Text: 'Harnessing the power of digital attention through proprietary network structures.',
            eco5Title: 'AI Business Automation',
            eco5Text: 'Integrating neural networks into operational workflows for peak efficiency.',
            portfolioTitle: 'Portfolio Overview',
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
            philosophyTitle: 'Core Philosophy',
            philosophy1: 'Wealth is allocated.',
            philosophy2: 'Risk is distributed.',
            philosophy3: 'Growth is compounded.',
            solutionsTitle: 'Investment Solutions',
            solutionsText: 'Our framework is built upon three constants and three specific allocation tiers.',
            constantsTitle: 'The Three Constants',
            constant1: 'Time',
            constant1Text: 'Duration of exposure',
            constant2: 'Risk',
            constant2Text: 'Probability of variance',
            constant3: 'Return',
            constant3Text: 'Compounded yield',
            tiersTitle: 'Allocation Tiers',
            tiersHorizon: 'Horizon',
            tiersFocus: 'Focus',
            tiersRisk: 'Risk Profile',
            tier1Name: 'Short-Term',
            tier1Focus: 'Liquidity & Momentum',
            tier1Risk: 'Moderate',
            tier2Name: 'Mid-Term',
            tier2Focus: 'Balanced Growth',
            tier2Risk: 'Controlled',
            tier3Name: 'Long-Term',
            tier3Focus: 'Legacy Wealth Building',
            tier3Risk: 'Strategic',
            allocationShortEyebrow: '12 to 18 Months',
            allocationShortTitle: 'Short-Term Perspective',
            allocationShortPoint1: 'Focus on liquidity',
            allocationShortPoint2: 'Lower risk profile',
            allocationShortPoint3: 'Fixed/semi-fixed returns',
            allocationShortCta: 'Explore Liquidity',
            allocationMidEyebrow: '18+ to 24 Months',
            allocationMidTitle: 'Mid-Term Allocation',
            allocationMidPoint1: 'Balanced growth across diversified sectors.',
            allocationMidPoint2: 'Sophisticated mixed return model for optimized yield.',
            allocationMidCta: 'View Allocation Model',
            allocationLongEyebrow: '24+ Months',
            allocationLongTitle: 'Long-Term Wealth Creation',
            allocationLongText: 'Designed for enduring institutional-grade growth. This tier prioritizes direct equity participation and significant asset appreciation over extended cycles.',
            allocationLongLabel1: 'Strategy',
            allocationLongValue1: 'Wealth Creation',
            allocationLongLabel2: 'Participation',
            allocationLongValue2: 'Equity Stake',
            coreStrategyTitle: 'Core Strategy & Model',
            coreStrategyText: 'A minimal allocation view designed for quick decision confidence.',
            coreStrategyItem1: 'Premium Real Estate',
            coreStrategyItem2: 'Hospitality',
            coreStrategyItem3: 'Luxury Assets',
            coreStrategyItem4: 'IT & AI',
            strategyTitle: 'Core Strategy & Model',
            strategyText: 'We utilize a disciplined capital distribution model to ensure both operational agility and long-term solvency.',
            strategy1: '60-65% Active Capital Allocation',
            strategy1Text: 'Deployed in market opportunities and operational growth.',
            strategy2: '30-35% Capital Reserve',
            strategy2Text: 'Maintained for risk mitigation and strategic buy-ins.',
            strategyModel: 'Model',
            strategyRatio: 'A-R Ratio',
            contactTitle: 'Intelligent Risk Management',
            contactText: 'At Opulent Group, we do not avoid risk; we define it. Every movement of capital is subjected to a rigorous analysis of variance, ensuring that our growth is never left to chance, but is a calculated outcome of systemic precision.',
            contactButton: 'Contact Our Investment Team',
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
