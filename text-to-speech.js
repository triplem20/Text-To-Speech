let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceselected = document.querySelector("select");

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; 

    
    voiceselected.innerHTML = "";

    voices.forEach((voice, i) => {
        voiceselected.options[i] = new Option(voice.name, i);
    });
}


window.speechSynthesis.onvoiceschanged = populateVoiceList;


populateVoiceList();

voiceselected.addEventListener("change", () => {
    speech.voice = voices[voiceselected.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
