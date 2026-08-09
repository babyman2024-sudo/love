/* ==========================================================
   تمام اطلاعات شخصی سایت را از این قسمت تغییر بده
========================================================== */
const $ = selector => document.querySelector(selector);


const CONFIG = {
  password: "Raha",
  belovedName: "عشق من",

  // تاریخ شروع آشنایی؛ قالب: سال-ماه-روز و سپس ساعت
  relationshipStart: "2016-01-21T20:00:00",

  introLines: [
    "می‌دونی امروز چه روزیه؟",
    "روزی که زیباترین اتفاق زندگی من به دنیا اومد...",
    "روزی که جهان، تو را به من هدیه داد...",
    "آماده‌ای؟"
  ],

  celebrationMessage:
    "آرزو می‌کنم تمام لحظه‌های زندگی‌ات به زیبایی لبخندت باشند.",

  heroDescription:
    "میان تمام اتفاق‌های جهان، آشنایی با تو قشنگ‌ترین اتفاق من بود. این صفحه چند قاب کوچک از دنیای بزرگی است که در قلبم ساخته‌ای.",

  timeline: [
    {
      date: "روز آشنایی",
      title: "یک سلام ساده",
      text: "آن روز هنوز نمی‌دانستم یک سلام ساده، قرار است زیباترین قصهٔ زندگی‌ام را آغاز کند."
    },
    {
      date: "اولین گفت‌وگوی طولانی",
      title: "زمان کنار تو زود گذشت",
      text: "ساعت‌ها حرف زدیم و برای اولین‌بار فهمیدم بعضی آدم‌ها چقدر زود شبیه خانه می‌شوند."
    },
    {
      date: "اولین دیدار فروردین ماه 1405",
      title: "لحظه‌ای که دلم لرزید",
      text: "در میان تمام آدم‌های دنیا، چشم‌های من فقط تو را می‌دید و قلبم آرام‌تر از همیشه بود."
    },
       {
      date: " مرداد ماه،امروز",
      title: "تولدت مبارک، عزیزترینم",
      text: "امروز بیشتر از همیشه خوشحالم که تو به دنیا آمدی و جهان من را زیباتر کردی."
    }
  ],

photos: [
  {
    src: "assets/images/photo1.jpg",
    title: "لبخندت",
    caption: "همان لبخندی که حالِ تمام روزهای من را خوب می‌کند."
  },
  {
    src: "assets/images/photo2.jpg",
    title: "آرامشِ من",
    caption: "کنار تو، همه‌چیز شبیه خانه می‌شود."
  },
  {
    src: "assets/images/photo3.jpg",
    title: "زیباترین اتفاق",
    caption: "تو همان اتفاق قشنگی هستی که دلم همیشه آرزویش را داشت."
  }
],


  reasons: [
    "چون خنده‌ات حال دلم را خوب می‌کند.",
    "چون کنارت می‌توانم خود واقعی‌ام باشم.",
    "چون حتی سکوت با تو زیبا و آرامش‌بخش است.",
    "چون با بودنت جهان من رنگ دیگری گرفت.",
    "چون همیشه بیشتر از آنچه می‌گویم، می‌فهمی.",
    "چون تو فقط عشق من نیستی؛ آرامش و خانهٔ منی."
  ],

  starMemories: [
    "خاطرهٔ اولین باری که صدای خنده‌ات در دلم ماند.",
    "روزی که فهمیدم حضورت برایم شبیه آرامش است.",
    "آن گفت‌وگوی طولانی که دلم نمی‌خواست تمام شود.",
    "لحظه‌ای که کنار تو، تمام نگرانی‌هایم را فراموش کردم.",
    "روشن‌ترین ستارهٔ این آسمان تویی؛ زیباترین اتفاق من."
  ],

  wishes: [
    "آرزو می‌کنم همیشه از ته دل بخندی.",
    "آرزو می‌کنم به زیباترین رؤیاهایت برسی.",
    "آرزو می‌کنم در تمام مسیر زندگی، کنار هم بمانیم."
  ],

  songTitle: "ترانهٔ عاشقانهٔ ما",
  songArtist: "با صدای من، فقط برای تو",

  

  finalLetter:
    `شاید نتوانم تمام حسی را که به تو دارم با کلمات توضیح بدهم؛ اما می‌خواهم بدانی در میان تمام آدم‌ها و تمام اتفاق‌های این دنیا، قلب من تو را انتخاب کرده است.

بودنت برای من فقط یک اتفاق نیست؛ آرامشی است که هر روز بابتش شکرگزارم. امیدوارم سال جدید زندگی‌ات پر از خنده، موفقیت، آرامش و رؤیاهای برآورده‌شده باشد.

در میان تمام تاریخ‌های تقویم، امروز برای من زیباتر است؛ چون جهان در چنین روزی، تو را به من هدیه داد.

تولدت مبارک، انتخاب همیشگی من. ❤️`,

  finalSignature: "با تمام قلبم، برای همیشه"
};

