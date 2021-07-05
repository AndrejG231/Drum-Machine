const keys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

function highLight(el, duration, key) {
  el.classList.add("bg-primary");
  $("#display").get(0).innerText = key;
  setTimeout(() => {
    el.classList.remove("bg-primary");
    $("#display").get(0).innerText = "";
  }, duration);
}

keys.forEach((key) => {
  const el = $(`#${key}`);
  const sound = $(`#${key.toUpperCase()}`);

  const playSound = () => {
    sound[0].currentTime = 0;
    sound.trigger("play");
    const length = sound[0].duration;
    highLight(el[0], length * 1000, key.toUpperCase());
  };

  const eventHandler = (e) => {
    if (e.key.toLowerCase() === key) {
      playSound();
    }
  };

  el.click(playSound);

  window.addEventListener("keypress", eventHandler);
});
