/* 5K shared shell: header, footer, mobile menu, i18n, WhatsApp button, carousel, reveal, countdown */
(function () {
  "use strict";

  var ICONS = {
    search: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    heart: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6c-1.8-1.8-4.7-1.8-6.5 0L12 6.9l-2.3-2.3c-1.8-1.8-4.7-1.8-6.5 0-1.8 1.8-1.8 4.7 0 6.5L12 20.4l8.8-9.3c1.8-1.8 1.8-4.7 0-6.5Z"/></svg>',
    cart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.4"/><circle cx="18" cy="21" r="1.4"/><path d="M1 1h3l2.7 13.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21 6H5.2"/></svg>',
    user: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>',
    close: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>',
    chevronRight: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>',
    chevronLeft: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 6 9 12 15 18"/></svg>',
    whatsapp: '<svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor"><path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.5.73 4.83 2 6.77L4 29l7.4-1.94a12 12 0 0 0 4.62.92h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3Zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.6-.24-.37a9.86 9.86 0 0 1-1.53-5.29c0-5.46 4.45-9.9 9.9-9.9 2.64 0 5.13 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.46-4.45 9.9-9.9 9.9Zm5.42-7.41c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.15-.17.2-.34.22-.64.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.73-1.63-2.03-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.2-.24-.57-.48-.5-.66-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.08 3.18 5.05 4.46.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.75-.71 2-1.4.24-.68.24-1.27.17-1.4-.07-.12-.27-.2-.57-.35Z"/></svg>',
    star: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.1 8.6 22.2 9.6 17 14.5 18.3 21.6 12 18.2 5.7 21.6 7 14.5 1.8 9.6 8.9 8.6"/></svg>',
    mapPin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    play: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 21 12 6 21"/></svg>',
    mic: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" y1="19" x2="12" y2="23"/></svg>'
  };
  window.FIVEK_ICONS = ICONS;

  var NAV_ITEMS = [
    { key: "catalog", href: "catalog.html", i18n: "nav.catalog" },
    { key: "flash", href: "promotions.html#flash", i18n: "nav.flash" },
    { key: "game", href: "game.html", i18n: "nav.game" },
    { key: "points", href: "points.html", i18n: "nav.points" },
    { key: "earn", href: "earn.html", i18n: "nav.earn" },
    { key: "promotions", href: "promotions.html", i18n: "nav.promotions" }
  ];

  function renderHeader(active) {
    var navHtml = NAV_ITEMS.map(function (item) {
      var cls = "nav-link" + (item.key === active ? " active" : "");
      return '<a href="' + item.href + '" class="' + cls + '" data-i18n="' + item.i18n + '"></a>';
    }).join("");

    var mobileNavHtml = NAV_ITEMS.concat([
      { key: "faq", href: "faq.html", i18n: "nav.faq" },
      { key: "about", href: "about.html", i18n: "nav.about" },
      { key: "contacts", href: "contacts.html", i18n: "nav.contacts" },
      { key: "help", href: "help.html", i18n: "nav.help" }
    ]).map(function (item) {
      return '<a href="' + item.href + '" class="mobile-nav-link" data-i18n="' + item.i18n + '"><span data-i18n="' + item.i18n + '"></span>' + ICONS.chevronRight + '</a>';
    }).join("");

    return (
      '<div class="container-5k">' +
      '<div class="flex items-center justify-between gap-3 py-3 md:py-4">' +
        '<a href="index.html" class="flex items-center gap-2 shrink-0 group" aria-label="5K">' +
          '<span class="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-gold-400 flex items-center justify-center font-display font-extrabold text-navy-900 text-lg shadow-glow transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3">5K</span>' +
          '<span class="hidden sm:flex flex-col leading-none">' +
            '<span class="font-display font-bold text-white text-lg tracking-tight">5K</span>' +
            '<span class="text-[10px] text-gold-400 font-bold tracking-[0.18em]">BUY · PLAY · EARN</span>' +
          '</span>' +
        '</a>' +

        '<div class="hidden lg:flex items-center gap-7 mx-6">' + navHtml + '</div>' +

        '<div class="hidden md:flex items-center flex-1 max-w-md">' +
          '<div class="relative w-full">' +
            '<span class="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">' + ICONS.search + '</span>' +
            '<input type="search" data-i18n-placeholder="common.search.placeholder" class="w-full bg-white/[0.07] border border-white/10 rounded-full pl-11 pr-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-gold-400 focus:bg-white/[0.1] transition-colors duration-200" />' +
          '</div>' +
        '</div>' +

        '<div class="flex items-center gap-2 md:gap-2.5 shrink-0">' +
          '<a href="favorites.html" class="icon-btn hidden sm:inline-flex" data-i18n-aria-label="nav.favorites">' + ICONS.heart + '</a>' +
          '<a href="cart.html" class="icon-btn" data-i18n-aria-label="nav.cart">' + ICONS.cart + '<span class="cart-badge" data-cart-badge>2</span></a>' +
          '<a href="profile.html" class="icon-btn hidden sm:inline-flex" data-i18n-aria-label="nav.profile">' + ICONS.user + '</a>' +
          '<div class="lang-switch" role="group" aria-label="Language">' +
            '<button type="button" data-lang-btn="ru">RU</button>' +
            '<button type="button" data-lang-btn="kz">KZ</button>' +
          '</div>' +
          '<button type="button" class="hamburger-btn lg:hidden" data-menu-open aria-label="Menu"><span></span></button>' +
        '</div>' +
      '</div>' +
      '</div>' +

      '<div class="mobile-menu-overlay" data-menu-overlay></div>' +
      '<div class="mobile-menu-panel" data-menu-panel>' +
        '<div class="flex items-center justify-between mb-6">' +
          '<span class="font-display font-bold text-white text-base" data-i18n="nav.menu"></span>' +
          '<button type="button" class="close-btn" data-menu-close aria-label="Close">' + ICONS.close + '</button>' +
        '</div>' +
        '<div class="relative mb-5">' +
          '<span class="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">' + ICONS.search + '</span>' +
          '<input type="search" data-i18n-placeholder="common.search.placeholder" class="w-full bg-white/[0.07] border border-white/10 rounded-full pl-11 pr-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-gold-400" />' +
        '</div>' +
        '<nav class="flex flex-col flex-1">' + mobileNavHtml + '</nav>' +
        '<div class="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">' +
          '<a href="favorites.html" class="icon-btn" data-i18n-aria-label="nav.favorites">' + ICONS.heart + '</a>' +
          '<a href="profile.html" class="icon-btn" data-i18n-aria-label="nav.profile">' + ICONS.user + '</a>' +
          '<a href="cart.html" class="btn btn-primary flex-1 text-center" data-i18n="nav.cart"></a>' +
        '</div>' +
      '</div>'
    );
  }

  function renderFooter() {
    function col(titleKey, links) {
      var items = links.map(function (l) {
        return '<li><a href="' + l.href + '" class="footer-link text-sm" data-i18n="' + l.i18n + '"></a></li>';
      }).join("");
      return '<div><h4 class="text-white font-bold text-sm mb-4 tracking-wide" data-i18n="' + titleKey + '"></h4><ul class="space-y-2.5">' + items + '</ul></div>';
    }

    return (
      '<div class="hero-navy grain-surface pt-16 pb-8 md:pt-20">' +
      '<div class="container-5k">' +
        '<div class="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 pb-12 border-b border-white/10">' +
          '<div class="col-span-2 md:col-span-1 pr-4">' +
            '<a href="index.html" class="flex items-center gap-2 mb-4">' +
              '<span class="w-10 h-10 rounded-2xl bg-gold-400 flex items-center justify-center font-display font-extrabold text-navy-900 text-base">5K</span>' +
              '<span class="font-display font-bold text-white text-lg">5K</span>' +
            '</a>' +
            '<p class="text-white/60 text-sm leading-relaxed mb-4" data-i18n="footer.brandDesc"></p>' +
            '<div class="flex items-center gap-2 text-white/50 text-xs">' + ICONS.mapPin + '<span data-i18n="footer.address"></span></div>' +
          '</div>' +
          col("footer.colShop", [
            { href: "catalog.html", i18n: "footer.catalog" },
            { href: "promotions.html", i18n: "footer.promotions" },
            { href: "points.html", i18n: "footer.points" },
            { href: "game.html", i18n: "footer.game" },
            { href: "earn.html", i18n: "footer.earn" }
          ]) +
          col("footer.colHelp", [
            { href: "faq.html", i18n: "footer.faq" },
            { href: "help.html#delivery", i18n: "footer.delivery" },
            { href: "help.html#payment", i18n: "footer.payment" },
            { href: "help.html#returns", i18n: "footer.returns" },
            { href: "contacts.html", i18n: "footer.support" }
          ]) +
          col("footer.colDocs", [
            { href: "legal.html#terms", i18n: "footer.terms" },
            { href: "legal.html#privacy", i18n: "footer.privacy" },
            { href: "legal.html#loyalty", i18n: "footer.loyaltyRules" }
          ]) +
          col("footer.colContacts", [
            { href: "contacts.html", i18n: "nav.contacts" },
            { href: "tel:+77770464141", i18n: "" }
          ]).replace('data-i18n=""></a>', '>+7 777 046 4141</a>') +
        '</div>' +
        '<div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-7">' +
          '<div class="lang-switch" role="group" aria-label="Language">' +
            '<button type="button" data-lang-btn="ru">RU</button>' +
            '<button type="button" data-lang-btn="kz">KZ</button>' +
          '</div>' +
          '<p class="text-white/40 text-xs text-center order-3 md:order-2">&copy; <span data-year></span> 5K. <span data-i18n="footer.rights"></span></p>' +
          '<p class="text-white/40 text-xs order-2 md:order-3" data-i18n="footer.market"></p>' +
        '</div>' +
      '</div>' +
      '</div>'
    );
  }

  function renderWhatsApp() {
    return (
      '<a href="https://wa.me/77770464141" target="_blank" rel="noopener" class="wa-float" data-i18n-aria-label="wa.tooltip">' +
      ICONS.whatsapp +
      '</a>'
    );
  }

  /* ---------------- i18n engine ---------------- */
  function getLang() {
    try { return localStorage.getItem("5k-lang") || "ru"; } catch (e) { return "ru"; }
  }
  function setLang(lang) {
    try { localStorage.setItem("5k-lang", lang); } catch (e) {}
  }
  function t(key, lang) {
    var dict = window.I18N[lang] || window.I18N.ru;
    return dict[key] !== undefined ? dict[key] : (window.I18N.ru[key] || "");
  }
  function applyI18n(lang) {
    document.documentElement.setAttribute("lang", lang === "kz" ? "kk" : "ru");
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = t(key, lang);
      if (val) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder"), lang));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria-label"), lang));
    });
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });
    var metaTitle = t("meta.title", lang);
    if (metaTitle && document.querySelector("title[data-i18n]")) document.title = metaTitle;
  }
  /* Only the actual language switch notifies listeners — applyI18n() itself
     stays side-effect-free so pages can safely re-call it after re-rendering
     dynamic content (product grids, task lists, etc.) without looping. */
  function initLangSwitch() {
    var lang = getLang();
    applyI18n(lang);
    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-lang-btn]");
      if (!btn) return;
      var lang = btn.getAttribute("data-lang-btn");
      setLang(lang);
      applyI18n(lang);
      document.dispatchEvent(new CustomEvent("5k:lang-changed", { detail: { lang: lang } }));
    });
  }

  /* ---------------- Mobile menu ---------------- */
  function initMobileMenu() {
    var panel = document.querySelector("[data-menu-panel]");
    var overlay = document.querySelector("[data-menu-overlay]");
    if (!panel || !overlay) return;
    function open() {
      panel.classList.add("open");
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      panel.classList.remove("open");
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-menu-open]")) open();
      if (e.target.closest("[data-menu-close]")) close();
      if (e.target === overlay) close();
      if (e.target.closest(".mobile-nav-link") || e.target.closest(".mobile-menu-panel a.btn")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* ---------------- Generic secondary drawer (e.g. catalog filters) ---------------- */
  function initFilterDrawer() {
    var panel = document.querySelector("[data-filter-panel]");
    var overlay = document.querySelector("[data-filter-overlay]");
    if (!panel || !overlay) return;
    function open() { panel.classList.add("open"); overlay.classList.add("open"); document.body.style.overflow = "hidden"; }
    function close() { panel.classList.remove("open"); overlay.classList.remove("open"); document.body.style.overflow = ""; }
    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-filter-open]")) open();
      if (e.target.closest("[data-filter-close]") || e.target.closest("[data-filter-apply]")) close();
      if (e.target === overlay) close();
    });
  }

  /* ---------------- Sticky header offset & shadow on scroll ---------------- */
  function initHeaderScrollState() {
    var header = document.getElementById("site-header");
    if (!header) return;
    function onScroll() {
      if (window.scrollY > 8) header.classList.add("shadow-elevated");
      else header.classList.remove("shadow-elevated");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------- Reveal on scroll ---------------- */
  var revealIO = null;
  function initReveal() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in-view"); });
      return;
    }
    if (!revealIO) {
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    }
    refreshReveal();
  }
  /* Re-scan for newly injected .reveal elements (e.g. product grids rendered after boot) */
  function refreshReveal() {
    var els = document.querySelectorAll(".reveal:not([data-reveal-bound])");
    els.forEach(function (el) {
      el.setAttribute("data-reveal-bound", "1");
      if (revealIO) revealIO.observe(el);
      else el.classList.add("in-view");
    });
  }

  /* ---------------- Countdown ---------------- */
  function initCountdowns() {
    document.querySelectorAll("[data-countdown]").forEach(function (box) {
      var hours = parseInt(box.getAttribute("data-hours") || "18", 10);
      var deadline = Date.now() + hours * 3600 * 1000;
      var dEl = box.querySelector("[data-cd-d]");
      var hEl = box.querySelector("[data-cd-h]");
      var mEl = box.querySelector("[data-cd-m]");
      var sEl = box.querySelector("[data-cd-s]");
      function pad(n) { return String(n).padStart(2, "0"); }
      function tick() {
        var diff = Math.max(0, deadline - Date.now());
        var d = Math.floor(diff / 86400000);
        var h = Math.floor((diff % 86400000) / 3600000);
        var m = Math.floor((diff % 3600000) / 60000);
        var s = Math.floor((diff % 60000) / 1000);
        if (dEl) dEl.textContent = pad(d);
        if (hEl) hEl.textContent = pad(h);
        if (mEl) mEl.textContent = pad(m);
        if (sEl) sEl.textContent = pad(s);
      }
      tick();
      setInterval(tick, 1000);
    });
  }

  /* ---------------- Manual-only looping carousel ---------------- */
  function initCarousels() {
    document.querySelectorAll("[data-carousel]").forEach(function (root) {
      var track = root.querySelector("[data-carousel-track]");
      var prevBtn = root.querySelector("[data-carousel-prev]");
      var nextBtn = root.querySelector("[data-carousel-next]");
      if (!track) return;

      var isDown = false, startX = 0, startScroll = 0, moved = false, scrollTimer = null;

      function cardStep() {
        var card = track.querySelector(".review-card");
        if (!card) return track.clientWidth;
        var style = getComputedStyle(track);
        var gap = parseFloat(style.columnGap || style.gap || 20);
        return card.getBoundingClientRect().width + gap;
      }
      function maxScroll() { return track.scrollWidth - track.clientWidth; }

      function loopIfNeeded() {
        var max = maxScroll();
        if (max <= 2) return;
        if (track.scrollLeft >= max - 2) {
          scrollTimer = setTimeout(function () {
            track.scrollTo({ left: 0, behavior: "smooth" });
          }, 750);
        } else if (track.scrollLeft <= 2 && track.dataset.wrapBack === "1") {
          track.dataset.wrapBack = "0";
          scrollTimer = setTimeout(function () {
            track.scrollTo({ left: max, behavior: "smooth" });
          }, 60);
        }
      }

      track.addEventListener("scroll", function () {
        if (scrollTimer) clearTimeout(scrollTimer);
        if (!isDown) loopIfNeeded();
      }, { passive: true });

      track.addEventListener("pointerdown", function (e) {
        isDown = true; moved = false;
        startX = e.clientX;
        startScroll = track.scrollLeft;
        track.setPointerCapture(e.pointerId);
      });
      track.addEventListener("pointermove", function (e) {
        if (!isDown) return;
        var dx = e.clientX - startX;
        if (Math.abs(dx) > 4) moved = true;
        track.scrollLeft = startScroll - dx;
      });
      function endDrag() {
        if (!isDown) return;
        isDown = false;
        loopIfNeeded();
      }
      track.addEventListener("pointerup", endDrag);
      track.addEventListener("pointerleave", endDrag);
      track.addEventListener("pointercancel", endDrag);

      if (nextBtn) nextBtn.addEventListener("click", function () {
        var max = maxScroll();
        if (track.scrollLeft >= max - 4) track.scrollTo({ left: 0, behavior: "smooth" });
        else track.scrollBy({ left: cardStep(), behavior: "smooth" });
      });
      if (prevBtn) prevBtn.addEventListener("click", function () {
        var max = maxScroll();
        if (track.scrollLeft <= 4) track.scrollTo({ left: max, behavior: "smooth" });
        else track.scrollBy({ left: -cardStep(), behavior: "smooth" });
      });
    });
  }

  /* ---------------- Reviews tabs ---------------- */
  function initReviewTabs() {
    var wrap = document.querySelector("[data-reviews-tabs]");
    if (!wrap) return;
    var tabs = wrap.querySelectorAll("[data-reviews-tab]");
    var panels = document.querySelectorAll("[data-reviews-panel]");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var target = tab.getAttribute("data-reviews-tab");
        tabs.forEach(function (b) { b.classList.remove("active"); });
        tab.classList.add("active");
        panels.forEach(function (p) {
          p.classList.toggle("hidden", p.getAttribute("data-reviews-panel") !== target);
        });
      });
    });
  }

  /* ---------------- Cart mock ---------------- */
  function initCartMock() {
    function getCount() {
      try { return parseInt(localStorage.getItem("5k-cart-count") || "2", 10); } catch (e) { return 2; }
    }
    function setCount(n) {
      try { localStorage.setItem("5k-cart-count", String(n)); } catch (e) {}
      document.querySelectorAll("[data-cart-badge]").forEach(function (el) { el.textContent = n; });
    }
    setCount(getCount());
    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-add-to-cart]");
      if (!btn) return;
      setCount(getCount() + 1);
      btn.classList.add("scale-95");
      setTimeout(function () { btn.classList.remove("scale-95"); }, 180);
    });
  }

  /* ---------------- Boot ---------------- */
  function mountLayout(activeKey) {
    var headerHost = document.getElementById("app-header");
    var footerHost = document.getElementById("app-footer");
    var waHost = document.getElementById("app-whatsapp");
    if (headerHost) {
      headerHost.id = "site-header";
      headerHost.innerHTML = renderHeader(activeKey);
      /* #site-header uses backdrop-filter, which creates a new containing
         block for position:fixed descendants. Move the drawer + overlay to
         <body> so they stay fixed to the real viewport, not the header box. */
      var overlayEl = headerHost.querySelector("[data-menu-overlay]");
      var panelEl = headerHost.querySelector("[data-menu-panel]");
      if (overlayEl) document.body.appendChild(overlayEl);
      if (panelEl) document.body.appendChild(panelEl);
    }
    if (footerHost) footerHost.innerHTML = renderFooter();
    if (waHost) waHost.innerHTML = renderWhatsApp();

    var yearEl = document.querySelector("[data-year]");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    initLangSwitch();
    initMobileMenu();
    initFilterDrawer();
    initHeaderScrollState();
    initReveal();
    initCountdowns();
    initCarousels();
    initReviewTabs();
    initCartMock();
  }

  window.FIVEK = { mountLayout: mountLayout, applyI18n: applyI18n, getLang: getLang, t: t, refreshReveal: refreshReveal };
})();
