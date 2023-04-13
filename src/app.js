import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from '@ant-design/react-native';
import enUS from '@ant-design/react-native/lib/locale-provider/en_US';
import { Provider as ReduxProvider } from 'react-redux';
import { RootSiblingParent } from 'react-native-root-siblings';
import Intl from 'react-intl-universal';
import store from './store';
import AppContent from './appContent'
import en from './locales/en.json'

const locales = {en}
Intl.init({ currentLocale:'en', locales });

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