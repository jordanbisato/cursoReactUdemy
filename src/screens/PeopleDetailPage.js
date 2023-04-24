import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Line from '../components/Line';

export default class PeopleDetailPage extends React.Component {
    render() {
        // console.log('this: ' + JSON.stringify(this.props));
        const { people } = this.props.route.params;
        return (
            <View style={ styles.container }>
                <View style={ styles.imgContainer }>
                    <Image 
                        source={{ uri: people.picture.large }} 
                        style={ styles.avatar }>
                    </Image>
                </View>
                
                <View style={ styles.detailContainer }>
                    <Line label="Email:" content={ people.email }></Line>
                    <Line label="Cidade:" content={ people.location.city }></Line>
                    <Line label="Estado:" content={ people.location.state }></Line>
                    <Line label="Telefone:" content={ people.phone }></Line>
                    <Line label="Celular:" content={ people.cell }></Line>
                    <Line label="Nacionalidade:" content={ people.nat }></Line>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    imgContainer: {
        height: 240,
        alignSelf: 'center'
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 120,
        borderWidth: 5,
        borderColor: 'black'
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 2,
    }
})