export interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
  }
  
  export const predefinedMessages: Message[] = [
    {
      id: '1',
      content: "在披萨生产线上的酱料站1001出现问题。酱料涂布不均匀。\n我需要帮助诊断问题。",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '2',
      content: "现有数据表明，酱料涂布不均匀可能由多种因素引起。请确认是否存在特定的模式。是某些区域的披萨酱料太多，而其他地方的酱料太少吗？",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '3',
      content: "是的，有些披萨中间酱料太多，而边缘几乎没有。非常不一致。",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '4',
      content: "根据现有知识，这可能是传感器检测披萨位置出现问题。请检查传感器是否正常工作。",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '5',
      content: "你能检查一下传感器吗？",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '6',
      content: "无法直接访问传感器。不过，可以提供检查说明。你想继续吗？",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '7',
      content: "是的。",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '8',
      content: "检查传感器是否正确对准披萨基底，确保没有障碍物，并与生产线上的面团对齐。传感器未对准可能导致酱料分布不均匀。",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '9',
      content: "我会检查一下。如果传感器看起来没问题怎么办？",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '10',
      content: "如果传感器正常，检查喷嘴是否有积垢。喷嘴堵塞会导致酱料流量不均匀。喷嘴周围有明显的酱料积聚吗？",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '11',
      content: "没有明显的积垢，但我会清洁喷嘴。还需要检查其他地方吗？",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '12',
      content: "检查压力泵。压力泵的流量不一致可能导致酱料涂布不均。做一个测试，检查涂布过程中压力是否保持一致。",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '13',
      content: "在检查传感器和喷嘴后，我会测试压力泵。",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '14',
      content: "如果泵工作正常，检查流量调节器。由于温度或湿度的变化，酱料的粘度可能需要调整。酱料比平时更浓稠吗？",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '15',
      content: "是的，酱料似乎变得更浓了。我们遇到了一些温度问题，我会检查这是否影响了调节器。",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '16',
      content: "这可能就是原因。流量调节器对温度很敏感，调整它以适应酱料的粘度应该能解决问题。",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '17',
      content: "好的，我会进行检查，并在问题仍然存在时更新进展。",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '18',
      content: "另外，曾经在大约九个月前，出现过类似问题，原因是软件更新改变了流量设置。如果其他检查正常，考虑检查最近的软件变动。",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '19',
      content: "我会调查这个问题，谢谢。",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '20',
      content: "没问题。作为额外建议，考虑暂时降低生产线速度。适当减慢速度可以给酱料站更多时间均匀地涂抹酱料。这不是一个长期解决方案，但在排查问题时，可能有助于保持质量并防止进一步的问题。",
      role: 'assistant',
      timestamp: new Date(),
    }
  ];
  