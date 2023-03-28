import React, { FC } from 'react';
import Script from 'next/script';

const RedditPixel: FC = () => (
  <Script id="reddit-pixel">
    {`
            !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);
            rdt('init','t2_6399460j2', {"optOut":false });
            rdt('track', 'PageVisit');
            `}
  </Script>
);

export default RedditPixel;
