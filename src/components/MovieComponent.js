import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';


export const ShowMovie = (props) => {
    const { image, title, viewers} = props;

return ( 
    
    <View style={styles.horizontalDataContainer}>
        <Image
            style={styles.movieImage}
            source={image}
            />

        <View style={styles.horizontalTitleContainers}>
            <Text style={styles.horizontalTitle}>
                {title}
            </Text>
        </View>

        <View style={styles.viewersContainer}>
            <Icon
            name='aim'
            type='evilicon'
            size={16}
            />
            <View style = {styles.viewersText}>
               
                <Text> {numberWithCommas(viewers)} </Text>
            </View>
        </View>
    </View>
  )



}

const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

const styles = StyleSheet.create({
    horizontalDataContainer: {
        margin: 8,
        width: 180,
        alignItems: 'center',
        borderColor: '#96ceb4',
        borderWidth: 2,
        borderRadius: 10,
        padding: 16,  
    },

    horizontalTitleContainers: {
        marginTop:8,
        marginBottom:8,
    },

    horizontalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10
    },

    viewersContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    viewersText: {
        marginLeft: 8
    }
})

export default ShowMovie
