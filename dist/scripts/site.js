function changeMyDiv(text) {
    var mydiv = document.querySelector("div#mydiv");

    // change attrs
    mydiv.className = "hasan";
    mydiv.classList.add("good");

    // change content
    mydiv.innerHTML = "<p>Hello <b>World</b>"+ text + "</p>" ;

    // change style
    mydiv.style.color = "red";

    mydiv.addEventListener("click", function(e){
        alert("this is dynamic event");
    });
}