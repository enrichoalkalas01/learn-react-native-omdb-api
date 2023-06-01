import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'

import 'react-native-gesture-handler'

import Store from './src/redux/Store'
import Navigation from './src/navigations/Navigation'

export default function App() {
    return (
        <>
            <Provider store={ Store }>
                <Navigation />
            </Provider>
        </>
    );
}