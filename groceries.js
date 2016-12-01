var myList = [];
window.onload = loadCookieList;

function loadCookieList(){
    var cookieSaver = getCookie("tempCook");
    var arrayCookie = cookieSaver.split(" ");
    for(i = 0; i < arrayCookie.length; i++){
       displayItem(i);
    }
}

function displayItem(iook){
    if(myList.indexOf(iook) == -1){
        myList.push(iook);
        console.log(myList);     
        var item = document.createElement("li"); 
        var itemName = document.createTextNode(iook);
        var btnClose = document.createElement("button");
        var iconClose = document.createElement("span");
    
        btnClose.classList.add("btn");
        btnClose.classList.add("btn-danger");
        btnClose.classList.add("btn-xs");
        iconClose.classList.add("glyphicon");
        iconClose.classList.add("glyphicon-remove");
        btnClose.addEventListener("click", removeParentListItem);

        item.appendChild(itemName);
        btnClose.appendChild(iconClose);
        item.appendChild(btnClose);
        document.getElementById("listDisplay").appendChild(item);
        document.getElementById("newItem").value = " ";
    }
    else{
        console.log("exists");
    }

}

function removeParentListItem() {
    var mom = this.parentNode;
    var grandma = mom.parentNode;
    var itemRemove = mom.firstChild.textContent;
    var itemIndex = myList.indexOf(itemRemove);
    myList.splice(itemIndex,1);
    grandma.removeChild(mom);
    console.log(myList);
}

function addItem(){
    var input = document.getElementById("newItem").value;
    displayItem(input);
}

function saveList(){
    var tempSave = myList.toString();
    setCookie("tempCook",tempSave,1);
    console.log("saved");
}

function clearList(){
  document.getElementById("listDisplay").innerHTML = " ";
  while(myList.length){  
    myList.pop();  
    }  
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
