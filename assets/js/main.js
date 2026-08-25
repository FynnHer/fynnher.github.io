/* fynnher.github.io — small, dependency-free */
(function () {
    'use strict';

    document.documentElement.classList.add('js');

    /* ---- Theme: remembers choice, otherwise follows the OS ---- */
    var root = document.documentElement;
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (e) {}
    if (stored === 'light' || stored === 'dark') root.setAttribute('data-theme', stored);

    function currentTheme() {
        var set = root.getAttribute('data-theme');
        if (set) return set;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function paintToggle(btn) {
        var next = currentTheme() === 'dark' ? 'light' : 'dark';
        btn.textContent = currentTheme() === 'dark' ? 'Light' : 'Dark';
        btn.setAttribute('aria-label', 'Switch to ' + next + ' theme');
    }

    document.addEventListener('DOMContentLoaded', function () {
        /* Theme toggle */
        var toggle = document.querySelector('[data-theme-toggle]');
        if (toggle) {
            paintToggle(toggle);
            toggle.addEventListener('click', function () {
                var next = currentTheme() === 'dark' ? 'light' : 'dark';
                root.setAttribute('data-theme', next);
                try { localStorage.setItem('theme', next); } catch (e) {}
                paintToggle(toggle);
            });
        }

        /* Mobile nav */
        var navBtn = document.querySelector('.nav__toggle');
        var navList = document.querySelector('.nav__links');
        if (navBtn && navList) {
            navBtn.addEventListener('click', function () {
                var open = navList.classList.toggle('is-open');
                navBtn.setAttribute('aria-expanded', String(open));
            });
            navList.addEventListener('click', function (e) {
                if (e.target.closest('a')) {
                    navList.classList.remove('is-open');
                    navBtn.setAttribute('aria-expanded', 'false');
                }
            });
        }

        /* Reveal on scroll */
        var targets = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) {
            Array.prototype.forEach.call(targets, function (el) { el.classList.add('is-in'); });
        } else {
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-in');
                    io.unobserve(entry.target);
                });
            }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
            Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
        }

        /* Project filters */
        var filters = document.querySelectorAll('[data-filter]');
        var items = document.querySelectorAll('[data-tags]');
        if (filters.length && items.length) {
            Array.prototype.forEach.call(filters, function (btn) {
                btn.addEventListener('click', function () {
                    var want = btn.getAttribute('data-filter');
                    Array.prototype.forEach.call(filters, function (b) {
                        b.setAttribute('aria-pressed', String(b === btn));
                    });
                    Array.prototype.forEach.call(items, function (item) {
                        var tags = item.getAttribute('data-tags') || '';
                        var show = want === 'all' || tags.split(' ').indexOf(want) !== -1;
                        item.classList.toggle('is-hidden', !show);
                    });
                });
            });
        }

        /* Duplicate ticker content so the marquee loops seamlessly */
        var track = document.querySelector('.ticker__track');
        if (track) track.innerHTML += track.innerHTML;

        /* Footer year */
        var year = document.querySelector('[data-year]');
        if (year) year.textContent = String(new Date().getFullYear());
    });
})();
