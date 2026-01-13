document.addEventListener("DOMContentLoaded", () => {
  const projectTitle = document.getElementById("projectTitle");
  const projectImage = document.getElementById("projectImage");
  const skillsListTag = document.getElementById("skillsList");
  const projectDescription = document.getElementById("projectDescription");

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

  const classMap = {
    "Next.js": "next",
    HTML: "html",
    CSS: "css",
    JavaScript: "javascript",
    "React.js": "react",
    Bootstrap: "bootstrap",
    Python: "python",
    Django: "django",
    Chalice: "chalice",
    AWS: "aws",
    Docker: "docker",
    PostgreSQL: "postgresql",
    SQL: "sql",
    LLM: "llm",
    RAG: "rag",
    Arduino: "arduino",
    "C/C++": "cpp",
  };

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

      const skillsList = project.skills.split(";");
      skillsList.map((skill) => {
        const item = document.createElement("li");
        item.innerHTML = `<h3>${skill}</h3>`;
        item.className = classMap[skill] ?? "";
        if (item.className) skillsListTag.appendChild(item);
      });

      const paragraphsList = project.descricao.split("\n");
      paragraphsList.map((paragraph) => {
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = paragraph;
        newParagraph.className = "project-description";
        projectDescription.appendChild(newParagraph);
      });

      projectImage.style.cssText = `
      background-image: url(${project.imagemHero});
      background-size: cover;
      background-position: top;
      background-repeat: no-repeat;
       `;

      if (project.linkExternoEhVideo) {
        projectDescription.innerHTML =
          projectDescription.innerHTML +
          `<iframe
            id="youtubeIframe"
            class="fluid-video-wrapper"
            width="650"
            height="367"
            src="${project.linkExterno}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>`;
      }
    })
    .catch((error) => console.error(error));
});
