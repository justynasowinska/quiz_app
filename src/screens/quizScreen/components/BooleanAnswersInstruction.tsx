import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { THEME_COLORS } from '../../../config/colors';
import { verticalScale, moderateScale } from '../../../utils/scale';

export const BooleanAnswersInstruction = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.answer}>FALSE</Text>
            <Icon
                name="arrow-long-left"
                type="entypo"
                size={moderateScale({ size: 20 })}
                iconStyle={styles.arrowIconLeft}
            />
            <Icon
                name="gesture-swipe-horizontal"
                type="material-community"
                size={moderateScale({ size: 40 })}
                color={THEME_COLORS.appTextColor}
                iconStyle={styles.iconStyle}
            />
            <Icon
                name="arrow-long-right"
                type="entypo"
                size={moderateScale({ size: 20 })}
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
        marginBottom: verticalScale({ size: 25 }),
        marginTop: verticalScale({ size: -25 })
    },
    answer: {
        fontSize: moderateScale({ size: 20 }),
        color: THEME_COLORS.appTextColor,
        fontWeight: 'bold'
    },
    iconStyle: {
        marginLeft: moderateScale({ size: 15 }),
        marginRight: moderateScale({ size: 15 })
    },
    arrowIconLeft: {
        marginLeft: moderateScale({ size: 15 })
    },
    arrowIconRight: {
        marginRight: moderateScale({ size: 15 })
    }
});