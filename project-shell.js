function readProjectPageData() {
    const source = document.getElementById('project-page-data');
    if (!source) return null;
    try { return JSON.parse(source.textContent); }
    catch (error) { return null; }
}

function makeLink(className, href, label, text) {
    const link = document.createElement('a');
    link.className = className;
    link.href = href;
    if (label) {
        const eyebrow = document.createElement('span');
        eyebrow.textContent = label;
        link.appendChild(eyebrow);
    }
    link.append(document.createTextNode(text));
    return link;
}

function ProjectHeader(data) {
    const header = document.createElement('header');
    header.className = 'project-site-header';
    header.append(
        makeLink('project-site-name', data.homeUrl, '', "Yuxiao's portfolio"),
        makeLink('project-back-link', data.homeUrl, '', 'Back to projects')
    );
    return header;
}

function ProjectMeta(items = []) {
    const list = document.createElement('dl');
    list.className = 'project-meta';
    items.filter(item => item.label && item.value).forEach(item => {
        const row = document.createElement('div');
        const term = document.createElement('dt');
        const value = document.createElement('dd');
        term.textContent = item.label;
        value.textContent = item.value;
        row.append(term, value);
        list.appendChild(row);
    });
    return list;
}

function ProjectIntro(data) {
    const section = document.createElement('section');
    section.className = 'project-intro';
    section.setAttribute('aria-labelledby', 'project-title');

    const heading = document.createElement('div');
    const title = document.createElement('h1');
    title.className = 'project-title';
    title.id = 'project-title';
    title.textContent = data.title;
    heading.append(title);

    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = data.description;

    heading.append(description);
    section.append(heading);
    return section;
}

function ProjectCredits(items = []) {
    if (!items.some(item => item.label && item.value)) return null;
    const section = document.createElement('section');
    section.className = 'project-credits';
    section.setAttribute('aria-labelledby', 'project-credits-title');
    const title = document.createElement('h2');
    title.id = 'project-credits-title';
    title.textContent = 'Credits';
    const list = ProjectMeta(items);
    list.className = '';
    section.append(title, list);
    return section;
}

function ProjectNavigation(data) {
    const nav = document.createElement('nav');
    nav.className = 'project-navigation';
    nav.setAttribute('aria-label', 'Project navigation');
    nav.append(
        makeLink('project-previous', data.previous.url, 'Previous project', data.previous.title),
        makeLink('project-all', data.homeUrl, 'Back to', 'All projects'),
        makeLink('project-next', data.next.url, 'Next project', data.next.title)
    );
    return nav;
}

function observeProjectElements() {
    const items = document.querySelectorAll('[data-project-reveal]');
    items.forEach(item => item.classList.add('project-reveal'));
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        items.forEach(item => item.classList.add('is-visible'));
        return;
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: .08, rootMargin: '0px 0px -5% 0px' });
    items.forEach(item => observer.observe(item));
}

function renderProjectShell(data) {
    if (!data || document.body.dataset.projectShellReady === 'true') return;
    document.body.dataset.projectShellReady = 'true';
    const headerMount = document.getElementById('project-header');
    const introMount = document.getElementById('project-intro');
    const creditsMount = document.getElementById('project-credits');
    const navigationMount = document.getElementById('project-navigation');
    headerMount?.replaceWith(ProjectHeader(data));
    introMount?.replaceWith(ProjectIntro(data));
    const credits = ProjectCredits([...(data.meta || []), ...(data.credits || [])]);
    if (credits) creditsMount?.replaceWith(credits); else creditsMount?.remove();
    navigationMount?.replaceWith(ProjectNavigation(data));
    document.title = `${data.title} — Yuxiao Zhan`;
    document.querySelectorAll('.project-site-header, .project-intro > *, .project-credits, .project-navigation').forEach(item => item.setAttribute('data-project-reveal', ''));
    observeProjectElements();
}

window.renderProjectShell = renderProjectShell;
window.observeProjectElements = observeProjectElements;

document.addEventListener('DOMContentLoaded', () => {
    const data = readProjectPageData();
    if (data) renderProjectShell(data);
});
