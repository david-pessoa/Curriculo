document.addEventListener("DOMContentLoaded", () => {
  const projectTitle = document.getElementById("projectTitle");
  const projectImage = document.getElementById("projectImage");
  const projectDescription = document.getElementById("projectDescription");
  const youtubeIframe = document.getElementById("youtubeIframe");

  // Obtém ID
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  function returnHome() {
    window.location.href = "/";
  }

  // Verifica de ID existe
  if (!projectId) returnHome();

  // Verifica se o ID é um número
  const num = Number(projectId);
  if (Number.isNaN(num) || num <= 0) returnHome();

  fetch("../dados.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar o JSON: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      // Verifica se o número de ID é menor ou igual ao tamanho do array data
      if (data.length < projectId) returnHome();

      // Carrega boxes com os projetos dinamicamente
      const project = data[projectId - 1];
      projectTitle.innerText = project.nome;

      const paragraphsList = project.descricao.split('\n');
      paragraphsList.map((paragraph) => {
        const newParagraph = document.createElement('p')
        newParagraph.innerHTML = paragraph
        newParagraph.className = 'project-description'
        projectDescription.appendChild(newParagraph)
      })
      
      projectImage.style.cssText = `
      background-image: url(${project.imagemHero});
      background-size: cover;
      background-position: top;
      background-repeat: no-repeat;
       `;

       if (project.linkExternoEhVideo) {
        youtubeIframe.style.display = "flex"
       }
    })
    .catch((error) => console.error(error));
});
