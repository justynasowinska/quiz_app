import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { THEME_COLORS } from '../../../config/colors';

export const BooleanAnswersInstruction = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.answer}>FALSE</Text>
            <Icon
                name="arrow-long-left"
                type="entypo"
                size={20}
                iconStyle={styles.arrowIconLeft}
            />
            <Icon
                name="gesture-swipe-horizontal"
                type="material-community"
                size={40}
                color={THEME_COLORS.appTextColor}
                iconStyle={styles.iconStyle}
            />
            <Icon
                name="arrow-long-right"
                type="entypo"
                size={20}
                iconStyle={styles.arrowIconRight}
            />
            <Text style={styles.answer}>TRUE</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: -40
    },
    answer: {
        fontSize: 20,
        color: THEME_COLORS.appTextColor,
        fontWeight: 'bold'
    },
    iconStyle: {
        marginLeft: 15,
        marginRight: 15
    },
    arrowIconLeft: {
        marginLeft: 15
    },
    arrowIconRight: {
        marginRight: 15
    }
});