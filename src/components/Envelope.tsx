import { useState } from "react";
import { Heart } from "lucide-react";

interface EnvelopeProps {
  onOpen: () => void;
  isOpen: boolean;
}

const Envelope = ({ onOpen, isOpen }: EnvelopeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="envelope-container relative">
      {/* Envelope Body */}
      <div
        className={`relative w-80 h-56 md:w-96 md:h-64 cursor-pointer transition-all duration-500 ${
          isHovered && !isOpen ? "scale-105" : ""
        } ${isOpen ? "opacity-0 scale-90" : ""}`}
        onClick={onOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Back of envelope */}
        <div className="absolute inset-0 bg-envelope rounded-lg shadow-2xl" />

        {/* Envelope body front */}
        <div className="absolute inset-0 bg-gradient-to-b from-envelope to-envelope-dark rounded-lg overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-4 border-2 border-dashed border-burgundy/20 rounded" />
          
          {/* Heart seal */}
          <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-300 ${
            isHovered ? "scale-110" : ""
          }`}>
            <div className="relative">
              <Heart className="w-12 h-12 text-primary fill-primary animate-pulse-glow rounded-full" />
              <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full" />
            </div>
          </div>
        </div>

        {/* Envelope flap */}
        <div
          className={`absolute -top-1 left-0 right-0 h-32 origin-top transition-transform duration-700 ${
            isOpen ? "envelope-flap open" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Flap front (visible when closed) */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-envelope-dark to-envelope rounded-t-lg"
            style={{
              clipPath: "polygon(0 100%, 50% 20%, 100% 100%)",
              backfaceVisibility: "hidden",
            }}
          />
          {/* Flap back (visible when open) */}
          <div
            className="absolute inset-0 bg-envelope-dark rounded-t-lg"
            style={{
              clipPath: "polygon(0 100%, 50% 20%, 100% 100%)",
              transform: "rotateX(180deg)",
              backfaceVisibility: "hidden",
            }}
          />
        </div>

        {/* Click hint */}
        {!isOpen && (
          <p className={`absolute -bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground text-sm font-light transition-opacity duration-300 whitespace-nowrap ${
            isHovered ? "opacity-100" : "opacity-60"
          }`}>
            Click to open your surprise ✨
          </p>
        )}
      </div>
    </div>
  );
};

export default Envelope;
