let btn = document.getElementById('btn');
let output = document.getElementById('output');
let images =
    [
        "img/natal1.jpeg",
        "img/natal2.jpeg",
        "img/natal3.jpeg",
    ];

btn.addEventListener('click', function () {
    var randomImages = "<img src='" + images[Math.floor(Math.random() * images.length)] + "'height=480px>";
    output.innerHTML = randomImages;
    this.disabled = "disabled";
})