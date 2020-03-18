// eventlistener when edit menu opens, set all values to the current situation
var x = document.getElementsByClassName("icon")[0]
x.addEventListener("click", selectOnChange);

var e_layer = document.createElement("div");
e_layer.setAttribute("class", "edit__layer");
e_layer.setAttribute("id", "edit__layer")
document.body.appendChild(e_layer);

var e_menu = document.createElement("div");
e_menu.setAttribute("class", "edit__menu");
e_layer.appendChild(e_menu);

var e_menu_header = document.createElement("div");
e_menu_header.setAttribute("class", "edit__menu__header");
e_menu.appendChild(e_menu_header);

var e_menu_header_text = document.createElement("h2");
var header_text = document.createTextNode("Edit Webpage");
e_menu_header_text.setAttribute("id", "edit__menu__header__text");
e_menu_header_text.appendChild(header_text);
e_menu_header.appendChild(e_menu_header_text);

var e_menu_close_btn = document.createElement("div");
e_menu_close_btn.setAttribute("class", "edit_menu_close_btn");
e_menu_header.appendChild(e_menu_close_btn);

var a_icon = document.createElement("a");
a_icon.setAttribute("href", "javascript:void(0);");
a_icon.setAttribute("id", "close_btn");
a_icon.setAttribute("class", "icon");
a_icon.setAttribute("onclick", "CloseClick()");
e_menu_close_btn.appendChild(a_icon);

var e_close_img = document.createElement("img");
e_close_img.setAttribute("src", "assets/img/close-button.svg");
e_close_img.setAttribute("alt", "close menu button");
a_icon.appendChild(e_close_img);
e_menu_close_btn.appendChild(a_icon);

var e_menu_elementtext = document.createElement("h2");
e_menu_elementtext.setAttribute("id", "edit__menu__elementtext");
var e_menu_elementtext_text = document.createTextNode("Element:");
e_menu_elementtext.appendChild(e_menu_elementtext_text);
e_menu.appendChild(e_menu_elementtext);

var e_menu_select = document.createElement("select");
e_menu_select.setAttribute("id", "item-selector");
e_menu_select.setAttribute("onChange", "selectOnChange()");
e_menu.appendChild(e_menu_select);

// add all specified dom elements to the select item
var allitems = document.querySelectorAll("header , body, footer, article, aside");
allitems.forEach(e => {
    var option = document.createElement("option");
    var e_text = document.createTextNode(e.tagName);
    option.appendChild(e_text);
    e_menu_select.appendChild(option);

});

var e_menu_options = document.createElement("div");
e_menu_options.setAttribute("class", "edit__menu__options");
e_menu.appendChild(e_menu_options);

var e_menu_option1 = document.createElement("div");
e_menu_option1.setAttribute("class", "edit__menu__option");
e_menu_options.appendChild(e_menu_option1);

var e_h3 = document.createElement("h3");
var e_h3_text = document.createTextNode("Color");
e_h3.appendChild(e_h3_text);
e_menu_option1.appendChild(e_h3);

var e_menu_color = document.createElement("div");
e_menu_color.setAttribute("class", "edit__menu__color");
e_menu_option1.appendChild(e_menu_color);

var e_menu_colorfont = document.createElement("div");
e_menu_colorfont.setAttribute("class", "edit__menu__color");

// create color options 
var colorarr = ["blue", "white", "green", "pink", "orange", "purple", "yellow", "black"];
colorarr.forEach(e => {
    var e_menu_color_btn = document.createElement("span");
    e_menu_color_btn.setAttribute("class", "edit__menu__color_btn");
    e_menu_color_btn.className += " " + e;
    e_menu_color_btn.setAttribute("onclick", "setColor(" + '"' + e + '"' + ")");
    e_menu_color.appendChild(e_menu_color_btn);
});

// create color options 2
colorarr.forEach(e => {
    var e_menu_color_btnfont = document.createElement("span");
    e_menu_color_btnfont.setAttribute("class", "edit__menu__color_btn");
    e_menu_color_btnfont.className += " " + e;
    e_menu_color_btnfont.setAttribute("onclick", "setColorFont(" + '"' + e + '"' + ")");
    e_menu_colorfont.appendChild(e_menu_color_btnfont);
});

