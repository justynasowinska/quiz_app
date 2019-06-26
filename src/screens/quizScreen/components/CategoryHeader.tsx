import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

import { THEME_COLORS } from '../../../config/colors';

interface PropsType {
    category: string;
}

export const CategoryHeader = (props: PropsType) => {
    return (
        <Text style={styles.header}>
            {props.category}
        </Text>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: THEME_COLORS.headerTextColor,
        textAlign: 'center'
    }
});