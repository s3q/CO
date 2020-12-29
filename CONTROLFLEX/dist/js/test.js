// --------------------------------------------------------javascript-------------------------------------------------------------- :

// helper:
// debugger;


// example :

// --------------------------------------------------------event-------------------------------------------------------------------- :

// onload() > when loading ;
// onclick() > when clicking ;
// ondblclick() > when double clicking ;
// onkeyup() > when you lift your finger from the key ;
// onkeydown() > when you press your finger from the key ;
// onkeypress() > when you press your finger from the key ;
// onmouseout() > when you lift the mouse for thing which you define ;
// onmouseover() > when you pass the mouse for thing which you define ;
// onmousewheel() > when mouse wheel;
// onchange() > when you changed the content for thing which you define ;
// onscroll() > when scroll;
// onresize() > when resize element or window;
// onfocus() > when focus on element;
// onblur() > when blue(reverse focus);
// onsubmit() > when submit input (for form only);
// event.preventDefault() > prevent default;
// oncontextmenu() > when clicked left mouse show(cont text menu)
// onmouseenter() > when hovered mouse on the element;
// onmouseleave() > When removing the mouse from the element (reverse onmouseenter());

// focus() > focus;
// blur() > remove focus;
// click() > auto click on element which chose it;
// setTimeout(event, time);
// addEventListener('event:('click')', 'The verb that follows an event') >  add event without remove event which befor it event;

// -----------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------output-------------------------------------------------------------------- :

// alert() ;
// prompt() ;
// document.write() ;
// innerHTML = "" ;
// console.log() ;

// ------------------------------------------------------------------------------------------------------------------------------------

// var > Declares a variable, optionally initializing it to a value. ;
// !(true) > false;
// !(false) > true;
// !!(true) > true;
// !!(false) > false;


// let > Declares a block-scoped, local variable, optionally initializing it to a value. ;
// const > Declares a block-scoped, read-only named constant. ;





/*
// if condition :
if (..comparison..) {
    statement;
}
else if (..comparison..) {
    statement;
}
else {
    statement;
}

// prefix if condition :
condition ? statement1 : statement2;
? > if;
: > else;





// function :
function ...() {
    "use strict";
    statement;
}



// for loop :
for (initialization; condition; final expression) {
  statement;
}


// for ... in :
for (var value in myObject) {
    statement; > get index for items;
}

// for ... of :
for (var value in myObject) {
    statement; > get items name (don't get index items);
}


// while :
var i = ?;
while (condition) {
    statement;
}




// do while :
var i = ? ;
do {
    statement;
} while (condition);







// catch the error :
try {
    // Try on the error, and if you find it wrong, execute the following code(catch);
}
catch (error) {
    // (req);
    // Written in it will be executed if (try) is wrong;
}
finally {
    // (opt);
    // Written in it is executed, whether in (try) a mistake or not;
}
throw " make the error ";






//switch :
switch ("value") > it worked same if condition {
    case "if value which write into == value which write in (case)" :
        statement;
        break;
    default > if do not fulfilled which of (cases) will be fulfilled this code :
        statement;
        break;
}

*/

// -------------------------------------------------------control---------------------------------------------------------------------- :
// hasOwnproperty(value) > it has a property ;
/*
for (var value in object) {
    if (object.hasOwnProperty(value)) {
        console.log(value);
    }
}
*/

// break; > breke for it and which be come after it ;
// continue; > break for item wich you defined it and but do not break for remainder items;
// lable: > lable: ;

// arrayee.constructor;

// Math.round("number") > the number is rounded to the nearest ;
// Math.ceil("number") > the number is rounded to the nearest higher number it;
// Math.floor("number") > the number is rounded to the nearest smaller number it;
// Math.min("number", "number", "number", ...) > select lower number;
// Math.max("number", "number", "number", ...) > select upper number;
// Math.random() > random number;
// Math.sqrt('number') > calculating the square root;

/* regular expression :

    Character	Meaning
    \i          Case insensitive;
    \g          Global search;
    \m          Multi line search;
    \0	        Null Byte;
    \b	        Backspace;
    \f	        Form feed;
    \n	        New line;
    \r	        Carriage return;
    \t	        Tab;
    \v	        Vertical tab;
    \'	        Apostrophe or single quote;
    \"	        Double quote;

    \\Backslash character :
    \XXX	The character with the Latin-1 encoding specified by up to three octal digits XXX between 0 and 377.
    For example, \251 is the octal sequence for the copyright symbol.
    \xXX
    The character with the Latin-1 encoding specified by the two hexadecimal digits XX between 00 and FF.
    For example, \xA9 is the hexadecimal sequence for the copyright symbol.

    \uXXXX	The Unicode character specified by the four hexadecimal digits XXXX.
    For example, \u00A9 is the Unicode sequence for the copyright symbol. See Unicode escape sequences.

    \u{XXXXX}	Unicode code point escapes.
    For example, \u{2F804} is the same as the simple Unicode escapes \uD87E\uDC04.
*/


// /brakets use/ :
    // [character];
    // [^not character];
    // [range: a-z | A-Z | 1-10];
    // [rang: A-s] = [A-Z] and [a-s];
    // [^ not range: a-z | A-Z | 1-10];
    // [double range: 1-9, a-z];
    // [^ not double range: 1-9, a-z];

// /quantifier/ :
    // letter+ >  word contain one letter;
    // letter{number} > word contain number of letter;
    // letter{number, number} > word contain number or number;
    // letter{number,} > word contain at least number;

// Date() :
    // new Date() > print current Date & Time;
    // new Date(milliseconds) > print millseconds from UTC 1 jan 1970 00:00:00;
    // new Date(year, month, day, hours, minutes, seconds, milliseconds);
    // full format :
        // new Date(dateString: "month, day, year, hours") > can add date sting;
    // short format :
        // new Date(dateString: "month/day/year hours") > can add date sting;
    // ios format :
        // new Date(YYYY-MM-DD HH:MM:SS TZD);


    // Date.now() > ;
    // Date.parse() > ;

    // Date().local get date :
        // getDate() > day of the month 0-30;
        // getDay() > day of the week 0-6;
        // getFullYear() > get the full year;
        // getMonth() > get month 0-11;
        // getHours() > get hours 0-59;
        // getMinutes() > get minutes 0-59;
        // getSeconds() > get seconds 0-59;
        // getMilliSeconds() get milli seconds 0-59;

    // Date().local set date :
        // setDate(day(req));
        // setFullYear(year(req), month(opt), month(opt));
        // setMonth(month(req), day(opt));
        // setHours(hours(req), minutes(opt), seconds(opt), milliseconds(opt));
        // setMinutes(minutes(req), seconds(opt), milliseconds(opt));
        // setSeconds(seconds(req), milliseconds(opt));
        // setMilliSeconds(milliseconds(req));

    // Date().UTC get date :
        // getUTCDate() > day of the month 1-31;
        // getUTCDay() > day of the week 1-7;
        // getUTCFullYear() > get the full year;
        // getUTCMonth() > get month 0-12;
        // getUTCHours() > get hours 0-59;
        // getUTCMinutes() > get minutes 0-59;
        // getUTCSeconds() > get seconds 0-59;
        // getUTCMilliSeconds() get milli seconds 0-59;

    // Date().UTC set date :
        // setUTCDate(day(req));
        // setUTCFullYear(year(req), month(opt), month(opt));
        // setUTCMonth(month(req), day(opt));
        // setUTCHours(hours(req), minutes(opt), seconds(opt), milliseconds(opt));
        // setUTCMinutes(minutes(req), seconds(opt), milliseconds(opt));
        // setUTCSeconds(seconds(req), milliseconds(opt));
        // setUTCMilliSeconds(milliseconds(req));


    // Date().getTime() > number fo milli seconds from 1970 or specific date;
    // Date().getTimezoneOffset() > get def between UTC & your local time in minutes;

    // convert :
        // date :
            // toDateString() > convert to Date string;
            // toISOString() > convert to ISO date;
        // string :
            // toString() > convert which you are define it to string ;
            // toLocaleString > convert which you define it to locale string ;
            // join(" - or , ... ") >  convert which you define it to string, And add sign between items;
        // text :
            // toLowerCase() >  it make all the character is small;
            // toUpperCase() > it make all the character is capital;
        // number :
            // toPrecision() > The toPrecision() method returns a string representing the Number object to the specified precision;
            // toExponential(number) > The toExponential() method returns a string representing the Number object in exponential notation;
            // toFixed(number) > The toFixed() method formats a number using fixed-point notation (The number of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0.);
        // converting strings to numbers :
            // parseInt("number with (string) > (like: 10px)") > only returns whole numbers, so its use is diminished for decimals;
            // parseFloat();
