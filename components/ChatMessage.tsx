import { Message } from '@/lib/messages';
import { cn } from '@/lib/utils';
import { TypingAnimation } from './TypingAnimation';
import { useState, useEffect } from 'react';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const [displayedContent, setDisplayedContent] = useState('');
  const [isTyping, setIsTyping] = useState(!isUser);
  const [isWaiting, setIsWaiting] = useState(!isUser);

  useEffect(() => {
    if (isUser) {
      setDisplayedContent(message.content);
      setIsTyping(false);
      setIsWaiting(false);
      return;
    }

    // For assistant messages, show typing animation for 1 second before starting to type
    const waitTimer = setTimeout(() => {
      setIsWaiting(false);
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex <= message.content.length) {
          setDisplayedContent(message.content.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(waitTimer);
  }, [message.content, isUser]);

  return (
    <div
      className={cn(
        'flex w-full flex-col',
        isUser ? 'items-end' : 'items-start'
      )}
    >
      <span className="text-sm text-gray-500 mb-1 px-1">
        {isUser ? 'You' : 'Bot'}
      </span>
      <div
        className={cn(
          'flex max-w-[80%] rounded-lg px-4 py-2',
          isUser
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-900'
        )}
      >
        <div className="whitespace-pre-wrap">
          {isWaiting ? (
            <TypingAnimation />
          ) : (
            displayedContent
          )}
        </div>
      </div>
    </div>
  );
}