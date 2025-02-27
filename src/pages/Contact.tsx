import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Linkedin, Mail, Copy, Check } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const ASCII_ART = `
 ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝   
`;

const CONTACT_INFO = {
  email: 'joehanavarghese@gmail.com',
  github: 'https://github.com/joehanavarghese',
  linkedin: 'https://ca.linkedin.com/in/joehanavarghese'
};

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'exit') {
        navigate('/');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Joehana',
          reply_to: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent",
          description: "Thanks for reaching out! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: "Copied to clipboard!",
        description: `${text} has been copied to your clipboard.`,
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-terminal-background text-terminal-text p-4 md:p-8">
      {/* Matrix-like background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-terminal-text animate-fall"
            style={{
              left: `${i * 10}%`,
              animationDelay: `${i * 0.3}s`,
              fontSize: '12px'
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="my-2">
                {String.fromCharCode(33 + Math.floor(Math.random() * 93))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-terminal-text hover:text-terminal-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Terminal</span>
          </button>
          <div className="text-terminal-dim">(Press ESC to return)</div>
        </div>

        {/* ASCII Art Header */}
        <pre className="ascii-art text-xs md:text-sm lg:text-base mb-8 animate-text-glow overflow-x-auto">
          {ASCII_ART}
        </pre>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black/20 border-terminal-dim/20 focus:border-terminal-accent text-terminal-text placeholder:text-terminal-dim/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/20 border-terminal-dim/20 focus:border-terminal-accent text-terminal-text placeholder:text-terminal-dim/50"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-black/20 border-terminal-dim/20 focus:border-terminal-accent text-terminal-text placeholder:text-terminal-dim/50 min-h-[150px]"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-terminal-accent/10 border border-terminal-accent/50 text-terminal-accent hover:bg-terminal-accent/20 transition-colors rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
            
            {/* Social Links */}
            <div className="space-y-4">
              {/* Email */}
              <button
                onClick={() => copyToClipboard(CONTACT_INFO.email, 'email')}
                className="w-full min-w-[500px] flex items-center justify-between p-4 bg-black/20 border border-terminal-dim/20 hover:border-terminal-accent/50 rounded-md group transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-terminal-accent" />
                  <span>{CONTACT_INFO.email}</span>
                </div>
                {copiedField === 'email' ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-terminal-dim group-hover:text-terminal-accent" />
                )}
              </button>

              {/* GitHub */}
              <button
                onClick={() => copyToClipboard(CONTACT_INFO.github, 'github')}
                className="w-full min-w-[500px] flex items-center justify-between p-4 bg-black/20 border border-terminal-dim/20 hover:border-terminal-accent/50 rounded-md group transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-terminal-accent" />
                  <span>{CONTACT_INFO.github}</span>
                </div>
                {copiedField === 'github' ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-terminal-dim group-hover:text-terminal-accent" />
                )}
              </button>

              {/* LinkedIn */}
              <button
                onClick={() => copyToClipboard(CONTACT_INFO.linkedin, 'linkedin')}
                className="w-full min-w-[500px] flex items-center justify-between p-4 bg-black/20 border border-terminal-dim/20 hover:border-terminal-accent/50 rounded-md group transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-terminal-accent" />
                  <span>{CONTACT_INFO.linkedin}</span>
                </div>
                {copiedField === 'linkedin' ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-terminal-dim group-hover:text-terminal-accent" />
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
