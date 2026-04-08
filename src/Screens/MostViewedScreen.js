import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const MostViewedMovieScreen = (props) => {
    const {route} = props;
    const sortedMostViewed = route.params.allMostViewed;

    useEffect(() => {
        console.log(sortedMostViewed.length);
    }, []);
}

return(
    <View>
        <Flatlist
        contentContainerStyle={styles.mainDataContainer}
        data={sortedMostViewed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
            return (
                <View style={styles.movieContainer}>
                    <Image
                    style={styles.movieImage}
                    source={{ uri: item.imageLink}}
                    />
                </View>
            )
        }}
        />
    </View>
)

export default MostViewedMovieScreen