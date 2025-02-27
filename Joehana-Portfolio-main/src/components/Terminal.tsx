import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Square, X } from 'lucide-react';

const ASCII_ART = `
 ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
 ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
    ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
    ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
    ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
`;

interface Command {
  input: string;
  output: string;
}

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const commands = {
    help: 'Available commands: about, projects, contact, resume, clear, help',
    about: 'Navigating to About page...',
    projects: 'Loading Project Showcase...',
    contact: 'Opening Contact Information...',
    resume: 'Fetching Resume...',
    clear: '',
    sudo: 'Nice try! But you need root privileges for this operation 😉',
  };

  // Center the window initially
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPosition({
        x: (window.innerWidth - 800) / 2,
        y: Math.max(0, (window.innerHeight - 600) / 2)
      });
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isMaximized) return;
    
    // Calculate new position directly from mouse movement
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    // Keep window within viewport bounds with direct calculation
    const maxX = window.innerWidth - 800; // window width
    const maxY = window.innerHeight - 600; // window height
    
    // Update position with requestAnimationFrame for smoother performance
    requestAnimationFrame(() => {
      setPosition({
        x: Math.min(Math.max(0, newX), maxX),
        y: Math.min(Math.max(0, newY), maxY)
      });
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.userSelect = '';
    }
  }, [isDragging]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    let output = '';
    switch (trimmedCmd) {
      case 'about':
      case 'projects':
      case 'contact':
      case 'resume':
        output = commands[trimmedCmd];
        setTimeout(() => navigate(`/${trimmedCmd}`), 1000);
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'help':
        output = commands.help;
        break;
      case 'sudo':
        output = commands.sudo;
        break;
      default:
        output = `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
    }

    setHistory(prev => [...prev, { input: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    handleCommand(input);
    setInput('');
  };

  return (
    <div 
      className={`terminal-container ${isMaximized ? 'fixed inset-0' : 'absolute'} bg-[#1E1E1E] rounded-lg overflow-hidden shadow-2xl border border-[#323232]`}
      style={!isMaximized ? {
        width: '800px',
        height: '600px',
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isDragging ? 'none' : 'transform 0.2s ease',
        willChange: isDragging ? 'transform' : 'auto'
      } : undefined}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Window Title Bar */}
      <div 
        className="window-titlebar h-7 bg-[#323232] flex items-center px-3 justify-between"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center space-x-2">
          <button 
            className="window-control w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/90 flex items-center justify-center group"
            onClick={() => navigate('/')}
          >
            <X className="w-2 h-2 text-[#4C0002] opacity-0 group-hover:opacity-100" />
          </button>
          <button 
            className="window-control w-3 h-3 rounded-full bg-[#FEBC2E] hover:bg-[#FEBC2E]/90 flex items-center justify-center group"
            onClick={() => setIsMaximized(false)}
          >
            <Minus className="w-2 h-2 text-[#9A6B0F] opacity-0 group-hover:opacity-100" />
          </button>
          <button 
            className="window-control w-3 h-3 rounded-full bg-[#28C840] hover:bg-[#28C840]/90 flex items-center justify-center group"
            onClick={() => setIsMaximized(!isMaximized)}
          >
            <Square className="w-2 h-2 text-[#0B5614] opacity-0 group-hover:opacity-100" />
          </button>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-[#9A9A9A] text-xs font-medium">
          joehana@terminal — zsh
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        className="terminal-content p-4 h-[calc(100%-1.75rem)] overflow-y-auto bg-[#1E1E1E]"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="scanline animate-scanline" />
        
        <pre className="ascii-art animate-text-glow text-sm">{ASCII_ART}</pre>
        
        <div className="mb-4 animate-typing overflow-hidden whitespace-nowrap text-[#D4D4D4]">
          Welcome to Joehana's terminal. Type 'help' for available commands.
        </div>

        {history.map((entry, i) => (
          <div key={i} className="mb-2">
            <div className="flex items-center">
              <span className="text-[#6A9955]">$ </span>
              <span className="ml-2 text-[#D4D4D4]">{entry.input}</span>
            </div>
            {entry.output && <div className="ml-4 text-[#569CD6]">{entry.output}</div>}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-[#6A9955]">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="command-input ml-2 bg-transparent outline-none flex-1 text-[#D4D4D4]"
            autoFocus
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
