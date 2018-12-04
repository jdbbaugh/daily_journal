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