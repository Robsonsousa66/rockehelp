import { useState } from 'react';
import { Heading, VStack, Icon, useTheme } from 'native-base'
import { Envelope, Key } from 'phosphor-react-native';
import Logo from '../assets/logo_primary.svg';
import auth from '@react-native-firebase/auth';
import { Input } from '../components/Input';
import { Button } from '../components/Button'
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const { colors } = useTheme();

    function handleSignIn() {
        if (!email || !pass) {
            return Alert.alert("Entrar", "Email ou senha vazios!");
        }
        console.log(email, pass)
    }

    return (
        <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
            <Logo />

            <Heading color={'gray.100'} fontSize='xl' mt={20} mb={6}>
                Acesse sua conta
            </Heading>

            <Input
                placeholder="E-mail"
                mb={4}
                onChangeText={setEmail}
                InputLeftElement={<Icon as={<Envelope color={colors.gray['300']} />} ml={4} />}
            />
            <Input
                placeholder="Senha"
                InputLeftElement={<Icon as={<Key color={colors.gray['300']} />} ml={4} />}
                secureTextEntry
                onChangeText={setPass}
                mb={8}
            />

            <Button title="Entrar" w="full" onPress={handleSignIn} />
        </VStack>
    );
}

