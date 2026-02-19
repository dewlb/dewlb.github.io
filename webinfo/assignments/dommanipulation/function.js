function showFilter() {
  document.getElementById("filterContent").style.display = "block";
  document.getElementById("newContent").style.display = "none";
}

function showAddNew() {
  document.getElementById("newContent").style.display = "flex";
  document.getElementById("filterContent").style.display = "none";
}

function filterArticles() {
  const showOpinion = document.getElementById("opinionCheckbox").checked;
  const showRecipe  = document.getElementById("recipeCheckbox").checked;
  const showUpdate  = document.getElementById("updateCheckbox").checked;

  document.querySelectorAll("#articleList article").forEach(a => {
    if (a.classList.contains("opinion")) a.style.display = showOpinion ? "" : "none";
    if (a.classList.contains("recipe"))  a.style.display = showRecipe  ? "" : "none";
    if (a.classList.contains("update"))  a.style.display = showUpdate  ? "" : "none";
  });
}

function addNewArticle() {
  const title = document.getElementById("inputHeader").value;
  const text  = document.getElementById("inputArticle").value;

  let type = "update", label = "Update";
  if (document.getElementById("opinionRadio").checked) { type = "opinion"; label = "Opinion"; }
  if (document.getElementById("recipeRadio").checked)  { type = "recipe";  label = "Recipe"; }
  if (document.getElementById("lifeRadio").checked)    { type = "update";  label = "Update"; }

  const a = document.createElement("article");
  a.className = type;
  a.innerHTML = `<span class="marker">${label}</span><h2>${title}</h2><p>${text}</p>`;

  document.getElementById("articleList").prepend(a);

  filterArticles();

  document.getElementById("inputHeader").value = "";
  document.getElementById("inputArticle").value = "";
}

