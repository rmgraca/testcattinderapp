import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LoadingProvider } from '~providers/loadingProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './navigation/navigation';
import { store } from '../app/store';
import { Provider } from 'react-redux';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider style={{ backgroundColor: '#fbfaff' }}>
      <Provider store={store}>
        <LoadingProvider>
          <StatusBar barStyle="default" />
          <Navigation />
        </LoadingProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