// -------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------data type-------------------------------------------------------------------- :

// Boolean > true, false ;
// null > a special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.);
// undefined > a top-level property whose value is not defined;
// Object > {myName: "salim", myFatherName: "Amer", clan: "Alsulaimi"} ;
// Array ["Salim", "Amer", "Alsulaimi"]
// Map([['a', 1], ['b', 2], ['c', 3]]);
// string = "str";
// number > Aan integer or floating point number. for example: 42 or 3.14159;
// symbol (new in ECMAScript 2015). a data type whose instances are unique and immutable;


// type of :
// typeof(var) > show the type of varibale;

// value of :
// valueOf() > show the value of varibale;

// -------------------------------------------------------------------------------------------------------------------------------------

// length :
// length > shows in the array how many the index into it, and in the (string, number) shows how many (the letters, numbers) in it  ;

// -------------------------------------------------------operators------------------------------------------------------------------- :
// mathematics marks :
    // ( = ) > equal ;
    // ( + ) > plus ;
    // ( - ) > minus ;
    // ( * ) > multiplication ;
    // ( / ) > division ;
    // ( % ) > remainder;
    // ( ++ ) > it add one in each at time ;
    // ( -- ) > it minus one in each at time ;
    // ( += ) > add in strings variable and in numbers: x = x + y;
    // ( -= ) > minus: x = x - y;
    // ( *= ) > multiplication: x = x * y;
    // ( **= ) > multiplication: x = x ** y  --->  x = x * x * y;
    // ( /= ) > division: x = x / y;
    // ( %= ) > remainder: x = x % y;

// comparison :
    // ( > ) > larger than ;
    // ( < ) > smaller than ;
    // ( == ) > equal it ;
    // ( >= ) > larger than or equal it ;
    // ( <= ) > smaller than or equal it ;
    // ( != ) > not equal it ;
    // ( === ) > equal it in value and type of ;
    // ( !== ) > not equal it in value and type of ;

// ------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------numbers----------------------------------------------------------------- :

// number = 123..;

// 0e-5 --> 0;
// 0e+5 --> 0;
// 5e1 --> 50;
// 175e-2 --> 1.75;
// 1e3 --> 1000;
// 1e-3 --> 0.001;

// octal (0..7) :
    // syntax :
        // 0o(0..7);
        // o > octal;
        // number between 1 to 7;
    // literals :
        // num = X8(because it is octal) + num;
    // example :
        // 0o0111 ---> ((((0 = X8 + 0) 1 = X8 + 1) 1 = X8 + 1) 1 = X8 + 1) = 73;


// binary (1..7) :
    // syntax :
        // 0b(0..1);
        // b > binary;
        // number between 0 to 1;
    // literals :
        // num = X2(because it is binary) + num;
    // example :
        // 0b0111 ---> ((((0 = X2 + 0) 1 = X2 + 1) 1 = X2 + 1) 1 = X2 + 1) = 7;


// hexadecimal  (1..7) :
    // syntax :
        // 0x(0..9 and a..f);
        // x > hexadecimal;
        // number between 0 to 9, and letters between a to f;
    // literals :
        // num = X16(because it is hexadecimal --> 6 + 10 = 16) + num;
        // let (a = 10, b = 11, c = 12, d = 13, e = 13, f = 14);
        // let = X16(because it is hexadecimal --> 6 + 10 = 16) + let;
    // example :
        // 0x0111 ---> ((((0 = X16 + 0) 1 = X16 + 1) 1 = X16 + 1) 1 = X16 + 1) = 273;



// -----------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------Object------------------------------------------------------------------ :

// Object.getOwnPropertyNames(object name) > print the key in object;
// Object.keys(object name) > print the key in object;
// Object.create(object name) > This method allows you to choose the prototype object for the object you want to create, without having to define a constructor function.;

// -----------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------String------------------------------------------------------------------ :

// text :
    // toLowerCase() >  it make all the character is small;
    // toUpperCase() > it make all the character is capital;
    // trim() > delete space in text start and end;
    // link(write "herf" inside it) >  ;
    // bold() >  ;
    // blink() >  ;
    // italics() >  ;
    // strike() >  ;
    // anchor(name) > add name for (<a name="..."></a>) ;

// chopping :
    // split(separator, limit) > convert the string variable to object variable > and it make indexs about way (separator);
    // substr(start(mandatory), length(optional)) >  ;
    // substring(start(mandatory), end(optional)) >  ;

// character :
    // charAt(index) >  give you a value of string variable by index ;
    // charCodeAt(index) > !!!!!!!!!!!!!!!!!!! ;
    // fromCharCode(character code(1), character code (2 ...3 ...4)) >  ;

// replace :
    // replace(value, new value) >  it working on replacement a value for different value;

// concatenation :
    // concat(string(1), string(2, ...3, ...4)) > add content in string variable;


// ------------------------------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------Array & object------------------------------------------------------------ :

// for(var key of list.keys())  > get index number in side it;
// for(var value of list.values()) > get index item in side it;
// for(var entry of list.entries()) > get index and item in side it;

/* Array.forEach(
   function(currentValue, currentIndex, listObject) {}; > get all data for Array (item type[object HTMLParagraphElement], index, item);
   );
*/

// Object.freeze(object name) > don't can change keys from object;

// array check :
    // array check > (Array.isArray(the array which you want to checked)) ;

// add items :
    // add("item", "item", "item", ...);
    // push("item") > add item in the array end;
    // unshift("item") > add item in the array start ;
    // splice(index, how many item which you want deleted, items) > add item in the index which you are want ;

// slice :
    // slice(start[index(mandatory)], end[index(optional)]) > slice which index you defined in the array ;

// remove items :
    // remove("item", "item", "item", ...);
    // pop() > delete item in the array end;
    // shift() > delete item in the array start ;

// toggle :
    // toggle("item", "item", "item", ...);

// order :
    // slot() > order (a to ...) or (1 to ...) ;
    // reverse() > reverse order ;

