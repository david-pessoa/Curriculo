export async function loadProjectsList() {
	const projectList = document.getElementById('projectList');
	if (!projectList) return;

	projectList.innerHTML = '';

	fetch('./dados.json')
		.then((response) => {
			if (!response.ok) {
				throw new Error(
					'Erro ao carregar o JSON com projetos: ' + response.status
				);
			}
			return response.json();
		})
		.then((data) => {
			// Carrega boxes com os projetos dinamicamente
			const projects = data.projetos;
			projects.map((project, i) => {
				const item = document.createElement('li');
				item.className = 'folio-item';
				item.innerHTML = `
          <a href=/projetos/?id=${i + 1}>
            <figure>
              <img src="${project.imagemHome}" alt="${project.nome}" />
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

export async function loadCertificatesList() {
	const certificatesList = document.getElementById('owl-slider');
	if (!certificatesList) return;

	certificatesList.innerHTML = '';

	fetch('./dados.json')
		.then((response) => {
			if (!response.ok) {
				throw new Error(
					'Erro ao carregar o JSON com certificados: ' + response.status
				);
			}
			return response.json();
		})
		.then((data) => {
			// Carrega boxes com os projetos dinamicamente
			const certificates = data;
			certificates.map((project, i) => {
				const item = document.createElement('div');
				item.className = 'service';
				item.innerHTML = `
          <h3 data-i18n=${i18next.t(`portfolio.projects.${i}.title`)}>
							Certificado do curso de Introdução à Inteligência Artificial Generativa
						</h3>
						<a
							class="icon"
							href="https://www.skills.google/public_profiles/6c9bab69-6090-458a-bf56-de1248b18c8e/badges/23751369"
							target="_blank"
						>
							<img
								src="images/certificados/Introduction-to-Gen-AI.png"
								alt="Badge do curso de Introdução a Gen AI"
							/>
						</a>
        `;
				certificatesList.appendChild(item);
			});
		})
		.catch((error) => console.error(error));
}