/* ==========================================================
   ابزارها
========================================================== */



const screens = [
  $("#gatePage"),
  $("#introPage"),
  $("#celebrationPage"),
  $("#storyPage")
];

const toPersianDigits = (value) =>
  String(value).replace(/\d/g, digit => "۰۱۲۳۴۵۶۷۸۹"[digit]);

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "۰:۰۰";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return toPersianDigits(`${minutes}:${remainingSeconds}`);
}

function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function showScreen(screen) {
  screens.forEach(item => {
    item.classList.remove("screen--active");
    item.setAttribute("aria-hidden", "true");
  });

  screen.classList.add("screen--active");
  screen.setAttribute("aria-hidden", "false");
  window.scrollTo(0, 0);
}

function safelyPlay(audio) {
  return audio.play().catch(() => {
    console.info("برای پخش صدا باید کاربر دکمه پخش را لمس کند.");
  });
}

/* ==========================================================
   مقداردهی متن‌ها
========================================================== */

$("#celebrationName").textContent = CONFIG.belovedName;
$("#celebrationMessage").textContent = CONFIG.celebrationMessage;
$("#heroName").textContent = CONFIG.belovedName;
$("#heroDescription").textContent = CONFIG.heroDescription;
$("#songTitle").textContent = CONFIG.songTitle;
$("#songArtist").textContent = CONFIG.songArtist;
$("#finalSignature").textContent = CONFIG.finalSignature;

/* ==========================================================
   ذرات پس‌زمینه
========================================================== */

const particleContainer = $("#floatingParticles");

setInterval(() => {
  const particle = document.createElement("span");
  const symbols = ["♥", "♡", "✦", "·"];

  particle.className = "floating-particle";
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.fontSize = `${11 + Math.random() * 20}px`;
  particle.style.animationDuration = `${8 + Math.random() * 7}s`;

  particleContainer.appendChild(particle);
  setTimeout(() => particle.remove(), 16000);
}, 850);

/* ==========================================================
   پاکت و رمز
========================================================== */

const envelope = $("#openEnvelope");
const passwordPanel = $("#passwordForm");
const passwordInput = $("#passwordInput");
const passwordMessage = $("#passwordMessage");

let envelopeOpened = false;

envelope.addEventListener("click", () => {
  if (envelopeOpened) return;

  envelopeOpened = true;
  envelope.classList.add("is-open");
  $("#openHint").textContent = "نامه برای تو باز شد...";

  setTimeout(() => {
    passwordPanel.classList.add("is-visible");
    passwordInput.focus({ preventScroll: true });
  }, 750);
});

$("#togglePassword").addEventListener("click", event => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  event.currentTarget.textContent = isHidden ? "🙈" : "👁️";
});

passwordPanel.addEventListener("submit", event => {
  event.preventDefault();

  if (passwordInput.value.trim() === CONFIG.password) {
    passwordMessage.textContent = "";
    beginCinematicIntro();
    return;
  }

  passwordMessage.textContent =
    "این رمز درِ قلب من را باز نکرد؛ دوباره امتحان کن ❤️";

  passwordPanel.classList.remove("is-shaking");
  void passwordPanel.offsetWidth;
  passwordPanel.classList.add("is-shaking");
  passwordInput.select();
});

/* ==========================================================
   مقدمه سینمایی
========================================================== */

let introCancelled = false;

