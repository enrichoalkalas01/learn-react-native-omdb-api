import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

import CustomDrawer from './CustomDrawer'


import MainHome from '../screens/Home/MainHome'
import MainProfile from '../screens/Profile/MainProfile'

// Movie
import MainMovie from '../screens/Movie/MainMovie'
import MainDetailMovie from '../screens/Movie/MainDetailMovie'

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={ MainHome } />
            {/* <Stack.Screen name="Movie" component={ MainMovie } />
            <Stack.Screen name="Profile" component={ MainProfile } /> */}
            <Stack.Screen name="DetailMovie" component={ MainDetailMovie } />
        </Stack.Navigator>
    )
}  

function DrawerStack() {
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={ props => <CustomDrawer { ...props } /> }
        >
            <Drawer.Screen name="Main" component={ MainStack } />
            <Drawer.Screen name="Movie" component={ MainMovie } />
            <Drawer.Screen name="Profile" component={ MainProfile } />
            {/* <Stack.Screen name="DetailMovie" component={ MainDetailMovie } /> */}
        </Drawer.Navigator>
    )
}

export default Navigation = () => {
    return(
        <>
            
            <NavigationContainer
                screenOptions={{ headerShown: false }}
            >
                <DrawerStack />
                {/* <StackNavigator /> */}
            </NavigationContainer>
        </>
    )
}