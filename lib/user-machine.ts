export interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
  }
  
  export const predefinedMessages: Message[] = [
    {
      id: '1',
      content: "There is an issue with SauceBot Nr.1001 on the pizza line. The sauce application is uneven.\nI need assistance with diagnosing the problem.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '2',
      content: "Existing data showed that uneven sauce coverage can be caused by several factors. Please confirm whether there are specific patterns. Do certain areas of the pizza get too much sauce while others get too little?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '3',
      content: "Yes, some pizzas have too much sauce in the middle, but the edges are almost bare. It's really inconsistent.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '4',
      content: "Based on existing knowledge, this may indicate an issue with the sensor that detects the pizza position. Please verify if the sensor is off.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '5',
      content: "Can you check the sensor?",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '6',
      content: "Direct sensor access is not possible. However, inspection instruction can be provided. Proceed to inspection instruction?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '7',
      content: "Yes.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '8',
      content: "Check if the sensor is aligned properly above the pizza base, free of obstructions, and aligned with the dough on the line. Misalignment may cause uneven sauce distribution.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '9',
      content: "I will check that. What if the sensor appears fine?",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '10',
      content: "If the sensor is fine, inspect the nozzle for any build-up. Blocked nozzles can cause uneven flow. Is there any visible sauce accumulation around the nozzle?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '11',
      content: "There is no obvious build-up, but I will clean the nozzle. What other areas should be checked?",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '12',
      content: "Inspect the pressure pump. Inconsistent flow from the pump can lead to uneven sauce application. Perform a test to check if the pressure remains consistent during application.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '13',
      content: "I will test the pump after checking the sensor and nozzle.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '14',
      content: "If the pump is functioning correctly, proceed to check the flow regulator. Changes in sauce thickness due to temperature or humidity could necessitate an adjustment. Is the sauce thicker than usual?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '15',
      content: "Yes, the sauce seems thicker. We have had temperature problems, I will check if that's affecting the regulator.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '16',
      content: "That could be the cause. The flow regulator is sensitive to temperature, adjusting it to account for the sauce's consistency should help resolve the problem.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '17',
      content: "Okay, I will go through the checks and give an update if the problem persists.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '18',
      content: "One additional point: a similar issue occurred approximately nine months ago due to a software update that altered flow settings. If other checks are normal, consider reviewing recent software changes.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '19',
      content: "I will investigate that. Thanks.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '20',
      content: "No problem. As an additional suggestion, consider reducing the line speed for now. Slowing things down temporarily will give SauceBot more time to apply the sauce evenly. It's not a permanent fix, but it could help maintain quality and prevent any further issues during troubleshooting.",
      role: 'assistant',
      timestamp: new Date(),
    }
  ]; 