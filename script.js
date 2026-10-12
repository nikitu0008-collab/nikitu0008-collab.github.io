/* ============================================================
   NikiZip — personal site
   i18n (RU/EN) + UI interactions
   ============================================================ */

const I18N = {
  ru: {
    "nav.about": "Обо мне",
    "nav.skills": "Навыки",
    "nav.projects": "Проекты",
    "nav.contact": "Контакты",

    "hero.eyebrow": "// системный & бэкенд-разработчик",
    "hero.greeting": "Привет, я",
    "hero.lead":
      "Пишу системный и бэкенд-код на <strong>Rust</strong> и <strong>C++</strong>. Люблю низкий уровень, производительность и чистые абстракции.",
    "hero.location": "Сочи, Россия",
    "hero.status": "Открыт к стажировкам / junior",
    "hero.tg": "Telegram",
    "hero.email": "Написать мне",

    "about.title": "Обо мне",
    "about.p1":
      "Привет! Я Никита (NikiZip) — разработчик на Rust и C++ из Сочи. Пишу системный и бэкенд-код, интересуюсь безопасностью памяти, zero-cost абстракциями и многопоточностью. Работаю с FFI, unsafe-кодом и оптимизацией производительности. Постоянно учусь: алгоритмы, сети, операционные системы.",
    "about.p2":
      "Открыт к стажировкам и junior-позициям в направлениях Rust / C++ / Systems. Умею работать с чужим кодом, читать документацию и доводить задачи до конца.",
    "about.factName": "Имя",
    "about.factFocus": "Фокус",
    "about.factLocation": "Локация",
    "about.factStatus": "Статус",

    "skills.title": "Навыки",
    "skills.languages": "Языки",
    "skills.tools": "Инструменты и среда",
    "skills.topics": "Темы",
    "skills.topicThreads": "Многопоточность",
    "skills.topicPerf": "Оптимизация производительности",
    "skills.topicOs": "Алгоритмы · Сети · ОС",

    "projects.title": "Проекты",
    "projects.view": "Открыть →",
    "projects.cppcraft":
      "Интерактивный генератор кода на C++: создаёт базовую структуру программы через терминал. Ускоряет старт разработки.",
    "projects.compilec": "Утилита для быстрой компиляции C-кода из терминала.",
    "projects.postbot":
      "Бот, который автоматически публикует посты в ваш Telegram-канал. Написан на Python.",
    "projects.neovim": "Личная конфигурация NeoVim, заточенная под разработку на C++.",
    "projects.vscode":
      "Минималистичная конфигурация VS Code — чистая среда без отвлекающих элементов.",
    "projects.college": "Учебные работы по вёрстке и фронтенду: HTML, CSS, JavaScript.",

    "contact.title": "Контакты",
    "contact.lead": "Открыт к стажировкам и junior-позициям. Напишите — отвечу быстро.",
    "contact.resume": "Резюме на hh.ru",

    "footer.made": "Сделано",
    "footer.tech": "чистый HTML / CSS / JS",
  },

  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.eyebrow": "// systems & backend developer",
    "hero.greeting": "Hi, I'm",
    "hero.lead":
      "I build systems and backend code in <strong>Rust</strong> and <strong>C++</strong>. I love low-level work, performance and clean abstractions.",
    "hero.location": "Sochi, Russia",
    "hero.status": "Open to internships / junior roles",
    "hero.tg": "Telegram",
    "hero.email": "Email me",

    "about.title": "About",
    "about.p1":
      "Hi! I'm Nikita (NikiZip), a Rust and C++ developer based in Sochi. I write systems and backend code, and I'm into memory safety, zero-cost abstractions and multithreading. I work with FFI, unsafe code and performance optimization. Always learning: algorithms, networking, operating systems.",
    "about.p2":
      "Open to internships and junior roles in Rust / C++ / Systems. I can navigate unfamiliar code, read the docs, and get things done.",
    "about.factName": "Name",
    "about.factFocus": "Focus",
    "about.factLocation": "Location",
    "about.factStatus": "Status",

    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.tools": "Tools & Environment",
    "skills.topics": "Topics",
    "skills.topicThreads": "Multithreading",
    "skills.topicPerf": "Performance optimization",
    "skills.topicOs": "Algorithms · Networking · OS",

    "projects.title": "Projects",
    "projects.view": "Open →",
    "projects.cppcraft":
      "Interactive C++ code generator: scaffolds a basic program structure from the terminal. Speeds up project setup.",
    "projects.compilec": "A helper for quickly compiling C code from the terminal.",
    "projects.postbot":
      "A bot that automatically publishes posts to your Telegram channel. Written in Python.",
    "projects.neovim": "My personal NeoVim configuration, tuned for C++ development.",
    "projects.vscode":
      "A minimalist VS Code configuration — a clean, distraction-free editor setup.",
    "projects.college": "College coursework on markup and frontend: HTML, CSS, JavaScript.",

    "contact.title": "Contact",
    "contact.lead": "Open to internships and junior roles. Drop me a line — I reply fast.",
    "contact.resume": "Resume on hh.ru",

    "footer.made": "Built by",
    "footer.tech": "pure HTML / CSS / JS",
  },
};

const DEFAULT_LANG = "ru";
const STORAGE_KEY = "nikizip-lang";

function applyLang(lang) {
  const dict = I18N[lang] || I18N[DEFAULT_LANG];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value == null) return;
    if (/<[a-z][\s\S]*>/i.test(value)) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  document.documentElement.lang = lang;

  document.querySelectorAll(".lang-toggle__opt").forEach((opt) => {
    opt.classList.toggle("is-active", opt.dataset.lang === lang);
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (_) {}
}

function detectLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && I18N[saved]) return saved;
  } catch (_) {}
  const nav = (navigator.language || "").toLowerCase();
  return nav.startsWith("ru") ? "ru" : "en";
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyLang(detectLang());

  document.querySelectorAll(".card__lang[data-lang-tag]").forEach((el) => {
    el.textContent = el.getAttribute("data-lang-tag");
  });

  document.getElementById("langToggle")?.addEventListener("click", () => {
    const current = document.documentElement.lang === "en" ? "en" : "ru";
    applyLang(current === "ru" ? "en" : "ru");
  });

  /* nav border on scroll */
  const nav = document.getElementById("nav");
  const onScroll = () => nav?.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* mobile menu */
  const burger = document.getElementById("navBurger");
  const links = document.querySelector(".nav__links");
  const closeMenu = () => {
    links?.classList.remove("is-open");
    burger?.classList.remove("is-open");
    burger?.setAttribute("aria-expanded", "false");
  };
  burger?.addEventListener("click", () => {
    const open = links?.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(!!open));
  });
  links?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  /* reveal on scroll */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* year */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
