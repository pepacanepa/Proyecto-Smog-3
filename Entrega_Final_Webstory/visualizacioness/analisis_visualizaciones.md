## Subcarpeta de visualizaciones

### Acto I — Expansión nacional y regional
- **Dimensión narrativa:** mostrar cómo Chile pasó de medir solo en Santiago a expandir la red a todo el país.  
- **Mensaje:** la visibilización progresiva del aire y la desigualdad regional.  
- **Código:** generado con Altair, guardado como `acto1_expansion_red.html` y `acto1_expansion_por_region.html`.  
- **Imagen referencial:** gráficos de barras y líneas que muestran el crecimiento de estaciones.  
- **Base de datos:** CSV por región (`metropolitana.csv`, `valparaiso.csv`, etc.).  
- **Ficha técnica:** datos oficiales de estaciones de monitoreo, transformados a series anuales de PM2.5.

---

### Acto II — Sur vs Centro
- **Dimensión narrativa:** evidenciar desigualdades territoriales entre la Región Metropolitana y La Araucanía.  
- **Mensaje:** el sur respira peor que el centro; Temuco 2013 como caso crítico.  
- **Código:** script Altair `acto2_sur_vs_centro.html`.  
- **Imagen referencial:** gráfico de líneas comparando ambas regiones, con el pico de Temuco en 2013 (50.8 µg/m³).  
- **Base de datos:** CSV de La Araucanía y Metropolitana.  
- **Ficha técnica:** series anuales de PM2.5, transformadas a promedios regionales.

---

### Acto III — Tendencias divergentes
- **Dimensión narrativa:** mostrar que medir no basta; algunas regiones mejoran, otras se estancan o empeoran.  
- **Mensaje:** la desigualdad persiste y aún hay territorios invisibles.  
- **Código:** script Altair `acto3_tendencias_divergentes.html`.  
- **Imagen referencial:** gráfico de líneas con tres regiones: Metropolitana (descenso), Bío Bío (estancamiento), Araucanía (pico crítico).  
- **Base de datos:** CSV de cada región (`metropolitana.csv`, `bio bio.csv`, `araucania.csv`).  
- **Ficha técnica:** datos oficiales de estaciones, procesados en Pandas para calcular pendientes y tendencias.

---

### Ficha técnica general de las bases de datos
- **Origen:** registros oficiales de la red de monitoreo de calidad del aire en Chile.  
- **Formato:** CSV por región, con columnas de estaciones y años.  
- **Procesamiento:** limpieza de valores nulos, conversión de separadores, cálculo de promedios anuales y pendientes.  
- **Uso:** cada CSV alimenta un script Altair que genera visualizaciones interactivas en HTML y PNG.  
- **Limitaciones:** cobertura desigual entre regiones, ausencia de datos en comunas rurales, estaciones intermitentes.
