import { useState } from "react";
import Envelope from "@/components/Envelope";
import Letter from "@/components/Letter";
import FloatingHearts from "@/components/FloatingHearts";
import Confetti from "@/components/Confetti";
import BackgroundParticles from "@/components/BackgroundParticles";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEffects, setShowEffects] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setShowEffects(true), 500);
    }
  };

  const handleReset = () => {
    setShowEffects(false);
    setIsOpen(false);
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-burgundy/20" />
      
      {/* Background particles */}
      <BackgroundParticles />

      {/* Floating hearts effect */}
      <FloatingHearts trigger={showEffects} />
      
      {/* Confetti effect */}
      <Confetti trigger={showEffects} />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Header */}
        <header className={`text-center mb-12 transition-all duration-700 ${
          isOpen ? "opacity-0 -translate-y-10" : "opacity-100"
        }`}>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-4 animate-fade-in">
            You Have a <span className="shimmer-text">Surprise</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A special message is waiting for you
          </p>
        </header>

        {/* Envelope */}
        <div className={`transition-all duration-700 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}>
          <Envelope onOpen={handleOpen} isOpen={isOpen} />
        </div>

        {/* Letter */}
        <Letter isVisible={isOpen} />

        {/* Reset button */}
        {isOpen && (
          <button
            onClick={handleReset}
            className="fixed bottom-8 right-1/2 -translate-x-1/2 px-6 py-3 bg-card hover:bg-muted text-foreground rounded-full font-medium transition-all duration-300 hover:scale-105 border border-border animate-fade-in z-50"
          >
            Send Another Surprise 💌
          </button>
        )}
      </div>

      {/* Decorative elements */}
      <div className="fixed top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="fixed bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
    </main>
  );
};

export default Index;
