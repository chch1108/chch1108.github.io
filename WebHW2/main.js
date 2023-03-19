
let content = "Still Flying...We Will Comeback Soon...";
let i=0;
function show() {
    str = content.substr(0, i);
    txt.innerHTML = str;
    document.getElementById("txt").style.textAlign = "center";
    let colors = document.getElementById("txt");
    colors.innerHTML = str.fontcolor("DodgerBlue");
    let result = txt.innerHTML.fontsize(7);
    document.getElementById("txt").innerHTML = result;
    i++;
    if(i>content.length)i=0;
    setTimeout("show()", 200);
}