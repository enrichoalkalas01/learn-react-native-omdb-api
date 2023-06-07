import Store from "../../Store"
import { setMovieList, setSeriesList, setEpisodeList, setMovieDetailData } from "./Movie"
import Axios from "axios"

export const getListDataMovie = async (params = { query: 'marvel', page: 1, type: 'movie' }) => {
    let config = {
        url: `http://www.omdbapi.com/?apikey=58ed57ce&s=${ params?.query }&page=${ params?.page }&type=${ params?.type }`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    
    const dispatch = Store.dispatch

    try {
        let getDataMovie = await Axios(config)
        if ( !getDataMovie.data || !getDataMovie.data.Search ) {
            dispatch(setMovieList([]))
        } else {
            dispatch(setMovieList(getDataMovie.data.Search))
        }
    } catch (error) {
        console.log(error)
        dispatch(setMovieList([]))
    }
}

export const getListDataSeries = async (params = { query: 'marvel', page: 1, type: 'series' }) => {
    let config = {
        url: `http://www.omdbapi.com/?apikey=58ed57ce&s=${ params?.query }&page=${ params?.page }&type=${ params?.type }`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    
    const dispatch = Store.dispatch

    try {
        let getDataSeries = await Axios(config)
        if ( !getDataSeries.data || !getDataSeries.data.Search ) {
            dispatch(setSeriesList([]))
        } else {
            dispatch(setSeriesList(getDataSeries.data.Search))
        }
    } catch (error) {
        console.log(error)
        dispatch(setSeriesList([]))
    }
}

export const getListDataEpisode = async (params = { query: 'marvel', page: 1, type: 'episode' }) => {
    let config = {
        url: `http://www.omdbapi.com/?apikey=58ed57ce&s=${ params?.query }&page=${ params?.page }&type=${ params?.type }`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    
    const dispatch = Store.dispatch

    try {
        let getDataEpisode = await Axios(config)
        
        if ( !getDataEpisode.data || !getDataEpisode.data.Search ) {
            dispatch(setEpisodeList([]))
        } else {
            dispatch(setEpisodeList(getDataEpisode.data.Search))
        }
    } catch (error) {
        console.log(error)
        dispatch(setEpisodeList([]))
    }
}

export const getDetailDataMovie = async (params = { omdbID: '' }) => {
    let config = {
        url: `http://www.omdbapi.com/?apikey=58ed57ce&i=${ params?.omdbID }`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    
    const dispatch = Store.dispatch

    try {
        let getDataMovie = await Axios(config)
        dispatch(setMovieDetailData(getDataMovie.data))
    } catch (error) {
        console.log(error)
        dispatch(setMovieDetailData(null))
    }
}