import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const MostViewedMovieScreen = (props) => {
    const {route} = props;
    const sortedMostViewed = route.params.allMostViewed;

    useEffect(() => {
        console.log(sortedMostViewed.length);
    }, []);`'o`
}

export default MostViewedMovieScreen