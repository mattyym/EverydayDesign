function wireHeader() {
  const btn  = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  if (!btn || !menu) return false; 

  if (btn.dataset.wired === "true") return true;
  btn.dataset.wired = "true";

  function setOpen(open) {
    btn.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    const open = btn.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  window.addEventListener("click", (e) => {
    if (menu.hidden) return;
    const t = e.target;
    const outsideMenu = !menu.contains(t);
    const outsideBtn  = !btn.contains(t);
    if (outsideMenu && outsideBtn) setOpen(false);
  }, { capture: true });


  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => setOpen(false));
  });


  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  return true;
}

async function inject(id, url) {
  const slot = document.getElementById(id);
  if (!slot) return;
  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
  slot.innerHTML = await res.text();
}

document.addEventListener("DOMContentLoaded", async () => {
  let wired = wireHeader();
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    try {
      await inject("header-placeholder", "components/header.html");
      wired = wireHeader() || wired; 
    } catch (e) {
      console.error(e);
    }
  }

  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    try {
      await inject("footer-placeholder", "components/footer.html");
    } catch (e) {
      console.error(e);
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // --- Lightbox for portfolio ---
  const gallery = document.getElementById("gallery");
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightbox-img");
  const lbClose = document.querySelector(".lightbox-close");

  if (gallery && lb && lbImg && lbClose) {
    gallery.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      e.preventDefault();
      lbImg.src = link.getAttribute("href");
      lb.hidden = false;
    });

    // close handlers
    lb.addEventListener("click", (e) => {
      if (e.target === lb || e.target === lbClose) lb.hidden = true;
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") lb.hidden = true;
    });
  }
});



document.getElementById("contact-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const payload = Object.fromEntries(new FormData(form).entries());

  try {
    const res = await fetch("http://127.0.0.1:5000/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    });

  const data = await res.json();
  if (res.ok && data.ok) {
    alert(data.msg || "Thanks! We'll be in touch.");
    form.reset();
  } else {
    alert(data.error || "Something went wrong.");
  }
  } catch (err) {
    alert("Network error. Is the backend running?");
    console.error(err);
  }
});
