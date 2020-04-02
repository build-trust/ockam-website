exports.onRouteUpdate = ({ location }) => scrollToAnchor(location);

function scrollToAnchor(location) {
  // Check for location so build does not fail
  if (location && location.hash) {
    const item = document.querySelector(`${location.hash}`);
    if(!item) return;


    window.scrollTo({
      top: item.offsetTop,
      behavior: "smooth",
    })
  }
}
