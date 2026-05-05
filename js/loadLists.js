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
	if (!certificatesList) {
		console.log('deu ruim');
		return;
	}

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
			const certificates = data.certificados;
			certificates.map((certificate, i) => {
				const item = document.createElement('div');
				item.className = 'service';
				item.innerHTML = `
          <h3>${i18next.t(`certificates.carousel.${i}.title`)}</h3>
						<a
							class="icon"
							href="${certificate.link}"
							target="_blank"
						>
							<img
								src="${certificate.imagePath}"
								alt="${certificate.imageDescription}"
							/>
						</a>
        `;
				certificatesList.appendChild(item);
			});
			setTimeout(() => {
				const $ = window.jQuery;

				$('#owl-slider').owlCarousel({
					navigation: true,
					pagination: true,
					itemsCustom: [
						[0, 1],
						[1100, 2],
					],
					navigationText: false,
					autoHeight: true,
				});
			}, 0);
			
		})
		.catch((error) => console.error(error));
}
