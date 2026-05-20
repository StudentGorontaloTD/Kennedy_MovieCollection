import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const RecommendedScreen = (props) => {
  const { route } = props;
  const sortedRecommended = route.params.allRecommended;
    
  return (
      <View>
        <FlatList
          data = {sortedRecommended}
          contentContainerStyle = {styles.mainContainer}
          numColumns={2}
          key={2}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => }
        />
      </View>
    )
}

export default RecommendedScreen;