fetch("http://localhost:3000/entries")
    .then(entries => entries.json())
    .then(parsedEntries => {
        parsedEntries.forEach(entry => {
            const foodAsHTML = makeJournalEntryComponent(entry.date, entry.concept, entry.entry, entry.mood)
        
        })
    });

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

// journalEntries.forEach(deepThought => {
//     makeJournalEntryComponent(deepThought.date, deepThought.concept, deepThought.entry, deepThought.mood);
// });
//journalEntries call End