// search :
    // item("index number") > search by index number;
    // contains("item which you want to fine it") > search for content have same name which you selected;
    // search("item which you want to search") > you can search in the string variable only ;
    // indexOf("item to search", start[index], end[index]) > the search about the item which you are selected > you can search in the array variable only ;
    // lastIndexOf("item to search", start[index], end[index]) > the search about the item which you are selected > same (indexOf) ;

// mix array :
    // concat(array) > the mix two array or more in one array ;


// -----------------------------------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------DOM------------------------------------------------------------------ :

// DOM > Document Object Model;

/*
let formInputsAttribute = document.getElementById('form-inputs-attribute'),
    childFormInputsAttribute1 = formInputsAttribute.children[0].children[1],
    childFormInputsAttribute2 = formInputsAttribute.children[1].children[1],
    childFormInputsAttribute3 = formInputsAttribute.children[2].children[1],
    childFormInputsAttribute4 = formInputsAttribute.children[3].children[1],
    childFormInputsAttribute5 = formInputsAttribute.children[4].children[1],
    childFormInputsAttribute6 = formInputsAttribute.children[5].children[1];



let spaceWork = document.getElementById('space-work'),
    Remove = document.getElementById('Remove'),
    RemoveALL = document.getElementById('RemoveALL'),
    createUl = document.createElement('ul');


let addItem = document.getElementById('add-item'),
    addDiv = document.getElementById('add-div'),
    addImg = document.getElementById('add-img');


function addSetAttribute(element, img)  {

    childFormInputsAttribute1.onkeyup = function ( ) {
        if (childFormInputsAttribute1.value !== '') {
            element.setAttribute('class', childFormInputsAttribute1.value.trim());
        }
        if (element.hasAttribute('class') === true) {
            childFormInputsAttribute1.value = element.className;
            console.log('it has attr')
        }
    }
    childFormInputsAttribute2.onkeyup = function ( ) {
        if (childFormInputsAttribute2.value !== '') {
            element.setAttribute('id', childFormInputsAttribute2.value.trim());
        }
    }
    childFormInputsAttribute3.onkeyup = function ( ) {
        if (childFormInputsAttribute3.value !== '') {
            element.setAttribute('value', childFormInputsAttribute3.value.trim());
        }
    }
    childFormInputsAttribute6.onkeyup = function ( ) {
        if (childFormInputsAttribute6.value !== '') {
            element.setAttribute('title', childFormInputsAttribute6.value.trim());
        }
    }
    if (img === true) {
        childFormInputsAttribute4.onkeyup = function ( ) {
            if (childFormInputsAttribute4.value !== '') {
                element.setAttribute('src', childFormInputsAttribute4.value.trim());
            }
        }
        childFormInputsAttribute5.onkeyup = function ( ) {
            if (childFormInputsAttribute5.value !== '') {
                element.setAttribute('alt', childFormInputsAttribute5.value.trim());
            }
        }
    }
}

addSetAttribute()
addItem.onclick = function () {
    'use strict';
    let createItem = document.createElement('li');

    // create ul contain li in space work :
    spaceWork.appendChild(createUl);
    createUl.appendChild(createItem);
    createItem.appendChild(document.createTextNode('item'));


    createItem.onclick = function onclickItemsUL() {

        // set attribute :
        addSetAttribute(this, false);

        // remove item (li) :
        Remove.onclick = function () {
            if (createUl.childElementCount !== 0) {
                createItem.remove();
            }
        }
    }
}

// remove all (ul) :
createUl.onclick = function () {
    RemoveALL.onclick = function () {
        createUl.remove();
    }
}


addDiv.onclick = function () {
    'use strict';
    let createDiv = document.createElement('div');

    // create div in space work :
    spaceWork.appendChild(createDiv);
    createDiv.appendChild(document.createTextNode('div'));

    createDiv.onclick = function () {

        // set attribute :
        addSetAttribute(this, false);

        // remove (div) :
        Remove.onclick = function () {
            createDiv.remove();
        }
    }
}


addImg.onclick = function () {
    'use strict';
    let createImg = document.createElement('img');

    // create img in space work :
    spaceWork.appendChild(createImg);
    createImg.appendChild(document.createTextNode('img'));

    createImg.onclick = function () {

        // set attribute :
        addSetAttribute(this, true);

        //remove (img) :
        Remove.onclick = function () {
            createImg.remove();
        }
    }
}






/*

// select element :
    // getElementById("id for element") > select element by id;
    // getElementsByTagName("tag name for element") > select element by tag name;
    // getElementsByClassName("class name for element") > select element by class name;
    // querySelectorAll("class or id name for element") > select element by id or class name;
    // inputEncoding > get encoding(UTF-8);
    // lastModified > get last modified;
    // URL > get URL for html page;

// find element by object :
    // document.title;
    // document.images;
    // document.forms;
    // document.body;
    // document.links;

// get, set element content :
    // innerHTML;
    // outerHTML;
    // textContent;
    // tagName;
    // className;
    // classList;
    // style.(property name);

// attributes :
    // get, set attribute value :
        // selector name.attribute(id, className, src, value, ...);
        // selector name.getAttribute("attribute(id, className, src, value, ...)");
        // selector name.setAttribute("attribute(id, className, src, value, ...)", "attribute value");
        // document.createAttribute('class', 'id', 'value') > for change attribute value (document.createAttribute('class', 'id', 'value')).value = 'change value';
        // element.setAttributeNS(namespace, name, value) > setAttributeNS adds a new attribute or changes the value of an attribute with the given namespace and name;
        // element.hasAttributeNS(namespace, localName) > hasAttributeNS returns a boolean value indicating whether the current element has the specified attribute.;
 */
    // hasAttribute("attribute(req)") > is has attribute;
    // removeAttribute("attribute(req)") > remove the attribute which you defines;


// child :
    // firstChild > get first child(comment and text (element which don't have a tags(open tag, close tag)));
    // lastChild > get last child(comment and text (element which don't have a tags(open tag, close tag)));
    // childElementCount > get child element count but not get a comment count and element count which don't have a tags(open tag, close tag);
    // firstElementChild > get first element child but not get a comment and text (element which don't have a tags(open tag, close tag));
    // lastElementChild > get last element child but not get a comment and text (element which don't have a tags(open tag, close tag));
    // node :
        // childNodes > can get child node, comment and text (element which don't have a tags(open tag, close tag));
        // childNodes[index number];
        // nodeName > get element or comment > (#comment) and text (element which don't have a tags(open tag, close tag)) > (#text);
        // nodeValue > get text (comment and text (element which don't have a tags(open tag, close tag)));
        // nodeType > if it get (1 = element), (8 = comment), (3 = text), (2 = attribute);
        // ATTRIBUTE_NODE > if it get (2)
    // children > get all child and print it in object;
    // children[index number];
    // contains:
        // contains(element to checked it) > checked if has this child give (true), else give (false);

// parent :
    // parentNode > get parent for child which has this code;
    // parentElement > worded same parentNode;

    // remove child :
    // removeChild(child which you want to removed);

    // create element & text :
        // createElement('element(div, nav, p, ...)') > create element;
        // createTextNode('text node') > create text node(this is not element);
        // createComment('comment') > create comment;
        // appendChild(child) > add child inside into;

    // insertBefore :
    // insertBefore(child, order(element not number) > for get element first child do that (child, MAIN.firstChild));


