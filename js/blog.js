window.OpulentSite.init({
    header: {
        homeHref: 'index.html',
        brandKey: 'brand',
        brandLabel: 'Opulent Prime',
        logoSrc: 'assets/images/logos/logo_black.png',
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
                    { href: 'about.html#about-philosophy', key: 'navAboutPhilosophy', label: 'Philosophy' },
                    { href: 'about.html#about-solutions', key: 'navAboutSolutions', label: 'Solutions' },
                    { href: 'about.html#about-strategy', key: 'navAboutStrategy', label: 'Strategy' },
                    { href: 'contact.html', key: 'navAboutContact', label: 'Contact' }
                ]
            },
            { href: 'teams.html', key: 'navPageTeam', label: 'Our Team' },
            {
                href: 'portfolio.html',
                key: 'navPagePortfolio',
                label: 'Portfolio',
                children: [
                    { href: 'portfolio.html#portfolio-hero', key: 'navPortfolioHero', label: 'Overview' },
                    { href: 'portfolio.html#portfolio', key: 'navPortfolioActive', label: 'Active Investments' },
                    { href: 'portfolio.html#portfolio-ecosystem', key: 'navPortfolioEcosystem', label: 'Ecosystem Strength' },
                    { href: 'portfolio.html#portfolio-expansion', key: 'navPortfolioExpansion', label: 'Expansion Pipeline' }
                ]
            },
            {
                href: 'insight.html',
                key: 'navPageInsights',
                label: 'Insights',
                children: [
                    { href: 'insight.html', key: 'navInsightHero', label: 'Hero' },
                    { href: 'insight.html#insight-shift', key: 'navInsightShift', label: 'Wealth Shift' },
                    { href: 'insight.html#insight-system', key: 'navInsightSystem', label: 'Interconnected System' }
                ]
            },
            { href: 'blog.html', key: 'navPageBlog', label: 'Blog' },
            { href: 'esg.html', key: 'navPageEsg', label: 'ESG' },
            { href: 'contact.html', key: 'navPageContact', label: 'Contact' }
        ],
        actions: []
    },
    translations: {
        en: {
            pageTitle: 'Blog | Opulent Prime',
            brand: 'Opulent Prime',
            navPageHome: 'Home',
            navPageAbout: 'About Us',
            navPageTeam: 'Our Team',
            navPagePortfolio: 'Portfolio',
            navPageInsights: 'Insights',
            navPageBlog: 'Blog',
            navPageEsg: 'ESG',
            navPageContact: 'Contact',
            navHomeUae: 'Strategic UAE Advantage',
            navHomeUaeGov: 'Regulatory Governance',
            navHomeUaeStability: 'Macroeconomic Stability',
            navHomeEco: 'Investment Ecosystem',
            navHomeEcoEstate: 'Prime Real Estate',
            navHomeEcoTech: 'Digital Infrastructure & AI',
            navHomeContact: 'Contact',
            blogEyebrow: 'Insights',
            blogTitle: 'Blog',
            blogSubtitle: 'Research notes on governance, allocation, and disciplined execution.',
            blogSectionTitle: 'Latest Articles',
            blogSectionText: 'Short, high-signal updates designed for investors who value clarity.',
            blogSearchLabel: 'Search articles',
            blogSearchPlaceholder: 'Search',
            blogTagResearch: 'Research',
            blogTagAllocation: 'Allocation',
            blogTagExecution: 'Execution',
            blogComingSoonBadge: 'Coming Soon',
            blogComingSoonTitle: 'Blogs are the way forward',
            blogComingSoonText: 'We\'re working on something valuable. Stay tuned.',
            blogComingSoonCta: 'Back to home',
            blogReadMore: 'Read more',
            blogNote:
                'This page is a publishing shell. When you’re ready, we can turn each card into a real article page (e.g. blog/uae-stability-corridor.html) with full SEO schema.',
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
            footerGroup2: 'Opportunities',
            footerGroup3: 'Contact Terminal',
            footerBottom:
                '© 2024 Opulent Prime Investment DWC LLC. All rights reserved. Diversify intelligently.',
            footerMark: 'OPULENT GROUP'
        },
        ar: {
            pageTitle: 'المدونة | أوبولنت برايم',
            brand: 'أوبولنت برايم',
            navPageHome: 'الرئيسية',
            navPageAbout: 'من نحن',
            navPageTeam: 'فريقنا',
            navPagePortfolio: 'المحفظة',
            navPageInsights: 'الرؤى',
            navPageBlog: 'المدونة',
            navPageEsg: 'ESG',
            navPageContact: 'التواصل',
            navHomeUae: 'ميزة الإمارات',
            navHomeUaeGov: 'الحوكمة',
            navHomeUaeStability: 'الاستقرار',
            navHomeEco: 'المنظومة',
            navHomeEcoEstate: 'العقارات',
            navHomeEcoTech: 'التقنية والذكاء الاصطناعي',
            navHomeContact: 'التواصل',
            blogEyebrow: 'الرؤى',
            blogTitle: 'المدونة',
            blogSubtitle: 'ملاحظات بحثية عن الحوكمة وتخصيص الأصول والتنفيذ المنضبط.',
            blogSectionTitle: 'أحدث المقالات',
            blogSectionText: 'تحديثات قصيرة وعالية الوضوح للمستثمرين الذين يفضلون الدقة.',
            blogSearchLabel: 'ابحث في المقالات',
            blogSearchPlaceholder: 'بحث',
            blogTagResearch: 'بحث',
            blogTagAllocation: 'تخصيص',
            blogTagExecution: 'تنفيذ',
            blogComingSoonBadge: 'قريباً',
            blogComingSoonTitle: 'المدونات هي الطريق إلى الأمام',
            blogComingSoonText: 'نعمل على شيء قيّم. ترقّبوا.',
            blogComingSoonCta: 'العودة إلى الرئيسية',
            blogReadMore: 'اقرأ المزيد',
            blogNote:
                'هذه الصفحة قالب نشر. عندما تكون جاهزاً، يمكننا تحويل كل بطاقة إلى صفحة مقال كاملة (مثل blog/uae-stability-corridor.html) مع مخطط SEO كامل.',
            footerText:
                'إحدى شركات مجموعة أوبولنت. نصمّم تخصيص الثروة بدقة معمارية واستقرار إقليمي منذ 2010.',
            footerModel: 'النموذج',
            footerModel1: 'تنفيذ منضبط',
            footerModel2: 'توزيع الأصول',
            footerModel3: 'مكافحة غسل الأموال',
            footerRegions: 'المناطق',
            footerRegions1: 'دبي الجنوب (DWC)',
            footerRegions2: 'شبكة عالمية',
            footerRegions3: 'مزايا الإمارات',
            footerGroup: 'المجموعة',
            footerGroup1: 'مجموعة أوبولنت',
            footerGroup2: 'الفرص',
            footerGroup3: 'التواصل',
            footerBottom:
                '© 2024 شركة أوبولنت برايم للاستثمار — مدينة دبي للإنترنت ذ.م.م. جميع الحقوق محفوظة.',
            footerMark: 'أوبولنت جروب'
        }
    }
});

(function initBlogSearch() {
    const input = document.getElementById('search-input');
    const grid = document.querySelector('[data-blog-grid]');
    if (!input || !grid) return;

    const cards = Array.from(grid.querySelectorAll('.article-card'));
    if (!cards.length) return;

    function normalize(text) {
        return String(text || '')
            .toLowerCase()
            .replace(/\s+/g, ' ')
            .trim();
    }

    function applyFilter(query) {
        const q = normalize(query);
        cards.forEach((card) => {
            const title = card.querySelector('h3')?.textContent || '';
            const excerpt = card.querySelector('p')?.textContent || '';
            const haystack = normalize(`${title} ${excerpt}`);
            const isMatch = !q || haystack.includes(q);
            card.style.display = isMatch ? '' : 'none';
        });
    }

    input.addEventListener('input', (e) => {
        applyFilter(e.target.value);
    });
})();

