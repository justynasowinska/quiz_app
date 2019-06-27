import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

import { THEME_COLORS } from '../../../config/colors';

export interface ResultsSummaryType {
    correctAnswers: number;
    allQuestions: number;
}

interface PropsType {
    results: ResultsSummaryType;
}

export const ResultsHeader = (props: PropsType) => {
    const { results: { correctAnswers, allQuestions } } = props;
    return (
        <>
            <Text style={styles.header}>You scored</Text>
            <Text style={[styles.header, styles.scores]}>{`${correctAnswers} / ${allQuestions}`}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: THEME_COLORS.headerTextColor,
        textAlign: 'center'
    },
    scores: {
        fontSize: 24
    }
});