import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { THEME_COLORS } from '../../../config/colors';
import { QuizQuestionType, DifficultlyType } from '../../../redux/types';
import { decodeWithEntities } from '../../../utils/helpers';

interface PropTypes {
    question: QuizQuestionType;
}

export class QuestionCard extends React.Component<PropTypes> {
    render() {
        const { question: { difficulty, question } } = this.props;

        const difficultyColor = this.getDifficultyLevelColor(difficulty);

        return (
            <View style={styles.container}>
                <Text style={[styles.levelText, { color: difficultyColor }]}>
                    Level: {difficulty}
                </Text>
                <View style={[styles.card, { borderColor: difficultyColor }]}>
                    <Text style={styles.questionText}>
                        {decodeWithEntities(question)}
                    </Text>
                </View>
            </View>
        );
    }

    getDifficultyLevelColor = (difficulty: DifficultlyType): string => {
        switch (difficulty) {
            case 'easy':
                return THEME_COLORS.easyQuestionLevel;
            case 'medium':
                return THEME_COLORS.mediumQuestionLevel;
            case 'hard':
                return THEME_COLORS.hardQuestionLevel;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        //
    },
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
    },
    levelText: {
        fontSize: 15,
        marginBottom: 2
    }
});