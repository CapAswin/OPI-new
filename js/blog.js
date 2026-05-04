window.OpulentSite.init({
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
                'This page is a publishing shell. When you’re ready, we can turn each card into a real article page (e.g. blog/uae-stability-corridor.html) with full SEO schema.'
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
                'هذه الصفحة قالب نشر. عندما تكون جاهزاً، يمكننا تحويل كل بطاقة إلى صفحة مقال كاملة (مثل blog/uae-stability-corridor.html) مع مخطط SEO كامل.'
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

