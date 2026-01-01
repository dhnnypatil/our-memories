import './style.css'

// --- Daily Note System ---

const messages = [
  "Good morning, my love. Just wanted to remind you that you're the best thing that's ever happened to me.",
  "I miss you more than words can say, but knowing we're under the same sky makes it a little easier.",
  "You are my favorite thought.",
  "Every day with you is a new adventure, even from a distance.",
  "I love your laugh. It's my favorite sound.",
  "Can't wait to hold you in my arms again.",
  "You make my world so much brighter.",
  "Thinking of you and smiling.",
  "You're my person. Always.",
  "I hope you have a day as beautiful as your soul.",
  "Sending you a giant hug from here.",
  "You inspire me to be better every single day.",
  "I love you more today than yesterday.",
  "Distance means so little when someone means so much.",
  "You are worth every mile between us.",
  "My heart is wherever you are.",
  "Just a reminder: I believe in you.",
  "You look beautiful today (I just know it).",
  "Thank you for being you.",
  "I'm counting down the days/minutes/seconds until I see you."
];

function getDailyMessage() {
  const now = new Date();
  // Adjust time so day "starts" at 4 AM
  // If it's 3 AM, we want it to still be "yesterday's" message relative to the refresh cycle.
  // So we subtract 4 hours.
  const adjustedDate = new Date(now.getTime() - 4 * 60 * 60 * 1000);

  // Calculate day of the year (0-365)
  const start = new Date(adjustedDate.getFullYear(), 0, 0);
  const diff = adjustedDate - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  // Use modulo to cycle through messages if we have fewer than 365
  const messageIndex = dayOfYear % messages.length;
  return messages[messageIndex];
}

function initDailyNote() {
  const noteCard = document.getElementById('noteCard');
  const messageEl = document.getElementById('dailyMessage');
  const dateEl = document.getElementById('noteDate');

  // Set message
  messageEl.textContent = getDailyMessage();

  // Set date (displaying current real photo-date style)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = new Date().toLocaleDateString('en-US', options);

  // Flip interaction
  noteCard.addEventListener('click', () => {
    noteCard.classList.toggle('is-flipped');
  });
}

// --- Gallery System ---

const memories = [
  { url: '/images/us1.jpeg', caption: "Where it all began" },
  { url: '/images/us2.jpeg', caption: "Just us" },
  { url: '/images/us3.jpeg', caption: "Making memories" },
  { url: '/images/us4.jpeg', caption: "My favorite smile" },
  { url: '/images/us5.jpeg', caption: "Adventures with you" },
  { url: '/images/us6.jpeg', caption: "Unforgettable moments" },
  { url: '/images/us7.jpeg', caption: "Forever & Always" }
];

/**
 * Converts a Google Drive share link into a direct image link.
 * Example: https://drive.google.com/file/d/123XYZ/view -> https://drive.google.com/uc?export=view&id=123XYZ
 */
function getDirectImageUrl(url) {
  if (url.includes('drive.google.com') && url.includes('/file/d/')) {
    const idMatch = url.match(/\/d\/(.*?)\//);
    if (idMatch && idMatch[1]) {
      return `https://drive.google.com/uc?export=view&id=${idMatch[1]}`;
    }
  }
  return url;
}

function initGallery() {
  const container = document.getElementById('galleryContainer');

  memories.forEach((memory, index) => {
    const polaroid = document.createElement('div');
    polaroid.className = 'polaroid';

    // Process the URL to handle Google Drive links automatically
    const validUrl = getDirectImageUrl(memory.url);

    polaroid.innerHTML = `
      <img src="${validUrl}" alt="${memory.caption}" loading="lazy">
      <div class="polaroid-caption">${memory.caption}</div>
    `;

    container.appendChild(polaroid);
  });
}

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
  initDailyNote();
  initGallery();
});
