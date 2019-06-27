import * as React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';

import { CategoryHeader } from './components/CategoryHeader';
import { AppStateType } from '../../redux/reducers/appStateType';
import { QuizQuestionsStateType, QuizProgressType, BooleanCorrectAnswerType } from '../../redux/types';
import { fetchQuestions, addUserAnswer, getNewQuestion, resetProgress } from '../../redux/actions';
import { QuestionsDeck } from './components/QuestionsDeck';

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
    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" animated={true} />
                <SafeAreaView style={styles.container}>
                    <View style={styles.contentContainer}>
                        {this.renderContent()}
                    </View>
                </SafeAreaView>
            </>
        );
    }

    renderContent() {
        const { questions } = this.props;

        if (questions.loading) {
            return <Text>Loading...</Text>;
        }

        if (questions.error !== null) {
            return <Text>Error occured</Text>;
        }

        if (questions.questions.length === 0) {
            return <Text>There is no available questions for these criteria.</Text>;
        }

        return this.renderQuestions();
    }

    renderQuestions() {
        const { questions: { questions }, progress: { currentQuestion } } = this.props;
        return (
            <>
                <CategoryHeader
                    category={questions[currentQuestion].category}
                />
                <QuestionsDeck
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
    },
});