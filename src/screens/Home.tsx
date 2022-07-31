import { useNavigation } from '@react-navigation/native';
import { Heading, HStack, FlatList, IconButton, Text, useTheme, VStack, Center } from 'native-base';
import { ChatTeardropText, SignOut } from 'phosphor-react-native';
import { useState } from 'react';

import Logo from '../assets/logo_secondary.svg'
import { Button } from '../components/Button';
import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';

export function Home() {
    const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')
    const [orders, setOrders] = useState<OrderProps[]>([{
        id: '123',
        patrimony: "Meu",
        status: 'closed',
        when: '08:00 as 2014'
    }])
    const navigation = useNavigation();
    const { colors } = useTheme();

    function handleNewOrder() {
        navigation.navigate('new');
    }

    function hanldeOpenDetails(orderId: string) {
        navigation.navigate('details', { orderId })
    }

    return (
        <VStack flex={1} pb={6} bg="gray.700">
            <HStack
                w="full"
                justifyContent={"space-between"}
                alignItems="center"
                bg="gray.600"
                pt={12}
                pb={5}
                px={6}
            >
                <Logo />
                <IconButton
                    icon={<SignOut size={26} color={colors.gray['300']} />}
                />
            </HStack>

            <VStack flex={1} px={6} >
                <HStack
                    w="full"
                    mt={8}
                    mb={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Heading color="gray.100">
                        Meus Chamados
                    </Heading>

                    <Text color={'gray.200'}>
                        3
                    </Text>
                </HStack>

                <HStack space={3} mb={8}>
                    <Filter
                        title='em andamento'
                        type='open'
                        onPress={() => setStatusSelected('open')}
                        isActive={statusSelected === 'open'}
                    />
                    <Filter
                        title='finalizados'
                        type='closed'
                        onPress={() => setStatusSelected('closed')}
                        isActive={statusSelected === 'closed'}
                    />
                </HStack>

                <FlatList
                    data={orders}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Order data={item} onPress={() => hanldeOpenDetails(item.id)} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 100
                    }}
                    ListEmptyComponent={() => (
                        <Center>
                            <ChatTeardropText
                                color={colors.gray['300']}
                                size={40}
                            />
                            <Text
                                color={"gray.300"}
                                fontSize={"xl"}
                                mt={6}
                                textAlign="center">
                                Você ainda não possui {'\n'}
                                solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizados'}
                            </Text>
                        </Center>
                    )}
                />

                <Button onPress={handleNewOrder} title='Nova solicitação' />
            </VStack>
        </VStack>
    );
}