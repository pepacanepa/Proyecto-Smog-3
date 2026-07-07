# 📂 Subcarpeta de visualizaciones

## 1. Expansión por región
- **Dimensión narrativa:** mostrar cómo la red de monitoreo se descentralizó lentamente, evidenciando desigualdades territoriales.  
- **Mensaje:** las regiones centrales avanzaron primero, mientras el sur se incorporó más tarde con mayores niveles críticos.  
- **Código:** generado con Altair (`expansion_por_region.py`).  
- **Imagen referencial:** `expansion_por_region.png`.  
- **Base de datos:** `expansion_por_region.csv`.  
- **Ficha técnica:** datos oficiales del SINCA, transformados en series anuales por región; limpieza de nulos y cálculo de promedios.

---

## 2. Sur vs Centro
- **Dimensión narrativa:** evidenciar desigualdades territoriales entre la Región Metropolitana y La Araucanía.  
- **Mensaje:** el sur respira peor que el centro; Temuco 2013 como caso crítico.  
- **Código:** script Altair `sur_vs_centro.py`.  
- **Imagen referencial:** `sur_vs_centro.png`.  
- **Base de datos:** `araucania.csv`, `metropolitana.csv`.  
- **Ficha técnica:** series anuales de PM2.5 del SINCA, transformadas a promedios regionales; se destacan picos críticos vinculados a episodios de calefacción residencial.

---

## 3. Tendencias divergentes
- **Dimensión narrativa:** mostrar que medir no basta; algunas regiones mejoran, otras se estancan o empeoran.  
- **Mensaje:** la desigualdad persiste y aún hay territorios invisibles.  
- **Código:** script Altair `tendencias_divergentes.py`.  
- **Imagen referencial:** `tendencias_divergentes.png`.  
- **Base de datos:** `metropolitana.csv`, `bio_bio.csv`, `araucania.csv`.  
- **Ficha técnica:** datos del SINCA procesados en Pandas para calcular pendientes y tendencias; se relacionan con políticas de control ambiental (planes de descontaminación, recambio de calefactores, norma PM2.5).

---

## 4. Expansión RM (Flourish)
- **Dimensión narrativa:** mostrar cómo la Región Metropolitana lideró la expansión de la red de monitoreo, marcando el inicio del registro sistemático de la contaminación del aire en Chile.  
- **Mensaje:** la visualización evidencia el crecimiento sostenido de estaciones en comunas clave como O’Higgins, Pudahuel, La Florida y Las Condes, reflejando el fortalecimiento institucional del monitoreo ambiental.  

### 🔹 Proceso de generación en Flourish
1. **Fuente de datos:** se utilizó la base del **SINCA (Sistema de Información Nacional de Calidad del Aire)**, con registros de estaciones activas por comuna y año.  
2. **Preparación del CSV:**  
   - Se consolidaron los datos en una tabla con columnas: *Comuna*, *Año*, *Número de estaciones*.  
   - Se verificó consistencia temporal y se eliminaron valores nulos.  
3. **Creación en Flourish:**  
   - Se seleccionó la plantilla **Bar Chart Race** para mostrar la evolución dinámica de las estaciones.  
   - Se configuraron los ejes:  
     - Eje X → número de estaciones.  
     - Eje Y → comunas.  
   - Se personalizaron colores, etiquetas y títulos directamente en la interfaz.  
   - Se añadió un texto emergente (“tooltip”) con contexto narrativo: *“En Chile, la contaminación del aire comenzó a registrarse de manera sistemática con la expansión de la red de monitores.”*  
4. **Publicación:**  
   - La visualización se publicó en [Flourish Studio](https://public.flourish.studio/visualisation/29618658/).  
   - Se insertó en el sitio web mediante el código de *embed* que entrega Flourish.  

### 🔹 Archivos asociados
- **Imagen referencial:** `expansion_rm_flourish.png`  
- **Base de datos:** `expansion_rm.csv`  
- **Ficha técnica:** datos del SINCA procesados en CSV; visualización creada en Flourish sin código adicional, solo mediante configuración de plantilla y ajustes visuales.


---

## 📑 Ficha técnica general de las bases de datos
- **Origen:** registros oficiales del **SINCA (Sistema de Información Nacional de Calidad del Aire)**, dependiente del Ministerio del Medio Ambiente de Chile.  
- **Cobertura:** más de 80 estaciones de monitoreo distribuidas en 16 regiones, con series anuales entre 2000 y 2026.  
- **Formato:** CSV por región, con columnas de estaciones y años.  
- **Procesamiento:**  
  - Limpieza de valores nulos y registros no numéricos.  
  - Conversión de separadores y estandarización de nombres de estaciones.  
  - Cálculo de promedios anuales por estación y por región.  
  - Modelado de tendencias mediante regresión lineal simple (pendiente y R²).  
- **Uso:** cada CSV alimenta un script Altair que genera visualizaciones interactivas en HTML y PNG.  
- **Limitaciones:**  
  - Cobertura desigual entre regiones (mayor densidad en la RM, menor en zonas rurales).  
  - Estaciones cerradas o con series cortas reducen confiabilidad.  
  - Eventos extraordinarios (incendios forestales, episodios industriales) generan picos que afectan la pendiente.  
