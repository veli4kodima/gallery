import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image } from 'react-native';

export default class ImageElement extends Component {
    render() {
        return (
            <Image source={{uri: this.props.url}} style={styles.image}></Image>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    }
});

















