const worksData = {
    photography: [
        {
            src: 'photography and moving image/covers/casildart-gallery.jpg',
            slug: 'casildart-gallery',
            alt: 'CasildArt Gallery exhibition photography',
            title: 'CasildArt Gallery',
            media: 'Photography, Videography, Video Editing',
            year: '2026',
            description: 'An exhibition documentation project combining photography, videography and editing to capture the installation process, artworks, artist conversations and interviews.',
            detailPage: true
        },
        {
            src: 'photography and moving image/covers/hackney-gallery.jpg',
            slug: 'hackney-gallery',
            alt: 'Hackney Gallery exhibition photography',
            title: 'Hackney Gallery',
            media: 'Photography',
            year: '',
            description: ''
        }
    ],
    design: [
        {
            src: 'design/1/design1.jpeg',
            slug: 'design-01',
            alt: 'Design project 1 hero image',
            title: 'Ecofuturist Poultry: Reimagining Technology and Nature in Chicken Farming',
            media: 'Speculative Design, Installation, Animation',
            year: '2023',
            description: 'This project imagines a future where chickens are raised in domestic spaces rather than industrial farms. Through animation and installation, it critiques the alienation caused by industrial agriculture and explores alternative scenarios such as lab-grown meat and city-integrated poultry, questioning how technology can coexist with nature.',
            detailImages: [
                'design/1/详情页/project1画板1.jpg',
                'design/1/详情页/project1画板2.jpg',
                'design/1/详情页/project1画板3.jpg',
                'design/1/详情页/project1画板4.jpg',
                'design/1/详情页/project1画板5.jpg'
            ]
        },
        {
            src: 'design/2/design2.jpeg',
            slug: 'design-02',
            alt: 'Design project 2 hero image',
            title: 'The ‘Freedom’ Aquatic Realm',
            media: 'Interactive Installation, Spatial Design',
            year: '2023',
            description: 'This installation uses a controlled fish tank to metaphorically critique overbearing Chinese-style parenting. By paralleling child-rearing with goldfish breeding, it provokes reflection on the limits of control, the importance of freedom, and the balance required for healthy family dynamics.',
            detailImages: [
                'design/2/详情页/project2画板 1.jpg',
                'design/2/详情页/project2画板 2.jpg',
                'design/2/详情页/project2画板 3.jpg',
                'design/2/详情页/project2画板 4.jpg'
            ]
        },
        {
            src: 'design/3/design3.jpeg',
            slug: 'design-03',
            alt: 'Design project 3 hero image',
            title: 'Women, Bathrooms and Symbolism: A Visual Research Project',
            media: 'Editorial Design, Research, 3D Scanning',
            year: '2024',
            description: 'This project investigates how bathroom spaces in film and culture reflect women’s experiences of vulnerability and autonomy. Combining interviews, 3D scans, and cinematic analysis, the work is presented in a designed book and visual experiments, redefining how the bathroom mediates female identity and cultural imagination.',
            detailImages: [
                'design/3/详情页/project3画板 1.jpg',
                'design/3/详情页/project3画板 2.jpg',
                'design/3/详情页/project3画板 3.jpg',
                'design/3/详情页/project3画板 4.jpg',
                'design/3/详情页/project3画板 5.jpg'
            ]
        },
        {
            src: 'design/4/design4.jpeg',
            slug: 'design-04',
            alt: 'Design project 4 hero image',
            title: 'An Ontological Analysis of Walnut Spinning',
            media: 'Material Research, Interaction Design, Installation',
            year: '2024',
            description: 'Rooted in the traditional practice of walnut spinning, this project explores the interplay between humans, nature, and technology. By recasting walnuts in industrial materials and creating interactive experiments, it questions the transformation from natural to artificial and invites audiences to contemplate time, tradition, and embodied experience.',
            detailImages: [
                'design/4/详情页/project4画板 1.jpg',
                'design/4/详情页/project4画板 2.jpg',
                'design/4/详情页/project4画板 3.jpg',
                'design/4/详情页/project4画板 4.jpg',
                'design/4/详情页/project4画板 5.jpg'
            ]
        }
    ],
    computational: [
        {
            src: 'computational arts/0/slow change.jpeg',
            slug: 'slow-change',
            alt: 'Slow Change installation overview',
            title: 'Slow Change',
            media: 'Interactive Installation, Physical Computing, Creative Coding',
            year: '2025',
            description: 'Slow Change is an interactive installation that explores the relationship between touch, trace, and time. Visitors dip Wenwan walnuts in paint and roll them onto three motorized scroll-like canvases moving at different speeds. Each gesture is stretched, layered, and transformed by the motion of the scrolls, gradually accumulating into evolving patterns. Drawing on Chinese material culture and the idea of “slow transformation,” the work makes visible how small, tactile actions unfold into temporal traces, turning intimate touch into collective memory.',
            detailImages: [
                'computational arts/0/详情页/SL1.jpg',
                'computational arts/0/详情页/SL2.jpg',
                'computational arts/0/详情页/SL3.jpg',
                'computational arts/0/详情页/Sl4.jpg',
                'computational arts/0/详情页/SL5.jpg',
                'computational arts/0/详情页/SL6.jpg',
                'computational arts/0/详情页/SL7.jpg'
            ]
        },
        {
            src: 'computational arts/1/in search of meaning.jpg',
            slug: 'in-search-of-meaning',
            alt: 'In Search of Meaning interactive web project',
            title: 'In Search of Meaning',
            media: 'Interactive Web Project, Creative Coding, Generative Text',
            year: '2025',
            description: 'An interactive web project where viewers freely draw on a digital canvas. Each drawing action triggers the generation of a short, dreamlike poem, but the text has no direct relation to the drawing itself. By breaking the expected link between action and outcome, the work invites audiences to reflect on process, rhythm, and attention, rather than on final results. It challenges the assumption that every action must produce a meaningful, visible effect, encouraging participants to find value in the act itself.',
            detailImages: ['computational arts/1/详情页/ISOF.jpg']
        },
        {
            src: 'computational arts/2/collision of fates.jpeg',
            slug: 'collision-of-fates',
            alt: 'Collision of Fates interactive experience',
            title: 'Collision of Fates',
            media: 'Interactive Experience, Creative Coding',
            year: '2024',
            description: 'An interactive p5.js experience exploring the fleeting nature of time and human encounters. Players navigate a traveler across a canvas filled with random objects, each collision triggering ephemeral effects, such as shifting colors, bursts of stars, or expanding ripples. These symbolic visuals echo the transient yet profound impact of life’s intersections, suggesting how fleeting encounters can shape the journey of time.',
            detailImages: [
                'computational arts/2/untitled folder/COF1.jpg',
                'computational arts/2/untitled folder/COF2.jpg',
                'computational arts/2/untitled folder/COF3.jpg',
                'computational arts/2/untitled folder/COF4.jpg',
                'computational arts/2/untitled folder/COF5.jpg',
                'computational arts/2/untitled folder/COF6.jpg'
            ]
        },
        {
            src: 'computational arts/3/Echobloom.JPG',
            slug: 'echobloom',
            alt: 'EchoBloom interactive kaleidoscope',
            title: 'EchoBloom',
            media: 'Interactive Audiovisual Work, Gesture Tracking, Creative Coding',
            year: '2025',
            description: 'An interactive kaleidoscope that responds to hand gestures tracked in real-time with MediaPipe. By adjusting pinch distances, users can modulate both audio speed and dynamic visual effects. The project investigates the relationship between vision and sound, creating an immersive environment where light, color, and rhythm bloom through embodied interaction.',
            detailImages: [
                'computational arts/3/详情页/EB1.jpg',
                'computational arts/3/详情页/EB2.jpg',
                'computational arts/3/详情页/EB3.jpg'
            ]
        },
        {
            src: 'computational arts/4/boundary.jpg',
            slug: 'boundary',
            alt: 'Boundary interactive installation',
            title: 'Boundary',
            media: 'Interactive Installation, Physical Computing, Networked Interaction',
            year: '2025',
            description: 'An interactive installation that explores the dissolution of individuality within a collective network. Using smartphone sensors and real-time data transmission, individual movements are absorbed into a shared digital space where personal traces gradually merge. The work raises questions about technology’s role in shaping human interaction, reflecting on the tension between connection and the loss of self in an increasingly networked society.',
            detailImages: [
                'computational arts/4/详情页/B1.jpg',
                'computational arts/4/详情页/B2.jpg',
                'computational arts/4/详情页/B3.jpg',
                'computational arts/4/详情页/B4.jpg'
            ]
        },
        {
            src: 'computational arts/5/Robtised life.jpeg',
            slug: 'robotised-life',
            alt: 'Robotised Life interactive artwork',
            title: 'Robotised Life',
            media: 'Interactive Artwork, Creative Coding',
            year: '2024',
            description: 'An interactive artwork that critiques industrial farming and its systematic suppression of animal freedom. Using p5.js, the project visualizes the density of caged chickens through dynamic graphics and sound. As the density slider increases, the screen fills with more chickens, whose condition deteriorates sharply, reflecting the irrationality of factory farming. By combining academic theory with interactive media, the work invites audiences to reflect on technological control over life, question the ethical legitimacy of industrial farming, and empathize with non-human beings.',
            detailImages: ['computational arts/5/详情页/R1.jpg']
        },
        {
            src: 'computational arts/6/woobly.JPG',
            slug: 'wobbly-world',
            alt: 'Wobbly World immersive installation',
            title: 'Wobbly World',
            media: 'Immersive Installation, Game Design, Sound',
            year: '2025',
            description: 'An immersive installation where audiences throw a small ball into a virtual space, each bounce triggering unique sounds and visuals. The project explores the idea of “invisible touch” by using auditory and visual feedback to simulate tactile sensations that VR often lacks. Without fixed goals, participants are invited to slow down, listen, and explore multiple whimsical rooms filled with geometric forms, playful rhythms, and dreamlike colors. Through this sensory journey, the work highlights the interplay of hearing, imagination, and perception.',
            detailImages: [
                'computational arts/6/详情页/Wobbly World(1) copy_1_01.jpg',
                'computational arts/6/详情页/Wobbly World(1) copy_2_01.jpg',
                'computational arts/6/详情页/Wobbly World(1) copy_3_01.jpg',
                'computational arts/6/详情页/Wobbly World(1) copy_4_01.jpg',
                'computational arts/6/详情页/Wobbly World(1) copy_5_01.jpg'
            ]
        },
        {
            src: 'computational arts/7/the plants remeber you.jpg',
            slug: 'the-plants-remember-you',
            alt: 'The Plants Remember You interactive scene',
            title: 'The Plants Remember You',
            media: 'Interactive Narrative, Game Design, Creative Coding',
            year: '2025',
            description: 'An interactive scene where plants speak to the player, blending memory, space, and emotion. As players wander through a reimagined neighborhood landscape, they trigger gentle dialogues from plants that recall human presence in whimsical and poetic ways. The work experiments with non-human memory and perspective, offering a quiet form of storytelling where space itself becomes an archive of traces, intimacy, and imagination.',
            detailImages: [
                'computational arts/7/详情页/TPRY1.jpg',
                'computational arts/7/详情页/TPRY2.jpg',
                'computational arts/7/详情页/TPRY3.jpg',
                'computational arts/7/详情页/TPRY4.jpg',
                'computational arts/7/详情页/TPRY5.jpg',
                'computational arts/7/详情页/TPRY6.jpg'
            ]
        },
        {
            src: 'computational arts/8/ex.png',
            slug: 'experiment',
            alt: 'Experiment generative sketches',
            title: 'Experiment',
            media: 'Generative Art, Creative Coding',
            year: '2024',
            description: 'Two coding experiments exploring circles as generative forms. Bloom arranges layered circles into static patterns, while Dividing Delight introduces motion and interactivity, where circles move and split into smaller ones. These sketches test how simple rules can generate unexpected visual outcomes.',
            detailImages: [
                'computational arts/8/详情页/YuxiaoZhan_Sketch Book copy_1_01.jpg',
                'computational arts/8/详情页/YuxiaoZhan_Sketch Book copy_2_01.jpg',
                'computational arts/8/详情页/YuxiaoZhan_Sketch Book copy_3_01.jpg',
                'computational arts/8/详情页/YuxiaoZhan_Sketch Book copy_4_01.jpg',
                'computational arts/8/详情页/YuxiaoZhan_Sketch Book copy_5_01.jpg',
                'computational arts/8/详情页/YuxiaoZhan_Sketch Book copy_6_01.jpg'
            ]
        }
    ],
    fineart: [
        {
            src: 'fine arts/drawing1.jpeg',
            slug: 'luo-hua-yin',
            alt: 'Fine art painting 落花吟',
            title: '落花吟',
            media: 'Oil on Canvas',
            year: '2024',
            dimensions: '160 × 120 cm / 30 × 60 cm',
            description: '《落花吟之一》, 160 × 120 cm, Oil on canvas, 2024 · 《落花吟之二》, 30 × 60 cm, Oil on canvas, 2024'
        },
        {
            src: 'fine arts/drawing2.jpeg?v=20260804-2',
            slug: 'man-yan',
            alt: 'Fine art painting 蔓延',
            title: '蔓延',
            media: 'Oil on Canvas',
            year: '2023',
            dimensions: '60 × 80 cm',
            description: '《蔓延》, 60 × 80 cm, Oil on canvas, 2023'
        },
        {
            src: 'fine arts/drawing3.jpeg',
            slug: 'jing-li',
            alt: 'Fine art painting 静立',
            title: '静立',
            media: 'Oil on Canvas',
            year: '2023',
            dimensions: '150 × 150 cm',
            description: '《静立》, 150 × 150 cm, Oil on canvas, 2023'
        },
        {
            src: 'fine arts/drawing4.jpeg',
            slug: 'wu-ti',
            alt: 'Fine art painting 无题',
            title: '无题',
            media: 'Oil on Canvas',
            year: '2022',
            dimensions: '80 × 60 cm',
            description: '《无题》, 80 × 60 cm, Oil on canvas, 2022'
        },
        {
            src: 'fine arts/drawing5.jpeg',
            slug: 'xuan-zhi',
            alt: 'Fine art painting 悬置',
            title: '悬置',
            media: 'Oil on Canvas',
            year: '2023',
            dimensions: '20 × 30 cm',
            description: '《悬置》, 20 × 30 cm, Oil on canvas, 2023'
        },
        {
            src: 'fine arts/drawing6.jpeg',
            slug: 'study-after-dunhuang-mural',
            alt: 'Fine art study after Dunhuang mural',
            title: 'Study after Dunhuang Mural',
            media: 'Oil on Canvas',
            year: '2022',
            dimensions: '',
            description: 'Study after Dunhuang Mural, Oil on Canvas, 2022'
        },
        {
            src: 'fine arts/drawing7.jpeg',
            slug: 'study-after-willem-kalf',
            alt: 'Fine art study after Willem Kalf',
            title: 'Study after Willem Kalf',
            media: 'Oil on Canvas',
            year: '2023',
            dimensions: '',
            description: 'Study after Willem Kalf, Oil on Canvas, 2023'
        }
    ]
};

