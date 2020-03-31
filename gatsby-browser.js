exports.onRouteUpdate = ({ location }) => scrollToAnchor(location);

function scrollToAnchor(location) {
  // Check for location so build does not fail
  if (location && location.hash) {
    const item = document.querySelector(`${location.hash}`).offsetTop;

    window.scrollTo({
      top: item,
      behavior: "smooth",
    })
  }
}
