import React from 'react';
import WebViewComponent from '../../components/webView';
import { WebViewURLs } from '../../constants';

const FAQScreen: React.FC = () => {
  return <WebViewComponent webviewURL={WebViewURLs.FAQs} />;
};

export default FAQScreen;
