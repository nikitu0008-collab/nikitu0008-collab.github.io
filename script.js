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

    "hero.eyebrow": "// c++ · rust · python разработчик",
    "hero.greeting": "Привет, я",
    "hero.lead":
      "Пишу на <strong>C++</strong>, <strong>Rust</strong> и <strong>Python</strong>: системный код, сетевые сервисы и REST API. Люблю низкий уровень и чистые абстракции.",
    "hero.location": "Сочи, Россия",
    "hero.education": "🎓 IT TOP COLLEGE",
    "hero.status": "Открыт к стажировкам / junior",
    "hero.tg": "Telegram",
    "hero.email": "Написать мне",

    "about.title": "Обо мне",
    "about.p1":
      "Привет! Я Никита (NikiZip) — студент IT TOP COLLEGE и начинающий системный разработчик из Сочи. Пишу на C++ (Boost.Beast, ncurses, многопоточность), Rust (CLI-инструменты) и Python (FastAPI, сокеты). В репозиториях — реальные проекты: чат-сервер на WebSocket, терминальный монитор системы, REST API с тестами и Docker, анализатор логов на Rust.",
    "about.p2":
      "Открыт к стажировкам и junior-позициям в направлениях C++ / Rust / Backend. Умею читать чужой код и документацию, доводить задачи до конца и проверять результат тестами.",
    "about.factName": "Имя",
    "about.factEducation": "Образование",
    "about.factEducationValue": "IT TOP COLLEGE · C++ / Rust / Python",
    "about.factFocus": "Фокус",
    "about.factLanguages": "Языки",
    "about.factLocation": "Локация",
    "about.factStatus": "Статус",

    "skills.title": "Навыки",
    "skills.languages": "Языки",
    "skills.tools": "Инструменты и среда",
    "skills.topics": "Темы",
    "skills.topicSys": "Системное программирование",
    "skills.topicNet": "Сетевое программирование",
    "skills.topicThreads": "Многопоточность",
    "skills.topicAlg": "Структуры данных и алгоритмы",
    "skills.topicApi": "REST API · FastAPI",
    "skills.topicDb": "Базы данных · SQL",
    "skills.topicPerf": "Замеры производительности",
    "skills.topicTests": "Тесты и CI",

    "projects.title": "Проекты",
    "projects.view": "Открыть →",
    "projects.studentsapi":
      "REST API на FastAPI и SQLite: фильтры по специальности и курсу, агрегаты, валидация на Pydantic, 10 pytest-тестов, Docker.",
    "projects.messenger":
      "Чат-сервер на C++23: WebSocket через Boost.Beast, отдельный поток на клиента, broadcast под мьютексом, встроенный веб-клиент.",
    "projects.loganalyzer":
      "CLI для разбора Nginx и JSON-логов: фильтры по уровню, IP и времени, статистика, вывод в таблицу, JSON и CSV, бенчмарки на criterion.",
    "projects.systemviz":
      "Терминальный монитор на ncurses: ASCII-сердце по нагрузке CPU, графики памяти, процессы, диски и сеть — напрямую из /proc.",
    "projects.cppcraft":
      "Визуальный генератор C++-кода с GUI на FLTK: собирает программу из блоков — переменные, циклы, функции, ООП, STL — и сохраняет готовый .cpp.",
    "projects.pychat":
      "TCP-клиент для чата на Python: фоновый поток принимает сообщения, главный читает ввод. Только стандартная библиотека.",
    "projects.oop":
      "ООП на C++23: наследование, полиморфизм, шаблоны, перегрузка операторов, RAII, форматирование через std::print.",
    "projects.sysprog":
      "Лабораторные по системному программированию: потоки и гонки данных, исключения, сортировки с замерами, файловый ввод-вывод.",
    "projects.basics":
      "70 базовых заданий по 13 главам: типы, циклы, функции, массивы, указатели, рекурсия, строки, файлы и макросы препроцессора.",
    "projects.sql":
      "Контрольные по MySQL 8.0: нормализованные схемы с внешними ключами, JOIN, GROUP BY и HAVING, работа с датой и временем.",
    "projects.note":
      'Полный список репозиториев и код каждого проекта — на <a href="https://github.com/nikitu0008-collab" target="_blank" rel="noopener">GitHub</a>.',

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

    "hero.eyebrow": "// c++ · rust · python developer",
    "hero.greeting": "Hi, I'm",
    "hero.lead":
      "I write <strong>C++</strong>, <strong>Rust</strong> and <strong>Python</strong>: systems code, networked services and REST APIs. I like low-level work and clean abstractions.",
    "hero.location": "Sochi, Russia",
    "hero.education": "🎓 IT TOP COLLEGE",
    "hero.status": "Open to internships / junior roles",
    "hero.tg": "Telegram",
    "hero.email": "Email me",

    "about.title": "About",
    "about.p1":
      "Hi! I'm Nikita (NikiZip), an IT TOP COLLEGE student and a junior systems developer based in Sochi. I write C++ (Boost.Beast, ncurses, multithreading), Rust (CLI tools) and Python (FastAPI, sockets). My repositories hold real projects: a WebSocket chat server, a terminal system monitor, a REST API with tests and Docker, and a log analyzer written in Rust.",
    "about.p2":
      "Open to internships and junior roles in C++ / Rust / Backend. I can navigate unfamiliar code and documentation, get things finished, and check the result with tests.",
    "about.factName": "Name",
    "about.factEducation": "Education",
    "about.factEducationValue": "IT TOP COLLEGE · C++ / Rust / Python",
    "about.factFocus": "Focus",
    "about.factLanguages": "Languages",
    "about.factLocation": "Location",
    "about.factStatus": "Status",

    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.tools": "Tools & Environment",
    "skills.topics": "Topics",
    "skills.topicSys": "Systems programming",
    "skills.topicNet": "Network programming",
    "skills.topicThreads": "Multithreading",
    "skills.topicAlg": "Data structures & algorithms",
    "skills.topicApi": "REST API · FastAPI",
    "skills.topicDb": "Databases · SQL",
    "skills.topicPerf": "Performance benchmarking",
    "skills.topicTests": "Testing & CI",

    "projects.title": "Projects",
    "projects.view": "Open →",
    "projects.studentsapi":
      "REST API with FastAPI and SQLite: filters by major and year, aggregates, Pydantic validation, 10 pytest tests, Docker.",
    "projects.messenger":
      "C++23 chat server: WebSocket over Boost.Beast, a thread per client, mutex-guarded broadcast, built-in web client.",
    "projects.loganalyzer":
      "CLI for Nginx and JSON logs: filters by level, IP and time, statistics, table / JSON / CSV output, criterion benchmarks.",
    "projects.systemviz":
      "Terminal monitor built on ncurses: ASCII heart driven by CPU load, memory graphs, processes, disks and network read straight from /proc.",
    "projects.cppcraft":
      "Visual C++ code generator with an FLTK GUI: assembles a program from blocks — variables, loops, functions, OOP, STL — and saves a ready .cpp file.",
    "projects.pychat":
      "TCP chat client in Python: a background thread receives messages while the main one reads input. Standard library only.",
    "projects.oop":
      "OOP in C++23: inheritance, polymorphism, templates, operator overloading, RAII, formatting via std::print.",
    "projects.sysprog":
      "Systems programming labs: threads and data races, exceptions, sorting with timing, file input and output.",
    "projects.basics":
      "70 beginner tasks across 13 chapters: types, loops, functions, arrays, pointers, recursion, strings, files and preprocessor macros.",
    "projects.sql":
      "MySQL 8.0 coursework: normalized schemas with foreign keys, JOINs, GROUP BY and HAVING, date and time functions.",
    "projects.note":
      'Full list of repositories and the code behind every project — on <a href="https://github.com/nikitu0008-collab" target="_blank" rel="noopener">GitHub</a>.',

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
