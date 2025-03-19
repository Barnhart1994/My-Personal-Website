// hello world
console.log("Hello, World!");

document.addEventListener("DOMContentLoaded", function () {
    const message = document.createElement("p");
    message.textContent = "Hello, World! This is a JavaScript routine.";
    message.style.fontSize = "18px";
    message.style.fontWeight = "bold";
    message.style.color = "blue";
    
    // Append the message to the body
    document.body.appendChild(message);
});