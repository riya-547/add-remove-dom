var add = document.querySelector("#add")
 var istatus = document.querySelector("h5")
 var remove = document.querySelector("#Remove")

var flag = 0;
 add.addEventListener("click", function(){
   if(flag == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "blue"
    add.innerHTML = "Remove Friend"
    add.style.backgroundColor = "#dadada"
    add.style.color = "black"
    add.style.fontWeight = "800"  
    flag = 1;
   }else{
    istatus.innerHTML = " Stranger"
    istatus.style.color = "red"
    add.innerHTML = "Add Friend"
    add.style.backgroundColor = "cadetblue"
    add.style.color = "white"
    flag = 0;
   }
 })

 