export interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
  }
  
  export const predefinedMessages: Message[] = [
    {
      id: '1',
      content: "Malfunction in SauceBot Nr.1001 detected.\nInsufficient system knowledge available due to recent implementation. Expert input is required to address this issue. Please follow the questions and provide relevant information needed.\nFirst, describe SauceBot Nr.1001 and its primary function.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '2',
      content: "SauceBot Nr.1001 is an automated sauce dispenser on the Margherita line. It's set up to evenly spread tomato sauce over each pizza base as it moves down the line.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '3',
      content: "Please describe the setup in detail.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '4',
      content: "SauceBot uses a nozzle that releases a pre-measured amount of sauce over the dough, ensuring even coverage. The process is tightly controlled to maintain consistency and prevent spills.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '5',
      content: "What are the environmental conditions in which the SauceBot operates?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '6',
      content: "SauceBot operates in a 15°C room with controlled humidity to keep the sauce at an optimal thickness and to prevent drying out. The area is sanitized frequently, as required by food safety standards.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '7',
      content: "Have any changes been made to SauceBot's configuration or operating environment?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '8',
      content: "No reported changes. All parameters remain consistent.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '9',
      content: "Please clarify the product requirements and specific standards for operation.",
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
      content: "Please describe the standard sauce application process.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '12',
      content: "As each pizza base arrives, SauceBot detects its position and starts dispensing from the center, moving out in a spiral motion. The sensor adjusts for the dough's position to make sure the sauce is applied evenly, then shuts off once the portion is complete.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '13',
      content: "Please identify high-sensitivity process components.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '14',
      content: "The initial positioning and dispensing pressure are critical. Calibration errors may cause positional inaccuracies or uneven application.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '15',
      content: "Please indicate key components for troubleshooting focus.",
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
      content: "Identify components prone to failure.",
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
      content: "Current system anomaly: Uneven sauce distribution (over-application in some areas, under-application elsewhere). Please determine potential causes.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '20',
      content: "Possible causes include sensor misalignment, nozzle obstruction, inconsistent pump pressure, or incorrect flow regulator calibration.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '21',
      content: "Please suggest initial diagnostic steps.",
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
      content: "Secondary diagnostic steps if issue persists.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '24',
      content: "Check the flow regulator next. Make sure it's adjusted to match the sauce's current consistency. If all else fails, a calibration of the dispensing parameters might be needed.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '25',
      content: "Anything else that needs to be documented?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '26',
      content: "There was a similar issue six months ago, and it turned out to be due to a minor software update that changed the flow calibration. If everything else checks out, it's worth looking into possible recent software changes or updates.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '27',
      content: "Summary Generated:\n• Main issue: Uneven sauce distribution, with some pizzas getting too much sauce in certain areas and too little in others.\n• Potential causes: Sensor misalignment, nozzle clogging, pump pressure issues, or flow calibration problems.\n• Recommended steps:\na. Inspect and clean the nozzle and sensor.\nb. Test the pump for consistent pressure.\nc. Check and adjust the flow regulator based on sauce consistency.\nPlease confirm if everything is correct.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '28',
      content: "Confirmed.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '29',
      content: "Data successfully logged. Session ended.",
      role: 'assistant',
      timestamp: new Date(),
    }
  ]; 