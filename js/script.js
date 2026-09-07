/* ================================================================
   PORTFOLIO_DATA
   -----------------------------------------------------------------
   EVERYTHING you add, remove, or reorder in your portfolio over time
   should be a change IN THIS OBJECT — not in HTML, not in the render
   functions below. That's the "add without breaking things" promise
   from the brief.
   ================================================================ */
const PORTFOLIO_DATA = {

  /* Each card needs EITHER "image" (a background photo) OR just "icon"
     (used as a fallback if image is missing/fails to load). You never
     edit HTML or CSS to add a photo — set "image" here and the card
     picks it up automatically. */
  experience: [
    {
      id: "exp-1",
      icon: "fa-solid fa-briefcase",
      image: "assets/images/Next Education.jpg",
      title: "Lead E-Learning Developer, Next Education India Private Limited",
      shortDesc: "February 2015 - Present",
      body: `<ul>
                <li>Managed multiple projects and assigned tasks to team members to ensure timely project delivery.</li>
              <li>Planned projects based on workload, team capacity, and project deadlines.</li>
              <li>Created weekly project plans after coordination meetings with production and project managers.</li>
              <li>Resolved client production-level support tickets and ensured smooth issue resolution.</li>
              <li>Coordinated with subject matter experts and subject leads to clarify storyboard queries and improve output quality.</li>
              <li>Collaborated with the technical team to develop new features and resolve issues across different modules of the existing product.</li>
              <li>Performed basic debugging using developer tools for SCORM packages and HTML resources.</li>
              <li>Resolved challenging issues arising during the production process to maintain workflow efficiency.</li>
              <li>Developed interactive eLearning courses and assessments using Articulate 360 and Rise 360 with expertise in creating SCORM-compliant courses, knowledge checks, custom interactions, and final assessments for corporate and online learning environments.</li>
              <li>Skilled in Learning Management Systems (LMS), Resource Management Systems (RMS) and Course Management Systems with experience in implementing learning and 
performance support solutions in corporate environments.</li>
              <li>Possess entry-level knowledge of HTML, CSS, and JavaScript, along with experience in quality assurance testing and troubleshooting eLearning resources.</li>
              <li>Developed interactive eBooks with engaging and user-friendly interactions to enhance the learning experience.</li>
              <li>Entry-level experience in using AI tools for task-based requirements.</li>
</ul>`
    },
    {
      id: "exp-2",
      icon: "fa-solid fa-briefcase",
      image: "assets/images/Stylecraze.jpg",
      title: "Graphic Designer, <br>Stylecraze Beauty Care Private Limited",
      shortDesc: "June 2013 — January 2015",
      body: `
        <ul>
              <li>Experienced in creating effective infographics based on storyboards and articles shared by subject matter experts.</li>
              <li>Designed interactive and eye-catching web banners and social media assets for multiple digital platforms.</li>
              <li>Uploaded and updated articles, images and multimedia assets in the web portal using WordPress.</li>
        </ul>`
    }
  ],

  /* Skill categories power the static skills grid (one card per category).
     "id" must be unique. Each tool needs:
       - img:   local icon file (assets/icons/skills/…) — this is what renders.
       - icon:  Font Awesome class — kept only as a fallback if img fails to
                load (bad path, missing file), so a broken icon never shows
                a broken-image glyph.
       - label: display text under/inside the icon. */
  skillCategories: [
    {
      id: "elearning",
      label: "E-Learning Tools",
      img: "assets/icons/skills/articulate360.jpg",
      icon: "fa-solid fa-chalkboard-user",
      icons: [
        { img: "assets/icons/skills/storyline360.jpg", icon: "fa-solid fa-layer-group", label: "Storyline 360" },
        { img: "assets/icons/skills/rise360.png", icon: "fa-solid fa-book-open-reader", label: "Rise 360" }
      ]
    },
    {
      id: "graphic",
      label: "Multimedia & Graphic Design",
      img: "assets/icons/skills/Multimedia.jpg",
      icon: "fa-solid fa-palette",
      icons: [
        { img: "assets/icons/skills/InDesign_logo.png", icon: "fa-brands fa-adobe", label: "InDesign" },
        { img: "assets/icons/skills/Photoshop_logo.webp", icon: "fa-brands fa-adobe", label: "Photoshop" },
        { img: "assets/icons/skills/Illustrator_logo.jpg", icon: "fa-brands fa-adobe", label: "Illustrator" },
        { img: "assets/icons/skills/Animate_logo.webp", icon: "fa-brands fa-adobe", label: "Animate" }
      ]
    },
    {
      id: "lms",
      label: "Learning Management Systems",
      img: "assets/icons/skills/lms.svg",
      icon: "fa-solid fa-graduation-cap",
      icons: [
        { img: "assets/icons/skills/lms.svg", icon: "fa-solid fa-graduation-cap", label: "LMS" },
        { img: "assets/icons/skills/scorm.svg", icon: "fa-solid fa-box-archive", label: "SCORM" }
      ]
    },
    {
      id: "programming",
      label: "Programming Languages",
      img: "assets/icons/skills/code_symbol.jpg",
      icon: "fa-solid fa-code",
      icons: [
        { img: "assets/icons/skills/html5.jpg", icon: "fa-brands fa-html5", label: "HTML5" },
        { img: "assets/icons/skills/css3.png", icon: "fa-brands fa-css3-alt", label: "CSS3" },
        { img: "assets/icons/skills/javascript.png", icon: "fa-brands fa-js", label: "JavaScript" }
      ]
    },
    {
      id: "video",
      label: "Video Tools",
      img: "assets/icons/skills/AV.png",
      icon: "fa-solid fa-clapperboard",
      icons: [
        { img: "assets/icons/skills/After Effects.webp", icon: "fa-brands fa-adobe", label: "After Effects" },
        { img: "assets/icons/skills/Premiere_Pro.webp", icon: "fa-brands fa-adobe", label: "Premiere Pro" },
        { img: "assets/icons/skills/Audacity.webp", icon: "fa-solid fa-waveform-lines", label: "Audacity" },
        { img: "assets/icons/skills/camtasia.jpg", icon: "fa-solid fa-video", label: "Camtasia" }
      ]
    },
    {
      id: "instructional",
      label: "Instructional Design",
      img: "assets/icons/skills/Instruction Designer.png",
      icon: "fa-solid fa-diagram-project",
      icons: [
        { img: "assets/icons/skills/addie.svg", icon: "fa-solid fa-diagram-project", label: "ADDIE" },
        { img: "assets/icons/skills/adult-learning.svg", icon: "fa-solid fa-users", label: "Adult Learning Principles" },
        { img: "assets/icons/skills/interactive-assessment.svg", icon: "fa-solid fa-clipboard-check", label: "Interactive Assessment" }
      ]
    },
    {
      id: "presentation",
      label: "Presentation Tools",
      img: "assets/icons/skills/Presentation.png",
      icon: "fa-solid fa-display",
      icons: [
        { img: "assets/icons/skills/Power Point.jpg", icon: "fa-solid fa-file-powerpoint", label: "PowerPoint" },
        { img: "assets/icons/skills/Google Slide.png", icon: "fa-solid fa-file-googleslide", label: "googleslide" }
      ]
    },
    {
      id: "other",
      label: "Other Tools",
      img: "assets/icons/skills/Other Tools.png",
      icon: "fa-solid fa-toolbox",
      icons: [
        { img: "assets/icons/skills/Google Sheets.png", icon: "fa-solid fa-table-cells", label: "Google Sheets" },
        { img: "assets/icons/skills/Tortoise svn.png", icon: "fa-solid fa-code-branch", label: "TortoiseSVN" }
      ]
    }
  ],

  /* Portfolio categories. "type" decides which popup renderer runs:
     "zip"   -> zip thumbnail grid -> extracted index.html in an iframe
     "image" -> image thumbnail grid -> fullscreen carousel viewer
     "embed" -> subcategory tabs -> thumbnail grid -> embedded webpage overlay
     "img" on a category = the tile icon shown in the Portfolio grid.
     "thumb" on an item = the grid thumbnail shown inside that category's popup. */
  portfolioCategories: [
    {
      id: "animate",
      label: "Adobe Animate",
      img: "assets/icons/skills/Animate_logo.webp",
      icon: "fa-brands fa-adobe",
      type: "project",
      desc: "Interactive HTML5 projects exported from Animate.",
      items: [
        { id: "an-1", label: "Zomato Banner", thumb: "assets/images/portfolio/Zomato.png", projectUrl: "https://singavarapugauthamraju-123.github.io/Portfolio/animate/Zomato Banner/index.html"},
        // { id: "an-2", label: "Sample Project 2", thumb: "assets/images/portfolio/Web Banner.png", zipUrl: "assets/animate/Web Banner 1200 x 400.zip" },
        // { id: "an-3", label: "Sample Project 3", thumb: "assets/images/portfolio/Healthy Restaurent.png", zipUrl: "assets/animateHealthy Restaurent 300 x 250.zip" },
        // { id: "an-4", label: "Sample Project 3", thumb: "assets/images/portfolio/Bank Guarantee.png", zipUrl: "assets/animate/Bank Guarantee 713 x 300.zip" },
      ]
    },
    {
      id: "indesign",
      label: "Adobe InDesign",
      img: "assets/icons/skills/InDesign_logo.png",
      icon: "fa-brands fa-adobe",
      type: "zip",
      desc: "Interactive layouts exported to HTML.",
      items: [
        { id: "id-1", label: "Sample Layout 1", thumb: "assets/images/portfolio/indesign-1.jpg", zipUrl: null },
        { id: "id-2", label: "Sample Layout 2", thumb: "assets/images/portfolio/indesign-2.jpg", zipUrl: null }
      ]
    },
    {
      id: "illustrator",
      label: "Adobe Illustrator",
      img: "assets/icons/skills/Illustrator_logo.jpg",
      icon: "fa-brands fa-adobe",
      type: "image",
      desc: "Vector illustration and iconography.",
      items: [
        { id: "il-1", label: "Illustration 1", src: "assets/images/portfolio/illustrator-1.jpg" },
        { id: "il-2", label: "Illustration 2", src: "assets/images/portfolio/illustrator-2.jpg" },
        { id: "il-3", label: "Illustration 3", src: "assets/images/portfolio/illustrator-3.jpg" }
      ]
    },
    {
      id: "photoshop",
      label: "Adobe Photoshop",
      img: "assets/icons/skills/Photoshop_logo.webp",
      icon: "fa-brands fa-adobe",
      type: "image",
      desc: "Raster compositing and image work.",
      items: [
        { id: "ps-1", label: "Composite 1", src: "assets/images/portfolio/photoshop-1.jpg" },
        { id: "ps-2", label: "Composite 2", src: "assets/images/portfolio/photoshop-2.jpg" },
        { id: "ps-3", label: "Composite 3", src: "assets/images/portfolio/photoshop-3.jpg" }
      ]
    },
    {
      id: "articulate",
      label: "Articulate 360",
      img: "assets/icons/skills/articulate360.jpg",
      icon: "fa-solid fa-layer-group",
      type: "embed",
      desc: "Storyline and Rise courses.",
      subcategories: [
        {
          id: "storyline",
          label: "Storyline 360",
          items: [
            { id: "sl-1", label: "Sample Course 1", thumb: "assets/images/portfolio/storyline-1.jpg", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: "sl-2", label: "Sample Course 2", thumb: "assets/images/portfolio/storyline-2.jpg", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
          ]
        },
        {
          id: "rise",
          label: "Rise 360",
          items: [
            { id: "ri-1", label: "Sample Module 1", thumb: "assets/images/portfolio/rise-1.jpg", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { id: "ri-2", label: "Sample Module 2", thumb: "assets/images/portfolio/rise-2.jpg", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
          ]
        }
      ]
    }
  ],

  /* ============================================================
     >>> EDIT YOUR EMAIL ADDRESS HERE <<<
     This is the ONLY place in the entire project that needs to change
     to update where the Contact form sends messages. Replace the
     placeholder below with your real email address — nothing else in
     index.html, script.js, or style.css needs to be touched.
     ============================================================ */
  contactInfo: {
    recipientEmail: "your-email@example.com"
  }
  /* ============================================================ */
};

/* ================================================================
   NAV — built from section[data-nav-label] so the source of truth
   for "what's in the nav" is the sections themselves, not a second
   hand-maintained list.
   ================================================================ */
function buildNav() {
  const nav = document.getElementById("primaryNav");
  const sections = document.querySelectorAll("main > section[data-nav-label]");
  sections.forEach(sec => {
    const a = document.createElement("a");
    a.href = `#${sec.id}`;
    a.textContent = sec.dataset.navLabel;
    nav.appendChild(a);
  });

  // Active-link highlighting on scroll
  const links = [...nav.querySelectorAll("a")];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(sec => observer.observe(sec));

  // Mobile toggle
  const toggle = document.getElementById("navToggle");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.forEach(l => l.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

/* ================================================================
   MODAL — the single reusable popup used everywhere in the site.
   openModal({ title, size, render }) where render(bodyEl) fills the body.
   Returns the bodyEl in case the caller needs to update it later
   (used by the zip loader to swap a spinner for an iframe).
   ================================================================ */
const Modal = (() => {
  const overlay = document.getElementById("modalOverlay");
  const win = document.getElementById("modalWindow");
  const titleEl = document.getElementById("modalTitle");
  const bodyEl = document.getElementById("modalBody");
  const closeBtn = document.getElementById("modalCloseBtn");
  const fsBtn = document.getElementById("modalFullscreenBtn");
  let lastFocused = null;
  let onCloseCallback = null;

  function open({ title, size = "default", render, onClose = null }) {
    lastFocused = document.activeElement;
    onCloseCallback = onClose;
    titleEl.textContent = title;
    bodyEl.innerHTML = "";
    win.classList.toggle("modal-lg", size === "large");
    win.classList.remove("is-fullscreen");
    fsBtn.querySelector("i").className = "fa-solid fa-expand";

    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    // next frame so the transition actually runs
    requestAnimationFrame(() => overlay.classList.add("is-open"));

    if (typeof render === "function") render(bodyEl);
    closeBtn.focus();
    return bodyEl;
  }

  function close() {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    setTimeout(() => {
      overlay.hidden = true;
      bodyEl.innerHTML = "";
      win.classList.remove("is-fullscreen");
    }, 300);
    if (typeof onCloseCallback === "function") onCloseCallback();
    if (lastFocused) lastFocused.focus();
  }

  function toggleFullscreen() {
    const isFs = win.classList.toggle("is-fullscreen");
    fsBtn.querySelector("i").className = isFs ? "fa-solid fa-compress" : "fa-solid fa-expand";
  }

  closeBtn.addEventListener("click", close);
  fsBtn.addEventListener("click", toggleFullscreen);
  overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", e => {
    if (overlay.hidden) return;
    if (e.key === "Escape") close();
    // basic focus trap
    if (e.key === "Tab") {
      const focusable = win.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
      else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
    }
  });

  return { open, close };
})();

/* ================================================================
   EXPERIENCE
   ================================================================ */
function renderExperience() {
  const grid = document.getElementById("experienceGrid");
  PORTFOLIO_DATA.experience.forEach(exp => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "exp-card glass-card";

    // If "image" is set in PORTFOLIO_DATA, use it as the card's background
    // photo (with an object-fit img so it always fills the square card
    // without distortion). Otherwise fall back to the icon + gradient —
    // and if the image path is wrong/missing, onerror swaps back to the
    // icon automatically instead of showing a broken-image glyph.
    const imageMarkup = exp.image
      ? `<img src="${exp.image}" alt="" class="exp-card-photo"
           onerror="this.closest('.exp-card-image').classList.remove('has-image'); this.remove();">`
      : "";

    card.innerHTML = `
      <span class="exp-card-image${exp.image ? " has-image" : ""}">
        ${imageMarkup}
        <i class="${exp.icon}"></i>
      </span>
      <span class="exp-card-title">${exp.title}</span>
      <span class="exp-card-desc">${exp.shortDesc}</span>
    `;
    card.addEventListener("click", () => {
      Modal.open({
        title: exp.title,
        render: (body) => { body.innerHTML = exp.body; }
      });
    });
    grid.appendChild(card);
  });
}

/* ================================================================
   ICON HELPER — shared by Skills and Portfolio so both use image
   icons (assets/icons/…) with an identical, one-line fallback to a
   Font Awesome glyph if the image path is ever wrong or missing.
   Both the <img> and the fallback <i> get the SAME cssClass, so
   whichever renders, size/alignment/spacing stay consistent — that
   consistency lives in CSS, not duplicated per call site.
   ================================================================ */
function iconHTML(imgSrc, faClass, cssClass) {
  return `<img src="${imgSrc}" alt="" class="${cssClass}" onerror="iconFallback(this, '${faClass}', '${cssClass}')">`;
}
function iconFallback(imgEl, faClass, cssClass) {
  const i = document.createElement("i");
  i.className = `${faClass} ${cssClass}`;
  imgEl.replaceWith(i);
}

/* ================================================================
   SKILLS — static categorized grid
   One card per category, each listing its tools as tags. No selection
   state, no animation loop — every category is visible at once, which
   is also just more usable: a recruiter scanning skills doesn't want
   to click through eight categories one at a time.
   ================================================================ */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  PORTFOLIO_DATA.skillCategories.forEach(cat => {
    const card = document.createElement("div");
    card.className = "skill-category-card glass-card";
    const tags = cat.icons.map(iconData =>
      `<span class="skill-tag">${iconHTML(iconData.img, iconData.icon, "skill-tag-icon")}${iconData.label}</span>`
    ).join("");
    card.innerHTML = `
      <div class="skill-category-header">
        <span class="skill-category-icon">${iconHTML(cat.img, cat.icon, "skill-category-icon-img")}</span>
        <h3>${cat.label}</h3>
      </div>
      <div class="skill-tag-list">${tags}</div>
    `;
    grid.appendChild(card);
  });
}

/* ================================================================
   PORTFOLIO — category tiles + type-specific popups
   ================================================================ */
function renderPortfolio() {
  const grid = document.getElementById("portfolioGrid");
  PORTFOLIO_DATA.portfolioCategories.forEach(cat => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "portfolio-tile glass-card";
    const count = cat.items ? cat.items.length : cat.subcategories.reduce((n, s) => n + s.items.length, 0);
    tile.innerHTML = `
      <span class="portfolio-tile-icon">${iconHTML(cat.img, cat.icon, "portfolio-tile-icon-img")}</span>
      <span class="portfolio-tile-title">${cat.label}</span>
      <span class="portfolio-tile-desc">${cat.desc}</span>
      <span class="portfolio-tile-count">${count} item${count === 1 ? "" : "s"}</span>
    `;
    tile.addEventListener("click", () => openPortfolioCategory(cat));
    grid.appendChild(tile);
  });
}

