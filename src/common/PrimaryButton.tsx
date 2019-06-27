import * as React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';

interface PropsType {
    title: string;
    onPress: () => void;
}

export const PrimaryButton = (props: PropsType) => (
    <Button
        title={props.title.toUpperCase()}
        onPress={props.onPress}
        buttonStyle={styles.buttonStyle}
    />
);

const styles = StyleSheet.create({
    buttonStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    }
});