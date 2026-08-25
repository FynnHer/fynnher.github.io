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

        /* Headline word rotator */
        var rot = document.querySelector('[data-rot]');
        if (rot) {
            var WORDS = ['kernels.', 'drone tools.', 'rescue maps.', 'things that boot.'];
            var mask = rot.querySelector('.rot__mask');
            var bar = rot.querySelector('.rot__bar');
            var current = mask.querySelector('.rot__word');
            var idx = 0;

            function fitBar(word) {
                bar.style.width = Math.ceil(word.getBoundingClientRect().width) + 'px';
            }

            requestAnimationFrame(function () { fitBar(current); });
            window.addEventListener('resize', function () { fitBar(current); });
            /* Webfonts land after first paint and change the measurement. */
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(function () { fitBar(current); });
            }

            var still = window.matchMedia('(prefers-reduced-motion: reduce)');
            if (!still.matches) {
                setInterval(function () {
                    if (document.hidden) return;
                    idx = (idx + 1) % WORDS.length;

                    var next = document.createElement('span');
                    next.className = 'rot__word is-in';
                    next.textContent = WORDS[idx];
                    mask.appendChild(next);
                    fitBar(next);

                    var previous = current;
                    previous.classList.remove('is-in');
                    previous.classList.add('is-out');
                    setTimeout(function () {
                        if (previous.parentNode) previous.parentNode.removeChild(previous);
                    }, 560);

                    current = next;
                }, 2200);
            }
        }

        /* Duplicate ticker content so the marquee loops seamlessly */
        var track = document.querySelector('.ticker__track');
        if (track) track.innerHTML += track.innerHTML;

        /* Footer year */
        var year = document.querySelector('[data-year]');
        if (year) year.textContent = String(new Date().getFullYear());
    });
})();
