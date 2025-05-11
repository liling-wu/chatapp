export interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
  }
  
  export const predefinedMessages: Message[] = [
    {
      id: '1',
      content: "Fehlfunktion in Saucenstation Nr.1001 erkannt.\nAufgrund der kürzlichen Implementierung ist nur begrenztes Systemwissen verfügbar. Experteninput ist erforderlich, um das Problem zu beheben. Bitte folgen Sie den Fragen und geben Sie die benötigten Informationen an.\nBeschreiben Sie zunächst die Saucenstation Nr.1001 und ihre Hauptfunktion.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '2',
      content: "Die Saucenstation Nr.1001 ist ein automatischer Saucenspender auf der Margherita-Linie. Sie verteilt Tomatensauce gleichmäßig auf jedem Pizzaboden, während dieser sich auf dem Band bewegt.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '3',
      content: "Bitte beschreiben Sie den Aufbau im Detail.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '4',
      content: "Die Saucenstation verwendet eine Düse, die eine vordefinierte Menge Sauce auf den Teig abgibt, um eine gleichmäßige Verteilung sicherzustellen. Der Vorgang ist genau gesteuert, um Konsistenz zu gewährleisten und Verschütten zu vermeiden.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '5',
      content: "Unter welchen Umweltbedingungen arbeitet die Saucenstation?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '6',
      content: "Die Saucenstation arbeitet in einem Raum mit 15 °C und kontrollierter Luftfeuchtigkeit, um die Sauce in optimaler Konsistenz zu halten und Austrocknen zu verhindern. Der Bereich wird häufig gereinigt, wie es die Lebensmittelsicherheitsvorgaben verlangen.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '7',
      content: "Wurden Änderungen an der Konfiguration oder der Umgebung der Saucenstation vorgenommen?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '8',
      content: "Keine gemeldeten Änderungen. Alle Parameter bleiben konstant.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '9',
      content: "Bitte erläutern Sie die Produktanforderungen und spezifischen Betriebsstandards.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '10',
      content: "Die Hauptanforderung ist eine präzise Portionierung. Jede Pizza soll genau 80 Gramm Sauce erhalten, gleichmäßig verteilt. Der Saucenauftrag soll gleichmäßig sein und etwa einen Zentimeter Rand ohne Sauce lassen.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '11',
      content: "Bitte beschreiben Sie den standardmäßigen Saucenauftrag.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '12',
      content: "Sobald ein Pizzaboden eintrifft, erkennt die Saucenstation dessen Position und beginnt, die Sauce von der Mitte aus spiralförmig aufzutragen. Der Sensor passt sich an die Position des Teigs an, um eine gleichmäßige Verteilung sicherzustellen, und stoppt, sobald die Portionierung abgeschlossen ist.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '13',
      content: "Bitte benennen Sie besonders empfindliche Prozesskomponenten.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '14',
      content: "Die Anfangspositionierung und der Ausgabedruck sind entscheidend. Kalibrierfehler können zu Positionsungenauigkeiten oder ungleichmäßiger Verteilung führen.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '15',
      content: "Bitte geben Sie die wichtigsten Komponenten an, auf die sich die Fehlersuche konzentrieren sollte.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '16',
      content: "Wichtige Komponenten sind die Saucendüse, die Druckpumpe, das Sensorsystem zur Erkennung der Pizzaposition und der Durchflussregler. Sensor und Durchflussregler sind besonders wichtig für eine gleichmäßige Verteilung.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '17',
      content: "Identifizieren Sie fehleranfällige Komponenten.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '18',
      content: "Die Düse kann verstopfen, wenn sich Sauce ansammelt, und der Sensor kann manchmal falsch ausgerichtet sein. Der Durchflussregler ist empfindlich gegenüber Veränderungen der Saucenkonsistenz, falls Temperatur oder Luftfeuchtigkeit schwanken.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '19',
      content: "Aktuelle Systemanomalie: Ungleichmäßige Sauceverteilung (Überdosierung in einigen Bereichen, Unterdosierung in anderen). Bitte identifizieren Sie mögliche Ursachen.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '20',
      content: "Mögliche Ursachen sind Sensorfehlstellung, Düsenverstopfung, ungleichmäßiger Pumpendruck oder falsche Kalibrierung des Durchflussreglers.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '21',
      content: "Bitte schlagen Sie erste Diagnoseschritte vor.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '22',
      content: "Beginnen Sie mit einer Sichtprüfung der Düse und des Sensors. Reinigen Sie eventuelle Sauceablagerungen und prüfen Sie die Sensorausrichtung. Führen Sie anschließend einen Test durch, um zu prüfen, ob die Pumpe konstanten Druck liefert.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '23',
      content: "Sekundäre Diagnoseschritte, falls das Problem weiterhin besteht.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '24',
      content: "Prüfen Sie als Nächstes den Durchflussregler. Stellen Sie sicher, dass er an die aktuelle Saucenkonsistenz angepasst ist. Falls dies nicht hilft, sollte eine Neukalibrierung der Ausgabeparameter in Betracht gezogen werden.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '25',
      content: "Muss sonst noch etwas dokumentiert werden?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '26',
      content: "Ein ähnliches Problem trat vor sechs Monaten auf, das letztlich auf ein Service Update zurückzuführen war, welches die Durchflusskalibrierung verändert hatte. Falls alles andere korrekt ist, sollte geprüft werden, ob es kürzlich Softwareänderungen oder Updates gab.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '27',
      content: "Zusammenfassung erstellt:\n• Hauptproblem: Ungleichmäßige Sauceverteilung – einige Pizzen erhalten zu viel, andere zu wenig Sauce.\n• Mögliche Ursachen: Sensorfehlstellung, Düsenverstopfung, Pumpendruckprobleme oder Fehler bei der Durchflusskalibrierung.\n• Empfohlene Schritte:\na. Düse und Sensor prüfen und reinigen.\nb. Pumpe auf gleichmäßigen Druck testen.\nc. Durchflussregler gemäß Saucenkonsistenz einstellen.\nBitte bestätigen Sie, ob alles korrekt ist.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '28',
      content: "Bestätigt.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '29',
      content: "Daten erfolgreich protokolliert. Sitzung beendet.",
      role: 'assistant',
      timestamp: new Date(),
    }
  ];
  