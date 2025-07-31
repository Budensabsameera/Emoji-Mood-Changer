function setMood(mood) {
  let emoji = document.getElementById("emoji");
  let moodText = document.getElementById("mood");

  if (mood === "happy") {
    emoji.textContent = "😄";
    moodText.textContent = "You're feeling Happy!";
  } else if (mood === "sad") {
    emoji.textContent = "😢";
    moodText.textContent = "Aww... you're Sad!";
  } else if (mood === "angry") {
    emoji.textContent = "😡";
    moodText.textContent = "You're Angry!";
  } else if (mood === "love") {
    emoji.textContent = "😍";
    moodText.textContent = "You're in Love!";
  } else if (mood === "sleepy") {
    emoji.textContent = "😴";
    moodText.textContent = "You're Sleepy!";
  }
}