async function beginCinematicIntro() {
  introCancelled = false;
  showScreen($("#introPage"));

  const textElement = $("#cinematicText");

  for (const line of CONFIG.introLines) {
    if (introCancelled) return;

    textElement.textContent = line;
    textElement.classList.remove("show");
    void textElement.offsetWidth;
    textElement.classList.add("show");

    await wait(2300);
  }

  if (!introCancelled) startCelebration();
}

$("#skipIntro").addEventListener("click", () => {
  introCancelled = true;
  startCelebration();
});

/* ==========================================================
   جشن و کاغذرنگی
========================================================== */

const confettiCanvas = $("#confettiCanvas");
const context = confettiCanvas.getContext("2d");

let confetti = [];
let confettiFrame;

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);

  confettiCanvas.width = innerWidth * ratio;
  confettiCanvas.height = innerHeight * ratio;
  confettiCanvas.style.width = `${innerWidth}px`;
  confettiCanvas.style.height = `${innerHeight}px`;

  context.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function makeConfetti() {
  const colors = ["#ff668f", "#efc27d", "#ffffff", "#a978e1", "#ffb2cb"];

  return {
    x: Math.random() * innerWidth,
    y: -20 - Math.random() * innerHeight,
    width: 5 + Math.random() * 7,
    height: 9 + Math.random() * 10,
    speed: 2 + Math.random() * 4,
    drift: -1.4 + Math.random() * 2.8,
    rotation: Math.random() * Math.PI,
    rotationSpeed: -0.12 + Math.random() * 0.24,
    color: colors[Math.floor(Math.random() * colors.length)]
  };
}

function animateConfetti() {
  context.clearRect(0, 0, innerWidth, innerHeight);

  confetti.forEach(piece => {
    piece.y += piece.speed;
    piece.x += piece.drift;
    piece.rotation += piece.rotationSpeed;

    if (piece.y > innerHeight + 20) {
      Object.assign(piece, makeConfetti(), { y: -20 });
    }

    context.save();
    context.translate(piece.x, piece.y);
    context.rotate(piece.rotation);
    context.fillStyle = piece.color;
    context.fillRect(
      -piece.width / 2,
      -piece.height / 2,
      piece.width,
      piece.height
    );
    context.restore();
  });

  confettiFrame = requestAnimationFrame(animateConfetti);
}

function startConfetti() {
  resizeCanvas();

  const count = Math.min(
    190,
    Math.max(80, Math.floor(innerWidth / 3))
  );

  confetti = Array.from({ length: count }, makeConfetti);
  cancelAnimationFrame(confettiFrame);
  animateConfetti();
}

function stopConfetti() {
  cancelAnimationFrame(confettiFrame);
  context.clearRect(0, 0, innerWidth, innerHeight);
}

function createHeartExplosion() {
  const container = $("#heartExplosion");
  container.innerHTML = "";

  const symbols = ["❤️", "💖", "💕", "✨", "🌸"];

  for (let index = 0; index < 48; index += 1) {
    const particle = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const distance = 120 + Math.random() * Math.min(innerWidth * 0.65, 430);

    particle.className = "burst-particle";
    particle.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    particle.style.setProperty("--r", `${Math.random() * 700 - 350}deg`);
    particle.style.animationDelay = `${Math.random() * 0.35}s`;
    particle.style.fontSize = `${14 + Math.random() * 24}px`;

    container.appendChild(particle);
  }
}

function startCelebration() {
  showScreen($("#celebrationPage"));
  createHeartExplosion();
  startConfetti();
}

$("#enterStory").addEventListener("click", () => {
  stopConfetti();
  showScreen($("#storyPage"));
  buildDynamicSections();
  activateRevealAnimations();
  startLoveCounter();
});

window.addEventListener("resize", () => {
  if ($("#celebrationPage").classList.contains("screen--active")) {
    resizeCanvas();
  }
});

/* ==========================================================
   بخش‌های داینامیک
========================================================== */

let sectionsBuilt = false;

function buildDynamicSections() {
  if (sectionsBuilt) return;
  sectionsBuilt = true;

  buildTimeline();
  buildGallery();
  buildReasons();
  
}

