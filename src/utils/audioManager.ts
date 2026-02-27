// Singleton audio manager — shared across the entire app
let audio: HTMLAudioElement | null = null;

export function getAudio(): HTMLAudioElement {
  if (!audio) {
    audio = new Audio('/wedding-music.mp3');
    audio.loop = true;
    audio.volume = 0.3;
  }
  return audio;
}

export function playAudio(): void {
  getAudio().play().catch(() => {});
}

export function pauseAudio(): void {
  getAudio().pause();
}

export function isAudioPlaying(): boolean {
  return !!audio && !audio.paused;
}
