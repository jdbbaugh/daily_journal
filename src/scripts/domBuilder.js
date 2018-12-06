// let renderJournalEntries = (object) => {
//     let article = document.querySelector('entryLog');
//     article.appendChild(object)
// }


const domBuilder = {
    name: "Dom Builder Component",
    
    appendAllResources (fragmentsObj) {
        let entriesContainer = document.querySelector(".entryLog");
        
        
        entriesContainer.appendChild(fragmentsObj.entry);
        
      }

    };  

    
    



   





// divContainer.appendChild(domComponents.createDomElement("h2", "DATE", null));

      
// divContainer.appendChild(domComponents.createDomElement("h3", "Concept", null));


// divContainer.appendChild(domComponents.createDomElement("p", "mood", null));


// divContainer.appendChild(domComponents.createDomElement("p", "entry", null));