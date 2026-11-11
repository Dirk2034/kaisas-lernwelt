const STORAGE_KEY = "kaisas-lernwelt-progress-v1";

const levels = [
  {
    id: 1,
    title: "Längen-Scan",
    short: "mm · cm · dm · m",
    description: "Aktiviere das erste Siegel und bring Länge in den richtigen Flow.",
    icon: "〽",
    tag: "LÄNGEN-SCAN",
    tip: "Bei jeder Stufe nach rechts wird die Zahl 10-mal kleiner. Nach links wird sie 10-mal größer.",
    questions: [
      { text: "7 Zentimeter sind wie viele Millimeter?", options: ["70 mm", "7 mm", "700 mm", "0,7 mm"], answer: "70 mm", explain: "1 cm sind 10 mm. Also sind 7 cm genau 70 mm." },
      { text: "4 Dezimeter sind wie viele Zentimeter?", options: ["4 cm", "40 cm", "400 cm", "0,4 cm"], answer: "40 cm", explain: "1 dm sind 10 cm. 4 · 10 = 40 cm." },
      { text: "300 Zentimeter sind wie viele Meter?", options: ["30 m", "3 m", "3000 m", "0,3 m"], answer: "3 m", explain: "100 cm sind 1 m. 300 cm sind also 3 m." },
      { text: "2 Meter sind wie viele Dezimeter?", options: ["20 dm", "2 dm", "200 dm", "0,2 dm"], answer: "20 dm", explain: "1 m sind 10 dm. 2 · 10 = 20 dm." },
      { text: "5 Kilometer sind wie viele Meter?", options: ["50 m", "500 m", "5.000 m", "50.000 m"], answer: "5.000 m", explain: "1 km sind 1.000 m. Deshalb sind 5 km genau 5.000 m." },
      { text: "9 Dezimeter sind wie viele Zentimeter?", options: ["9 cm", "90 cm", "900 cm", "0,9 cm"], answer: "90 cm", explain: "1 dm sind 10 cm. 9 · 10 = 90 cm." },
      { text: "2 km und 400 m sind wie viele Meter?", options: ["2.040 m", "2.400 m", "24.000 m", "2.004 m"], answer: "2.400 m", explain: "2 km sind 2.000 m. Dazu kommen 400 m: 2.400 m." }
    ]
  },
  {
    id: 2,
    title: "Längen-Mix",
    short: "gemischte Längen",
    description: "Die Schatten wechseln die Distanz. Finde immer die passende Einheit.",
    icon: "⌁",
    tag: "LÄNGEN-MIX",
    tip: "Schreibe dir die Einheiten-Reihe auf: mm – cm – dm – m – km.",
    questions: [
      { text: "450 cm sind wie viele Dezimeter?", options: ["4,5 dm", "45 dm", "450 dm", "4.500 dm"], answer: "45 dm", explain: "Von cm zu dm wird durch 10 geteilt: 450 : 10 = 45 dm." },
      { text: "8 m und 30 cm sind wie viele Zentimeter?", options: ["830 cm", "83 cm", "8.030 cm", "803 cm"], answer: "830 cm", explain: "8 m sind 800 cm. 800 cm + 30 cm = 830 cm." },
      { text: "1 km und 250 m sind wie viele Meter?", options: ["1.025 m", "1.250 m", "12.500 m", "250 m"], answer: "1.250 m", explain: "1 km sind 1.000 m. Dazu kommen 250 m: 1.250 m." },
      { text: "90 mm sind wie viele Zentimeter?", options: ["9 cm", "90 cm", "0,9 cm", "900 cm"], answer: "9 cm", explain: "10 mm sind 1 cm. 90 mm sind 9 cm." },
      { text: "6 dm und 4 cm sind wie viele Zentimeter?", options: ["64 cm", "604 cm", "10 cm", "46 cm"], answer: "64 cm", explain: "6 dm sind 60 cm. 60 cm + 4 cm = 64 cm." },
      { text: "2 km und 80 m sind wie viele Meter?", options: ["2.080 m", "2.800 m", "280 m", "20.080 m"], answer: "2.080 m", explain: "2 km sind 2.000 m. 2.000 m + 80 m = 2.080 m." },
      { text: "700 Millimeter sind wie viele Zentimeter?", options: ["7 cm", "70 cm", "700 cm", "0,7 cm"], answer: "70 cm", explain: "10 mm sind 1 cm. 700 mm sind deshalb 70 cm." }
    ]
  },
  {
    id: 3,
    title: "Liquid-Flow",
    short: "ml · cl · dl · l",
    description: "Lade das Flüssigkeits-Siegel und meistere ml, dl und Liter.",
    icon: "◌",
    tag: "LIQUID-FLOW",
    tip: "Bei Flüssigkeiten kannst du dir merken: 1 l = 10 dl = 100 cl = 1.000 ml.",
    questions: [
      { text: "3 Liter sind wie viele Milliliter?", options: ["30 ml", "300 ml", "3.000 ml", "30.000 ml"], answer: "3.000 ml", explain: "1 l sind 1.000 ml. 3 l sind also 3.000 ml." },
      { text: "6 Deziliter sind wie viele Milliliter?", options: ["60 ml", "600 ml", "6.000 ml", "0,6 ml"], answer: "600 ml", explain: "1 dl sind 100 ml. 6 · 100 = 600 ml." },
      { text: "2.500 ml sind wie viele Liter und Milliliter?", options: ["25 l", "2 l 500 ml", "2 l 50 ml", "250 l"], answer: "2 l 500 ml", explain: "2.000 ml sind 2 l. Es bleiben 500 ml übrig." },
      { text: "4 Liter und 5 Deziliter sind wie viele Deziliter?", options: ["45 dl", "9 dl", "405 dl", "4,5 dl"], answer: "45 dl", explain: "4 l sind 40 dl. 40 dl + 5 dl = 45 dl." },
      { text: "800 ml sind wie viele Deziliter?", options: ["8 dl", "80 dl", "0,8 dl", "800 dl"], answer: "8 dl", explain: "1 dl sind 100 ml. 800 ml sind deshalb 8 dl." },
      { text: "7.500 ml sind wie viele Liter und Milliliter?", options: ["7 l 500 ml", "75 l", "7 l 50 ml", "750 l"], answer: "7 l 500 ml", explain: "7.000 ml sind 7 l. Es bleiben 500 ml übrig." },
      { text: "9 Deziliter sind wie viele Milliliter?", options: ["90 ml", "900 ml", "9.000 ml", "0,9 ml"], answer: "900 ml", explain: "1 dl sind 100 ml. 9 · 100 = 900 ml." }
    ]
  },
  {
    id: 4,
    title: "Gewichts-Boost",
    short: "g · kg · t",
    description: "Schalte das Kraft-Siegel frei und bringe Gewichte ins Gleichgewicht.",
    icon: "⟡",
    tag: "GEWICHTS-BOOST",
    tip: "1 kg = 1.000 g und 1 t = 1.000 kg. Bei diesen beiden Sprüngen wird mit 1.000 gerechnet.",
    questions: [
      { text: "4 Kilogramm sind wie viele Gramm?", options: ["40 g", "400 g", "4.000 g", "40.000 g"], answer: "4.000 g", explain: "1 kg sind 1.000 g. 4 kg sind also 4.000 g." },
      { text: "2 Tonnen sind wie viele Kilogramm?", options: ["200 kg", "2.000 kg", "20 kg", "20.000 kg"], answer: "2.000 kg", explain: "1 t sind 1.000 kg. 2 t sind deshalb 2.000 kg." },
      { text: "3.500 g sind wie viele Kilogramm und Gramm?", options: ["35 kg", "3 kg 500 g", "3 kg 50 g", "350 kg"], answer: "3 kg 500 g", explain: "3.000 g sind 3 kg. Es bleiben 500 g übrig." },
      { text: "1 kg und 250 g sind wie viele Gramm?", options: ["1.025 g", "1.250 g", "12.500 g", "250 g"], answer: "1.250 g", explain: "1 kg sind 1.000 g. 1.000 g + 250 g = 1.250 g." },
      { text: "5.000 kg sind wie viele Tonnen?", options: ["5 t", "50 t", "500 t", "0,5 t"], answer: "5 t", explain: "1.000 kg sind 1 t. 5.000 kg sind also 5 t." },
      { text: "7 kg und 250 g sind wie viele Gramm?", options: ["7.025 g", "7.250 g", "7.500 g", "725 g"], answer: "7.250 g", explain: "7 kg sind 7.000 g. 7.000 g + 250 g = 7.250 g." },
      { text: "6 Tonnen und 300 kg sind wie viele Kilogramm?", options: ["6.030 kg", "6.300 kg", "6.003 kg", "63.000 kg"], answer: "6.300 kg", explain: "6 t sind 6.000 kg. Dazu kommen 300 kg: 6.300 kg." }
    ]
  },
  {
    id: 5,
    title: "Küchen-Chroniken",
    short: "Sachaufgaben",
    description: "Die Schatten verstecken Zahlen in Geschichten. Lies genau und rechne clever.",
    icon: "✧",
    tag: "KÜCHEN-CHRONIKEN",
    tip: "Markiere zuerst, was du weißt, und überlege dann: Wird etwas weggenommen oder kommt etwas dazu?",
    questions: [
      { text: "In einer Mehlpackung sind noch 900 g. Für Waffeln werden 200 g und für einen Kuchen 150 g verwendet. Wie viel Mehl bleibt übrig?", options: ["550 g", "650 g", "750 g", "350 g"], answer: "550 g", explain: "Zuerst 200 g + 150 g = 350 g. Dann 900 g − 350 g = 550 g." },
      { text: "Kaisa hat 2 l Saft. Sie füllt 4 Flaschen mit je 300 ml. Wie viel Saft bleibt?", options: ["800 ml", "1.200 ml", "1.700 ml", "200 ml"], answer: "800 ml", explain: "4 · 300 ml = 1.200 ml. 2 l = 2.000 ml. 2.000 − 1.200 = 800 ml." },
      { text: "Ein Weg ist 3 km lang. Kaisa ist schon 850 m gegangen. Wie viele Meter fehlen noch?", options: ["2.150 m", "2.850 m", "350 m", "1.150 m"], answer: "2.150 m", explain: "3 km = 3.000 m. 3.000 − 850 = 2.150 m." },
      { text: "Ein Paket wiegt 4 kg. Darin liegen 1.250 g Bücher und 750 g Bastelsachen. Wie viel wiegt der Rest?", options: ["1 kg", "2 kg", "2.500 g", "3 kg"], answer: "2 kg", explain: "1.250 g + 750 g = 2.000 g = 2 kg. 4 kg − 2 kg = 2 kg." },
      { text: "Für eine Party sind 5 l Limo da. Es werden 12 Becher mit je 250 ml gefüllt. Wie viel bleibt?", options: ["2 l", "3 l", "4 l", "250 ml"], answer: "2 l", explain: "12 · 250 ml = 3.000 ml = 3 l. 5 l − 3 l = 2 l." },
      { text: "In einer Vorratsbox sind 1.200 g Reis. Für drei Portionen werden je 200 g verwendet. Wie viel bleibt?", options: ["600 g", "800 g", "1.000 g", "400 g"], answer: "600 g", explain: "3 · 200 g = 600 g. 1.200 g − 600 g = 600 g." },
      { text: "Kaisa hat 4 l Saft. Sie füllt 5 Flaschen mit je 400 ml. Wie viel bleibt?", options: ["1 l", "2 l", "3 l", "200 ml"], answer: "2 l", explain: "5 · 400 ml = 2.000 ml = 2 l. 4 l − 2 l = 2 l." }
    ]
  },
  {
    id: 6,
    title: "Schatten-Boss",
    short: "Finale · alles gemischt",
    description: "Das große Finale: Einheiten und Sachaufgaben in einer einzigen Boss-Mission.",
    icon: "✹",
    tag: "SCHATTEN-BOSS",
    tip: "Lies jede Aufgabe zweimal. Wandle zuerst alles in dieselbe Einheit um, bevor du rechnest.",
    questions: [
      { text: "Eine Strecke ist 2 m und 40 cm lang. Wie viele Millimeter sind das?", options: ["240 mm", "2.040 mm", "2.400 mm", "24.000 mm"], answer: "2.400 mm", explain: "2 m = 2.000 mm und 40 cm = 400 mm. Zusammen sind das 2.400 mm." },
      { text: "In einem Tank sind 6 l. Es werden 2.500 ml entnommen. Wie viel bleibt?", options: ["3,5 l", "4,5 l", "5,5 l", "3 l"], answer: "3,5 l", explain: "6 l = 6.000 ml. 6.000 − 2.500 = 3.500 ml = 3,5 l." },
      { text: "Ein LKW transportiert 3 t. 850 kg werden ausgeladen. Wie viel bleibt auf dem LKW?", options: ["2.150 kg", "2.850 kg", "1.150 kg", "350 kg"], answer: "2.150 kg", explain: "3 t = 3.000 kg. 3.000 − 850 = 2.150 kg." },
      { text: "Ein 4 m langes Band wird in 8 gleich große Stücke geteilt. Wie lang ist jedes Stück?", options: ["5 cm", "50 cm", "80 cm", "32 cm"], answer: "50 cm", explain: "4 m = 400 cm. 400 : 8 = 50 cm." },
      { text: "Für drei Missionen braucht Kaisa je 750 ml Energie-Drink. Sie hat 3 l. Wie viel bleibt?", options: ["250 ml", "500 ml", "750 ml", "1.250 ml"], answer: "750 ml", explain: "3 · 750 ml = 2.250 ml. 3.000 − 2.250 = 750 ml." },
      { text: "Ein LKW hat 2 t und 400 kg geladen. 750 kg werden ausgeladen. Wie viel bleibt?", options: ["1.650 kg", "2.150 kg", "1.750 kg", "2.650 kg"], answer: "1.650 kg", explain: "2 t 400 kg sind 2.400 kg. 2.400 − 750 = 1.650 kg." },
      { text: "In einem Tank sind 5 l. Sechs Becher mit je 450 ml werden gefüllt. Wie viel bleibt?", options: ["2 l 300 ml", "2 l 500 ml", "3 l 300 ml", "450 ml"], answer: "2 l 300 ml", explain: "6 · 450 ml = 2.700 ml. 5.000 ml − 2.700 ml = 2.300 ml = 2 l 300 ml." }
    ]
  }
];

