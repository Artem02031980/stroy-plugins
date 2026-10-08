/* ============================================================
   pageIndex2.js — вариант 2
   1) переключатель категорий инструментов;
   2) мобильное меню в диапазоне до 768 px;
   3) заглушение ссылок макета.
   Без модулей, без внешних запросов.
   ============================================================ */

(function () {
  'use strict';

  /* Переключатель категорий */
  var pills = Array.prototype.slice.call(document.querySelectorAll('.pill'));
  var tools = Array.prototype.slice.call(document.querySelectorAll('.tool'));
  var empty = document.getElementById('tools-empty');

  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      var filter = pill.getAttribute('data-filter');
      var shown = 0;

      pills.forEach(function (other) {
        var active = other === pill;
        other.classList.toggle('is-active', active);
        other.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      tools.forEach(function (tool) {
        var match = filter === 'all' || tool.getAttribute('data-cat') === filter;
        tool.classList.toggle('is-hidden', !match);
        if (match) { shown += 1; }
      });

      if (empty) { empty.hidden = shown > 0; }
    });
  });

  /* Мобильное меню */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('bar-nav');

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
