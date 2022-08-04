document.getElementById("login").onclick = function(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var isMatch = 0;
    axios.get("/userdata").then( res => {
        for (let i = 0; i < res.data.length; i++) {
            if (username == res.data[i].username && password == res.data[i].password) {
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
    var password = document.getElementById("password").value;
    axios.post("/userdata",{
        newdata: {username,password}
    }).then( res => {
        console.log("Sign Up Success");
    })
}
