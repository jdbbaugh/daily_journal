
// This module interacts with the API, meaning all fetch calls to the json-server API will be in this module. 

const data = {
    getResources() {
      return fetch("http://localhost:8088/entries")
      // .then(function(response){
      //   response.json();
      // })
      .then(response => response.json());
    },
    saveJournalEntry (entryToSave) {
      fetch("http://localhost:8088/entries", { // Replace "url" with your API's URL
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(entryToSave)
  })
    },
  };
  
   

    
    
    
//because of  API go to 