'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8">
          <div className="animate-bounce">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-2xl sm:text-3xl text-white">🚀</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent px-2 items-center justify-center text-center">
            Something Amazing is Coming
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            We're working on something exciting! IrvinTechSolution is crafting innovative solutions
            to revolutionize your business analytics experience.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 my-8 sm:my-12 px-2">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((unit) => (
              <div key={unit.label} className="w-[70px] h-[70px] sm:w-24 sm:h-24 bg-background rounded-lg shadow-lg flex flex-col items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-purple-600">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground">{unit.label}</span>
              </div>
            ))}
          </div>

          <div className="max-w-md mx-auto space-y-4 px-2">
            <h3 className="text-lg sm:text-xl font-semibold">Get Notified When We Launch</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 w-full sm:w-auto">
                Notify Me
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <Button 
                key={social} 
                variant="ghost" 
                className="hover:text-purple-600 text-sm sm:text-base"
              >
                {social}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
