// 项目数据示例
const projects = [
    {
        title: "项目名称1",
        description: "项目描述...",
        tags: ["JavaScript", "HTML", "CSS"],
        link: "#"
    },
    // 添加更多项目...
];

// 渲染项目卡片
function renderProjects() {
    const projectGrid = document.querySelector('.project-grid');
    projectGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${project.link}" class="view-project">查看项目</a>
        </div>
    `).join('');
}

// 搜索功能
function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProjects = projects.filter(project => 
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        // 更新显示的项目
        renderFilteredProjects(filteredProjects);
    }

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupSearch();
});