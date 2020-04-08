const isLearnPath = require("./src/utils/isLearnPath");

exports.onRouteUpdate = ({ location }) => scrollToAnchor(location);

function scrollToAnchor(location) {
  // Check for location so build does not fail
  if (location && location.hash) {
    const item = document.querySelector(`${location.hash}`);
    if(!item) return;
    const rect = item.getBoundingClientRect();
    const offsetTop = rect.top - item.offsetHeight - (!isLearnPath(location.pathname) ? 55 : 0);
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}
