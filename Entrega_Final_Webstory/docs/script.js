// Activar scroll suave para todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Resaltar sección activa al hacer scroll
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sections.forEach(sec => sec.classList.remove("active"));
      entry.target.classList.add("active");
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Botón "volver arriba"
const backToTop = document.createElement("button");
backToTop.innerText = "↑ Arriba";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px 15px";
backToTop.style.backgroundColor = "#004d7a";
backToTop.style.color = "white";
backToTop.style.border = "none";
backToTop.style.borderRadius = "5px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "1000";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
(function(vegaEmbed) {
    var embedOpt = {"mode": "vega-lite"};

    function showError(el, error){
        el.innerHTML = ('<div class="error" style="color:red;">'
                        + '<p>JavaScript Error: ' + error.message + '</p>'
                        + "<p>Revisa la consola para más detalles.</p>"
                        + '</div>');
        throw error;
    }

    const el = document.getElementById('vis');
    vegaEmbed("#vis", "visualizaciones/expansion_nacional.html", embedOpt)
      .catch(error => showError(el, error));
})(vegaEmbed);
