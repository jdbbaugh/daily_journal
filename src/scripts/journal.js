const journalEntries = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "meh"
    },
    {
        date: "07/28/2018",
        concept: "Objects",
        entry: "We learned about objects today, and my mind wondered about manbearpigs. Half man, half bear, half pig",
        mood: "radical"
    },
    {
        date: "08/9/2018",
        concept: "Loops",
        entry: "Packed my bags last night pre-flight, zero-hour nine AM",
        mood: "furious"
    },
    {
        date: "09/24/2018",
        concept: "Taco Tuesday",
        entry: "discuss the taco.",
        mood: "ecstatic"
    }
];
//Array End

//makeJournalEntryComponent function begin
const makeJournalEntryComponent = (date, concept, entry, mood) => {
    const article = document.querySelector('.entryLog');

    const dateH2 = document.createElement('h2');
    article.appendChild(dateH2);
    dateH2.textContent = concept;

    const dateP = document.createElement('p');
    article.appendChild(dateP);
    dateP.textContent = date;

    const moodP = document.createElement('p');
    article.appendChild(moodP);
    moodP.textContent = mood;

    const entryP = document.createElement('p');
    article.appendChild(entryP);
    entryP.textContent = entry;
};
//makeJournalEntryComponent function End

journalEntries.forEach(deepThought => {
    makeJournalEntryComponent(deepThought.date, deepThought.concept, deepThought.entry, deepThought.mood);
});
//journalEntries call End

