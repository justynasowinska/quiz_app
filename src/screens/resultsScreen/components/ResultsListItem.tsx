import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { THEME_COLORS } from '../../../config/colors';
import { decodeWithEntities } from '../../../utils/helpers';
import { setTestID } from '../../../utils/TestingUtils';
import { verticalScale, moderateScale } from '../../../utils/scale';

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
                    size={moderateScale({ size: 26 })}
                />
            );
        }

        return (
            <Icon
                name="close"
                color={THEME_COLORS.red}
                iconStyle={styles.iconStyle}
                size={moderateScale({ size: 26 })}
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
        marginTop: verticalScale({ size: 12 }),
        marginBottom: verticalScale({ size: 12 }),
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'column',
        flexShrink: 1,
    },
    questionText: {
        fontSize: moderateScale({ size: 22 }),
        color: THEME_COLORS.appTextColor
    },
    correctAnswer: {
        fontSize: moderateScale({ size: 18 }),
        color: THEME_COLORS.green
    },
    iconStyle: {
        marginRight: moderateScale({ size: 12 })
    }
});