const quotes = [
 "The only way to do great work is to love what you do. - Steve Jobs",
"Life is what happens when you're busy making other plans. - John Lennon",
"Get busy living or get busy dying. - Stephen King",
"You miss 100% of the shots you don’t take. - Wayne Gretzky",
"The purpose of our lives is to be happy. - Dalai Lama",
"In the end, we only regret the chances we didn’t take. - Lewis Carroll",
"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
"You only live once, but if you do it right, once is enough. - Mae West",
"The best way to predict the future is to create it. - Peter Drucker",
"Life is 10% what happens to us and 90% how we react to it. - Charles R Swindoll",
"Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
"Believe you can and you're halfway there. - Theodore Roosevelt",
"The only impossible journey is the one you never begin. - Tony Robbins",
"Dream big and dare to fail. - Norman Vaughan",
"What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
"Do what you can, with what you have, where you are. - Theodore Roosevelt",
"Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
"Opportunities don't happen. You create them. - Chris Grosser",
"I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
"It does not matter how slowly you go as long as you do not stop. - Confucius",
"The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
"You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
"What we fear doing most is usually what we most need to do. - Tim Ferriss",
"Act as if what you do makes a difference. It does. - William James",
"Success is not in what you have, but who you are. - Bo Bennett",
"Strive not to be a success, but rather to be of value. - Albert Einstein",
"The best revenge is massive success. - Frank Sinatra",
"Life is either a daring adventure or nothing at all. - Helen Keller",
"A person who never made a mistake never tried anything new. - Albert Einstein",
"You can’t use up creativity. The more you use, the more you have. - Maya Angelou",
"Failure is simply the opportunity to begin again, this time more intelligently. - Henry Ford",
"It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
"You don’t have to be great to start, but you have to start to be great. - Zig Ziglar",
"If you're going through hell, keep going. - Winston Churchill",
"The only place where success comes before work is in the dictionary. - Vidal Sassoon",
"Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
"The mind is everything. What you think you become. - Buddha",
"Success is walking from failure to failure with no loss of enthusiasm. - Winston S Churchill",
"Life is really simple, but we insist on making it complicated. - Confucius",
"An unexamined life is not worth living. - Socrates",
"Act as if what you do makes a difference. It does. - William James",
"Your time is limited, don’t waste it living someone else’s life. - Steve Jobs",
"The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
"Success is how high you bounce when you hit bottom. - George S Patton",
"The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
"We may encounter many defeats but we must not be defeated. - Maya Angelou",
"Change your thoughts and you change your world. - Norman Vincent Peale",
"The secret of getting ahead is getting started. - Mark Twain"
];

//let randomIndex = Math.floor(Math.random() * quotes.length); // Generate random index
//let randomQuote = quotes[randomIndex]; // Retrieve quote by index




function qouteTimer(){
let randomIndex = Math.floor(Math.random() * quotes.length); // Generate random index
let randomQuote = quotes[randomIndex]; // Retrieve quote by index
console.log(randomQuote);
document.getElementById("qoutes").innerHTML = randomQuote;
}



const timer = setInterval(qouteTimer, 30000);

