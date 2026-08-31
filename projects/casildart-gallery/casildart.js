const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
}

document.querySelectorAll('[data-drag-gallery]').forEach((gallery) => {
    gallery.querySelectorAll('img').forEach((image) => { image.draggable = false; });

    const shell = document.createElement('div');
    shell.className = 'gallery-shell';
    gallery.before(shell);
    shell.appendChild(gallery);

    const controls = document.createElement('div');
    controls.className = 'gallery-controls';
    controls.setAttribute('aria-label', 'Gallery navigation');
    const previousButton = document.createElement('button');
    const nextButton = document.createElement('button');
    previousButton.className = 'gallery-control gallery-control-previous';
    nextButton.className = 'gallery-control gallery-control-next';
    previousButton.type = 'button';
    nextButton.type = 'button';
    previousButton.setAttribute('aria-label', 'Previous images');
    nextButton.setAttribute('aria-label', 'Next images');
    previousButton.textContent = '‹';
    nextButton.textContent = '›';
    controls.append(previousButton, nextButton);
    shell.appendChild(controls);

    let dragging = false;
    let interacting = false;
    let startX = 0;
    let startScrollLeft = 0;
    let direction = 1;
    let lastFrame = performance.now();
    let touchResumeTimer;

    const updateControls = () => {
        const scrollable = gallery.classList.contains('is-scrollable');
        const maxScroll = Math.max(0, gallery.scrollWidth - gallery.clientWidth);
        controls.hidden = !scrollable;
        previousButton.disabled = !scrollable || gallery.scrollLeft <= 2;
        nextButton.disabled = !scrollable || gallery.scrollLeft >= maxScroll - 2;
    };

    const updateOverflow = () => {
        const scrollable = gallery.scrollWidth > gallery.clientWidth + 2;
        gallery.classList.toggle('is-scrollable', scrollable);
        gallery.tabIndex = scrollable ? 0 : -1;
        if (!scrollable) gallery.scrollLeft = 0;
        updateControls();
    };

    gallery.querySelectorAll('img').forEach((image) => {
        if (!image.complete) image.addEventListener('load', updateOverflow, { once: true });
    });
    updateOverflow();
    window.addEventListener('resize', updateOverflow);
    gallery.addEventListener('scroll', updateControls, { passive: true });

    const pauseAfterControl = () => {
        clearTimeout(touchResumeTimer);
        interacting = true;
        touchResumeTimer = setTimeout(() => { interacting = false; }, 900);
    };

    previousButton.addEventListener('click', () => {
        pauseAfterControl();
        gallery.scrollBy({ left: -gallery.clientWidth * 0.75, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
        pauseAfterControl();
        gallery.scrollBy({ left: gallery.clientWidth * 0.75, behavior: 'smooth' });
    });

    gallery.addEventListener('pointerdown', (event) => {
        if (!gallery.classList.contains('is-scrollable') || event.pointerType !== 'mouse' || event.button !== 0) return;
        dragging = true;
        interacting = true;
        startX = event.clientX;
        startScrollLeft = gallery.scrollLeft;
        gallery.classList.add('is-dragging');
        gallery.setPointerCapture(event.pointerId);
    });

    gallery.addEventListener('pointermove', (event) => {
        if (!dragging) return;
        gallery.scrollLeft = startScrollLeft - (event.clientX - startX);
        event.preventDefault();
    });

    const endDrag = (event) => {
        if (!dragging) return;
        dragging = false;
        interacting = false;
        gallery.classList.remove('is-dragging');
        if (gallery.hasPointerCapture(event.pointerId)) gallery.releasePointerCapture(event.pointerId);
    };

    gallery.addEventListener('pointerup', endDrag);
    gallery.addEventListener('pointercancel', endDrag);

    gallery.addEventListener('mouseenter', () => { interacting = true; });
    gallery.addEventListener('mouseleave', () => { if (!dragging) interacting = false; });
    gallery.addEventListener('focusin', () => { interacting = true; });
    gallery.addEventListener('focusout', () => { interacting = false; });
    gallery.addEventListener('touchstart', () => {
        clearTimeout(touchResumeTimer);
        interacting = true;
    }, { passive: true });
    gallery.addEventListener('touchend', () => {
        touchResumeTimer = setTimeout(() => { interacting = false; }, 1200);
    }, { passive: true });

    gallery.addEventListener('keydown', (event) => {
        if (!gallery.classList.contains('is-scrollable') || (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight')) return;
        gallery.scrollBy({ left: event.key === 'ArrowLeft' ? -240 : 240, behavior: 'smooth' });
        event.preventDefault();
    });

    const autoScroll = (time) => {
        const elapsed = Math.min(time - lastFrame, 50);
        lastFrame = time;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (gallery.classList.contains('is-scrollable') && !interacting && !reducedMotion) {
            const maxScroll = gallery.scrollWidth - gallery.clientWidth;
            gallery.scrollLeft += direction * elapsed * 0.018;
            if (gallery.scrollLeft >= maxScroll - 1) direction = -1;
            if (gallery.scrollLeft <= 1) direction = 1;
        }
        requestAnimationFrame(autoScroll);
    };

    requestAnimationFrame(autoScroll);
});
