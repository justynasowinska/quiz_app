import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

import { THEME_COLORS } from '../../../config/colors';

export const Header = () => {
    return (
        <Text style={styles.header}>
            Welcome to the{'\n'}Trivia Challenge!
        </Text>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        color: THEME_COLORS.headerTextColor,
        textAlign: 'center'
    }
});