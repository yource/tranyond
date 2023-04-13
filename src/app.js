import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from '@ant-design/react-native';
import enUS from '@ant-design/react-native/lib/locale-provider/en_US';
import { Provider as ReduxProvider } from 'react-redux';
import { RootSiblingParent } from 'react-native-root-siblings';
import store from './store';
import AppContent from './appContent'

const App = () => {
    return (
        <ReduxProvider store={store}>
            <Provider locale={enUS}>
                <RootSiblingParent>
                    <AppContent />
                </RootSiblingParent>
            </Provider>
        </ReduxProvider>
    );
}

export default App;