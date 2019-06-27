import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { THEME_COLORS } from '../../../config/colors';
import { decodeWithEntities } from '../../../utils/helpers';
import { setTestID } from '../../../utils/TestingUtils';

export interface ResultType {
    questionId: number;
    question: string;
    correct: boolean;
    correctAnswer: string;
}

interface PropsType {
    resultsItem: ResultType;
}

export const ResultsListItem = (props: PropsType) => {
    const renderIcon = (correct: boolean) => {
        if (correct) {
            return (
                <Icon
                    name="check"
                    color={THEME_COLORS.green}
                    iconStyle={styles.iconStyle}
                />
            );
        }

        return (
            <Icon
                name="close"
                color={THEME_COLORS.red}
                iconStyle={styles.iconStyle}
            />
        );
    }

    const { resultsItem: { question, correct, correctAnswer } } = props;
    return (
        <View style={styles.container}>
            {renderIcon(correct)}
            <View style={styles.textContainer}>
                <Text style={styles.questionText}>{decodeWithEntities(question)}</Text>
                { !correct && <Text testID={setTestID('results_correct_answer')} style={styles.correctAnswer}>{`Correct answer: ${correctAnswer}`}</Text> }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'column',
        flexShrink: 1,
    },
    questionText: {
        fontSize: 20,
        color: THEME_COLORS.appTextColor
    },
    correctAnswer: {
        fontSize: 15,
        color: THEME_COLORS.green
    },
    iconStyle: {
        marginRight: 10
    }
});