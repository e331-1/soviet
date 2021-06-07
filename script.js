//題名、music/video、再生するファイル名、ボタンの画像、歌詞のファイル
//['ソ連国歌', 'Катюша', 'säkkijärven polkka', 'ソビエトマーチ', 'タチャンカ', '音割れソビエト','攻撃戦だ','我々はあなたしか知らない'];
var musiclist=[
    ["ソ連国歌","music","music/0.mp3","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hammer_and_sickle.svg/1024px-Hammer_and_sickle.svg.png",null],
    ["ソ連国歌(動画)","video","music/4.mp4","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hammer_and_sickle.svg/1024px-Hammer_and_sickle.svg.png","lyrics/4.json"],
    ["Катюша","music","music/1.mp3","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hammer_and_sickle.svg/1024px-Hammer_and_sickle.svg.png",null],
    ["säkkijärven polkka","music","music/2.mp3","images/1.png",null],
    ["ソビエトマーチ","music","music/3.mp3","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hammer_and_sickle.svg/1024px-Hammer_and_sickle.svg.png",null],
    ["タチャンカ","music","music/4.mp3","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hammer_and_sickle.svg/1024px-Hammer_and_sickle.svg.png",null],
    ["音割れソビエト","music","music/5.mp3","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hammer_and_sickle.svg/1024px-Hammer_and_sickle.svg.png",null],
    ["攻撃戦だ","music","music/6.mp3","images/0.png",null],
    ["我々はあなたしか知らない","video","music/1.mp4","images/0.png","lyrics/1.json"],
    ["我が党永遠に従います","video","music/2.mp4","images/0.png","lyrics/2.json"],
    ["前進する社会主義","video","music/3.mp4","images/0.png","lyrics/3.json"]
]
window.addEventListener('DOMContentLoaded', function(){
    document.addEventListener("visibilitychange", function() {
      console.log(document.visibilityState);
      
      document.getElementById('stop').click();
      location.href='http://google.com';
      console.log('hidden');

    });
  });
  console.log(document.referrer);
  if (document.referrer.indexOf("google.com") !== -1) {
    location.href='http://google.com';
  }
