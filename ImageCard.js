import React from 'react';
import { Text, StyleSheet, Dimensions, Image, View } from 'react-native';

const win = Dimensions.get('window');
const h = win.height;
const w = win.width;

const ImageCard = (props) => {
    const { name, container, sub, image } = styles;

    return(
        <View style={styles.container}>
            <Text style={styles.name}>111</Text>
            <Image
                style={styles.image}
                source={{
                uri: 'https://via.placeholder.com/600/5e12c6',
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: w / 2.1,
        textAlign: 'center',

    },
    sub:{
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.4,
        width: w / 2.1
    },
    name: {
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'center',
        width: w / 2.4

    },
    image: {
        height: w * 0.63,
        width: w / 2.4,
        borderRadius: 10,
        resizeMode: "cover",
    }
})

export default ImageCard;
