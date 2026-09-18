/* 5K mock product catalog — shared by home, catalog and product pages */
(function () {
  "use strict";

  var PRODUCTS = [
    { id: "p1", slug: "tws-pro-5", cat: "electronics", badge: "hot", price: 5000, old: 9900, rating: 4.8, reviews: 245,
      name: { ru: "Беспроводные наушники TWS Pro 5", kz: "Сымсыз құлаққап TWS Pro 5" }, color: "0F1B2E/FFD400" },
    { id: "p2", slug: "smart-watch-x1", cat: "electronics", badge: "new", price: 5000, old: null, rating: 4.6, reviews: 98,
      name: { ru: "Смарт-часы X1", kz: "X1 смарт-сағаты" }, color: "16263D/FFD400" },
    { id: "p3", slug: "power-bank-10000", cat: "electronics", badge: "sale", price: 5000, old: 7500, rating: 4.7, reviews: 176,
      name: { ru: "Powerbank 10000 мАч", kz: "10000 мАч Powerbank" }, color: "0F1B2E/33D17A" },
    { id: "p4", slug: "backpack-urban", cat: "accessories", badge: "hot", price: 5000, old: null, rating: 4.9, reviews: 312,
      name: { ru: "Городской рюкзак Urban", kz: "Urban қалалық рюкзагы" }, color: "16263D/FFD400" },
    { id: "p5", slug: "sneakers-air", cat: "sport", badge: "new", price: 5000, old: 8900, rating: 4.5, reviews: 64,
      name: { ru: "Кроссовки Air Step", kz: "Air Step кроссовкасы" }, color: "0F1B2E/FFD400" },
    { id: "p6", slug: "bt-speaker-mini", cat: "electronics", badge: "hot", price: 5000, old: null, rating: 4.8, reviews: 201,
      name: { ru: "Bluetooth-колонка Mini Bass", kz: "Mini Bass Bluetooth-колонкасы" }, color: "16263D/33D17A" },
    { id: "p7", slug: "phone-holder", cat: "accessories", badge: "sale", price: 5000, old: 6500, rating: 4.4, reviews: 87,
      name: { ru: "Держатель для телефона Grip", kz: "Grip телефон ұстағышы" }, color: "0F1B2E/FFD400" },
    { id: "p8", slug: "wireless-mouse", cat: "electronics", badge: "new", price: 5000, old: null, rating: 4.6, reviews: 55,
      name: { ru: "Беспроводная мышь Click", kz: "Click сымсыз тінтуірі" }, color: "16263D/FFD400" },
    { id: "p9", slug: "teddy-bear", cat: "gifts", badge: "hot", price: 5000, old: null, rating: 4.9, reviews: 140,
      name: { ru: "Плюшевый мишка Honey", kz: "Honey жұмсақ аюы" }, color: "0F1B2E/33D17A" },
    { id: "p10", slug: "yoga-mat", cat: "sport", badge: "sale", price: 5000, old: 7200, rating: 4.7, reviews: 122,
      name: { ru: "Коврик для йоги Flex", kz: "Flex йога кілемшесі" }, color: "16263D/FFD400" },
    { id: "p11", slug: "makeup-set", cat: "beauty", badge: "new", price: 5000, old: null, rating: 4.5, reviews: 76,
      name: { ru: "Набор косметики Glow", kz: "Glow косметика жинағы" }, color: "0F1B2E/FFD400" },
    { id: "p12", slug: "car-organizer", cat: "auto", badge: "sale", price: 5000, old: 6900, rating: 4.3, reviews: 41,
      name: { ru: "Органайзер в авто Trunk", kz: "Trunk авто ұйымдастырғышы" }, color: "16263D/33D17A" },
    { id: "p13", slug: "led-lamp-home", cat: "home", badge: "new", price: 5000, old: null, rating: 4.6, reviews: 59,
      name: { ru: "LED-светильник Cozy", kz: "Cozy LED шамы" }, color: "0F1B2E/FFD400" },
    { id: "p14", slug: "board-game-party", cat: "games", badge: "hot", price: 5000, old: 6200, rating: 4.9, reviews: 133,
      name: { ru: "Настольная игра Party Mix", kz: "Party Mix үстел ойыны" }, color: "16263D/FFD400" }
  ];

  var BADGE_KEY = { new: "common.newBadge", hot: "common.hotBadge", sale: "common.saleBadge" };

  function productImages(p) {
    var base = "assets/img/products/" + p.slug + "/";
    return [base + "1.jpg", base + "2.jpg", base + "3.jpg", base + "4.jpg"];
  }

  function tt(key, lang) {
    var dict = (window.I18N && window.I18N[lang]) || {};
    return dict[key] || (window.I18N && window.I18N.ru[key]) || "";
  }

  function productCardHTML(p, lang) {
    var name = p.name[lang] || p.name.ru;
    var oldPriceHtml = p.old ? '<span class="text-ink-400 line-through text-xs">' + p.old.toLocaleString("ru-RU") + ' ₸</span>' : "";
    var badgeClass = p.badge === "sale" ? "badge-outline" : (p.badge === "new" ? "badge-green" : "badge-yellow");
    return (
      '<div class="surface-card overflow-hidden flex flex-col reveal">' +
        '<a href="product.html?slug=' + p.slug + '" class="relative block aspect-square bg-paper-100 overflow-hidden group">' +
          '<img src="' + productImages(p)[0] + '" alt="' + name + '" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />' +
          '<span class="absolute top-3 left-3 badge ' + badgeClass + '">' + tt(BADGE_KEY[p.badge], lang) + '</span>' +
          '<button type="button" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-ink-700 hover:text-gold-600 transition-colors duration-200" aria-label="favorite">' + (window.FIVEK_ICONS ? window.FIVEK_ICONS.heart : "♡") + '</button>' +
        '</a>' +
        '<div class="p-4 flex flex-col flex-1">' +
          '<a href="product.html?slug=' + p.slug + '" class="font-semibold text-sm mb-1.5 clamp-2 hover:text-gold-600 transition-colors duration-200">' + name + '</a>' +
          '<div class="flex items-center gap-1 mb-3 text-xs"><span class="stars">★★★★★</span><span class="text-ink-400">' + p.rating + '</span></div>' +
          '<div class="mt-auto flex items-end justify-between gap-2">' +
            '<div><div class="font-display font-bold text-navy-900">' + p.price.toLocaleString("ru-RU") + ' ₸</div>' + oldPriceHtml + '</div>' +
            '<button type="button" class="btn btn-primary !px-3 !py-2 text-xs" data-add-to-cart aria-label="cart">' + (window.FIVEK_ICONS ? window.FIVEK_ICONS.cart : "+") + '</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderProductGrids(lang) {
    var popular = document.getElementById("popular-grid");
    var fresh = document.getElementById("new-grid");
    if (popular) {
      popular.innerHTML = PRODUCTS.filter(function (p) { return p.badge === "hot"; }).slice(0, 4)
        .map(function (p) { return productCardHTML(p, lang); }).join("");
    }
    if (fresh) {
      fresh.innerHTML = PRODUCTS.filter(function (p) { return p.badge === "new"; }).slice(0, 4)
        .map(function (p) { return productCardHTML(p, lang); }).join("");
    }
  }

  var CAT_KEYS = {
    electronics: "home.categories.electronics", home: "home.categories.home", auto: "home.categories.auto",
    beauty: "home.categories.beauty", sport: "home.categories.sport", games: "home.categories.games",
    gifts: "home.categories.gifts", accessories: "home.categories.accessories"
  };

  var catalogState = { cat: "all", sort: "popular" };

  function renderCatalog(lang) {
    var grid = document.getElementById("catalog-grid");
    var countEl = document.getElementById("catalog-count");
    var emptyEl = document.getElementById("catalog-empty");
    if (!grid) return;

    var list = PRODUCTS.slice();
    if (catalogState.cat !== "all") list = list.filter(function (p) { return p.cat === catalogState.cat; });

    if (catalogState.sort === "priceAsc") list.sort(function (a, b) { return a.price - b.price; });
    else if (catalogState.sort === "priceDesc") list.sort(function (a, b) { return b.price - a.price; });
    else if (catalogState.sort === "rating") list.sort(function (a, b) { return b.rating - a.rating; });
    else if (catalogState.sort === "new") list = list.filter(function (p) { return p.badge === "new"; }).concat(list.filter(function (p) { return p.badge !== "new"; }));

    grid.innerHTML = list.map(function (p) { return productCardHTML(p, lang); }).join("");
    if (countEl) countEl.textContent = list.length;
    if (emptyEl) emptyEl.classList.toggle("hidden", list.length > 0);
    grid.classList.toggle("hidden", list.length === 0);

    document.querySelectorAll("[data-cat-btn]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-cat-btn") === catalogState.cat);
    });
    if (window.FIVEK && FIVEK.refreshReveal) FIVEK.refreshReveal();
  }

  function initCatalogPage() {
    var grid = document.getElementById("catalog-grid");
    if (!grid) return;

    var hash = (location.hash || "").replace("#", "");
    if (hash && CAT_KEYS[hash]) catalogState.cat = hash;

    document.addEventListener("click", function (e) {
      var catBtn = e.target.closest("[data-cat-btn]");
      if (catBtn) {
        catalogState.cat = catBtn.getAttribute("data-cat-btn");
        renderCatalog(FIVEK.getLang());
      }
      var resetBtn = e.target.closest("[data-filters-reset]");
      if (resetBtn) {
        catalogState.cat = "all";
        catalogState.sort = "popular";
        var sortSel = document.getElementById("catalog-sort");
        if (sortSel) sortSel.value = "popular";
        renderCatalog(FIVEK.getLang());
      }
    });
    var sortSel = document.getElementById("catalog-sort");
    if (sortSel) sortSel.addEventListener("change", function () {
      catalogState.sort = sortSel.value;
      renderCatalog(FIVEK.getLang());
    });

    document.addEventListener("5k:lang-changed", function (e) { renderCatalog(e.detail.lang); });
    renderCatalog(FIVEK.getLang());
  }

  window.FIVEK_PRODUCTS = PRODUCTS;
  window.productImages = productImages;
  window.FIVEK_CAT_KEYS = CAT_KEYS;
  window.productCardHTML = productCardHTML;
  window.renderProductGrids = renderProductGrids;
  window.initCatalogPage = initCatalogPage;
})();