// chose element :
    // nextSibling > get next sibling (element or comment and text (element which don't have a tags(open tag, close tag)));
    // nextElementSibling > get next element sibling only;
    // previousSibling > get previous sibling (element or comment and text (element which don't have a tags(open tag, close tag)));
    // previousElementSibling > get previous element sibling only;

    // clone node:
    // .cloneNode(false(default) > get element only, true > get element, attributes);

// height & width element :
    // clientHeight > get (height, padding) element only;
    // clientWidth >  get  (width, padding) element only;
    // clientTop > get (top border element only);
    // clientLeft > get (left border element only);
    // scrollHeight > get (height, padding, scroll(invisible area)) element only;
    // scrollWidth >  get  (width, padding, scroll(invisible area)) element only;
    // offsetHeight > get (height, padding, scroll(invisible area), border) element only;
    // offsetWidth >  get  (width, padding, scroll(invisible area), border) element only;

// scroll :
  // document.documentElement.scrollTop;
  // document.documentElement.scrollLeft;

// ------------------------------------------------------------------------------------------------------------------------------------





// ---------------------------------------------------------------BOM------------------------------------------------------------------ :

// BOM > Browser Object Model;


// ??????????????????????????

// ---------------------------------------------------------------------------------------------------------------------------------------






















// important !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! :


/*
function recycle(node) {
    node = node .firstElementChild;
    if (node != null) {
        console.log(node);
        document.write(node);
    }
    while (node) {
        recycle(node);
        node = node.nextElementSibling;
        if (node != null) {
            console.log(node);
        }
    }
}

recycle(document.body);





function recycle(node) {
    node = node .firstElementChild;
    if (node != null) {
        if (node.childElementCount === 0)
        console.log(node);
    }
    while (node) {
        recycle(node);
        node = node.nextElementSibling;
        if (node != null) {
            if (node.childElementCount === 0)
            console.log(node);
        }
    }
}
recycle(document.body);


*/




// varH ? varG : varH > is a conditional or ternary operator;

// setInterval(You give it an order about reaching the specified time every time, time);
// clearInterval(cancel interval);
/*
var intervalID = window.setInterval(
    function myCallback(x, y) {
        // Your code here
        // Parameters are purely optional.
        console.log(x);
        console.log(y);
        if (y === 2) {
            clearInterval(intervalID);
        }
    }, 500, 1, 2);

*/


// ------------------------------------------------------------------------------------------------------------------------------------





























// ------------------------------------------------------------------------CONTROLFLEX------------------------------------------------------------- :

// alert :
if (document.querySelectorAll(`[data-alert=alert]`) !== undefined) {
    const element = document.querySelectorAll(`[data-alert=alert]`);
    element.forEach(ele => {
        if (ele.getAttributeNode('data-event').value === "onclick" || ele.getAttributeNode('data-event').value === "click") {
            ele.onclick =_=> {
                alert(ele.getAttributeNode('alert').value);
                ele.getElementsByTagName
            }
        } else if (ele.getAttributeNode('data-event').value === "onload" || ele.getAttributeNode('data-event').value === "load") {
            alert(ele.getAttributeNode('alert').value);
        }
    })
}

