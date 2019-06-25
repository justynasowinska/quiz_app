import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

interface PropTypes {
    //
}

export class ResultsScreen extends React.Component<PropTypes> {
    render() {
        return (
            <View style={styles.container}>
                <Text>ResultsScreen</Text>
            </View>
        );
    }
}

export const ResultsScreenConnected = connect(null, null)(ResultsScreen);

const styles = StyleSheet.create({
    container: {
        //
    },
});