let launchTime = new Date("Sept 16, 2021 00:02 UTC");
let selectedColor = "red";
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
    
    document.getElementById("centerMe").setAttribute("style", "position: fixed;top: 0;left: 0;right: 0;bottom: 0;")
    document.getElementById("input").remove();

    intervalID = setInterval(timee, 1000, launchTime.valueOf() + 1000); //1 sec off error
}
