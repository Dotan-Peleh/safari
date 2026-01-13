import React, { useState } from 'react';

// Use images from public folder
const heroSafari = '/images/hero-safari.jpg';
const bwindiGorilla = '/images/bwindi-gorilla.jpg';
const kibaleChimp = '/images/kibale-chimp.jpg';
const serengetiMigration = '/images/serengeti-migration.jpg';
const ngorongoroCrater = '/images/ngorongoro-crater.jpg';
const tarangireElephants = '/images/tarangire-elephants.jpg';

const SafariCompletePlanner = () => {
  const [selectedOption, setSelectedOption] = useState('recommended');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeTab, setActiveTab] = useState('map');

  // Location data with local images
  const locations = {
    serengeti_north: {
      name: "צפון סרנגטי",
      nameEn: "Northern Serengeti",
      country: "tanzania",
      image: serengetiMigration,
      coords: { x: 280, y: 280 },
      description: "אזור נהר המארה - המקום המפורסם לחציית הנדידה הגדולה",
      highlights: ["🦁 צפיפות טורפים גבוהה", "🌊 חציית נהר המארה", "🎈 טיסת בלון ($500)"],
      bestTime: "יולי-ספטמבר",
      wildlife: ["אריות", "נמרים", "צ'יטות", "תנינים", "היפופוטמים"],
      tips: [
        "🌅 הגיעו לנקודות החצייה עד 6:30 בבוקר - זה הזמן הטוב ביותר",
        "📸 עדשה 200-400mm חיונית לצילום החציות",
        "⏰ העדרים עשויים להמתין ימים על הגדה לפני שחוצים",
        "🚙 הקפידו שהמדריך יודע את נקודות החצייה הפופולריות",
        "💡 צפון סרנגטי פחות צפוף מהמרכז - שווה להשקיע בנסיעה"
      ],
      stayDuration: "2-3 לילות",
      difficulty: "קל"
    },
    serengeti_central: {
      name: "מרכז סרנגטי (סרונרה)",
      nameEn: "Central Serengeti (Seronera)",
      country: "tanzania",
      image: heroSafari,
      coords: { x: 290, y: 340 },
      description: "לב הסרנגטי - ריכוז חיות בר גבוה כל השנה",
      highlights: ["🦁 ריכוז האריות הגבוה ביותר", "🐆 נמרים על עצים", "🦛 היפופוטמים בנהר סרונרה"],
      bestTime: "כל השנה",
      wildlife: ["אריות", "נמרים", "פילים", "ג'ירפות", "זברות"],
      tips: [
        "🌅 יציאה ב-6:00 בבוקר לספארי - האריות פעילים",
        "🪨 חפשו את ה-Kopjes (סלעי גרניט) - מחבוא אהוב של נמרים",
        "🚗 האזור יכול להיות צפוף - בקשו מהמדריך מסלולים פחות תיירותיים",
        "🍽️ נקודת פיקניק ליד Hippo Pool מומלצת",
        "🦅 למעלה מ-500 מיני ציפורים באזור"
      ],
      stayDuration: "2 לילות",
      difficulty: "קל"
    },
    ngorongoro: {
      name: "מכתש נגורונגורו",
      nameEn: "Ngorongoro Crater",
      country: "tanzania",
      image: ngorongoroCrater,
      coords: { x: 340, y: 380 },
      description: "המכתש הגדול בעולם - 25,000 יונקים בשטח סגור",
      highlights: ["🦏 קרנף שחור (נדיר!)", "🦁 צפיפות טורפים הגבוהה באפריקה", "🦩 פלמינגו באגם מגדי"],
      bestTime: "יוני-אוקטובר",
      wildlife: ["קרנף שחור", "אריות", "נמרים", "פילים", "באפלו"],
      tips: [
        "⏰ השער נפתח ב-6:00 - היו ראשונים! רכבים מוגבלים",
        "🦏 הקרנפים בדרום-מזרח המכתש - ליד אגם מגדי",
        "🧥 הביאו שכבות - קר בבוקר על השפה (2,300 מטר)",
        "⛔ אסור לרדת מהרכב (חוץ מאזורי פיקניק מסומנים)",
        "💰 עמלת כניסה גבוהה ($295/רכב) - כדאי לשלב עם לילה על השפה",
        "📷 אור הבוקר המוקדם מושלם לצילום עם הערפל"
      ],
      stayDuration: "1-2 לילות",
      difficulty: "קל"
    },
    tarangire: {
      name: "טרנגירה",
      nameEn: "Tarangire",
      country: "tanzania",
      image: tarangireElephants,
      coords: { x: 370, y: 430 },
      description: "עצי באובב עתיקים ועדרי הפילים הגדולים בתנזניה",
      highlights: ["🐘 5,000+ פילים", "🌳 עצי באובב בני 1,000 שנה", "🦁 אריות מטפסי עצים"],
      bestTime: "יוני-אוקטובר",
      wildlife: ["פילים", "אריות", "נמרים", "פיתונים", "צבועים"],
      tips: [
        "🐘 הפילים מתרכזים ליד נהר טרנגירה בעונה היבשה",
        "🌅 שקיעות מדהימות עם צלליות באובב - מקום מושלם לצילום",
        "🌙 זה אחד הפארקים היחידים שמציעים ספארי לילה ($100/אדם)",
        "🦅 550+ מיני ציפורים - גן עדן לצפרים",
        "🚗 פחות תיירותי מסרנגטי - חוויה אינטימית יותר",
        "⏰ הגיעו ב-10:00-11:00 - תוכלו לראות ערב ובוקר"
      ],
      stayDuration: "1-2 לילות",
      difficulty: "קל"
    },
    arusha: {
      name: "ארושה",
      nameEn: "Arusha",
      country: "tanzania",
      image: heroSafari,
      coords: { x: 400, y: 400 },
      description: "שער הספארי לצפון תנזניה - עיר תוססת למרגלות הר מרו",
      highlights: ["🏔️ נוף להר מרו והר קילימנג'רו", "🛍️ שוק המאסאי", "☕ סיור קפה"],
      bestTime: "כל השנה",
      wildlife: [],
      tips: [
        "💵 החליפו דולרים לשילינג בעיר - שער טוב יותר",
        "🏧 KCB ATM ללא עמלה - משכו את כל המזומן שתצטרכו",
        "📅 שטרות דולר חייבים להיות מ-2013 ומעלה!",
        "🛒 שוק Maasai Market ביום רביעי ושבת",
        "🏨 Mount Meru Hotel מומלץ ללינה לפני/אחרי הספארי"
      ],
      stayDuration: "1 לילה",
      difficulty: "קל"
    },
    bwindi: {
      name: "יער בווינדי",
      nameEn: "Bwindi Impenetrable Forest",
      country: "uganda",
      image: bwindiGorilla,
      coords: { x: 220, y: 220 },
      description: "בית לחצי מאוכלוסיית הגורילות ההרריות בעולם",
      highlights: ["🦍 מעקב גורילות!", "🌿 יער גשם עתיק", "👥 26 משפחות גורילות מורגלות"],
      bestTime: "יוני-אוגוסט, דצמבר-פברואר",
      wildlife: ["גורילות הרים", "שימפנזים", "קופי קולובוס", "פילי יער"],
      tips: [
        "🦍 הזמינו אשרה 3 חודשים מראש ($800/אדם) - נגמר מהר!",
        "👟 נעלי הליכה עמידות למים חובה - השביל בוצי ותלול",
        "🧤 כפפות גינון להגנה מסרפדים",
        "💪 רמת כושר בינונית-גבוהה נדרשת (2-6 שעות הליכה)",
        "📏 שמרו מרחק 7 מטר מהגורילות",
        "📷 ללא פלאש! משבש את הגורילות",
        "🤧 אל תלכו אם יש לכם שפעת - הגורילות רגישות למחלות אנוש",
        "💰 שכרו סבל ($20) - תומכים בציידים לשעבר שהפכו לשומרי טבע"
      ],
      stayDuration: "2 לילות",
      difficulty: "מאתגר"
    },
    kibale: {
      name: "יער קיבאלה",
      nameEn: "Kibale Forest",
      country: "uganda",
      image: kibaleChimp,
      coords: { x: 240, y: 170 },
      description: "בירת הפרימטים של אפריקה - 13 מיני קופים",
      highlights: ["🐒 1,500 שימפנזים", "🌳 יער גשם טרופי", "🦜 375 מיני ציפורים"],
      bestTime: "יוני-ספטמבר, דצמבר-פברואר",
      wildlife: ["שימפנזים", "קופי קולובוס", "קופים כחולים", "מנגבי אפור"],
      tips: [
        "🐒 מעקב שימפנזים ב-8:00, 11:00 ו-14:00 - בוקר הכי טוב",
        "📊 90%+ סיכוי לראות שימפנזים - ההצלחה הגבוהה ביותר באפריקה",
        "👕 לבשו צבעים ניטרליים (ירוק, חאקי, חום) - לא שחור או כחול",
        "🦟 כחול ושחור מושכים חרקים!",
        "⏱️ שעה אחת עם השימפנזים (מספיק, הם זזים הרבה)",
        "👶 גיל מינימום: 12 שנים (בניגוד ל-15 לגורילות)",
        "🔊 אל תחקו את הקולות שלהם - יכול לעורר תוקפנות",
        "🥾 השביל קל יחסית - פחות תובעני מגורילות"
      ],
      stayDuration: "1-2 לילות",
      difficulty: "בינוני"
    },
    entebbe: {
      name: "אנטבה",
      nameEn: "Entebbe",
      country: "uganda",
      image: heroSafari,
      coords: { x: 320, y: 180 },
      description: "שער הכניסה לאוגנדה על חופי אגם ויקטוריה",
      highlights: ["🛬 נמל תעופה בינלאומי", "🌴 גני הבוטני", "🐒 מקלט השימפנזים נגמבה"],
      bestTime: "כל השנה",
      wildlife: [],
      tips: [
        "🏨 The Boma Hotel מומלץ - קרוב לשדה התעופה",
        "🐒 אי נגמבה - מקלט לשימפנזים יתומים (חצי יום)",
        "🌿 הגנים הבוטניים שווים ביקור אם יש זמן",
        "💱 החליפו דולרים בשדה התעופה - שער סביר",
        "📱 קנו כרטיס SIM מקומי (MTN או Airtel)"
      ],
      stayDuration: "1 לילה",
      difficulty: "קל"
    },
    queen_elizabeth: {
      name: "פארק קווין אליזבת",
      nameEn: "Queen Elizabeth NP",
      country: "uganda",
      image: heroSafari,
      coords: { x: 230, y: 195 },
      description: "שייט בתעלת קזינגה ואריות מטפסי עצים באישאשה",
      highlights: ["🦁 אריות מטפסי עצים", "🚤 שייט קזינגה", "🦛 היפופוטמים"],
      bestTime: "יוני-אוגוסט, דצמבר-פברואר",
      wildlife: ["אריות", "נמרים", "פילים", "היפופוטמים", "תנינים"],
      tips: [
        "🚤 שייט קזינגה ב-15:00 - הכי הרבה חיות בר",
        "🦁 אריות מטפסי עצים באזור אישאשה (דרום הפארק)",
        "🐒 שימפנזים בקיאמבורה גורג' - חלופה לקיבאלה",
        "🦅 600+ מיני ציפורים - אחד המגוונים ביותר באפריקה",
        "🌅 תצפית על פני Crater Lakes מדהימה"
      ],
      stayDuration: "1-2 לילות",
      difficulty: "קל"
    }
  };

  // Route options
  const routes = {
    recommended: {
      name: "המסלול המומלץ",
      subtitle: "הצעה 4 - משולב בינוני",
      days: 14,
      price: 29220,
      pricePerPerson: 9740,
      color: "#4CAF50",
      description: "השילוב המושלם: גורילות + שימפנזים + הנדידה הגדולה",
      itinerary: [
        { day: 1, location: "entebbe", nights: 1, highlight: false },
        { day: 2, location: "kibale", nights: 2, highlight: "🐒" },
        { day: 4, location: "bwindi", nights: 2, highlight: "🦍" },
        { day: 6, location: "serengeti_north", nights: 2, highlight: "🌊", flight: true },
        { day: 8, location: "serengeti_central", nights: 2, highlight: false },
        { day: 10, location: "ngorongoro", nights: 2, highlight: "🦏" },
        { day: 12, location: "tarangire", nights: 2, highlight: "🐘" },
        { day: 14, location: "arusha", nights: 0, highlight: false }
      ],
      pros: ["חוויה מלאה של שתי המדינות", "גורילות + שימפנזים + Big 5", "עונה מושלמת לנדידה"],
      cons: ["14 ימים - דורש זמן", "מחיר גבוה יחסית"]
    },
    alternative: {
      name: "מסלול חלופי",
      subtitle: "דגש על אוגנדה + זנזיבר",
      days: 14,
      price: 32000,
      pricePerPerson: 10667,
      color: "#9C27B0",
      description: "יותר זמן באוגנדה + סיום רגוע בזנזיבר",
      itinerary: [
        { day: 1, location: "entebbe", nights: 1, highlight: false },
        { day: 2, location: "kibale", nights: 2, highlight: "🐒" },
        { day: 4, location: "queen_elizabeth", nights: 2, highlight: "🦁" },
        { day: 6, location: "bwindi", nights: 2, highlight: "🦍" },
        { day: 8, location: "serengeti_central", nights: 2, highlight: false, flight: true },
        { day: 10, location: "ngorongoro", nights: 1, highlight: "🦏" },
        { day: 11, location: "zanzibar", nights: 3, highlight: "🏖️" }
      ],
      pros: ["קווין אליזבת - שייט + אריות מטפסים", "3 לילות בזנזיבר להתאוששות", "פחות נסיעות ארוכות"],
      cons: ["מפספסים את צפון סרנגטי (חציית המארה)", "מפספסים את טרנגירה"]
    },
    tanzania_only: {
      name: "תנזניה בלבד",
      subtitle: "הצעה 1 - תקציבי",
      days: 7,
      price: 8304,
      pricePerPerson: 2768,
      color: "#FF9800",
      description: "מסלול קלאסי של צפון תנזניה",
      itinerary: [
        { day: 1, location: "arusha", nights: 1, highlight: false },
        { day: 2, location: "tarangire", nights: 1, highlight: "🐘" },
        { day: 3, location: "serengeti_north", nights: 2, highlight: "🌊" },
        { day: 5, location: "serengeti_central", nights: 1, highlight: false },
        { day: 6, location: "ngorongoro", nights: 1, highlight: "🦏" },
        { day: 7, location: "arusha", nights: 0, highlight: false }
      ],
      pros: ["מחיר אטרקטיבי", "7 ימים בלבד", "כל ה-Big 5"],
      cons: ["ללא גורילות ושימפנזים", "קצת ממהרים"]
    }
  };

  const currentRoute = routes[selectedOption];
  const currentLocation = selectedLocation ? locations[selectedLocation] : null;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)', minHeight: '100vh', direction: 'rtl', color: 'white' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #e65100, #ff8f00)', padding: '25px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '2.2em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          🗺️ מדריך ספארי אולטימטיבי
        </h1>
        <p style={{ margin: '10px 0 0', opacity: 0.95 }}>אוגנדה ותנזניה | אוגוסט 2026 | עם תמונות, טיפים ומסלולים חלופיים</p>
      </div>

      {/* Route Selector */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', padding: '25px', flexWrap: 'wrap', background: 'rgba(0,0,0,0.2)' }}>
        {Object.entries(routes).map(([key, route]) => (
          <button
            key={key}
            onClick={() => { setSelectedOption(key); setSelectedLocation(null); }}
            style={{
              padding: '15px 25px',
              border: selectedOption === key ? `3px solid ${route.color}` : '2px solid rgba(255,255,255,0.2)',
              borderRadius: '15px',
              background: selectedOption === key ? `${route.color}22` : 'rgba(255,255,255,0.05)',
              color: 'white',
              cursor: 'pointer',
              minWidth: '200px',
              transition: 'all 0.3s'
            }}
          >
            <div style={{ fontWeight: 'bold', fontSize: '1.1em' }}>
              {key === 'recommended' && '⭐ '}{route.name}
            </div>
            <div style={{ fontSize: '0.85em', opacity: 0.8, marginTop: '5px' }}>{route.subtitle}</div>
            <div style={{ fontSize: '0.9em', marginTop: '8px', color: route.color }}>
              {route.days} ימים | ${route.price.toLocaleString()}
            </div>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', padding: '25px', maxWidth: '1500px', margin: '0 auto' }}>
        
        {/* Map Section */}
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '25px', backdropFilter: 'blur(10px)' }}>
          <h2 style={{ color: '#ff8f00', marginTop: 0 }}>🗺️ מפת המסלול - {currentRoute.name}</h2>
          
          <svg viewBox="0 0 500 520" style={{ width: '100%', height: 'auto', background: 'linear-gradient(180deg, #1a365d 0%, #234e52 100%)', borderRadius: '15px' }}>
            {/* Background patterns */}
            <defs>
              <pattern id="grass" patternUnits="userSpaceOnUse" width="20" height="20">
                <circle cx="10" cy="10" r="1" fill="#2d5016" opacity="0.3"/>
              </pattern>
              <linearGradient id="lakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#4299e1',stopOpacity:0.6}}/>
                <stop offset="100%" style={{stopColor:'#2b6cb0',stopOpacity:0.6}}/>
              </linearGradient>
            </defs>
            
            {/* Lake Victoria */}
            <ellipse cx="340" cy="150" rx="65" ry="55" fill="url(#lakeGrad)" />
            <text x="340" y="155" textAnchor="middle" fontSize="11" fill="white" opacity="0.8">אגם ויקטוריה</text>
            
            {/* Uganda */}
            <path d="M180,80 L400,80 L400,260 L280,290 L180,260 Z" fill="#2d5016" stroke="#48bb78" strokeWidth="2" opacity="0.4" />
            <text x="280" y="110" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#48bb78">🇺🇬 אוגנדה</text>
            
            {/* Tanzania */}
            <path d="M200,290 L440,290 L470,520 L180,520 L200,290 Z" fill="#744210" stroke="#ed8936" strokeWidth="2" opacity="0.4" />
            <text x="320" y="320" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ed8936">🇹🇿 תנזניה</text>
            
            {/* Serengeti area */}
            <ellipse cx="285" cy="360" rx="90" ry="70" fill="#9ae6b4" opacity="0.15" />
            <text x="285" y="365" textAnchor="middle" fontSize="10" fill="#9ae6b4" opacity="0.7">סרנגטי</text>

            {/* Route lines */}
            {currentRoute.itinerary.map((stop, idx) => {
              if (idx === 0) return null;
              const prevStop = currentRoute.itinerary[idx - 1];
              const prevLoc = locations[prevStop.location];
              const currLoc = locations[stop.location];
              if (!prevLoc || !currLoc) return null;
              
              const isFlight = stop.flight;
              const isSelected = selectedLocation === stop.location || selectedLocation === prevStop.location;
              
              return (
                <g key={idx}>
                  <line
                    x1={prevLoc.coords.x} y1={prevLoc.coords.y}
                    x2={currLoc.coords.x} y2={currLoc.coords.y}
                    stroke={isFlight ? "#9f7aea" : isSelected ? "#ffd700" : "rgba(255,255,255,0.5)"}
                    strokeWidth={isSelected ? 4 : 2}
                    strokeDasharray={isFlight ? "10,5" : "none"}
                  />
                  {isFlight && (
                    <text 
                      x={(prevLoc.coords.x + currLoc.coords.x) / 2} 
                      y={(prevLoc.coords.y + currLoc.coords.y) / 2 - 10} 
                      fontSize="18"
                    >✈️</text>
                  )}
                </g>
              );
            })}
            
            {/* Location markers */}
            {currentRoute.itinerary.map((stop, idx) => {
              const loc = locations[stop.location];
              if (!loc) return null;
              
              const isSelected = selectedLocation === stop.location;
              const bgColor = loc.country === 'uganda' ? '#48bb78' : '#ed8936';
              
              return (
                <g 
                  key={stop.location + idx}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedLocation(stop.location)}
                >
                  {/* Glow effect for selected */}
                  {isSelected && (
                    <circle cx={loc.coords.x} cy={loc.coords.y} r="28" fill="#ffd700" opacity="0.3">
                      <animate attributeName="r" values="28;32;28" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                  )}
                  
                  {/* Main circle */}
                  <circle
                    cx={loc.coords.x} cy={loc.coords.y}
                    r={isSelected ? 22 : 18}
                    fill={bgColor}
                    stroke={isSelected ? '#ffd700' : 'white'}
                    strokeWidth={isSelected ? 4 : 2}
                  />
                  
                  {/* Day number */}
                  <text 
                    x={loc.coords.x} 
                    y={loc.coords.y + 5} 
                    textAnchor="middle" 
                    fontSize="12" 
                    fill="white" 
                    fontWeight="bold"
                  >
                    {stop.day}
                  </text>
                  
                  {/* Location name */}
                  <text 
                    x={loc.coords.x} 
                    y={loc.coords.y + 35} 
                    textAnchor="middle" 
                    fontSize="10" 
                    fill="white"
                    fontWeight="bold"
                  >
                    {loc.name.split(' ')[0]}
                  </text>
                  
                  {/* Highlight icon */}
                  {stop.highlight && (
                    <text 
                      x={loc.coords.x + 22} 
                      y={loc.coords.y - 15} 
                      fontSize="16"
                    >
                      {stop.highlight}
                    </text>
                  )}
                </g>
              );
            })}
            
            {/* Legend */}
            <g transform="translate(15, 450)">
              <rect x="0" y="0" width="140" height="55" fill="rgba(0,0,0,0.5)" rx="8" />
              <circle cx="15" cy="15" r="8" fill="#48bb78" />
              <text x="30" y="19" fontSize="10" fill="white">אוגנדה</text>
              <circle cx="85" cy="15" r="8" fill="#ed8936" />
              <text x="100" y="19" fontSize="10" fill="white">תנזניה</text>
              <line x1="10" y1="35" x2="40" y2="35" stroke="#9f7aea" strokeWidth="2" strokeDasharray="5,3" />
              <text x="45" y="39" fontSize="10" fill="white">✈️ טיסה</text>
            </g>
          </svg>

          {/* Quick stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '20px' }}>
            {[
              { icon: '📅', label: 'ימים', value: currentRoute.days },
              { icon: '💰', label: 'סה"כ', value: `$${currentRoute.price.toLocaleString()}` },
              { icon: '👤', label: 'לאדם', value: `$${currentRoute.pricePerPerson.toLocaleString()}` },
              { icon: '🏨', label: 'לילות', value: currentRoute.days - 1 }
            ].map((stat, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5em' }}>{stat.icon}</div>
                <div style={{ fontSize: '0.8em', opacity: 0.7 }}>{stat.label}</div>
                <div style={{ fontWeight: 'bold', color: currentRoute.color }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '25px', backdropFilter: 'blur(10px)' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            {[
              { id: 'map', icon: '📍', label: 'יעדים' },
              { id: 'tips', icon: '💡', label: 'טיפים' },
              { id: 'compare', icon: '⚖️', label: 'השוואה' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1,
                  padding: '12px',
                  border: 'none',
                  borderRadius: '10px',
                  background: activeTab === tab.id ? currentRoute.color : 'rgba(255,255,255,0.1)',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: activeTab === tab.id ? 'bold' : 'normal'
                }}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Destinations Tab */}
          {activeTab === 'map' && (
            <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
              {selectedLocation && currentLocation ? (
                <div>
                  {/* Location Card */}
                  <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', marginBottom: '20px' }}>
                    <img 
                      src={currentLocation.image} 
                      alt={currentLocation.name}
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                    <div style={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                      padding: '20px'
                    }}>
                      <h3 style={{ margin: 0, fontSize: '1.5em' }}>{currentLocation.name}</h3>
                      <p style={{ margin: '5px 0 0', opacity: 0.8, fontSize: '0.9em' }}>{currentLocation.nameEn}</p>
                    </div>
                  </div>

                  <p style={{ opacity: 0.9, lineHeight: 1.6 }}>{currentLocation.description}</p>

                  {/* Highlights */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '15px 0' }}>
                    {currentLocation.highlights.map((h, i) => (
                      <span key={i} style={{ 
                        background: 'rgba(255,255,255,0.1)', 
                        padding: '8px 12px', 
                        borderRadius: '20px',
                        fontSize: '0.9em'
                      }}>
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Info badges */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', margin: '15px 0' }}>
                    <div style={{ background: 'rgba(72,187,120,0.2)', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.8em', opacity: 0.7 }}>⏰ עונה מומלצת</div>
                      <div style={{ fontWeight: 'bold' }}>{currentLocation.bestTime}</div>
                    </div>
                    <div style={{ background: 'rgba(237,137,54,0.2)', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.8em', opacity: 0.7 }}>🛏️ משך שהייה</div>
                      <div style={{ fontWeight: 'bold' }}>{currentLocation.stayDuration}</div>
                    </div>
                    <div style={{ background: 'rgba(159,122,234,0.2)', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.8em', opacity: 0.7 }}>💪 קושי</div>
                      <div style={{ fontWeight: 'bold' }}>{currentLocation.difficulty}</div>
                    </div>
                  </div>

                  {/* Tips */}
                  <h4 style={{ color: '#ffd700', marginTop: '20px' }}>💡 טיפים חשובים</h4>
                  <ul style={{ padding: '0 20px', lineHeight: 1.8 }}>
                    {currentLocation.tips.map((tip, i) => (
                      <li key={i} style={{ marginBottom: '8px' }}>{tip}</li>
                    ))}
                  </ul>

                  {/* Wildlife */}
                  {currentLocation.wildlife.length > 0 && (
                    <>
                      <h4 style={{ color: '#48bb78', marginTop: '20px' }}>🦁 חיות לצפייה</h4>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {currentLocation.wildlife.map((animal, i) => (
                          <span key={i} style={{ 
                            background: 'rgba(72,187,120,0.2)', 
                            padding: '6px 12px', 
                            borderRadius: '15px',
                            fontSize: '0.85em'
                          }}>
                            {animal}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  <button 
                    onClick={() => setSelectedLocation(null)}
                    style={{
                      width: '100%',
                      marginTop: '20px',
                      padding: '12px',
                      background: 'rgba(255,255,255,0.1)',
                      border: 'none',
                      borderRadius: '10px',
                      color: 'white',
                      cursor: 'pointer'
                    }}
                  >
                    ← חזרה לרשימה
                  </button>
                </div>
              ) : (
                <div>
                  <p style={{ opacity: 0.7, marginBottom: '15px' }}>לחץ על יעד במפה או ברשימה לפרטים מלאים:</p>
                  {currentRoute.itinerary.map((stop, idx) => {
                    const loc = locations[stop.location];
                    if (!loc) return null;
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedLocation(stop.location)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px',
                          padding: '15px',
                          marginBottom: '10px',
                          background: 'rgba(255,255,255,0.05)',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          borderRight: `4px solid ${loc.country === 'uganda' ? '#48bb78' : '#ed8936'}`,
                          transition: 'background 0.3s'
                        }}
                      >
                        <img 
                          src={loc.image} 
                          alt={loc.name}
                          style={{ width: '70px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}
                        />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 'bold' }}>
                            <span style={{ 
                              background: loc.country === 'uganda' ? '#48bb78' : '#ed8936',
                              padding: '2px 8px',
                              borderRadius: '10px',
                              fontSize: '0.8em',
                              marginLeft: '8px'
                            }}>
                              יום {stop.day}
                            </span>
                            {loc.name}
                            {stop.highlight && <span style={{ marginRight: '8px' }}>{stop.highlight}</span>}
                          </div>
                          <div style={{ fontSize: '0.85em', opacity: 0.7, marginTop: '3px' }}>
                            {stop.nights > 0 ? `${stop.nights} לילות` : 'יציאה'}
                            {stop.flight && ' | ✈️ טיסה'}
                          </div>
                        </div>
                        <span style={{ opacity: 0.5 }}>←</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Tips Tab */}
          {activeTab === 'tips' && (
            <div style={{ maxHeight: '600px', overflowY: 'auto', padding: '10px' }}>
              <h3 style={{ color: '#ff8f00', marginBottom: '20px', fontSize: '1.3em' }}>💡 טיפים חשובים לספארי</h3>
              {[
                {
                  title: '🦍 טרקינג גורילות',
                  tips: [
                    'הזמינו אשרה 3 חודשים מראש ($800)',
                    'נעלי הליכה עמידות למים חובה',
                    'כפפות גינון להגנה מסרפדים',
                    'שכרו סבל ($20) - תמיכה בקהילה',
                    'שמרו מרחק 7 מטר מהגורילות',
                    'ללא פלאש! משבש את הגורילות',
                    'אל תלכו אם יש לכם שפעת'
                  ]
                },
                {
                  title: '🐒 מעקב שימפנזים',
                  tips: [
                    'בוקר הכי טוב - שימפנזים פעילים יותר',
                    'לבשו צבעים ניטרליים (לא שחור/כחול)',
                    'אל תחקו את הקולות שלהם',
                    'גיל מינימום: 12 שנים',
                    '90%+ סיכוי לראות בקיבאלה'
                  ]
                },
                {
                  title: '📸 צילום ספארי',
                  tips: [
                    'עדשה 200-400mm לחיות רחוקות',
                    'אור הבוקר והערב הכי טוב',
                    'כיסו את העדשה באבק - הגנה',
                    'סוללות רזרב (קר בבוקר מרוקן סוללה)',
                    'כרטיסי זיכרון מרובים'
                  ]
                },
                {
                  title: '💰 כסף וכלכלה',
                  tips: [
                    'שטרות דולר חייבים להיות מ-2013+!',
                    'KCB ATM ללא עמלה',
                    'משכו מזומן בערים גדולות בלבד',
                    'טיפ למדריך: $10-20 ליום',
                    'שילינג טנזני עדיף על דולרים בקניות'
                  ]
                },
                {
                  title: '🧳 מה לארוז',
                  tips: [
                    'צבעים ניטרליים (חאקי, ירוק, חום)',
                    'שכבות - קר בבוקר, חם בצהריים',
                    'נעלי הליכה סגורות ונוחות',
                    'משקפת - חובה לספארי!',
                    'קרם הגנה וכובע',
                    'מעיל גשם קל',
                    'פנס ראש לערבים'
                  ]
                }
              ].map((section, idx) => (
                <div key={idx} style={{ marginBottom: '20px', background: 'rgba(255,255,255,0.08)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h4 style={{ margin: '0 0 15px', color: '#ffd700', fontSize: '1.2em' }}>{section.title}</h4>
                  <ul style={{ margin: 0, padding: '0 20px', lineHeight: 1.8, listStyle: 'none' }}>
                    {section.tips.map((tip, i) => (
                      <li key={i} style={{ marginBottom: '10px', fontSize: '0.95em', paddingRight: '20px', position: 'relative' }}>
                        <span style={{ position: 'absolute', right: 0, color: '#ffd700' }}>•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Compare Tab */}
          {activeTab === 'compare' && (
            <div style={{ maxHeight: '600px', overflowY: 'auto', padding: '10px' }}>
              <h3 style={{ color: '#ff8f00', marginBottom: '20px', fontSize: '1.3em' }}>⚖️ השוואת מסלולים</h3>
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '15px', padding: '15px', marginBottom: '20px', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9em', minWidth: '500px' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.1)' }}>
                      <th style={{ padding: '12px', textAlign: 'right', borderBottom: '2px solid rgba(255,255,255,0.2)', fontWeight: 'bold' }}>קריטריון</th>
                      <th style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid rgba(255,255,255,0.2)', color: '#4CAF50', fontWeight: 'bold' }}>⭐ מומלץ</th>
                      <th style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid rgba(255,255,255,0.2)', color: '#9C27B0', fontWeight: 'bold' }}>חלופי</th>
                      <th style={{ padding: '12px', textAlign: 'center', borderBottom: '2px solid rgba(255,255,255,0.2)', color: '#FF9800', fontWeight: 'bold' }}>תנזניה</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: '📅 ימים', r: '14', a: '14', t: '7' },
                      { label: '💰 מחיר כולל', r: '$29,220', a: '$32,000', t: '$8,304' },
                      { label: '👤 מחיר לאדם', r: '$9,740', a: '$10,667', t: '$2,768' },
                      { label: '🦍 גורילות', r: '✅', a: '✅', t: '❌' },
                      { label: '🐒 שימפנזים', r: '✅', a: '✅', t: '❌' },
                      { label: '🌊 חציית המארה', r: '✅', a: '❌', t: '✅' },
                      { label: '🦏 קרנף שחור', r: '✅', a: '✅', t: '✅' },
                      { label: '🏖️ זנזיבר', r: '❌', a: '✅', t: '❌' },
                      { label: '🦁 אריות מטפסים', r: '❌', a: '✅', t: '❌' },
                      { label: '🐘 טרנגירה', r: '✅', a: '❌', t: '✅' }
                    ].map((row, idx) => (
                      <tr key={idx} style={{ background: idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                        <td style={{ padding: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontWeight: '500' }}>{row.label}</td>
                        <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '1.1em' }}>{row.r}</td>
                        <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '1.1em' }}>{row.a}</td>
                        <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '1.1em' }}>{row.t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: '25px', background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '15px' }}>
                <h4 style={{ color: currentRoute.color, marginBottom: '10px', fontSize: '1.3em' }}>{currentRoute.name}</h4>
                <p style={{ opacity: 0.9, marginBottom: '20px', fontSize: '1em' }}>{currentRoute.description}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
                  <div style={{ background: 'rgba(72,187,120,0.15)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(72,187,120,0.3)' }}>
                    <h5 style={{ margin: '0 0 15px', color: '#48bb78', fontSize: '1.1em', fontWeight: 'bold' }}>✅ יתרונות</h5>
                    <ul style={{ margin: 0, padding: '0 20px', fontSize: '0.95em', lineHeight: 1.8, listStyle: 'none' }}>
                      {currentRoute.pros.map((pro, i) => (
                        <li key={i} style={{ marginBottom: '8px', paddingRight: '15px', position: 'relative' }}>
                          <span style={{ position: 'absolute', right: 0, color: '#48bb78' }}>✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(237,137,54,0.15)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(237,137,54,0.3)' }}>
                    <h5 style={{ margin: '0 0 15px', color: '#ed8936', fontSize: '1.1em', fontWeight: 'bold' }}>⚠️ חסרונות</h5>
                    <ul style={{ margin: 0, padding: '0 20px', fontSize: '0.95em', lineHeight: 1.8, listStyle: 'none' }}>
                      {currentRoute.cons.map((con, i) => (
                        <li key={i} style={{ marginBottom: '8px', paddingRight: '15px', position: 'relative' }}>
                          <span style={{ position: 'absolute', right: 0, color: '#ed8936' }}>⚠</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ padding: '25px', margin: '0 25px 25px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
        <h3 style={{ color: '#ff8f00', marginTop: 0 }}>📅 ציר זמן - {currentRoute.name}</h3>
        <div style={{ display: 'flex', overflowX: 'auto', gap: '8px', padding: '15px 0' }}>
          {currentRoute.itinerary.map((stop, idx) => {
            const loc = locations[stop.location];
            if (!loc) return null;
            return (
              <div
                key={idx}
                onClick={() => setSelectedLocation(stop.location)}
                style={{
                  minWidth: '100px',
                  padding: '15px 10px',
                  background: selectedLocation === stop.location ? '#ffd700' : loc.country === 'uganda' ? '#48bb78' : '#ed8936',
                  color: selectedLocation === stop.location ? '#1a1a2e' : 'white',
                  borderRadius: '12px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }}
              >
                <div style={{ fontWeight: 'bold', fontSize: '1.1em' }}>יום {stop.day}</div>
                <div style={{ fontSize: '0.8em', marginTop: '5px', opacity: 0.9 }}>{loc.name.split(' ')[0]}</div>
                {stop.highlight && <div style={{ fontSize: '1.3em', marginTop: '5px' }}>{stop.highlight}</div>}
                {stop.flight && <div style={{ marginTop: '3px' }}>✈️</div>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: 'rgba(0,0,0,0.3)', padding: '25px', textAlign: 'center' }}>
        <p style={{ opacity: 0.7 }}>🌍 מדריך ספארי אינטראקטיבי | אוגוסט 2026</p>
        <p style={{ opacity: 0.5, fontSize: '0.9em' }}>לחצו על כל יעד במפה לקבלת מידע מפורט, תמונות וטיפים</p>
      </div>
    </div>
  );
};

export default SafariCompletePlanner;

