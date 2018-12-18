
data.getResources()
.then(resourcesArray => {
  // console.log(resourcesArray);
  let resourcesFragments = domComponents.createResourcesDocumentFragments(resourcesArray);
  // console.log(resourcesFragments);
  domBuilder.appendAllResources(resourcesFragments);
});

const saveButton = document.querySelector("button");
saveButton.addEventListener("click", function () {
  const journalDate = document.getElementById("journalDate");
  const journalConcept = document.getElementById("journalConcept");
  const journalEntry = document.getElementById("journalEntry");
  let moodSelect = document.getElementById("moods");
  let moodValue = moodSelect.options[moodSelect.selectedIndex].text;
  
  
  if (!journalConcept.checkValidity()) {
    alert("Concept was left blank.... try again")
  } else {
    const entryObject = {
      date: journalDate.value,
      concept: journalConcept.value,
      entry: journalEntry.value,
      mood: moodValue
    }
    // console.log(entryObject)
    data.saveJournalEntry(entryObject)
  }
});
