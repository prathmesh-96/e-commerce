import React from 'react';
import WebViewComponent from '../../components/webView';
import { WebViewURLs } from '../../constants';

const AboutUs: React.FC = () => {
  return <WebViewComponent webviewURL={WebViewURLs.ABOUT_US} />;
};

export default AboutUs;
