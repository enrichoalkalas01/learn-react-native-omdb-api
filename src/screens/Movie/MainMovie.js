import { Text } from "react-native"

import MainLayouts from "../../layouts/MainLayouts"

export default MainMovie = ({ navigation }) => {
    return(
        <>
            <MainLayouts navigation={ navigation }>
                <Text style={{ color: "#e6e6e6" }}>Movie Here</Text>
            </MainLayouts>
        </>
    )
}