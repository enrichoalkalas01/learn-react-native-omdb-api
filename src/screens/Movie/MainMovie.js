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

import { getListDataMovie, getListDataEpisode, getListDataSeries } from "../../redux/reducers/Movie/MovieActions"
import { setMovieList, setMovieDetailId } from "../../redux/reducers/Movie/Movie"

import MainLayouts from "../../layouts/MainLayouts"
import SearchComponent from "../../components/movie/SearchComponent"

export default MainMovie = (props) => {
    const store = useSelector(state => state)
    const dispatch = useDispatch()
    const navigation = props.navigation
    const [search, setSearch] = useState(null)
    const [searchStatus, setSearchStatus] = useState(false)

    useEffect(() => {
        getListDataMovie()
        getListDataEpisode()
        getListDataSeries()
    }, [])

    useEffect(() => {
        console.log(store.Movie.episode_list)
    }, [store, searchStatus, search])

    return(
        <>
            <MainLayouts navigation={ navigation }>
                <View>
                    <SearchComponent />
                </View>
                <View
                    style={{
                        flexDirection: 'column'
                    }}
                >
                    <View>
                        {
                            store.Movie.movie_list?.length === 0 ? <View></View> :
                            <View>
                                <Text style={{ color: "#e6e6e6" }}>Movie Here</Text>
                                <View
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        paddingVertical: 10,
                                    }}
                                >
                                    <FlatList
                                        style={{
                                            width: '100%',
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
                                </View>
                            </View>
                        }
                        
                        {
                            store.Movie.series_list?.length === 0 ? <View></View> :
                            <View>
                                <Text style={{ color: "#e6e6e6" }}>Series Here</Text>
                                <View
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        paddingVertical: 10,
                                    }}
                                >
                                    <FlatList
                                        style={{
                                            width: '100%',
                                        }}
                                        data={ store.Movie.series_list }
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
                                </View>
                            </View>
                        }

                        {
                            store.Movie.episode_list?.length === 0 ? <View></View> :
                            <View>
                                <Text style={{ color: "#e6e6e6" }}>Episode Here</Text>
                                <View
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        paddingVertical: 10,
                                    }}
                                >
                                    <FlatList
                                        style={{
                                            width: '100%',
                                        }}
                                        data={ store.Movie.episode_list }
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
                                </View>
                            </View>
                        }
                    </View>
                    
                </View>
            </MainLayouts>
        </>
    )
}