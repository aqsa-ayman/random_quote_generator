var quotes = ["\“You only live once, but if you do it right, once is enough.\” ― Mae West",
"\“In three words I can sum up everything I've learned about life: it goes on.\” ― Robert Frost",
"\“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.\” ― J.K. Rowling, Harry Potter and the Goblet of Fire",
"\“No one can make you feel inferior without your consent.\” ― Eleanor Roosevelt, This is My Story",
"\“Good friends, good books, and a sleepy conscience: this is the ideal life.\” ― Mark Twain",
"“Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.” ― Neil Gaiman, The Sandman, Vol. 6: Fables and Reflections",
"“My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style” ― Maya Angelou",
"“The most important thing we learn at school is the fact that the most important things can't be learned at school.” ― Haruki Murakami, What I Talk About When I Talk About Running",
"“Some people feel the rain. Others just get wet.” ― Bob Marley",
"“In ancient times cats were worshipped as gods; they have not forgotten this.” ― Terry Pratchett",
"“Sometimes people put up walls, not to keep others out, but to see who cares enough to break them down.” ― Banana Yoshimoto",
"“Time is a drug. Too much of it kills you.” ― Terry Pratchett, Small Gods",
"“We realize the importance of our voices only when we are silenced.” ― Malala Yousafzai",
"“If I’m at a party where I’m not enjoying myself, I will put some cookies in my jacket pocket and leave without saying good-bye.” ― Mindy Kaling",
"“I may not have gone where I intended to go, but I think I have ended up where I needed to be.” ― Douglas Adams, The Long Dark Tea-Time of the Soul",
"“Once you can accept the universe as matter expanding into nothing that is something, wearing stripes with plaid comes easy.” ― Albert Einstein",
"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ― Dr. Seuss",
"“For me, I am driven by two main philosophies: know more today about the world than I knew yesterday and lessen the suffering of others. You'd be surprised how far that gets you.” ― Neil deGrasse Tyson",
"“We write to taste life twice, in the moment and in retrospect.” ― Anaïs Nin",
"“A child can teach an adult three things: to be happy for no reason, to always be busy with something, and to know how to demand with all his might that which he desires.” ― Paulo Coelho",
"“A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.” ― Winston S. Churchill",
"“If liberty means anything at all, it means the right to tell people what they do not want to hear.” ― George Orwell",
"“You must learn to be still in the midst of activity and vibrantly alive in repose.” ― Indira Gandhi",
"“We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.” ― Stephen Hawking",
"“Quiet people have the loudest minds.” ― Stephen Hawking",
"“Humans, if nothing else, have the good sense to die.” ― Markus Zusak, The Book Thief",
"“Love does not consist of gazing at each other, but in looking outward together in the same direction.” ― Antoine de Saint-Exupéry, Airman's Odyssey",
"“The worst part of success is trying to find someone who is happy for you.” ― Bette Midler",
"“Focusing your life solely on making a buck shows a poverty of ambition. It asks too little of yourself. And it will leave you unfulfilled.” ― Barack Obama",
"“We don't make mistakes, just happy little accidents.” ― Bob Ross",
"“No one really knows why they are alive until they know what they'd die for.” ― Martin Luther King Jr.",
"“Death is not the greatest loss in life. The greatest loss is what dies inside while still alive. Never surrender.” ― Tupac Shakur",
"“I would rather walk with a friend in the dark, than alone in the light.” ― Helen Keller"];

var randQuote;
var pickAQuote = function () {
  randQuote = quotes[Math.floor(Math.random()*quotes.length)];
  return randQuote;
  };

$("#tweet").click(function() {
  window.open("https://twitter.com/intent/tweet?text="+randQuote);
});


$("#find").click(function() { 
  $("p").html(pickAQuote());
});

