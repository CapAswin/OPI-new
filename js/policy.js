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
                    { href: 'about.html', key: 'navAboutHero', label: 'About' },
                    { href: 'about.html#vision', key: 'navAboutVision', label: 'Vision' },
                    { href: 'teams.html', key: 'navAboutTeam', label: 'Team' }
                ]
            },
            {
                href: 'portfolio.html',
                key: 'navPagePortfolio',
                label: 'Portfolio',
                children: [
                    { href: 'portfolio.html#portfolio-hero', key: 'navPortfolioHero', label: 'Overview' },
                    { href: 'portfolio.html#portfolio', key: 'navPortfolioGrid', label: 'Strategy' }
                ]
            },
            {
                href: 'insight.html',
                key: 'navPageInsight',
                label: 'Insights',
                children: [{ href: 'insight.html#insight-hero', key: 'navInsightHero', label: 'Latest' }]
            }
        ],
        actions: [
            {
                key: 'navCta',
                label: 'Book a session',
                href: 'contact.html',
                className:
                    'hidden sm:inline-flex bg-primary px-5 py-2.5 font-headline text-xs font-bold text-white transition-all duration-300 hover:bg-primary-container'
            }
        ]
    }
});

