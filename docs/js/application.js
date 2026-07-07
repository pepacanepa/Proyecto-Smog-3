// Script para insertar el gráfico de expansión nacional
(function(vegaEmbed) {
    var embedOpt = {"mode": "vega-lite"};

    function showError(el, error){
        el.innerHTML = ('<div class="error" style="color:red;">'
                        + '<p>JavaScript Error: ' + error.message + '</p>'
                        + '</div>');
        throw error;
    }

    const el = document.getElementById('vis');
    vegaEmbed("#vis", "visualizaciones/expansion_nacional.html", embedOpt)
      .catch(error => showError(el, error));
})(vegaEmbed);
