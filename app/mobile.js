
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

function mobile():Component {

    class Root extends Component {
        constructor() {
            super()
        }

        render() {
            return (
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit index.android.js
                    </Text>
                    <Text style={styles.instructions}>
                        Shake or press menu button for dev menu
                    </Text>
                </View>
            );
        }
    }

    return Root
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default mobile
