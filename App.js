/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import Login from './Pages/Login';

export default class App extends Component {
  render() {
    return (
          <View style={styles.container}>
            <StatusBar
              backgroundColor="#2B4D91"
              barStyle="light-content"
            />
            <Login/>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  });