window.onload =_=> {
    /*let pageE_1 = document.getElementById('pageE-1'),
        pageE_2 = document.getElementById('pageE-2'),
        pageE_3 = document.getElementById('pageE-3');

    let link_pageE_1 = document.getElementById('link-pageE-1'),
        link_pageE_2 = document.getElementById('link-pageE-2'),
        link_pageE_3 = document.getElementById('link-pageE-3');


    link_pageE_3.onclick = function() {
        chang_link_pageE_3(this);
    }
    link_pageE_2.onclick = function() {
        chang_link_pageE_3(this);
    }
    link_pageE_1.onclick = function() {
        chang_link_pageE_3(this);
    }

    function links_pageER (link_pageR1, link_pageR2, link_pageE) {
        link_pageR1.classList.add('link-noactive-dark-blue');
        link_pageR2.classList.add('link-noactive-dark-blue');
        link_pageR1.classList.remove('link-active-dark-blue');
        link_pageR2.classList.remove('link-active-dark-blue');
        link_pageE.classList.add('link-active-dark-blue');
        link_pageE.classList.remove('link-noactive-dark-blue');
        if (link_pageE === link_pageE_1) {
            pageE_2.style.display = 'none';
            pageE_3.style.display = 'none';
            pageE_1.style.display = 'block';
        } else if (link_pageE === link_pageE_2) {
            pageE_1.style.display = 'none';
            pageE_3.style.display = 'none';
            pageE_2.style.display = 'block';
        } else if (link_pageE === link_pageE_3) {
            pageE_1.style.display = 'none';
            pageE_2.style.display = 'none';
            pageE_3.style.display = 'block';
        }
    }

    function chang_link_pageE_3(link_pageE) {
        if (link_pageE === link_pageE_1) {
            links_pageER (link_pageE_2, link_pageE_3, link_pageE_1);
        }else if (link_pageE === link_pageE_2) {
            links_pageER (link_pageE_1, link_pageE_3, link_pageE_2);
        }else if (link_pageE === link_pageE_3) {
            links_pageER (link_pageE_1, link_pageE_2, link_pageE_3);
        }
    }*/

    // slide :
    if (document.querySelectorAll('[aria-controls]') !== undefined) {
        let element = document.querySelectorAll('[aria-controls]');
        element.forEach(ele => {
            if (ele.getAttributeNode('data-slide') !== null) {
                const dependent = document.getElementById(ele.getAttribute('aria-controls'));
                if (dependent !== null) {
                    let dependent_style = window.getComputedStyle(dependent), H =  dependent.offsetHeight, PT = parseInt(dependent_style.paddingTop), PB = parseInt(dependent_style.paddingBottom), DP = dependent_style.display;
                    if (dependent.getAttributeNode('aria-expanded').value === 'true') {
                        dependent.style.display = DP;
                    } else if (dependent.getAttributeNode('aria-expanded').value === 'false') {
                        
                        if (dependent.getAttributeNode('data-media') !== null) {
                            if (dependent.getAttributeNode('data-media').value === 'true') {
                                if (window.innerWidth <= 740) {dependent.style.display = 'none';} else {dependent.style.removeProperty('display')}
                                window.addEventListener("resize", _=> {
                                    DP = dependent_style.display
                                    if (window.innerWidth <= 740) {dependent.style.display = 'none';} else {dependent.style.removeProperty('display')}
                                })
                            }
                        } else {
                            dependent.style.display = 'none';
                        }
                    }
                    if (ele.getAttributeNode('data-duration') !== null) {
                        var slide_duration = ele.getAttributeNode('data-duration').value;
                    }
                    if (dependent.getAttributeNode('data-event').value === 'click' || dependent.getAttributeNode('data-event').value === 'onclick') {
                        if (ele.getAttributeNode('data-slide').value === 'toggle') {
                            ele.onclick =_=> {
                                if (dependent.style.display === "none") {
                                    let H0 = 0, PT0 = 0, PB0 = 0,
                                        slide_down = setInterval(_=> {
                                        dependent.style.height = `${H0}px`; dependent.style.display = DP !== 'none' ? DP : 'block'; dependent.style.paddingTop = `${PT0}px`; dependent.style.paddingBottom = `${PB0}px`; dependent.style.overflow = 'hidden';
                                        PT0 < PT ? PT0++ : null; PB0 < PB ? PB0++ : null; H0 = H0 + 5;
                                        if (H0 > H) {dependent.style.removeProperty('display'); dependent.style.removeProperty('height'); dependent.style.removeProperty('width'); dependent.style.removeProperty('padding-top'); dependent.style.removeProperty('padding-bottom'); clearInterval(slide_down);};
                                    }, slide_duration !== undefined ? slide_duration / 50 : 1)
                                    ele.addEventListener('click', _=> {
                                        clearInterval(slide_down);
                                    })
                                } else {
                                    let H = dependent.offsetHeight, PT = parseInt(dependent_style.paddingTop), PB = parseInt(dependent_style.paddingBottom),
                                        H0 = H - 5, PT0 = PT, PB0 = PB,
                                        slide_up = setInterval(_=> {
                                        dependent.style.height = `${H0}px`; dependent.style.paddingTop = `${PT0}px`; dependent.style.paddingBottom = `${PB0}px`; dependent.style.overflow = 'hidden';
                                        PT0 > 0 ? PT0-- : null; PB0 > 0 ? PB0-- : null; H0 = H0 - 5;
                                        if (H0 < 0) {dependent.style.display = 'none'; dependent.style.removeProperty('height'); dependent.style.removeProperty('width'); dependent.style.removeProperty('padding-top'); dependent.style.removeProperty('padding-bottom'); (clearInterval(slide_up));}
                                    }, slide_duration !== undefined ? slide_duration / 50 : 1)
                                }
                            }
                        } else if (ele.getAttributeNode('data-slide').value === 'down') {
                            if (dependent.style.display === "none") {
                                ele.onclick =_=> {
                                    let H0 = 0, PT0 = 0, PB0 = 0,
                                        slide_down = setInterval(_=> {
                                        dependent.style.display = DP !== 'none' ? DP : 'block'; dependent.style.height = `${H0}px`; dependent.style.paddingTop = `${PT0}px`; dependent.style.paddingBottom = `${PB0}px`; dependent.style.removeProperty('overflow');
                                        PT0< PT ? PT0++ : null; PB0 < PB ? PB0++ : null; H0 = H0 + 5;
                                        H0 > H ?  dependent.style.removeProperty('display') && dependent.style.removeProperty('height') && dependent.style.removeProperty('width') && dependent.style.removeProperty('padding-top') && dependent.style.removeProperty('padding-bottom') && clearInterval(slide_down) : null;
                                    }, slide_duration !== undefined ? slide_duration / 50 : 1)
                                }
                            }
                        } else if (ele.getAttributeNode('data-slide').value === 'up') {
                            if (dependent.style.display !== 'none') {
                                ele.onclick =_=> {
                                    let H = dependent.offsetHeight, PT = parseInt(dependent_style.paddingTop), PB = parseInt(dependent_style.paddingBottom),
                                        H0 = H - 5, PT0 = PT, PB0 = PB,
                                        slide_up = setInterval(_=> {
                                        dependent.style.height = `${H0}px`; dependent.style.paddingTop = `${PT0}px`; dependent.style.paddingBottom = `${PB0}px`; dependent.style.overflow = 'hidden';
                                        PT0 > 0 ? PT0-- : null; PB0 > 0 ? PB0-- : null; H0 = H0 - 5;
                                        if (H0 < 0) {dependent.style.display = 'none'; dependent.style.removeProperty('height'); dependent.style.removeProperty('width'); dependent.style.removeProperty('padding-top'); dependent.style.removeProperty('padding-bottom'); (clearInterval(slide_up));}
                                    }, slide_duration !== undefined ? slide_duration / 50 : 1)
                                }
                            }
                        }
                    } else if (dependent.getAttributeNode('data-event').value === 'load' || dependent.getAttributeNode('data-event').value === 'onload') {
                        if (ele.getAttributeNode('data-slide').value === 'up') {
                            if (dependent.style.display !== 'none') {
                                let H = dependent.offsetHeight, PT = parseInt(dependent_style.paddingTop), PB = parseInt(dependent_style.paddingBottom),
                                H0 = H - 5, PT0 = PT, PB0 = PB,
                                slide_up = setInterval(_=> {
                                dependent.style.height = `${H0}px`; dependent.style.paddingTop = `${PT0}px`; dependent.style.paddingBottom = `${PB0}px`; dependent.style.overflow = 'hidden';
                                PT0 > 0 ? PT0-- : null; PB0 > 0 ? PB0-- : null; H0 = H0 - 5;
                                if (H0 < 0) {dependent.style.display = 'none'; dependent.style.removeProperty('height'); dependent.style.removeProperty('width'); dependent.style.removeProperty('padding-top'); dependent.style.removeProperty('padding-bottom'); (clearInterval(slide_up));}
                                }, slide_duration !== undefined ? slide_duration / 50 : 1)
                            }
                        } else if (ele.getAttributeNode('data-slide').value === 'down') {
                            if (dependent.style.display === "none") {
                                let H0 = 0, PT0 = 0, PB0 = 0,
                                slide_down = setInterval(_=> {
                                dependent.style.display = DP !== 'none' ? DP : 'block'; dependent.style.height = `${H0}px`; dependent.style.paddingTop = `${PT0}px`;dependent.style.paddingBottom = `${PB0}px`;dependent.style.overflow = '';
                                PT0 < PT ? PT0++ : null; PB0 < PB ? PB0++ : null; H0 = H0 + 5;
                                H0 > H ? dependent.style.removeProperty('display') && dependent.style.removeProperty('height') && dependent.style.removeProperty('width') && dependent.style.removeProperty('padding-top') && dependent.style.removeProperty('padding-bottom') && clearInterval(slide_down) : null;
                                }, slide_duration !== undefined ? slide_duration / 50 : 1)
                            }
                        }
                    }
                }
            }
        })
    }

    // text write :
    if (document.querySelectorAll('[aria-controls]') !== undefined) {
        const element = document.querySelectorAll('[aria-controls]');
        element.forEach(ele => {
            if (ele.getAttributeNode('data-writing') !== null && ele.getAttributeNode('data-writing').value === 'writing-text') {
                const dependent = document.getElementById(ele.getAttribute('aria-controls')),
                writing_duration = ele.getAttributeNode('data-duration').value;
                if (dependent !== null) {
                    let dependentTC = dependent.textContent, T = 0;
                    if (dependent.getAttributeNode('data-event').value === 'onclick' || dependent.getAttributeNode('data-event').value === 'click') {
                        dependent.textContent = '';
                        ele.onclick = _=> {
                            let write_text = setInterval(_=> {
                                if (dependentTC[T] !== undefined) {dependent.textContent += dependentTC[T];T++;} else {clearInterval(write_text);}
                            }, writing_duration !== undefined ? writing_duration / 100 : 100)
                        }
                    } else if (dependent.getAttributeNode('data-event').value === 'onload' || dependent.getAttributeNode('data-event').value === 'load') {
                        dependent.textContent = '';
                        let write_text = setInterval(_=> {
                            if (dependentTC[T] !== undefined) {dependent.textContent += dependentTC[T]; T++;} else {clearInterval(write_text);}
                        }, writing_duration !== undefined ? writing_duration / 100 : 100)
                    }
                }
            }
        })
    }

    // fade :
    if (document.querySelectorAll('[aria-controls]') !== undefined) {
        const element = document.querySelectorAll('[aria-controls]');
        element.forEach(ele => {
            if (ele.getAttributeNode('data-fade') !== null) {
                const dependent = document.getElementById(ele.getAttribute('aria-controls'));
                let dependent_style = window.getComputedStyle(dependent), DP = dependent_style.display;
                if (dependent.getAttributeNode('aria-expanded').value === 'true') {
                    dependent.style.display = DP;
                } else if (dependent.getAttributeNode('aria-expanded').value === 'false') {
                    dependent.style.display = 'none'
                }
                if (dependent.getAttributeNode('data-event').value === 'onclick' || dependent.getAttributeNode('data-event').value === 'click') {
                    if (ele.getAttributeNode('data-fade').value === 'toggle') {
                        ele.onclick =_=> {
                            if (dependent.style.display === 'none') {
                                dependent.style.display = 'none'; dependent.style.opacity = 0;
                                let OP = 0.000,
                                    fade_out_toggle = setInterval(_=> {
                                    dependent.style.display = DP !== 'none' ? DP : 'block'; dependent.style.opacity = OP; OP = OP + 0.05;
                                    OP > 1.05 ? dependent.style.removeProperty('opacity') && clearInterval(fade_out_toggle) : null;
                                }, 10)
                                ele.addEventListener('click', _=> {
                                    clearInterval(fade_out_toggle);
                                })
                            } else {
                                let OP = window.getComputedStyle(dependent).opacity - 0.05;
                                    fade_in_toggle = setInterval(_=> {
                                    dependent.style.opacity = OP; OP = OP - 0.05;
                                if (OP < 0.05) {dependent.style.removeProperty('opacity'); dependent.style.display = "none"; clearInterval(fade_in_toggle)};
                                }, 10)
                            }
                        }
                    } else if (ele.getAttributeNode('data-fade').value === 'in') {
                        if (dependent.style.display === 'none') {
                            dependent.style.display = 'none'; dependent.style.opacity = 0; let OP = 0.000;
                            ele.onclick =_=> {
                                let fade_out = setInterval(_=> {
                                    dependent.style.display = DP !== 'none' ? DP : 'block'; dependent.style.opacity = OP; OP = OP + 0.05;
                                    OP > 1.05 ? dependent.style.removeProperty('opacity') && clearInterval(fade_out) : null;
                                }, 10)
                            }
                        }
                    } else if (ele.getAttributeNode('data-fade').value === 'out') {
                        ele.onclick =_=> {
                            if (dependent.style.display !== 'none') {
                                let OP = window.getComputedStyle(dependent).opacity,
                                    fade_in = setInterval(_=> {
                                    dependent.style.opacity = OP; OP = OP - 0.05;
                                    if (OP < 0.05) {dependent.style.removeProperty('opacity'); dependent.style.display ='none'; clearInterval(fade_in)}
                                }, 10)
                            }
                        }
                    }
                } else if (dependent.getAttributeNode('data-event').value === 'onload' || dependent.getAttributeNode('data-event').value === 'load') {
                    if (ele.getAttributeNode('data-fade').value === 'in') {
                        if (dependent.style.display === 'none') {
                            dependent.style.display = 'none'; dependent.style.opacity = 0;
                            let OP = 0.000,
                                fade_in = setInterval(_=> {
                                dependent.style.display = DP === 'none'? 'block' : null; dependent.style.opacity = OP; OP = OP + 0.05;
                                OP > 1.05 ? dependent.style.removeProperty('opacity') && clearInterval(fade_in) : null;
                            }, 10)
                        }
                    } else if (ele.getAttributeNode('data-fade').value === 'out') {
                        if (dependent.style.display !== 'none') {
                            let OP = window.getComputedStyle(dependent).opacity,
                                fade_in = setInterval(_=> {
                                dependent.style.opacity = OP; OP = OP - 0.05;
                                if (OP < 0.05) {dependent.style.removeProperty('opacity'); dependent.style.display ='none'; clearInterval(fade_in)}
                            }, 10)
                        }
                    }
                }
            }
        })
    }

    // pop :
    if (document.querySelectorAll('[aria-controls]') !== undefined) {
        const element = document.querySelectorAll('[aria-controls]');
        element.forEach(ele => {
            if (ele.getAttributeNode('data-pop') !== null) {
                const dependent = document.getElementById(ele.getAttribute('aria-controls'));
                if (ele.getAttributeNode('data-duration') !== null) {
                    var pop_duration = ele.getAttributeNode('data-duration').value;
                }
                let dependent_style = window.getComputedStyle(dependent), H =  parseInt(dependent_style.height), W = parseInt(dependent_style.width), DP = dependent_style.display;
                if (dependent.getAttributeNode('aria-expanded').value === 'true') {
                    dependent.style.display = DP;
                } else if (dependent.getAttributeNode('aria-expanded').value === 'false') {
                    dependent.style.display = 'none'
                }
                if ((dependent.getAttributeNode('data-height') && dependent.getAttributeNode('data-width')) !== null) {
                    if (dependent.getAttributeNode('data-height').value > 80 && dependent.getAttributeNode('data-width').value > 80) {
                        var col = parseInt(dependent.getAttributeNode('data-height').value), row = parseInt(dependent.getAttributeNode('data-width').value);
                    }
                }
                if (dependent.getAttributeNode('data-event').value === 'onclick' || dependent.getAttributeNode('data-event').value === 'click') {
                    if (ele.getAttributeNode('data-pop').value === 'toggle') {
                        ele.onclick =_=> {
                            if (dependent.style.display === "none") {
                                H = parseInt(dependent_style.height); W = parseInt(dependent_style.width);
                                let H0 = col !== undefined ? col : (H / 1.4), W0 = row !== undefined ? row : (W / 1.2), OP = 0,
                                    pop_in_toggle = setInterval(_=> {
                                    dependent.style.display = DP !== "none" ? DP : "block"; dependent.style.overflow = 'hidden'; dependent.style.height = `${H0}px`; dependent.style.width = `${W0}px`; dependent.style.opacity = OP;
                                    if (OP < 1.09) {W0 < (row !== undefined ? row * 1.6 : W / 1.01) && H0 < (col !== undefined ? col * 1.8 : H / 1.11) ? OP = OP + 0.09 : null;} else {dependent.style.removeProperty('opacity');}
                                    W0 < W ? W0 = W0 + 5 : null; H0 < H ? H0 = H0 + 5 : null;
                                    if (W0 >= W && H0 >= H) {dependent.style.removeProperty('overflow'); dependent.style.removeProperty('opacity'); dependent.style.removeProperty('height'); dependent.style.removeProperty('width'); clearInterval(pop_in_toggle);}
                                }, pop_duration !== undefined ? pop_duration / 100 : 100)
                                ele.addEventListener('click', _=> {
                                    clearInterval(pop_in_toggle);
                                })
                            } else {
                                H =  parseInt(dependent_style.height); W = parseInt(dependent_style.width);
                                let H0 = H - 5, W0 = W - 5, OP = dependent_style.opacity - 0.001,
                                    pop_out_toggle = setInterval(_=> {
                                    dependent.style.display = DP !== "none" ? DP : "block"; dependent.style.overflow = 'hidden'; dependent.style.height = `${H0}px`; dependent.style.width = `${W0}px`; dependent.style.opacity = OP;
                                    if (OP > 0.09) {W0 < (row !== undefined ? row * 1.6 : W / 1.01) && H0 < (col !== undefined ? col * 1.8 : H / 1.11) ? OP = OP - 0.09 : null;} else {OP = 0;}
                                    if (OP == 0) {dependent.style.display = "none"; dependent.style.removeProperty('opacity'); dependent.style.removeProperty('overflow'); dependent.style.removeProperty('height'); dependent.style.removeProperty('width'); clearInterval(pop_out_toggle)}
                                    if (W0 > (row !== undefined ? row : W / 1.5)) {W0 = W0 - 5}; if (H0 > (col !== undefined ? col : H / 1.7)) {H0 = H0 - 5}
                                    if (W0 <= (row !== undefined ? row : W / 1.5) && H0 <= (col !== undefined ? col : H / 1.7)) {dependent.style.display = "none"; dependent.style.removeProperty('opacity'); dependent.style.removeProperty('overflow'); dependent.style.removeProperty('height'); dependent.style.removeProperty('width'); clearInterval(pop_out_toggle)};
                                }, pop_duration !== undefined ? pop_duration / 100 : 100)
                                ele.addEventListener('click', _=> {
                                    clearInterval(pop_out_toggle);
                                })
                            }
                        }
                    } else if (ele.getAttributeNode('data-pop').value === 'in') {
                        let H0 = col !== undefined ? col : (H / 1.4), W0 = row !== undefined ? row : (W / 1.2), OP = 0;
                        ele.onclick =_=> {
                            dependent.style.display = DP === "none" ? DP : "none"; dependent.style.overflow = 'hidden';
                            let pop_in = setInterval(_=> {
                                dependent.style.display = DP !== "none" ? DP : "block"; dependent.style.height = `${H0}px`; dependent.style.width = `${W0}px`; dependent.style.opacity = OP;
                                if (OP < 1.09) {W0 < (row !== undefined ? row * 1.6 : W / 1.01) && H0 < (col !== undefined ? col * 1.8 : H / 1.11) ? OP = OP + 0.09 : null;} else {dependent.style.removeProperty('opacity');}
                                W0 < W ? W0 = W0 + 5 : null; H0 < H ? H0 = H0 + 5 : null;
                                if (W0 >= W && H0 >= H) {dependent.style.removeProperty('display'); dependent.style.removeProperty('overflow'); dependent.style.removeProperty('opacity'); dependent.style.removeProperty('height'); dependent.style.removeProperty('width'); clearInterval(pop_in)}
                            }, pop_duration !== undefined ? pop_duration / 100 : 100)
                        }
                    } else if (ele.getAttributeNode('data-pop').value === 'out') {
                        let H0 = H, W0 = W, OP = 1;
                        ele.onclick =_=> {
                            dependent.style.display = DP !== "none" ? DP : "block"; dependent.style.overflow = 'hidden';
                            let pop_out = setInterval(_=> {
                                dependent.style.height = `${H0}px`; dependent.style.width = `${W0}px`; dependent.style.opacity = OP;
                                if (OP > 0.09) {W0 < (row !== undefined ? row * 1.6 : W / 1.01) && H0 < (col !== undefined ? col * 1.8 : H / 1.11) ? OP = OP - 0.09 : null;} else {OP = 0;}
                                if (W0 > (row !== undefined ? row : W / 1.5)) {W0 = W0 - 5}; if (H0 > (col !== undefined ? col : H / 1.7)) {H0 = H0 - 5}
                                if (W0 <= (row !== undefined ? row : W / 1.5) && H0 <= (col !== undefined ? col : H / 1.7)) {dependent.style.display = "none"; dependent.style.removeProperty('opacity'); dependent.style.removeProperty('overflow'); dependent.style.removeProperty('height'); dependent.style.removeProperty('width'); clearInterval(pop_out)};
                            }, pop_duration !== undefined ? pop_duration / 100 : 100)
                        }
                    }
                } else if (dependent.getAttributeNode('data-event').value === 'onload' || dependent.getAttributeNode('data-event').value === 'load') {
                    if (ele.getAttributeNode('data-pop').value === 'in') {
                        let H0 = col !== undefined ? col : (H / 1.4), W0 = row !== undefined ? row : (W / 1.2), OP = 0,
                            pop_in = setInterval(_=> {
                            dependent.style.display = DP !== "none" ? DP : "block"; dependent.style.overflow = 'hidden'; dependent.style.height = `${H0}px`; dependent.style.width = `${W0}px`; dependent.style.opacity = OP;
                            if (OP < 1.09) {W0 < (row !== undefined ? row * 1.6 : W / 1.01) && H0 < (col !== undefined ? col * 1.8 : H / 1.11) ? OP = OP + 0.09 : null;} else {dependent.style.removeProperty('opacity');}
                            W0 < W ? W0 = W0 + 5 : null; H0 < H ? H0 = H0 + 5 : null;
                            if (W0 >= W && H0 >= H) {dependent.style.removeProperty('display'); dependent.style.removeProperty('overflow'); dependent.style.removeProperty('opacity'); dependent.style.removeProperty('height'); dependent.style.removeProperty('width'); clearInterval(pop_in)}
                        }, pop_duration !== undefined ? pop_duration / 100 : 100)
                    } else if (ele.getAttributeNode('data-pop').value === 'out') {
                        let H0 = H, W0 = W, OP = 1;
                        dependent.style.display = DP !== "none" ? DP : "block"; dependent.style.overflow = 'hidden';
                        let pop_out = setInterval(_=> {
                            dependent.style.height = `${H0}px`; dependent.style.width = `${W0}px`; dependent.style.opacity = OP;
                            if (OP > 0.09) {W0 < (row !== undefined ? row * 1.6 : W / 1.01) && H0 < (col !== undefined ? col * 1.8 : H / 1.11) ? OP = OP - 0.09 : null;} else {OP = 0;}
                            if (W0 > (row !== undefined ? row : W / 1.5)) {W0 = W0 - 5}; if (H0 > (col !== undefined ? col : H / 1.7)) {H0 = H0 - 5}
                            if (W0 <= (row !== undefined ? row : W / 1.5) && H0 <= (col !== undefined ? col : H / 1.7)) {dependent.style.display = "none"; dependent.style.removeProperty('overflow'); dependent.style.removeProperty('height'); dependent.style.removeProperty('width'); clearInterval(pop_out)};
                        }, pop_duration !== undefined ? pop_duration / 100 : 100)
                    }
                }
            }
        })
    }


    if (document.querySelectorAll('[data-target]') !== undefined) {
        const element = document.querySelectorAll('[data-target]');
        element.forEach(ele => {
            const dependent = document.getElementById(ele.getAttribute('data-target'));
            if (dependent.getAttributeNode('data-add-class') !== null) {
                if (dependent.getAttributeNode('data-event').value === 'onclick' || dependent.getAttributeNode('data-event').value === 'click') {
                    ele.addEventListener('click', _=> {
                        dependent.classList.add(dependent.getAttributeNode('data-add-class').value);
                    })
                } else if (dependent.getAttributeNode('data-event').value === 'onload' || dependent.getAttributeNode('data-event').value === 'load') {
                    dependent.classList.add(dependent.getAttributeNode('data-add-class').value);
                }
            }
        })
    }


   let scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
   if (document.querySelectorAll(`[data-event=scroll]`) !== undefined) {
    let element = document.querySelectorAll(`[data-event=scroll]`);
    function loop() {
        Array.prototype.forEach.call(element, function(ele) { 
            let eleclass = ele.getAttributeNode('data-class').value;
            var rect = ele.getBoundingClientRect();
            if ((rect.top <= 0 && rect.bottom >= 0) || (rect.bottom >= window.innerHeight && rect.top <= window.innerHeight) || (rect.top >= 0 && rect.bottom <= window.innerHeight)) {
                if (eleclass !== undefined) {ele.classList.add(eleclass);}
            } else {
                if (eleclass !== undefined) {ele.classList.remove(eleclass);   }
            }
        }); scroll(loop);
    } loop();
   }
}





