//your JS code here. If required.
// Replace this with your actual blog data
const blogData = {
  categories: [
    { title: "News", articles: [...] },
    { title: "Reviews", articles: [...] },
    { title: "Tips & Tricks", articles: [...] },
    { title: "Interviews", articles: [...] },
  ],
};

// Initialize template engine (e.g., Handlebars or Mustache)
const template = document.getElementById("article-template").innerHTML;

// Inject articles into each column
blogData.categories.forEach((category) => {
  const column = document.querySelector(".column");
  column.innerHTML = Mustache.render(template, category); // Replace Mustache with your chosen template engine
});

// Adjust column heights dynamically (optional)
function adjustColumnHeights() {
  const columns = document.querySelectorAll(".column");
  const maxHeight = Math.max(...columns.map((column) => column.offsetHeight));
  columns.forEach((column) => column.style.minHeight = `${maxHeight}px`);
}

// Adjust heights on window resize
window.addEventListener("resize", adjustColumnHeights);

// Call adjust heights initially
adjustColumnHeights();
