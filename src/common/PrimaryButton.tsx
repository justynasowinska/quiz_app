import * as React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { scale, moderateScale } from '../utils/scale';

interface PropsType {
    title: string;
    onPress: () => void;
}

export const PrimaryButton = (props: PropsType) => (
    <Button
        title={props.title.toUpperCase()}
        onPress={props.onPress}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.textStyle}
    />
);

const styles = StyleSheet.create({
    buttonStyle: {
        paddingLeft: moderateScale({ size: 30 }),
        paddingRight: moderateScale({ size: 30 }),
        paddingTop: moderateScale({ size: 15 }),
        paddingBottom: moderateScale({ size: 15 })
    },
    textStyle: {
        fontSize: moderateScale({ size: 20 })
    }
});