levels.forEach((level) => level.questions.forEach((question, index) => {
  question.id = `${level.id}-${index + 1}`;
}));

const blankProgress = () => ({ xp: 0, completed: [], streak: 0, lastLevel: 1, levelXp: {}, levelRuns: {} });
const defaultProgress = blankProgress();
let progress = loadProgress();
let activeLevel = null;
let activeQuestions = [];
let questionIndex = 0;
let score = 0;
let earnedThisRun = 0;
let runAskedIds = [];
let runWrongIds = [];
let answered = false;

const $ = (selector) => document.querySelector(selector);

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      ...defaultProgress,
      ...saved,
      levelXp: { ...defaultProgress.levelXp, ...(saved.levelXp || {}) },
      levelRuns: { ...defaultProgress.levelRuns, ...(saved.levelRuns || {}) }
    };
  } catch { return blankProgress(); }
}

function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }

function updateHeader() {
  $("#xp-total").textContent = `${progress.xp} / 600 XP`;
  $("#streak-value").textContent = progress.streak;
  $("#levels-complete").textContent = progress.completed.length;
}

function levelXpFor(levelId) { return Math.min(100, Number(progress.levelXp[levelId] || 0)); }

function currentLevelXp() {
  return Math.min(100, levelXpFor(activeLevel.id) + earnedThisRun);
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

function buildQuestionSet(level) {
  const history = progress.levelRuns[level.id] || {};
  if (!history.asked?.length) return level.questions.slice(0, 5);
  const byId = (id) => level.questions.find((question) => question.id === id);
  const wrong = (history.wrong || []).map(byId).filter(Boolean);
  const unseen = level.questions.filter((question) => !(history.asked || []).includes(question.id));
  const fallback = shuffle(level.questions.filter((question) => !wrong.some((item) => item.id === question.id) && !unseen.some((item) => item.id === question.id)));
  return [...wrong, ...shuffle(unseen), ...fallback].slice(0, 5);
}

function updateQuizXp() {
  const collected = currentLevelXp();
  $("#quiz-xp").textContent = `${collected}/100 XP`;
  $("#energy-bar-fill").style.width = `${collected}%`;
  $("#combo-label").textContent = collected >= 100 ? "Siegel-XP komplett – du kannst weiter üben." : `${collected}/100 Siegel-XP gesammelt.`;
}

function renderLevels() {
  const grid = $("#level-grid");
  grid.innerHTML = levels.map((level, index) => {
    const complete = progress.completed.includes(level.id);
    const levelXp = levelXpFor(level.id);
    const finished = levelXp >= 100;
    const unlocked = level.id === 1 || progress.completed.includes(level.id - 1) || progress.xp >= level.id * 35;
    const status = finished ? `<span class="completed-mark">✓ beendet</span>` : complete ? `<span class="completed-mark">✓ bestanden</span>` : unlocked ? "bereit" : "gesperrt";
    const footerXp = finished ? `<span class="xp level-finished">SUPER Kaisa!!!<small>100 XP erreicht</small></span>` : `<span class="xp">${levelXp}/100 XP <b>→</b></span>`;
    return `<button class="level-card level-${level.id} ${finished ? "finished" : ""} ${unlocked ? "" : "locked"}" data-level="${level.id}" type="button" ${unlocked ? "" : "disabled"}>
      <div class="level-card-top"><span class="level-number">0${level.id}</span><span class="level-status">${status}</span></div>
      <div class="level-card-main"><div class="level-card-symbol"><span>${level.icon}</span><small>SIEGEL</small></div><div class="level-card-copy"><div class="level-card-stage">MISSION 0${level.id}</div><h3>${level.title}</h3><p>${level.description}</p></div></div>
      <div class="level-card-footer"><span>${level.short}</span>${footerXp}</div>
    </button>`;
  }).join("");
  grid.querySelectorAll(".level-card:not(.locked)").forEach((card) => card.addEventListener("click", () => startLevel(Number(card.dataset.level))));
}

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => screen.classList.add("hidden"));
  $(screenId).classList.remove("hidden");
  $("#app").focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startLevel(levelId) {
  activeLevel = levels.find((level) => level.id === levelId);
  activeQuestions = buildQuestionSet(activeLevel);
  questionIndex = 0;
  score = 0;
  earnedThisRun = 0;
  runAskedIds = [];
  runWrongIds = [];
  answered = false;
  showScreen("#quiz-screen");
  renderQuestion();
}

