document.addEventListener("DOMContentLoaded", () => {
  const projectTitle = document.getElementById("projectTitle");
  const projectImage = document.getElementById("projectImage");
  const projectDescription = document.getElementById("projectDescription");

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");
  console.log("oi");

  fetch("../dados.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar o JSON: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      // Carrega boxes com os projetos dinamicamente
      const project = data[projectId - 1];
      projectTitle.innerText = project.nome;
      projectDescription.innerText = project.descricao;
      projectImage.style.cssText = `background: url(${project.imagemHero}) no-repeat center bottom`;
    })
    .catch((error) => console.error(error));
});
