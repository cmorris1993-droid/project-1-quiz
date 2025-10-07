// script.js — main JavaScript for the project

document.addEventListener('DOMContentLoaded', () => {
  console.log('script.js loaded');

  // Example: add a click handler to buttons with class "btn"
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 150);
    });
  });
});
