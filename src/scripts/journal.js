
 API.getJournalEntries()
 .then(parsedEntries => {
     parsedEntries.forEach(entry => {
         const foodAsHTML = makeJournalEntryComponent(entry.date, entry.concept, entry.entry, entry.mood)
     
     })
 });




