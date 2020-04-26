const isLearnPath = require("./src/utils/isLearnPath");

exports.onRouteUpdate = ({ location }) => scrollToAnchor(location);

function scrollToAnchor(location) {
  // Check for location so build does not fail
  if (location && location.hash) {
    const item = document.querySelector(`${location.hash}`);
    if(!item) return;
    const rect = item.getBoundingClientRect();
    const topOffset = rect.top + window.scrollY;
    const offsetTop = topOffset - item.offsetHeight - (!isLearnPath(location.pathname) ? 70 : 0);
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}
