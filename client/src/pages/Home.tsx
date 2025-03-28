import { useState } from "react";
import Logo from "@/components/Logo";
import ConversationCard from "@/components/ConversationCard";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { RefreshCw, MessageSquare, Plus, Smartphone } from "lucide-react";
import { questions } from "@/data/questions";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState<string>(
    "If you could instantly become an expert in something, what would it be?"
  );
  const [fadeOut, setFadeOut] = useState(false);

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  const handleNewQuestion = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentQuestion(getRandomQuestion());
      setFadeOut(false);
    }, 300);
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Logo and Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-60 mb-4">
            <Logo />
          </div>
          <h1 className="text-4xl font-bold text-center text-[#1E1E1E] mt-2">Conversation Starter</h1>
          <p className="text-gray-600 mt-1">Break the ice at your next social gathering</p>
        </div>

        {/* Conversation Starter Card */}
        <ConversationCard question={currentQuestion} fadeOut={fadeOut} />

        {/* Button */}
        <div className="flex justify-center mb-12">
          <Button 
            onClick={handleNewQuestion}
            className="bg-primary hover:bg-primary/90 text-white py-6 px-6 rounded-full flex items-center font-semibold h-auto"
          >
            <RefreshCw className="h-5 w-5 mr-2" />
            New Conversation Starter
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<MessageSquare className="h-6 w-6 text-primary" />}
            title="50+ Conversation Starters"
            description="Diverse collection of icebreakers for any social situation"
          />
          <FeatureCard 
            icon={<Plus className="h-6 w-6 text-primary" />}
            title="One-Click Generation"
            description="Simple interface to quickly get a new conversation starter"
          />
          <FeatureCard 
            icon={<Smartphone className="h-6 w-6 text-primary" />}
            title="Mobile Friendly"
            description="Works perfectly on all devices, take it to your next event"
          />
        </div>
      </div>
    </div>
  );
}
