function slideText() {
    $("#logo").animate({ opacity: 1 }, 1000);
    $("#htext1").delay(100).css({ marginTop: "100px" }).animate({ opacity: 1, marginTop: "0" }, 500);
    $("#htext2").delay(400).css({ marginTop: "100px" }).animate({ opacity: 1, marginTop: "0" }, 400);
    $("#headerArrow").delay(700).animate({ opacity: 1 }, 300);
}
document.body.onload = slideText();

$("#adobeinfo").mouseover(function() {
    $("#adobeBox").stop().css({ display: "block" });
});

$("#adobeinfo").mouseleave(function() {
    $("#adobeBox").stop().css({ display: "none" });
});

$("#languageinfo").mouseover(function() {
    $("#languageBox").stop().css({ display: "block" });
});

$("#languageinfo").mouseleave(function() {
    $("#languageBox").stop().css({ display: "none" });
});

$("#headerArrow").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 700);
});

$("#profileArrow").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#wrapper").offset().top
    }, 700);
});

$("button").mouseover(function() {
    $(this).stop().animate({ "background-position-x": "0px" }, 250);
});

$("button").mouseleave(function() {
    $(this).stop().animate({ "background-position-x": "-540px" }, 300);
});

var hogwartsImages = [
    "img/hogwarts1.png",
    "img/hogwarts2.png",
    "img/hogwarts3.png",
    "img/hogwarts4.png",
    "img/hogwarts5.png",
    "img/hogwarts6.png",
    "img/hogwarts7.png",
    "img/hogwarts8.png",
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
    "img/project3.jpg",
    "img/project3.jpg"
];

$("#hogwartsImagesRight").click(function() {
    var hogwartsImage = document.getElementById("hogwartsImages").getAttribute("src");

    for (i = 0; i < hogwartsImages.length; i++) {

        if (hogwartsImage == hogwartsImages[i]) {
            var image = hogwartsImages[i];
            var imageIndex = hogwartsImages.indexOf(image)+1;
            document.getElementById("hogwartsImages").setAttribute("src", hogwartsImages[imageIndex]);
            if (i == 7) {
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
                document.getElementById("hogwartsImages").setAttribute("src", hogwartsImages[7]);     
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

/* PROGRESS BARS ANIMATION */
function runBarAnimation() {
    var dict = {
        "bar1": 100, "bar2": 85, "bar3": 85, "bar4": 70,
         "bar5": 90, "bar6": 85, "bar7": 85, "bar8": 70
    };

    for (var key in dict) {
        var value = dict[key];
        animateBars(key, value);
    }
}

function animateBars(theBar, totalLength) {
    var wholeBar = document.getElementById(theBar);
    var iteration = setInterval(addLength, 10);
    var widthOfProgress = 0;

    function addLength() {
        if (widthOfProgress >= totalLength) {
           
            clearInterval(iteration);
        } else {
            widthOfProgress++;
            wholeBar.style.width = widthOfProgress + "%"; 
        }
    }
}
document.body.onload = runBarAnimation();
/**/