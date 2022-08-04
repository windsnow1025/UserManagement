document.getElementById("get").onclick = function(){
    axios.get("/UserData").then( res => {
        console.log(res.data);
    })
}
document.getElementById("post").onclick = function(){
    var username = document.getElementById("username").value;
    var passwd = document.getElementById("passwd").value;
    axios.post("/UserData",{
        NewData: {username: username, passwd: passwd}
    }).then( res => {
        console.log(res.data);
    })
}
document.getElementById("delete").onclick = function(){
    var username = document.getElementById("username").value;
    var passwd = document.getElementById("passwd").value;
    var index = 0;
    index = document.getElementById("value").value;
    axios.delete("/UserData/" + index).then( res => {
        console.log(res.data);
    })
}
