import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { THEME_COLORS } from '../config/colors';

interface PropsType {
    backgroundColor?: string;
    size?: 'small' | 'large';
}

export const LoadingOverlay = (props: PropsType) => (
    <View
        style={[
            StyleSheet.absoluteFill,
            styles.loadingOverlay,
            { backgroundColor: props.backgroundColor },
        ]}
    >
        <ActivityIndicator
            color={THEME_COLORS.appTextColor}
            size={props.size || 'small'}
        />
    </View>
);

const styles = StyleSheet.create({
    loadingOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});
