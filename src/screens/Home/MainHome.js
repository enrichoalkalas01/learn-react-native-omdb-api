import {
    View,
    Text,
    TouchableOpacity,
} from "react-native"

import MainLayouts from "../../layouts/MainLayouts"

export default MainHome = ({ navigation }) => {
    return(
        <>
            <MainLayouts navigation={ navigation }>
                <View>
                    <Text style={{ color: "#e6e6e6" }}>Home Here</Text>
                </View>
                <TouchableOpacity onPress={ () => { console.log(navigation.navigate('DetailMovie')) }}>
                    <Text style={{ color: "#e6e6e6" }}>Click Here</Text>
                </TouchableOpacity>
            </MainLayouts>
        </>
    )
}