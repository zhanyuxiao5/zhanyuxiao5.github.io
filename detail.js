function getParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name) || '';
}

const defaults = {
    title: 'project',
    src: '',
    alt: '',
    desc: '',
    credit: '',
    gallery: []
};

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
    const titleParam = getParam('title') || defaults.title;
    const galleryImages = parseImagesParam();
    const finalGallery = galleryImages.length ? galleryImages : defaults.gallery;
    const srcParam = getParam('src') || finalGallery[0] || defaults.src;
    const altParam = getParam('alt') || defaults.alt || titleParam;
    const descParam = getParam('desc') || defaults.desc;
    const creditParam = getParam('credit') || defaults.credit;

    const heroWrapper = document.querySelector('.hero');
    const heroImg = document.getElementById('hero');
    
    const categoryParam = getParam('category');   // ✅ 读取分类
    const pageFrame = document.querySelector('.page-frame');
    if (categoryParam === 'design') {
        pageFrame.classList.add('fullscreen');   // ✅ 如果是 design，加上特殊 class
    }

    if (srcParam) {
        // heroImg.src = srcParam;
        // heroImg.alt = altParam;
        heroWrapper.style.display = '';
    } else {
        heroWrapper.style.display = 'none';
    }
    document.getElementById('docTitle').textContent = titleParam;
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
    });
    if (!finalGallery.length) {
        galleryContainer.style.display = 'none';
    }
});

