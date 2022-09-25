let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  let voiceSelect = document.querySelector("#voices");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

document.querySelector("#rate").addEventListener("input", () => {
  const rate = document.querySelector("#rate").value;
  speech.rate = rate;
  document.querySelector("#rate-label").innerHTML = rate;
});

document.querySelector("#volume").addEventListener("input", () => {
  const volume = document.querySelector("#volume").value;
  speech.volume = volume;
  document.querySelector("#volume-label").innerHTML = volume;
});

document.querySelector("#pitch").addEventListener("input", () => {
  const pitch = document.querySelector("#pitch").value;
  speech.pitch = pitch;
  document.querySelector("#pitch-label").innerHTML = pitch;
});

document.querySelector("#voices").addEventListener("change", () => {
  speech.voice = voices[document.querySelector("#voices").value];
});

document.querySelector(".articleSectionOne").addEventListener("click", () => {
  speech.text = document.querySelector(".ggg").innerHTML;
  // speech.text = document.querySelector("main img").alt;
  window.speechSynthesis.speak(speech);
});

document.querySelector(".articleSectionTwo").addEventListener("click", () => {
  speech.text = document.querySelector(".gggg").innerHTML;
  // speech.text = document.querySelector("main img").alt;
  window.speechSynthesis.speak(speech);
});

document.querySelector("#pause").addEventListener("click", () => {
  window.speechSynthesis.pause();
});

document.querySelector("#resume").addEventListener("click", () => {
  window.speechSynthesis.resume();
});

document.querySelector("#cancel").addEventListener("click", () => {
  window.speechSynthesis.cancel();
});

// Voice recognition starts here
const speechRecognition = window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = function(){
    //RECORDING YOUR AUDIO INPUT
}
recognition.onresult=function(event){
    var heardResult = event.results[0][0].transcript;
    var heardConfidence = event.results[0][0].confidence;
    var speech = new SpeechSynthesisUtterance();
    
    speech.text = heardResult;
    // document.getElementById("output").innerHTML = "You just spoke: "+heardResult;
    document.getElementById("searchTxt").value = heardResult;
    document.getElementById("confidence").innerHTML = ("CONFIDENCE PERCENTAGE: "+ (heardConfidence*100) + "%" );
    window.speechSynthesis.speak(speech);
}
// ends here

// dark mode and light mode starts here
function toggleMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function toggleColor() {
  const boxes = document.querySelectorAll('.card');
  boxes.forEach(box => {
    box.classList.toggle("articlesColorChange");
  });
}
function toggleHighlights() {
  const hightlights = document.querySelectorAll('p,h2,h5,h1,h3');
  hightlights.forEach(hightlight => {
    hightlight.classList.toggle("labelHighlight");
  });
}

function openCustomSide() {
  var elementCustomSide = document.getElementsByClassName("customeSection")[0];
  elementCustomSide.classList.toggle("d-block");
}
// ends here

// font-size increase and decrease script starts here
var min = 16;
var max = 28;

function increaseFontSize() {
  var elems = document.querySelectorAll('p,h2,h5,h1,h3');
  for (i = 0; i < elems.length; i++) {
    if (elems[i].style.fontSize) {
      var s = parseInt(elems[i].style.fontSize.replace("px", ""));
    } else {
      var s = 12;
    } if (s != max) {
      s += 1;
    }
    elems[i].style.fontSize = s + "px"
  }
}

function decreaseFontSize() {
  var elems = document.querySelectorAll('p,h2,h5,h1, blockquote');
  for (i = 0; i < elems.length; i++) {
    if (elems[i].style.fontSize) {
      var s = parseInt(elems[i].style.fontSize.replace("px", ""));
    } else {
      var s = 12;
    } if (s != min) {
      s -= 1;
    }
    elems[i].style.fontSize = s + "px"
  }
}

document.querySelector('#increase').addEventListener('click', increaseFontSize);


document.querySelector('#decrease').addEventListener('click', decreaseFontSize);
// ends here

