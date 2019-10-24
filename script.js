function slideText() {
    $("#logo").css({ height: "100%" }).animate({ height: "60%",  opacity: 1 }, 200);
    $("#htext1").css({ marginLeft: "100%" }).animate({ opacity: 1, marginLeft: "0" }, 500);
    $("#htext2").delay(300).css({ marginRight: "100%" }).animate({ opacity: 1, marginRight: "0" }, 500);
    $("#htext3").delay(700).css({ marginTop: "10%" }).animate({ opacity: 1, marginTop: "0" }, 300);
    $("#arrowDown").delay(1100).animate({ opacity: 1 }, 400);
}

document.body.onload = slideText();

$("#arrowDown").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#wrapper").offset().top
    }, 700);
});

var hogwartsImages = [
    "img/hogwarts1.png",
    "img/hogwarts2.png",
    "img/hogwarts3.png",
    "img/hogwarts4.png",
    "img/hogwarts5.png",
    "img/hogwarts6.png",
];

var websiteImages = [
    "img/website1.png",
    "img/website2.png",
    "img/website3.png",
    "img/website4.png"
];

var dungeonsImages = [
    "img/dungeons1.png",
    "img/dungeons2.png",
    "img/dungeons3.png",
    "img/dungeons4.png",
];

var csharpImages = [
    "img/project3.jpg",
    "img/project1.jpg",
    "img/project2.jpg"
];

$("#hogwartsImagesRight").click(function() {
    var hogwartsImage = document.getElementById("hogwartsImages").getAttribute("src");

    for (i = 0; i < hogwartsImages.length; i++) {
        if (hogwartsImage == hogwartsImages[i]) {
            var image = hogwartsImages[i];
            var imageIndex = hogwartsImages.indexOf(image)+1;
            document.getElementById("hogwartsImages").setAttribute("src", hogwartsImages[imageIndex]);
            if (i == 5) {
                document.getElementById("hogwartsImages").setAttribute("src", hogwartsImages[0]);     
            }  
        }
    }
});

$("#hogwartsImagesLeft").click(function() {
    var hogwartsImage = document.getElementById("hogwartsImages").getAttribute("src");

    for (i = 0; i < hogwartsImages.length; i++) {
        if (hogwartsImage == hogwartsImages[i]) {
            var image = hogwartsImages[i];
            var imageIndex = hogwartsImages.indexOf(image)-1;
            document.getElementById("hogwartsImages").setAttribute("src", hogwartsImages[imageIndex]);  
            if (i == 0) {
                document.getElementById("hogwartsImages").setAttribute("src", hogwartsImages[5]);     
            }  
        }
    }
});

$("#websiteImagesRight").click(function() {
    var websiteImage = document.getElementById("websiteImages").getAttribute("src");

    for (i = 0; i < websiteImages.length; i++) {
        if (websiteImage == websiteImages[i]) {
            var image = websiteImages[i];
            var imageIndex = websiteImages.indexOf(image)+1;
            document.getElementById("websiteImages").setAttribute("src", websiteImages[imageIndex]);  
            if (i == 3) {
                document.getElementById("websiteImages").setAttribute("src", websiteImages[0]);     
            }  
        }
    }
});

$("#websiteImagesLeft").click(function() {
    var websiteImage = document.getElementById("websiteImages").getAttribute("src");

    for (i = 0; i < websiteImages.length; i++) {
        if (websiteImage == websiteImages[i]) {
            var image = websiteImages[i];
            var imageIndex = websiteImages.indexOf(image)-1;
            document.getElementById("websiteImages").setAttribute("src", websiteImages[imageIndex]);  
            if (i == 0) {
                document.getElementById("websiteImages").setAttribute("src", websiteImages[3]);     
            }  
        }
    }
});

$("#dungeonImagesRight").click(function() {
    var dungeonImage = document.getElementById("dungeonsImages").getAttribute("src");

    for (i = 0; i < dungeonsImages.length; i++) {
        if (dungeonImage == dungeonsImages[i]) {
            var image = dungeonsImages[i];
            var imageIndex = dungeonsImages.indexOf(image)+1;
            document.getElementById("dungeonsImages").setAttribute("src", dungeonsImages[imageIndex]);  
            if (i == 3) {
                document.getElementById("dungeonsImages").setAttribute("src", dungeonsImages[0]);     
            }  
        }
    }
});

$("#dungeonImagesLeft").click(function() {
    var websiteImage = document.getElementById("dungeonsImages").getAttribute("src");

    for (i = 0; i < dungeonsImages.length; i++) {
        if (websiteImage == dungeonsImages[i]) {
            var image = dungeonsImages[i];
            var imageIndex = dungeonsImages.indexOf(image)-1;
            document.getElementById("dungeonsImages").setAttribute("src", dungeonsImages[imageIndex]);  
            if (i == 0) {
                document.getElementById("dungeonsImages").setAttribute("src", dungeonsImages[3]);     
            }  
        }
    }
});

$("#csharpImagesRight").click(function() {
    var csharpImage = document.getElementById("csharpImages").getAttribute("src");

    for (i = 0; i < csharpImages.length; i++) {
        if (csharpImage == csharpImages[i]) {
            var image = csharpImages[i];
            var imageIndex = csharpImages.indexOf(image)+1;
            document.getElementById("csharpImages").setAttribute("src", csharpImages[imageIndex]);  
            if (i == 2) {
                document.getElementById("csharpImages").setAttribute("src", csharpImages[0]);     
            }  
        }
    }
});

$("#csharpImagesLeft").click(function() {
    var csharpImage = document.getElementById("csharpImages").getAttribute("src");

    for (i = 0; i < csharpImages.length; i++) {
        if (csharpImage == csharpImages[i]) {
            var image = csharpImages[i];
            var imageIndex = csharpImages.indexOf(image)-1;
            document.getElementById("csharpImages").setAttribute("src", csharpImages[imageIndex]);  
            if (i == 0) {
                document.getElementById("csharpImages").setAttribute("src", csharpImages[2]);     
            }  
        }
    }
});