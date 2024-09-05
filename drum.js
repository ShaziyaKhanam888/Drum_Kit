const buttons = document.querySelectorAll(".drum-btn"); // Select all buttons

const audioFiles = {
  E: "./audio/crashit.mp3",
  R: "./audio/kick.mp3",
  G: "./audio/hand-drum.mp3", // Used for G, F, and H buttons
  F: "./audio/hand-drum.mp3",
  H: "./audio/hand-drum.mp3",
  I: "./audio/crashwav.mp3",
  J: "./audio/kick.mp3",
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const audio = new Audio(audioFiles[button.id]);
    audio.play();
  });
});
