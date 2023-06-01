import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

import CustomDrawer from './CustomDrawer'

import MainMovie from '../screens/Movie/MainMovie'
import MainHome from '../screens/Home/MainHome'
import MainProfile from '../screens/Profile/MainProfile'

function DrawerStack() {
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={ props => <CustomDrawer { ...props } /> }
        >
            <Drawer.Screen name="Home" component={ MainHome } />
            <Drawer.Screen name="Movie" component={ MainMovie } />
            <Drawer.Screen name="Profile" component={ MainProfile } />
        </Drawer.Navigator>
    );
}

export default Navigation = () => {
    return(
        <>
            
            <NavigationContainer
                screenOptions={{ headerShown: false }}
            >
                {/* <Stack.Navigator>
                    <Stack.Screen name="Home" component={ MainMovie } />
                </Stack.Navigator> */}
                <DrawerStack />
            </NavigationContainer>
        </>
    )
}