export const LoadForAnalyze = id => {
    //implementation of loading for analyzers

    //dummy_data
    const dummy_data = {
        title: "Bl-Döntő",
        desc: "Kérdőív leírása. Ez adja meg az egész kérdőívre vonatkozó leírást",
        quests: [
            {
                q_id: "1",
                type: "type",
                question: "Kérdés #1",
                given_answrs: [
                    "Answer #1",
                    "Answer #2",
                    "Answer #3",
                    "Answer #4",
                    "Answer #5",
                ]
            },
            {
                q_id: "2",
                type: "multiple",
                question: "Kérdés #2",
                answers: ["Opció #1", "Opció #2", "Opció #3", "Opció #4"],
                given_answrs: [
                    2,
                    15,
                    9,
                    17,
                ]
            },
            {
                q_id: "3",
                type: "one",
                question: "Kérdés #3",
                answers: ["Opció #1", "Opció #2", "Opció #3", "Opció #4"],
                given_answrs: [
                    2,
                    5,
                    9,
                    7,
                ]
            },
        ],

    };


    return dummy_data;
}