function openPortfolioCategory(cat) {
  Modal.open({
    title: cat.label,
    size: "large",
    render: (body) => {
      if (cat.type === "zip") renderProjectGrid(body, cat.items);
      else if (cat.type === "image") renderImageGrid(body, cat.items);
      else if (cat.type === "embed") renderEmbedCategory(body, cat.subcategories);
    }
  });
}

/* ---- ZIP category: thumbnails -> extract zip -> iframe ---- */
function renderProjectGrid(body, items) {
  const grid = document.createElement("div");
  grid.className = "thumb-grid";
  items.forEach(item => {
    const thumb = document.createElement("button");
    thumb.type = "button";
    thumb.className = "thumb";
    const thumbInner = item.thumb
      ? iconHTML(item.thumb, "fa-solid fa-file-zipper", "thumb-image-img")
      : `<i class="fa-solid fa-file-zipper"></i>`;
    thumb.innerHTML = `
      <span class="thumb-image">${thumbInner}</span>
      <span class="thumb-label">${item.label}</span>
    `;
    thumb.addEventListener("click", () => openProject(item));
    grid.appendChild(thumb);
  });
  body.appendChild(grid);
}

async function openProject(item) {
  const wrap = Modal.open({
    title: item.label,
    size: "large",
    render: (body) => {
      body.innerHTML = `
        <div class="project-frame-wrap">
          <div class="project-frame-status">
            <i class="fa-solid fa-circle-notch fa-spin"></i>
            <span id="zipStatus">Loading project…</span>
          </div>
        </div>`;
    }
  });

  const statusEl = wrap.querySelector("#zipStatus");
  const frameWrap = wrap.querySelector(".project-frame-wrap");

  if (!item.zipUrl) {
    // Placeholder mode — no real zip attached yet.
    frameWrap.innerHTML = `
      <div class="project-frame-status">
        <i class="fa-solid fa-file-zipper" style="font-size:1.8rem;"></i>
        <span>Placeholder — this thumbnail has no .zip attached yet.<br>
        Set <code>zipUrl</code> on this item in PORTFOLIO_DATA to load a real project here.</span>
      </div>`;
    return;
  }

  try {
    statusEl.textContent = "Downloading .zip…";
    const res = await fetch(item.zipUrl);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    const blob = await res.blob();

    statusEl.textContent = "Extracting files…";
    const zip = await JSZip.loadAsync(blob);

    // Build a map of relative-path -> blob object URL for every file in the zip.
    const urlMap = {};
    const fileEntries = Object.values(zip.files).filter(f => !f.dir);
    for (const entry of fileEntries) {
      const lower = entry.name.toLowerCase();
      const mime = lower.endsWith(".html") ? "text/html"
        : lower.endsWith(".css") ? "text/css"
        : lower.endsWith(".js") ? "application/javascript"
        : lower.endsWith(".png") ? "image/png"
        : lower.endsWith(".jpg") || lower.endsWith(".jpeg") ? "image/jpeg"
        : lower.endsWith(".svg") ? "image/svg+xml"
        : "application/octet-stream";
      const data = await entry.async("blob");
      urlMap[entry.name] = URL.createObjectURL(new Blob([data], { type: mime }));
    }

    const indexEntry = fileEntries.find(f => f.name.toLowerCase().endsWith("index.html"));
    if (!indexEntry) throw new Error("No index.html found in this .zip");

    let html = await indexEntry.async("string");
    const indexDir = indexEntry.name.includes("/")
      ? indexEntry.name.slice(0, indexEntry.name.lastIndexOf("/") + 1) : "";

    // Rewrite relative src/href references to their blob URL.
    // NOTE (honest limitation): this handles same-folder and index-relative
    // paths. Paths using "../" to climb above the zip root, or paths built
    // dynamically inside the project's own JS, will not resolve — there is
    // no way to fix that without a server or a full virtual filesystem.
    html = html.replace(/(src|href)=["']([^"']+)["']/g, (match, attr, path) => {
      if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return match;
      const key = indexDir + path;
      return urlMap[key] ? `${attr}="${urlMap[key]}"` : match;
    });

    statusEl && (frameWrap.innerHTML = `<iframe title="${item.label}" sandbox="allow-scripts allow-same-origin"></iframe>`);
    const iframe = frameWrap.querySelector("iframe");
    iframe.srcdoc = html;
  } catch (err) {
    frameWrap.innerHTML = `
      <div class="project-frame-status">
        <i class="fa-solid fa-triangle-exclamation" style="font-size:1.8rem;"></i>
        <span>Couldn't load this project: ${err.message}</span>
      </div>`;
  }
}

