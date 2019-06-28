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
import { QuizQuestionsStateType } from '../../redux/types';
import { LoadingOverlay } from '../../common/LoadingOverlay';
import { verticalScale, moderateScale } from '../../utils/scale';

interface PropTypes {
    navigation: NavigationScreenProp<any, any>;
    questions: QuizQuestionsStateType;
    currentIndex: number;
    fetchQuestions: () => void;
}

export class HomeScreen extends React.Component<PropTypes> {
    componentDidMount() {
        const { currentIndex, fetchQuestions, navigation, questions } = this.props;

        // This functionality should be discussed
        if (currentIndex > 0) {
            navigation.navigate('QuizScreen');
        } else if (questions.questions.length === 0) {
            fetchQuestions();
        }
    }

    render() {
        return (
            <>
                <QuizStatusBar />
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
            return <LoadingOverlay backgroundColor={THEME_COLORS.white} />;
        }

        if (questions.error !== null) {
            return <Text style={[styles.info, styles.error]}>Error during fetching questions.</Text>;
        }

        if (questions.questions.length === 0) {
            return <Text style={styles.info}>There is no available questions for these criteria.</Text>;
        }

        return this.renderIntro();
    }

    renderIntro = () => {
        const { questions: { questions } } = this.props;
        const questionsNumber = questions.length;
        // TODO: This should be gain from some settings
        const qurstionsType = questions[0].type;

        return (
            <>
                <Header />
                <QuizInfo
                    questionsNumber={questionsNumber}
                    questionsType={qurstionsType}
                />
                <Text style={styles.info}>Can you score 100%?</Text>
                <PrimaryButton
                    title="Begin"
                    onPress={this.onPressBeginButtonHandle}
                />
            </>
        );
    }

    onPressBeginButtonHandle = () => {
        this.props.navigation.navigate('QuizScreen');
    }
}

const mapStateToProps = (state: AppStateType) => ({
    questions: state.questions,
    currentIndex: state.progress.currentQuestion
});

export const HomeScreenConnected = connect(mapStateToProps, { fetchQuestions })(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: verticalScale({ size: 30 }),
        paddingBottom: verticalScale({ size: 30 }),
        paddingLeft: moderateScale({ size: 40 }),
        paddingRight: moderateScale({ size: 40 }),
    },
    info: {
        fontSize: moderateScale({ size: 25 }),
        color: THEME_COLORS.appTextColor,
        textAlign: 'center'
    },
    error: {
        color: THEME_COLORS.red
    }
});