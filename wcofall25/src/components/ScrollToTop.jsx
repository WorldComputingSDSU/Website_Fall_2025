import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router keeps the browser's scroll position when the route changes, so
 * navigating away from a page you'd scrolled down would drop you partway down
 * the next one. This resets to the top on every navigation.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Let us restore scroll ourselves instead of the browser doing it on
    // reload and back/forward.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // `html { scroll-behavior: smooth }` would otherwise animate this, which
    // looks wrong on a page change, so jump instantly instead.
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = previous;
  }, [pathname]);

  return null;
}

export default ScrollToTop;
