import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Apprender, StyleSheet, Image, TouchableWithoutFeedback, View, Dimensions, FlatList, ScrollView, Modal } from 'react-native';
import ImageElement from './ImageElement';

const url = 'https://jsonplaceholder.typicode.com/photos?_page=1&_limit=20'
export default class App extends Component {
  state = {
    modalImage: null,
    images: [],
    modalVisible: false
  }

  setModalVisible(visible, imageKey) {
    this.setState({modalImage: this.state.images[imageKey]});
    this.setState({modalVisible: visible});
  }

  getImages() {
    return this.state.modalImage;
  }


  componentDidMount = async() => {
    const response = await fetch(url);
    const request = await response.json();
    this.setState({ images: request });
  }



  render() {
    let images = this.state.images.map((val, key) => {
      return <TouchableWithoutFeedback key={key} 
              onPress={() => {this.setModalVisible(true, val.key)}} >
                <View style={styles.imagewrap}>
                  <ImageElement url={val.url}></ImageElement>
                </View>
              </TouchableWithoutFeedback>
    })
    return (
        <ScrollView>
          <View style={styles.container}>
            <Modal style={styles.modal} 
              animationType={'fade'}
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {}}
            >
              <View style={styles.modal}>
                <ImageElement url={this.state.modalImage}></ImageElement>
              </View>
            </Modal>
            {images}
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee'
  },
  imagewrap: {
    margin: 2,
    padding: 2,
    height: (Dimensions.get('window').height / 3) - 12,
    width:  (Dimensions.get('window').width / 2) - 4,
    backgroundColor: '#fff'
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: 'rgba(0,0,0, 0.9)'
  },
  text: {
    color: '#fff'
  }
});



