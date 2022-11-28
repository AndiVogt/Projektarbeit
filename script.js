// Fragenkatalog
const qanda = [
  ["Ist dein Tier ein ", "Säugetier?", "Vogel?", "Fisch?", "Kriechtier?", "Insekt?", "Lurch?"],
  ["Lebt dein Tier ", "in der Luft?", "im Wasser?", "am Land?", "an Land und im Wasser?"],
  ["Hat dein Tier ", "keine Beine?", "2 Beine?", "4 Beine?", "6 Beine?", "8 Beine?"],
  ["Hat dein Tier ", "keine Extremitäten?", "hauptsächlich Beine?", "Flossen?", "Flügel?", "Flügelbeine?"],
  ["Hat dein Tier ", "Fell?", "Federn?", "Haut?", "Schuppen?", "einen Chitinpanzer?"],
  ["Ist dein Tier ", "nur tagaktiv?", "nur nachtaktiv?", "tag- und nachtaktiv?"],
  ["Frisst dein Tier ", "nur Fleisch?", "nur Pflanzen?", "alles?"]
];
// ---

// URL hinterlegen
const imgURLs = {
  "Fledermaus": "/Pictures/bat.jpg",
  "Katze": "/Pictures/cat.jpg",
  "Krokodil": "/Pictures/crocodile.jpg",
  "Hund": "/Pictures/dog.jpg",
  "Fliege": "/Pictures/fly.jpg",
  "Frosch": "/Pictures/frog.jpg",
  "Pferd": "/Pictures/horse.jpg",
  "Mensch": "/Pictures/human.jpg",
  "Eidechse": "/Pictures/lizard.jpg",
  "Muräne": "/Pictures/moray_eel.jpg",
  "Maus": "/Pictures/mouse.jpg",
  "Papagei": "/Pictures/parrot.jpg",
  "Schwein": "/Pictures/pig.jpg",
  "Seepferdchen": "/Pictures/seahorse.jpg",
  "Hai": "/Pictures/shark.jpg",
  "Schlange": "/Pictures/snake.jpg",
  "Spinne": "/Pictures/spider.jpg",
  "Rochen": "/Pictures/stingray.jpg",
  "Zecke": "/Pictures/tick.jpg",
  "Wal": "/Pictures/whale.jpg"
};
//---

// JSON lesen
var json = (function() {
  var json = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': "data.json",
    'dataType': "json",
    'success': function(data) {
      json = data;
    }
  });
  return json;
})();
//---

// Zufallsfunktionen
function randomMath(max) {
  return Math.floor(Math.random() * max);
}
function randomMath1(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}
//---

// JSON filtern 
function filterJSONTrue(frageT1, frageT2) {
  switch (frageT1) {
    case 0:
      json = json.filter(elem => elem.Art == frageT2);
      break;
    case 1:
      json = json.filter(elem => elem.Element == frageT2);
      break;
    case 2:
      json = json.filter(elem => elem.Beine == frageT2);
      break;
    case 3:
      json = json.filter(elem => elem.Extremitäten == frageT2);
      break;
    case 4:
      json = json.filter(elem => elem.Körperbedeckung == frageT2);
      break;
    case 5:
      json = json.filter(elem => elem.Aktiv == frageT2);
      break;
    case 6:
      json = json.filter(elem => elem.Ernährung == frageT2);
      break;
  }
} // Entfernen von allen Tieren wo Eigenschaft true
function filterJSONFalse(frageT1, frageT2) {
  switch (frageT1) {
    case 0:
      json = json.filter(elem => elem.Art != frageT2);
      break;
    case 1:
      json = json.filter(elem => elem.Element != frageT2);
      break;
    case 2:
      json = json.filter(elem => elem.Beine != frageT2);
      break;
    case 3:
      json = json.filter(elem => elem.Extremitäten != frageT2);
      break;
    case 4:
      json = json.filter(elem => elem.Körperbedeckung != frageT2);
      break;
    case 5:
      json = json.filter(elem => elem.Aktiv != frageT2);
      break;
    case 6:
      json = json.filter(elem => elem.Ernährung != frageT2);
      break;
  }
}// Entfernen von allen Tieren wo Eigenschaft false
function JSONxy(x, y) {
  let val;
  switch (x) {
    case 0:
      val = json[y].Art;
      break;
    case 1:
      val = json[y].Element;
      break;
    case 2:
      val = json[y].Beine;
      break;
    case 3:
      val = json[y].Extremitäten;
      break;
    case 4:
      val = json[y].Körperbedeckung;
      break;
    case 5:
      val = json[y].Aktiv;
      break;
    case 6:
      val = json[y].Ernährung;
      break;
  }
  return val;
} // Eigenschaften von bestimmtem Tier ermitteln
//---

// zufällig Frage anzeigen
var randQ1 = randomMath(qanda.length);
var randQ2 = randomMath1(qanda[randQ1].length);
document.getElementById("frageID").textContent = qanda[randQ1][0] + qanda[randQ1][randQ2];
console.log(qanda[randQ1][0] + qanda[randQ1][randQ2]);
console.log(randQ1 + ", " + randQ2);
// ---

// Shuffled-Array 
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function createShuffledArray(size) {
  let Ind = [];
  for (let i = 0; i < size; i++) {
    Ind.push(i);
  }
  shuffle(Ind);
  return Ind;
}
function createShuffledArray2(size) {
  let Ind = [];
  for (let i = 1; i < size; i++) {
    Ind.push(i);
  }
  shuffle(Ind);
  return Ind;
}
//---