/* ---- Image category: thumbnails -> fullscreen carousel with zoom ---- */
function renderImageGrid(body, items) {
  const grid = document.createElement("div");
  grid.className = "thumb-grid";
  items.forEach((item, idx) => {
    const thumb = document.createElement("button");
    thumb.type = "button";
    thumb.className = "thumb";
    thumb.innerHTML = `
      <span class="thumb-image">${item.src ? iconHTML(item.src, "fa-solid fa-image", "thumb-image-img") : `<i class="fa-solid fa-image"></i>`}</span>
      <span class="thumb-label">${item.label}</span>
    `;
    thumb.addEventListener("click", () => openImageCarousel(items, idx));
    grid.appendChild(thumb);
  });
  body.appendChild(grid);
}

function openImageCarousel(items, startIndex) {
  let index = startIndex;
  Modal.open({
    title: items[index].label,
    size: "large",
    render: (body) => {
      body.innerHTML = `
        <div class="image-viewer">
          <button type="button" class="image-viewer-nav-btn" id="imgPrev" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></button>
          <div class="image-viewer-stage" id="imgStage"></div>
          <button type="button" class="image-viewer-nav-btn" id="imgNext" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></button>
          <span class="image-viewer-count" id="imgCount"></span>
        </div>`;

      const stage = body.querySelector("#imgStage");
      const countEl = body.querySelector("#imgCount");
      const titleEl = document.getElementById("modalTitle");

      function draw() {
        const item = items[index];
        titleEl.textContent = item.label;
        countEl.textContent = `${index + 1} / ${items.length}`;
        stage.innerHTML = item.src
          ? `<img src="${item.src}" alt="${item.label}">`
          : `<div class="project-frame-status"><i class="fa-solid fa-image" style="font-size:1.8rem;"></i><span>Placeholder — set "src" on this item in PORTFOLIO_DATA.</span></div>`;
        const img = stage.querySelector("img");
        if (img) img.addEventListener("click", () => img.classList.toggle("zoomed"));
      }
      body.querySelector("#imgPrev").addEventListener("click", () => { index = (index - 1 + items.length) % items.length; draw(); });
      body.querySelector("#imgNext").addEventListener("click", () => { index = (index + 1) % items.length; draw(); });
      draw();
    }
  });
}