var e_menu_color_text = document.createElement("p");
e_menu_color_text.setAttribute("class", "edit__menu__color__text");
e_menu_color_text.setAttribute("id", "color_text");
var e_menu_color_textt = document.createTextNode(" ");
e_menu_color_text.appendChild(e_menu_color_textt);
e_menu_option1.appendChild(e_menu_color_text);


var e_menu_option2 = document.createElement("div");
e_menu_option2.setAttribute("class", "edit__menu__option");
e_menu_options.appendChild(e_menu_option2);

var e_h3font = document.createElement("h3");
var e_h3_textfont = document.createTextNode("Font");
e_h3font.appendChild(e_h3_textfont);
e_menu_option2.appendChild(e_h3font);

// create font form
var form = document.createElement("form");
var inputc1 = document.createElement("div");
inputc1.setAttribute("class", "inputcontainer");
var inputc2 = document.createElement("div");
inputc2.setAttribute("class", "inputcontainer");
var inputc3 = document.createElement("div");
inputc3.setAttribute("class", "inputcontainer");

var input1 = document.createElement("input");
input1.setAttribute("type", "radio");
input1.setAttribute("id", "font1");
input1.setAttribute("name", "font");
input1.setAttribute("value", "cursief");

var label1 = document.createElement("label");
label1.setAttribute("for", "font1");
var textlabel1 = document.createTextNode("Cursif");
label1.appendChild(textlabel1);

var label2 = document.createElement("label");
label2.setAttribute("for", "font2");
var textlabel2 = document.createTextNode("Monospace");
label2.appendChild(textlabel2);

var label3 = document.createElement("label");
label3.setAttribute("for", "font3");
var textlabel3 = document.createTextNode("Sans Serif");
label3.appendChild(textlabel3);

var input2 = document.createElement("input");
input2.setAttribute("type", "radio");
input2.setAttribute("id", "font2");
input2.setAttribute("name", "font");
input2.setAttribute("value", "Monospace");

var input3 = document.createElement("input");
input3.setAttribute("type", "radio");
input3.setAttribute("id", "font3");
input3.setAttribute("name", "font");
input3.setAttribute("value", "");
input3.setAttribute("checked", "");

inputc1.appendChild(input1);
inputc1.appendChild(label1);
inputc2.appendChild(input2);
inputc2.appendChild(label2);
inputc3.appendChild(input3);
inputc3.appendChild(label3);

e_menu_option2.appendChild(inputc1);
e_menu_option2.appendChild(inputc2);
e_menu_option2.appendChild(inputc3);

var e_menu_option3 = document.createElement("div");
e_menu_option3.setAttribute("class", "edit__menu__option");
e_menu_options.appendChild(e_menu_option3);

var e_h3fontc = document.createElement("h3");
var e_h3_textfontc = document.createTextNode("Font Color");
e_h3fontc.appendChild(e_h3_textfontc);

e_menu_option3.appendChild(e_h3fontc);
e_menu_option3.appendChild(e_menu_colorfont);

var e_menu_color_textfont = document.createElement("p");
e_menu_color_textfont.setAttribute("class", "edit__menu__color__text");
e_menu_color_textfont.setAttribute("id", "color_textfont");
e_menu_option3.appendChild(e_menu_color_textfont);
var e_menu_color_texttfont = document.createTextNode(" ");
e_menu_color_textfont.appendChild(e_menu_color_texttfont);
e_menu_option3.appendChild(e_menu_color_textfont);

var e_menu_option4 = document.createElement("div");
e_menu_option4.setAttribute("class", "edit__menu__option");
e_menu_options.appendChild(e_menu_option4);

var e_h3size = document.createElement("h3");
var e_h3_textsize = document.createTextNode("Font Size");
e_h3size.appendChild(e_h3_textsize);
e_menu_option4.appendChild(e_h3size);

var e_h4 = document.createElement("h4");
e_h4.setAttribute("id", "slideroutput");
e_menu_option4.appendChild(e_h4);

var slider = document.createElement("input");
slider.setAttribute("type", "range");
slider.setAttribute("min", "1");
slider.setAttribute("max", "100");
slider.setAttribute("value", "17");
slider.setAttribute("class", "edit__menu__slider");
slider.setAttribute("id", "font_range");
e_menu_option4.appendChild(slider)

