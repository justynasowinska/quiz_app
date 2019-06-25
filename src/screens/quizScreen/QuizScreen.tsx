import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

interface PropTypes {
    //
}

export class QuizScreen extends React.Component<PropTypes> {
    render() {
        return (
            <View style={styles.container}>
                <Text>QuizScreen</Text>
            </View>
        );
    }
}

export const QuizScreenConnected = connect(null, null)(QuizScreen);

const styles = StyleSheet.create({
    container: {
        //
    },
});