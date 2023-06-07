import {
    Text, View,
    TouchableOpacity,
    ImageBackground,
    Image,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { clearMovieDetailData, clearMovieDetailId } from '../../redux/reducers/Movie/Movie'
import { getDetailDataMovie } from '../../redux/reducers/Movie/MovieActions'

export default MainDetailMovie = (props) => {
    const dispatch = useDispatch()
    const storeMovie = useSelector(state => state.Movie)
    const navigation = useNavigation()
    const [bookmark, setBookmark] = useState(false)
    const [love, setLove] = useState(false)

    useEffect(() => {
        if ( !storeMovie.movie_detail_data && storeMovie.movie_detail_id ) getDetailDataMovie({ omdbID: storeMovie.movie_detail_id }) 
    }, [bookmark, love, storeMovie])

    const clickBookmarkMovie = () => setBookmark(!bookmark)
    const clickLoveMovie = () => setLove(!love)
    const backButton = () => {
        dispatch(clearMovieDetailId())
        dispatch(clearMovieDetailData())
        navigation.navigate('Movie')
    }

    return(
        <>
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
                        source={ !storeMovie?.movie_detail_data ? require('../../../assets/images/menu-bg.jpeg') : { uri: storeMovie?.movie_detail_data?.Poster } }
                        resizeMode='cover'
                        style={{
                            height: '100%',
                        }}
                    >
                        <View
                            style={{
                                width: '100%',
                                height: 'auto',
                                paddingVertical: 40,
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
                                <TouchableOpacity onPress={ () => backButton() }>
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
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView>
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
                                    }}>{ storeMovie?.movie_detail_data?.Title }</Text>
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
                                        }}>{ storeMovie?.movie_detail_data?.Ratings[0].Value }</Text>
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
                            {/* Description */}
                            <View>
                                <View
                                    style={{
                                        paddingVertical: 20,
                                    }}
                                >
                                    <Text style={{ color: '#fff', marginBottom: 5 }}>Plot Movie : </Text>
                                    <Text style={{ color: '#fff' }}>{ storeMovie?.movie_detail_data?.Plot }</Text>
                                </View>
                                <View
                                    style={{
                                        paddingVertical: 10,
                                    }}
                                >
                                    <Text style={{ color: '#fff', marginBottom: 5 }}>Genre : </Text>
                                    <Text style={{ color: '#fff' }}>{ storeMovie?.movie_detail_data?.Genre }</Text>
                                </View>
                                <View
                                    style={{
                                        paddingVertical: 10,
                                    }}
                                >
                                    <Text style={{ color: '#fff', marginBottom: 5 }}>Actors : </Text>
                                    <Text style={{ color: '#fff' }}>{ storeMovie?.movie_detail_data?.Actors }</Text>
                                </View>
                                <View
                                    style={{
                                        paddingVertical: 10,
                                    }}
                                >
                                    <Text style={{ color: '#fff', marginBottom: 5 }}>Released : </Text>
                                    <Text style={{ color: '#fff' }}>{ storeMovie?.movie_detail_data?.Released }</Text>
                                </View>
                                    <View
                                        style={{
                                            paddingVertical: 10,
                                        }}
                                    >
                                        <Text style={{ color: '#fff', marginBottom: 5 }}>Released : </Text>
                                        <Text style={{ color: '#fff' }}>{ storeMovie?.movie_detail_data?.Released }</Text>
                                    </View>
                                    <View
                                        style={{
                                            paddingVertical: 10,
                                        }}
                                    >
                                        <Text style={{ color: '#fff', marginBottom: 5 }}>Released : </Text>
                                        <Text style={{ color: '#fff' }}>{ storeMovie?.movie_detail_data?.Released }</Text>
                                    </View>
                                    <View
                                        style={{
                                            paddingVertical: 10,
                                        }}
                                    >
                                        <Text style={{ color: '#fff', marginBottom: 5 }}>Released : </Text>
                                        <Text style={{ color: '#fff' }}>{ storeMovie?.movie_detail_data?.Released }</Text>
                                    </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </>
    )
}
