import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, StatusBar, Button } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';

import { THEME_COLORS } from '../../config/colors';
import { Header } from './components/Header';
import { QuizInfo } from './components/QuizInfo';

interface PropTypes {
    navigation: NavigationScreenProp<any, any>;
}

export class HomeScreen extends React.Component<PropTypes> {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" animated={true} />
                <SafeAreaView style={styles.container}>
                    <View style={styles.contentContainer}>
                        <Header />
                        <QuizInfo
                            questionsNumber={10}
                            questionsType="boolean"
                        />
                        <Text style={styles.info}>Can you score 100%?</Text>
                        <Button
                            title="Begin"
                            onPress={this.onPressBeginButtonHandle}
                        />
                    </View>
                </SafeAreaView>
            </>
        );
    }

    onPressBeginButtonHandle = () => {
        this.props.navigation.navigate('QuizScreen');
    }
}

// TODO: check if connecting with redux will be necessary
export const HomeScreenConnected = connect(null, null)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 70,
        paddingRight: 70,
    },
    info: {
        fontSize: 18,
        color: THEME_COLORS.appTextColor,
        textAlign: 'center'
    },
});