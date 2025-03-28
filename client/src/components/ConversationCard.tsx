import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ConversationCardProps {
  question: string;
  fadeOut: boolean;
}

export default function ConversationCard({ question, fadeOut }: ConversationCardProps) {
  return (
    <Card className="bg-white rounded-lg shadow-md p-8 mb-10">
      <div 
        className={cn(
          "text-center text-2xl font-semibold text-[#1E1E1E] py-8 transition-opacity duration-300",
          fadeOut ? "opacity-0" : "opacity-100"
        )}
      >
        {question}
      </div>
    </Card>
  );
}
