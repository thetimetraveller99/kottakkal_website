/* ============================================================
   KOTTAKKAL ARYA VAIDYA SALA – PONDA, GOA
   Main JavaScript
   ============================================================ */

// ─── MEDICINE DATA ───────────────────────────────────────────
const MEDICINES = [
  // ARISHTAM / ASAVAM
  {
    id: "FGA001", name: "Abhayarishtam", unit: "450 ML", category: "arishtam",
    emoji: "🫙",
    desc: "A classical fermented herbal tonic primarily used for piles, constipation and indigestion. Made with Haritaki and Amla, it gently cleanses the bowel, relieves haemorrhoids, and supports healthy digestive function without harsh effects."
  },
  {
    id: "FGA004", name: "Asokarishtam", unit: "450 ML", category: "arishtam",
    emoji: "🌸",
    desc: "A uterine tonic prepared from the Ashoka tree bark — one of Ayurveda's most revered herbs for women's health. Useful in menstrual irregularities, excessive bleeding, leucorrhoea and gynaecological disorders."
  },
  {
    id: "FGA005", name: "Aswagandharishtam", unit: "450 ML", category: "arishtam",
    emoji: "💪",
    desc: "A rejuvenating tonic based on Ashwagandha, the premier adaptogenic herb of Ayurveda. Enhances strength, relieves fatigue, supports the nervous system and is beneficial in debility, anaemia and convalescence."
  },
  {
    id: "FGA010", name: "Kumaryasavam", unit: "450 ML", category: "arishtam",
    emoji: "🌵",
    desc: "Made from Aloe vera (Kumari), this fermented preparation is excellent for liver disorders, abdominal distension, anaemia, and digestive sluggishness. Supports healthy liver function and improves metabolism."
  },
  {
    id: "FGA012", name: "Chandanasavam", unit: "450 ML", category: "arishtam",
    emoji: "🌙",
    desc: "A cooling fermented preparation with Sandalwood as its base. Especially useful for urinary tract infections, burning urination, fever with burning sensation, and skin conditions involving heat and inflammation."
  },
  {
    id: "FGA022", name: "Parthadyarishtam", unit: "450 ML", category: "arishtam",
    emoji: "❤️",
    desc: "A cardiac tonic formulated for heart health, useful in heart disease, cardiac weakness, oedema and associated breathing difficulties. Strengthens the heart muscle and regulates cardiac function."
  },
  {
    id: "FGA024", name: "Punarnavasavam", unit: "450 ML", category: "arishtam",
    emoji: "🫁",
    desc: "Based on Punarnava, a powerful diuretic and rejuvenative herb. Useful in oedema, kidney disorders, liver conditions, anaemia and urinary problems. Reduces fluid retention and supports kidney health."
  },
  {
    id: "FGA027", name: "Saraswatarishtam", unit: "450 ML", category: "arishtam",
    emoji: "🧠",
    desc: "A brain and nerve tonic indicated for neurological conditions, epilepsy, anxiety, poor memory and speech disorders. Contains Saraswata herbs that nourish the nervous system and improve cognitive function."
  },
  {
    id: "FGA029", name: "Mustarishtam", unit: "450 ML", category: "arishtam",
    emoji: "🌿",
    desc: "Prepared from Musta (Cyperus rotundus), beneficial for fever management, digestive disorders, diarrhoea and conditions involving Pitta imbalance. Reduces inflammation and supports healthy digestion."
  },
  {
    id: "FGA036", name: "Lohasavam", unit: "450 ML", category: "arishtam",
    emoji: "⚙️",
    desc: "An iron-rich fermented tonic excellent for anaemia, liver and spleen disorders, oedema and piles. Improves haemoglobin levels, strengthens digestion and addresses iron deficiency conditions."
  },
  {
    id: "FGA037", name: "Vasakadyarishtam", unit: "450 ML", category: "arishtam",
    emoji: "🌬️",
    desc: "Based on Vasaka (Malabar nut), an Ayurvedic specific for respiratory conditions. Used for cough, bronchitis, haemoptysis and respiratory tract inflammation. Acts as an expectorant and bronchodilator."
  },
  {
    id: "FGA040", name: "Saribadyasavam", unit: "450 ML", category: "arishtam",
    emoji: "🩸",
    desc: "A blood-purifying tonic helpful in chronic skin diseases, urinary disorders and conditions arising from blood toxicity. Clears Ama (toxins), supports healthy skin and cleanses the urinary tract."
  },

  // CHURNAM (POWDERS)
  {
    id: "FGC201", name: "Jatamayadi Churnam", unit: "100 GM", category: "churnam",
    emoji: "🌾",
    desc: "An herbal powder based on Jatamansi (Spikenard) — a calming nervine herb. Beneficial for anxiety, insomnia, hair fall and neurological conditions. Promotes mental peace and healthy hair growth."
  },
  {
    id: "FGC203", name: "Aswagandha Churnam", unit: "100 GM", category: "churnam",
    emoji: "🌿",
    desc: "Pure Ashwagandha root powder — Ayurveda's most celebrated adaptogen. Builds strength and endurance, relieves stress and anxiety, supports hormonal balance and boosts overall vitality and immunity."
  },
  {
    id: "FGC303", name: "Avipathi Churnam", unit: "10 GM", category: "churnam",
    emoji: "🔥",
    desc: "A classical Pitta-pacifying powder with purgative properties. Excellent for acidity, hyperacidity, peptic ulcers, gastritis, constipation and conditions of excess heat in the body."
  },
  {
    id: "FGC313", name: "Dadimashtaka Churnam", unit: "10 GM", category: "churnam",
    emoji: "🍎",
    desc: "Made with pomegranate (Dadima) and seven other herbs — a digestive powder for diarrhoea, dysentery, malabsorption and loss of appetite. Gently astringes the intestines while improving digestive fire."
  },
  {
    id: "FGC314", name: "Talisapatradi Churnam", unit: "10 GM", category: "churnam",
    emoji: "🌲",
    desc: "A respiratory and digestive powder indicated for cough, bronchitis, hiccough and indigestion. Contains Talisa patra (Abies webbiana) and warming spices that open the airways and strengthen digestion."
  },
  {
    id: "FGC352", name: "Sitopaladi Churnam", unit: "30 GM", category: "churnam",
    emoji: "❄️",
    desc: "A sweet, cooling powder that is one of Ayurveda's premier remedies for cough, cold and fever. Soothes the throat, reduces inflammation of the respiratory tract and improves appetite during illness."
  },

  // CREAMS & EXTERNAL
  {
    id: "FGE001", name: "Dhanwantharam Cream", unit: "25 GM", category: "other",
    emoji: "🧴",
    desc: "A topical cream based on the classical Dhanwantharam oil. Useful for joint pain, muscle stiffness, and neurological conditions. Provides localised Vata-pacifying action and reduces inflammation."
  },
  {
    id: "FGE002", name: "Pain Balm", unit: "25 GM", category: "other",
    emoji: "💆",
    desc: "An Ayurvedic pain-relief balm with warming herbs and menthol — quick relief for headaches, muscular pain, joint discomfort and tension. Safe for topical use and absorption through the skin."
  },
  {
    id: "FGE704", name: "Rhukot Plus Cream", unit: "25 GM", category: "other",
    emoji: "🦴",
    desc: "A specialised cream formulated for rheumatic and arthritic conditions. Reduces joint inflammation, stiffness and pain with a blend of classical Ayurvedic anti-inflammatory herbs in a topical base."
  },
  {
    id: "FGE705", name: "Eladi Cream", unit: "25 GM", category: "other",
    emoji: "🌿",
    desc: "Based on the classical Eladi formulation — a skin-nurturing cream with Cardamom and cooling herbs. Improves complexion, reduces hyperpigmentation, moisturises and calms skin irritation."
  },
  {
    id: "FGE708", name: "Vibha Skin Care Cream", unit: "25 GM", category: "other",
    emoji: "✨",
    desc: "An Ayurvedic skin care cream for daily use — brightens complexion, evens skin tone, reduces fine lines and provides lasting moisture. Formulated with classical herbs safe for regular application."
  },

  // GHRITAM (MEDICATED GHEE)
  {
    id: "FGG127", name: "Brahmi Ghritam", unit: "150 GM", category: "ghritam",
    emoji: "🧠",
    desc: "A ghee-based brain tonic with Brahmi, Shankhapushpi and classical nervine herbs. Supports memory, concentration and learning. Used in anxiety, epilepsy, dementia, neurological conditions and for students needing mental clarity."
  },
  {
    id: "FGG128", name: "Mahakalyanaka Ghritam", unit: "150 GM", category: "ghritam",
    emoji: "🧈",
    desc: "A classical polyherbal ghee preparation indicated for mental disorders, epilepsy, fever with neurological complications and post-illness recovery. Deeply nourishes the brain and nervous system tissues."
  },
  {
    id: "FGG129", name: "Mahatiktakaghritam", unit: "150 GM", category: "ghritam",
    emoji: "🌿",
    desc: "A bitter-principle medicated ghee used for severe skin diseases, leprosy, tumours, anaemia and chronic wounds. The bitter herbs deeply cleanse the blood and tissues while ghee carries healing deep into cells."
  },
  {
    id: "FGG146", name: "Sukumara Ghritam", unit: "150 GM", category: "ghritam",
    emoji: "🌸",
    desc: "A gentle ghee preparation for women's health — relieves dysmenorrhoea, PCOS, uterine disorders and supports fertility. Also useful in chronic constipation, abdominal distension and Vata disorders."
  },
  {
    id: "FGG159", name: "Satadhauta Ghritam (Lami Tube)", unit: "20 GM", category: "ghritam",
    emoji: "💧",
    desc: "Ghee processed a hundred times (Satadhauta) to achieve an ultra-fine, cooling consistency. Applied topically for burns, eczema, psoriasis, wound healing and sensitive skin. One of Ayurveda's finest skin preparations."
  },

  // KASHAYAM (DECOCTIONS)
  {
    id: "FGK018", name: "Brihatyadi Kashayam", unit: "200 ML", category: "kashayam",
    emoji: "🍵",
    desc: "A decoction for urinary tract health based on Brihati and related herbs. Useful in dysuria, cystitis, kidney stones and urinary infections. Soothes the urinary passage and supports kidney function."
  },
  {
    id: "FGK020", name: "Mahatiktam Kashayam", unit: "200 ML", category: "kashayam",
    emoji: "🌿",
    desc: "A bitter herbal decoction for chronic skin diseases, diabetes-related skin conditions, tumours and deep-seated Pitta disorders. Purifies the blood and deeply cleanses metabolic toxins."
  },
  {
    id: "FGK028", name: "Vasaguluchyadi Kashayam", unit: "200 ML", category: "kashayam",
    emoji: "🌬️",
    desc: "Combines Vasaka (Malabar nut) and Guduchi — useful in fever, respiratory infections, inflammatory conditions and as an immune modulator. Has antipyretic, anti-inflammatory and immunostimulant properties."
  },
  {
    id: "FGK037", name: "Virataradi Kashayam", unit: "200 ML", category: "kashayam",
    emoji: "🫚",
    desc: "A classical decoction for treating worm infestations, skin diseases arising from parasitic conditions and digestive infections. Antimicrobial herbs cleanse the gut and skin from within."
  },
  {
    id: "FGK039", name: "Gandharvahastadi Kashayam", unit: "200 ML", category: "kashayam",
    emoji: "💨",
    desc: "Based on Gandharvahastha (Castor), this decoction is a mild laxative for chronic constipation, Vata disorders in the lower body, sciatica and lumbar pain. Relieves abdominal bloating and gas."
  },
  {
    id: "FGK041", name: "Musalikhadiradi Kashayam", unit: "200 ML", category: "kashayam",
    emoji: "🌰",
    desc: "A strengthening decoction with Musali and Khadira, useful for gynaecological problems, leucorrhoea and conditions of reproductive weakness. Also benefits skin disorders and blood purification."
  },
  {
    id: "FGK044", name: "Punarnavadi Kashayam", unit: "200 ML", category: "kashayam",
    emoji: "🫀",
    desc: "Based on Punarnava — excellent for oedema, kidney disorders, hepatitis, splenomegaly and ascites. Reduces fluid accumulation, supports liver function and acts as a natural diuretic."
  },
  {
    id: "FGK057", name: "Shadangam Kashayam", unit: "200 ML", category: "kashayam",
    emoji: "🌡️",
    desc: "A six-herb classical decoction primarily used for fever management. Reduces pyrexia, relieves associated symptoms like thirst, burning and fatigue. Balances all three doshas during febrile conditions."
  },
  {
    id: "FGK070", name: "Nisakathakadi Kashayam", unit: "200 ML", category: "kashayam",
    emoji: "🩺",
    desc: "A classical decoction for diabetes management, with Turmeric (Nisa) and Kataka. Helps regulate blood sugar, treats associated thirst, frequent urination and skin complications of diabetes."
  },
  {
    id: "FGK078", name: "Elakanadi Kashayam", unit: "200 ML", category: "kashayam",
    emoji: "🌿",
    desc: "Formulated with Cardamom and Kanakambu, useful in respiratory conditions including asthma, bronchitis and hiccough. Relieves cough, removes phlegm and strengthens the respiratory passage."
  },
  {
    id: "FGK122", name: "Rasnairandadi Kwatham (Tablet)", unit: "100 Nos", category: "kashayam",
    emoji: "💊",
    desc: "Contains Rasna and Eranda — specifically for Vata disorders affecting joints and the musculoskeletal system. Relieves rheumatic pain, sciatica, lumbar spondylosis and neurological pain."
  },
  {
    id: "FGK124", name: "Dhanvantaram Kwatham (Tablet)", unit: "100 Nos", category: "kashayam",
    emoji: "💊",
    desc: "A tablet form of the classical Dhanvantaram decoction — used for Vata diseases, post-delivery care, musculoskeletal disorders and neurological conditions. Particularly beneficial after childbirth."
  },
  {
    id: "FGK128", name: "Patolakaturohinyadi Kwatham (Tablet)", unit: "100 Nos", category: "kashayam",
    emoji: "💊",
    desc: "A Pitta-reducing and anti-inflammatory decoction for chronic skin diseases, liver disorders and conditions with excess heat. Purifies the blood and clears deep-seated Pitta-origin diseases."
  },
  {
    id: "FGK130", name: "Ashtavargam Kwatham (Tablet)", unit: "100 Nos", category: "kashayam",
    emoji: "💊",
    desc: "An eight-herb decoction with Kapha-reducing and respiratory-supporting properties. Beneficial for chronic respiratory conditions, cough, bronchitis and conditions with excess mucus."
  },
  {
    id: "FGK133", name: "Sukumaram Kwatham (Tablet)", unit: "100 Nos", category: "kashayam",
    emoji: "💊",
    desc: "A gentle Vata-pacifying decoction for abdominal pain, constipation, uterine disorders, and urinary conditions. Useful in pregnancy-related digestive complaints and PCOS with digestive issues."
  },
  {
    id: "FGK138", name: "Mahatiktam Kwatham Tablet", unit: "100 Nos", category: "kashayam",
    emoji: "💊",
    desc: "The tablet form of Mahatiktam decoction — for chronic skin diseases, deep Pitta disorders and blood purification. Convenient daily use for stubborn dermatological conditions."
  },
  {
    id: "FGK139", name: "Drakshadi Kwatham (Tablet)", unit: "100 Nos", category: "kashayam",
    emoji: "🍇",
    desc: "Raisin (Draksha) based decoction tablet for Pitta conditions, burning sensations, fever, anaemia, respiratory conditions and as a mild nutritive tonic. Safe for daily use as a health supplement."
  },
  {
    id: "FGK142", name: "Sahacharadi Kwatham Tablet", unit: "100 Nos", category: "kashayam",
    emoji: "💊",
    desc: "Contains Sahachara — a specific for neurological and musculoskeletal Vata conditions. Used in sciatica, low back pain, paralysis, tremors and neuromuscular disorders."
  },
  {
    id: "FGK143", name: "Manjishthadi Kwatham (Brihat) Tablet", unit: "100 Nos", category: "kashayam",
    emoji: "🩸",
    desc: "Manjishtha-based blood purifier and lymphatic cleanser. Excellent for chronic skin diseases, eczema, psoriasis, urticaria, and inflammatory skin conditions with blood toxicity."
  },
  {
    id: "FGK148", name: "Saptasaram Kwatham Tablet", unit: "100 Nos", category: "kashayam",
    emoji: "💊",
    desc: "A seven-herb formulation for digestive health — addresses constipation, haemorrhoids, abdominal pain and Vata disturbances in the lower gastrointestinal tract."
  },
  {
    id: "FGK149", name: "Guluchyadi Kwatham (Tablet)", unit: "100 Nos", category: "kashayam",
    emoji: "🌿",
    desc: "Guduchi (Tinospora cordifolia) based decoction — a potent immune modulator used for fever, infectious diseases, diabetes, gout and as a general rejuvenative. The 'divine nectar' of Ayurveda."
  },
  {
    id: "FGK151", name: "Amritottaram / Nagaradi Kwatham Tablet", unit: "100 Nos", category: "kashayam",
    emoji: "💊",
    desc: "Combines Amrita (Guduchi) and other herbs for fever, inflammatory conditions, Vata-Pitta disorders and immune support. Has antipyretic, anti-inflammatory and immunostimulant properties."
  },
  {
    id: "FGK153", name: "Chiruvilwadi Kwatham Tablet", unit: "100 Nos", category: "kashayam",
    emoji: "💊",
    desc: "Based on Chiruvilwa (Holoptelea integrifolia) — useful for skin diseases, diabetes-related skin conditions, urinary disorders and inflammatory conditions with Kapha-Vata origin."
  },
  {
    id: "FGK300", name: "Indukantamritam Syrup", unit: "200 ML", category: "kashayam",
    emoji: "🍶",
    desc: "A syrup formulation for respiratory health — especially beneficial for children's cough, cold and recurrent respiratory infections. Builds immunity and reduces susceptibility to seasonal illnesses."
  },
  {
    id: "FGK701", name: "Livokot Tablet", unit: "100 Nos", category: "kashayam",
    emoji: "🫀",
    desc: "A proprietary Kottakkal hepatoprotective formulation. Protects and regenerates liver cells, useful in hepatitis, fatty liver, jaundice and liver damage from toxins or medications."
  },

  // LEHAM / RASAYANAM
  {
    id: "FGL104", name: "Ajaswagandhadi Leham", unit: "500 GM", category: "leham",
    emoji: "🍯",
    desc: "A nourishing electuary with Goat's milk (Aja), Ashwagandha and rejuvenative herbs. Builds strength in wasting diseases, post-illness debility, muscular weakness and underweight conditions."
  },
  {
    id: "FGL114", name: "Chyavanaprasam", unit: "500 GM", category: "leham",
    emoji: "🫙",
    desc: "India's most celebrated Rasayana — a rich jam made with 35+ herbs centered around Amla (Indian Gooseberry). Strengthens immunity, improves respiratory health, enhances memory, slows ageing and nourishes all seven body tissues. Safe for all ages."
  },
  {
    id: "FGL128", name: "Brahma Rasayanam", unit: "500 GM", category: "leham",
    emoji: "🌟",
    desc: "A supreme brain and nerve rejuvenative — contains Brahmi, Ashwagandha, Amla and 40+ herbs. Enhances memory, intelligence and longevity. Indicated in mental disorders, chronic debility and as an anti-ageing Rasayana."
  },
  {
    id: "FGL143", name: "Vyoshadi Vatakam", unit: "100 GM", category: "leham",
    emoji: "🌶️",
    desc: "Trikatu-based (ginger, pepper, pippali) boluses — a digestive and respiratory medicine. Kindles digestive fire (Agni), relieves cough, cold, hiccough, vomiting and conditions of weak digestion with Kapha accumulation."
  },
  {
    id: "FGL161", name: "Kusmanda Rasayanam", unit: "500 GM", category: "leham",
    emoji: "🎃",
    desc: "Made from White Pumpkin (Kushmanda) — an excellent nervine Rasayana for anxiety, epilepsy, hysteria and psychological disorders. Nourishes and calms the nervous system. Also beneficial for respiratory health."
  },

  // TAILAM (OILS)
  {
    id: "FGO001", name: "Anu Tailam", unit: "10 ML", category: "tailam",
    emoji: "👃",
    desc: "A classical nasal oil (Nasya) — instilled daily into the nostrils to treat sinusitis, rhinitis, headaches, migraine, hair fall and neurological conditions of the head and neck. Nourishes the brain and sensory organs."
  },
  {
    id: "FGO014", name: "Eladi Kera Tailam", unit: "200 ML", category: "tailam",
    emoji: "🥥",
    desc: "A coconut-based oil with Cardamom and skin-benefiting herbs. Used for scalp application to reduce dandruff, hair fall and scalp inflammation. Also applied topically for Pitta skin conditions."
  },
  {
    id: "FGO019", name: "Karpuradi Tailam", unit: "200 ML", category: "tailam",
    emoji: "❄️",
    desc: "Camphor-based medicated oil with cooling and analgesic properties. Used for joint pain, muscular aches, chest congestion and headaches. Provides quick relief with its penetrating, anti-inflammatory action."
  },
  {
    id: "FGO025", name: "Kottamchukkadi Tailam", unit: "200 ML", category: "tailam",
    emoji: "🔥",
    desc: "A warming, penetrating oil for musculoskeletal pain. Excellent for arthritis, joint swelling, sports injuries, frozen shoulder and cervical spondylosis. The heat generated enhances blood circulation and reduces stiffness."
  },
  {
    id: "FGO027", name: "Kshirabalatailam", unit: "200 ML", category: "tailam",
    emoji: "🍼",
    desc: "Made with Bala herb processed in sesame oil and cow's milk. A nourishing nervine oil for paralysis, hemiplegia, facial palsy, Vata disorders and neuromuscular conditions. Strengthens nerves and muscles."
  },
  {
    id: "FGO041", name: "Chemparuthyadi Kera Tailam", unit: "200 ML", category: "tailam",
    emoji: "🌺",
    desc: "A coconut-based hair oil with Hibiscus and classical herbs. Promotes hair growth, reduces premature greying, controls dandruff and nourishes the scalp. A traditional Kerala hair care formulation."
  },
  {
    id: "FGO042", name: "Jathyadi Kera Tailam", unit: "200 ML", category: "tailam",
    emoji: "💚",
    desc: "A wound-healing coconut oil with Nutmeg and antibacterial herbs. Used for chronic wounds, ulcers, fistula, burns and skin infections. Accelerates healing and prevents secondary infection."
  },
  {
    id: "FGO053", name: "Durvadi Kera Tailam", unit: "200 ML", category: "tailam",
    emoji: "🌱",
    desc: "Made with Durva grass (Bermuda grass) and cooling herbs in coconut oil. Useful for scalp conditions, burning sensation of the head, premature greying and Pitta disorders of the scalp and skin."
  },
  {
    id: "FGO055", name: "Dhanwantharam Tailam", unit: "200 ML", category: "tailam",
    emoji: "🫗",
    desc: "The king of Vata-pacifying oils — contains 70+ herbs in a sesame base. Used for arthritis, rheumatoid arthritis, osteoarthritis, spondylosis, paralysis, facial palsy and neurological disorders. One of Kottakkal's most revered medicines."
  },
  {
    id: "FGO066", name: "Valiya Narayana Tailam", unit: "200 ML", category: "tailam",
    emoji: "🙏",
    desc: "The 'great Narayana oil' — a supreme classical formulation for all Vata disorders. Useful in paralysis, hemiplegia, musculoskeletal disorders, sexual weakness and post-stroke rehabilitation."
  },
  {
    id: "FGO068", name: "Nalpamaradi Kera Tailam", unit: "200 ML", category: "tailam",
    emoji: "✨",
    desc: "A four-fig-tree oil in coconut base — a classical skin brightening and complexion-improving formulation. Used for hyperpigmentation, dark spots, eczema, psoriasis and as a daily body oil for glowing skin."
  },
  {
    id: "FGO075", name: "Nilibhringadi Keratailam", unit: "200 ML", category: "tailam",
    emoji: "🖤",
    desc: "Based on Neeli (Indigo) and Bhringraj — two of Ayurveda's finest hair herbs. Prevents premature greying, reduces hair fall, thickens hair and addresses scalp conditions. A Kerala favourite for lustrous dark hair."
  },
  {
    id: "FGO085", name: "Pinda Tailam", unit: "200 ML", category: "tailam",
    emoji: "🫸",
    desc: "An intensely cooling oil for Pitta conditions — burning joint pain, inflammatory arthritis, gout and skin conditions with heat. Applied externally to reduce redness, swelling and burning inflammation."
  },
  {
    id: "FGO133", name: "Valiya Sahacharadi Tailam", unit: "200 ML", category: "tailam",
    emoji: "🌿",
    desc: "The greater Sahachara oil for neurological and musculoskeletal conditions — sciatica, hemiplegia, tremors and lower limb Vata disorders. Deeply nourishing to nerves and bone tissue."
  },
  {
    id: "FGO145", name: "Murivenna", unit: "200 ML", category: "tailam",
    emoji: "🩹",
    desc: "The legendary wound-healing oil of Kerala tradition. Murivenna means 'wound butter' — specifically formulated for fractures, sprains, bruises, injuries and chronic wounds. Accelerates bone and tissue healing rapidly."
  },
  {
    id: "FGO527", name: "Kshirabala (101) Soft Gel Capsule", unit: "100 Nos", category: "tailam",
    emoji: "💊",
    desc: "Kshirabala oil processed 101 times — the most potent form of this nervine oil, in convenient soft-gel capsule form. For neurological disorders, paralysis, severe Vata conditions and neuromuscular degeneration."
  },
  {
    id: "FGO529", name: "Gandha Tailam Soft Gel Capsule", unit: "100 Nos", category: "tailam",
    emoji: "🦴",
    desc: "Gandha Tailam in oral capsule form — specifically for bone health, osteoporosis, disc degeneration, cervical spondylosis and bone density loss. Rebuilds bone tissue and reduces nerve-related pain."
  },

  // PERSONAL CARE
  {
    id: "FGP001", name: "Kottakkal Ayurveda Skin Care Soap", unit: "75 g", category: "other",
    emoji: "🧼",
    desc: "A classical herb-infused soap for daily skin care. Cleanses without stripping natural oils, improves complexion, prevents body odour and keeps skin soft and healthy. Suitable for all skin types."
  },
  {
    id: "FGP002", name: "Kottakkal Ayurveda Skin Protection Soap", unit: "75 g", category: "other",
    emoji: "🛡️",
    desc: "A protective Ayurvedic soap with antimicrobial herbs — useful for those prone to skin infections, fungal conditions and sensitive reactive skin. Provides a protective herbal barrier while cleansing."
  },
  {
    id: "FGP011", name: "Kottakkal Baby Oil (Virgin Coconut)", unit: "100 ML", category: "other",
    emoji: "👶",
    desc: "Pure virgin coconut oil based baby oil — gentle, nourishing and safe for infants. Moisturises delicate baby skin, strengthens muscles with gentle massage and protects against dryness and rashes."
  },
  {
    id: "FGP017", name: "Anti Dandruff Shampoo", unit: "100 ML", category: "other",
    emoji: "🚿",
    desc: "An Ayurvedic shampoo with anti-fungal herbs for dandruff control. Cleanses the scalp, reduces flaking and itching, controls seborrheic dermatitis and leaves hair clean and manageable."
  },

  // KUZHAMPU / EYE
  {
    id: "FGR001", name: "Elaneer Kuzhampu", unit: "10 ML", category: "other",
    emoji: "👁️",
    desc: "A classical eye drop made with tender coconut water — cooling, nourishing and safe for regular use. Relieves eye strain, burning, redness and dryness. Regularly used in Ayurvedic eye care."
  },
  {
    id: "FGR006", name: "Samskrithamadhu", unit: "250 GM", category: "other",
    emoji: "🍯",
    desc: "Processed Ayurvedic honey — medicated and purified for internal therapeutic use. Used as an anupana (vehicle) with other medicines, for cough, wound healing and as a daily health tonic."
  },
  {
    id: "FGS002", name: "Nostricap", unit: "100 Nos", category: "other",
    emoji: "👃",
    desc: "A proprietary Kottakkal formulation for nasal conditions — sinusitis, allergic rhinitis, nasal polyps and chronic nasal congestion. Provides targeted relief and improves nasal breathing."
  },

  // GULIKA / VATIKA (TABLETS/PILLS)
  {
    id: "FGT008", name: "Krimighna Vatika", unit: "100 Nos", category: "gulika",
    emoji: "🪱",
    desc: "An anti-parasitic tablet for intestinal worm infestations in adults and children. Contains classical vermifuge herbs that eliminate parasites safely without harsh chemical action."
  },
  {
    id: "FGT013", name: "Mahadhanwantaram Gulika (Garbharakshini)", unit: "100 Nos", category: "gulika",
    emoji: "🤰",
    desc: "The 'pregnancy-protecting tablet' — a Dhanwantaram-based formulation for safe pregnancy. Prevents miscarriage, relieves morning sickness and supports healthy foetal development."
  },
  {
    id: "FGT014", name: "Gopeechandanadi Gulika", unit: "100 Nos", category: "gulika",
    emoji: "🌙",
    desc: "A classical tablet for fever, intoxication and conditions requiring blood purification. Contains Gopichandana and antipyretic herbs useful in febrile conditions and toxic states."
  },
  {
    id: "FGT017", name: "Chandraprabha Vatika", unit: "100 Nos", category: "gulika",
    emoji: "🌙",
    desc: "The 'moon-radiance tablet' — a classical formulation for urinary disorders, kidney stones, diabetes, male reproductive health, skin diseases and general debility. One of Ayurveda's most versatile preparations."
  },
  {
    id: "FGT022", name: "Dhanwantaram Gulika", unit: "100 Nos", category: "gulika",
    emoji: "💊",
    desc: "The tablet form of the Dhanwantaram classical formula — for Vata diseases, neurological conditions, post-delivery care and musculoskeletal disorders. Convenient daily Vata management."
  },
  {
    id: "FGT038", name: "Yogaraja Gulgulu Vatika", unit: "100 Nos", category: "gulika",
    emoji: "🦴",
    desc: "A Guggulu-based tablet balancing Vata and Kapha doshas — the premier classical remedy for arthritis, rheumatism, joint pain, muscle stiffness, gout, anal fistula and musculoskeletal inflammation."
  },
  {
    id: "FGT045", name: "Swasanandam Gulika", unit: "100 Nos", category: "gulika",
    emoji: "🫁",
    desc: "A tablet formulated specifically for respiratory conditions — asthma, bronchitis, chronic obstructive pulmonary conditions and breathlessness. Opens airways, reduces bronchospasm and improves lung function."
  },
  {
    id: "FGT056", name: "Vettumaran Gulika", unit: "100 Nos", category: "gulika",
    emoji: "🌡️",
    desc: "A classical anti-infective and antipyretic tablet for fever, infections, colds and conditions with Ama toxicity. Commonly used in acute febrile illness and viral infections."
  },
  {
    id: "FGT064", name: "Arogya Vardhini Gutika", unit: "30 Nos", category: "gulika",
    emoji: "💪",
    desc: "The 'health-enhancing tablet' — a liver and metabolic formula for liver disorders, skin diseases, obesity, constipation and conditions of impaired metabolism. One of Ayurveda's great multi-system medicines."
  },
  {
    id: "FGT065", name: "Hingwadi Gulika", unit: "30 Nos", category: "gulika",
    emoji: "💨",
    desc: "Asafoetida (Hing) based tablet — an excellent digestive for bloating, flatulence, colic, spasmodic abdominal pain and conditions of Vata imbalance in the digestive system. Relieves gas rapidly."
  },
  {
    id: "FGT066", name: "Dushivishari Gulika", unit: "30 Nos", category: "gulika",
    emoji: "🔰",
    desc: "An antidote tablet for chronic poisoning, allergic conditions, food intolerances and skin diseases arising from toxin accumulation. Detoxifies tissues and clears Ama from the system."
  },

  // GANDHAKARASAYANAM
  {
    id: "FGB113", name: "Gandhakarasayanam (7) Capsule", unit: "30 Nos", category: "gulika",
    emoji: "🌋",
    desc: "Purified sulphur (Gandhaka) based Rasayana in capsule form — a powerful anti-parasitic, anti-fungal and skin-healing preparation. Used for scabies, eczema, psoriasis and chronic skin infections."
  },

  // CHYAVANULES
  {
    id: "FGU710", name: "Chyavanules", unit: "250 GM", category: "leham",
    emoji: "🍬",
    desc: "A convenient granule form of Chyavanaprasam — all the benefits of the classical Rasayana in an easy-to-take format. Boosts immunity, improves respiratory health and acts as an anti-ageing supplement for all ages."
  },
];