function buildTimeline() {
  $("#timelineList").innerHTML = CONFIG.timeline
    .map((item, index) => `
      <article class="timeline-item reveal">
        <span class="timeline-item__dot"></span>
        <div class="timeline-item__card">
          <time>${item.date}</time>
          <h4>${item.title}</h4>
          <p>${item.text}</p>
        </div>
      </article>
    `)
    .join("");
}

function buildGallery() {
  const rotations = ["-2.4deg", "2deg", "-1deg", "2.7deg", "-2deg", "1.3deg"];

  $("#polaroidGallery").innerHTML = CONFIG.photos
    .map((photo, index) => `
      <button
        class="polaroid reveal"
        type="button"
        style="--rotation:${rotations[index % rotations.length]}"
        data-index="${index}"
      >
        <span class="polaroid__image">
          <img src="${photo.src}" alt="${photo.title}" loading="lazy">
        </span>
        <strong>${photo.title}</strong>
        <small>${photo.caption}</small>
      </button>
    `)
    .join("");

  document.querySelectorAll(".polaroid").forEach(card => {
    card.addEventListener("click", () => {
      openPhoto(Number(card.dataset.index));
    });
  });
}

function buildReasons() {
  $("#reasonsGrid").innerHTML = CONFIG.reasons
    .map((reason, index) => `
      <button class="reason-card reveal" type="button">
        <span class="reason-card__face reason-card__front">
          <span>💗</span>
          <strong>دلیل ${toPersianDigits(index + 1)}</strong>
        </span>

        <span class="reason-card__face reason-card__back">
          <span>♥</span>
          <p>${reason}</p>
        </span>
      </button>
    `)
    .join("");

  document.querySelectorAll(".reason-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");

      if (navigator.vibrate) {
        navigator.vibrate(25);
      }
    });
  });
}

function buildSky() {
  const randomStars = $("#randomStars");

  for (let index = 0; index < 85; index += 1) {
    const star = document.createElement("i");

    star.className = "random-star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 84}%`;
    star.style.opacity = `${0.25 + Math.random() * 0.75}`;
    star.style.setProperty("--duration", `${1.4 + Math.random() * 3}s`);

    randomStars.appendChild(star);
  }

  const positions = [
    [18, 22],
    [72, 17],
    [36, 41],
    [81, 52],
    [54, 64]
  ];

  $("#memoryStars").innerHTML = CONFIG.starMemories
    .map((memory, index) => `
      <button
        class="memory-star"
        type="button"
        data-index="${index}"
        style="left:${positions[index % positions.length][0]}%;
               top:${positions[index % positions.length][1]}%"
        aria-label="نمایش خاطره"
      >✦</button>
    `)
    .join("");

  document.querySelectorAll(".memory-star").forEach(star => {
    star.addEventListener("click", () => {
      const memoryBox = $("#starMemory");

      memoryBox.querySelector("p").textContent =
        CONFIG.starMemories[Number(star.dataset.index)];

      memoryBox.classList.add("is-visible");

      clearTimeout(memoryBox.hideTimer);
      memoryBox.hideTimer = setTimeout(() => {
        memoryBox.classList.remove("is-visible");
      }, 5000);
    });
  });
}

/* ==========================================================
   شمارنده رابطه
========================================================== */

let counterTimer;

function startLoveCounter() {
  updateLoveCounter();
  clearInterval(counterTimer);
  counterTimer = setInterval(updateLoveCounter, 1000);
}

