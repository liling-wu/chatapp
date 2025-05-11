export interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
  }
  
  export const predefinedMessages: Message[] = [
    {
      id: '1',
      content: "Hallo Peter. Wir haben ein paar Probleme mit der Sauce Station Nr.1001 auf der Pizzalinie. Leider kenne ich mich damit noch nicht gut aus, da sie neu ist. Deshalb brauche ich deine Hilfe, um das Problem besser zu diagnostizieren. Kannst du mir sagen, wofür die Sauce Station hauptsächlich verwendet wird?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '2',
      content: "Klar. Die Sauce Station Nr.1001 ist unser automatischer Soßenspender auf der Margherita-Linie. Sie ist dafür eingerichtet, die Tomatensoße gleichmäßig auf jedem Pizzaboden zu verteilen, während er die Linie entlangläuft.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '3',
      content: "Ja, genau die meine ich! Kannst du beschreiben, wie sie aufgebaut ist?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '4',
      content: "Die Sauce Station verwendet eine Düse, die eine vordosierte Menge Soße auf den Teig aufträgt, um eine gleichmäßige Verteilung zu gewährleisten. Der Prozess ist streng kontrolliert, um Konsistenz sicherzustellen und Verschütten zu vermeiden.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '5',
      content: "Verstanden. Unter welchen Umgebungsbedingungen arbeitet die Sauce Station?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '6',
      content: "Die Sauce Station arbeitet in einem Raum mit 15°C und kontrollierter Luftfeuchtigkeit, um die optimale Konsistenz der Soße zu gewährleisten und ein Austrocknen zu verhindern. Der Bereich wird regelmäßig gereinigt, wie es die Lebensmittelsicherheitsstandards verlangen.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '7',
      content: "Gut zu wissen. Gab es in letzter Zeit Änderungen in der Umgebung oder Konfiguration der Sauce Station?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '8',
      content: "Soweit ich weiß nicht. Alles im Raum und an der Linie scheint gleich geblieben zu sein.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '9',
      content: "Alles klar, das hilft weiter. Kannst du die Hauptanforderungen für den Betrieb der Sauce Station erklären? Gibt es bestimmte Standards?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '10',
      content: "Die wichtigste Anforderung ist eine präzise Portionskontrolle. Jede Pizza soll genau 80 Gramm Soße erhalten, gleichmäßig verteilt. Der Soßenauftrag muss gleichmäßig sein und etwa einen Zentimeter Rand ohne Soße lassen.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '11',
      content: "Danke. Kannst du mir den Standardprozess für das Auftragen der Soße erklären?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '12',
      content: "Klar. Sobald der Pizzaboden ankommt, erkennt die Sauce Station seine Position und beginnt mit dem Auftragen von der Mitte aus in einer Spiralbewegung. Der Sensor passt sich der Position des Teigs an, um eine gleichmäßige Verteilung zu gewährleisten, und schaltet sich ab, sobald die Portion vollständig ist.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '13',
      content: "Gibt es kritische Schritte in diesem Prozess, die besonders empfindlich sind?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '14',
      content: "Ja, die anfängliche Positionierung und der Druck beim Auftragen sind entscheidend. Wenn die Kalibrierung nicht stimmt, kann die Soße daneben gehen oder ungleichmäßig aufgetragen werden, was die Produktqualität beeinträchtigt.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '15',
      content: "Das leuchtet ein. Auf welche Komponenten sollten wir uns konzentrieren, wenn wir eine Fehleranalyse durchführen?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '16',
      content: "Wichtige Komponenten sind die Soßendüse, die Druckpumpe, das Sensorsystem zur Erkennung der Pizzaposition und der Durchflussregler. Sensor und Durchflussregler sind besonders wichtig für eine gleichmäßige Anwendung.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '17',
      content: "Verstanden. Welche dieser Komponenten neigt am ehesten zu Problemen?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '18',
      content: "Die Düse kann verstopfen, wenn sich Soßenreste ansammeln, und der Sensor kann manchmal falsch ausgerichtet sein. Der Durchflussregler reagiert empfindlich auf Veränderungen der Soßenkonsistenz, insbesondere bei Temperaturschwankungen oder variierender Luftfeuchtigkeit.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '19',
      content: "Aktuell haben wir das Problem, dass die Sauce Station die Soße ungleichmäßig aufträgt. Einige Pizzen haben zu viel Soße an einer Stelle und kaum welche an anderen. Was könnte deiner Erfahrung nach die Ursache sein?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '20',
      content: "Es könnte mehrere Gründe geben. Möglicherweise ist der Sensor falsch ausgerichtet, die Düse ist teilweise verstopft, oder die Pumpe liefert keinen gleichmäßigen Druck. Es könnte auch sein, dass der Durchflussregler nicht korrekt kalibriert ist.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '21',
      content: "Das ist sehr hilfreich! Was würdest du als erste Schritte zur Fehlersuche empfehlen?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '22',
      content: "Zuerst eine Sichtprüfung der Düse und des Sensors. Soßenreste entfernen und die Sensor-Ausrichtung überprüfen. Danach einen Testlauf machen, um zu prüfen, ob die Pumpe gleichmäßigen Druck liefert.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '23',
      content: "Wenn das Problem dadurch nicht gelöst wird, was sollten wir uns als Nächstes ansehen?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '24',
      content: "Ich würde als Nächstes den Durchflussregler überprüfen. Sicherstellen, dass er an die aktuelle Konsistenz der Soße angepasst ist. Wenn das alles nichts bringt, könnte eine Neukalibrierung der Dosierparameter notwendig sein.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '25',
      content: "Klingt sinnvoll. Gibt es sonst noch etwas, worauf ich achten sollte?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '26',
      content: "Ja, tatsächlich. Wir hatten vor sechs Monaten ein ähnliches Problem, das auf ein Service Update zurückzuführen war, das die Durchflusskalibrierung verändert hat. Wenn sonst alles in Ordnung ist, lohnt sich ein Blick auf mögliche aktuelle Softwareänderungen oder Updates.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '27',
      content: "Ausgezeichnete Hinweise! Hier eine kurze Zusammenfassung:\nHauptproblem: Ungleichmäßige Soßenverteilung – manche Pizzen haben zu viel Soße an bestimmten Stellen, andere zu wenig.\nMögliche Ursachen: Falsche Sensorausrichtung, verstopfte Düse, Probleme mit dem Pumpendruck oder fehlerhafte Kalibrierung des Durchflussreglers.\nEmpfohlene Schritte:\na. Düse und Sensor inspizieren und reinigen.\nb. Pumpe auf gleichmäßigen Druck testen.\nc. Durchflussregler entsprechend der Soßenkonsistenz überprüfen und anpassen.\nKlingt das korrekt, oder habe ich etwas übersehen?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '28',
      content: "Das ist korrekt.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '29',
      content: "Super, ich speichere das in unserer Wissensdatenbank. Vielen Dank für deine Zeit und deine Einschätzungen.",
      role: 'assistant',
      timestamp: new Date(),
    },
  ];
  