let styleNum = 1;
function addLoadEvent(func) {
    let oldonload = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
function changeMode(){
    let button = document.getElementById("changeModeButton");
    let style = document.getElementsByTagName("link")[0];
    button.onclick = function(){
        if(styleNum === 3) {
            styleNum = 1;
        } else{
            styleNum++;
        }
        let styleAddress = "style/style_" + styleNum + ".css"
        style.setAttribute("href",styleAddress)
    }
};
addLoadEvent(changeMode);