var slider = document.getElementById("font_range");
var slideroutput = document.getElementById("slideroutput");
var textoutput = document.createTextNode(slider.value);
slideroutput.appendChild(textoutput);

slider.oninput = function() {
    var text = document.createTextNode(this.value);
    slideroutput.textContent = '';
    slideroutput.appendChild(text);

    var select = document.getElementById("item-selector");
    var selectedoption = select.options[select.selectedIndex].text;

    var edititem = document.getElementsByTagName(selectedoption);
    edititem[0].style.fontSize = "" + this.value + "px";

}

//set color of font on change
function setColor(color) {
    var textcolor = document.getElementById('color_text');
    var textinsert = document.createTextNode(color);

    textcolor.removeChild(textcolor.firstChild);
    textcolor.appendChild(textinsert);

    var select = document.getElementById("item-selector");
    var selectedoption = select.options[select.selectedIndex].text;

    var edititem = document.getElementsByTagName(selectedoption);
    edititem[0].style.backgroundColor = color;
}

function setColorFont(Color) {
    var fonttextcolor = document.getElementById('color_textfont');
    var fontcolorinsert = document.createTextNode(Color);

    fonttextcolor.removeChild(fonttextcolor.firstChild);
    fonttextcolor.appendChild(fontcolorinsert);

    var select = document.getElementById("item-selector");
    var selectedoption = select.options[select.selectedIndex].text;

    var edititem = document.getElementsByTagName(selectedoption);
    edititem[0].style.color = Color;
}

// when other dom element selected update the current values to the editor
function selectOnChange() {
    var select = document.getElementById("item-selector");
    var selectedoption = select.options[select.selectedIndex].text;

    var edititem = document.getElementsByTagName(selectedoption);
    var styles = getComputedStyle(edititem[0]);

    var fontsize = styles.fontSize;
    var fontcolor = styles.color;
    var color = styles.backgroundColor;
    var fontfam = styles.fontFamily;

    var fontcolorcontroller = document.getElementById("color_textfont");
    var fontcolorinsert = document.createTextNode(fontcolor);
    fontcolorcontroller.removeChild(fontcolorcontroller.firstChild);
    fontcolorcontroller.appendChild(fontcolorinsert);

    var colorcontroller = document.getElementById("color_text");
    var colorinsert = document.createTextNode(color);
    colorcontroller.removeChild(colorcontroller.firstChild);
    colorcontroller.appendChild(colorinsert);

    var fontsizecontroller = document.getElementById("font_range");
    fontsize = fontsize.slice(0, -2)

    fontsizecontroller.value = fontsize;
    var fontsizecontrollerth = document.getElementById("slideroutput");
    var fontsizecontrollertext = document.createTextNode(fontsize);
    fontsizecontrollerth.removeChild(fontsizecontrollerth.firstChild);
    fontsizecontrollerth.appendChild(fontsizecontrollertext);

    var font1 = document.getElementsByClassName("font1");
    var font1 = document.getElementsByClassName("font1");
    var font1 = document.getElementsByClassName("font1");
    console.log(fontfam);
    if (fontfam == "cursief") {
        font1.checked = true;
    } else if (fontfam == "monospace") {
        font2.checked = true;
    } else if (fontfam == "sans-serif") {
        font3.checked = true;
    } else {
        font1.checked = false;
        font2.checked = false;
        font3.checked = false;
    }

}

//change fontfamily style for selected dom element
var input = document.getElementsByName("font");
input.forEach(e => {
    e.addEventListener('change', function() {
        var select = document.getElementById("item-selector");
        var selectedoption = select.options[select.selectedIndex].text;

        var edititem = document.getElementsByTagName(selectedoption);
        edititem[0].style.fontFamily = e.value;
    });
});

//close editor menu
function CloseClick() {
    var layer = document.getElementById("edit__layer");
    var body = document.getElementsByTagName("body");
    body[0].style.overflowY = "";
    if (layer.className === "edit__layer active") {
        layer.className = "edit__layer";
    } else {
        layer.className = "edit__layer active";
    }
}

//open editor menu
function OpenEditor() {
    var layer = document.getElementById("edit__layer");
    var body = document.getElementsByTagName("body");
    body[0].style.overflowY = "hidden";

    if (layer.className === "edit__layer") {
        layer.className += " active";
    } else {
        layer.className = "edit__layer";
    }
}