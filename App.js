import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import ImageCard from './ImageCard';

const url = 'https://jsonplaceholder.typicode.com/photos?_page=1&_limit=20'
export default class App extends Component {
  state = {
    gallery: []
  }

  componentDidMount = async() => {
    const response = await fetch(url);
    const request = await response.json();
    this.setState({ gallery: request });
  }

  render() {
    return (
      <View style={styles.container}>
          { this.state.gallery.map(item => {
            console.log('item', item);
            <ImageCard data={item} key={item.id}/>
          })
          }
        <StatusBar style="auto" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 500,
  }
});
