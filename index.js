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
                    { href: '#hero', key: 'navHomeHero', label: 'Hero' },
                    {
                        href: '#uae-advantage',
                        key: 'navHomeUae',
                        label: 'UAE Advantage',
                        children: [
                            { href: '#uae-advantage', key: 'navHomeUaeGov', label: 'Governance' },
                            { href: '#uae-advantage', key: 'navHomeUaeStability', label: 'Stability' }
                        ]
                    },
                    {
                        href: '#ecosystem',
                        key: 'navHomeEco',
                        label: 'Ecosystem',
                        children: [
                            { href: '#ecosystem', key: 'navHomeEcoEstate', label: 'Real Estate' },
                            { href: '#ecosystem', key: 'navHomeEcoTech', label: 'IT & AI' }
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
                    { href: 'contact.html', label: 'Contact' }
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
            pageTitle: 'Opulent Prime | Global Capital Management',
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
            navAboutHero: 'Company Overview',
            navAboutVision: 'Strategic Vision',
            navAboutEcosystem: 'Business Ecosystem',
            navAboutMarketing: 'Marketing Advisory',
            navAboutAI: 'AI Transformation',
            navPageContact: 'Contact',
            navContactInquiry: 'Investor Relations Inquiry',
            navCta: 'Request Consultation',
            heroTitle: "Global Capital Has a Direction. <span class=\"text-secondary-container\">It's Moving.</span>",
            heroText: "Shift from the erosion of uncertainty to the sanctuary of structured stability. We navigate the transition of wealth into the world's most resilient growth corridors.",
            heroPrimary: 'Explore Investment Model',
            heroSecondary: 'View Ecosystem',
            metricLabel: 'Growth Forecast',
            metricValue: 'UAE 2030',
            metricText: 'Strategically positioned in the Dubai DWC corridor, capturing the influx of global capital seeking institutional-grade security.',
            visionEyebrow: 'Wealth Preservation',
            visionTitle: 'Protection against the erosion of value.',
            visionText1: 'In an era where persistent inflation silently erodes liquid wealth, capital requires a new architecture. Modern prosperity is no longer about accumulation alone; it is about transition into structured opportunities that outpace devaluation.',
            visionText2: 'Opulent Prime provides the framework for this transition. We identify systemic risks in traditional markets and offer pathways into hard assets and high-growth verticals that define the next decade of global stability.',
            visionStat1: 'Strategic',
            visionStat1Label: 'Asset Allocation',
            visionStat2: 'Secured',
            visionStat2Label: 'Growth Corridors',
            uaeEyebrow: 'The Regional Anchor',
            uaeTitlePrefix: 'Why the World Is Looking at',
            uaeTitleSuffix: 'Differently.',
            uaeText: 'The Burj Khalifa is more than an engineering marvel; it is a symbol of intent. While the world grapples with stagnation, the UAE executes a long-term vision rooted in stability, legislative clarity, and aggressive innovation.',
            uaeCard1Title: 'Legislative Clarity',
            uaeCard1Text: 'A robust regulatory environment designed to welcome and protect international capital and institutional ownership.',
            uaeCard2Title: 'Geopolitical Stability',
            uaeCard2Text: 'A neutral, forward-thinking hub serving as the definitive bridge between East and West trade routes.',
            uaeCard3Title: 'Visionary Growth',
            uaeCard3Text: 'Unmatched investment in infrastructure and technology, creating a permanent magnet for global talent.',
            ecoEyebrow: 'The Opulent Methodology',
            ecoTitle: 'Disciplined Execution',
            ecoQuote: '"Wealth is built by designing allocation."',
            ecoCard1Title: 'Premium Real Estate',
            ecoCard1Text: 'Direct acquisition of prime commercial and luxury residential holdings in high-velocity districts.',
            ecoCard2Title: 'Hospitality',
            ecoCard2Text: 'Strategic stakes in luxury hotel assets and high-end leisure developments.',
            ecoCard3Title: 'Luxury Assets',
            ecoCard3Text: 'Diversification into tangible luxury commodities with high historical retention.',
            ecoCard4Title: 'IT & Artificial Intelligence',
            ecoCard4Text: 'Funding the algorithmic future through early-stage exposure to AI infrastructure and fintech.',
            coreStrategyTitle: 'Core Strategy & Model',
            coreStrategyText: 'A minimal allocation view designed for quick decision confidence.',
            coreStrategyItem1: 'Premium Real Estate',
            coreStrategyItem2: 'Hospitality',
            coreStrategyItem3: 'Luxury Assets',
            coreStrategyItem4: 'IT & AI',
            ctaTitle: 'Invest globally. Diversify intelligently. Grow securely in the UAE.',
            ctaText: 'Initiate a conversation with our investment committee to align your capital with our disciplined growth frameworks.',
            ctaButton: 'Start the Conversation',
            ctaNote: 'Strict confidentiality protocols applied to all inquiries.',
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
            contactMinimalButton: 'Contact Our Investment Team'
        },
        ar: {
            pageTitle: 'أوبولنت برايم | إدارة رأس المال العالمية',
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
            navAboutHero: 'مقدمة',
            navAboutVision: 'الرؤية',
            navAboutEcosystem: 'المنظومة',
            navAboutMarketing: 'التسويق',
            navAboutAI: 'أتمتة الذكاء الاصطناعي',
            navPageContact: 'التواصل',
            navContactInquiry: 'استفسار المستثمر',
            navCta: 'اطلب استشارة',
            heroTitle: 'رأس المال العالمي له اتجاه. <span class="text-secondary-container">وهو يتحرك.</span>',
            heroText: 'نحوّل الثروة من تآكل عدم اليقين إلى ملاذ الاستقرار المنظم، ونوجّه انتقال رأس المال إلى أكثر ممرات النمو صلابة في العالم.',
            heroPrimary: 'استكشف نموذج الاستثمار',
            heroSecondary: 'استعرض المنظومة',
            metricLabel: 'توقعات النمو',
            metricValue: 'الإمارات 2030',
            metricText: 'تموضع استراتيجي في ممر دبي الجنوب لالتقاط تدفقات رأس المال العالمي الباحث عن أمان مؤسسي عالي المستوى.',
            visionEyebrow: 'حفظ الثروة',
            visionTitle: 'حماية القيمة من التآكل.',
            visionText1: 'في عصر يلتهم فيه التضخم المستمر السيولة بصمت، تحتاج الثروة إلى هندسة جديدة. لم تعد الرفاهية الحديثة قائمة على التراكم فقط، بل على الانتقال إلى فرص منظمة تتفوق على انخفاض القيمة.',
            visionText2: 'يوفر أوبولنت برايم إطار هذا الانتقال. نحن نحدد المخاطر النظامية في الأسواق التقليدية ونبني مسارات نحو الأصول الصلبة والقطاعات عالية النمو التي تصنع استقرار العقد القادم.',
            visionStat1: 'استراتيجي',
            visionStat1Label: 'توزيع الأصول',
            visionStat2: 'مؤمّن',
            visionStat2Label: 'ممرات النمو',
            uaeEyebrow: 'المرتكز الإقليمي',
            uaeTitlePrefix: 'لماذا ينظر العالم إلى',
            uaeTitleSuffix: 'بشكل مختلف.',
            uaeText: 'برج خليفة ليس مجرد إنجاز هندسي، بل رمز للنية الواضحة. بينما يواجه العالم الركود، تنفذ الإمارات رؤية طويلة المدى قائمة على الاستقرار والوضوح التشريعي والابتكار الجريء.',
            uaeCard1Title: 'وضوح تشريعي',
            uaeCard1Text: 'بيئة تنظيمية قوية صُممت لاستقبال رأس المال الدولي وحمايته وحماية الملكية المؤسسية.',
            uaeCard2Title: 'استقرار جيوسياسي',
            uaeCard2Text: 'مركز محايد ومتقدم يمثل الجسر الحاسم بين طرق التجارة في الشرق والغرب.',
            uaeCard3Title: 'نمو صاحب رؤية',
            uaeCard3Text: 'استثمار لا مثيل له في البنية التحتية والتقنية يصنع مغناطيساً دائماً للمواهب العالمية.',
            ecoEyebrow: 'منهجية أوبولنت',
            ecoTitle: 'تنفيذ منضبط',
            ecoQuote: '"الثروة تُبنى عبر تصميم التخصيص."',
            ecoCard1Title: 'عقارات متميزة',
            ecoCard1Text: 'استحواذ مباشر على أصول تجارية وسكنية فاخرة في أكثر المناطق ديناميكية.',
            ecoCard2Title: 'الضيافة',
            ecoCard2Text: 'حصص استراتيجية في أصول الفنادق الفاخرة ومشروعات الترفيه الراقية.',
            ecoCard3Title: 'الأصول الفاخرة',
            ecoCard3Text: 'تنويع عبر سلع فاخرة ملموسة ذات احتفاظ تاريخي مرتفع بالقيمة.',
            ecoCard4Title: 'تقنية المعلومات والذكاء الاصطناعي',
            ecoCard4Text: 'تمويل المستقبل الخوارزمي عبر تعرض مبكر لبنية الذكاء الاصطناعي والتقنية المالية.',
            coreStrategyTitle: 'الاستراتيجية الأساسية والنموذج',
            coreStrategyText: 'عرض تخصيص بسيط وواضح لدعم اتخاذ القرار بسرعة.',
            coreStrategyItem1: 'عقارات متميزة',
            coreStrategyItem2: 'الضيافة',
            coreStrategyItem3: 'الأصول الفاخرة',
            coreStrategyItem4: 'تقنية المعلومات والذكاء الاصطناعي',
            ctaTitle: 'استثمر عالمياً. نوّع بذكاء. وانمُ بأمان في الإمارات.',
            ctaText: 'ابدأ حواراً مع لجنة الاستثمار لدينا لمواءمة رأس مالك مع أطر النمو المنضبطة التي نعتمدها.',
            ctaButton: 'ابدأ الحوار',
            ctaNote: 'تُطبق بروتوكولات سرية صارمة على جميع الاستفسارات.',
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
            contactMinimalButton: 'تواصل مع فريق الاستثمار'
        }
    }
});

