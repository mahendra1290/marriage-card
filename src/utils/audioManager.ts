// Singleton audio manager — shared across the entire app
let audio: HTMLAudioElement | null = null;
let autoplayAttempted = false;

export function getAudio(): HTMLAudioElement {
  if (!audio) {
    audio = new Audio('/wedding-music.mp3');
    audio.loop = true;
    audio.volume = 0.3;
  }
  return audio;
}

export function playAudio(): void {
  const a = getAudio();
  if (a.paused) {
    a.play().catch(() => {
      // Audio autoplay blocked by browser policy
    });
  }
}

export function pauseAudio(): void {
  const a = getAudio();
  if (!a.paused) {
    a.pause();
  }
}

export function isAudioPlaying(): boolean {
  return !!audio && !audio.paused;
}

// Ensure audio plays on the very first user interaction with the document.
// Native DOM events are required by mobile browsers (Safari/Chrome) to unlock audio.
if (typeof window !== 'undefined') {
  const handleFirstInteraction = () => {
    if (autoplayAttempted) return;
    
    // Some browsers require audio to be initialized directly in the native event handler
    const a = getAudio();
    if (a.paused) {
      a.play().then(() => {
        autoplayAttempted = true;
        
        // Success! Remove listeners.
        document.removeEventListener('touchstart', handleFirstInteraction, true);
        document.removeEventListener('click', handleFirstInteraction, true);
        document.removeEventListener('keydown', handleFirstInteraction, true);
      }).catch(() => {
        // Failed (e.g., policy block), keep listeners alive for the next interaction
      });
    } else {
      autoplayAttempted = true;
    }
  };

  // Use capture phase (true) to ensure it grabs the event before React can stop propagation
  document.addEventListener('touchstart', handleFirstInteraction, { capture: true, passive: true });
  document.addEventListener('click', handleFirstInteraction, { capture: true });
  document.addEventListener('keydown', handleFirstInteraction, { capture: true });
}
