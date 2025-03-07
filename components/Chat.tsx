'use client';

import { useEffect, useState, useRef } from 'react';
import { Message, predefinedMessages } from '@/lib/messages';
import { ChatMessage } from './ChatMessage';
import { cn } from '@/lib/utils';

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedContent, setDisplayedContent] = useState('');
  const [isInputEnabled, setIsInputEnabled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    adjustTextareaHeight();
  }, [displayedContent]);

  useEffect(() => {
    if (currentIndex < predefinedMessages.length) {
      const message = predefinedMessages[currentIndex];
      
      if (message.role === 'assistant') {
        setMessages((prev) => [...prev, message]);
        
        const readingTime = Math.max(2000, message.content.length * 50);
        
        const timer = setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
        }, readingTime);
        
        return () => clearTimeout(timer);
      } else {
        const startTimer = setTimeout(() => {
          setIsInputEnabled(true);
          let currentIndex = 0;
          
          const typingInterval = setInterval(() => {
            if (currentIndex <= message.content.length) {
              setDisplayedContent(message.content.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(typingInterval);
            }
          }, 30);

          return () => clearInterval(typingInterval);
        }, 1000);

        return () => clearTimeout(startTimer);
      }
    }
  }, [currentIndex]);

  const handleSendMessage = () => {
    if (!displayedContent.trim() || !isInputEnabled) return;

    const currentMessage = predefinedMessages[currentIndex];
    setMessages((prev) => [...prev, currentMessage]);
    setDisplayedContent('');
    setIsInputEnabled(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-[600px] w-full max-w-3xl flex-col shadow-lg">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t p-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={displayedContent}
              readOnly
              placeholder="Type your message..."
              className="w-full resize-none rounded-lg border p-2 pr-10 bg-gray-50 min-h-[40px] max-h-[200px] overflow-y-auto"
              style={{ height: 'auto' }}
              rows={1}
            />
            <button
              onClick={handleSendMessage}
              disabled={!isInputEnabled || !displayedContent.trim()}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md transition-colors",
                isInputEnabled && displayedContent.trim()
                  ? "text-blue-500 hover:bg-blue-50"
                  : "text-gray-300"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2 21l21-9L2 3v7l15 2-15 2v7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}