function updateLoveCounter() {
  const start = new Date(CONFIG.relationshipStart);
  const now = new Date();

  if (Number.isNaN(start.getTime()) || now < start) return;

  let cursor = new Date(start);
  let years = 0;
  let months = 0;

  while (true) {
    const next = new Date(cursor);
    next.setFullYear(next.getFullYear() + 1);

    if (next <= now) {
      years += 1;
      cursor = next;
    } else {
      break;
    }
  }

  while (true) {
    const next = new Date(cursor);
    next.setMonth(next.getMonth() + 1);

    if (next <= now) {
      months += 1;
      cursor = next;
    } else {
      break;
    }
  }

  let difference = now - cursor;

  const days = Math.floor(difference / 86400000);
  difference %= 86400000;

  const hours = Math.floor(difference / 3600000);
  difference %= 3600000;

  const minutes = Math.floor(difference / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  $("#counterYears").textContent = toPersianDigits(years);
  $("#counterMonths").textContent = toPersianDigits(months);
  $("#counterDays").textContent = toPersianDigits(days);
  $("#counterHours").textContent = toPersianDigits(hours);
  $("#counterMinutes").textContent = toPersianDigits(minutes);
  $("#counterSeconds").textContent = toPersianDigits(seconds);
}

/* ==========================================================
   قلب تعاملی
========================================================== */

$("#interactiveHeart").addEventListener("click", event => {
  const heart = event.currentTarget;
  const message = $("#heartSecret");

  heart.classList.remove("is-beating");
  void heart.offsetWidth;
  heart.classList.add("is-beating");
  message.classList.add("is-visible");

  if (navigator.vibrate) {
    navigator.vibrate([60, 70, 90, 80, 120]);
  }

  setTimeout(() => {
    message.classList.remove("is-visible");
  }, 4200);
});

/* ==========================================================
   پیام صوتی
========================================================== */

const voiceAudio = $("#voiceAudio");

$("#voiceButton").addEventListener("click", () => {
  if (voiceAudio.paused) {
    $("#songAudio").pause();
    safelyPlay(voiceAudio);
  } else {
    voiceAudio.pause();
  }
});

voiceAudio.addEventListener("play", () => {
  $("#voiceButtonIcon").textContent = "❚❚";
  $("#voiceButtonText").textContent = "توقف پیام";
});

voiceAudio.addEventListener("pause", () => {
  $("#voiceButtonIcon").textContent = "▶";
  $("#voiceButtonText").textContent = "شنیدن پیام من";
});

voiceAudio.addEventListener("loadedmetadata", () => {
  $("#voiceDuration").textContent = formatTime(voiceAudio.duration);
});

voiceAudio.addEventListener("timeupdate", () => {
  const percent = voiceAudio.duration
    ? voiceAudio.currentTime / voiceAudio.duration * 100
    : 0;

  $("#voiceProgress").style.width = `${percent}%`;
  $("#voiceCurrentTime").textContent = formatTime(voiceAudio.currentTime);
});

/* ==========================================================
   پخش‌کننده ترانه و متن هماهنگ
========================================================== */

const songAudio = $("#songAudio");


$("#songPlayButton").addEventListener("click", () => {
  if (songAudio.paused) {
    voiceAudio.pause();
    safelyPlay(songAudio);
  } else {
    songAudio.pause();
  }
});

songAudio.addEventListener("play", () => {
  $("#songPlayButton").textContent = "❚❚";
  $("#vinylRecord").classList.add("is-playing");
});

songAudio.addEventListener("pause", () => {
  $("#songPlayButton").textContent = "▶";
  $("#vinylRecord").classList.remove("is-playing");
});

songAudio.addEventListener("loadedmetadata", () => {
  $("#songDuration").textContent = formatTime(songAudio.duration);
});

songAudio.addEventListener("timeupdate", () => {
  const percent = songAudio.duration
    ? songAudio.currentTime / songAudio.duration * 100
    : 0;

  $("#songProgress").value = percent;
  $("#songCurrentTime").textContent = formatTime(songAudio.currentTime);
  
});

$("#songProgress").addEventListener("input", event => {
  if (!songAudio.duration) return;

  songAudio.currentTime =
    Number(event.currentTarget.value) / 100 * songAudio.duration;
});

$("#songMuteButton").addEventListener("click", event => {
  songAudio.muted = !songAudio.muted;
  event.currentTarget.textContent = songAudio.muted ? "🔇" : "🔊";
});



/* ==========================================================
   صندوق آرزوها
========================================================== */

let giftOpened = false;

$("#giftBox").addEventListener("click", event => {
  if (giftOpened) return;
  giftOpened = true;

  event.currentTarget.classList.add("is-open");
  $("#giftHint").textContent = "آرزوهایم برای تو...";

  $("#wishesList").innerHTML = CONFIG.wishes
    .map((wish, index) => `
      <article class="wish-card" style="--delay:${index * 0.25}s">
        <span>${["🌷", "✨", "💞"][index % 3]}</span>
        <p>${wish}</p>
      </article>
    `)
    .join("");
});

/* ==========================================================
   نامه پایانی
========================================================== */

let typingTimer;

$("#openFinalLetter").addEventListener("click", () => {
  $(".final-letter-section__intro").style.display = "none";
  $("#finalLetter").classList.add("is-open");

  $("#finalLetter").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  typeFinalLetter();
});

function typeFinalLetter() {
  clearInterval(typingTimer);

  const destination = $("#typedLetter");
  const text = CONFIG.finalLetter;
  let index = 0;

  destination.textContent = "";
  destination.classList.remove("is-finished");
  $("#replayExperience").classList.remove("is-visible");

  typingTimer = setInterval(() => {
    destination.textContent += text[index];
    index += 1;

    if (index >= text.length) {
      clearInterval(typingTimer);
      destination.classList.add("is-finished");
      $("#replayExperience").classList.add("is-visible");
    }
  }, 32);
}

$("#replayExperience").addEventListener("click", () => {
  songAudio.pause();
  voiceAudio.pause();
  location.reload();
});

/* ==========================================================
   مودال عکس
========================================================== */

function openPhoto(index) {
  const photo = CONFIG.photos[index];

  $("#modalPhoto").src = photo.src;
  $("#modalPhoto").alt = photo.title;
  $("#modalPhotoTitle").textContent = photo.title;
  $("#modalPhotoCaption").textContent = photo.caption;

  $("#photoModal").classList.add("is-open");
  $("#photoModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closePhoto() {
  $("#photoModal").classList.remove("is-open");
  $("#photoModal").setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

$("#closePhotoModal").addEventListener("click", closePhoto);

$("#photoModal").addEventListener("click", event => {
  if (event.target === $("#photoModal")) closePhoto();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closePhoto();
});

/* ==========================================================
   انیمیشن ظاهر شدن هنگام اسکرول
========================================================== */

let revealObserver;

function activateRevealAnimations() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -35px"
  });

  document.querySelectorAll(".reveal").forEach(element => {
    revealObserver.observe(element);
  });
}


