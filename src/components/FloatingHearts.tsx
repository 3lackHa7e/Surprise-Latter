import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface FloatingHeart {
  id: number;
  x: number;
  delay: number;
  size: number;
  duration: number;
}

interface FloatingHeartsProps {
  trigger: boolean;
}

const FloatingHearts = ({ trigger }: FloatingHeartsProps) => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    if (trigger) {
      const newHearts: FloatingHeart[] = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        delay: Math.random() * 1,
        size: 12 + Math.random() * 20,
        duration: 3 + Math.random() * 2,
      }));
      setHearts(newHearts);

      // Cleanup after animation
      const timer = setTimeout(() => setHearts([]), 6000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 floating-heart"
          style={{
            left: `${heart.x}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <Heart
            style={{ width: heart.size, height: heart.size }}
            className="text-primary fill-primary/80"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
