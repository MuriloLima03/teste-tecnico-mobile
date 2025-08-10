import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

export const startRecording = async () => {
    try {
        const { recording } = await Audio.Recording.createAsync(
            Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        return recording;
    } catch (error) {
        console.error('Failed to start recording', error);
    }
};

export const stopRecording = async (recording) => {
    try {
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        return uri;
    } catch (error) {
        console.error('Failed to stop recording', error);
    }
};

export const playAudio = async (uri) => {
    const { sound } = await Audio.Sound.createAsync({ uri });
    await sound.playAsync();
};

export const deleteAudioFile = async (uri) => {
    try {
        await FileSystem.deleteAsync(uri);
    } catch (error) {
        console.error('Failed to delete audio file', error);
    }
};