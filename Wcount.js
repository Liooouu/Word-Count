function wordCount() {
    var text = document.getElementById("text-area").value;
    var wordCount = text.split(" ").length;
    document.getElementById("nums").innerHTML = "Total Number of Words: " + wordCount;
}