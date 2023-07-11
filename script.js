const addButton = document.querySelector("#add");

const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = `
       <div class="tools">
          <button class="edit"><i class='bx bxs-edit'></i></button>
          <button class="delete"><i class='bx bxs-trash'></i></button>
       </div>
      
      <div class="main"></div>
      <textarea class=""></textarea>   `;

  note.insertAdjacentHTML("afterbegin", htmlData);
  //console.log("note");
};

addButton.addEventListener("click", () => addNewNote());
