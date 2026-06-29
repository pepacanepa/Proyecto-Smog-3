
# Ficha Técnica Metodológica

**Objetivo:** Analizar la evolución de la calidad del aire en Chile (PM2.5) entre 2000–2026, identificando desigualdades territoriales y tendencias de mejora o empeoramiento.

**Fuente de datos:** SINCA, Ministerio del Medio Ambiente de Chile (MMA).  
**Periodo:** 2000–2026.  
**Cobertura:** 16 regiones, más de 80 estaciones de monitoreo.  
**Variable principal:** PM2.5 promedio anual por estación.

---

## Procesamiento
- Limpieza de datos: eliminación de valores nulos y registros no numéricos.  
- Consolidación: cálculo de promedios anuales por estación y por región.  
- Modelado: regresión lineal simple para cada serie temporal.  
- Indicadores: pendiente anual (µg/m³ por año) y coeficiente de determinación R².  
- Criterio de validez: se consideran tendencias robustas cuando R² ≥ 0.4.

---

## Herramientas
- **Python:** Pandas para limpieza y transformación; Altair para visualización.  
- **Visualizaciones:** gráficos de líneas, barras agrupadas y divergentes.  
- **Entrega:** archivos en formatos `.html`, `.jpg` y `.md` para integración en webstory.  
- **Complementos:** CSS y JS para diseño narrativo y despliegue interactivo.

---

## Limitaciones
- Estaciones cerradas o con series cortas reducen la confiabilidad de las tendencias.  
- Eventos extraordinarios (incendios forestales, episodios industriales) generan picos que afectan la pendiente.  
- El promedio regional puede ocultar desigualdades internas entre comunas.

---

## Narrativa asociada
- **Acto I:** expansión de la red y revelación de desigualdades.  
- **Acto II:** contraste entre comunas y regiones, ganadores y perdedores.  
- **Acto III:** brechas metodológicas y zonas ciegas de los datos.
