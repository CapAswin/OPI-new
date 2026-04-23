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
                href: 'contact.html',
                key: 'navPageContact',
                label: 'Contact'
            }
        ],
        actions: []
    },
    translations: {
        en: {
            pageTitle: 'Portfolio | Opulent Prime Investment',
            brand: 'Opulent Prime Investment',
            navPageHome: 'Home',
            navHomeHero: 'Executive Overview',
            navHomeUae: 'UAE Positioning',
            navHomeUaeGov: 'Regulatory Framework',
            navHomeUaeStability: 'Geopolitical Stability',
            navHomeEco: 'Investment Verticals',
            navHomeEcoEstate: 'Prime Real Estate',
            navHomeEcoTech: 'Technology & AI',
            navHomeContact: 'Contact',
            navPageInsights: 'Insights',
            navPageEsg: 'ESG',
            navInsightHero: 'Market Perspective',
            navInsightShift: 'Capital Reallocation',
            navInsightSystem: 'Integrated Value System',
            navInsightEstate: 'Real Estate',
            navInsightTech: 'Technology',
            navPagePortfolio: 'Portfolio',
            navPortfolioHero: 'Portfolio Overview',
            navPortfolioActive: 'Active Positions',
            navPortfolioEcosystem: 'Integrated Ecosystem',
            navPortfolioExpansion: 'Expansion Pipeline',
            navPageAbout: 'About',
            navPageTeam: 'Our Team',
            navAboutHero: 'Firm Overview',
            navAboutVision: 'Mandate & Vision',
            navAboutEcosystem: 'Investment Verticals',
            navAboutMarketing: 'Brand & Marketing',
            navAboutAI: 'Technology & AI',
            navAboutPhilosophy: 'Investment Philosophy',
            navAboutSolutions: 'Allocation Framework',
            navAboutStrategy: 'Capital Model',
            navAboutContact: 'Contact',
            navPageContact: 'Contact',
            navContactInquiry: 'Investor Inquiry',
            navCta: 'Request Consultation',
            portfolioHeroEyebrow: 'Capital Deployment',
            portfolioHeroTitle: 'Portfolio',
            portfolioHeroText: 'A structured view of how Opulent Prime Investment deploys capital across five integrated verticals — with discipline, defined risk parameters, and a long-term mandate.',
            portfolioTitle: 'Active Positions',
            portfolioCard1Title: 'Real Assets',
            portfolioCard1Item1: 'Institutional-grade real estate acquisitions and developments',
            portfolioCard1Item2: 'Premium hospitality assets with stable occupancy profiles',
            portfolioCard1Item3: 'Tangible luxury assets with demonstrated value retention',
            portfolioCard2Title: 'Integrated Ecosystem',
            portfolioCard2Text: 'Our verticals are structured to generate and retain value internally:',
            portfolioCard2Item1: 'Brand and marketing infrastructure builds market presence',
            portfolioCard2Item2: 'Digital and influencer platforms generate measurable demand',
            portfolioCard2Item3: 'Real estate and hard assets capture and compound that value',
            portfolioCard3Title: 'Expansion Pipeline',
            portfolioCard3Text: 'Our investment committee continuously evaluates:',
            portfolioCard3Item1: 'Off-market and pre-launch acquisition opportunities',
            portfolioCard3Item2: 'Undervalued assets with structural appreciation potential',
            portfolioCard3Item3: 'Scalable platforms with defensible competitive positions',
            portfolioCtaTitle: 'Discuss allocation with our investment committee',
            portfolioCtaText: 'Qualified investors are invited to initiate a confidential discussion on portfolio fit and mandate alignment.',
            portfolioCtaButton: 'Request a Consultation',
            footerText: 'Opulent Prime Investment DWC LLC. Institutional asset management headquartered in Dubai since 2010.',
            footerModel: 'Framework',
            footerModel1: 'Capital Allocation',
            footerModel2: 'Risk Management',
            footerModel3: 'AML',
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

// Allocation percentage counters + bars
(function () {
    const section = document.getElementById('allocation');
    if (!section) return;

    function animateAlloc() {
        section.querySelectorAll('.alloc-pct').forEach(el => {
            const min = +el.dataset.min, max = +el.dataset.max;
            const duration = 1400, start = performance.now();
            function step(now) {
                const p = Math.min((now - start) / duration, 1);
                const ease = 1 - Math.pow(1 - p, 3);
                const val = Math.round(min + (max - min) * ease);
                el.textContent = val + '%';
                if (p < 1) requestAnimationFrame(step);
                else el.textContent = min + '–' + max + '%';
            }
            requestAnimationFrame(step);
        });
        section.querySelectorAll('.alloc-bar').forEach(bar => {
            const max = +bar.dataset.max;
            requestAnimationFrame(() => { bar.style.width = max + '%'; });
        });
    }

    const obs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) { animateAlloc(); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(section);
})();
