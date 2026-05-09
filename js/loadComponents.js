export async function loadComponent(elemSelector, file) {
  const element = document.querySelector(elemSelector);

  const response = await fetch(file);
  const html = await response.text();
  element.innerHTML = html;
}