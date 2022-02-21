import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi!</Text>
      <Text>110919033</Text>
      <Text>林宜霈</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D82B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
