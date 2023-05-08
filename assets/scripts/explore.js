// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const speak = document.getElementById("text-to-speak");
  const options = document.getElementById("voice-select");
  const smile = document.getElementsByTagName("img")[0];
  const btn = document.getElementsByTagName("button")[0];
  var synth = window.speechSynthesis;
  var msg = new SpeechSynthesisUtterance();

  var timer = setInterval(function () {
    const voices = speechSynthesis.getVoices();
    if (voices.length !== 0) {
      for (let i = 0; i < voices.length; i++) {
        var newOption = document.createElement("option");
        newOption.textContent = `${voices[i].name} (${voices[i].lang})`;
        newOption.setAttribute("data-lang", voices[i].lang);
        newOption.setAttribute("data-name", voices[i].name);
        newOption.setAttribute("value", i);
        options.appendChild(newOption);
      }

      speak.onchange = function () {
        msg.text = speak.value;
      };
      options.onchange = function () {
        msg.voice = voices[options.value];
      };
      msg.volume = 1;

      clearInterval(timer);
    }
  }, 200);

  btn.addEventListener("click", () => {
    speechSynthesis.speak(msg);
    setTimeout(function () {
      let i = 0;
      if (synth.speaking) {
        var speaketh = setInterval(function () {
          if (!synth.speaking) {
            clearInterval(speaketh);
          }
          if (i % 2 == 0) {
            smile.src = "/assets/images/smiling-open.png";
          } else {
            smile.src = "/assets/images/smiling.png";
          }
          if (!synth.speaking) {
            clearInterval(speaketh);
          }
          i++;
        }, 200);
      }
    }, 250);
  });
}
