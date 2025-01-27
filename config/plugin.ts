module.exports = {
    // Step 1: Configure the redis connection
    redis: {
        enabled: true,
        config: {
            connections: {
                default: {
                    connection: {
                        host: "destined-troll-20309.upstash.io",
                        port: 6379,
                        username: "default",
                        password: "AU9VAAIjcDE3YjcyMDYyZmYyYWI0ZGUwOGIyMWMxYzk2YWUwZjJkN3AxMA",
                        tls: true,
                    },
                    settings: {
                        debug: true, // Enable debugging for better logging
                    },
                },
            },
        },
    },
    // Step 2: Configure the redis cache plugin
    "rest-cache": {
        config: {
            enabled: true,
            provider: {
                name: "redis",
                options: {
                    max: 32767,
                    connection: "default",
                },
            },
            strategy: {
                enableEtagSupport: true,
                logs: true,
                clearRelatedCache: true,
                maxAge: 3600000, // Cache duration in milliseconds
                contentTypes: [
                    // Update this list based on the endpoint requirements
                    {
                        contentType: "api::page.page",
                        routes: [
                            {
                                path: "/api/pages",
                                method: "GET",
                                filters: [
                                    { slug: { $eq: 'home' } } // Filter for slug 'home'
                                ],
                                populateFields: [
                                    { seo: ['metaTitle', 'metaDescription', 'metaImage.url'] }, // Populate SEO fields
                                    {
                                        structure: [
                                            { 'section.page-intro': ['title', 'eyebrow', 'content', 'cover.url'] },
                                            { 'section.blog-section': ['sectionIntro', 'posts.pageIntro.title', 'posts.pageIntro.eyebrow', 'posts.pageIntro.content', 'posts.pageIntro.cover.url', 'posts.author.avatar.url'] },
                                            { 'section.projects-section': ['sectionIntro', 'projects.pageIntro.title', 'projects.pageIntro.eyebrow', 'projects.pageIntro.content', 'projects.pageIntro.cover.url', 'projects.logo.url'] },
                                            { 'section.contact-section': ['sectionIntro', 'content.offices', 'content.emails', 'content.socials'] },
                                            { 'section.services-section': ['sectionIntro', 'our_services.pageIntro.title', 'our_services.pageIntro.eyebrow', 'our_services.pageIntro.content', 'our_services.pageIntro.cover.url'] },
                                            { 'section.team-section': ['sectionIntro', 'members.fullname', 'members.avatar.url'] },
                                            { 'section.testimonials': ['sectionIntro', 'testimonials.pageIntro.title', 'testimonials.pageIntro.eyebrow'] },
                                            { heroSection: ['sectionIntro.title', 'buttons'] }
                                        ]
                                    }
                                ]
                            },
                        ],
                    },
                ],
            },
        },
    },
};
