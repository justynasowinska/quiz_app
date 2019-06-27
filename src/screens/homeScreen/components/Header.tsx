import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

import { THEME_COLORS } from '../../../config/colors';
import { moderateScale } from '../../../utils/scale';

export const Header = () => {
    return (
        <Text style={styles.header}>
            Welcome to the{'\n'}Trivia Challenge!
        </Text>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: moderateScale({ size: 32 }),
        fontWeight: 'bold',
        color: THEME_COLORS.headerTextColor,
        textAlign: 'center'
    }
});