/*
textE.textContent = '';
buttonE.onclick = function () {
    let intr = setInterval(function () {
        if (textC[i] !== undefined) {
            textE.textContent += textC[i];
            i++;
        } else {
            clearInterval(intr);
        }
        if (i > textC.length - 1) {
            clearInterval(intr);
        }
    }, 200)
}
*/





/*
function getH(el) {
    let el_style      = window.getComputedStyle(el),
        el_display    = el_style.display,
        el_position   = el_style.position,
        el_visibility = el_style.visibility,
        el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),

        wanted_height = 0;


    // if its not hidden we just return normal height
    if(el_display !== 'none' && el_max_height !== '0') {
        return el.offsetHeight;
    }

    // the element is hidden so:
    // making the el block so we can meassure its height but still be hidden
    el.style.position   = 'absolute';
    el.style.visibility = 'hidden';
    el.style.display    = 'block';

    wanted_height     = el.offsetHeight;

    // reverting to the original values
    el.style.display    = el_display;
    el.style.position   = el_position;
    el.style.visibility = el_visibility;
    console.log(el);

    return wanted_height;
};

getH(document.getElementById('slideDown-2'))

*/





/*

let form_inputs_width_height = $('#form-inputs-width-height'),
    input_width = document.getElementById('input-width'),
    input_height = document.getElementById('input-height'),
    space_work = document.getElementById('space-work'),
    nodeArray = [];

function recycle(node) {
    node = node.firstElementChild;
    if (node !== null) {
        console.log(node);
        nodeArray.push(node);
    }
    while (node) {
        recycle(node);
        node = node.nextElementSibling;
        if (node !== null) {
            console.log(node);
            nodeArray.push(node);
        }
    }
}

recycle(space_work);


for (let i = 0; i < nodeArray.length; i++) {
    pageE_3.appendChild(nodeArray[i]);
}
*/




