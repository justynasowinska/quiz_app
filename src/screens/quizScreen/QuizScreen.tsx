import * as React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Text } from 'react-native';
import { connect } from 'react-redux';

// import { THEME_COLORS } from '../../config/colors';
import { CategoryHeader } from './components/CategoryHeader';
import { QuestionCard } from './components/QuestionCard';
import { AppStateType } from '../../redux/reducers/appStateType';
import { QuizQuestionsStateType, QuizProgressType } from '../../redux/types';
import { fetchQuestions } from '../../redux/actions';

interface PropTypes {
    questions: QuizQuestionsStateType;
    progress: QuizProgressType;
    fetchQuestions: () => void;
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
        return (
            <>
                <CategoryHeader
                    category={this.props.questions.questions[0].category}
                />
                <QuestionCard
                    question={this.props.questions.questions[0]}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    questions: state.questions,
    progress: state.progress
});

export const QuizScreenConnected = connect(mapStateToProps, { fetchQuestions })(QuizScreen);

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