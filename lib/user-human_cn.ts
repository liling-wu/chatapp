export interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
  }
  
  export const predefinedMessages: Message[] = [
    {
      id: '1',
      content: "Hey, we're having some issues with the Sauce Station Nr.1001 on the pizza line. The sauce application seems to be uneven, and I'm not sure how to fix it. Can you help me with diagnosing the problem?",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '2',
      content: "Of course, Alex! I remember from a similar issue we had before that uneven sauce coverage can happen for a few different reasons. Let's do it step by step. First: have you noticed any specific patterns, like certain areas of the pizza getting too much sauce while others get too little?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '3',
      content: "Yeah, exactly! Some pizzas have too much sauce in the middle, but the edges are almost bare. It's really inconsistent.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '4',
      content: "That sounds like the same issue we had before. When that happened, it turned out that the sensor that detects the pizza position might have been off. Do you think that could be the problem here?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '5',
      content: "Can you check the sensor for me?",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '6',
      content: "Sorry, currently I don't have direct access to the sensor, but I'd be happy to guide you through the checking process if you need.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '7',
      content: "Okay, how do I check if it's off?",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '8',
      content: "You can quickly check the sensor by looking to see if it's positioned properly above the pizza base. Make sure there's nothing blocking it and that it's lined up correctly with the dough as it moves along the line. If it's even a little bit out of place, it could cause the sauce to go uneven.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '9',
      content: "Okay, I'll check that. What if the sensor seems fine?",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '10',
      content: "If the sensor looks good, the next thing to check is the nozzle. Sometimes sauce can build up in the nozzle, which can block the flow and cause uneven coverage. Have you noticed any sauce build-up around the nozzle?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '11',
      content: "I haven't seen anything too obvious, but I'll clean it and see if that helps. What else should I check?",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '12',
      content: "The pressure pump could also be the problem. If the pump isn't giving a steady flow, it might cause the sauce to be uneven. You can check the pressure changes as the sauce is applied.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '13',
      content: "Got it. I'll test the pump after checking the sensor and nozzle.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '14',
      content: "That sounds good! If the pump is working fine, the next thing to check would be the flow regulator. If the sauce thickness has changed—because of temperature or humidity—it might need an adjustment. Does the sauce seem thicker than normal?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '15',
      content: "It does seem a bit thicker. We've had some temperature problems lately, so I'll check if that's affecting the regulator.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '16',
      content: "Well, that could be the cause. The flow regulator is sensitive to temperature, so adjusting it to account for the sauce's consistency should help resolve the problem.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '17',
      content: "Okay, I'll go through all of this and let you know if the problem still persists.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '18',
      content: "You're welcome! One more thing—this same issue happened about nine months ago, and it was caused by a small software update that changed the flow settings. If everything else checks out, it might be worth looking into whether any software changes have been made recently.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '19',
      content: "I'll keep that in mind. Thanks for the help!",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '20',
      content: "No problem, Alex! Also, while you're troubleshooting, I suggest to reduce the line speed for now. Slowing things down temporarily will give Sauce Station more time to apply the sauce evenly. It's not a permanent fix, but it could help maintain quality and prevent any further issues while you troubleshoot.",
      role: 'assistant',
      timestamp: new Date(),
    }
  ]; 