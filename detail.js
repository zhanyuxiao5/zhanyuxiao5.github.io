function getRouteProject() {
    const match = window.location.pathname.match(/\/projects\/([^/]+)\/?$/);
    if (!match || typeof worksData === 'undefined') return null;
    const slug = decodeURIComponent(match[1]);
    for (const [category, projects] of Object.entries(worksData)) {
        const index = projects.findIndex(item => item.slug === slug);
        if (index >= 0) return { project: projects[index], category, index };
    }
    return null;
}

function projectCategoryLabel(category) {
    return {
        computational: 'Computational Arts',
        design: 'Design',
        fineart: 'Fine Art',
        photography: 'Photography & Video'
    }[category] || category;
}

function allRoutedProjects() {
    const order = ['computational', 'design', 'photography'];
    return order.flatMap(category => (worksData[category] || [])
        .filter(item => item.slug && (item.detailImages?.length || item.detailPage))
        .map(item => ({ ...item, category })));
}

function navigationFor(slug) {
    const projects = allRoutedProjects();
    const index = projects.findIndex(item => item.slug === slug);
    const previous = projects[(index - 1 + projects.length) % projects.length];
    const next = projects[(index + 1) % projects.length];
    return {
        previous: { title: previous.title, url: `../${previous.slug}/` },
        next: { title: next.title, url: `../${next.slug}/` }
    };
}

function makeProjectData(route) {
    const { project, category } = route;
    const navigation = navigationFor(project.slug);
    return {
        title: project.title,
        category: projectCategoryLabel(category),
        description: project.description,
        homeUrl: '../../index.html',
        meta: [
                { label: 'Medium', value: project.media || projectCategoryLabel(category) },
                { label: 'Year', value: project.year }
            ].filter(item => item.value),
        credits: [{ label: category === 'design' ? 'Designer' : 'Artist', value: 'Yuxiao Zhan' }],
        previous: navigation.previous,
        next: navigation.next
    };
}

function renderProjectMedia(route) {
    const { project, category } = route;
    const content = document.querySelector('.generic-project-content');
    const gallery = document.getElementById('generic-project-gallery');
    if (!content || !gallery) return;
    content.classList.add(`is-${category}`);

    const images = project.detailImages?.length ? project.detailImages : [project.src];
    images.forEach((source, index) => {
        const figure = document.createElement('figure');
        figure.setAttribute('data-project-reveal', '');
        const image = document.createElement('img');
        image.src = `../../${source}`;
        image.alt = `${project.title} documentation ${index + 1}`;
        image.loading = index === 0 ? 'eager' : 'lazy';
        figure.appendChild(image);
        gallery.appendChild(figure);
    });

    document.querySelector('.generic-project-content .project-section-heading')?.remove();
}

document.addEventListener('DOMContentLoaded', () => {
    const route = getRouteProject();
    if (!route) return;
    renderProjectMedia(route);
    window.renderProjectShell(makeProjectData(route));
});
