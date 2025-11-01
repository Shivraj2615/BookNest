const sampleBooks = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "An easy and proven way to build good habits and break bad ones.",
    price: 450,
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
    owner: "68fd0e3c71c26d95d317a2f7",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A journey of self-discovery about a shepherd pursuing his dream.",
    price: 299,
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    description: "Rules for focused success in a distracted world.",
    price: 370,
    image: "https://m.media-amazon.com/images/I/81JJ7fyyKyS._SL1500_.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Ikigai",
    author: "Francesc Miralles, Héctor García",
    description: "The Japanese secret to a long and happy life.",
    price: 320,
    image: "https://m.media-amazon.com/images/I/71lJBs5MNlL._AC_UY327_FMwebp_QL65_.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description: "Explores the history and impact of Homo sapiens on the world.",
    price: 500,
    image: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    description: "A guide to spiritual enlightenment and staying present.",
    price: 410,
    image: "https://m.media-amazon.com/images/I/61Ij8nLooNL._AC_UY327_FMwebp_QL65_.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    description: "A classic self-help book about wealth and success mindset.",
    price: 380,
    image: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    description: "Master your mind and defy the odds with mental toughness.",
    price: 490,
    image: "https://m.media-amazon.com/images/I/81VpFFpZTtL._AC_UY327_FMwebp_QL65_.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Do Epic Shit",
    author: "Ankur Warikoo",
    description: "Lessons from failures, successes, and everything in between.",
    price: 270,
    image: "https://m.media-amazon.com/images/I/61kRkfsIMUL._AC_UY327_FMwebp_QL65_.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Rework",
    author: "Jason Fried & David Heinemeier Hansson",
    description: "A radical guide to running a business differently.",
    price: 430,
    image: "https://m.media-amazon.com/images/I/41FilMgZVIL._AC_UY327_FMwebp_QL65_.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Hooked: How to Build Habit-Forming Products",
    author: "Nir Eyal",
    description: "Explores how successful companies create user habits.",
    price: 395,
    image: "https://m.media-amazon.com/images/I/81Ox0HCg8jL._AC_UY327_FMwebp_QL65_.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    description: "A Holocaust survivor's reflection on finding meaning in suffering.",
    price: 340,
    image: "https://m.media-amazon.com/images/I/81UhnGT7BvL._AC_UY327_FMwebp_QL65_.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Start With Why",
    author: "Simon Sinek",
    description: "How great leaders inspire everyone to take action.",
    price: 410,
    image: "https://m.media-amazon.com/images/I/41iZulVq18L._SY445_SX342_.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    description: "Notes on startups and how to build the future.",
    price: 360,
    image: "https://m.media-amazon.com/images/I/71m-MxdJ2WL.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Steal Like an Artist",
    author: "Austin Kleon",
    description: "Unlock your creativity by embracing influence.",
    price: 290,
    image: "https://m.media-amazon.com/images/I/81VvqDdHEFL._AC_UY327_FMwebp_QL65_.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "The 5 AM Club",
    author: "Robin Sharma",
    description: "Own your mornings, elevate your life.",
    price: 450,
    image: "https://m.media-amazon.com/images/I/71loUTDulKL._AC_UY327_FMwebp_QL65_.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    description: "A counterintuitive approach to living a good life.",
    price: 380,
    image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferriss",
    description: "The tactics, routines, and habits of billionaires and top performers.",
    price: 610,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/book/x/n/l/tools-of-titans-original-imah9kc6fpcbsnfx.jpeg?q=70",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Grit",
    author: "Angela Duckworth",
    description: "The power of passion and perseverance.",
    price: 390,
    image: "https://m.media-amazon.com/images/I/71ke1gECBxL._AC_UY327_FMwebp_QL65_.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Make Your Bed",
    author: "Admiral William H. McRaven",
    description: "Small things that can change your life and maybe the world.",
    price: 320,
    image: "https://m.media-amazon.com/images/I/713oSHhIrHL._AC_UY327_FMwebp_QL65_.jpg",
    owner: "68fd0e3c71c26d95d317a2f7"
  },
   {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    description: "Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing.",
    price: 300,
    image: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UY327_FMwebp_QL65_.jpg',
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: 'Dopamine Detox',
    author: 'Thibaut Meurisse',
    description: 'A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/712K3sdLlRL._SY466_.jpg',
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: 'The Power of Your Subconscious Mind',
    author: 'Joseph Murphy ',
    description: 'This remarkable book by Dr. Joseph Murphy, one of the pioneering voices of affirmative thinking, will unlock for you the truly staggering powers of your subconscious mind.',
    price: 500,
    image: 'https://m.media-amazon.com/images/I/61WMgOHyDaL._SY342_.jpg',
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: 'Find Your Why',
    author: ' Simon Sinek',
    description: 'A Practical Guide for Discovering Purpose for You and Your Team',
    image: 'https://m.media-amazon.com/images/I/41lyWeCTSxL._SX342_SY445_.jpg',
    price: 400,
    owner: "68fd0e3c71c26d95d317a2f7"
  },
  {
    title: "Reset: How to Change What's Not Working ",
    author: 'Dan Heath',
    description: 'Changing how we work can feel overwhelming. Like trying to budge an enormous boulder. We’re stifled by the gravity of the way we’ve always done things. And we spend so much time fighting fires—and fighting colleagues—that we lack the energy to shift direction.',
    image: 'https://m.media-amazon.com/images/I/61qHwXXW-PL._SY466_.jpg',
    price: 250,
    owner: "68fd0e3c71c26d95d317a2f7"
  }
]


module.exports = { data: sampleBooks };