let currentCategory = 'computational';

const revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px' })
    : null;

function observeRevealElements(scope = document) {
    const selector = [
        '.portfolio-title',
        '.contact-item',
        '.project-description p',
        '.category-tabs',
        '.work-display',
        '.work-title',
        '.work-meta',
        '.cv-title',
        '.cv-section-title',
        '.cv-item'
    ].join(',');

    scope.querySelectorAll(selector).forEach((element, index) => {
        if (element.classList.contains('reveal-item')) return;
        element.classList.add('reveal-item');
        element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 45}ms`);

        if (revealObserver) {
            revealObserver.observe(element);
        } else {
            element.classList.add('is-visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('worksContainer')) return;

    loadWorks(currentCategory);
    observeRevealElements();

    document.querySelectorAll('button.tab-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const category = this.dataset.category;

            document.querySelectorAll('button.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            loadWorks(category);
            currentCategory = category;
        });
    });
});

function loadWorks(category) {
    const works = worksData[category] || [];
    const worksContainer = document.getElementById('worksContainer');

    worksContainer.innerHTML = '';

    works.forEach(work => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';

        const params = new URLSearchParams();
        params.set('src', work.src);
        params.set('title', work.title);
        params.set('alt', work.alt);
        params.set('desc', work.description);
        if (work.detailImages && work.detailImages.length) {
            params.set('images', JSON.stringify(work.detailImages));
        }
        params.set('category', category);//design的

        const metadata = [work.media, work.year].filter(Boolean).join(' · ');
        const workDetails = `
            <div class="work-details">
                <div class="work-title">${work.title}</div>
                ${metadata ? `<div class="work-meta">${metadata}</div>` : ''}
                ${work.dimensions ? `<div class="work-meta">${work.dimensions}</div>` : ''}
            </div>
        `;

        // ✅ 判断：如果有 detailImages → 生成带链接的详情页
        if ((work.detailImages && work.detailImages.length) || work.detailPage) {
            workItem.innerHTML = `
                <a href="projects/${work.slug}/" style="text-decoration:none; color: inherit; display:block;">
                    <div class="work-display">
                        <img class="work-image" src="${work.src}" alt="${work.alt}" />
                    </div>
                    ${workDetails}
                </a>
            `;
        } else {
            // ❌ 没有 detailImages（比如 fine art）→ 只展示，不跳转
            workItem.innerHTML = `
                <div class="work-display">
                    <img class="work-image" src="${work.src}" alt="${work.alt}" />
                </div>
                ${workDetails}
            `;
        }

        worksContainer.appendChild(workItem);
        observeRevealElements(workItem);
    });

    worksContainer.scrollTop = 0;
}
