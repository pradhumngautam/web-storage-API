/* web storage:-
1 session storage:- which stores data for a session means until our browser is open.
2 local storage:- which stores data permanently means after reopening the browser we will find our data.
*/
const myArray = ["eat", "sleep", "code"];
const myObject = {
    name :"Dev",
    hobbies:["eat", "sleep", "code"],
    logName: function(){
        console.log(this.name);
    }

} 
sessionStorage.setItem("mySessionStore",myObject);
const mySessionData = sessionStorage.getItem("mySessionStore");
console.log(mySessionData); //[Object Object] so we didnt get get required data of object


/*
sessionStorage.setItem("mySessionStore",myArray);
const mySessionData = sessionStorage.getItem("mySessionStore");
console.log(mySessionData); // eat,sleep,code */
//so for getting our requred data we use JSON 

sessionStorage.setItem("mySessionStore",JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData); // {name: "dev", hobbies: Array(3)} so we get requred form but it didnt include function

//Local Storage;
localStorage.setItem("myLocalStore",JSON.stringify(myArray));
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);// ["eat","sleep","code"] similar syntax 
//remove item
localStorage.setItem("myLocalStore",JSON.stringify(myArray));
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
localStorage.removeItem("myLocalStore")
//or
localStorage.clear()
localStorage.clear("myLocalStore");
console.log(myLocalData);
//get the key at specific index
localStorage.setItem("myLocalStore",JSON.stringify(myArray));
const key = localStorage.key(0);
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(key); //myLocalStore

//tp find length
localStorage.setItem("myLocalStore",JSON.stringify(myArray));
const storeLength = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(storeLength);// 1
