import { loadProjectPage } from '../projetos/project.js';
import { loadProjectsList } from './projects-list.js';

async function i18nextInit() {
	await i18next
		.use(i18nextHttpBackend)
		.use(i18nextBrowserLanguageDetector)
		.init({
			fallbackLng: 'en', // se não achar, usa inglês
			supportedLngs: ['en', 'pt-BR'], // línguas suportadas
			ns: ['translation'],
			defaultNS: 'translation',
			backend: {
				loadPath: '../locales/{{ lng }}/translation.json',
			},
			debug: true,
		});
	updateContent();
}

function updateContent() {
	const elements = document.querySelectorAll('[data-i18n]');
	elements.forEach((el) => {
		const key = el.getAttribute('data-i18n');
		el.innerHTML = i18next.t(key);
	});
}

i18next.on('languageChanged', () => {
	loadProjectsList();
	loadProjectPage();
});

async function changeLanguage(lng) {
	await i18next.changeLanguage(lng);
	updateContent();
}

window.changeLanguage = changeLanguage;

i18nextInit();