/*
for (let i = 0; i < nodeArray.length; i++) {
    nodeArray[i].onclick = function () {
        input_width.onkeyup = function () {
            let input_width_value = input_width.value;
            if (typeof nodeArray[i] !== 'undefined') {
                nodeArray[i].style.width = `${input_width_value}`;
            }
        }
        input_height.onkeyup = function () {
            let input_height_value = input_height.value;
            if (typeof nodeArray[i] !== 'undefined') {
                nodeArray[i].style.height = `${input_height_value}`;
            }
        }
    }
}
*/



/*

let slide = $('[slide-down-ID]');
for (let i = 0; i < slide.length; i++) {
    console.log(slide.attr('slide-down-id'));
    let slide_ID = $(`#${slide.attr('slide-down-id')}`);
    console.log(slide_ID);
}





*/











/*



let ariaDisabled = document.querySelectorAll("[all-disabled='true']"),
    i;
for (i = 0; i < ariaDisabled.length; i++) {
    let ariaDisabledArray = ariaDisabled[i];

    function recycle(node) {
        node = node .firstElementChild;
        if (node != null) {
            if (node.childElementCount === 0)
                node.setAttribute('disabled', null);
        }
        while (node) {
            recycle(node);
            node = node.nextElementSibling;
            if (node != null) {
                if (node.childElementCount === 0)
                    node.setAttribute('disabled', null);
            }
        }
    }
    recycle(ariaDisabledArray);
}



*/












