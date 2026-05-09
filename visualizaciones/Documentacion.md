# Documentación

## 1. Proceso de visualización
Las visualizaciones fueron creadas con la librería **Altair** en Python, en Google Colab.  
Pasos principales:
- Limpieza de la base de datos original (`basedatos3.csv`), reemplazando guiones por valores nulos y luego por 0 en el caso de **La Pintana**.  
- Conversión de valores de PM2,5 a formato numérico (`float`) para asegurar consistencia.  
- Transformación de la base a formato largo con `pd.melt`, lo que permitió graficar barras dobles lado a lado.  
- Configuración de escalas uniformes (0–51 µg/m³) para todas las estaciones, garantizando comparabilidad.  
- Exportación de las visualizaciones en formatos `.html` (interactivo) y `.jpg` (estático).

## 2. Base de datos utilizada
Se utilizó el archivo `basedatos3.csv`, que contiene registros de 14 estaciones de monitoreo en Santiago.  
Procesamiento:
- Se reemplazaron valores faltantes (`-`) por 0 en el caso de La Pintana.  
- Se homogenizó el formato decimal (coma → punto).  
- Se filtraron y transformaron las columnas relevantes: **Estación**, **Comuna**, **PM2,5 primer año**, **PM2,5 último ingreso**.  
Motivo de selección: es una base con información oficial del SINCA y podría ser representativa de la evolución de la calidad del aire en distintas comunas de Santiago.

## 3. Preguntas que responde la visualización
- ¿Qué comunas han mejorado sus niveles de PM2,5 entre el primer y último ingreso?  
- ¿Qué comunas han empeorado o mantenido altos niveles de contaminación?  
- ¿Cómo se distribuye la desigualdad ambiental en Santiago según los registros de las estaciones?  
- ¿Qué comunas carecen de datos históricos y qué significa esa ausencia?

## 4. Ficha técnica de la base de datos
**Características:**  
- Fuente: archivo `basedatos3.csv` (datos de estaciones de monitoreo del SINCA).  
- Cobertura temporal: primer ingreso y último ingreso (según estación).  
- Unidades: µg/m³ (microgramos por metro cúbico).

**Variables:**
| Variable                | Descripción                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| Estación                 | Nombre de la estación de monitoreo                                          |
| Comuna                   | Comuna donde se ubica la estación                                          |
| primer ingreso           | Fecha del primer registro disponible                                       |
| PM2,5 primer año         | Nivel de PM2,5 en el primer registro                                       |
| último ingreso           | Fecha del último registro disponible                                       |
| PM2,5 último ingreso     | Nivel de PM2,5 en el último registro                                       |
| Dirección                | Ubicación física de la estación                                            |

**Observaciones:**
- La Pintana no cuenta con registros históricos, por lo que se asignó valor 0 para mantenerla en la comparación.  
- Puente Alto presenta un valor inicial muy bajo (≈2,7 µg/m³), lo que requiere contexto interpretativo.  
- Independencia muestra un aumento significativo, alcanzando el máximo valor de la base (52 µg/m³).  
