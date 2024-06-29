//selecting popup box popup overlay button
var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");
var addpopupbutton=document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
});

//select cancel button
var cancelpopup=document.getElementById("cancel-popup");
cancelpopup.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";
});

// selecting container, add-book, book-title-input,book-author-input,book-description-input
var container=document.querySelector(".container");
var addbook=document.getElementById("add-book");
var addbooktitle=document.getElementById("book-title-input");
var addbookauthor=document.getElementById("book-author-input");
var addbookdescription=document.getElementById("book-description-input");

addbook.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=`<h2>${addbooktitle.value}</h2>
    <h5>${addbookauthor.value}</h5>
    <p>${addbookdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div);
    popupoverlay.style.display="none";
    popupbox.style.display="none";

    // Clear input fields after adding the book
    addbooktitle.value = '';
    addbookauthor.value = '';
    addbookdescription.value = '';
});

function deletebook(event){
      event.target.parentElement.remove();
}