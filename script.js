// Array of quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. -Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In three words I can sum up everything I've learned about life: It goes on. - Robert Frost",
  // Add more quotes as needed
];

function generateQuote() {
  const quoteText = document.getElementById("quote-text");
  const randomIndex = Math.floor(Math.random() * quotes.length);

  quoteText.textContent = quotes[randomIndex];
}

// Initial quote generation on page load
generateQuote();
