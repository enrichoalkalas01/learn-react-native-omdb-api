import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import 'react-native-gesture-handler'

import Navigation from './src/navigations/Navigation'

export default function App() {
    return (
        <>
            <Navigation />
        </>
    );
}