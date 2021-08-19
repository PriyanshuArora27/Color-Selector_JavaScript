const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const orange = document.querySelector(".orange");
const violet = document.querySelector(".violet");
const pink = document.querySelector(".pink");
const center = document.querySelector(".center");


//console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor;
};

//these two are also correct but were just used for understanding...

// var orangeElementColor = getBGColor(orange);

// orange.addEventListener("mouseenter", ()=>{
//     center.style.background= orangeElementColor;
// });

// var color = getBGColor(pink);

// pink.addEventListener("click", ()=>{
//     center.style.background= color;
// });

var magicColorchanger=(element,color)=>{
    return element.addEventListener("mouseenter",()=>{
        center.style.background=color;
    });

};

magicColorchanger(red,getBGColor(red));
magicColorchanger(pink,getBGColor(pink));
magicColorchanger(cyan,getBGColor(cyan));
magicColorchanger(violet,getBGColor(violet));
magicColorchanger(orange,getBGColor(orange));