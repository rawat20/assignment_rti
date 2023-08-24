window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webKitIndexedDB || window.msIndexedDB

window.IDBTransaction = window.IDBTransaction || window.webKitIDBTransaction || window.msIDBTransaction

window.IDBKeyRange = window.IDBKeyRange || window.webKitIDBKeyRange || window.msIDBKeyRange

if (!window.indexedDB) {
    alert("Browser not support indexDB")
}
 
var db;
const request = window.indexedDB.open("employeeDetails", 1);

request.onerror = (event) => {
    console.log("error " + event.target.result);
}

request.onsuccess = (event) => {
    db = request.result;
    console.log("success ");
}

request.onupgradeneeded = (event) => {
    var db=event.target.result;
    const objectStore = db.createObjectStore("employees")
}