let dokme = document.getElementById('bzn');
dokme.onclick = function(){
    document.getElementById('bia').style.opacity = "1";
    document.getElementById('bia').style.zIndex = "60";
}
let close = document.getElementById('close');
close.onclick = function(){
    document.getElementById('bia').style.opacity = "0";
    document.getElementById('bia').style.zIndex = "-100";
}
console.log(dokme)