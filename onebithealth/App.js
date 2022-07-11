import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/title/index'
import Form from './src/components/Form/index'


export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:80,
  },
});
