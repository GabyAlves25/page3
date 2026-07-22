// Destaca o item do índice correspondente à seção visível na tela.
// Usa IntersectionObserver para não precisar recalcular a rolagem manualmente.

document.addEventListener('DOMContentLoaded', () => {
  const tocItems = document.querySelectorAll('.toc-item');
  const sections = document.querySelectorAll('.profile');

  if (!tocItems.length || !sections.length) return;

  const setActive = (id) => {
    tocItems.forEach((item) => {
      const isActive = item.getAttribute('href') === '#' + id;
      item.classList.toggle('is-active', isActive);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-45% 0px -45% 0px' } // considera "ativa" a seção perto do centro da tela
  );

  sections.forEach((section) => observer.observe(section));
});