/* ---- Embed category (Articulate 360): subcategory tabs -> thumbnails -> iframe overlay ---- */
function renderEmbedCategory(body, subcategories) {
  const tabs = document.createElement("div");
  tabs.className = "subcat-tabs";
  const gridWrap = document.createElement("div");

  subcategories.forEach((sub, i) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "subcat-tab";
    tab.setAttribute("aria-selected", i === 0 ? "true" : "false");
    tab.textContent = sub.label;
    tab.addEventListener("click", () => selectSub(sub));
    tabs.appendChild(tab);
  });

  function selectSub(sub) {
    [...tabs.children].forEach(t => t.setAttribute("aria-selected", t.textContent === sub.label ? "true" : "false"));
    gridWrap.innerHTML = "";
    const grid = document.createElement("div");
    grid.className = "thumb-grid";
    sub.items.forEach(item => {
      const thumb = document.createElement("button");
      thumb.type = "button";
      thumb.className = "thumb";
      const thumbInner = item.thumb
        ? iconHTML(item.thumb, "fa-solid fa-play", "thumb-image-img")
        : `<i class="fa-solid fa-play"></i>`;
      thumb.innerHTML = `
        <span class="thumb-image">${thumbInner}</span>
        <span class="thumb-label">${item.label}</span>`;
      thumb.addEventListener("click", () => openEmbedViewer(item));
      grid.appendChild(thumb);
    });
    gridWrap.appendChild(grid);
  }

  body.appendChild(tabs);
  body.appendChild(gridWrap);
  selectSub(subcategories[0]);
}

