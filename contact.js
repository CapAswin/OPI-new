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
                    { href: 'about.html#about-philosophy', label: 'Philosophy' },
                    { href: 'about.html#about-solutions', label: 'Solutions' },
                    { href: 'about.html#about-strategy', label: 'Strategy' },
                    { href: 'contact.html#inquiry-form', label: 'Contact' }
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
                href: 'contact.html',
                key: 'navPageContact',
                label: 'Contact'
            }
        ],
        actions: []
    },
    translations: {
        en: {
            pageTitle: 'Investor Inquiry | Opulent Prime',
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
            navPageContact: 'Contact',
            navContactInquiry: 'Investor Relations Inquiry',
            navCta: 'Request Consultation',
            contactEyebrow: 'Opulent Prime · Dubai DWC',
            contactTitle: 'Investor Inquiry',
            contactSubtitle: 'Every investment starts with a conversation',
            contactLead:
                'Share your details in confidence. Our investment committee reviews each inquiry with discretion and responds through secure channels.',
            contactTrust: 'Institutional-grade confidentiality. No obligation from this submission.',
            contactLabelName: 'Full Name',
            contactLabelEmail: 'Email Address',
            contactLabelCountry: 'Country',
            contactCountryPh: 'Select country',
            contactLabelAmount: 'Investment Amount',
            contactLabelCurrency: 'Currency',
            contactLabelMessage: 'Message',
            contactOptional: '(optional)',
            contactPhName: 'As on your passport or ID',
            contactPhEmail: 'name@company.com',
            contactPhAmount: 'e.g. 500000',
            contactPhMessage: 'Brief context, mandate, or questions',
            contactSubmit: 'Submit Inquiry',
            contactFineprint:
                'This form does not constitute an offer or solicitation where prohibited. Information is used solely for qualified investor follow-up.',
            contactSuccessTitle: 'Thank you',
            contactSuccessBody: 'Your inquiry has been recorded. A member of our team will be in touch shortly.',
            footerText:
                'An Opulent Group entity. Designing wealth allocation through architectural precision and regional stability since 2010.',
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
            pageTitle: 'استفسار المستثمر | أوبولنت برايم',
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
            contactEyebrow: 'أوبولنت برايم · دبي الجنوب',
            contactTitle: 'استفسار المستثمر',
            contactSubtitle: 'كل استثمار يبدأ بحوار',
            contactLead:
                'شاركنا بياناتك بثقة. تطلع لجنة الاستثمار لدينا على كل استفسار بسرية وتتواصل عبر قنوات آمنة.',
            contactTrust: 'سرية بمستوى مؤسسي. لا التزام ينشأ عن هذا الطلب.',
            contactLabelName: 'الاسم الكامل',
            contactLabelEmail: 'البريد الإلكتروني',
            contactLabelCountry: 'الدولة',
            contactCountryPh: 'اختر الدولة',
            contactLabelAmount: 'مبلغ الاستثمار',
            contactLabelCurrency: 'العملة',
            contactLabelMessage: 'الرسالة',
            contactOptional: '(اختياري)',
            contactPhName: 'كما في جواز السفر أو الهوية',
            contactPhEmail: 'name@company.com',
            contactPhAmount: 'مثال: 500000',
            contactPhMessage: 'نبذة عن السياق أو الأسئلة',
            contactSubmit: 'إرسال الاستفسار',
            contactFineprint:
                'هذا النموذج لا يشكل عرضاً أو دعوة حيث يُحظر ذلك. تُستخدم المعلومات لمتابعة المستثمرين المؤهلين فقط.',
            contactSuccessTitle: 'شكراً لك',
            contactSuccessBody: 'تم تسجيل استفسارك. سيتواصل معك أحد أعضاء فريقنا قريباً.',
            footerText:
                'إحدى جهات مجموعة أوبولنت. نصمم توزيع الثروة بدقة معمارية واستقرار إقليمي منذ 2010.',
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

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('inquiry-form');
    var success = document.getElementById('contact-success');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        form.classList.add('hidden');
        if (success) success.classList.remove('hidden');
    });
});
