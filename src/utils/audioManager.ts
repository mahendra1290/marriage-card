// Singleton audio manager — shared across the entire app
let audio: HTMLAudioElement | null = null;
let autoplayAttempted = false;

// We delay creating the Audio object until the exact moment of the first user 
// interaction. This is required by strict mobile browser policies (Android Chrome).
function initAudio(): HTMLAudioElement {
  if (!audio) {
    audio = new Audio('/wedding-music.mp3');
    audio.loop = true;
    audio.volume = 0.3;
  }
  return audio;
}

export function getAudio(): HTMLAudioElement {
  return initAudio();
}

export function playAudio(): void {
  const a = initAudio();
  if (a.paused) {
    a.play().then(() => {
      autoplayAttempted = true;
    }).catch(() => {
      // Audio autoplay blocked by browser policy
    });
  }
}

export function pauseAudio(): void {
  if (audio && !audio.paused) {
    audio.pause();
  }
}

export function isAudioPlaying(): boolean {
  return !!audio && !audio.paused;
}

// Global fallback listener in case they interact with something else first
if (typeof window !== 'undefined') {
  const handleFirstInteraction = () => {
    if (autoplayAttempted) return;
    
    const a = initAudio();
    if (a.paused) {
      a.play().then(() => {
        autoplayAttempted = true;
        document.removeEventListener('click', handleFirstInteraction, true);
        document.removeEventListener('touchstart', handleFirstInteraction, true);
      }).catch(() => {});
    }
  };

  document.addEventListener('click', handleFirstInteraction, { capture: true, once: true });
  document.addEventListener('touchstart', handleFirstInteraction, { capture: true, once: true });
}
