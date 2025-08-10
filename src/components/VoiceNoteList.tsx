import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import VoiceNoteItem from './VoiceNoteItem';
import { VoiceNote } from '../types';

interface VoiceNoteListProps {
  notes: VoiceNote[];
  onDelete: (id: string) => void;
  onPlay: (uri: string) => void;
}

const VoiceNoteList: React.FC<VoiceNoteListProps> = ({ notes, onDelete, onPlay }) => {
  const renderItem = ({ item }: { item: VoiceNote }) => (
    <VoiceNoteItem note={item} onDelete={onDelete} onPlay={onPlay} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default VoiceNoteList;