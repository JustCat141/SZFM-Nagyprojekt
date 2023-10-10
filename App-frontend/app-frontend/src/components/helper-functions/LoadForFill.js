export const LoadForFill = (id) => {
    // Return the dummy_data for testing
    return {
      id: "1550",
      title: "Bl-Döntő",
      desc: "Kérdőív leírása. Ez adja meg az egész kérdőívre vonatkozó leírást",
      quests: [
        {
          q_id: "1",
          type: "type",
          question: "Kérdés #1",
          description: "Kérdés leírása. Ez adja meg egy kérdés leírását",
        },
        {
          q_id: "2",
          type: "multiple",
          question: "Kérdés #2",
          description: "Kérdés leírása. Ez adja meg egy kérdés leírását",
          answers: ["Opció #1", "Opció #2", "Opció #3", "Opció #4"],
        },
        {
          q_id: "3",
          type: "one",
          question: "Kérdés #3",
          description: "Kérdés leírása. Ez adja meg egy kérdés leírását",
          answers: ["Opció #1", "Opció #2", "Opció #3", "Opció #4"],
        },
        {
          q_id: "4",
          type: "one",
          question: "Kérdés #4",
          description: "Kérdés leírása. Ez adja meg egy kérdés leírását",
          answers: ["Opció #1", "Opció #2", "Opció #3", "Opció #4"],
        },
        {
          q_id: "5",
          type: "multiple",
          question: "Kérdés #5",
          description: "Kérdés leírása. Ez adja meg egy kérdés leírását",
          answers: ["Opció #1", "Opció #2", "Opció #3", "Opció #4"],
        },
      ],
    };
  };
  