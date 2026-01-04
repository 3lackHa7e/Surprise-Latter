import { useEffect, useState } from "react";

interface LetterProps {
  isVisible: boolean;
}

const Letter = ({ isVisible }: LetterProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
      }`}
    >
      {/* Letter paper */}
      <div className="relative w-[90vw] max-w-2xl mx-4">
        <div className="bg-letter-bg rounded-lg shadow-2xl p-8 md:p-12 transform rotate-1">
          {/* Paper texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-secondary/5 to-transparent rounded-lg pointer-events-none" />
          
          {/* Decorative corner */}
          <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />

          {/* Letter content */}
          <div className={`relative z-10 transition-all duration-700 delay-300 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <p className="text-secondary-foreground/60 font-serif text-lg mb-6">
              প্রিয়,
            </p>
            
            <div className="space-y-4 text-secondary-foreground font-serif text-lg md:text-xl leading-relaxed">
              <p>
                তুমি জানো না, তোমাকে কতটা গভীরভাবে অনুভব করি আমি... তোমার হাসির পেছনে লুকিয়ে থাকা সেই শান্তিটা, তোমার চোখের একটুখানি মায়া - সবকিছুই যেন আমার হৃদয়ে আলাদা করে জায়গা করে নিয়েছে। তুমি আমার জীবনের সেই অধ্যায়, যাকে ছাড়া কোনো গল্পই সম্পূর্ণ হয় না...!
              </p>
              
              <p>
                তুমি চলে গেলে আমার চারপাশের সবকিছু ঠিকঠাক থাকলেও ভিতরে ভিতরে সব কিছু ভেঙে পড়ে। তোমার অনুপস্থিতি শুধু শূন্যতা নয়, এটা যেন একটা নিরব ব্যথা-যেটা আমি কারো সাথে ভাগ করতে পারি না, শুধু নিঃশব্দে বয়ে বেড়াই।
              </p>
              
              <p>
                প্রতিদিন চোখ বন্ধ করলে তোমার মুখটাই ভেসে ওঠে, মনে হয় যেন তুমি ঠিক আমার পাশেই আছো। কিন্তু চোখ খুললেই বাস্তবতার কঠিন দেয়ালটা সামনে এসে দাঁড়ায়।
              </p>
              
              <p className="italic text-secondary-foreground/80">
                তুমি শুধু আমার প্রিয় মানুষ নও...! তুমি আমার অনুভূতির ঠিকানা, আমার ভালোবাসার নীরব প্রতিচ্ছবি, আমার প্রতিদিনের অজানা শক্তি। যদি পারো, এই হৃদয়ের না-বলা কথাগুলো একবার গভীরভাবে অনুভব করো। কারণ সেখানে শুধু "ভালোবাসি" নয়, আছে সারাজীবনের এক নিঃশর্ত প্রতিশ্রুতি।
              </p>
            </div>

            <div className="mt-8 text-right">
              <p className="font-serif text-xl text-secondary-foreground/70 italic">
                ইতি,
              </p>
              <p className="space-y-4 text-secondary-foreground font-serif text-lg md:text-xl leading-relaxed">
                তোমার পূর্ণ উপন্যাসের
              </p>
              <p className="font-serif text-2xl text-primary mt-2">
                --এক অপূর্ণ চরিত্র 
              </p>
            </div>
          </div>
        </div>

        {/* Shadow */}
        <div className="absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-t from-background/50 to-transparent blur-xl -z-10" />
      </div>
    </div>
  );
};

export default Letter;
