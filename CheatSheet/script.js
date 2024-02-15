function loadJSON(callback) {
   var xobj = new XMLHttpRequest();

   xobj.overrideMimeType("application/json");
   xobj.open('GET', './categories.json', true);
   xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == 200) {
         callback(JSON.parse(xobj.responseText));
      }
   };
   xobj.send(null);
}

let collumnsDisplayed = 0;

function Refresh() {
   loadJSON(function(json) {
      var categoryKeys = Object.keys(json);
      
      var categoryAmount = categoryKeys.length;
   
      var test = document.querySelector(".container");
      test.innerHTML = '';
   
      let mainDiv = document.createElement("div");
      mainDiv.className = "box";
   
      let totalCollumns = (window.innerWidth > 1300) ? 4 : (window.innerWidth > 1000) ? 3 : (window.innerWidth > 700) ? 2 : 1;
      let rowsPerCollumn = Math.floor(categoryAmount / totalCollumns);
      let remainderRows = categoryAmount % totalCollumns;
   
      let currentCollumn = 1;
      let lastCollumn = currentCollumn - 1;
      let currentRow = 0;
      let totalRows = 0;
      
      collumnsDisplayed = totalCollumns; 

      for(var category in json) {
         if (totalRows >= categoryAmount) {
            break;
         }
   
         if (lastCollumn < currentCollumn) {
            lastCollumn = currentCollumn
   
            if (remainderRows > 0) {
               remainderRows--;
               currentRow--;
            }
         }
         
         if (currentRow >= rowsPerCollumn) {
            mainDiv = document.createElement("div");
            mainDiv.className = "box";
   
            currentRow = 1;
            currentCollumn++;
         } else {
            currentRow++;
         }
         
         var innerDiv = document.createElement("div");
         innerDiv.className = "inner-box";
   
         var itemDiv = document.createElement("div");
         itemDiv.className = "content";
         itemDiv.textContent = category;
         innerDiv.appendChild(itemDiv);
   
         for(var subcategory in json[category]) {
            var contentDiv = document.createElement("div");
            contentDiv.className = "item";
            contentDiv.textContent = subcategory;
            contentDiv.style.display = "none";
   
            (function(contentDiv) {
               if (json[category][subcategory].Id) {
                  const sub = subcategory
   
                  contentDiv.addEventListener('click', function() {
                     var element = document.getElementById(json[category][sub].Id);
                     
                     if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                     }
                  });
               }
   
               itemDiv.addEventListener('click', function() {
                  contentDiv.style.display = (contentDiv.style.display === "none") ? "block" : "none";
               });
            })(contentDiv);
   
            innerDiv.appendChild(contentDiv);
         }
         
         totalRows += 1;
   
         mainDiv.appendChild(innerDiv);
         test.appendChild(mainDiv);
      }
   });
}

Refresh()

window.addEventListener('resize', function() {
   const displayCollumns = (window.innerWidth > 1300) ? 4 : (window.innerWidth > 1000) ? 3 : (window.innerWidth > 700) ? 2 : 1;

   if (displayCollumns != collumnsDisplayed) {
      Refresh()
   }
}); 