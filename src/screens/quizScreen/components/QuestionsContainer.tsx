import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { BooleanQuestionsDeck } from './BooleanQuestionsDeck';
import { QuizQuestionType, BooleanCorrectAnswerType } from '../../../redux/types';
import { getDifficultyLevelColor } from '../../../utils/helpers';

interface PropsType {
    questions: ReadonlyArray<QuizQuestionType>;
    currentQuestionIndex: number;
    onUserAnswer: (questionIndex: number, answer: BooleanCorrectAnswerType) => void;
}

export const QuestionsContainer = (props: PropsType) => {
    const { questions, currentQuestionIndex, onUserAnswer } = props;
    const difficulty = questions[currentQuestionIndex].difficulty;
    const difficultyColor = getDifficultyLevelColor(difficulty);

    const getCurrentProgress = () => {
        const { questions, currentQuestionIndex } = props;

        return `${currentQuestionIndex} / ${questions.length}`;
    };

    // TODO: Render other questions deck if not boolean questions type
    return (
        <View style={styles.container}>
            <Text style={[styles.levelText, { color: difficultyColor }]}>
                Level: {difficulty}
            </Text>
            <BooleanQuestionsDeck
                questions={questions}
                currentQuestionIndex={currentQuestionIndex}
                onUserAnswer={onUserAnswer}
            />
            <Text style={styles.progressText}>
                {getCurrentProgress()}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    levelText: {
        fontSize: 15,
        marginBottom: 2,
        alignSelf: 'flex-start'
    },
    progressText: {
        fontSize: 15,
        marginTop: 2
    }
});