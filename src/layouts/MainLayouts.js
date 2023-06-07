import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    SafeAreaView,
    ScrollView
} from 'react-native'

// import { SafeAreaView } from 'react-native-safe-area-context'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useSelector } from 'react-redux'

export default MainLayouts = ({ children, navigation }) => {
    // const store = useSelector(state => state)
    // console.log(store)
    return(
        <>
            
                <View style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#0b0a12',
                    color: '#fff'
                }}>
                    <View
                        style={{
                            width: '100%',
                            paddingVertical: 50,
                            paddingHorizontal: 25,
                            flexDirection: 'row',
                            alignItems: 'center',
                            // backgroundColor: '#dedede'
                        }}
                    >
                        <View style={{ width: '50%', height: 'auto' }}>
                            <TouchableOpacity onPress={ () => navigation.openDrawer() }>
                                <View>
                                    <FontAwesome5
                                        name="bars"
                                        size={ 32 }
                                        color={ '#e6e6e6' }
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                width: '50%',
                                height: 'auto',
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-end',
                                paddingRight: 7.5,
                            }}
                        >
                            <TouchableOpacity>
                                <Image
                                    source={ require('../../assets/images/user-profile.jpg') }
                                    style={{
                                        height: 40,
                                        width: 40,
                                        borderRadius: 40,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 25 }}>
                        <SafeAreaView style={{ paddingBottom: 125 }}>
                            <ScrollView>
                                { children }
                            </ScrollView>
                        </SafeAreaView>
                    </View>
                </View>
            
        </>
    )
}