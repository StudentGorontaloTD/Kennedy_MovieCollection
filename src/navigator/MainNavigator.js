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
                    options={{
                        title: 'Home Screen',
                        headerStyle: {
                            backgroundColor: 'lavender'
                        },
                        headerTitleStyle: {
                            color: 'green',
                            fontSize: 24
                        },
                        headerTitleAlign: 'center',
                        
                    }}
                />
                <Stack.Screen
                   name="DetailMovie"
                   component={DetailMovieScreen}
                   options={{
                        title: 'Detail Movie',
                        headerStyle: {
                            backgroundColor: 'lavender'
                        },
                        headerTitleStyle: {
                            color: 'green',
                            fontSize: 24
                        },
                        headerTitleAlign: 'center',
                        
                    }}
                />
                <Stack.Screen
                    name="MostViewed"
                    component={MostViewedScreen}
                    options={{
                        title: 'Most Viewed',
                        headerStyle: {
                            backgroundColor: 'lavender'
                        },
                        headerTitleStyle: {
                            color: 'green',
                            fontSize: 24
                        },
                        headerTitleAlign: 'center',
                        
                    }}
                />
                
                <Stack.Screen
                    name="Recommended"
                    component={RecommendedScreen}
                    options={{
                        title: 'Recommended',
                        headerStyle: {
                            backgroundColor: '#65c3ba'
                        },
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 24
                        },
                        headerTitleAlign: 'center',
                        
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator