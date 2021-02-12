import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

export interface Props {
  webviewURL: string;
}
const WebViewComponent: React.FC<Props> = (props: Props) => {
  const { webviewURL } = props;
  return (
    <View style={styles.webViewStyle}>
      <WebView source={{ uri: webviewURL }} scrollEnabled={true} />
    </View>
  );
};

export default WebViewComponent;
