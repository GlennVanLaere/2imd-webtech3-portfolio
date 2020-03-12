class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('div');
    newNote.setAttribute("class", "card");
    
    let newP = document.createElement("p");
    newP.innerHTML = title;

    let newB = document.createElement("a");
    newB.innerHTML = "Remove";
    newB.setAttribute("class", "card-remove");
    newB.addEventListener("click", this.saveToStorage);

    newNote.appendChild(newP);
    newNote.appendChild(newB);
    
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
    
    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(this.element);
  }
  
  saveToStorage(){
    let storage = JSON.parse(localStorage.getItem("storage"));

    storage.push(this.title);
    // console.log("were here");
      window.localStorage.setItem("storage", JSON.stringify(storage));

    // location.reload;
  

    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
  
  remove(){
    console.log(this.parentNode);
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element

  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
  
    // pressing the enter key should also work
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
   let text = document.querySelector("#txtAddNote").value;

   var inputArr = [];
   inputArr.push(text);
   
   
    // HINT🤩
    let note = new Note(text);

    note.add();
    note.saveToStorage();
    

    // note.saveToStorage();
    // this.reset();
  }
  
  reset(){
    // this function should reset the form 
  }
  
}

let app = new App();