import { View, Text, StyleSheet , Image } from 'react-native'
import React, { useEffect } from 'react'
import MovieExplanation from '../components/MovieExplanation';
const DetailMovieScreen = (props) => {
  const {route} = props;

  const { title, imageLink, year, starring, description, rating, viewers} = route.params;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.movieContainer}>

        <View style={styles.middle}>
          <Image
            style={styles.image}
            source={{ uri: imageLink}}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>

          <MovieExplanation
          name="Release Year"
          value={year}
          />
          <MovieExplanation
          name="Starring"
          value={starring}
          />
          <MovieExplanation
          name="Description"
          value={description}
          />
          <MovieExplanation
          name="Release Year"
          value={year}
          />
          <MovieExplanation
          name="Viewers"
          value={viewers}
          />
          <MovieExplanation
          name="Rating"
          isRating={true}
          value={rating}
          />

        </View>
      </View>
    </View>
  )
}

 const styles = StyleSheet.create({
  mainContainer: {
    flex:1
  },
  movieContainer:{
    margin:8,
    padding:8
  },
  middle:{
    alignItems: 'center'
  },
  image:{
    width: 200,
    height: 300,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ffbe7bff'
  },

  titleContainer:{
    marginTop:8,
    marginBottom: 8,
    alignItems:'center',
    justifyContent:'center'
  },

  title: {
    fontSize:24,
    fontWeight:'bold',
    padding: 8,
    backgroundColor: 'salmon',
    borderRadius: 10,
    color: 'white'
  }

})

export default DetailMovieScreen