document.querySelectorAll(".eyes-card").forEach(card => {
  card.addEventListener("click", () => {
    const image = $("#modalPhoto");
    const title = $("#modalPhotoTitle");
    const caption = $("#modalPhotoCaption");
    const modal = $("#photoModal");

    image.src = card.dataset.photoSrc;
    image.alt = card.dataset.photoTitle;
    title.textContent = card.dataset.photoTitle;
    caption.textContent = card.dataset.photoCaption;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  });
});

/* ==========================================================
   کیک آرزوها: لمس شمع و فوت کردن در میکروفن
========================================================== */

const cakeCandles = [...document.querySelectorAll(".cake-candle")];

cakeCandles.forEach(candle => {
  candle.addEventListener("click", () => {
    turnOffCandle(candle);
  });
});

const cakeMessage = $("#cakeMessage");
const enableBlowButton = $("#enableBlowButton");
const cakeStatus = $("#cakeStatus");

let microphoneStream = null;
let microphoneContext = null;
let microphoneAnalyser = null;
let microphoneData = null;
let microphoneAnimation = null;
let lastBlowTime = 0;

function showCakeMessage(message) {
  cakeMessage.classList.remove("is-changing");

  requestAnimationFrame(() => {
    cakeMessage.innerHTML = `
      <span>✨</span>
      <p>${message}</p>
    `;
    cakeMessage.classList.add("is-changing");
  });
}

function turnOffCandle(candle) {
  if (!candle || !candle.classList.contains("is-lit")) return;

  candle.classList.add("is-blowing");

  window.setTimeout(() => {
    candle.classList.remove("is-lit", "is-blowing");
  }, 430);

  showCakeMessage(candle.dataset.message);

  if (navigator.vibrate) {
    navigator.vibrate(35);
  }

  const litCandles = document.querySelectorAll(".cake-candle.is-lit").length;

  if (litCandles === 0) {
  window.setTimeout(() => {
    showCakeMessage(
      "تمام شمع‌ها خاموش شدند؛ اما آرزوی من برای خوشبختی تو همیشه روشن می‌ماند. 🎂❤️"
    );

    cakeStatus.textContent = "آرزو کن؛ این لحظه فقط برای توست.";
    stopBlowDetection();

    showCakeFinalSurprise();
  }, 650);
}

}

