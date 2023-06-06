import {
    Text, View,
    TouchableOpacity,
    ImageBackground,
    Image,
    StyleSheet,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Axios from 'axios'

import MainLayouts from '../../layouts/MainLayouts'
import { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setMovieDetailId } from '../../redux/reducers/Movie'

export default MainDetailMovie = (props) => {
    const store = useSelector(state => state.Movie)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const routes = useRoute();
    const [bookmark, setBookmark] = useState(false)
    const [love, setLove] = useState(false)
    const [movieData, setMovieData] = useState(null)

    useEffect(() => {
        
    }, [])

    useEffect(() => {
        if ( !movieData ) getDetailMovieData()
    }, [bookmark, love, movieData])

    const clickBookmarkMovie = () => setBookmark(!bookmark)
    const clickLoveMovie = () => setLove(!love)

    const getDetailMovieData = async () => {
        let config = {
            url: `http://www.omdbapi.com/?apikey=58ed57ce&i=${ store.movie_detail_id }`,
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        }

        try {
            let getData = await Axios(config)
            setMovieData(getData.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <SafeAreaView>
                <View style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#0b0a12',
                }}>
                    <View
                        style={{
                            height: 375,
                        }}
                    >
                        <ImageBackground
                            source={ !movieData ? require('../../../assets/images/menu-bg.jpeg') : { uri: movieData?.Poster } }
                            resizeMode='cover'
                            style={{
                                height: '100%',
                            }}
                        >
                            <View
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    paddingVertical: 15,
                                    marginTop: 10,
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <View
                                    style={{
                                        width: '100%',
                                        flexBasis: '50%',
                                        paddingLeft: 25,
                                    }}
                                >
                                    <TouchableOpacity 
                                        onPress={ () => {
                                            setMovieData({})
                                            dispatch(setMovieDetailId(''))
                                            navigation.navigate('Movie')
                                        }
                                    }>
                                        <FontAwesome5
                                            name="arrow-left"
                                            size={ 20 }
                                            color={ 'yellow' }
                                            style={{ marginRight: 10 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View   
                                    style={{
                                        width: '100%',
                                        flexBasis: '50%',
                                        paddingLeft: 25,
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        alignItems: 'flex-end',
                                        paddingRight: 20,
                                        flexDirection: 'row',
                                    }}
                                >
                                    <TouchableOpacity onPress={ () => clickBookmarkMovie() }>
                                        <FontAwesome5
                                            name="bookmark"
                                            size={ 20 }
                                            color={ 'yellow' }
                                            style={{ marginRight: 25 }}
                                            solid={ bookmark }
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={ () => clickLoveMovie() }>
                                        <FontAwesome5
                                            name="heart"
                                            size={ 20 }
                                            color={ 'yellow' }
                                            style={{ marginRight: 10 }}
                                            solid={ love }
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View
                        style={{
                            paddingVertical: 20,
                            paddingHorizontal: 20,
                        }}
                    >
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                        >
                            <View
                                style={{
                                    width: '70%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 24
                                }}>{ movieData?.Title }</Text>
                            </View>
                            <View
                                style={{
                                    width: '30%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <View>
                                    <Text style={{
                                        color: "#fff",
                                        fontSize: 16
                                    }}>{ movieData?.Ratings[0].Value }</Text>
                                </View>
                                <View>
                                    <FontAwesome5
                                        name="star"
                                        size={ 16 }
                                        color={ 'yellow' }
                                        style={{ marginLeft: 10 }}
                                        solid={ true }
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}
