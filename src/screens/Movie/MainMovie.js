import {
    Text,
    View,
    FlatList,
    ImageBackground,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Axios from 'axios'

import { setMovieList, setMovieDetailId } from "../../redux/reducers/Movie"

import MainLayouts from "../../layouts/MainLayouts"
import SearchComponent from "../../components/movie/SearchComponent"

export default MainMovie = (props) => {
    const store = useSelector(state => state)
    const dispatch = useDispatch()
    const navigation = props.navigation
    const [movie, setMovie] = useState([])

    useEffect(() => {
        // console.log(movie)
    }, [store])

    const getMovieData = async (query = "marvel", page = 1) => {
        let config = {
            url: `http://www.omdbapi.com/?apikey=58ed57ce&s=${ query }&page=${ page }`,
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        }

        try {
            let getData = await Axios(config)
            dispatch(setMovieList(getData.data.Search))
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <MainLayouts navigation={ navigation }>
                <View>
                    <SearchComponent />
                </View>
                <Text style={{ color: "#e6e6e6" }}>Movie Here</Text>
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        paddingVertical: 10,
                    }}
                >
                    <ScrollView>
                        <FlatList
                            style={{
                                width: '100%',
                                // flex: 1,
                                // flexDirection: 'row',
                                // flexWrap: 'wrap',
                                // flexGrow: 0,
                            }}
                            data={ store.Movie.movie_list }
                            horizontal={ true }
                            renderItem={ ({ item }) => {
                                return(
                                    <TouchableOpacity
                                        onPress={ () => {
                                            dispatch(setMovieDetailId(item.imdbID))
                                            navigation.navigate('DetailMovie')
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: 200,
                                                height: 'auto',
                                                // flexBasis: '50%',
                                                // backgroundColor: '#fff',
                                                borderRadius: 5,
                                                marginBottom: 10,
                                                marginRight: 20,
                                            }}
                                        >
                                            <View
                                                style={{
                                                    borderTopLeftRadius: 5,
                                                    borderTopRightRadius: 5,
                                                }}
                                            >
                                                <ImageBackground
                                                    source={{ uri: item?.Poster }}
                                                    style={{
                                                        width: '100%',
                                                        height: 300,
                                                        borderTopLeftRadius: 5,
                                                        borderTopRightRadius: 5,
                                                    }}
                                                >

                                                </ImageBackground>
                                            </View>
                                            <View
                                                style={{
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 10,
                                                }}
                                            >
                                                <Text style={{
                                                    // color: "#252525",
                                                    color: "#fff",
                                                }}>{ item?.Title }</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                        <Text style={{ color: "#e6e6e6" }}>Movie Here</Text>

                        <FlatList
                            style={{
                                width: '100%',
                                // flex: 1,
                                // flexDirection: 'row',
                                // flexWrap: 'wrap',
                                // flexGrow: 0,
                            }}
                            data={ movie }
                            horizontal={ true }
                            renderItem={ ({ item }) => {
                                return(
                                    <TouchableOpacity style={{
                                        // width: '100%',
                                        // flexBasis: '50%',
                                    }}>
                                        <View
                                            style={{
                                                width: 200,
                                                height: 'auto',
                                                // flexBasis: '50%',
                                                // backgroundColor: '#fff',
                                                borderRadius: 5,
                                                marginBottom: 10,
                                                marginRight: 20,
                                            }}
                                        >
                                            <View
                                                style={{
                                                    borderTopLeftRadius: 5,
                                                    borderTopRightRadius: 5,
                                                }}
                                            >
                                                <ImageBackground
                                                    source={{ uri: item?.Poster }}
                                                    style={{
                                                        width: '100%',
                                                        height: 300,
                                                        borderTopLeftRadius: 5,
                                                        borderTopRightRadius: 5,
                                                    }}
                                                >

                                                </ImageBackground>
                                            </View>
                                            <View
                                                style={{
                                                    paddingVertical: 10,
                                                    paddingHorizontal: 10,
                                                }}
                                            >
                                                <Text style={{
                                                    // color: "#252525",
                                                    color: "#fff",
                                                }}>{ item?.Title }</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                        <Text style={{ color: "#e6e6e6" }}>Movie Here</Text>
                    </ScrollView>
                </View>
            </MainLayouts>
        </>
    )
}