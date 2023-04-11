function boldText() {
  document.getElementById("textArea").style.fontWeight = "bold";
}

function italicText() {
  document.getElementById("textArea").style.fontStyle = "italic";
}

function alignLeftText() {
  document.getElementById("textArea").style.textAlign = "left";
}

function alignCenterText() {
  document.getElementById("textArea").style.textAlign = "center";
}

function alignRightText() {
  document.getElementById("textArea").style.textAlign = "right";
}

function makeUppercase() {
  document.getElementById("textArea").value = document
    .getElementById("textArea")
    .value.toUpperCase();
}

function makeLowercase() {
  document.getElementById("textArea").value = document
    .getElementById("textArea")
    .value.toLowerCase();
}

function capitalizeText() {
  let textArea = document.getElementById("textArea");
  let text = textArea.value;
  let words = text.split(" ");
  let veliko = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    word = word.charAt(0).toUpperCase() + word.slice(1);
    veliko.push(word);
  }

  let tekst = veliko.join(" ");
  textArea.value = tekst;
}

function clearText() {
  document.getElementById("textArea").value = "";
}

function clearChanges() {
  document.getElementById("textArea").style.fontWeight = "normal";
  let originalValue = textArea.value;
  document.getElementById("textArea").style.fontStyle = "normal";
  document.getElementById("textArea").style.textAlign = "left";
  document.getElementById("textArea").style.textTransform = "none";
  textArea.value = originalValue;
}

function downlText() {
  const text = document.getElementById("textArea").value;
  const blob = new Blob([text], { type: "application/msword" });
  saveAs(blob, "myDocument.doc");
}
