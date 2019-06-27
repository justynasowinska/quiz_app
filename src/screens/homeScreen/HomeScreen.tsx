import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';

import { THEME_COLORS } from '../../config/colors';
import { Header } from './components/Header';
import { QuizInfo } from './components/QuizInfo';
import { fetchQuestions } from '../../redux/actions';
import { QuizStatusBar } from '../../common/QuizStatusBar';
import { PrimaryButton } from '../../common/PrimaryButton';
import { AppStateType } from '../../redux/reducers/appStateType';
import { QuestionType } from '../../redux/types';

interface PropTypes {
    navigation: NavigationScreenProp<any, any>;
    questionsNumber: number;
    questionsType: QuestionType;
    fetchQuestions: () => void;
}

export class HomeScreen extends React.Component<PropTypes> {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        const { questionsNumber, questionsType } = this.props;

        return (
            <>
                <QuizStatusBar />
                <SafeAreaView style={styles.container}>
                    <View style={styles.contentContainer}>
                        <Header />
                        <QuizInfo
                            questionsNumber={questionsNumber}
                            questionsType={questionsType}
                        />
                        <Text style={styles.info}>Can you score 100%?</Text>
                        <PrimaryButton
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

const mapStateToProps = (state: AppStateType) => ({
    questionsNumber: state.questions.questions.length,
    questionsType: state.questions.questions[0].type // temporary solution
});

// TODO: get data about questions number and type from redux
export const HomeScreenConnected = connect(mapStateToProps, { fetchQuestions })(HomeScreen);

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