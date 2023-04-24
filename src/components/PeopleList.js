import React from 'react';
import { StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem';
import { FlatList } from 'react-native-gesture-handler';

const PeopleList = props => {
    const { peoples, onPressItem } = props;

    return (
        <FlatList 
            style={ styles.container }
            data={ peoples }
            renderItem={({ item }) => (
                <PeopleListItem 
                    people={ item }
                    navigateToPeopleDetail={ onPressItem } 
                />
            )}
            keyExtractor={ item => item.login.username }
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
});

export default PeopleList;