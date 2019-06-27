import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { THEME_COLORS } from '../../../config/colors';
import { QuizQuestionType } from '../../../redux/types';
import { decodeWithEntities, getDifficultyLevelColor } from '../../../utils/helpers';

interface PropTypes {
    question: QuizQuestionType;
}

export const QuestionCard = (props: PropTypes) => {
    const { question: { difficulty, question } } = props;
    const difficultyColor = getDifficultyLevelColor(difficulty);

    return (
        <View style={[styles.card, { borderColor: difficultyColor }]}>
            <Text style={styles.questionText}>
                {decodeWithEntities(question)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME_COLORS.white,
        borderWidth: 1,
        padding: 20
    },
    questionText: {
        fontSize: 20,
        color: THEME_COLORS.appTextColor,
        textAlign: 'center'
    }
});