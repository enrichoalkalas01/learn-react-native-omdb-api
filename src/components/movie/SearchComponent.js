import {
    Text,
    View,
    TextInput,
} from 'react-native'

export default SearchComponent = () => {
    return(
        <>
            <View
                style={{
                    width: '100%',
                    height: 'auto',
                    marginBottom: 20,
                }}
            >
                <TextInput
                    placeholder="Search movie here.."
                    style={{
                        width: '100%',
                        backgroundColor: '#fff',
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 10,
                    }}
                />
            </View>
        </>
    )
}