// bei Knopfdruck
var qIndex = createShuffledArray(qanda.length); // Index an Fragen durchgemischt (Fragenpool)
document.getElementById("btn").onclick = function() {
  // Funktion wenn der Knopf gedrückt wird

  //gucken ob Button schon Neustart verursachen soll
  if (document.getElementById("btn").innerHTML == "Neustart") {
    location.reload();
    return false;
  } else {

    var currentA = document.getElementById("answform").elements["answoptions"].value;
    // Daumen hoch oder runter ermitteln

    if (currentA == "ja") { // wenn "ja"
      filterJSONTrue(randQ1, randQ2); // Funktion ausführen 
      // console.log(json);
      qIndex = qIndex.filter(elem => elem != randQ1); // die Frage aus 'qIndex' (Fragenpool) entfernen, da sie mit 'Ja' beantwortet wurde
      // console.log("Fragen noch übrig: " + qIndex);
    } else if (currentA == "nein") { // wenn "nein"
      filterJSONFalse(randQ1, randQ2); // Funktion ausführen
      //console.log(json);

    } else { // nichts ausgewählt nach Knopfdruck
      alert("Achtung! Bitte wähle eine Antwort!");
    }

    if (json.length == 1) { // wenn nur noch ein Tier übrig
      changeImagetoResult(json[0].Name);
      //alert("Der Name deines Tieres lautet: " + json[0].Name);
      //location.reload(); // Seite neu laden
      //return false;
    } else if (json.length == 0) { // wenn kein Tier mehr übrig
      alert("Kein hinterlegtes Tier hat diese Eigenschaften!");
      //document.getElementById("frageID").textContent = "Kein hinterlegtes Tier hat diese Eigenschaften!";
      //changeButton(99);
      location.reload();
      return false;
    } else { // sonst Funktion fragenRotieren() >> nächste Frage einleiten
      fragenRotieren();
    }
  }
};
// ---

// Auswahl entfernen
function uncheckRadio() { // Auswahl vom Knopf entfernen
  document.getElementById("answja").checked = false;
  document.getElementById("answnein").checked = false;
};
// ---

// Fragen rotieren
function fragenRotieren() {
  // nächste Frage auswählen und einfügen + Logik

  let sumArray = []; // Blankoarray
  let randOrder = createShuffledArray(Object.keys(json[0]).length - 1); // zufällige Reihenfolge an Fragenanzahl
  randOrder = randOrder.filter(val => qIndex.includes(val)); // schon benutzte Fragen entfernen
  console.log(randOrder + " - " + qIndex);
  for (let x = 0; x < randOrder.length; x++) { // Für jede verbleibende Fragen/Eigenschaft ein Durchlauf
    for (var yPush = 0; yPush < json.length; yPush++) { // Für jedes verbleibende Tier ein Durchlauf
      sumArray.push(JSONxy(randOrder[x], yPush)); // Hier werden die verschiedenen noch offenen Möglichkeiten einer zufälligen Eigenschaft aufgelistet 
    }
    if (sumArray.every((elem) => elem === sumArray[0] && sumArray[0] != null)) { // wenn alle Tiere die gewählte Eigenschaft gleich haben
      console.log("Achtung, alles gleich!");
      qIndex = qIndex.filter(elem => elem != randOrder[x]); // Frage wird als abgehakt betrachtet/ entfernt aus verbleibenden Fragen
      if (randOrder.length == 1) { // wenn nur eine Frage mit gleichen Antworten noch übrig, wird ausgegeben, dass es mehrere Tiere mit den gleichen Eigenschaften gibt
        let remainJSON = [];
        for (i = 0; i < json.length; i++) {
          remainJSON.push(json[i].Name);
        }
        alert("Folgende Tiere haben diese Eigenschaften: " + remainJSON);
        location.reload();
        return false;
        /*
        document.getElementById("frageID").textContent = "Folgende Tiere haben diese Eigenschaften: " + remainJSON;
        console.log("HIERRR");
        changeButton(99);
        x = randOrder.length + 1;
        yPush = json.length + 1;
        */
      }
      fragenRotieren();
    } else {
      randQ1 = randOrder[x]; // neu ermittelte Frage wird eingestellt 
      randQ2 = sumArray[0]; // neu ermittelte Frage wird eingestellt
      uncheckRadio();
      document.getElementById("frageID").textContent = qanda[randQ1][0] + qanda[randQ1][randQ2]; // Frage ändern
      console.log("geändert!");
      x = randOrder.length + 1; // Schleife beenden
    }
  }
  console.log(randQ1 + ", " + randQ2);
};
// ---

// Bild und Text ändern
function changeImagetoResult(name) {
  //salert("Alert changeImagetoResult; Name: " + name + ", Url: " + imgURLs[name]);
  document.getElementById("anzeigeergebnisimg").src = imgURLs[name];
  document.getElementById("ergebnistier").textContent = name;
  document.getElementById("anzeigeergebnis").style.visibility = "visible";
  changeButton(1);
}
//---

// Button und Knöpfe ändern
function changeButton(id) {
  document.getElementById("answer").style.visibility = "hidden";
  document.getElementById("btn").innerHTML = "Neustart";

  switch (id) {
    case 1:
      document.getElementById("frageID").textContent = "Der Name deines Tieres lautet:";
      break;
    case 99:
      break;
  }

}
//---

//Tier hinzufügen--------------------------------------------------------------------------------

//JSON.stringify

