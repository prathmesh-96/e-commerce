import React from 'react';
import WebViewComponent from '../../components/webView';
import { WebViewURLs } from '../../constants';

const ContactUs: React.FC = () => {
  return <WebViewComponent webviewURL={WebViewURLs.CONTACT_US} />;
};

export default ContactUs;
