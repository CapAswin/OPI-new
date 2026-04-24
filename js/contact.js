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
                    { href: 'about.html', key: 'navAboutHero', label: 'About Intro' },
                    { href: 'about.html#vision', key: 'navAboutVision', label: 'Vision' },
                    {
                        href: 'about.html#ecosystem',
                        key: 'navAboutEcosystem',
                        label: 'Ecosystem',
                        children: [
                            { href: 'about.html#ecosystem', key: 'navAboutMarketing', label: 'Marketing' },
                            { href: 'about.html#ecosystem', key: 'navAboutAI', label: 'AI Automation' }
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
                            { href: 'insight.html#insight-system', key: 'navInsightEstate', label: 'Real Estate' },
                            { href: 'insight.html#insight-system', key: 'navInsightTech', label: 'Technology' }
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
            contactEyebrow: 'Opulent Prime · Dubai DWC',
            contactTitle: 'Investor Inquiry',
            contactSubtitle: 'Every investment starts with a conversation',
            contactLead:
                'Share your details in confidence. Our investment committee reviews each inquiry with discretion and responds through secure channels.',
            contactResponseWindowValue: 'Within 1-2 business days',
            contactReviewProcessLabel: 'Review Process',
            contactReviewProcessValue: 'Private, committee-led screening',
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
            contactSubmitting: 'Submitting...',
            contactFineprint:
                'This form does not constitute an offer or solicitation where prohibited. Information is used solely for qualified investor follow-up.',
            contactSuccessTitle: 'Thank you',
            contactSuccessBody: 'Your inquiry has been recorded. A member of our team will be in touch shortly.',
            footerText:
                'An Opulent Group. Designing wealth allocation through architectural precision and regional stability since 2010.',
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
            contactEyebrow: 'أوبولنت برايم · دبي الجنوب',
            contactTitle: 'استفسار المستثمر',
            contactSubtitle: 'كل استثمار يبدأ بحوار',
            contactLead:
                'شاركنا بياناتك بثقة. تطلع لجنة الاستثمار لدينا على كل استفسار بسرية وتتواصل عبر قنوات آمنة.',
            contactResponseWindowValue: 'خلال يوم إلى يومي عمل',
            contactReviewProcessLabel: 'آلية المراجعة',
            contactReviewProcessValue: 'تدقيق خاص بإشراف لجنة الاستثمار',
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
            contactSubmitting: 'جارٍ الإرسال...',
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
    // Set this to your Google Apps Script Web App URL (doDeploy -> Web app).
    // Example: https://script.google.com/macros/s/AKfycb.../exec
    var GOOGLE_SHEETS_WEBAPP_URL =
        'https://script.google.com/macros/s/AKfycbzq0xCPyfuev8kxU-0w6zsak9qHFGACx3Gg_8_2WTyic5BVntu-VsmjrGziiZYKwcE7/exec';

    var form = document.getElementById('inquiry-form');
    var success = document.getElementById('contact-success');
    var nameInput = document.getElementById('contact-name');
    if (!form) return;

    function parseAmountToRaw(value) {
        if (!value) return '';
        var cleaned = String(value).replace(/[^\d.]/g, '');
        // keep only first decimal point
        var parts = cleaned.split('.');
        if (parts.length <= 1) return parts[0];
        return parts[0] + '.' + parts.slice(1).join('');
    }

    function formatAmountWithCommas(value) {
        var raw = parseAmountToRaw(value);
        if (!raw) return { display: '', raw: '' };

        var split = raw.split('.');
        var intPart = split[0] || '';
        var decPart = split.length > 1 ? split[1] : '';

        // format integer part with commas
        var intNumber = intPart ? Number(intPart) : 0;
        var formattedInt = intPart ? new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(intNumber) : '';

        return {
            display: decPart ? formattedInt + '.' + decPart : formattedInt,
            raw: decPart ? intPart + '.' + decPart : intPart
        };
    }

    // Comma formatting for Investment Amount input.
    var amountInput = document.getElementById('contact-amount');
    if (amountInput) {
        amountInput.addEventListener('input', function () {
            var cursorAtEnd = amountInput.selectionStart === amountInput.value.length;
            var formatted = formatAmountWithCommas(amountInput.value);
            amountInput.value = formatted.display;
            amountInput.dataset.rawValue = formatted.raw;
            if (cursorAtEnd) {
                amountInput.setSelectionRange(amountInput.value.length, amountInput.value.length);
            }
        });
        amountInput.addEventListener('blur', function () {
            var formatted = formatAmountWithCommas(amountInput.value);
            amountInput.value = formatted.display;
            amountInput.dataset.rawValue = formatted.raw;
        });
    }

    function fetchPublicIpAddress() {
        // Best-effort: browsers don't expose IP directly.
        // This uses a public IP echo service; failures should not block form submission.
        return fetch('https://api.ipify.org?format=json', { method: 'GET' })
            .then(function (res) {
                if (!res.ok) return null;
                return res.json();
            })
            .then(function (json) {
                return json && typeof json.ip === 'string' ? json.ip : null;
            })
            .catch(function () {
                return null;
            });
    }

    function withTimeout(promise, ms) {
        return Promise.race([
            promise,
            new Promise(function (resolve) {
                window.setTimeout(function () {
                    resolve(null);
                }, ms);
            }),
        ]);
    }
    if (nameInput) {
        window.requestAnimationFrame(function () {
            nameInput.focus();
        });
    }
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        var submitButton = form.querySelector('button[type="submit"]');
        var submitLabel = submitButton ? submitButton.querySelector('[data-i18n="contactSubmit"]') : null;
        var originalSubmitLabel = submitLabel ? submitLabel.textContent : '';
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.setAttribute('aria-busy', 'true');
        }
        if (submitLabel) {
            submitLabel.textContent = document.body.classList.contains('is-rtl')
                ? 'جارٍ الإرسال...'
                : 'Submitting...';
        }

        var nameValue = (document.getElementById('contact-name') || {}).value || '';
        var amountEl = document.getElementById('contact-amount');
        var amountValue = amountEl ? amountEl.dataset.rawValue || parseAmountToRaw(amountEl.value) : '';
        var amountDisplayValue = amountEl ? amountEl.value || '' : '';

        function showSuccess() {
            form.classList.add('hidden');
            if (success) success.classList.remove('hidden');
        }

        function restoreSubmit() {
            if (!submitButton) return;
            submitButton.disabled = false;
            submitButton.removeAttribute('aria-busy');
            if (submitLabel) {
                submitLabel.textContent = originalSubmitLabel || 'Submit Inquiry';
            }
        }

        if (!GOOGLE_SHEETS_WEBAPP_URL) {
            restoreSubmit();
            showSuccess();
            return;
        }

        withTimeout(fetchPublicIpAddress(), 2000).then(function (ipAddress) {
            var payload = {
                timestamp: new Date().toISOString(),
                // Send both camelCase and snake_case keys to match Apps Script variations.
                fullName: nameValue,
                full_name: nameValue,
                email: (document.getElementById('contact-email') || {}).value || '',
                country: (document.getElementById('contact-country') || {}).value || '',
                currency: (document.getElementById('contact-currency') || {}).value || '',
                investmentAmount: amountValue,
                investment_amount: amountValue,
                investmentAmountFormatted: amountDisplayValue,
                investment_amount_formatted: amountDisplayValue,
                message: (document.getElementById('contact-message') || {}).value || '',
                ip: ipAddress || ''
            };

            fetch(GOOGLE_SHEETS_WEBAPP_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
                .then(function () {
                    showSuccess();
                })
                .catch(function () {
                    restoreSubmit();
                    showSuccess();
                });
        });
    });
});
