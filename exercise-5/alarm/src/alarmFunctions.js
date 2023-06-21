function handleClose(audio) {
  audio.pause();
  document.getElementById("alarmWindow").style.visibility = "hidden";
}

export { handleClose };
