import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchQuestions } from './src/redux/actions';

interface PropTypes {
    fetchQuestions: () => void;
}

export class TestComponent extends React.Component<PropTypes> {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Component</Text>
            </View>
        );
    }
}

export const TestComponentConnected = connect(null, { fetchQuestions })(TestComponent);

const styles = StyleSheet.create({
    container: {
        //
    },
});