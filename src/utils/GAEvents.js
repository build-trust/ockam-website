import ReactGA from 'react-ga';

const ACTIONS = {
  REDIRECT_TO_OCKAM_GITHUB: 'Redirect to ockam github repo',
  REDIRECT_TO_OCKAM_COMMUNITY: 'Redirect to ockam github discussions',
  REDIRECT_TO_OCKAM_TWITTER: 'Redirect to ockam twitter',
  NAVIGATE_TO_HOW_TO_GUIDES: 'Go to How-To guides',
};

const CATEGORIES = {
  OUTBOUND_LINKS: 'Outbound links',
};

const LABELS = {
  GET_STARTED_SECTION: 'Get started section',
};

class GAEvents {
  static outboundGithubLink() {
    ReactGA.event({
      category: CATEGORIES.OUTBOUND_LINKS,
      action: ACTIONS.REDIRECT_TO_OCKAM_GITHUB,
      label: LABELS.GET_STARTED_SECTION,
    });
  }

  static outboundCommunityLink() {
    ReactGA.event({
      category: CATEGORIES.OUTBOUND_LINKS,
      action: ACTIONS.REDIRECT_TO_OCKAM_COMMUNITY,
      label: LABELS.GET_STARTED_SECTION,
    });
  }

  static outboundTwitterLink() {
    ReactGA.event({
      category: CATEGORIES.OUTBOUND_LINKS,
      action: ACTIONS.REDIRECT_TO_OCKAM_TWITTER,
      label: LABELS.GET_STARTED_SECTION,
    });
  }

  static navigateToHowToGuides() {
    ReactGA.event({
      category: CATEGORIES.OUTBOUND_LINKS,
      action: ACTIONS.NAVIGATE_TO_HOW_TO_GUIDES,
      label: LABELS.GET_STARTED_SECTION,
    });
  }
}

export default GAEvents;