cakeCandles.forEach(candle => {
  candle.addEventListener("click", () => {
    turnOffCandle(candle);
  });
});

function getNextLitCandle() {
  return document.querySelector(".cake-candle.is-lit");
}

function stopBlowDetection() {
  if (microphoneAnimation) {
    cancelAnimationFrame(microphoneAnimation);
    microphoneAnimation = null;
  }

  if (microphoneStream) {
    microphoneStream.getTracks().forEach(track => track.stop());
    microphoneStream = null;
  }

  if (microphoneContext && microphoneContext.state !== "closed") {
    microphoneContext.close();
  }

  microphoneContext = null;
  microphoneAnalyser = null;
  microphoneData = null;

  if (enableBlowButton) {
  enableBlowButton.disabled = false;
  enableBlowButton.textContent = "🎙️ فعال کردن فوت کردن";
}

}

function detectBlow() {
  if (!microphoneAnalyser || !microphoneData) return;

  microphoneAnalyser.getByteTimeDomainData(microphoneData);

  let total = 0;

  microphoneData.forEach(value => {
    const normalizedValue = (value - 128) / 128;
    total += normalizedValue * normalizedValue;
  });

  const volume = Math.sqrt(total / microphoneData.length);
  const now = Date.now();

  /*
    در صورت نیاز عدد 0.09 را کم یا زیاد کنید:
    عدد کمتر = حساسیت بیشتر
    عدد بیشتر = نیاز به فوت قوی‌تر
  */
  if (volume > 0.09 && now - lastBlowTime > 900) {
    lastBlowTime = now;

    const nextCandle = getNextLitCandle();

    if (nextCandle) {
      turnOffCandle(nextCandle);
      cakeStatus.textContent = "فوتت رسید... یک شمع خاموش شد ✨";
    }
  }

  if (document.querySelector(".cake-candle.is-lit")) {
    microphoneAnimation = requestAnimationFrame(detectBlow);
  }
}

async function enableBlowDetection() {
  if (!navigator.mediaDevices?.getUserMedia) {
    cakeStatus.textContent = "مرورگر شما دسترسی به میکروفن را پشتیبانی نمی‌کند؛ شمع‌ها را لمس کن.";
    return;
  }

  try {
    microphoneStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false
      }
    });

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    microphoneContext = new AudioContextClass();
    const source = microphoneContext.createMediaStreamSource(microphoneStream);

    microphoneAnalyser = microphoneContext.createAnalyser();
    microphoneAnalyser.fftSize = 1024;

    microphoneData = new Uint8Array(microphoneAnalyser.fftSize);

    source.connect(microphoneAnalyser);

    enableBlowButton.disabled = true;
    enableBlowButton.textContent = "🎙️ منتظر فوت تو...";
    cakeStatus.textContent = "حالا آرام و پیوسته در میکروفن فوت کن.";

    detectBlow();
  } catch (error) {
    console.error("Microphone error:", error);

    cakeStatus.textContent =
      "اجازهٔ میکروفن داده نشد؛ هیچ مشکلی نیست، شمع‌ها را با لمس خاموش کن.";
  }
}

enableBlowButton?.addEventListener("click", enableBlowDetection);


/* ==========================================================
   پایان ویژهٔ کیک و هدایت به هدیهٔ آخر
========================================================== */

const cakeFinalSurprise = $("#cakeFinalSurprise");
const openFinalGiftButton = $("#openFinalGiftButton");

function createFinalCelebrationHearts() {
  const heartCount = 28;

  for (let index = 0; index < heartCount; index += 1) {
    const heart = document.createElement("span");

    heart.className = "final-celebration-heart";
    heart.textContent = index % 4 === 0 ? "✨" : "♥";

    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.setProperty("--heart-x", `${(Math.random() - 0.5) * 230}px`);
    heart.style.setProperty("--heart-duration", `${2.8 + Math.random() * 1.8}s`);
    heart.style.animationDelay = `${Math.random() * 0.7}s`;

    document.body.appendChild(heart);

    window.setTimeout(() => {
      heart.remove();
    }, 5200);
  }
}

