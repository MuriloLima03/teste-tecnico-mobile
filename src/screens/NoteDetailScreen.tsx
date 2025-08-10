import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { VoiceNote } from '../types';

const NoteDetailScreen: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { note }: { note: VoiceNote } = route.params as { note: VoiceNote };

    const handleDelete = () => {
        // Logic to delete the note
        navigation.goBack();
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>{note.title}</Text>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>{note.description}</Text>
            <Button title="Play" onPress={() => {/* Logic to play the audio */}} />
            <Button title="Delete" onPress={handleDelete} color="red" />
        </View>
    );
};

export default NoteDetailScreen;