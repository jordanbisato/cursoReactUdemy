import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ({ label = "", content = "-"}) => {
    return(
        <View style={ styles.line }>
            <Text style={[ 
                styles.cell, 
                styles.label, 
                label.length > 8 ? styles.longLabel : null
            ]}>{ label }</Text>
            <Text style={[ styles.cell, styles.content ]}>{ content }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 1,
        borderColor: '#C5C5C5'
    },
    cell: {
        fontSize: 16,
        paddingLeft: 5,
    },
    label: {
        fontWeight: 'bold',
        flex: 2
    },
    content: {
        flex: 4
    },
    longLabel: {
        fontSize: 14
    }
});

export default Line;