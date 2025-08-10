import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import VoiceRecorder from '../components/VoiceRecorder';
import VoiceNoteList from '../components/VoiceNoteList';
import { VoiceNote } from '../types';

const HomeScreen = () => {
  const [voiceNotes, setVoiceNotes] = useState<VoiceNote[]>([]);

  const handleAddNote = (newNote: VoiceNote) => {
    setVoiceNotes(prevNotes => [...prevNotes, newNote]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Notes</Text>
      <VoiceRecorder onAddNote={handleAddNote} />
      <VoiceNoteList notes={voiceNotes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;