export interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
  }
  
  export const predefinedMessages: Message[] = [
    {
      id: '1',
      content: "Hi, Peter. We're having some issues with the Sauce Station Nr.1001 on the pizza line. Unfortunately, I don't know much about it yet, since it's a new machine. That's why I need your help to better diagnose the problem. Can you tell me what the Sauce Station is mainly used for?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '2',
      content: "Sure thing. Sauce Station Nr.1001 is our automated sauce dispenser on the Margherita line. It's set up to evenly spread tomato sauce over each pizza base as it moves down the line.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '3',
      content: "Yes, that's the one! Could you describe how it's set up?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '4',
      content: "Sauce Station uses a nozzle that releases a pre-measured amount of sauce over the dough, ensuring even coverage. The process is tightly controlled to maintain consistency and prevent spills.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '5',
      content: "Got it. What are the environmental conditions in which the Sauce Station operates?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '6',
      content: "Sauce Station operates in a 15°C room with controlled humidity to keep the sauce at an optimal thickness and to prevent drying out. The area is sanitized frequently, as required by food safety standards.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '7',
      content: "Good to know. Have there been any recent changes in Sauce Station's environment or configuration?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '8',
      content: "Not that I know of. Everything in the room and on the line seems consistent.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '9',
      content: "Alright, that's helpful. Could you explain the main product requirements for Sauce Station's operation? Any specific standards?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '10',
      content: "The main requirement is precise portion control. Each pizza should receive exactly 80 grams of sauce, with even distribution. The sauce layer needs to be consistent, leaving about a centimeter of sauce-free edge around the dough.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '11',
      content: "Thanks. Can you walk me through the standard sauce application process?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '12',
      content: "Sure. As each pizza base arrives, Sauce Station detects its position and starts dispensing from the center, moving out in a spiral motion. The sensor adjusts for the dough's position to make sure the sauce is applied evenly, then shuts off once the portion is complete.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '13',
      content: "Are there any critical steps in this process that are particularly sensitive?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '14',
      content: "Yes, the initial positioning and dispensing pressure are critical. If it isn't calibrated right, sauce might miss the target area or apply unevenly, which can affect the final product quality.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '15',
      content: "That makes sense. Which components should we focus on if we need to troubleshoot?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '16',
      content: "Key components are the sauce nozzle, the pressure pump, the sensor system that detects pizza position, and the flow regulator. The sensor and flow regulator are particularly crucial for consistent application.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '17',
      content: "Noted. Are any of these components more likely to encounter issues?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '18',
      content: "The nozzle can clog if there's sauce buildup, and the sensor can sometimes get misaligned. The flow regulator can also be sensitive to changes in sauce thickness if temperature or humidity fluctuates.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '19',
      content: "We're currently seeing some issues with Sauce Station applying uneven sauce coverage. Some pizzas have too much sauce in one area and barely any in others. Based on your experience, what could be causing this?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '20',
      content: "There could be a few reasons. It might be a misalignment in the sensor, buildup or partial clogging in the nozzle, or even a problem with the pressure pump that's causing inconsistent flow, it could also be incorrect flow regulator calibration.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '21',
      content: "That's very helpful! What would you suggest as the first steps to troubleshoot?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '22',
      content: "Start with a visual inspection of the nozzle and sensor. Clean any sauce buildup and check the sensor alignment. Then, run a test to see if the pump is delivering consistent pressure.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '23',
      content: "If that doesn't solve the problem, what should we look into next?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '24',
      content: "I'd recommend checking the flow regulator next. Make sure it's adjusted to match the sauce's current consistency. If all else fails, a calibration of the dispensing parameters might be needed.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '25',
      content: "Makes sense. Anything else I should keep in mind?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '26',
      content: "Actually, yes. We had a similar issue six months ago, and it turned out to be due to a minor software update that changed the flow calibration. If everything else checks out, it's worth looking into possible recent software changes or updates.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '27',
      content: "Excellent advice! Here's a quick summary of what we discussed:\nMain issue: Uneven sauce distribution, with some pizzas getting too much sauce in certain areas and too little in others.\nPotential causes: Sensor misalignment, nozzle clogging, pump pressure issues, or flow calibration problems.\nRecommended steps:\na. Inspect and clean the nozzle and sensor.\nb. Test the pump for consistent pressure.\nc. Check and adjust the flow regulator based on sauce consistency.\nDoes that sound about right? Or am I missing something?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '28',
      content: "That's correct.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '29',
      content: "Great, I'll save it in our knowledge base. Thank you so much for your time and insights.",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]; 