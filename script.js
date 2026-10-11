const message = document.getElementById("message");
 
message.addEventListener("input", function() {
    const typed = message.value.length;
    const remaining = 200 - typed;
 
    document.getElementById("counter").textContent =
        typed + " / 200 characters";
 
    document.getElementById("remaining").textContent =
        remaining + " characters remaining";
 
    if (remaining === 0) {
        document.getElementById("warning").textContent =
            "Character limit reached!";
    } else {
        document.getElementById("warning").textContent = "";
    }
});