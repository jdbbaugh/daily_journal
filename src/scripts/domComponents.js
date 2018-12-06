
// This module is responsible for appending DOM components to the DOM.

const domComponents = {
    createDomElement (elementType, content, cssClass) {
      const element = document.createElement(elementType);
      element.textContent = content;
      if(cssClass) {
        element.classList.add(cssClass);
      }
      return element;
    },
    createResourcesDocumentFragments(resourcesArray) {
  
        let domFragments ={
             entry: document.createDocumentFragment()
            }
            
    
      resourcesArray.forEach(resourceObj => {
        //   console.log(resourceObj.concept)
        const resourceSection = this.createDomElement("section", null, "resource-section");
        const linkElement = this.createDomElement("h2", resourceObj.concept, null);
        const entryDate = this.createDomElement("section", resourceObj.date, null);
        const mood = this.createDomElement('p', resourceObj.mood, null);
        const entry = this.createDomElement('p', resourceObj.entry, null);
        resourceSection.qppendChild(linkElement);
        resourceSection.qppendChild(entryDate);
        resourceSection.qppendChild(mood);
        resourceSection.qppendChild(entry);

        domFragments.appendChild(resourceSection);
        
        

      });
    
      return domFragments;
      }
  };