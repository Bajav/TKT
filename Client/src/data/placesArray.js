const places = [
    { 
      id:1,  
      continent: "Africa",
      places: [
        { name: "Table Mountain", description: "A flat-topped mountain overlooking Cape Town, offering stunning views.", rank: 1 },
        { name: "Victoria Falls", description: "One of the largest and most famous waterfalls, located on the Zambezi River.", rank: 2 },
        { name: "Sahara Desert", description: "The world's largest hot desert, covering much of North Africa.", rank: 3 },
        { name: "Pyramids of Giza", description: "Iconic ancient monuments in Egypt, including the Great Pyramid.", rank: 4 },
        { name: "Serengeti National Park", description: "A vast Tanzanian park famous for the Great Migration of wildebeest.", rank: 5 },
        { name: "Mount Kilimanjaro", description: "Africa's highest peak, located in Tanzania, known for its challenging climb.", rank: 6 },
        { name: "Kruger National Park", description: "One of Africa's largest game reserves, located in South Africa.", rank: 7 },
        { name: "Zanzibar", description: "A tropical island with pristine beaches and a rich history in Tanzania.", rank: 8 },
        { name: "Cape of Good Hope", description: "A rugged, scenic coastal landmark near Cape Town.", rank: 9 },
        { name: "Omo Valley", description: "A culturally rich region in Ethiopia, home to diverse indigenous tribes.", rank: 10 }
      ]
    },
    {
      id:2,  
      continent: "Asia",
      places: [
        { name: "Great Wall of China", description: "A historic wall stretching across northern China, originally built for protection.", rank: 1 },
        { name: "Taj Mahal", description: "A stunning white marble mausoleum in India, symbolizing eternal love.", rank: 2 },
        { name: "Mount Fuji", description: "Japan's iconic, snow-capped volcano and a popular hiking destination.", rank: 3 },
        { name: "Angkor Wat", description: "A massive temple complex in Cambodia, considered one of the world’s great wonders.", rank: 4 },
        { name: "Petra", description: "An ancient city in Jordan carved into red sandstone cliffs.", rank: 5 },
        { name: "Halong Bay", description: "A scenic bay in Vietnam known for its emerald waters and limestone islands.", rank: 6 },
        { name: "Borobudur", description: "A massive Buddhist temple in Indonesia, famous for its intricate carvings.", rank: 7 },
        { name: "Phuket", description: "A tropical island in Thailand known for its beaches and nightlife.", rank: 8 },
        { name: "Dubai", description: "A modern city in the UAE with futuristic architecture and luxury shopping.", rank: 9 },
        { name: "Mekong Delta", description: "A lush, riverine region in Vietnam known for its floating markets and biodiversity.", rank: 10 }
      ]
    },
    {
      id:3,
      continent: "Europe",
      places: [
        { name: "Eiffel Tower", description: "A global cultural icon of France, located in the heart of Paris.", rank: 1 },
        { name: "Colosseum", description: "An ancient amphitheater in Rome, famous for its gladiator battles.", rank: 2 },
        { name: "Santorini", description: "A picturesque Greek island with whitewashed buildings and blue-domed churches.", rank: 3 },
        { name: "Acropolis", description: "A historic site in Athens, Greece, known for ancient ruins like the Parthenon.", rank: 4 },
        { name: "Swiss Alps", description: "A famous mountain range in Switzerland, ideal for skiing and hiking.", rank: 5 },
        { name: "Big Ben", description: "A landmark clock tower in London, England, known for its precise timekeeping.", rank: 6 },
        { name: "Sagrada Familia", description: "A famous basilica in Barcelona, Spain, designed by architect Antoni Gaudí.", rank: 7 },
        { name: "Neuschwanstein Castle", description: "A fairy-tale castle in Germany, said to have inspired Disney’s Cinderella Castle.", rank: 8 },
        { name: "Venice Canals", description: "The historic water canals of Venice, Italy, used for transportation by gondola.", rank: 9 },
        { name: "Stonehenge", description: "A prehistoric monument in England consisting of a ring of standing stones.", rank: 10 }
      ]
    },
    {
        id:4,
      continent: "North America",
      places: [
        { name: "Grand Canyon", description: "A massive canyon in Arizona, USA, known for its stunning size and views.", rank: 1 },
        { name: "Yellowstone National Park", description: "The first national park in the USA, known for geothermal features and wildlife.", rank: 2 },
        { name: "Niagara Falls", description: "A group of massive waterfalls located between the USA and Canada.", rank: 3 },
        { name: "Statue of Liberty", description: "A symbol of freedom in New York City, USA.", rank: 4 },
        { name: "Banff National Park", description: "A national park in the Canadian Rockies, famous for its turquoise lakes.", rank: 5 },
        { name: "Walt Disney World", description: "A world-famous theme park in Orlando, Florida, known for its magic and entertainment.", rank: 6 },
        { name: "Chichen Itza", description: "An ancient Mayan city in Mexico, known for the iconic pyramid of El Castillo.", rank: 7 },
        { name: "Alcatraz Island", description: "A former prison island in San Francisco Bay, USA, now a popular tourist site.", rank: 8 },
        { name: "Havana", description: "The capital of Cuba, famous for its vibrant culture and historic architecture.", rank: 9 },
        { name: "Hollywood", description: "A district in Los Angeles, USA, known as the entertainment capital of the world.", rank: 10 }
      ]
    },
    {
        id:5,
      continent: "South America",
      places: [
        { name: "Machu Picchu", description: "An ancient Incan city set high in the Andes Mountains of Peru.", rank: 1 },
        { name: "Christ the Redeemer", description: "A massive statue of Jesus in Rio de Janeiro, Brazil.", rank: 2 },
        { name: "Iguazu Falls", description: "A stunning waterfall system on the border of Brazil and Argentina.", rank: 3 },
        { name: "Amazon Rainforest", description: "The world's largest tropical rainforest, located in Brazil.", rank: 4 },
        { name: "Galápagos Islands", description: "A volcanic archipelago in Ecuador, known for its unique wildlife.", rank: 5 },
        { name: "Patagonia", description: "A remote region spanning Chile and Argentina, famous for its rugged terrain.", rank: 6 },
        { name: "Buenos Aires", description: "The vibrant capital city of Argentina, known for tango dancing and architecture.", rank: 7 },
        { name: "Easter Island", description: "A Chilean island in the Pacific Ocean, famous for its mysterious Moai statues.", rank: 8 },
        { name: "Atacama Desert", description: "The driest desert in the world, located in northern Chile.", rank: 9 },
        { name: "Lake Titicaca", description: "The largest lake in South America, straddling the border between Peru and Bolivia.", rank: 10 }
      ]
    },
    {
        id:6,
      continent: "Australia",
      places: [
        { name: "Great Barrier Reef", description: "The world’s largest coral reef system, located off the coast of Queensland.", rank: 1 },
        { name: "Sydney Opera House", description: "An iconic performing arts center in Sydney, Australia, known for its unique architecture.", rank: 2 },
        { name: "Uluru (Ayers Rock)", description: "A massive sandstone monolith in Australia’s Northern Territory.", rank: 3 },
        { name: "Bondi Beach", description: "A popular beach in Sydney, Australia, known for surfing and its laid-back vibe.", rank: 4 },
        { name: "Kangaroo Island", description: "An island off the coast of South Australia, known for its wildlife and natural beauty.", rank: 5 },
        { name: "Daintree Rainforest", description: "One of the oldest rainforests in the world, located in Queensland, Australia.", rank: 6 },
        { name: "Blue Mountains", description: "A mountain range near Sydney, Australia, famous for its dramatic cliffs and hiking trails.", rank: 7 },
        { name: "Fraser Island", description: "The world’s largest sand island, located in Queensland, Australia.", rank: 8 },
        { name: "Twelve Apostles", description: "A collection of limestone stacks off the shore of Victoria, Australia.", rank: 9 },
        { name: "Tasmania", description: "An island state off Australia’s south coast, known for its wilderness and wildlife.", rank: 10 }
      ]
    }
];
  
export default places ;