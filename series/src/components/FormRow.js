import React from 'react';
import { View, StyleSheet } from 'react-native';

const FormRow = props => {
    const { children, first, last } = props;
    return (
        <View style={[
            styles.row, 
            first ? styles.first : null, 
            last ? styles.last : null
        ]}>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        padding: 10,
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        elevation: 8
    },
    first: {
        marginTop: 10
    },
    last: {
        marginBottom: 10
    }
});

export default FormRow;