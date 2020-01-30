function UnlockLevelTwo(file) {
    parent.center_middle_top.location=file;
}

function UnlockLevelThree(file) {
    parent.center_middle_bottom.location=file;
}

function UnlockLevelFour(file) {
    parent.center_right_top.location=file;
}

function UnlockLevelFive(file) {
    parent.center_right_bottom.location=file;
}

document.getElementById("6_wires_frame_1_next").onclick = function() {UnlockLevelTwo('6Wired_v3_jari_runa.html')};

$(".correct").on("click", function(e){
    e.preventDefault();
    UnlockLevelTwo('./6WiredModule.html');
});