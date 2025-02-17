import React, { useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const SoundToggle = ({ onToggle }) => {
  const [isMuted, setIsMuted] = useState(true);

  const handleToggle = () => {
    setIsMuted(!isMuted);
    onToggle(!isMuted);
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-4 right-4 z-50 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      aria-label={isMuted ? "Unmute sound" : "Mute sound"}
    >
      {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
    </button>
  );
};

export default SoundToggle; 