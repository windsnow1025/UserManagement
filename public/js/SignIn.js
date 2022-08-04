document.getElementById("signin").onclick = function(){
    var username = document.getElementById("username").value;
    var passwd = document.getElementById("passwd").value;
    var isMatch = 0;
    axios.get("/UserData").then( res => {
        for (let i = 0; i < res.data.length; i++) {
            if (username == res.data[i].username && passwd == res.data[i].passwd) {
                isMatch = 1;
            }
        }
        if (isMatch == 1) {
            console.log("Login Success");
        } else {
            console.log("Login Failure");
        }
    })
}

document.getElementById("signup").onclick = function(){
    var username = document.getElementById("username").value;
    var passwd = document.getElementById("passwd").value;
    axios.post("/UserData",{
        NewData: {username: username,passwd: passwd}
    }).then( res => {
        console.log("Sign Up Success");
    })
}
