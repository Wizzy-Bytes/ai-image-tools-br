function generateToolCards() {
  const grid = document.querySelector(".tools-grid");
  const template = document.querySelector("#tool-card-template");

  tools
    .filter((tool) => tool.id && tool.name)
    .forEach((tool) => {
      const card = template.cloneNode(true);

      card.removeAttribute("id");
      card.setAttribute("data-tool", tool.id);

      // Substitui os conteúdos dos elementos pelo dado real
      card.querySelector(".tool-name").textContent = tool.name;
      card.querySelector(".tool-description").textContent = tool.description;
      card.querySelector(".tool-purpose-text").textContent = tool.purpose;
      card.querySelector("a.tool-button").href = tool.url;

      card.classList.remove("hidden");

      grid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", generateToolCards);
