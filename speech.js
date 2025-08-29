
const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "hi-INDIA";
  voice.volume = 5;
  voice.rate = 1.5;
  voice.pitch = 1.5; 
  synth.speak(voice);
}