document.getElementById("generateBtn").addEventListener("click", function () {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);
  const resultEl = document.getElementById("result");

  if (isNaN(min) || isNaN(max)) {
    resultEl.textContent = "אנא הזן שני מספרים תקינים";
    return;
  }

  if (min > max) {
    resultEl.textContent = "המספר המינימלי גדול מהמקסימלי";
    return;
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // הצגת המספר כשהמינוס יופיע בצד שמאל
  resultEl.innerHTML = `המספר שהוגרל: <span dir="ltr">${randomNumber}</span>`;
});