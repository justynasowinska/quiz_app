import * as React from 'react';
import { FlatList, View, StyleSheet, ListRenderItemInfo } from 'react-native';
import { ResultType, ResultsListItem } from './ResultsListItem';

export type ResultsType = ReadonlyArray<ResultType>;

interface PropsType {
    results: ResultsType;
    listHeader?: any;
    listFooter?: any;
}

export const ResultsList = (props: PropsType) => {
    const { results } = props;

    const renderListItem = ({ item }: ListRenderItemInfo<ResultType>) => {
        return (
            <ResultsListItem
                resultsItem={item}
            />
        );
    };

    const keyExtractor = (item: ResultType) => `${item.questionId}`;

    return (
        <View style={styles.container}>
            <FlatList
                data={results}
                renderItem={renderListItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={props.listHeader}
                ListFooterComponent={props.listFooter}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});