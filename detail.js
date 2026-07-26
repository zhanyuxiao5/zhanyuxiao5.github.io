function getParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name) || '';
}

function getRouteProject() {
    const match = window.location.pathname.match(/\/projects\/([^/]+)\/?$/);
    if (!match || typeof worksData === 'undefined') return null;

    const slug = decodeURIComponent(match[1]);
    for (const [category, projects] of Object.entries(worksData)) {
        const project = projects.find(item => item.slug === slug);
        if (project) return { ...project, category };
    }

    return null;
}

const defaults = {
    title: 'project',
    src: '',
    alt: '',
    desc: '',
    credit: '',
    gallery: []
};

const projectVideos = {
    'Slow Change': 'https://player.vimeo.com/video/1117334074?badge=0&autopause=0&player_id=0&app_id=58479'
};

const detailRevealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px' })
    : null;

function observeDetailReveal(element, delay = 0) {
    element.classList.add('reveal-item');
    element.style.setProperty('--reveal-delay', `${delay}ms`);

    if (detailRevealObserver) {
        detailRevealObserver.observe(element);
    } else {
        element.classList.add('is-visible');
    }
}

function parseImagesParam() {
    const url = new URL(window.location.href);
    const imagesParam = url.searchParams.get('images');
    if (!imagesParam) return [];
    try {
        const decoded = decodeURIComponent(imagesParam);
        return JSON.parse(decoded);
    } catch (e) {
        return [];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const routeProject = getRouteProject();
    const titleParam = routeProject?.title || getParam('title') || defaults.title;
    const galleryImages = parseImagesParam();
    const rawGallery = routeProject?.detailImages || (galleryImages.length ? galleryImages : defaults.gallery);
    const assetPath = path => routeProject && path ? `../../${path}` : path;
    const finalGallery = rawGallery.map(assetPath);
    const srcParam = assetPath(routeProject?.src) || getParam('src') || finalGallery[0] || defaults.src;
    const altParam = routeProject?.alt || getParam('alt') || defaults.alt || titleParam;
    const descParam = routeProject?.description || getParam('desc') || defaults.desc;
    const creditParam = getParam('credit') || defaults.credit;

    const heroWrapper = document.querySelector('.hero');
    const heroImg = document.getElementById('hero');
    const videoSrc = projectVideos[titleParam];
    
    const categoryParam = routeProject?.category || getParam('category');   // ✅ 读取分类
    const pageFrame = document.querySelector('.page-frame');
    if (categoryParam === 'design') {
        pageFrame.classList.add('fullscreen');   // ✅ 如果是 design，加上特殊 class
    }

    if (videoSrc) {
        heroImg.remove();
        const videoFrame = document.createElement('iframe');
        videoFrame.className = 'project-video';
        videoFrame.src = videoSrc;
        videoFrame.title = titleParam;
        videoFrame.allow = 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share';
        videoFrame.referrerPolicy = 'strict-origin-when-cross-origin';
        videoFrame.allowFullscreen = true;
        heroWrapper.appendChild(videoFrame);
        heroWrapper.style.display = '';
    } else if (srcParam) {
        // heroImg.src = srcParam;
        // heroImg.alt = altParam;
        heroWrapper.style.display = '';
    } else {
        heroWrapper.style.display = 'none';
    }
    document.getElementById('docTitle').textContent = titleParam;
    document.title = `${titleParam} — Yuxiao Zhan`;
    const descWrapper = document.querySelector('.content');
    const descEl = document.getElementById('desc');
    if (descParam) {
        // descEl.textContent = descParam;
        descWrapper.style.display = '';
    } else {
        descWrapper.style.display = 'none';
    }
    const creditEl = document.getElementById('credit');
    if (creditParam) {
        // creditEl.textContent = creditParam;
        creditEl.style.display = '';
    } else {
        creditEl.style.display = 'none';
    }
    const galleryContainer = document.getElementById('gallery');
    finalGallery.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = titleParam || 'detail image';
        galleryContainer.appendChild(img);
        observeDetailReveal(img);
    });
    if (!finalGallery.length) {
        galleryContainer.style.display = 'none';
    }

    document.querySelectorAll('.page-title, .meta, .hero, .credit, .content').forEach((element, index) => {
        if (getComputedStyle(element).display !== 'none') {
            observeDetailReveal(element, Math.min(index, 3) * 45);
        }
    });
});
