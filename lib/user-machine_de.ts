export interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
  }
  
  export const predefinedMessages: Message[] = [
    {
      id: '1',
      content: "Es gibt ein Problem mit der Sauce Station Nr. 1001 in der Pizza-Linie. Die Sauce wird ungleichmäßig aufgetragen.\nIch brauche Unterstützung, um das Problem zu diagnostizieren.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '2',
      content: "Die bestehenden Daten zeigen, dass eine ungleichmäßige Sauce-Verteilung durch verschiedene Faktoren verursacht werden kann. Bitte bestätige, ob es spezifische Muster gibt. Bekommen bestimmte Bereiche der Pizza zu viel Sauce, während andere zu wenig bekommen?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '3',
      content: "Ja, bei einigen Pizzen ist in der Mitte zu viel Sauce, aber an den Rändern ist fast nichts. Es ist wirklich inkonsistent.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '4',
      content: "Basierend auf dem aktuellen Wissensstand könnte das auf ein Problem mit dem Sensor hinweisen, der die Position der Pizza erkennt. Bitte überprüfe, ob der Sensor richtig funktioniert.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '5',
      content: "Kannst du den Sensor überprüfen?",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '6',
      content: "Ein direkter Zugriff auf den Sensor ist nicht möglich. Es kann jedoch eine Inspektionsanleitung bereitgestellt werden. Möchtest du fortfahren?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '7',
      content: "Ja.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '8',
      content: "Überprüfe, ob der Sensor korrekt über der Pizza-Platte ausgerichtet ist, frei von Hindernissen und mit dem Teig auf der Linie ausgerichtet. Eine falsche Ausrichtung kann zu einer ungleichmäßigen Sauce-Verteilung führen.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '9',
      content: "Ich werde das überprüfen. Was, wenn der Sensor in Ordnung zu sein scheint?",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '10',
      content: "Wenn der Sensor in Ordnung ist, überprüfe die Düse auf Ablagerungen. Verstopfte Düsen können den Fluss ungleichmäßig machen. Gibt es sichtbare Sauceansammlungen an der Düse?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '11',
      content: "Es gibt keine offensichtlichen Ablagerungen, aber ich werde die Düse reinigen. Welche anderen Bereiche sollten überprüft werden?",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '12',
      content: "Überprüfe die Druckpumpe. Ein inkonsistenter Fluss aus der Pumpe kann zu einer ungleichmäßigen Sauce-Verteilung führen. Führe einen Test durch, um zu überprüfen, ob der Druck während des Auftragens konstant bleibt.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '13',
      content: "Ich werde die Pumpe testen, nachdem ich den Sensor und die Düse überprüft habe.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '14',
      content: "Wenn die Pumpe korrekt funktioniert, überprüfe den Flussregler. Änderungen der Sauce-Viskosität durch Temperatur oder Luftfeuchtigkeit könnten eine Anpassung erforderlich machen. Ist die Sauce dicker als üblich?",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '15',
      content: "Ja, die Sauce scheint dicker zu sein. Wir hatten Temperaturprobleme. Ich werde prüfen, ob das den Regler beeinflusst.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '16',
      content: "Das könnte die Ursache sein. Der Flussregler ist temperaturempfindlich. Eine Anpassung des Reglers an die Konsistenz der Sauce sollte das Problem beheben.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '17',
      content: "Okay, ich werde die Überprüfungen durchführen und ein Update geben, falls das Problem weiterhin besteht.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '18',
      content: "Ein zusätzlicher Hinweis: Ein ähnliches Problem trat vor etwa neun Monaten auf, weil ein Software-Update die Flusseinstellungen verändert hat. Wenn alle anderen Checks in Ordnung sind, überprüfe bitte die letzten Software-Änderungen.",
      role: 'assistant',
      timestamp: new Date(),
    },
    {
      id: '19',
      content: "Ich werde das untersuchen. Danke.",
      role: 'user',
      timestamp: new Date(),
    },
    {
      id: '20',
      content: "Kein Problem. Als zusätzlichen Vorschlag: Erwäge, die Liniengeschwindigkeit vorübergehend zu reduzieren. Wenn du das Tempo etwas verlangsamen kannst, hat die Sauce-Station mehr Zeit, die Sauce gleichmäßig aufzutragen. Es ist keine dauerhafte Lösung, aber es könnte helfen, die Qualität zu erhalten und weitere Probleme während der Fehlerbehebung zu vermeiden.",
      role: 'assistant',
      timestamp: new Date(),
    }
  ];
  