var audio = document.getElementById("audio");
var now = document.getElementById("now");
var music = 0;
var videoplay=false;
var audioplay=false;
var cou=0;
const xhr = new XMLHttpRequest();
const defcontent = document.getElementById("content").innerHTML;
now.innerText = "ソ連国歌";
function next() {
    if(typeof musiclist[music+1] !== "undefined"){
        music++;
        now.innerText =  musiclist[music][0];
        document.getElementById("mainbutton").style.backgroundImage="url("+ musiclist[music][3]+")";
    }
}
function back() {;
    if(typeof musiclist[music-1] !== "undefined"){
        music--;
        now.innerText =  musiclist[music][0];
        document.getElementById("mainbutton").style.backgroundImage="url("+ musiclist[music][3]+")";
    }
}
function play() {
    if(musiclist[music][1]=="music"){
        console.log("music");
        console.log(musiclist[music][2]);
        document.getElementById("stop").click();
        document.getElementById("content").innerHTML=defcontent;

        audio.src=musiclist[music][2];
        if(musiclist[music][4]!==null){
            xhr.open('get', musiclist[music][4],false);
            xhr.send();
            if (xhr.readyState == 4 && xhr.status == 200) {
                srt = xhr.responseText;
                console.log("srt");
            }
            console.log(srt);
            var srt = JSON.parse(srt);
            setInterval(function(){
                //console.log(Math.round(v.currentTime*100)/100);
                if(Math.round(video.currentTime*100)/100==srt[cou][0]){
                    document.getElementById('l').innerHTML=srt[cou][1];
                    cou++;
                    console.log(srt[cou][1]);
                }
            },1)
        }
        audio.play();
        audioplay=true;
    }else if(musiclist[music][1]=="video"){
        console.log(defcontent);
        document.getElementById("content").innerHTML="<video id='video' width='210px'></video><input type='button' onclick='big()' id='bigbutton' value='でっかくちっさく'><p id='l'></p>"
        document.getElementById("stop").click();

        var video = document.getElementById("video");
        

        console.log("video");
        console.log(musiclist[music][2]);
        video.src=musiclist[music][2];
        video.play();
        videoplay=true;
        
        //var srt ='[[7.92,"我々はあなたしか知らない"],[20.53," 朝鮮を率いる力も強く"],[25.15,"人民の運命をその身に抱え"],[29.46,"我らが望む 夢と理想 "],[33.36,"すべて花咲かせる方"],[37.99,"偉大なる <b>金正恩</b>同志"],[42.6,"我らはあなたしか知らない"],[46.86,"偉大なる <b>金正恩</b>同志"],[51.4,"あなたに尽くします"],[57.69,"まばゆいその理想 我らの目標だ"],[62.18,"霊将の決心は 人民の勝利"],[66.53,"あの方は示す ただ一つの途を"],[70.37,"千万の 爆風が吹き荒れる"],[75.22,"偉大なる <b>金正恩</b>同志"],[80.02,"我らはあなたしか知らない"],[83.79,"偉大なる <b>金正恩</b>同志"],[88.42,"あなたに尽くします"],[92.76,""],[114.45,"天地が入れ替わろうとも 逆風が吹こうとも"],[118.85,"我らの心にはあなたがいる"],[123.16,"最後まで生死を共にする"],[127.16,"その領導だけを奉る"],[131.96,"偉大なる <b>金正恩</b>同志"],[136.45,"我らはあなたしか知らない"],[140.69,"偉大なる <b>金正恩</b>同志"],[145.73,"あなたに尽くします"],[149.08,"偉大なる <b>金正恩</b>同志"],[154.05,"我らはあなたしか知らない!"],[158.28,"偉大なる <b>金正恩</b>同志"],[162.86,"あなたに尽くします"]]';
        if(musiclist[music][4]!==null){
            xhr.open('get', musiclist[music][4],false);
            xhr.send();
            if (xhr.readyState == 4 && xhr.status == 200) {
                srt = xhr.responseText;
                console.log("srt");
            }
            console.log(srt);
            var srt = JSON.parse(srt);
            setInterval(function(){
                //console.log(Math.round(v.currentTime*100)/100);
                if(Math.round(video.currentTime*100)/100==srt[cou][0]){
                    document.getElementById('l').innerHTML=srt[cou][1];
                    cou++;
                    console.log(srt[cou][1]);
                }
            },1)
        }

    }
}
function stop() {
    audio.pause();
    audio.currentTime = 0;
    video.pause();
    video.currentTime = 0;
    videoplay=false;
    audioplay=false;
    cou=0;

    /*if(musiclist[music][1]=="music"){
        console.log("music");
        audio.pause();
        audio.currentTime = 0;
    }else if(musiclist[music][1]=="video"){
        console.log("video");
        video.pause();
        video.currentTime = 0;
        cou=0;
    */
}

document.addEventListener('keydown', (event) => {
    var key=event.key;
    console.log(event.key);
    if(key=="Enter"){
        document.getElementById("mainbutton").click();
    }
    if(key=="ArrowRight"){
        document.getElementById("next").click();
    }
    if(key=="ArrowLeft"){
        document.getElementById("back").click();
    }
    if(key==" "){
        document.getElementById("stop").click();
    }
    if(key=="f"){
        document.getElementById("bigbutton").click();
    }

});
var bigor=false;
function big(){
    if(bigor){
        video.setAttribute("width","210px");
        document.getElementById("soviet").style.display="block";
        bigor=false;
        document.getElementById("bigbutton").style.display="block";
        document.getElementById("l").style.display="block";
        document.getElementById("content").style.width="210px";
    }else{
        if(document.body.clientWidth<550){
            video.setAttribute("width","210px");
        }else{
            video.setAttribute("width","490px");
        }
        //white-space: nowrap
        document.getElementById("bigbutton").style.display="inline";
        document.getElementById("l").style.display="inline";
        document.getElementById("content").style.width="500px";
        document.getElementById("soviet").style.display="none";
        bigor=true;
    }
}

//xhr.open('GET', '1.srt', true);
