var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
var width = 1080;
var height = 1920;

function selectKit(value){
    img.src = "images/" + value + ".png";
}

var img = new Image();


img.addEventListener("load", function() {
    document.getElementById('generate').addEventListener("click", generateKit); 
});

function generateKit(){
    var kit = document.getElementById('kit').value;
    if(kit != ""){
        ctx.drawImage(img,0,0,width,height);
        ctx.font = "200px fcbarcelona";       
        if (kit == 'player_home')
            ctx.fillStyle = "#f5f5f5";
        else if (kit == 'player_away')
            ctx.fillStyle = "#1f2a6f";
        else
            ctx.fillStyle = "#131311";
  
        ctx.textAlign = "center";
        var name = document.getElementById('showname').textContent;
        ctx.fillText(name, 540, 400);
        ctx.font = "1000px fcbarcelona";
        var number = document.getElementById('shownumber').textContent;
        ctx.fillText(number, 540, 1350);
    }
        
}

$(document).ready(function(){
    $("#kitname").on("input", function(){
        $("#showname").text($(this).val());
    });
});

$(document).ready(function(){
    $("#kitnumber").on("input", function(){
        $("#shownumber").text($(this).val());
    });
});
