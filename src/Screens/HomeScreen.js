import React from "react";
import { movieData } from "../../data/MovieData";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { ShowMovie } from "../components/MovieComponent.js";
import { useEffect, useState } from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { ButtonComponent } from "../components/ButtonComponent.js";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  const { navigation } = props;

  const [recommended, setRecommended] = useState([]);
  const [mostViewed, setMostViewed] = useState([]);

  // const navigation = useNavigation()

  const compareRating = (a, b) => {
    const ratingA = a.rating;
    const ratingB = b.rating;

    if (ratingA > ratingB) {
      return -1;
    } else if (ratingA < ratingB) {
      return 1;
    } else {
      return 0;
    }
  };

  const compareViewers = (a, b) => {
    const viewersA = a.viewers;
    const viewersB = b.viewers;

    if (viewersA > viewersB) {
      return -1;
    } else if (viewersA < viewersB) {
      return 1;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const threeRecommended = [];
    const threeMostView = [];

    const sortedRecommended = [...movieData].sort(compareRating);
    const sortedMostView = [...movieData].sort(compareViewers);

    for (let i = 0; i < 3; i++) {
      threeRecommended.push(sortedRecommended[i]);
    }

    for (let i = 0; i < 3; i++) {
      threeMostView.push(sortedMostView[i]);
    }

    setMostViewed(sortedMostView);

    setRecommended(sortedRecommended);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={recommended}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => {
          return (
            <View style={styles.dataContainer}>
              <Image
                style={styles.movieImage}
                source={{ uri: item.imageLink }}
              />
              <View style={styles.movieDescriptionContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.year}>{item.year}</Text>
                {item.rating === 5 ? (
                  <Image
                    style={styles.starRating}
                    source={require("../../assets/five-stars.png")}
                  />
                ) : item.rating === 4 ? (
                  <Image
                    style={styles.starRating}
                    source={require("../../assets/four-stars.png")}
                  />
                ) : item.rating === 3 ? (
                  <Image
                    style={styles.starRating}
                    source={require("../../assets/three-stars.png")}
                  />
                ) : item.rating === 2 ? (
                  <Image
                    style={styles.starRating}
                    source={require("../../assets/two-stars.png")}
                  />
                ) : item.rating === 1 ? (
                  <Image
                    style={styles.starRating}
                    source={require("../../assets/star.png")}
                  />
                ) : null}
                <ButtonComponent
                  onPress={() =>
                    navigation.navigate("DetailMovie", { ...item })
                  }
                />
                <Text style={styles.rating}>{item.rating}</Text>
              </View>
            </View>
          );
        }}
        ListHeaderComponent={
          <View>
            <View style={styles.mainCategoryContainer}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Most Viewed</Text>
              </View>
              <View style={styles.seeAllContainer}>
                <TouchableOpacity
                
                onPress={
                  () => navigation.navigate('MostViewed', {allMostViewed: mostViewed})
                }
                
                >
                  
                  <Text style={styles.seeAlltext}>See All</Text>
                </TouchableOpacity>
              </View>
            </View>

            <FlatList
              horizontal={true}
              data={mostViewed}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <ShowMovie
                    image={{ uri: item.imageLink }}
                    title={item.title}
                    viewers={item.viewers}
                  />
                );
              }}
              contentContainerStyle={{ flex: mostViewed.length === 0 }}
              ListEmptyComponent={
                <View style={{ alignItems: "center", padding: 30, flex: 1 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#808080",
                      fontSize: 15,
                    }}
                  >
                    ??? ~ No items found ~ ???
                  </Text>
                </View>
              }
            />

            <View style={styles.mainCategoryContainer}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Most Recommended</Text>
              </View>
            </View>
          </View>
        }
        ListFooterComponent={
          <Text>
            An array of objects lets you store multiple values in a single
            variable. It stores a fixed-size sequential collection of elements
            of the same type. An array is used to store a collection of data,
            but it is often more useful to think of an array as a collection of
            variables of the same type.
          </Text>
        }
        ListEmptyComponent={
          <View style={{ alignItems: "center", padding: 30, flex: 1 }}>
            <Text
              style={{ fontWeight: "bold", color: "#808080", fontSize: 15 }}
            >
              ??? ~ No items found ~ ???
            </Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    Flex: 1,
  },
  flatListContainer: {
    padding: 8,
  },
  movieImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  dataContainer: {
    margin: 8,
    borderColor: "#96ceb4",
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  movieDescriptionContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 8,
  },
  yearContainer: {
    marginBottom: 8,
    marginTop: 8,
  },
  mainCategoryContainer: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    flexDirection: "rows",
  },
  categoryContainer: {
    flex: 1,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  starRating: {
    height: 20,
    width: 120,
  },
  seeAllContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  seeAlltext: {
    color:'#009688',
    textDecorationLine:'underline'
  }
});

export default HomeScreen;
