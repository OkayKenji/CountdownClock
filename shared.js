
function updateColor() {
    selectedColor = document.getElementById("selectColor").value;

    if (selectedColor == `black`) {
        document.getElementsByTagName("body")[0].style.background = "rgb(255,255,255)";
        document.getElementById("eee").style.color = "rgb(0,0,0)";
    } else {
        document.getElementsByTagName("body")[0].style.background = "rgb(0,0,0)";
    }


    //draw blank clock
    drawColon(ctx);
    drawClock(ctx, 0, "0000000");
    drawClock(ctx, 160, "0000000");
    drawClock(ctx, 360, "0000000");
    drawClock(ctx, 520, "0000000");
    drawClock(ctx, 720, "0000000");
    drawClock(ctx, 880, "0000000");
    drawClock(ctx, 1080, "0000000");
    drawClock(ctx, 1240, "0000000");
}

function timeStart() {
    launchTime = new Date(document.getElementById("dateLaunch").value);
    selectedColor = document.getElementById("selectColor").value;
    if (launchTime == "Invalid Date") {
        alert("Error! Invalid time...");
    } else if ((launchTime.valueOf() + 1000) - Date.now() < 0) {
        alert("Error! Time must be in the future...");
    } else {
        // document.getElementById("timer").textContent = "";
        // document.getElementById("startMe").disabled = true;
        selectedColor = document.getElementById("selectColor").value;
        document.getElementById("centerMe").setAttribute("style", "position: fixed;top: 0;left: 0;right: 0;bottom: 0;")
        document.getElementById("eee").textContent = `Timer set to: ${launchTime}`;
        document.getElementById("input").remove();
        intervalID = setInterval(timee, 1000, launchTime.valueOf() + 1000); //1 sec off error
    }

}

function timee(launchTime) {

    let diff = (launchTime - Date.now());
    // let remDiff = diff;
    // if (diff < 60000) {
    //     document.getElementsByTagName("body")[0].style.background = "rgb(255,100,100)";
    //     document.getElementsByTagName("body")[0].style.color = "rgb(255,255,255)";
    // }
    // if (diff < 0) {
    //     clearTimeout(intervalID);
    //     document.getElementById("stoped").appendChild(document.createTextNode(" Timer done!!"));
    // }


    let days = Math.trunc(diff / 86400000)
    diff = diff % 86400000; //hours
    let hours = Math.trunc(diff / 3600000);
    diff = diff % 3600000;
    let min = Math.trunc(diff / 60000);
    diff = diff % 60000;
    let sec = Math.trunc(diff / 1000);

    if (`${days}`.length == 1) {
        days = `0${days}`
    }


    if (`${hours}`.length == 1) {
        hours = `0${hours}`
    }

    if (`${min}`.length == 1) {
        min = `0${min}`
    }

    if (`${sec}`.length == 1) {
        sec = `0${sec}`
    }

    // document.getElementById("timer").textContent = `${days}:${hours}:${min}:${sec}`
    days += "";
    hours += "";
    min += "";
    sec += "";

    drawClock(ctx, 0, numToBin(days.charAt(0)));
    drawClock(ctx, 160, numToBin(days.charAt(1)));
    drawClock(ctx, 360, numToBin(hours.charAt(0)));
    drawClock(ctx, 520, numToBin(hours.charAt(1)));
    drawClock(ctx, 720, numToBin(min.charAt(0)));
    drawClock(ctx, 880, numToBin(min.charAt(1)));
    drawClock(ctx, 1080, numToBin(sec.charAt(0)));
    drawClock(ctx, 1240, numToBin(sec.charAt(1)));

}

