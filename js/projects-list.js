export async function loadProjectsList() {
	const projectList = document.getElementById('projectList');
	if (!projectList) return;

	projectList.innerHTML = '';

	fetch('./dados.json')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Erro ao carregar o JSON: ' + response.status);
			}
			return response.json();
		})
		.then((data) => {
			// Carrega boxes com os projetos dinamicamente
			const projects = data;
			projects.map((project, i) => {
				const item = document.createElement('li');
				item.className = 'folio-item';
				item.innerHTML = `
          <a href=/projetos/?id=${i + 1}>
            <figure>
              <img src=${project.imagemHome} alt="${project.nome}" />
              <figcaption>
                <h3>${i18next.t(`portfolio.projects.${i}.title`)}</h3>
                <p>${i18next.t(`portfolio.projects.${i}.mini-description`)}</p>
              </figcaption>
            </figure>
          </a>
        `;
				projectList.appendChild(item);
			});
		})
		.catch((error) => console.error(error));
}
