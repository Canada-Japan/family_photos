first = 0;
d_count = 0;
var w_d = "";
function div_show(){
    d_count++;
    if(d_count == 1){
document.getElementById("div").style.display = "block";
document.getElementById("h40").style.backgroundColor = "black";
document.getElementById("h40").style.color = "white";
    }else{
        document.getElementById("div").style.display = "none";
        d_count = 0;
    }
    
}
function d_n(){
    d_count = 0;
    document.getElementById("now").style.display = "block";
    document.getElementById("div").style.display = "none";
 ani();
 
}
function d_send(){
    var url = "https://script.google.com/macros/s/AKfycbyyp-_QHtASGObrYVG3x9czHnC78URtgKu7Cb3MDmdxV_aiNbrVoE4lGgMnQTXYkerU/exec";
    //ddata = encodeURI(w_d);
    var data = [{
      //  "data":ddata
      "data":w_d
    }];
    var params = {
        "method":"post",
        "mode":"no-cors",
        "Content-Type":"application/json",
        "body":JSON.stringify(data)
    }
    fetch(url,params);
    console.log(JSON.stringify(data))
}
var branch = "run";
ani_c = 0;
function ani(){
if(branch == "run"){
    ani_c++;
    if(ani_c == 1){
        document.getElementById("now").innerHTML = "Loading.";
        setTimeout(ani,1000)
    }else if(ani_c == 2){
        document.getElementById("now").innerHTML = "Loading..";
        setTimeout(ani,1000)
    }else if(ani_c == 3){
        document.getElementById("now").innerHTML = "Loading...";
        ani_c = 0;
        setTimeout(ani,1000)
    }
}else if(branch == "pre"){
    document.getElementById("now").innerHTML = "preparing...";
    setTimeout(ani,1000)
}
else if(branch == "fin"){
    ani_c = 0;
    branch = "run";
    document.getElementById("now").innerHTML = w_d;
}else{
    ani_c = 0;
    branch = "run";
    document.getElementById("now").innerHTML = "error";
}
}
function load2(){
    d_send();
    branch = "pre";
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    fetch(url,{
    "method":"GET",
    "mode":"cors"
    })
    .then(response =>{
    if(response.ok){
    return response.json();
    }
    })
    .then(resJson =>{
    jsondata = resJson;
     last = jsondata.length;
     console.log("last:"+last);
     console.log(jsondata);
     if(first == 1){
     document.getElementById("d").remove();
     }
     first = 1;
     text = "<div id="+"\""+"d"+"\""+"></div>";
     dd.insertAdjacentHTML("beforeend",text);
     for(var a=0;a<last;a++){
        text = "https://matsuoka18.github.io/grandparents/pic/"+jsondata[a]+".jpg";
        console.log(text);
        textdata = "<img src="+"\""+text+"\""+">";
        console.log(textdata);
        d.insertAdjacentHTML("beforeend",textdata);
     }
     branch = "fin";
    })
    .catch(error=>{
    console.log("error");
    alert(error);
    })
    }
function load(){
    n = document.getElementById("text").value;
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    number = 2;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}

//下から表示させる要素を指定
let $pagetop = $('.scroll');
$(window).on( 'scroll', function () {
  //スクロール位置を取得
  if ( $(this).scrollTop() < 400 ) {
    $pagetop.removeClass('isActive');
  } else {
    $pagetop.addClass('isActive');
  }
});
function next(){
    document.getElementById("all").style.display ="none";
    document.getElementById("all").style.opacity = 0;
    document.getElementById("all2").style.display ="block";
    document.getElementById("all2").style.opacity = 1;
}
function p1(){
    w_d = "旧松尾邸";
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 1;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p2(){
    w_d = "八ヶ岳"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 2;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p3(){
    w_d = "西鎌倉幼稚園"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 3;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p4(){
    w_d = "西鎌倉小学校"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 4;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p5(){
    w_d = "新松尾邸"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 5;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p6(){
    w_d = "スキー場"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 6;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p7(){
    w_d = "ははその森"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 7;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p8(){
    w_d = "場所不明"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 8;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p9(){
    w_d = "羽田空港"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 9;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p10(){
    w_d = "旧旧松尾邸"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 10;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p11(){
    w_d = "観泉寺幼稚園"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 11;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p12(){
    w_d = "井の頭公園"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 12;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p13(){w_d = "結婚式"
     url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 13;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
    }
function p14(){w_d = "消防博物館"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 14;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p15(){w_d = "吉祥寺周辺"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 15;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p16(){w_d = "東京おもちゃ美術館"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 16;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p17(){w_d = "トトロの森"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 17;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p18(){w_d = "祖父母家（父）"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 18;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p19(){w_d = "祖父母家（母）"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 19;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p20(){w_d = "駅・車内"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 20;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p21(){w_d = "浅草など"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 21;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p22(){w_d = "東京のプール"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 22;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}

function p23(){w_d = "鎌倉"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 23;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p24(){w_d = "江ノ島"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 24;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}

function p25(){w_d = "辻堂海浜公園"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 25;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p26(){w_d = "鎌倉芸術館"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 26;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}

function p27(){w_d = "動物園"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 27;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p28(){w_d = "森永鶴見工場"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 28;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}

function p29(){w_d = "サッカー"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 29;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}

function p30(){w_d = "小田原の公園"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 30;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p31(){w_d = "ディズニー"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 31;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}

function p32(){w_d = "伊豆"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 32;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}

function p33(){w_d = "東京都美術館・上野動物園"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 33;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p34(){w_d = "国立科学博物館"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 34;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p35(){w_d = "ドラえもんミュージアム"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 35;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p36(){w_d = "品川アクアパーク"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 36;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p37(){w_d = "日産車体"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 37;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function p38(){w_d = "ムーミン展"
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 38;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}
function place(){
var da = function(){
    $(this).css('background-color','red');
    $('#h41').hover(da)
}
}
