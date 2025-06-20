fetch("../Nav-bar/index.html")
    .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;
    })
      .catch(error => {
        console.error("Failed to load navbar:", error);
    });
 
function wordCount() {
     const text = document.getElementById("text-area").value;
    const wordCount = text.trim().split(/\s+/);
    document.getElementById("nums").innerHTML = "Total Number of Words: " + wordCount.length;
    
}

function resetFields() {
    document.getElementById("text-area").value = "";
    document.getElementById("nums").innerHTML= "";
}

const textArea = document.getElementById("text-area");
const sound = document.getElementById("key-sound");

textArea.addEventListener("keydown",() => {
    sound.currentTime = 0;
    sound.play();

});

