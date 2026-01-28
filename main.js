document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".reveal");
  
    // If there are no reveal elements, do nothing
    if (!items.length) return;
  
    // Add stagger delays automatically if not provided
    items.forEach((el, i) => {
      if (!el.style.getPropertyValue("--delay")) {
        el.style.setProperty("--delay", `${i * 90}ms`);
      }
    });
  
    // Trigger reveal on next paint
    requestAnimationFrame(() => {
      items.forEach((el) => el.classList.add("is-visible"));
    });
  });
  