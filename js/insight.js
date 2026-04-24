window.OpulentSite.init({
    header: {
        homeHref: 'index.html',
        brandKey: 'brand',
        brandLabel: 'Opulent Prime',
        logoSrc: 'assets/images/OPI-DWC.png',
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
                            {
                                href: 'about.html#ecosystem',
                                key: 'navAboutMarketing',
                                label: 'Marketing'
                            },
                            {
                                href: 'about.html#ecosystem',
                                key: 'navAboutAI',
                                label: 'AI Automation'
                            }
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
                            {
                                href: 'insight.html#insight-system',
                                key: 'navInsightEstate',
                                label: 'Real Estate'
                            },
                            {
                                href: 'insight.html#insight-system',
                                key: 'navInsightTech',
                                label: 'Technology'
                            }
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
            pageTitle: 'Insights | Opulent Group',
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
            navContactInquiry: 'Investor Relations Inquiry',
            navCta: 'Request Consultation',
            insightHeroEyebrow: 'Market Intelligence',
            insightHeroTitle: 'Why Global Investors are repositioning to the UAE',
            insightHeroText:
                'In the past decade, the definition of a “safe investment destination” has changed. It is no longer just about returns. It is about governance, predictability, mobility, and long-term economic vision.',
            insightShiftTitle: 'A Shift in Global Wealth',
            insightMarketInsights: 'Market Insights',
            insightShiftText:
                'Our ecosystem is built upon four non-negotiable pillars that define the modern sovereign experience.',
            insightPillarGovernanceTitle: 'Governance',
            insightPillarGovernanceText:
                'Robust regulatory frameworks and transparent legal systems designed for international protection.',
            insightPillarPredictabilityTitle: 'Predictability',
            insightPillarPredictabilityText:
                'Consistent infrastructure development that is continuous, not reactive, ensuring long-term asset value.',
            insightPillarMobilityTitle: 'Mobility',
            insightPillarMobilityText:
                'Strategic positioning as a neutral, global hub offering unmatched connectivity across continents.',
            insightPillarVisionTitle: 'Vision',
            insightPillarVisionText:
                'Forward-thinking ecosystems built with scalability in mind for the future digital economy.',
            insightSystemTitle: 'An Interconnected System',
            insightSystemText1:
                'From real estate to technology, from hospitality to digital economy; the growth is not isolated. It is interconnected.',
            insightSystemQuote:
                '"For an investor, that changes everything. Because it means you are not entering a market. You are entering a system designed for growth."',
            insightFocusSector: 'Focus Sector',
            insightSectorRealEstate: 'Real Estate',
            insightSectorDigital: 'Digital Economy',
            insightSectorHospitality: 'Hospitality',
            insightSectorTechnology: 'Technology',
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
            navPageContact: 'التواصل',
            navContactInquiry: 'استفسار المستثمر',
            navCta: 'اطلب استشارة',
            insightHeroEyebrow: 'استخبارات السوق',
            insightHeroTitle: 'لماذا يعيد المستثمرون العالميون التموضع نحو الإمارات',
            insightHeroText:
                'خلال العقد الماضي تغيّر تعريف “وجهة الاستثمار الآمنة”. لم يعد الأمر يتعلق بالعوائد فقط، بل بالحَوْكمة وقابلية التنبؤ والحركة والرؤية الاقتصادية طويلة الأجل.',
            insightShiftTitle: 'تحوّل في الثروة العالمية',
            insightMarketInsights: 'رؤى السوق',
            insightShiftText:
                'تقوم منظومتنا على أربعة ركائز أساسية غير قابلة للتفاوض تحدد التجربة السيادية الحديثة.',
            insightPillarGovernanceTitle: 'الحَوْكمة',
            insightPillarGovernanceText:
                'أطر تنظيمية قوية وأنظمة قانونية شفافة مصممة لحماية المستثمرين دولياً.',
            insightPillarPredictabilityTitle: 'قابلية التنبؤ',
            insightPillarPredictabilityText:
                'تطوير بنية تحتية مستمر وغير تفاعلي يضمن قيمة أصول طويلة الأجل.',
            insightPillarMobilityTitle: 'الحركة',
            insightPillarMobilityText:
                'تموضع استراتيجي كمركز عالمي محايد يوفر اتصالاً استثنائياً عبر القارات.',
            insightPillarVisionTitle: 'الرؤية',
            insightPillarVisionText:
                'منظومات استشرافية قابلة للتوسع صُممت لاقتصاد رقمي مستقبلي.',
            insightSystemTitle: 'نظام مترابط',
            insightSystemText1:
                'من العقارات إلى التقنية، ومن الضيافة إلى الاقتصاد الرقمي؛ النمو ليس معزولاً بل مترابطاً.',
            insightSystemQuote:
                '"بالنسبة للمستثمر يغيّر هذا كل شيء؛ لأنك لا تدخل سوقاً، بل تدخل نظاماً مصمماً للنمو."',
            insightFocusSector: 'قطاع التركيز',
            insightSectorRealEstate: 'العقارات',
            insightSectorDigital: 'الاقتصاد الرقمي',
            insightSectorHospitality: 'الضيافة',
            insightSectorTechnology: 'التقنية',
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
