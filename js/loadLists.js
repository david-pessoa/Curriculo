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

// Inicia o Swiper
function initializeSwiper() {
	// Lógica do Carrossel de depoimentos
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		slidesPerView: 'auto',
		centeredSlides: false,
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		// using "ratio" endpoints
		breakpoints: {
			600: {
				slidesPerView: 'auto',
				spaceBetween: 50,
				centeredSlides: true,
			},
			300: {
				slidesPerView: 'auto',
				spaceBetween: 30,
				centeredSlides: true,
			},
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}

export async function loadCertificatesList() {
	const certificatesList = document.getElementById('certificatesList');
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
				item.className = 'swiper-slide';
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
			initializeSwiper();
		})
		.catch((error) => console.error(error));
}