// ─── CATEGORY EMOJI MAP ─────────────────────────────────────
const CATEGORY_LABELS = {
  arishtam: "Arishtam / Asavam",
  kashayam: "Kashayam",
  tailam: "Tailam (Oil)",
  ghritam: "Ghritam",
  churnam: "Churnam",
  leham: "Leham / Rasayanam",
  gulika: "Gulika / Vatika",
  other: "Skin & Wellness",
};

// ─── NAVBAR SCROLL ───────────────────────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

// ─── HAMBURGER MENU ──────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ─── SCROLL REVEAL ───────────────────────────────────────────
function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-section, .reveal-card').forEach(el => {
    observer.observe(el);
  });
}

// ─── MEDICINES PAGE ──────────────────────────────────────────
function renderMedicines(list) {
  const grid = document.getElementById('medicinesGrid');
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div style="font-size:3rem;">🌿</div>
        <p>No medicines found matching your search.</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map((med, i) => `
    <div class="med-card reveal-card" style="transition-delay:${(i % 3) * 0.08}s">
      <div class="med-card-header">
        <div class="med-emoji">${med.emoji}</div>
        <div class="med-meta">
          <h3>${med.name}</h3>
          <span class="med-cat-tag">${CATEGORY_LABELS[med.category] || med.category}</span>
        </div>
      </div>
      <div class="med-card-body">
        <p class="med-desc">${med.desc}</p>
        <div class="med-unit">📦 ${med.unit}</div>
      </div>
    </div>
  `).join('');

  // Re-trigger reveal for new cards
  setupReveal();
}

