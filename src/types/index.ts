export interface VoiceNote {
    id: string;
    title: string;
    audioFile: string;
    createdAt: Date;
    duration: number; // duration in seconds
}