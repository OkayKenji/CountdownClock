let launchTime;
let selectedColor;
let intervalID;
let ctx;
startProgram();

function startProgram() {
    const canvas = document.getElementById(`cTimer`);
    ctx = canvas.getContext('2d');
    canvas.height = 260;
    canvas.width = 1380;
    document.getElementById("selectColor").addEventListener("change", updateColor);
    document.getElementById("testDahLights").addEventListener("click", testMode);

    updateColor();


    

    document.getElementById("startMe").addEventListener("click", timeStart);
}
