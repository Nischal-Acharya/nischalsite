var wonAudio = new Audio('won.mp3')
var looseAudio = new Audio('loose.mp3')
var drawAudio = new Audio('draw.mp3')
var clickAudio = new Audio('click.wav')



let computer_choose;
function computer_play() {
    return parseInt(Math.random() * 3);
}

let won = "Wooh! you won"
let loose = "Opps! you loose"
let draw = "Hehe! We Picked same"

function wonmsg() {

    document.getElementsByClassName("won_text")[0].textContent = won;
}

function loosemsg() {

    document.getElementsByClassName("won_text")[0].textContent = loose;

}

function drawmsg() {
    document.getElementsByClassName("won_text")[0].textContent = draw;

}

function rock_press() {
    clickAudio.play()
    document.getElementsByClassName("you")[0].style.backgroundImage = "url('rock.png')";
    computer_choose = computer_play()
    if (computer_choose == 0) {
        document.getElementsByClassName("computer")[0].style.backgroundImage = "url('rock.png')";
        drawAudio.play()
        drawmsg();
    }
    else if (computer_choose == 1) {
        document.getElementsByClassName("computer")[0].style.backgroundImage = "url('paper.png')";
        looseAudio.play()
        loosemsg();
    }
    else if (computer_choose == 2) {
        document.getElementsByClassName("computer")[0].style.backgroundImage = "url('scissor.png')";
        wonAudio.play()
        wonmsg();
    }
}

function paper_press() {
    clickAudio.play()

    document.getElementsByClassName("you")[0].style.backgroundImage = "url('paper.png')";
    computer_choose = computer_play()
    if (computer_choose == 0) {
        document.getElementsByClassName("computer")[0].style.backgroundImage = "url('rock.png')";
        wonAudio.play()
        wonmsg();
    }
    else if (computer_choose == 1) {
        document.getElementsByClassName("computer")[0].style.backgroundImage = "url('paper.png')";
        drawAudio.play()
        drawmsg();
    }
    else if (computer_choose == 2) {
        document.getElementsByClassName("computer")[0].style.backgroundImage = "url('scissor.png')";
        looseAudio.play()
        loosemsg();
    }
}

function scissor_press() {
    clickAudio.play()

    document.getElementsByClassName("you")[0].style.backgroundImage = "url('scissor.png')";

    computer_choose = computer_play()
    if (computer_choose == 0) {
        document.getElementsByClassName("computer")[0].style.backgroundImage = "url('rock.png')";
        looseAudio.play()
        loosemsg();
    }
    else if (computer_choose == 1) {
        document.getElementsByClassName("computer")[0].style.backgroundImage = "url('paper.png')";
        wonAudio.play()
        wonmsg();
    }
    else if (computer_choose == 2) {
        document.getElementsByClassName("computer")[0].style.backgroundImage = "url('scissor.png')";
        drawAudio.play()
        drawmsg();
    }
}