function initMedicinesPage() {
  const grid = document.getElementById('medicinesGrid');
  if (!grid) return;

  let activeFilter = 'all';
  let searchTerm = '';

  // Check URL param for initial filter
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam) activeFilter = catParam;

  function getFiltered() {
    return MEDICINES.filter(m => {
      const matchesCat = activeFilter === 'all' || m.category === activeFilter;
      const matchesSearch = !searchTerm ||
        m.name.toLowerCase().includes(searchTerm) ||
        m.desc.toLowerCase().includes(searchTerm);
      return matchesCat && matchesSearch;
    });
  }

  function update() {
    renderMedicines(getFiltered());
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === activeFilter);
    });
  }

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    if (btn.dataset.filter === activeFilter) btn.classList.add('active');
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      update();
    });
  });

  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      update();
    });
  }

  update();
}

// ─── APPOINTMENT BOOKING (WHATSAPP) ──────────────────────────
function initAppointmentForm() {
  const form = document.getElementById('appointmentForm');
  if (!form) return;

  const dateInput = document.getElementById('apptDate');
  const dateHint  = document.getElementById('dateHint');

  // Set min selectable date to today
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm   = String(today.getMonth() + 1).padStart(2, '0');
  const dd   = String(today.getDate()).padStart(2, '0');
  dateInput.min = `${yyyy}-${mm}-${dd}`;

  // Validate: only Thursday (4) or Sunday (0)
  dateInput.addEventListener('change', () => {
    const val = dateInput.value;
    if (!val) {
      dateHint.textContent = '';
      dateHint.className = 'form-hint';
      dateInput.classList.remove('error', 'valid');
      return;
    }
    const d   = new Date(val + 'T00:00:00');
    const day = d.getDay();
    if (day === 0 || day === 4) {
      const dayName = day === 0 ? 'Sunday' : 'Thursday';
      dateHint.textContent = `✓ ${dayName} – Dr. Dileep Senan will be available.`;
      dateHint.className = 'form-hint success';
      dateInput.classList.remove('error');
      dateInput.classList.add('valid');
    } else {
      const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      dateHint.textContent = `${days[day]} is not a consultation day. Please choose a Thursday or Sunday.`;
      dateHint.className = 'form-hint';
      dateInput.classList.add('error');
      dateInput.classList.remove('valid');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name   = document.getElementById('apptName').value.trim();
    const mobile = document.getElementById('apptMobile').value.trim();
    const reason = document.getElementById('apptReason').value.trim();
    const date   = dateInput.value;

    if (!name || !mobile || !reason || !date) {
      alert('Please fill in all fields before booking.');
      return;
    }

    const d   = new Date(date + 'T00:00:00');
    const day = d.getDay();
    if (day !== 0 && day !== 4) {
      dateHint.textContent = 'Please select a Thursday or Sunday for your appointment.';
      dateHint.className = 'form-hint';
      dateInput.classList.add('error');
      dateInput.classList.remove('valid');
      return;
    }

    const dayNames   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const formatted  = `${dayNames[d.getDay()]}, ${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;

    const message =
`Dear Sir,

I would like to book a consultation appointment at Kottakkal Arya Vaidya Sala, Ponda, Goa.

*Patient Name:* ${name}
*Mobile Number:* ${mobile}
*Reason for Consultation:* ${reason}
*Preferred Date:* ${formatted}

Kindly confirm the appointment at your earliest convenience.

Thank you.`;

    const url = `https://wa.me/917798239220?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

// ─── FLOATING WHATSAPP BUTTON ────────────────────────────────
function injectFloatingWhatsApp() {
  const isHome = window.location.pathname === '/' ||
                 window.location.pathname.endsWith('index.html') ||
                 window.location.pathname.endsWith('/');
  const href = isHome ? '#appointment' : 'index.html#appointment';

  const btn = document.createElement('a');
  btn.href = href;
  btn.className = 'float-wa-btn';
  btn.setAttribute('aria-label', 'Book Appointment via WhatsApp');
  btn.innerHTML = `
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    <span class="float-wa-label">Book Appointment</span>`;
  document.body.appendChild(btn);
}

// ─── INIT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setupReveal();
  initMedicinesPage();
  initAppointmentForm();
  injectFloatingWhatsApp();

  // Smooth anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
