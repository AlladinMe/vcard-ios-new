import { registerRootComponent } from 'expo';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

function App() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://v-card.ro/login' }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  }
});

registerRootComponent(App);
