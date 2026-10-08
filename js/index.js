/* ============================================================
   index.js — счётчик дней до предполагаемой даты окончания
   Страница служебная: без модулей и внешних запросов,
   работает и при открытии файла двойным щелчком.
   ============================================================ */

(function () {
  'use strict';

  // Предполагаемая дата окончания проекта — 31 декабря 2026 года.
  var END = new Date(2026, 11, 31);
  var DAY = 86400000;

  var out = document.getElementById('days-left');
  var word = document.getElementById('days-left-word');
  if (!out) { return; }

  function pluralDays(n) {
    var last = n % 10;
    var lastTwo = n % 100;
    if (last === 1 && lastTwo !== 11) { return 'день'; }
    if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) { return 'дня'; }
    return 'дней';
  }

  function tick() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var days = Math.round((END - today) / DAY);

    if (days > 0) {
      out.textContent = String(days);
      if (word) { word.textContent = pluralDays(days); }
    } else if (days === 0) {
      out.textContent = '0';
      if (word) { word.textContent = 'дней — срок сегодня'; }
    } else {
      out.textContent = String(-days);
      if (word) { word.textContent = 'дней после срока'; }
    }
  }

  tick();
  // Раз в минуту: страницу могут оставить открытой на ночь.
  window.setInterval(tick, 60000);
}());