function renderQuestion() {
  const question = activeQuestions[questionIndex];
  $("#quiz-level-label").textContent = `SIEGEL 0${activeLevel.id}`;
  $("#quiz-progress-label").textContent = `${questionIndex + 1} / ${activeQuestions.length}`;
  $("#quiz-progress-bar").style.width = `${((questionIndex + 1) / activeQuestions.length) * 100}%`;
  $("#mission-icon").textContent = activeLevel.icon;
  $("#mission-tag-text").textContent = activeLevel.tag;
  $("#question-title").textContent = questionIndex === 0 ? "Deine Mission:" : "Nächste Aufgabe:";
  $("#question-text").textContent = question.text;
  $("#tip-text").textContent = activeLevel.tip;
  $("#answer-grid").innerHTML = question.options.map((option, index) => `<button class="answer-button" data-option="${option}" type="button"><strong>${String.fromCharCode(65 + index)}</strong>&nbsp;&nbsp;${option}</button>`).join("");
  $("#answer-grid").querySelectorAll("button").forEach((button) => button.addEventListener("click", () => answerQuestion(button, question)));
  $("#feedback").classList.add("hidden");
  $("#next-question").classList.add("hidden");
  updateQuizXp();
  answered = false;
}

function answerQuestion(button, question) {
  if (answered) return;
  answered = true;
  const selected = button.dataset.option;
  const correct = selected === question.answer;
  if (!runAskedIds.includes(question.id)) runAskedIds.push(question.id);
  if (!correct && !runWrongIds.includes(question.id)) runWrongIds.push(question.id);
  document.querySelectorAll(".answer-button").forEach((item) => {
    item.disabled = true;
    if (item.dataset.option === question.answer) item.classList.add("correct");
  });
  if (!correct) button.classList.add("wrong");
  if (correct) { score += 1; earnedThisRun += 20; }
  const feedback = $("#feedback");
  feedback.classList.remove("hidden", "wrong-feedback");
  $("#feedback-icon").textContent = correct ? "✓" : "!";
  $("#feedback-title").textContent = correct ? "Richtig! +20 XP" : "Fast geschafft!";
  $("#feedback-text").textContent = correct ? question.explain : `Die richtige Antwort ist ${question.answer}. ${question.explain}`;
  if (!correct) feedback.classList.add("wrong-feedback");
  $("#next-question").textContent = currentLevelXp() >= 100 || questionIndex === activeQuestions.length - 1 ? "Mission abschließen →" : "Nächste Aufgabe →";
  $("#next-question").classList.remove("hidden");
  updateQuizXp();
}

