var myObj = { "name":"Jason", "age":30, "car":null };
for (var key in myObj) {
if (myObj.hasOwnProperty(key)) {
console.log(key + ": " + myObj[key]);
}
}