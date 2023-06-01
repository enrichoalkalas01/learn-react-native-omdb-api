import { Text } from "react-native"

import MainLayouts from "../../layouts/MainLayouts"

export default MainProfile = ({ navigation }) => {
    return(
        <>
            <MainLayouts navigation={ navigation }>
                <Text style={{ color: "#e6e6e6" }}>Profile Here</Text>
            </MainLayouts>
        </>
    )
}