# 📊 Dashboard Administrativo — Sistema de Monitoreo Web (SPA)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](#)

## 📝 Descripción del Proyecto

Este proyecto consiste en una **Interfaz de Administración Centralizada (Dashboard)** diseñada bajo el paradigma de aplicación de una sola página (*Single Page Application* - SPA). El sistema permite visualizar indicadores clave de rendimiento (*KPIs*), consultar tablas de auditoría en tiempo real, revisar analíticas de tráfico y gestionar configuraciones globales como el tema visual del entorno.

El desarrollo fue ejecutado priorizando la **semántica web**, la **accesibilidad universal (WAI-ARIA)**, una **arquitectura híbrida de maquetación (CSS Grid + Flexbox)** y la interacción dinámica con **JavaScript ES6+**.

---

## 🚀 Despliegue y Acceso

La aplicación se encuentra desplegada en producción a través de la infraestructura de **GitHub Pages**:

🌐 **Sitio Web en Vivo:** [https://johandavidvargasclavijo-droid.github.io/dashboard/](https://johandavidvargasclavijo-droid.github.io/dashboard/)

---

## 🏛️ Arquitectura y Decisiones Técnicas

### 1. Maquetación Híbrida: CSS Grid vs. Flexbox
Para la estructura visual se aplicó una clara separación de responsabilidades:
* **CSS Grid (Estructura Bidimensional):** Se utilizó en el contenedor principal (`.dashboard-container`) mediante `grid-template-areas`. Esto permite definir de forma declarativa las zonas de `sidebar`, `header`, `main` y `footer`, reordenándolas limpiamente en dispositivos móviles sin alterar la semántica del HTML.
* **Flexbox (Alineación Unidimensional):** Se empleó en el interior de cada componente (barras de herramientas, navegación lateral, encabezados de tarjetas, controles de configuración y registros) para garantizar la alineación vertical, el centrado de iconos y la distribución proporcional de espacios (`gap`, `justify-content: space-between`).

### 2. Accesibilidad Universal (WAI-ARIA & UX)
* **Semántica Estructural:** Uso estricto de elementos `<header>`, `<aside>`, `<main>`, `<section>`, `<article>`, `<table>` y `<footer>`.
* **Navegación por Teclado:** Todas las tarjetas e interactivos incluyen `tabindex="0"` y manejadores de eventos para las teclas `Enter` y `Espacio`.
* **Soporte para Lectores de Pantalla:** Atributos dinámicos como `aria-expanded`, `aria-pressed`, `aria-current="page"`, `aria-hidden="true"` en iconos y estados de visibilidad (`hidden`).
* **Soporte de Movimiento Reducido:** Implementación de la *media query* `@media (prefers-reduced-motion: reduce)` para desactivar animaciones si el usuario lo requiere por motivos de salud o preferencia.

### 3. Lógica Frontend y Manipulación del DOM (JavaScript ES6+)
* **Navegación SPA:** Sistema de pestañas sin recarga de página mediante atributos personalizables (`data-target`) y control dinámico de visibilidad.
* **Buscador Reactivo:** Filtrado en tiempo real sobre la tabla de actividades que oculta filas no coincidentes y despliega un mensaje cuando no hay resultados.
* **Gestión de Estado y Persistencia:** Implementación de Modo Oscuro alternando atributos de datos (`data-theme="dark"`) en la raíz del documento (`<html>`) y persistiendo la selección en `localStorage`.

---

## ⚙️ Características Principales

* 🌓 **Modo Oscuro Persistente:** Cambio de tema fluido mediante variables CSS (`Custom Properties`) guardado en la memoria local del navegador.
* 📱 **Diseño Totalmente Responsivo:** Adaptación completa a resoluciones de escritorio, tablets y dispositivos móviles (menú colapsable/superior dinámico).
* 🔍 **Filtro de Tabla en Vivo:** Búsqueda instantánea por nombre, ID o acción sobre el historial de auditoría.
* ⌨️ **Totalmente Navegable por Teclado:** Foco visual altamente visible (`:focus-visible`) para usuarios que no utilicen ratón.
* 📊 **Métricas e Historial de Prueba:** Visualización de métricas estáticas (*mock data*) estructuradas para integración con futuras APIs REST.

---

## 📁 Estructura del Repositorio

```text
dashboard/
├── index.html     # Estructura HTML5 semántica y marcas de accesibilidad ARIA
├── styles.css     # Estilos globales, CSS Grid, Flexbox, Variables CSS y Media Queries
├── script.js      # Lógica de interacción, manipulación del DOM y localStorage
└── README.md      # Documentación técnica del proyecto