(function initCoreStrategyChart() {
    const canvas = document.getElementById('core-strategy-chart');
    if (!canvas || typeof window.Chart === 'undefined') return;
    const section = document.getElementById('core-strategy-model');
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

(function initHeroCarousel() {
    const carousel = document.querySelector('[data-hero-carousel]');
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll('[data-hero-slide]'));
    if (slides.length < 2) return;

    const prevButton = document.querySelector('[data-hero-prev]');
    const nextButton = document.querySelector('[data-hero-next]');
    const dotsContainer = carousel.querySelector('[data-hero-dots]');
    const heroTitle = document.querySelector('[data-hero-title]');
    const heroText = document.querySelector('[data-hero-text]');
    const heroPrimary = document.querySelector('[data-hero-primary]');
    const heroSecondary = document.querySelector('[data-hero-secondary]');
    const dots = [];
    let currentIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
    let timerId = null;

    if (currentIndex < 0) currentIndex = 0;

    function readLocalizedValue(slide, baseKey, language) {
        const localizedKey = `${baseKey}${language.charAt(0).toUpperCase()}${language.slice(1)}`;
        return slide.dataset[localizedKey] || slide.dataset[baseKey] || '';
    }

    function updateNavigationUI() {
        const isArabic = document.documentElement.lang === 'ar';
        const prevSymbol = prevButton ? prevButton.querySelector('span[aria-hidden="true"]') : null;
        const nextSymbol = nextButton ? nextButton.querySelector('span[aria-hidden="true"]') : null;

        if (prevButton) {
            prevButton.setAttribute('aria-label', isArabic ? 'الشريحة السابقة' : 'Previous hero slide');
            prevButton.style.left = '1.5rem';
            prevButton.style.right = 'auto';
        }
        if (nextButton) {
            nextButton.setAttribute('aria-label', isArabic ? 'الشريحة التالية' : 'Next hero slide');
            nextButton.style.right = '1.5rem';
            nextButton.style.left = 'auto';
        }
        if (prevSymbol) {
            prevSymbol.innerHTML = '&#10094;';
        }
        if (nextSymbol) {
            nextSymbol.innerHTML = '&#10095;';
        }
    }

    function renderSlides(index, direction) {
        const activeSlide = slides[index];
        const activeLanguage = document.documentElement.lang === 'ar' ? 'ar' : 'en';

        slides.forEach((slide, slideIndex) => {
            slide.classList.remove('is-active', 'is-before', 'is-after');
            if (slideIndex === index) {
                slide.classList.add('is-active');
                return;
            }
            if (direction === 'next') {
                slide.classList.add(slideIndex < index ? 'is-before' : 'is-after');
            } else if (direction === 'prev') {
                slide.classList.add(slideIndex < index ? 'is-after' : 'is-before');
            }
        });

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('is-active', dotIndex === index);
            dot.setAttribute('aria-current', dotIndex === index ? 'true' : 'false');
        });

        if (activeSlide) {
            const title = readLocalizedValue(activeSlide, 'title', activeLanguage);
            const text = readLocalizedValue(activeSlide, 'text', activeLanguage);
            const primaryLabel = readLocalizedValue(activeSlide, 'primaryLabel', activeLanguage);
            const secondaryLabel = readLocalizedValue(activeSlide, 'secondaryLabel', activeLanguage);

            if (heroTitle && title) {
                heroTitle.innerHTML = title;
            }

            if (heroText && text) {
                heroText.textContent = text;
            }

            if (heroPrimary) {
                if (primaryLabel) {
                    heroPrimary.textContent = primaryLabel;
                }
                if (activeSlide.dataset.primaryHref) {
                    heroPrimary.setAttribute('href', activeSlide.dataset.primaryHref);
                }
            }

            if (heroSecondary) {
                if (secondaryLabel) {
                    heroSecondary.textContent = secondaryLabel;
                }
                if (activeSlide.dataset.secondaryHref) {
                    heroSecondary.setAttribute('href', activeSlide.dataset.secondaryHref);
                }
            }
        }
    }

    function goTo(index, direction) {
        const safeIndex = (index + slides.length) % slides.length;
        currentIndex = safeIndex;
        renderSlides(currentIndex, direction);
    }

    function startAutoPlay() {
        stopAutoPlay();
        timerId = window.setInterval(() => {
            goTo(currentIndex + 1, 'next');
        }, 5000);
    }

    function stopAutoPlay() {
        if (timerId !== null) {
            window.clearInterval(timerId);
            timerId = null;
        }
    }

    if (dotsContainer) {
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'hero-carousel-dot';
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => {
                const direction = index > currentIndex ? 'next' : 'prev';
                goTo(index, direction);
                startAutoPlay();
            });
            dotsContainer.appendChild(dot);
            dots.push(dot);
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            goTo(currentIndex - 1, 'prev');
            startAutoPlay();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            goTo(currentIndex + 1, 'next');
            startAutoPlay();
        });
    }

    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    document.addEventListener('opulent:language-changed', () => {
        updateNavigationUI();
        renderSlides(currentIndex);
    });

    updateNavigationUI();
    renderSlides(currentIndex, 'next');
    startAutoPlay();
})();
