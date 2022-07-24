let button = document.querySelector("button");
button.addEventListener("click", addMessage);

function addMessage() {
    let message = document.querySelector(".messages").value;
    checkSpam(message);
    document.querySelector(".messages").value = " ";
    
    function checkSpam(str) {
        let newstr = str.replace(/viagra/gi, "***");
        let finalstr = newstr.replace(/XXX/gi, "***");
        document.querySelector(".result").innerHTML += finalstr + "<br/>";
    }
}