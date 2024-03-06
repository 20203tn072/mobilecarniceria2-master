import React,{useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button, Icon} from '@rneui/base';
import { isEmpty } from 'lodash';
import Loading from '../../../../kermel/components/Loading';

export default function CreateAccount(){
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [showPassword1, setShowPassword1] = useState(true);
    const [showPassword2, setShowPassword2] = useState(true);
    const [showMessage1, setShowMessage1] = useState('');
    const [showMessage2, setShowMessage2] = useState('');
    const [visible, setVisible] = useState(false);

    

    return (
        <View style={styles.container}>
            <Input placeholder='erick@utez.edu.mx' label='Correo electrónico: *' keyboardType='email-address' 
                onChange={({nativeEvent: {text}}) => setEmail(text)} labelStyle={styles.label}
                containerStyle={styles.input} errorMessage={showMessage1}
                rightIcon={
                    <Icon type='material-community' name='email-outline' color='tomato'/>
                }
            />
            <Input placeholder='********' label='Contraseña: *' 
                onChange={({nativeEvent: {text}}) => setPassword1(text)} labelStyle={styles.label}
                containerStyle={styles.input} errorMessage={showMessage2} secureTextEntry={showPassword1} 
                rightIcon={
                    <Icon type='material-community' name={showPassword1 ? 'eye-outline':'eye-off-outline'} color='tomato' onPress={() => setShowPassword1(!showPassword1)}/>
                }
            />
            <Input placeholder='********' label='Confirmar Contraseña: *' 
                onChange={({nativeEvent: {text}}) => setPassword2(text)} labelStyle={styles.label}
                containerStyle={styles.input} errorMessage={showMessage2} secureTextEntry={showPassword2} 
                rightIcon={
                    <Icon type='material-community' name={showPassword2 ? 'eye-outline':'eye-off-outline'} color='tomato' onPress={() => setShowPassword2(!showPassword2)}/>
                }
            />
            <Button title='Registrarse' onPress={''} containerStyle={styles.btnContainer} buttonStyle={styles.btnStyle} titleStyle={{color: "white"}}/>
            <Loading visible={visible} title='Creando Cuenta'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16

    },
    label: {
        color: 'tomato'
    },
    input: {
        paddingHorizontal: 16,
        marginVertical: 8
    },
    btnContainer: {
        width: '80%'
    },
    btnStyle: {
        backgroundColor: '#A2160F',
        borderRadius:30
    },
});