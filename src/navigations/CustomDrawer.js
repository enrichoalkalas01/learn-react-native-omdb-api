import {
    View,
    Text,
    ImageBackground,
    Image
} from "react-native"
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer'

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default CustomDrawer = (props) => {
    return(
        <>
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView
                    { ...props }
                    contentContainerStyle={{ backgroundColor: '#8200d6' }}
                >
                    <ImageBackground
                        source={ require('../../assets/images/menu-bg.jpeg') }
                        style={{ padding: 20, }}
                    >
                        <Image
                            source={ require('../../assets/images/user-profile.jpg') }
                            style={{
                                height: 80,
                                width: 80,
                                borderRadius: 80,
                                marginBottom: 10,
                            }}
                        />

                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 18,
                                fontFamily: 'sans-serif',
                                marginBottom: 5,
                            }}
                        >John Doe</Text>

                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 5 }}>
                            <FontAwesome5
                                name="coins"
                                size={ 14 }
                                color={ 'yellow' }
                                style={{ marginRight: 10 }}
                            />

                            <Text
                                style={{
                                    color: 'yellow',
                                    fontSize: 12,
                                    fontFamily: 'sans-serif'
                                }}
                            >280 Coins</Text>
                        </View>
                    </ImageBackground>
                    <View
                        style={{
                            backgroundColor: '#fff',
                            paddingTop: 10,
                        }}
                    >
                        <DrawerItemList { ...props } />
                    </View>
                </DrawerContentScrollView>
            </View>
        </>
    )
}