function drawClock(ctx, base, indicators) {
    let colorA, colorB;
    switch (selectedColor) {
        case 'black':
            colorA = 'rgba(245,245,245,1)';
            colorB = 'rgba(0,0,0,1)'
            break;
        case 'red':
            colorA = 'rgba(20,0,0,1)';
            colorB = 'rgba(255,0,0,1)';
            break;
        case 'green':
            colorA = 'rgba(0,10,0,1)';
            colorB = 'rgba(0,200,0,1)';
            break;
        case 'yellow':
            colorA = 'rgba(27,27,0,1)';
            colorB = 'rgba(254,242,14,1)';
            break;
        case 'blue':
            colorA = 'rgba(0,15,15,1)';
            colorB = 'rgba(0,164,242,1)';
            break;
    }

    for (let i = 0; i < indicators.length; i++) {
        let ele = indicators.charAt(i);
        if (ele == 0) {
            ctx.fillStyle = colorA;
        } else {
            ctx.fillStyle = colorB;
        }
        switch (i) {
            case 0:
                ctx.fillRect(base + 20, 0, 100, 20);
                break;
            case 1:
                ctx.fillRect(base + 120, 20, 20, 100);
                break;
            case 2:
                ctx.fillRect(base + 120, 140, 20, 100);
                break;
            case 3:
                ctx.fillRect(base + 20, 240, 100, 20);
                break;
            case 4:
                ctx.fillRect(base + 0, 140, 20, 100);
                break;
            case 5:
                ctx.fillRect(base + 0, 20, 20, 100);
                break;
            case 6:
                ctx.fillRect(base + 20, 120, 100, 20);
                break;
        }

    }
}

function numToBin(num) {
    num = Number.parseInt(num);
    switch (num) {
        case 0:
            return "1111110";
        case 1:
            return "0110000";
        case 2:
            return "1101101";
        case 3:
            return "1111001";
        case 4:
            return "0110011";
        case 5:
            return "1011011";
        case 6:
            return "1011111";
        case 7:
            return "1110000";
        case 8:
            return "1111111";
        case 9:
            return "1111011";
    }


}

function drawColon(ctx) {
    let colorA;
    switch (selectedColor) {
        case 'black':
            colorA = 'rgba(0, 0, 0, 1)';
            break;
        case 'red':
            colorA = 'rgba(255,0,0,1)';
            break;
        case 'green':
            colorA = 'rgba(0,200,0,1)';
            break;
        case 'yellow':
            colorA = 'rgba(254,242,14,1)';
            break;
        case 'blue':
            colorA = 'rgba(0,164,242,1)';
            break;
    }
    ctx.fillStyle = colorA;
    if (document.getElementById("eee"))
        document.getElementById("eee").style.color = colorA;
    ctx.fillRect(320, 100, 20, 20);
    ctx.fillRect(320, 220, 20, 20);
    ctx.fillRect(680, 100, 20, 20);
    ctx.fillRect(680, 220, 20, 20);
    ctx.fillRect(1040, 100, 20, 20);
    ctx.fillRect(1040, 220, 20, 20);
}

