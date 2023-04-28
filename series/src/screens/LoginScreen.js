import React from 'react';
import { ActivityIndicator, Button, StyleSheet, Alert, Text, TextInput, View } from 'react-native';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import FormRow from '../components/FormRow';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            email: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

    componentDidMount() {
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyBVber_klxZr-o9s2tbpmnNXdnFW22ykQg",
            authDomain: "cursoreactseries.firebaseapp.com",
            projectId: "cursoreactseries",
            storageBucket: "cursoreactseries.appspot.com",
            messagingSenderId: "695196847335",
            appId: "1:695196847335:web:93680ec09d6b50b4856642"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        // Initialize Firebase Authentication and get a reference to the service
        this.auth = getAuth(app);
    }

    onChangeText(field, value) {

        // ES5
        // const newState = {};
        // newState[field] = value;
        // this.setState(newState);

        //ES6
        this.setState({
            [field]: value
        });
    }

    loginUserSuccess = user => {
        console.log(user);
        this.setState({ message: "Sucesso!"});
        this.props.navigation.navigate('Series', user);
    }

    loginUserFailed = error => {
        this.setState({
            message: this.getMessageByErrorCode(code)
        });
    }

    registerUser() {
        const { email, password } = this.state;

        createUserWithEmailAndPassword(this.auth, email, password)
        .then(this.loginUserSuccess)
        .catch(this.loginUserFailed);
    }

    tryLogin() {
        this.setState({
            isLoading: true
        });

        const { email, password } = this.state;

        signInWithEmailAndPassword(this.auth, email, password)
        .then(this.loginUserSuccess)
        .catch((error) => {
            console.log(error);
            const { code } = error;

            if (code == 'auth/user-not-found') {
                Alert.alert(
                    'Usuário não encontrado',
                    'Deseja criar um cadastrado com as informações inseridas?',
                    [ //Buttons
                        {
                            text: 'Não',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        {
                            text: 'Cadastrar', 
                            onPress: () => this.registerUser()
                        }
                    ],
                    { cancelable: false }
                );
            } else {
                this.loginUserFailed(error);
            }
        })
        .then(() => {
            this.setState({ isLoading: false });
            console.log(this.state);
        });

    }

    getMessageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/invalid-email':
                return 'Email inválido';
            case 'auth/missing-password':
                return 'Senha obrigatória';
            case 'auth/email-already-in-use':
                return 'Email já cadastrado';
            case 'auth/weak-password':
                return 'Senha fraca';
            case 'auth/operation-not-allowed':
                return 'Cadastro indisponível';
            default:
                return 'Erro desconhecido';
        }
    }

    renderButton() {
        if (this.state.isLoading) 
            return <ActivityIndicator />;
        
        return (
            <Button 
                title='Entrar' 
                onPress={() => this.tryLogin()}
            />
        )
    }

    renderMessage() {
        const { message } = this.state;
        if (!message)
            return null;
        
            return(
                <View>
                    <Text>{ message }</Text>
                </View>
            )
    }

    render() {
        return (
            <View style={ styles.container }>
                <FormRow first>
                    <TextInput 
                        style={ styles.input }
                        placeholder='user@email.com'
                        value={ this.state.email }
                        onChangeText={value => this.onChangeText('email', value)}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput 
                        style={ styles.input } 
                        placeholder='******'
                        secureTextEntry
                        value={ this.state.password }
                        onChangeText={value => this.onChangeText('password', value)}
                    />
                </FormRow>

                { this.renderButton() }
                { this.renderMessage() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F2F2F2",
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: 'white',
        paddingBottom: 5
    },
})