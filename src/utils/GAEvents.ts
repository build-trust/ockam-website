import { event } from "nextjs-google-analytics";

const ACTIONS = {
  REDIRECT_TO_OCKAM_GITHUB: 'Redirect to ockam github repo',
  REDIRECT_TO_OCKAM_START_BUILDING: 'Redirect to ockam start building docs',
  REDIRECT_TO_OCKAM_TWITTER: 'Redirect to ockam twitter',
  NAVIGATE_TO_OKCAM_ORCHESTRATOR: 'Redirect to ockam orchestrator',
};

const CATEGORIES = {
  OUTBOUND_LINKS: 'Outbound links',
};

const LABELS = {
  LETS_BUILD_TRUST_SECTION: 'Lets build trust section',
};

class GAEvents {
  static outboundGithubLink():void {
    event(ACTIONS.REDIRECT_TO_OCKAM_GITHUB,{
      category: CATEGORIES.OUTBOUND_LINKS,
      label: LABELS.LETS_BUILD_TRUST_SECTION,
    });
  }

  static outboundStartBuildingLink():void {
    event(ACTIONS.REDIRECT_TO_OCKAM_START_BUILDING, {
      category: CATEGORIES.OUTBOUND_LINKS,
      label: LABELS.LETS_BUILD_TRUST_SECTION,
    });
  }

  static outboundTwitterLink():void {
    event(ACTIONS.REDIRECT_TO_OCKAM_TWITTER, {
      category: CATEGORIES.OUTBOUND_LINKS,
    });
  }

  static outboundOrchestratorLink():void {
    event(ACTIONS.NAVIGATE_TO_OKCAM_ORCHESTRATOR, {
      category: CATEGORIES.OUTBOUND_LINKS,
      label: LABELS.LETS_BUILD_TRUST_SECTION,
    });
  }
}

export default GAEvents;
