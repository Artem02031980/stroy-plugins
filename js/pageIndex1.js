/* ============================================================
   pageIndex1.js — вариант 1
   1) мобильное меню в диапазоне до 768 px;
   2) заглушение ссылок макета: они никуда не ведут.
   Без модулей, без внешних запросов: страница открывается
   и двойным щелчком по файлу.
   ============================================================ */

(function () {
  'use strict';

  /* Мобильное меню */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav-left');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
      }
    });
  }

  /* Ссылки-заглушки: макет, переходов нет */
  document.addEventListener('click', function (event) {
    var link = event.target.closest('[data-dead]');
    if (link) { event.preventDefault(); }
  });
}());
