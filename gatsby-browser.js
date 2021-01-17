const ReactGA = require('react-ga');

const config = require('./config');
const isLearnPath = require('./src/utils/isLearnPath');

function scrollToAnchor(location) {
  // Check for location so build does not fail
  if (location && location.hash) {
    const item = document.querySelector(`${location.hash}`);
    if (!item) return;
    const rect = item.getBoundingClientRect();
    const topOffset = rect.top + window.scrollY;
    const offsetTop =
      topOffset -
      item.offsetHeight -
      (!isLearnPath(location.pathname) ? 70 : 0);
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
}

function onInitialClientRender() {
  ReactGA.initialize(config.gatsby.gaTrackingId);
}

exports.onRouteUpdate = ({ location }) => scrollToAnchor(location);
exports.onInitialClientRender = onInitialClientRender;
