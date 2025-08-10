import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { VoiceNote } from '../types';

interface VoiceNoteItemProps {
  note: VoiceNote;
  onDelete: (id: string) => void;
}

const VoiceNoteItem: React.FC<VoiceNoteItemProps> = ({ note, onDelete }) => {
  const playAudio = async () => {
    const { sound } = await Audio.Sound.createAsync({ uri: note.uri });
    await sound.playAsync();
  };

  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{note.title}</Text>
      <TouchableOpacity onPress={playAudio}>
        <Text style={{ color: 'blue' }}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(note.id)}>
        <Text style={{ color: 'red' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VoiceNoteItem;