function finishLevel() {
  const previousLevelXp = levelXpFor(activeLevel.id);
  const newLevelXp = Math.min(100, previousLevelXp + earnedThisRun);
  const newlyEarned = newLevelXp - previousLevelXp;
  const justFinished = previousLevelXp < 100 && newLevelXp >= 100;
  const wasCompleted = progress.completed.includes(activeLevel.id);
  if (!wasCompleted) progress.completed.push(activeLevel.id);
  progress.levelXp[activeLevel.id] = newLevelXp;
  progress.xp += newlyEarned;
  progress.streak += 1;
  progress.lastLevel = activeLevel.id;
  progress.levelRuns[activeLevel.id] = { asked: runAskedIds, wrong: runWrongIds, score };
  saveProgress();
  updateHeader();
  renderLevels();
  $("#result-title").textContent = justFinished ? "SUPER Kaisa!!!" : newLevelXp >= 100 ? "Siegel entschlüsselt!" : "Mission bestanden!";
  $("#result-subtitle").textContent = justFinished ? "100 XP erreicht – das Siegel ist entschlüsselt." : newlyEarned === 0 ? "Die 100 XP für dieses Siegel sind bereits gesammelt. Du kannst weiter üben." : `Das Siegel steht bei ${newLevelXp}/100 XP. Wiederhole es, um weiter zu trainieren.`;
  $("#result-score").textContent = `${score}/${activeQuestions.length}`;
  $("#result-level-xp").textContent = `${newLevelXp}/100`;
  $("#result-earned").textContent = `+${newlyEarned} XP`;
  $("#result-streak").textContent = progress.streak;
  showScreen("#result-screen");
}

$("#continue-button").addEventListener("click", () => startLevel(progress.lastLevel || 1));
$("#back-home").addEventListener("click", () => { updateHeader(); renderLevels(); showScreen("#home-screen"); });
$("#next-question").addEventListener("click", () => {
  if (currentLevelXp() >= 100 || questionIndex >= activeQuestions.length - 1) finishLevel();
  else { questionIndex += 1; renderQuestion(); }
});
$("#result-home").addEventListener("click", () => { updateHeader(); renderLevels(); showScreen("#home-screen"); });
$("#result-retry").addEventListener("click", () => startLevel(activeLevel.id));
$("#reset-progress").addEventListener("click", () => {
  if (!window.confirm("Soll der Lernfortschritt wirklich zurückgesetzt werden?")) return;
  progress = blankProgress();
  saveProgress();
  updateHeader();
  renderLevels();
});

updateHeader();
renderLevels();
