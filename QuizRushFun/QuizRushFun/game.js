const questions = [
    { level: 1, question: "What is the capital of France?", answers: ["Paris", "London", "Berlin", "Madrid"], correct: 0 },
    { level: 1, question: "Which planet is known as the Red Planet?", answers: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
    { level: 1, question: "What is 5 + 7?", answers: ["10", "11", "12", "13"], correct: 2 },
    { level: 1, question: "How many continents are there?", answers: ["5", "6", "7", "8"], correct: 2 },
    { level: 1, question: "What color is the sky on a clear day?", answers: ["Green", "Blue", "Red", "Yellow"], correct: 1 },
    
    { level: 2, question: "Who painted the Mona Lisa?", answers: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Monet"], correct: 2 },
    { level: 2, question: "What is the largest ocean?", answers: ["Atlantic", "Pacific", "Indian", "Arctic"], correct: 1 },
    { level: 2, question: "How many sides does a hexagon have?", answers: ["5", "6", "7", "8"], correct: 1 },
    { level: 2, question: "What is the chemical symbol for water?", answers: ["H2O", "CO2", "O2", "NaCl"], correct: 0 },
    { level: 2, question: "Which animal is the tallest?", answers: ["Elephant", "Giraffe", "Lion", "Bear"], correct: 1 },
    
    { level: 3, question: "What year did World War II end?", answers: ["1943", "1944", "1945", "1946"], correct: 2 },
    { level: 3, question: "How many letters are in the English alphabet?", answers: ["24", "25", "26", "27"], correct: 2 },
    { level: 3, question: "What is the smallest prime number?", answers: ["1", "2", "3", "5"], correct: 1 },
    { level: 3, question: "Which country is home to the kangaroo?", answers: ["India", "Australia", "Brazil", "Canada"], correct: 1 },
    { level: 3, question: "What is the freezing point of water in Celsius?", answers: ["0°C", "32°C", "100°C", "-10°C"], correct: 0 },
    
    { level: 4, question: "Who wrote 'Romeo and Juliet'?", answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], correct: 1 },
    { level: 4, question: "What is 12 × 8?", answers: ["84", "92", "96", "100"], correct: 2 },
    { level: 4, question: "Which gas do plants absorb from the atmosphere?", answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
    { level: 4, question: "How many hours are in a day?", answers: ["12", "24", "36", "48"], correct: 1 },
    { level: 4, question: "What is the capital of Japan?", answers: ["Seoul", "Beijing", "Tokyo", "Bangkok"], correct: 2 },
    
    { level: 5, question: "What is the largest mammal?", answers: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"], correct: 1 },
    { level: 5, question: "How many days are in February during a leap year?", answers: ["28", "29", "30", "31"], correct: 1 },
    { level: 5, question: "What is the square root of 64?", answers: ["6", "7", "8", "9"], correct: 2 },
    { level: 5, question: "Which continent is the Sahara Desert located in?", answers: ["Asia", "Africa", "Australia", "South America"], correct: 1 },
    { level: 5, question: "What is the main ingredient in bread?", answers: ["Sugar", "Salt", "Flour", "Eggs"], correct: 2 },
    
    { level: 6, question: "Who was the first president of the United States?", answers: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], correct: 1 },
    { level: 6, question: "What is 100 ÷ 4?", answers: ["20", "25", "30", "35"], correct: 1 },
    { level: 6, question: "Which organ pumps blood through the body?", answers: ["Lungs", "Heart", "Brain", "Liver"], correct: 1 },
    { level: 6, question: "How many sides does a triangle have?", answers: ["2", "3", "4", "5"], correct: 1 },
    { level: 6, question: "What is the capital of Italy?", answers: ["Venice", "Milan", "Rome", "Naples"], correct: 2 },
    
    { level: 7, question: "What is the speed of light?", answers: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"], correct: 0 },
    { level: 7, question: "Which planet is closest to the Sun?", answers: ["Venus", "Earth", "Mercury", "Mars"], correct: 2 },
    { level: 7, question: "What is 15% of 200?", answers: ["20", "25", "30", "35"], correct: 2 },
    { level: 7, question: "Who invented the telephone?", answers: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"], correct: 1 },
    { level: 7, question: "What is the hardest natural substance?", answers: ["Gold", "Iron", "Diamond", "Platinum"], correct: 2 },
    
    { level: 8, question: "How many bones are in the human body?", answers: ["196", "206", "216", "226"], correct: 1 },
    { level: 8, question: "What is the capital of Spain?", answers: ["Barcelona", "Madrid", "Seville", "Valencia"], correct: 1 },
    { level: 8, question: "What is 9²?", answers: ["72", "81", "90", "99"], correct: 1 },
    { level: 8, question: "Which element has the symbol 'O'?", answers: ["Gold", "Oxygen", "Silver", "Osmium"], correct: 1 },
    { level: 8, question: "What year did humans first land on the Moon?", answers: ["1965", "1967", "1969", "1971"], correct: 2 },
    
    { level: 9, question: "What is the largest country by area?", answers: ["Canada", "China", "Russia", "USA"], correct: 2 },
    { level: 9, question: "How many seconds are in a minute?", answers: ["30", "45", "60", "90"], correct: 2 },
    { level: 9, question: "What is the boiling point of water in Celsius?", answers: ["50°C", "75°C", "100°C", "125°C"], correct: 2 },
    { level: 9, question: "Who developed the theory of relativity?", answers: ["Isaac Newton", "Albert Einstein", "Galileo", "Stephen Hawking"], correct: 1 },
    { level: 9, question: "What is the smallest ocean?", answers: ["Atlantic", "Indian", "Arctic", "Southern"], correct: 2 },
    
    { level: 10, question: "How many teeth does an adult human have?", answers: ["28", "30", "32", "34"], correct: 2 },
    { level: 10, question: "What is the currency of the United Kingdom?", answers: ["Euro", "Pound Sterling", "Dollar", "Franc"], correct: 1 },
    { level: 10, question: "What is 7 × 9?", answers: ["56", "63", "72", "81"], correct: 1 },
    { level: 10, question: "Which gas is most abundant in Earth's atmosphere?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 2 },
    { level: 10, question: "What is the longest river in the world?", answers: ["Amazon", "Nile", "Mississippi", "Yangtze"], correct: 1 },
    
    { level: 11, question: "How many players are on a soccer team?", answers: ["9", "10", "11", "12"], correct: 2 },
    { level: 11, question: "What is the capital of Canada?", answers: ["Toronto", "Vancouver", "Montreal", "Ottawa"], correct: 3 },
    { level: 11, question: "What is 144 ÷ 12?", answers: ["10", "11", "12", "13"], correct: 2 },
    { level: 11, question: "Who wrote 'Harry Potter'?", answers: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "Roald Dahl"], correct: 1 },
    { level: 11, question: "What is the chemical symbol for gold?", answers: ["Go", "Gd", "Au", "Ag"], correct: 2 },
    
    { level: 12, question: "How many strings does a standard guitar have?", answers: ["4", "5", "6", "7"], correct: 2 },
    { level: 12, question: "What is the largest desert in the world?", answers: ["Sahara", "Arabian", "Antarctic", "Gobi"], correct: 2 },
    { level: 12, question: "What is 20% of 50?", answers: ["5", "10", "15", "20"], correct: 1 },
    { level: 12, question: "Which planet has rings?", answers: ["Mars", "Saturn", "Neptune", "Venus"], correct: 1 },
    { level: 12, question: "What is the capital of Germany?", answers: ["Munich", "Hamburg", "Berlin", "Frankfurt"], correct: 2 },
    
    { level: 13, question: "How many minutes are in 2 hours?", answers: ["100", "110", "120", "130"], correct: 2 },
    { level: 13, question: "What is the tallest mountain in the world?", answers: ["K2", "Mount Everest", "Kilimanjaro", "Mont Blanc"], correct: 1 },
    { level: 13, question: "What is 11 × 11?", answers: ["111", "121", "131", "141"], correct: 1 },
    { level: 13, question: "Who painted the Sistine Chapel ceiling?", answers: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], correct: 1 },
    { level: 13, question: "What is the main gas in the Sun?", answers: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"], correct: 1 },
    
    { level: 14, question: "How many legs does a spider have?", answers: ["6", "8", "10", "12"], correct: 1 },
    { level: 14, question: "What is the capital of Australia?", answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: 2 },
    { level: 14, question: "What is 50 × 3?", answers: ["100", "125", "150", "175"], correct: 2 },
    { level: 14, question: "Which ocean is on the west coast of the United States?", answers: ["Atlantic", "Pacific", "Indian", "Arctic"], correct: 1 },
    { level: 14, question: "What is the largest planet in our solar system?", answers: ["Saturn", "Jupiter", "Neptune", "Uranus"], correct: 1 },
    
    { level: 15, question: "How many days are in a year?", answers: ["360", "364", "365", "366"], correct: 2 },
    { level: 15, question: "What is the chemical symbol for iron?", answers: ["Ir", "Fe", "In", "Fr"], correct: 1 },
    { level: 15, question: "What is 3³?", answers: ["9", "18", "27", "36"], correct: 2 },
    { level: 15, question: "Who discovered America?", answers: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"], correct: 1 },
    { level: 15, question: "What is the smallest country in the world?", answers: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: 1 },
    
    { level: 16, question: "How many colors are in a rainbow?", answers: ["5", "6", "7", "8"], correct: 2 },
    { level: 16, question: "What is the capital of Brazil?", answers: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct: 2 },
    { level: 16, question: "What is 99 + 1?", answers: ["98", "99", "100", "101"], correct: 2 },
    { level: 16, question: "Which animal is known as the 'King of the Jungle'?", answers: ["Tiger", "Lion", "Elephant", "Leopard"], correct: 1 },
    { level: 16, question: "What is the freezing point of water in Fahrenheit?", answers: ["0°F", "32°F", "100°F", "212°F"], correct: 1 },
    
    { level: 17, question: "How many wheels does a tricycle have?", answers: ["2", "3", "4", "5"], correct: 1 },
    { level: 17, question: "What is the currency of Japan?", answers: ["Yuan", "Won", "Yen", "Ringgit"], correct: 2 },
    { level: 17, question: "What is 1000 ÷ 10?", answers: ["10", "50", "100", "1000"], correct: 2 },
    { level: 17, question: "Who invented the light bulb?", answers: ["Nikola Tesla", "Thomas Edison", "Benjamin Franklin", "Alexander Bell"], correct: 1 },
    { level: 17, question: "What is the largest bird?", answers: ["Eagle", "Ostrich", "Albatross", "Condor"], correct: 1 },
    
    { level: 18, question: "How many sides does an octagon have?", answers: ["6", "7", "8", "9"], correct: 2 },
    { level: 18, question: "What is the capital of Egypt?", answers: ["Alexandria", "Cairo", "Giza", "Luxor"], correct: 1 },
    { level: 18, question: "What is 25 × 4?", answers: ["75", "90", "100", "110"], correct: 2 },
    { level: 18, question: "Which element has the symbol 'Na'?", answers: ["Nickel", "Sodium", "Nitrogen", "Neon"], correct: 1 },
    { level: 18, question: "What is the fastest land animal?", answers: ["Lion", "Cheetah", "Leopard", "Horse"], correct: 1 },
    
    { level: 19, question: "How many months have 31 days?", answers: ["5", "6", "7", "8"], correct: 2 },
    { level: 19, question: "What is the capital of Russia?", answers: ["St. Petersburg", "Moscow", "Kyiv", "Minsk"], correct: 1 },
    { level: 19, question: "What is 13 × 7?", answers: ["81", "84", "91", "98"], correct: 2 },
    { level: 19, question: "Who was the first woman to fly solo across the Atlantic?", answers: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"], correct: 0 },
    { level: 19, question: "What is the chemical symbol for silver?", answers: ["Si", "Sv", "Ag", "Sr"], correct: 2 },
    
    { level: 20, question: "How many keys are on a standard piano?", answers: ["76", "82", "88", "92"], correct: 2 },
    { level: 20, question: "What is the capital of China?", answers: ["Shanghai", "Hong Kong", "Beijing", "Guangzhou"], correct: 2 },
    { level: 20, question: "What is 200 - 87?", answers: ["103", "113", "123", "133"], correct: 1 },
    { level: 20, question: "Which planet is known as the 'Morning Star'?", answers: ["Mars", "Venus", "Mercury", "Jupiter"], correct: 1 },
    { level: 20, question: "What is the largest organ in the human body?", answers: ["Liver", "Brain", "Skin", "Heart"], correct: 2 },
    
    { level: 21, question: "How many Olympic rings are there?", answers: ["3", "4", "5", "6"], correct: 2 },
    { level: 21, question: "What is the capital of South Korea?", answers: ["Busan", "Seoul", "Incheon", "Daegu"], correct: 1 },
    { level: 21, question: "What is 17 + 28?", answers: ["43", "44", "45", "46"], correct: 2 },
    { level: 21, question: "Who wrote '1984'?", answers: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"], correct: 1 },
    { level: 21, question: "What is the rarest blood type?", answers: ["O negative", "AB negative", "A negative", "B negative"], correct: 1 },
    
    { level: 22, question: "How many zeros are in one million?", answers: ["4", "5", "6", "7"], correct: 2 },
    { level: 22, question: "What is the capital of Mexico?", answers: ["Guadalajara", "Monterrey", "Mexico City", "Cancun"], correct: 2 },
    { level: 22, question: "What is 18 × 5?", answers: ["80", "85", "90", "95"], correct: 2 },
    { level: 22, question: "Which sea is the saltiest?", answers: ["Mediterranean", "Dead Sea", "Red Sea", "Black Sea"], correct: 1 },
    { level: 22, question: "What is the study of stars called?", answers: ["Astrology", "Astronomy", "Cosmology", "Meteorology"], correct: 1 },
    
    { level: 23, question: "How many centimeters are in a meter?", answers: ["10", "50", "100", "1000"], correct: 2 },
    { level: 23, question: "What is the capital of India?", answers: ["Mumbai", "Kolkata", "New Delhi", "Bangalore"], correct: 2 },
    { level: 23, question: "What is 64 ÷ 8?", answers: ["6", "7", "8", "9"], correct: 2 },
    { level: 23, question: "Who is known as the father of computers?", answers: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], correct: 1 },
    { level: 23, question: "What is the smallest bone in the human body?", answers: ["Stapes", "Femur", "Radius", "Tibia"], correct: 0 },
    
    { level: 24, question: "How many degrees are in a right angle?", answers: ["45", "60", "90", "180"], correct: 2 },
    { level: 24, question: "What is the capital of Argentina?", answers: ["Santiago", "Buenos Aires", "Montevideo", "Lima"], correct: 1 },
    { level: 24, question: "What is 7²?", answers: ["14", "42", "49", "56"], correct: 2 },
    { level: 24, question: "Which vitamin is produced when skin is exposed to sunlight?", answers: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"], correct: 2 },
    { level: 24, question: "What is the largest waterfall in the world?", answers: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"], correct: 2 },
    
    { level: 25, question: "How many hearts does an octopus have?", answers: ["1", "2", "3", "4"], correct: 2 },
    { level: 25, question: "What is the capital of Turkey?", answers: ["Istanbul", "Ankara", "Izmir", "Antalya"], correct: 1 },
    { level: 25, question: "What is 121 ÷ 11?", answers: ["10", "11", "12", "13"], correct: 1 },
    { level: 25, question: "Who painted 'The Starry Night'?", answers: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"], correct: 1 },
    { level: 25, question: "What is the chemical symbol for helium?", answers: ["H", "He", "Ho", "Hl"], correct: 1 },
    
    { level: 26, question: "How many eyes does a honeybee have?", answers: ["2", "3", "4", "5"], correct: 3 },
    { level: 26, question: "What is the capital of Thailand?", answers: ["Phuket", "Chiang Mai", "Bangkok", "Pattaya"], correct: 2 },
    { level: 26, question: "What is 15 × 6?", answers: ["75", "80", "85", "90"], correct: 3 },
    { level: 26, question: "Which author wrote 'Pride and Prejudice'?", answers: ["Emily Brontë", "Jane Austen", "Charlotte Brontë", "Mary Shelley"], correct: 1 },
    { level: 26, question: "What is the most spoken language in the world?", answers: ["English", "Mandarin Chinese", "Spanish", "Hindi"], correct: 1 },
    
    { level: 27, question: "How many stripes are on the US flag?", answers: ["11", "12", "13", "14"], correct: 2 },
    { level: 27, question: "What is the capital of Sweden?", answers: ["Oslo", "Stockholm", "Copenhagen", "Helsinki"], correct: 1 },
    { level: 27, question: "What is 14 × 8?", answers: ["102", "108", "112", "118"], correct: 2 },
    { level: 27, question: "What is the largest island in the world?", answers: ["New Guinea", "Borneo", "Greenland", "Madagascar"], correct: 2 },
    { level: 27, question: "What gas do humans exhale?", answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
    
    { level: 28, question: "How many planets are in our solar system?", answers: ["7", "8", "9", "10"], correct: 1 },
    { level: 28, question: "What is the capital of Portugal?", answers: ["Porto", "Lisbon", "Faro", "Braga"], correct: 1 },
    { level: 28, question: "What is 19 × 4?", answers: ["72", "76", "80", "84"], correct: 1 },
    { level: 28, question: "Who invented the World Wide Web?", answers: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"], correct: 1 },
    { level: 28, question: "What is the hardest rock?", answers: ["Granite", "Marble", "Diamond", "Quartz"], correct: 2 },
    
    { level: 29, question: "How many chambers does the human heart have?", answers: ["2", "3", "4", "5"], correct: 2 },
    { level: 29, question: "What is the capital of Poland?", answers: ["Krakow", "Warsaw", "Gdansk", "Wroclaw"], correct: 1 },
    { level: 29, question: "What is 23 × 3?", answers: ["66", "69", "72", "75"], correct: 1 },
    { level: 29, question: "Which country has the most pyramids?", answers: ["Egypt", "Sudan", "Mexico", "Peru"], correct: 1 },
    { level: 29, question: "What is the symbol for potassium?", answers: ["P", "Po", "K", "Pt"], correct: 2 },
    
    { level: 30, question: "How many teeth does a dog have?", answers: ["32", "38", "42", "46"], correct: 2 },
    { level: 30, question: "What is the capital of Norway?", answers: ["Bergen", "Oslo", "Trondheim", "Stavanger"], correct: 1 },
    { level: 30, question: "What is 17 × 6?", answers: ["96", "100", "102", "108"], correct: 2 },
    { level: 30, question: "Who discovered penicillin?", answers: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Jonas Salk"], correct: 1 },
    { level: 30, question: "What is the largest lake in the world?", answers: ["Lake Superior", "Caspian Sea", "Lake Victoria", "Lake Baikal"], correct: 1 },
    
    { level: 31, question: "How many ribs do humans have?", answers: ["20", "22", "24", "26"], correct: 2 },
    { level: 31, question: "What is the capital of Austria?", answers: ["Salzburg", "Vienna", "Innsbruck", "Graz"], correct: 1 },
    { level: 31, question: "What is 16 × 7?", answers: ["102", "108", "112", "118"], correct: 2 },
    { level: 31, question: "What is the largest type of penguin?", answers: ["King Penguin", "Emperor Penguin", "Gentoo Penguin", "Adelie Penguin"], correct: 1 },
    { level: 31, question: "What element is a diamond made of?", answers: ["Silicon", "Carbon", "Oxygen", "Nitrogen"], correct: 1 },
    
    { level: 32, question: "How many weeks are in a year?", answers: ["50", "51", "52", "53"], correct: 2 },
    { level: 32, question: "What is the capital of Belgium?", answers: ["Antwerp", "Bruges", "Brussels", "Ghent"], correct: 2 },
    { level: 32, question: "What is 13 × 9?", answers: ["107", "112", "117", "122"], correct: 2 },
    { level: 32, question: "Which animal can sleep for 3 years?", answers: ["Bear", "Snail", "Turtle", "Frog"], correct: 1 },
    { level: 32, question: "What is the fastest fish?", answers: ["Tuna", "Sailfish", "Marlin", "Swordfish"], correct: 1 },
    
    { level: 33, question: "How many grams are in a kilogram?", answers: ["10", "100", "1000", "10000"], correct: 2 },
    { level: 33, question: "What is the capital of Switzerland?", answers: ["Zurich", "Geneva", "Bern", "Basel"], correct: 2 },
    { level: 33, question: "What is 21 × 5?", answers: ["95", "100", "105", "110"], correct: 2 },
    { level: 33, question: "Who wrote 'The Odyssey'?", answers: ["Virgil", "Homer", "Sophocles", "Euripides"], correct: 1 },
    { level: 33, question: "What is the study of earthquakes called?", answers: ["Geology", "Seismology", "Volcanology", "Meteorology"], correct: 1 },
    
    { level: 34, question: "How many degrees are in a circle?", answers: ["180", "270", "360", "450"], correct: 2 },
    { level: 34, question: "What is the capital of Greece?", answers: ["Sparta", "Thessaloniki", "Athens", "Crete"], correct: 2 },
    { level: 34, question: "What is 26 × 3?", answers: ["72", "76", "78", "82"], correct: 2 },
    { level: 34, question: "Which bird can fly backwards?", answers: ["Eagle", "Hummingbird", "Owl", "Parrot"], correct: 1 },
    { level: 34, question: "What is the tallest building in the world?", answers: ["Shanghai Tower", "Burj Khalifa", "Abraj Al-Bait", "Ping An Finance Center"], correct: 1 },
    
    { level: 35, question: "How many chromosomes do humans have?", answers: ["23", "44", "46", "48"], correct: 2 },
    { level: 35, question: "What is the capital of Finland?", answers: ["Tampere", "Turku", "Helsinki", "Espoo"], correct: 2 },
    { level: 35, question: "What is 35 × 2?", answers: ["60", "65", "70", "75"], correct: 2 },
    { level: 35, question: "What is the longest bone in the human body?", answers: ["Tibia", "Femur", "Humerus", "Radius"], correct: 1 },
    { level: 35, question: "What is the smallest planet in our solar system?", answers: ["Mars", "Mercury", "Venus", "Pluto"], correct: 1 },
    
    { level: 36, question: "How many time zones are in Russia?", answers: ["7", "9", "11", "13"], correct: 2 },
    { level: 36, question: "What is the capital of Denmark?", answers: ["Aarhus", "Odense", "Copenhagen", "Aalborg"], correct: 2 },
    { level: 36, question: "What is 42 ÷ 6?", answers: ["6", "7", "8", "9"], correct: 1 },
    { level: 36, question: "Who painted 'The Last Supper'?", answers: ["Raphael", "Leonardo da Vinci", "Michelangelo", "Caravaggio"], correct: 1 },
    { level: 36, question: "What is the most abundant metal in Earth's crust?", answers: ["Iron", "Copper", "Aluminum", "Gold"], correct: 2 },
    
    { level: 37, question: "How many cards are in a standard deck?", answers: ["48", "50", "52", "54"], correct: 2 },
    { level: 37, question: "What is the capital of the Netherlands?", answers: ["Rotterdam", "Amsterdam", "The Hague", "Utrecht"], correct: 1 },
    { level: 37, question: "What is 27 × 4?", answers: ["98", "104", "108", "112"], correct: 2 },
    { level: 37, question: "What is the largest species of shark?", answers: ["Great White Shark", "Whale Shark", "Tiger Shark", "Hammerhead Shark"], correct: 1 },
    { level: 37, question: "What is the chemical formula for table salt?", answers: ["NaCl", "KCl", "CaCl2", "MgCl2"], correct: 0 },
    
    { level: 38, question: "How many muscles are in the human body?", answers: ["206", "450", "640", "800"], correct: 2 },
    { level: 38, question: "What is the capital of Ireland?", answers: ["Cork", "Galway", "Dublin", "Limerick"], correct: 2 },
    { level: 38, question: "What is 81 ÷ 9?", answers: ["7", "8", "9", "10"], correct: 2 },
    { level: 38, question: "Which country invented ice cream?", answers: ["Italy", "China", "France", "USA"], correct: 1 },
    { level: 38, question: "What is the speed of sound?", answers: ["243 m/s", "343 m/s", "443 m/s", "543 m/s"], correct: 1 },
    
    { level: 39, question: "How many years are in a century?", answers: ["50", "75", "100", "125"], correct: 2 },
    { level: 39, question: "What is the capital of New Zealand?", answers: ["Auckland", "Christchurch", "Wellington", "Hamilton"], correct: 2 },
    { level: 39, question: "What is 29 × 3?", answers: ["77", "81", "87", "93"], correct: 2 },
    { level: 39, question: "Who invented the printing press?", answers: ["Benjamin Franklin", "Johannes Gutenberg", "William Caxton", "Aldus Manutius"], correct: 1 },
    { level: 39, question: "What is the largest coral reef system?", answers: ["Red Sea Coral Reef", "Great Barrier Reef", "Belize Barrier Reef", "New Caledonia Barrier Reef"], correct: 1 },
    
    { level: 40, question: "How many bits are in a byte?", answers: ["4", "6", "8", "10"], correct: 2 },
    { level: 40, question: "What is the capital of South Africa?", answers: ["Johannesburg", "Cape Town", "Pretoria", "Durban"], correct: 2 },
    { level: 40, question: "What is 33 × 3?", answers: ["93", "96", "99", "102"], correct: 2 },
    { level: 40, question: "What is the largest volcano in the solar system?", answers: ["Mauna Loa", "Olympus Mons", "Mount Vesuvius", "Krakatoa"], correct: 1 },
    { level: 40, question: "What is the rarest natural element on Earth?", answers: ["Gold", "Platinum", "Astatine", "Uranium"], correct: 2 },
    
    { level: 41, question: "How many sides does a dodecagon have?", answers: ["10", "11", "12", "13"], correct: 2 },
    { level: 41, question: "What is the capital of Vietnam?", answers: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Hue"], correct: 1 },
    { level: 41, question: "What is 48 ÷ 4?", answers: ["10", "11", "12", "13"], correct: 2 },
    { level: 41, question: "Who discovered gravity?", answers: ["Galileo Galilei", "Isaac Newton", "Albert Einstein", "Johannes Kepler"], correct: 1 },
    { level: 41, question: "What is the largest moon in our solar system?", answers: ["Titan", "Ganymede", "Callisto", "Europa"], correct: 1 },
    
    { level: 42, question: "How many letters are in the Hawaiian alphabet?", answers: ["12", "13", "14", "15"], correct: 1 },
    { level: 42, question: "What is the capital of Peru?", answers: ["Cusco", "Arequipa", "Lima", "Trujillo"], correct: 2 },
    { level: 42, question: "What is 37 × 2?", answers: ["68", "72", "74", "78"], correct: 2 },
    { level: 42, question: "What is the most venomous snake in the world?", answers: ["King Cobra", "Inland Taipan", "Black Mamba", "Rattlesnake"], correct: 1 },
    { level: 42, question: "What is the currency of Switzerland?", answers: ["Euro", "Swiss Franc", "Dollar", "Krone"], correct: 1 },
    
    { level: 43, question: "How many moons does Mars have?", answers: ["1", "2", "3", "4"], correct: 1 },
    { level: 43, question: "What is the capital of Colombia?", answers: ["Medellin", "Cali", "Bogotá", "Cartagena"], correct: 2 },
    { level: 43, question: "What is 56 ÷ 7?", answers: ["6", "7", "8", "9"], correct: 2 },
    { level: 43, question: "Who wrote 'The Great Gatsby'?", answers: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"], correct: 1 },
    { level: 43, question: "What is the deepest ocean trench?", answers: ["Puerto Rico Trench", "Mariana Trench", "Java Trench", "Tonga Trench"], correct: 1 },
    
    { level: 44, question: "How many pairs of chromosomes do humans have?", answers: ["21", "22", "23", "24"], correct: 2 },
    { level: 44, question: "What is the capital of Chile?", answers: ["Valparaíso", "Concepción", "Santiago", "La Serena"], correct: 2 },
    { level: 44, question: "What is 72 ÷ 8?", answers: ["7", "8", "9", "10"], correct: 2 },
    { level: 44, question: "What is the largest artery in the human body?", answers: ["Pulmonary artery", "Aorta", "Carotid artery", "Femoral artery"], correct: 1 },
    { level: 44, question: "What is the national animal of Scotland?", answers: ["Lion", "Eagle", "Unicorn", "Dragon"], correct: 2 },
    
    { level: 45, question: "How many teeth does a cat have?", answers: ["26", "28", "30", "32"], correct: 2 },
    { level: 45, question: "What is the capital of Kenya?", answers: ["Mombasa", "Nairobi", "Kisumu", "Nakuru"], correct: 1 },
    { level: 45, question: "What is 19 × 5?", answers: ["85", "90", "95", "100"], correct: 2 },
    { level: 45, question: "Who was the first person in space?", answers: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"], correct: 1 },
    { level: 45, question: "What is the largest rainforest in the world?", answers: ["Congo Rainforest", "Amazon Rainforest", "Daintree Rainforest", "Borneo Rainforest"], correct: 1 },
    
    { level: 46, question: "How many valves does the heart have?", answers: ["2", "3", "4", "5"], correct: 2 },
    { level: 46, question: "What is the capital of Morocco?", answers: ["Casablanca", "Marrakech", "Rabat", "Fez"], correct: 2 },
    { level: 46, question: "What is 87 - 29?", answers: ["56", "58", "60", "62"], correct: 1 },
    { level: 46, question: "What is the smallest mammal?", answers: ["Shrew", "Bumblebee Bat", "Mouse", "Hamster"], correct: 1 },
    { level: 46, question: "What is the chemical symbol for mercury?", answers: ["Me", "Mc", "Hg", "Mr"], correct: 2 },
    
    { level: 47, question: "How many minutes are in a day?", answers: ["1200", "1440", "1680", "1800"], correct: 1 },
    { level: 47, question: "What is the capital of Malaysia?", answers: ["Penang", "Johor Bahru", "Kuala Lumpur", "Ipoh"], correct: 2 },
    { level: 47, question: "What is 31 × 4?", answers: ["114", "120", "124", "128"], correct: 2 },
    { level: 47, question: "What is the longest muscle in the human body?", answers: ["Biceps", "Quadriceps", "Sartorius", "Gluteus maximus"], correct: 2 },
    { level: 47, question: "What is the oldest pyramid in Egypt?", answers: ["Great Pyramid of Giza", "Pyramid of Djoser", "Pyramid of Khafre", "Red Pyramid"], correct: 1 },
    
    { level: 48, question: "How many teeth does a rabbit have?", answers: ["24", "26", "28", "30"], correct: 2 },
    { level: 48, question: "What is the capital of the Philippines?", answers: ["Cebu", "Davao", "Manila", "Quezon City"], correct: 2 },
    { level: 48, question: "What is 44 × 2?", answers: ["82", "86", "88", "92"], correct: 2 },
    { level: 48, question: "What is the most common gas in the universe?", answers: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"], correct: 1 },
    { level: 48, question: "What is the largest lighthouse in the world?", answers: ["Pharos of Alexandria", "Jeddah Light", "Cape Hatteras", "Tower of Hercules"], correct: 1 },
    
    { level: 49, question: "How many stars are on the EU flag?", answers: ["10", "11", "12", "13"], correct: 2 },
    { level: 49, question: "What is the capital of Indonesia?", answers: ["Surabaya", "Bandung", "Jakarta", "Medan"], correct: 2 },
    { level: 49, question: "What is 63 ÷ 7?", answers: ["7", "8", "9", "10"], correct: 2 },
    { level: 49, question: "Who invented the steam engine?", answers: ["George Stephenson", "James Watt", "Thomas Newcomen", "Richard Trevithick"], correct: 1 },
    { level: 49, question: "What is the largest bat species?", answers: ["Vampire Bat", "Flying Fox", "Fruit Bat", "Horseshoe Bat"], correct: 1 },
    
    { level: 50, question: "How many chambers does an insect heart have?", answers: ["0", "1", "2", "4"], correct: 1 },
    { level: 50, question: "What is the capital of Nigeria?", answers: ["Lagos", "Kano", "Abuja", "Ibadan"], correct: 2 },
    { level: 50, question: "What is 49 × 2?", answers: ["92", "96", "98", "102"], correct: 2 },
    { level: 50, question: "What is the brightest star in the night sky?", answers: ["Polaris", "Sirius", "Betelgeuse", "Vega"], correct: 1 },
    { level: 50, question: "What is the longest river in Europe?", answers: ["Danube", "Rhine", "Volga", "Seine"], correct: 2 }
];


let currentLevel = 1;
let totalScore = 0;
let currentQuestionIndex = 0;
let levelCorrectAnswers = 0;
let usedQuestions = [];
let currentLevelQuestions = [];
let timerInterval;
let timeLeft = 10;
let hasAnswered = false;

function init() {
    loadProgress();
    updateUI();
    startLevel();
}

function loadProgress() {
    const savedLevel = localStorage.getItem('currentLevel');
    const savedScore = localStorage.getItem('totalScore');
    const savedUsedQuestions = localStorage.getItem('usedQuestions');
    
    if (savedLevel) currentLevel = parseInt(savedLevel);
    if (savedScore) totalScore = parseInt(savedScore);
    if (savedUsedQuestions) usedQuestions = JSON.parse(savedUsedQuestions);
}

function saveProgress() {
    localStorage.setItem('currentLevel', currentLevel);
    localStorage.setItem('totalScore', totalScore);
    localStorage.setItem('usedQuestions', JSON.stringify(usedQuestions));
}

function startLevel() {
    levelCorrectAnswers = 0;
    currentQuestionIndex = 0;
    currentLevelQuestions = getLevelQuestions(currentLevel);
    updateUI();
    loadQuestion();
}

function getLevelQuestions(level) {
    const levelQuestions = questions.filter(q => q.level === level && !usedQuestions.includes(questions.indexOf(q)));
    
    if (levelQuestions.length < 5) {
        usedQuestions = usedQuestions.filter(i => questions[i].level !== level);
        return questions.filter(q => q.level === level).sort(() => Math.random() - 0.5).slice(0, 5);
    }
    
    return levelQuestions.sort(() => Math.random() - 0.5).slice(0, 5);
}

function loadQuestion() {
    if (currentQuestionIndex >= currentLevelQuestions.length) {
        endLevel();
        return;
    }
    
    hasAnswered = false;
    timeLeft = 10;
    const question = currentLevelQuestions[currentQuestionIndex];
    
    document.getElementById('questionNumber').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('nextBtn').style.display = 'none'; // button hidden

    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach((btn, index) => {
        btn.textContent = question.answers[index];
        btn.className = 'answer-btn';
        btn.disabled = false;
        btn.onclick = () => selectAnswer(index);
    });
    
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (!hasAnswered) {
                handleTimeout();
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById('timerText').textContent = timeLeft;
    const percentage = (timeLeft / 10) * 100;
    document.getElementById('timerBar').style.width = percentage + '%';
    
    if (timeLeft <= 3) {
        document.getElementById('timerBar').style.background = 'linear-gradient(90deg, #f44336, #ff5722)';
    } else {
        document.getElementById('timerBar').style.background = 'linear-gradient(90deg, #4CAF50, #8BC34A)';
    }
}

function selectAnswer(selectedIndex) {
    if (hasAnswered) return;
    
    hasAnswered = true;
    clearInterval(timerInterval);
    
    const question = currentLevelQuestions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer-btn');
    const questionGlobalIndex = questions.indexOf(questions.find(q => 
        q.question === question.question && q.level === question.level
    ));
    
    if (!usedQuestions.includes(questionGlobalIndex)) {
        usedQuestions.push(questionGlobalIndex);
    }
    
    answerButtons.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === question.correct) {
        answerButtons[selectedIndex].classList.add('correct');
        levelCorrectAnswers++;
        totalScore++;
        playSound('correct');
    } else {
        answerButtons[selectedIndex].classList.add('wrong');
        answerButtons[question.correct].classList.add('correct');
        playSound('wrong');
    }
    
    updateUI();

    // ⏩ Automatically go to next question after 1.2s
    setTimeout(() => {
        nextQuestion();
    }, 1200);
}

function handleTimeout() {
    hasAnswered = true;
    const question = currentLevelQuestions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer-btn');
    
    answerButtons.forEach(btn => btn.disabled = true);
    answerButtons[question.correct].classList.add('correct');
    
    playSound('wrong');
    updateUI();

    // ⏩ Auto move to next question after 1.2s
    setTimeout(() => {
        nextQuestion();
    }, 1200);
}

function nextQuestion() {
    currentQuestionIndex++;
    saveProgress();
    loadQuestion();
}

function endLevel() {
    clearInterval(timerInterval);
    
    if (levelCorrectAnswers >= 3) {
        if (currentLevel === 50) {
            showVictoryScreen();
        } else {
            showModal('Level Cleared! 🎉', `You got ${levelCorrectAnswers} out of 5 correct!`, 'Next Level →', () => {
                currentLevel++;
                saveProgress();
                startLevel();
                hideModal();
            });
            playSound('win');
            triggerConfetti();
        }
    } else {
        showModal('Try Again! 😅', `You only got ${levelCorrectAnswers} out of 5 correct. You need at least 3 to pass!`, 'Retry Level', () => {
            startLevel();
            hideModal();
        });
    }
}

function showVictoryScreen() {
    playSound('win');
    triggerFireworks();
    showModal('🏆 You\'re a Quiz Master! 🏆', `Congratulations! You've completed all 50 levels with a total score of ${totalScore}!`, 'Play Again', () => {
        resetGame();
        hideModal();
    });
}

function resetGame() {
    currentLevel = 1;
    totalScore = 0;
    usedQuestions = [];
    saveProgress();
    startLevel();
}

function showModal(title, text, btnText, callback) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalText').textContent = text;
    document.getElementById('modalBtn').textContent = btnText;
    document.getElementById('modalBtn').onclick = callback;
    document.getElementById('modal').classList.add('active');
}

function hideModal() {
    document.getElementById('modal').classList.remove('active');
}

function updateUI() {
    document.getElementById('currentLevel').textContent = currentLevel;
    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('correctAnswers').textContent = levelCorrectAnswers;
}

function playSound(type) {
    if (type === 'correct') {
        AudioGenerator.playCorrect();
    } else if (type === 'wrong') {
        AudioGenerator.playWrong();
    } else if (type === 'win') {
        AudioGenerator.playWin();
    }
}

function triggerConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function triggerFireworks() {
    const duration = 5 * 1000;
    const end = Date.now() + duration;
    
    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval);
            return;
        }
        
        confetti({
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0,
            particleCount: 100,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });
    }, 250);
}

// ✅ Removed manual nextBtn click handler (auto handled now)
document.getElementById('nextBtn').style.display = 'none';

document.addEventListener('click', () => {
    if (AudioGenerator && !AudioGenerator.initialized) {
        AudioGenerator.init();
    }
}, { once: true });

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('serviceWorker.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed'));
    });
}

init();
