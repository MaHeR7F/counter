import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './app/store'
import { Provider } from 'react-redux'
import {Counter} from "./features/counter/Counter";

export default function App() {

    return (
        <Provider store={store}>
          <StatusBar style="auto" />
          <View style={styles.container}>
            <Counter>

            </Counter>

          </View>
        </Provider>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
