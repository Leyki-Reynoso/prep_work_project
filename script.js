// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const maxTime = 20;
//Global Variables
var clueHoldTime = 800; //how long to hold each clue's light/sound
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var guessCounter = 0;
var length = 4;
var volume = 1;  //must be between 0.0 and 1.0
var pattern = [];
var max = 4; 
var life = 3;
var time = maxTime;
document.getElementById('countdown').innerHTML = "time left: " + `${maxTime}`;
var timer = setInterval(countDown, 1000);
time = maxTime;
clearInterval(timer);
var audio = document.getElementById("background");
audio.volume = 0.2;

function countDown(){
  let seconds = time % 60
  document.getElementById('countdown').innerHTML = "time left: " + `${seconds}`;
  time--;
  if(time < 0)
  {
    loseGame();
  }
}
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}  
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function startGame(){
    pattern = [];
    clueHoldTime = 800; //how long to hold each clue's light/sound
    //initialize game variables
    life = 3;
    document.getElementById("lifes").innerHTML ="Lifes: " + life;
    progress = 0;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    //initialize game variables
    gamePlaying = true;
    progress = 0; 
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    time = maxTime;
    clearInterval(timer);
    life = 3;
    document.getElementById("lifes").innerHTML ="Lifes: " + life;

}

// Sound Synthesis Functions
const tones = {
  1: new Audio("https://cdn.glitch.com/1f47ed9e-f462-403e-8418-c05d86056ae4%2Fzapsplat_animals_bird_cockatoo_black_squawk_slight_distance_003_41717.mp3?v=1616359111205"),
  2: new Audio("https://cdn.glitch.com/1f47ed9e-f462-403e-8418-c05d86056ae4%2FBlastwave_FX_MonkeyScreechSing_S08AN.199.mp3?v=1616362330496"),
  3: new Audio("https://cdn.glitch.com/1f47ed9e-f462-403e-8418-c05d86056ae4%2FBlastwave_FX_HorseBlowLips_S08AN.123.mp3?v=1616362421153"),
  4: new Audio("https://cdn.glitch.com/1f47ed9e-f462-403e-8418-c05d86056ae4%2FFrog%20Sound%20%231%20-%20Sound%20Effects-%5BAudioTrimmer.com%5D.mp3?v=1616363663394"),
  5: new Audio("https://cdn.glitch.com/1f47ed9e-f462-403e-8418-c05d86056ae4%2Fanimals_elephant_trumpeting_calm.mp3?v=1616363801288"),
  6: new Audio("https://cdn.glitch.com/1f47ed9e-f462-403e-8418-c05d86056ae4%2Faudio_hero_Wolf_DIGIC05-01-%5BAudioTrimmer.com%5D.mp3?v=1616364069217"),
}
function playTone(btn,len){ 
  tones[btn].play();
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.1; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}
function startTone(btn){
  if(!tonePlaying){
    tones[btn].play();
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}
function playSingleClue(btn){
  
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  pattern.push(Math.round(Math.random() * 6))
  time = maxTime;
  clearInterval(timer);
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  timer = setInterval(countDown, 1000);
}
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == max){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
        clueHoldTime = clueHoldTime-100;
        pattern.push(Math.round(Math.random() * 6))
        guessCounter = guessCounter+1;
      }    
  }
  else{
    life = life-1;
    document.getElementById("lifes").innerHTML ="Lifes: " + life;
      if(life <= 0){
      loseGame();
      }
  }
  
}
//Page Initialization
// Init Sound Synthesizer
document.getElementById("lifes").innerHTML ="Lifes: " + life;
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

