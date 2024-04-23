(() => { 
    let toDoListArray = [];
    let itemId;
    
    const form = document.querySelector(".form"); 
    const input = form.querySelector(".form__input");
    const ul = document.querySelector(".toDoList"); 
  
    // event listener
    form.addEventListener('submit', e => {
      // prevent default behaviour - Page reload
      e.preventDefault();
      // give item a unique ID
      itemId = String(Date.now());
      // get/assign input value and pass through to functions
      let toDoItem = input.value;
      addItemToDOM(toDoItem);
      addItemToArray(toDoItem);
      // clear the input box. (this is default behaviour but we got rid of that)
      input.value = '';
    })
    
    ul.addEventListener('click', e => {
      let id = e.target.getAttribute('data-id')
      if (!id) return // user clicked in something else      
        //pass id through to functions
        removeItemFromDOM(id);
        removeItemFromArray(id);
    })
    
    // functions 
    function addItemToDOM(toDoItem) {    
      // create an li
      const li = document.createElement('li')
      li.setAttribute("data-id", itemId);
      // add toDoItem text to li
      li.innerText = toDoItem
      // add li to the DOM
      ul.appendChild(li);
    }
    function addItemToArray(toDoItem) {
      // add item to array as an object with an ID so we can find and delete it later
      const id = itemId;
      toDoListArray.push({ toDoItem, id });
      console.log(toDoListArray)
   }
    
    function removeItemFromDOM(id) {
      // get the list item by data ID
      var li = document.querySelector('[data-id="' + id + '"]');
      // remove list item
      ul.removeChild(li);
   }
    function removeItemFromArray(id) {
      // create a new toDoListArray with all li's that don't match the ID
      toDoListArray = toDoListArray.filter(item => item.id !== id);
      console.log(toDoListArray);
   }
    
  })();
