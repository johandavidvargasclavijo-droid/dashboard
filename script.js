document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.dashboard-container');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const navLinks = document.querySelectorAll('.sidebar-menu a[data-target]');
  const sections = document.querySelectorAll('.content-section');
  const searchInput = document.getElementById('tableSearch');
  const tableBody = document.getElementById('activityTableBody');
  const emptyRow = document.getElementById('emptyRow');
  const cards = document.querySelectorAll('.card');
  const themeToggle = document.getElementById('themeToggle');

  /* 1. Colapsar / expandir el menú lateral -------------------------- */
  sidebarToggle.addEventListener('click', () => {
    const isCollapsed = container.classList.toggle('sidebar-collapsed');
    sidebarToggle.setAttribute('aria-expanded', String(!isCollapsed));
    sidebarToggle.setAttribute(
      'aria-label',
      isCollapsed ? 'Expandir menú lateral' : 'Contraer menú lateral'
    );
  });

  /* 2. Navegación entre secciones (Inicio, Analíticas, etc.) --------- */
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('data-target');

      navLinks.forEach((otherLink) => {
        otherLink.classList.remove('active');
        otherLink.removeAttribute('aria-current');
      });
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');

      sections.forEach((section) => {
        const isTarget = section.id === targetId;
        section.hidden = !isTarget;
        section.classList.toggle('active', isTarget);
      });

      // En pantallas pequeñas, cerrar el menú tras elegir una opción
      if (window.matchMedia('(max-width: 768px)').matches) {
        container.classList.add('sidebar-collapsed');
        sidebarToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* 3. Buscador en vivo sobre la tabla de actividades ----------------- */
  if (searchInput && tableBody) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      const rows = tableBody.querySelectorAll('tr:not(#emptyRow)');
      let visibleCount = 0;

      rows.forEach((row) => {
        const matches = row.textContent.toLowerCase().includes(query);
        row.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      if (emptyRow) {
        emptyRow.hidden = visibleCount !== 0;
      }
    });
  }

  /* 4. Tarjetas seleccionables (clic o teclado) ----------------------- */
  cards.forEach((card) => {
    const toggleCard = () => {
      const isSelected = card.classList.toggle('selected');
      card.setAttribute('aria-pressed', String(isSelected));
    };

    card.addEventListener('click', toggleCard);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleCard();
      }
    });
  });

  /* 5. Modo oscuro con variables CSS, recordado entre visitas --------- */
  if (themeToggle) {
    const savedTheme = localStorage.getItem('dashboard-theme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
      const theme = themeToggle.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('dashboard-theme', theme);
    });
  }
});
