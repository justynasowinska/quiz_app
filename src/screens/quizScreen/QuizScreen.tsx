import * as React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';

import { CategoryHeader } from './components/CategoryHeader';
import { AppStateType } from '../../redux/reducers/appStateType';
import { QuizQuestionsStateType, QuizProgressType, BooleanCorrectAnswerType } from '../../redux/types';
import { fetchQuestions, addUserAnswer, getNewQuestion, resetProgress } from '../../redux/actions';
import { QuestionsContainer } from './components/QuestionsContainer';
import { QuizStatusBar } from '../../common/QuizStatusBar';

interface PropTypes {
    navigation: NavigationScreenProp<any, any>;
    questions: QuizQuestionsStateType;
    progress: QuizProgressType;
    fetchQuestions: () => void;
    addUserAnswer: (questionId: number, answer: BooleanCorrectAnswerType) => void;
    getNewQuestion: (currentQuestionIndex: number) => void;
    resetProgress: () => void;
}

export class QuizScreen extends React.Component<PropTypes> {
    render() {
        return (
            <>
                <QuizStatusBar />
                <SafeAreaView style={styles.container}>
                    <View style={styles.contentContainer}>
                        {this.renderQuestions()}
                    </View>
                </SafeAreaView>
            </>
        );
    }

    renderQuestions() {
        const { questions: { questions }, progress: { currentQuestion } } = this.props;

        if (questions.length === 0) return null;

        return (
            <>
                <CategoryHeader
                    category={questions[currentQuestion].category}
                />
                <QuestionsContainer
                    questions={questions}
                    currentQuestionIndex={currentQuestion}
                    onUserAnswer={this.onUserAnswerHandle}
                />
            </>
        );
    }

    onUserAnswerHandle = (questionIndex: number, answer: BooleanCorrectAnswerType) => {
        const { addUserAnswer, getNewQuestion, resetProgress, questions, navigation } = this.props;
        addUserAnswer(questionIndex, answer);

        if (questions.questions.length - 1 === questionIndex) {
            navigation.navigate('ResultsScreen');
            resetProgress();
        } else {
            getNewQuestion(questionIndex);
        }
    }
}

const mapStateToProps = (state: AppStateType) => ({
    questions: state.questions,
    progress: state.progress
});

export const QuizScreenConnected = connect(mapStateToProps, { fetchQuestions, addUserAnswer, getNewQuestion, resetProgress })(QuizScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 40,
        paddingRight: 40,
    }
});