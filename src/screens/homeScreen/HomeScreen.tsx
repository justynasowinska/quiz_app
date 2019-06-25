import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

interface PropTypes {
    //
}

export class HomeScreen extends React.Component<PropTypes> {
    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
            </View>
        );
    }
}

export const HomeScreenConnected = connect(null, null)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        //
    },
});