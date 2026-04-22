import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import DetailMovieScreen from "../Screens/DetailMovieScreen";
import MostViewedScreen from "../Screens/MostViewedScreen";
import RecommendedScreen from "../Screens/RecommendedScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                   name="DetailMovie"
                   component={DetailMovieScreen}
                />
                <Stack.Screen
                    name="MostViewed"
                    component={MostViewedScreen}
                    // options={{
                        //code
                    // }}
                />
                <Stack.Screen
                    name="Recommended"
                    component={RecommendedScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator