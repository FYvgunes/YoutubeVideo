const addbutton = document.querySelector(".addbutton");
var input = document.querySelector(".input");
const container = document.querySelector(".container");

class item {
    constructor(itembox) {
        this.createDiv(itembox);
    }
    createDiv(itemName) {
        let input = document.createElement("input");
        input.type = "text";
        input.disabled = true;
        input.value = itemName
        input.classList.add("item_input");

        let itembox = document.createElement("div");
        itembox.classList.add("item");

        let editButton = document.createElement("button");
        editButton.innerText = "Düzenle";
        editButton.classList.add("editbutton");


        let removebutton = document.createElement("button");
        removebutton.innerText = "Sil";
        removebutton.classList.add("removebutton");

        container.appendChild(itembox);
        itembox.appendChild(input);
        itembox.appendChild(editButton);
        itembox.appendChild(removebutton);

        editButton.addEventListener("click",() => this.edit(input));
        removebutton.addEventListener("click",() => this.remove(itembox));

        




    }
    edit(item){
        item.disabled =! item.disabled;
    }
    remove(input){
       container.removeChild(input);
    }

}

function check() {
    if(input.value != ""){
    
        new item(input.value);
        input.value="";
    }

}
addbutton.addEventListener("click",check);
window.addEventListener("keydown",(e)=>{
    if(e.which==13){
        check();
    }
})
