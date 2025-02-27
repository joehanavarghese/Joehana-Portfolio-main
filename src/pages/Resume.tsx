import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        navigate('/');
        return;
      }

      if (e.key === 'Enter') {
        if (input.trim().toLowerCase() === 'cd ..') {
          navigate('/');
        }
        setInput('');
        return;
      }

      if (e.key === 'Backspace') {
        setInput(prev => prev.slice(0, -1));
        return;
      }

      if (e.key.length === 1) {
        setInput(prev => prev + e.key);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [navigate, input]);

  return (
    <div className="terminal-window p-8">
      <h1 className="text-2xl mb-4 animate-text-glow">Interactive Resume</h1>
      <p className="mb-4">Page under construction. Type 'cd ..' to return to terminal.</p>
      
      {/* Command input display */}
      <div className="flex items-center text-terminal-text">
        <span className="text-terminal-accent">$ </span>
        <span className="ml-2">{input}</span>
        <span className="animate-blink ml-1">▋</span>
      </div>
    </div>
  );
};

export default Resume;
