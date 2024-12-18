"use client";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from "ai/react";
import { useState } from "react";

export function Chat() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    setInput,
  } = useChat();
  const [isTyping, setIsTyping] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsTyping(true);
    handleSubmit(e);
    setIsTyping(false);
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <Card className="shadow-xl rounded-none sm:rounded-xl w-[100%] sm:w-[85%] md:w-[70%] lg:w-[50%] h-screen sm:h-[95vh]">
      <CardContent className="h-[85vh] p-4 sm:h-[85vh]">
        <ScrollArea className="pr-4 h-full">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`rounded-2xl px-3 py-2 max-w-[80%] ${
                  m.role === "user"
                    ? "bg-[#f3b06d] text-gray-800"
                    : "bg-[#edd4bb] text-gray-800"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 text-gray-800 rounded-lg p-3">
                Typing...
              </div>
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t p-4 h-[15vh] sm:h-[10vh] sm:rounded-xl bg-[#fcfbfa] shadow-xl ">
        <form onSubmit={handleFormSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ceritain aja"
            className="flex-grow placeholder:text-gray-300 focus-visible:ring-0"
          />
          <Button
            type="submit"
            className="justify-center items-center bg-[#785028] text-white"
          >
            <Send />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