function openEmbedViewer(item) {
  Modal.open({
    title: item.label,
    size: "large",
    render: (body) => {
      body.innerHTML = `<div class="project-frame-wrap"><iframe title="${item.label}" src="${item.embedUrl}" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
    }
  });
}

/* ================================================================
   SEARCH — filters across skills + portfolio categories/items
   ================================================================ */
function initSearch() {
  const input = document.getElementById("siteSearch");
  const resultsBox = document.getElementById("searchResults");

  function buildIndex() {
    const index = [];
    PORTFOLIO_DATA.skillCategories.forEach(cat => {
      cat.icons.forEach(icon => index.push({ type: "Skill", label: icon.label, action: () => jumpToSkill(cat.id, icon.label) }));
    });
    PORTFOLIO_DATA.portfolioCategories.forEach(cat => {
      index.push({ type: "Portfolio", label: cat.label, action: () => openPortfolioCategory(cat) });
      const items = cat.items || cat.subcategories.flatMap(s => s.items);
      items.forEach(item => index.push({ type: "Portfolio item", label: item.label, action: () => openPortfolioCategory(cat) }));
    });
    return index;
  }
  const index = buildIndex();

  function jumpToSkill(catId, skillLabel) {
    // Skills are now a static grid — every category is already visible, so
    // there's no category to "select" like the old orbit version. Instead,
    // scroll straight to the matching tag and flash it briefly.
    const tag = [...document.querySelectorAll(".skill-tag")]
      .find(el => el.textContent.trim() === skillLabel);
    const target = tag || document.getElementById("skills");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    if (tag) {
      tag.classList.add("skill-tag-highlight");
      setTimeout(() => tag.classList.remove("skill-tag-highlight"), 1500);
    }
  }

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { resultsBox.hidden = true; return; }
    const matches = index.filter(item => item.label.toLowerCase().includes(q)).slice(0, 8);
    resultsBox.innerHTML = matches.length
      ? matches.map((m, i) => `<button type="button" data-i="${i}"><span class="result-type">${m.type}</span>${m.label}</button>`).join("")
      : `<div class="no-results">No matches for "${input.value}"</div>`;
    resultsBox.hidden = false;
    resultsBox.querySelectorAll("button").forEach((btn, i) => {
      btn.addEventListener("click", () => { matches[i].action(); resultsBox.hidden = true; input.value = ""; });
    });
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".nav-search")) resultsBox.hidden = true;
  });
}

/* ================================================================
   CONTACT — builds a mailto: link from the form fields.
   No backend, by design (per the brief) — mailto is the correct tool
   here, not a limitation. All four fields (name, email, subject,
   message) are required.

   To change where messages get sent, edit ONLY
   PORTFOLIO_DATA.contactInfo.recipientEmail near the top of this file
   (search "EDIT YOUR EMAIL ADDRESS"). Do not edit anything below —
   the "email" field read here is the VISITOR's own email address,
   not yours.

   The form has novalidate on it (see index.html), so HTML's native
   "required" attribute does NOT block submission on its own — it's
   there for accessibility/semantics, and the actual blocking logic
   lives here, driven off that same "required" attribute so the two
   never drift out of sync.
   ================================================================ */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const statusText = document.getElementById("contactStatus");
  const fields = [...form.querySelectorAll("input[required], textarea[required]")];
  const emailField = document.getElementById("contactEmail");

  function isValid(field) {
    const value = field.value.trim();
    if (!value) return false;
    if (field === emailField) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // basic format check
    return true;
  }

  function setFieldError(field, hasError) {
    field.closest(".form-field").classList.toggle("has-error", hasError);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    statusText.textContent = "";

    let firstInvalid = null;
    fields.forEach(field => {
      const invalid = !isValid(field);
      setFieldError(field, invalid);
      if (invalid && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    const name = document.getElementById("contactName").value.trim();
    const email = emailField.value.trim(); // visitor's own email, not yours
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    const bodyLines = [`Name: ${name}`, `Email: ${email}`, "", message];

    // Recipient address is pulled from PORTFOLIO_DATA.contactInfo.recipientEmail —
    // that's the single place to change it (see the block near the top of this file).
    const mailto = `mailto:${PORTFOLIO_DATA.contactInfo.recipientEmail}`
      + `?subject=${encodeURIComponent(subject)}`
      + `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    statusText.textContent = "Opening your email client…";
  });

  // Clear each field's error state as soon as it becomes valid — same
  // behavior the message field already had, now shared by all four.
  fields.forEach(field => {
    field.addEventListener("input", () => {
      if (isValid(field)) setFieldError(field, false);
    });
  });
}

/* ================================================================
   INIT
   ================================================================ */
document.getElementById("year").textContent = new Date().getFullYear();
buildNav();
renderExperience();
renderSkills();
renderPortfolio();
initSearch();
initContactForm();
