
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Vibration } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./style";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');


    function inputNameEvent(eventName: string){

    }

    function handleParticipantAdd() {

        if (participants.includes(participantName)) {
            return Alert.alert('Participante Existe', "Já existe um participante cadastrado com esse nome!", [
                {
                    text: 'Entendi',
                    onPress: () => setParticipantName('')

                }],
                {
                    onDismiss: () => setParticipantName(''),
                    cancelable: true
                }
            );

        }


        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');

    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }



    return (

        <View style={styles.container}>
            <Text style={styles.eventName} >
                Nome do Evento
            </Text>

            <Text style={styles.eventLastName} >
                Gerencie seus convidados
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do candidato"
                    placeholderTextColor='#6b6b6b'
                    keyboardType="ascii-capable"
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Nada para ser listado.
                    </Text>
                )}
            />

        </View>
    )
}