function showCakeFinalSurprise() {
  const cakeSection = document.querySelector(".cake-section");

  if (!cakeFinalSurprise || cakeFinalSurprise.classList.contains("is-visible")) {
    return;
  }

  cakeSection?.classList.add("is-celebrating");
  cakeFinalSurprise.classList.add("is-visible");

  createFinalCelebrationHearts();

  if (navigator.vibrate) {
    navigator.vibrate([80, 50, 100, 50, 150]);
  }
}

openFinalGiftButton?.addEventListener("click", () => {
  $("#finalLetterSection")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

/* ==========================================================
   باز شدن نامه با نگه داشتن دکمه
========================================================== */

const holdLetterButton = $("#holdLetterButton");
const holdLetterButtonText = $("#holdLetterButtonText");
const letterHint = $("#letterHint");
const finalLetter = $("#finalLetter");
const letterLock = document.querySelector(".love-letter-lock");

let holdStartTime = 0;
let holdAnimationFrame = null;
let isHoldingLetter = false;
let isLetterUnlocked = false;

const letterHoldDuration = 3000;

function stopHoldingLetter() {
  if (!holdLetterButton || !isHoldingLetter || isLetterUnlocked) return;

  isHoldingLetter = false;

  if (holdAnimationFrame) {
    cancelAnimationFrame(holdAnimationFrame);
    holdAnimationFrame = null;
  }

  holdLetterButton.classList.remove("is-holding");
  holdLetterButton.style.setProperty("--hold-progress", "0%");

  if (holdLetterButtonText) {
    holdLetterButtonText.textContent = "♥ نگه دار";
  }

  if (letterHint) {
    letterHint.textContent = "برای باز کردن نامه، دکمه را سه ثانیه نگه دار...";
  }
}


function unlockLetter() {
  if (isLetterUnlocked) return;

  isLetterUnlocked = true;
  isHoldingLetter = false;

  if (holdAnimationFrame) {
    cancelAnimationFrame(holdAnimationFrame);
    holdAnimationFrame = null;
  }

  holdLetterButton.disabled = true;
  holdLetterButton.classList.remove("is-holding");
  holdLetterButton.style.setProperty("--hold-progress", "100%");
  holdLetterButtonText.textContent = "نامه باز شد ♥";
  letterHint.textContent = "قلب من همیشه برای تو باز است.";

  letterLock.classList.add("is-unlocked");

  window.setTimeout(() => {
    finalLetter.classList.add("is-open");
    finalLetter.setAttribute("aria-hidden", "false");

    finalLetter.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 380);

  if (navigator.vibrate) {
    navigator.vibrate([45, 35, 70]);
  }

  createFinalCelebrationHearts();
}

function updateLetterHoldProgress(currentTime) {
  if (!isHoldingLetter || isLetterUnlocked) return;

  const elapsedTime = currentTime - holdStartTime;
  const progress = Math.min(elapsedTime / letterHoldDuration, 1);

  holdLetterButton.style.setProperty(
    "--hold-progress",
    `${progress * 100}%`
  );

  holdLetterButtonText.textContent = `در حال باز شدن... ${Math.round(progress * 100)}٪`;

  if (progress >= 1) {
    unlockLetter();
    return;
  }

  holdAnimationFrame = requestAnimationFrame(updateLetterHoldProgress);
}

function startHoldingLetter(event) {
  if (!holdLetterButton || isLetterUnlocked || isHoldingLetter) return;

  event.preventDefault();

  isHoldingLetter = true;
  holdStartTime = performance.now();

  holdLetterButton.classList.add("is-holding");

  if (letterHint) {
    letterHint.textContent = "نگه دار... نامه دارد باز می‌شود.";
  }

  holdAnimationFrame = requestAnimationFrame(updateLetterHoldProgress);
}


holdLetterButton?.addEventListener("pointerdown", startHoldingLetter);
holdLetterButton?.addEventListener("pointerup", stopHoldingLetter);
holdLetterButton?.addEventListener("pointerleave", stopHoldingLetter);
holdLetterButton?.addEventListener("pointercancel", stopHoldingLetter);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopHoldingLetter();
  }
});
