import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

import { THEME_COLORS } from '../../../config/colors';
import { QuestionType } from '../../../redux/types';

interface PropsType {
    questionsNumber: number;
    questionsType: QuestionType;
}

const getQuestionTypeInfo = (type: QuestionType) => {
    switch (type) {
        case 'boolean':
            return 'True or False';
        case 'multiple':
            return 'Multiple';
    }
};

export const QuizInfo = (props: PropsType) => {
    const { questionsNumber, questionsType } = props;
    return (
        <Text
            style={styles.info}
        >
            {`You will be presented with ${questionsNumber} ${getQuestionTypeInfo(questionsType)} questions`}.
        </Text>
    );
};

const styles = StyleSheet.create({
    info: {
        fontSize: 18,
        color: THEME_COLORS.appTextColor,
        textAlign: 'center'
    },
});