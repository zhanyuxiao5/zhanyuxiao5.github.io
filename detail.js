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
        photography: 'Photography & Moving Image'
    }[category] || category;
}

function fineArtMetadata(description) {
    const items = [{ label: 'Discipline', value: 'Fine Art' }];
    const dimensions = description.match(/\d+\s*[×x]\s*\d+\s*cm/i);
    const year = description.match(/\b(19|20)\d{2}\b/);
    if (/oil on canvas/i.test(description)) items.push({ label: 'Medium', value: 'Oil on canvas' });
    if (dimensions) items.push({ label: 'Dimensions', value: dimensions[0].replace(/x/i, '×') });
    if (year) items.push({ label: 'Year', value: year[0] });
    return items;
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
        meta: category === 'fineart'
            ? fineArtMetadata(project.description)
            : [{ label: 'Discipline', value: projectCategoryLabel(category) }],
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

    const heading = document.querySelector('.project-section-heading h2');
    const supporting = document.querySelector('.project-section-heading p:last-child');
    if (category === 'fineart') {
        heading.textContent = 'Artwork';
        supporting.textContent = 'Artwork documentation.';
    } else if (category === 'design') {
        heading.textContent = 'Project Documentation';
        supporting.textContent = 'Visual development, research and project outcomes.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const route = getRouteProject();
    if (!route) return;
    renderProjectMedia(route);
    window.renderProjectShell(makeProjectData(route));
});