let indexA = 0;
// indexB = 1, indexC = 2, indexD = 3, indexE = 4, indexF = 5, indexG = 6, indexH = 7;
// let arr = ["0000001","1000000","0100000","0010000","0001000","0000100","0000010"]; //turn on one by one
// let arr = ["0000000","1111111"]; // on and off
let arr = ["1111110", "0110000", "1101101", "1111001", "0110011", "1011011", "1011111", "1110000", "1111111", "1111011", "0000000"]; //count 0-9
//  let arr = [
//     "0000000",
//     "0000001",
//     "0000010",
//     "0000011",
//     "0000100",
//     "0000101",
//     "0000110",
//     "0000111",
//     "0001000",
//     "0001001",
//     "0001010",
//     "0001011",
//     "0001100",
//     "0001101",
//     "0001110",
//     "0001111",
//     "0010000",
//     "0010001",
//     "0010010",
//     "0010011",
//     "0010100",
//     "0010101",
//     "0010110",
//     "0010111",
//     "0011000",
//     "0011001",
//     "0011010",
//     "0011011",
//     "0011100",
//     "0011101",
//     "0011110",
//     "0011111",
//     "0100000",
//     "0100001",
//     "0100010",
//     "0100011",
//     "0100100",
//     "0100101",
//     "0100110",
//     "0100111",
//     "0101000",
//     "0101001",
//     "0101010",
//     "0101011",
//     "0101100",
//     "0101101",
//     "0101110",
//     "0101111",
//     "0110000",
//     "0110001",
//     "0110010",
//     "0110011",
//     "0110100",
//     "0110101",
//     "0110110",
//     "0110111",
//     "0111000",
//     "0111001",
//     "0111010",
//     "0111011",
//     "0111100",
//     "0111101",
//     "0111110",
//     "0111111",
//     "1000000",
//     "1000001",
//     "1000010",
//     "1000011",
//     "1000100",
//     "1000101",
//     "1000110",
//     "1000111",
//     "1001000",
//     "1001001",
//     "1001010",
//     "1001011",
//     "1001100",
//     "1001101",
//     "1001110",
//     "1001111",
//     "1010000",
//     "1010001",
//     "1010010",
//     "1010011",
//     "1010100",
//     "1010101",
//     "1010110",
//     "1010111",
//     "1011000",
//     "1011001",
//     "1011010",
//     "1011011",
//     "1011100",
//     "1011101",
//     "1011110",
//     "1011111",
//     "1100000",
//     "1100001",
//     "1100010",
//     "1100011",
//     "1100100",
//     "1100101",
//     "1100110",
//     "1100111",
//     "1101000",
//     "1101001",
//     "1101010",
//     "1101011",
//     "1101100",
//     "1101101",
//     "1101110",
//     "1101111",
//     "1110000",
//     "1110001",
//     "1110010",
//     "1110011",
//     "1110100",
//     "1110101",
//     "1110110",
//     "1110111",
//     "1111000",
//     "1111001",
//     "1111010",
//     "1111011",
//     "1111100",
//     "1111101",
//     "1111110",
//     "1111111"
// ]

function testMode() {
    selectedColor = document.getElementById("selectColor").value;
    document.getElementById("centerMe").setAttribute("style", "position: fixed;top: 0;left: 0;right: 0;bottom: 0;")
    document.getElementById("input").remove();
    intervalID = setInterval(TEST, 1000);
}

function TEST() {
    drawClock(ctx, 0, arr[indexA]);
    drawClock(ctx, 160, arr[indexA]);
    drawClock(ctx, 360, arr[indexA]);
    drawClock(ctx, 520, arr[indexA]);
    drawClock(ctx, 720, arr[indexA]);
    drawClock(ctx, 880, arr[indexA]);
    drawClock(ctx, 1080, arr[indexA]);
    drawClock(ctx, 1240, arr[indexA]);

    indexA++;
    // indexB++;
    // indexC++;
    // indexD++;
    // indexE++;
    // indexF++;
    // indexG++;
    // indexH++;

    if (arr.length == indexA) {
        indexA = 0;
    }
    // if (arr.length == indexB) {
    //     indexB = 0;
    // }
    // if (arr.length == indexC) {
    //     indexC = 0;
    // }
    // if (arr.length == indexD) {
    //     indexD = 0;
    // }
    // if (arr.length == indexE) {
    //     indexE = 0;
    // }
    // if (arr.length == indexF) {
    //     indexF = 0;
    // }
    // if (arr.length == indexG) {
    //     indexG = 0;
    // }
    // if (arr.length == indexH) {
    //     indexH = 0;
    // }
}
/**
 * Only for numbers <= 127
 * @param {*} num 
 * @returns 
 */
function numTo7Bin(num) {
    let str = "";
    if (num == 0) {
        str = "0000000";
    }

    let pow = 6;
    while (str.length < 7) {
        if ((num / Math.pow(2, pow)) >= 1) {
            str += "1";
            num = num % Math.pow(2, pow)
        } else {
            str += "0";
        }
        pow--;
    }

    // if (str.length < 7) {
    //     while (str.)
    // }

    return str;
}