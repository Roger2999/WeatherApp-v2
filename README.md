# WeatherApp-v2

Versión del desafío "App del Clima" de Frontend Mentor. Esta aplicación muestra el clima actual, pronósticos diarios y horarios, y permite cambiar entre unidades métricas e imperiales. Está construida con React + TypeScript, Vite y Tailwind CSS.

## Vista rápida

- Tecnología: React 19, TypeScript, Vite, Tailwind CSS, Zustand (store), @tanstack/react-query
- API meteorológica: Open-Meteo (consumida desde los servicios en `src/services`)
- Objetivo: reproducir el diseño del desafío Frontend Mentor y ofrecer interacción (búsqueda de ciudad, selector de unidades, pronóstico horario/diario).

## Características

- Búsqueda de ciudades con resultados (componente `CitySearch` / `SearchInput`)
- Visualización del clima actual (componente `CurrentTemp`)
- Pronóstico diario y selector de día (`DailyForecast`, `DailySelector`)
- Pronóstico por horas (`HourlyTemp`)
- Selección de unidades (métricas/imperiales) con persistencia en store (`stores/unitsStore.ts`)
- Hooks reutilizables para consultar datos (`hooks/useWeather.ts`, `useWeatherCity.ts`, `useWeatherData.ts`)

## Estructura principal del proyecto

```
src/
	assets/        # imágenes y iconos
	components/    # componentes React (CurrentTemp, DailyForecast, Header, Footer, ...)
	hooks/         # hooks personalizados
	pages/         # páginas (Home)
	services/      # llamadas a APIs (fetchCityService, fetchWeatherService)
	stores/        # Zustand store (unidades)
	types/         # tipos TypeScript
	utils/         # utilidades (constantes, helpers, icon mapping)
```

## Requisitos

- Node.js (v18+ recomendado)
- npm o pnpm

## Instalación y ejecución (PowerShell / Windows)

Instala dependencias y arranca en modo desarrollo:

```powershell
npm install
npm run dev
```

Construir para producción:

```powershell
npm run build
```

Previsualizar build localmente:

```powershell
npm run preview
```

Ejecutar linter (ESLint):

```powershell
npm run lint
```

## Configuración adicional

- La app consume la API pública de Open-Meteo a través de los servicios en `src/services`. No requiere clave API.
- Si deseas cambiar comportamientos (por ejemplo, unidades por defecto), revisa `stores/unitsStore.ts`.

## Desarrollo y pruebas rápidas

- Para añadir un nuevo componente sigue la convención del repo: crea la carpeta en `src/components`, añade `.tsx` y `.css` si aplica, y exporta en `src/components/index.ts`.
- Los hooks y servicios ya existentes sirven como ejemplo para llamadas asíncronas y control de estado.

## Contribuir

1. Haz fork del repositorio
2. Crea una rama con la feature o fix: `git checkout -b feat/nombre-feature`
3. Haz tus cambios y commitea: `git commit -m "feat: descripción corta"`
4. Abre un Pull Request

Por favor, sigue las buenas prácticas de commits y agrega una descripción clara en el PR.

## Licencia

Este proyecto está abierto para uso educativo y práctica. Añade una licencia si lo vas a publicar públicamente (por ejemplo MIT).
