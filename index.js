let container = document.createElement("div");
container.classList.add("container");
container.innerHTML += `<div class="result"></div>
<label for="messages"><input class="messages" type="text" id="messages" placeholder="Введите сообщение" /></label>
<button>Отправить</button>`;
document.body.append(container);

let button = document.querySelector("button");
button.addEventListener("click", addMessage);

function addMessage() {
    let message = document.querySelector(".messages").value;
    
    if (message !== "") {
        checkSpam(message);
        document.querySelector(".messages").value = "";
    }
    else {
        return 0;
    }
    function checkSpam(str) {
        let finalstr = str.replace(/viagra|XXX/gi, "***");
        document.querySelector(".result").innerHTML += finalstr + "<br/>";
    }
}