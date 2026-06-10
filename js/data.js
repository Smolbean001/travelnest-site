const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    continent: "Asia",
    type: "relaxation",
    budget: "low",
    image: "images/bali.jpg",
    desc: "Tropical paradise with rice terraces, temples, and stunning beaches.",
    attractions: ["Ubud Monkey Forest", "Tanah Lot Temple", "Seminyak Beach"],
    costs: [
      { item: "Accommodation (per night)", cost: "$15–$40" },
      { item: "Meal", cost: "$2–$8" },
      { item: "Transport (scooter/day)", cost: "$5" }
    ]
  },
  {
    name: "Paris",
    country: "France",
    continent: "Europe",
    type: "cultural",
    budget: "high",
    image: "images/paris.jpg",
    desc: "The city of light — art, fashion, cuisine, and the Eiffel Tower.",
    attractions: ["Eiffel Tower", "Louvre Museum", "Montmartre"],
    costs: [
      { item: "Accommodation (per night)", cost: "$120–$300" },
      { item: "Meal", cost: "$15–$40" },
      { item: "Metro day pass", cost: "$8" }
    ]
  },
  {
    name: "Machu Picchu",
    country: "Peru",
    continent: "South America",
    type: "adventure",
    budget: "medium",
    image: "images/machupicchu.jpg",
    desc: "Ancient Incan citadel set high in the Andes Mountains.",
    attractions: ["Sun Gate", "Huayna Picchu", "Inca Trail"],
    costs: [
      { item: "Accommodation (per night)", cost: "$30–$80" },
      { item: "Meal", cost: "$5–$15" },
      { item: "Entry ticket", cost: "$45" }
    ]
  },
  {
    name: "Serengeti",
    country: "Tanzania",
    continent: "Africa",
    type: "nature",
    budget: "high",
    image: "images/Serengeti.jpg",
    desc: "Witness the Great Migration across endless golden plains.",
    attractions: ["Great Migration", "Ngorongoro Crater", "Hot air balloon safari"],
    costs: [
      { item: "Safari lodge (per night)", cost: "$200–$600" },
      { item: "Meal", cost: "$20–$50" },
      { item: "Park entry (per day)", cost: "$60" }
    ]
  },
  {
    name: "Kyoto",
    country: "Japan",
    continent: "Asia",
    type: "cultural",
    budget: "medium",
    image: "images/kyoto.jpg",
    desc: "Ancient temples, geisha districts, and cherry blossoms.",
    attractions: ["Fushimi Inari", "Arashiyama Bamboo Grove", "Gion District"],
    costs: [
      { item: "Accommodation (per night)", cost: "$50–$120" },
      { item: "Meal", cost: "$8–$25" },
      { item: "Day pass (transit)", cost: "$6" }
    ]
  },
  {
    name: "Queenstown",
    country: "New Zealand",
    continent: "Oceania",
    type: "adventure",
    budget: "high",
    image: "images/queenstown.jpg",
    desc: "Adventure capital of the world — bungee, skiing, and fjords.",
    attractions: ["Bungee Jumping", "Milford Sound", "Remarkables Ski Area"],
    costs: [
      { item: "Accommodation (per night)", cost: "$80–$200" },
      { item: "Meal", cost: "$15–$35" },
      { item: "Bungee jump", cost: "$150" }
    ]
  },
  {
    name: "New York",
    country: "USA",
    continent: "North America",
    type: "cultural",
    budget: "high",
    image: "images/newyork.jpg",
    desc: "The city that never sleeps — iconic skyline, food, and culture.",
    attractions: ["Central Park", "Times Square", "Statue of Liberty"],
    costs: [
      { item: "Accommodation (per night)", cost: "$150–$400" },
      { item: "Meal", cost: "$15–$50" },
      { item: "Subway day pass", cost: "$9" }
    ]
  },
  {
    name: "Maldives",
    country: "Maldives",
    continent: "Asia",
    type: "relaxation",
    budget: "high",
    image: "images/maldives.jpg",
    desc: "Crystal-clear waters, overwater bungalows, and coral reefs.",
    attractions: ["Snorkeling", "Overwater Villas", "Whale Shark Tours"],
    costs: [
      { item: "Resort (per night)", cost: "$300–$1000" },
      { item: "Meal", cost: "$30–$80" },
      { item: "Speedboat transfer", cost: "$100" }
    ]
  },
  {
    name: "Amazon Rainforest",
    country: "Brazil",
    continent: "South America",
    type: "nature",
    budget: "medium",
    image: "images/amazonrainforest.jpg",
    desc: "The world's largest rainforest teeming with wildlife.",
    attractions: ["Jungle Trek", "River Dolphin Spotting", "Manaus Opera House"],
    costs: [
      { item: "Lodge (per night)", cost: "$60–$150" },
      { item: "Meal", cost: "$8–$20" },
      { item: "Guided tour (per day)", cost: "$50" }
    ]
  },
  {
    name: "Santorini",
    country: "Greece",
    continent: "Europe",
    type: "relaxation",
    budget: "high",
    image: "images/santorini.jpg",
    desc: "Iconic white-washed buildings, sunsets, and volcanic beaches.",
    attractions: ["Oia Sunset", "Red Beach", "Akrotiri Ruins"],
    costs: [
      { item: "Accommodation (per night)", cost: "$100–$400" },
      { item: "Meal", cost: "$15–$45" },
      { item: "ATV rental (per day)", cost: "$25" }
    ]
  }
];