/* css :

// --------------------------------------border img :

// Keyword value
border-image-source: none;

// <image> values
border-image-source: url(image.jpg);
border-image-source: url('/media/examples/border-stars.png');
border-image-source: linear-gradient(to top, red, yellow);
border-image-source: repeating-linear-gradient(45deg, transparent, #4d9f0c 20px);

// Global values
border-image-source: inherit;
border-image-source: initial;
border-image-source: unset;

// ---------------------------------------------------



// ---------------------------------------cursor :

// Keyword value
cursor: pointer;
cursor: auto;

// URL, with a keyword fallback
cursor: url(hand.cur), pointer;

// URL and coordinates, with a keyword fallback
cursor: url(cursor1.png) 4 12, auto;
cursor: url(cursor2.png) 2 2, pointer;
cursor: url(one.svg), url(two.svg) 5 5, progress;

// Global values
cursor: inherit;
cursor: initial;
cursor: unset;

// ------------------------------------------------



// ---------------------------------------mask img :

// Keyword value
mask-image: none;

/* <mask-source> value
mask-image: url(masks.svg#mask1);

// <image> values
mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);
mask-image: image(url(mask.png), skyblue);

// Multiple values
mask-image: image(url(mask.png), skyblue), linear-gradient(rgba(0, 0, 0, 1.0), transparent);

// Global values
mask-image: inherit;
mask-image: initial;
mask-image: unset;

// -------------------------------------------------


// ------------------------------------shap outside :

// Keyword values
shape-outside: none;
shape-outside: margin-box;
shape-outside: content-box;
shape-outside: border-box;
shape-outside: padding-box;

// Function values
shape-outside: circle();
shape-outside: circle(50%);
shape-outside: ellipse();
shape-outside: ellipse(130px 140px at 20% 20%);
shape-outside: inset(10px 10px 10px 10px);
shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);
shape-outside: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
shape-outside: path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z');

// <url> value
shape-outside: url(image.png);
shape-outside: url(/media/examples/round-balloon.png);

// <gradient> value
shape-outside: linear-gradient(45deg, rgba(255, 255, 255, 0) 150px, red 150px);

// Global values
shape-outside: initial;
shape-outside: inherit;
shape-outside: unset;

// --------------------------------------------------


// -----------------------------------------animation:

// Single animation
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

// Multiple animations
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;




// Single animation
animation-dicliention: normal;
animation-dicliention: reverse;
animation-dicliention: alternate;
animation-dicliention: alternate-reverse;

// Multiple animations 
animation-dicliention: normal, reverse;
animation-dicliention: alternate, reverse, normal;

// Global values 
animation-dicliention: inherit;
animation-dicliention: initial;
animation-dicliention: unset;

// ---------------------------------------------------

*/


/* -------------------------------------------------------ECMAscript6---------------------------------------------------------- */
/*

function :
() => {
    // statemant;
}

if it dont have any prameter :
() = _;
_ => {
    // statement;
}

(...array name) > get item for array
let array1 = [1, 2, 3],
    array2 = [2, 3],
    arraym = [1, 2, 3, ...ar2];
console.log(arraym);

*/
/* ------------------------------------------------------------------------------------------------------------------------------ */
