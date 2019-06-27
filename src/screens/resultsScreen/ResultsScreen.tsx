import * as React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';

import { QuizStatusBar } from '../../common/QuizStatusBar';
import { AppStateType } from '../../redux/reducers/appStateType';
import { QuizAnswerType, QuizQuestionType } from '../../redux/types';
import { fetchQuestions, resetUserAnswers } from '../../redux/actions';
import { ResultsSummaryType, ResultsHeader } from './components/ResultsHeader';
import { ResultsList, ResultsType } from './components/ResultsList';
import { PrimaryButton } from '../../common/PrimaryButton';
import { verticalScale, moderateScale } from '../../utils/scale';

interface PropsType {
    navigation: NavigationScreenProp<any, any>;
    questions: ReadonlyArray<QuizQuestionType>;
    answers: Array<QuizAnswerType>;
    fetchQuestions: () => void;
    resetUserAnswers: () => void;
}

export class ResultsScreen extends React.Component<PropsType> {
    render() {
        return (
            <>
                <QuizStatusBar />
                <SafeAreaView style={styles.container}>
                    <View style={styles.contentContainer}>
                        <ResultsHeader
                            results={this.getResultsSummary()}
                        />
                        <ResultsList
                            results={this.getResults()}
                        />
                        <PrimaryButton
                            title="Play again?"
                            onPress={this.onPressPlayAgainHandle}
                        />
                    </View>
                </SafeAreaView>
            </>
        );
    }

    // TODO: Move this logic to redux
    getResults = (): ResultsType => {
        const { questions, answers } = this.props;

        return questions.map((item, index) => {
            return {
                questionId: index,
                question: item.question,
                correct: this.checkAnswer(item, index, answers),
                correctAnswer: item.correct_answer as string
            };
        });
    }

    // TODO: Move this logic to redux
    checkAnswer = (question: QuizQuestionType, id: number, answers: Array<QuizAnswerType>): boolean => {
        const answerItem = answers.find(answer => answer.questionId === id);

        if (!answerItem) return false;

        return answerItem.answer === question.correct_answer;
    }

    // TODO: Move this logic to redux
    getResultsSummary = (): ResultsSummaryType => {
        return {
            correctAnswers: this.getResults().filter(result => result.correct).length,
            allQuestions: this.props.questions.length
        };
    }

    onPressPlayAgainHandle = () => {
        const { navigation, fetchQuestions, resetUserAnswers } = this.props;

        resetUserAnswers();
        fetchQuestions();
        navigation.navigate('HomeScreen');
    }
}

const mapStateToProps = (state: AppStateType) => ({
    questions: state.questions.questions,
    answers: state.answers
});

export const ResultsScreenConnected = connect(mapStateToProps, { fetchQuestions, resetUserAnswers })(ResultsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: verticalScale({ size: 30 }),
        paddingBottom: verticalScale({ size: 30 }),
        paddingLeft: moderateScale({ size: 30 }),
        paddingRight: moderateScale({ size: 30 }),
    }
});