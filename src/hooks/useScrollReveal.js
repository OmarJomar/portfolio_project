import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    let lastScrollY = window.scrollY;
    let direction = "down";

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      direction = currentScrollY > lastScrollY ? "down" : "up";
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("from-top", "from-bottom");
            entry.target.classList.add(direction === "down" ? "from-bottom" : "from-top");
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}