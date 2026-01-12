document.addEventListener("DOMContentLoaded", () => {
  const projectTitle = document.getElementById("projectTitle");
  const projectImage = document.getElementById("projectImage");
  const projectDescription = document.getElementById("projectDescription");

  // Obtém ID
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  function returnToHome() {
    window.location.href = "/";
  }

  // Verifica de ID existe
  if (!projectId) returnToHome();

  // Verifica se o ID é um número
  const num = Number(projectId);
  console.log(num);
  if (Number.isNaN(num)) returnToHome();

  fetch("../dados.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar o JSON: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      // Verifica se o número de ID é menor ou igual ao tamanho do array data
      if (data.length <= projectId) returnToHome();

      // Carrega boxes com os projetos dinamicamente
      const project = data[projectId - 1];
      projectTitle.innerText = project.nome;
      projectDescription.innerText = project.descricao;
      projectImage.style.cssText = `
      background-image: url(${project.imagemHero});
      background-size: cover;
      background-position: top;
      background-repeat: no-repeat;
       `;
    })
    .catch((error) => console.error(error));
});
