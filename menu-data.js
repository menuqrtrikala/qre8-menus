// ============================================================
//  ΜΕΝΟΥ «ΦίΛιΠs» — ΕΔΩ ΑΛΛΑΖΕΙΣ ΟΛΑ ΤΑ ΔΕΔΟΜΕΝΑ
// ============================================================
//
//  ΟΔΗΓΙΕΣ (απλά ελληνικά):
//
//  1) ΓΙΑ ΝΑ ΑΛΛΑΞΕΙΣ ΤΙΜΗ:
//     Βρες το ποτό και άλλαξε μόνο το νούμερο μέσα στα εισαγωγικά
//     του "price". Παράδειγμα:  price: "9.0"  ->  price: "9.5"
//     (Η τιμή είναι κείμενο, οπότε κράτα τα εισαγωγικά "".)
//
//  2) ΓΙΑ ΝΑ ΠΡΟΣΘΕΣΕΙΣ ΝΕΟ ΠΟΤΟ:
//     Αντίγραψε μια ολόκληρη γραμμή { name: ..., desc: ..., price: ... },
//     κόλλησέ την μέσα στα items της κατηγορίας που θέλεις, και άλλαξε
//     το περιεχόμενο. ΜΗΝ ξεχάσεις το κόμμα (,) στο τέλος της γραμμής.
//
//  3) ΓΙΑ ΝΑ ΣΒΗΣΕΙΣ ΕΝΑ ΠΟΤΟ:
//     Διάγραψε ολόκληρη τη γραμμή του { ... }, μαζί με το κόμμα.
//
//  4) ΓΙΑ ΝΑ ΠΡΟΣΘΕΣΕΙΣ ΝΕΑ ΚΑΤΗΓΟΡΙΑ:
//     Αντίγραψε ένα ολόκληρο μπλοκ κατηγορίας { id:..., title:..., items:[...] }
//     και κόλλησέ το μέσα στο categories. Δώσε ΜΟΝΑΔΙΚΟ id (με μικρά
//     λατινικά γράμματα, χωρίς κενά, π.χ. "beers").
//     - "icon"     = το emoji/εικονίδιο της κάρτας
//     - "title"    = ο τίτλος (αγγλικά ή ελληνικά)
//     - "titleGr"  = ο ελληνικός τίτλος (για το κουμπί γλώσσας GR)
//     - "subtitle" = προαιρετικό σλόγκαν κάτω από τον τίτλο
//
//  ΣΗΜΑΝΤΙΚΟ: ΜΗΝ αγγίζεις τα άλλα αρχεία (index.html, app.js, styles.css).
//             Άλλαξε ΜΟΝΟ αυτό το αρχείο.
//
//  Αν κάτι χαλάσει: πιο συχνό λάθος είναι ξεχασμένο κόμμα (,) ή
//  εισαγωγικά ("). Πρόσεξε να μένει η δομή ίδια με τα παραδείγματα.
// ============================================================

const MENU = {
  // Στοιχεία μαγαζιού (εμφανίζονται στην αρχική / footer)
  brand: {
    name: "ΦίΛιΠs",
    tagline: "γαστροθίορι",
    est: "Est. 2023",
    slogans: [
      "Every Drink Shines",
      "Spirits, Stories, Sensations",
      "Keep the lights on"
    ]
  },

  categories: [
    // ----------------------------------------------------------
    {
      id: "coffee",
      icon: "☕",
      title: "Coffee",
      titleGr: "Καφέδες",
      subtitle: "Keep the lights on",
      // ΣΗΜ.: ΕΝΔΕΙΚΤΙΚΕΣ τιμές — διόρθωσέ τις όπως θέλεις.
      items: [
        { name: "Ελληνικός μονός", desc: "", price: "2.0" },
        { name: "Ελληνικός διπλός", desc: "", price: "2.5" },
        { name: "Espresso", desc: "", price: "2.0" },
        { name: "Espresso διπλός", desc: "", price: "2.5" },
        { name: "Espresso macchiato", desc: "", price: "2.2" },
        { name: "Freddo espresso", desc: "", price: "3.0" },
        { name: "Cappuccino", desc: "", price: "3.0" },
        { name: "Freddo cappuccino", desc: "", price: "3.5" },
        { name: "Latte", desc: "", price: "3.2" },
        { name: "Freddo latte", desc: "", price: "3.5" },
        { name: "Flat white", desc: "", price: "3.3" },
        { name: "Cortado", desc: "", price: "2.8" },
        { name: "Americano", desc: "", price: "2.8" },
        { name: "Καφές φίλτρου", desc: "", price: "3.0" },
        { name: "Φραπέ", desc: "", price: "2.5" },
        { name: "Mocha", desc: "", price: "3.5" },
        { name: "Ζεστή σοκολάτα", desc: "", price: "3.5" },
        { name: "Τσάι / αφέψημα", desc: "", price: "2.8" }
      ]
    },

    // ----------------------------------------------------------
    {
      id: "cocktails",
      icon: "🌈",
      title: "Rainbow Cocktails",
      titleGr: "Cocktails",
      subtitle: "Every Drink Shines",
      items: [
        { name: 'RED — "The Fiery One"', desc: "Bourbon, coconut, sweet vermouth, red berries, acids", price: "9.0" },
        { name: 'ORANGE — "Citrus Glow"', desc: "Olmeca blanco tequila, coco, carrot, ginger, acids & celery salt", price: "9.0" },
        { name: 'YELLOW — "Sunburst Sip"', desc: "Chamomile cocchi americano, labdanum, CO2, parmesan chip", price: "9.0" },
        { name: 'GREEN — "Garden Zest"', desc: "Pistachio Absolut vodka, cacao, salted caramel & acids", price: "8.0" },
        { name: 'BLUE — "Ocean Chill"', desc: "Absolut vodka, blue curaçao, apricots, ginger, acids & berries foam", price: "9.0" },
        { name: 'INDIGO — "Midnight Bloom"', desc: "Butterfly pea Beefeater gin, cucumber, ginger & elderflower CO2", price: "9.0" },
        { name: 'AZURE — "Skyline Sip"', desc: "Blend of rums, banana, cacao, acids, blue curaçao & foamer", price: "9.0" }
      ]
    },

    // ----------------------------------------------------------
    {
      id: "spritz",
      icon: "🥂",
      title: "Spritz",
      titleGr: "Spritz",
      subtitle: "Light & sparkling",
      items: [
        { name: "Silky Garden Spritz", desc: "Absolut vodka, apple, fresh cucumber, homemade orgeat syrup, acids & sparkling wine", price: "8.0" },
        { name: "Peach Bloom", desc: "White bitter liqueur, toasted peach & sparkling wine", price: "8.0" },
        { name: "Velvet Sparkle", desc: "Martini bitter, hibiscus & beetroot soda", price: "8.0" }
      ]
    },

    // ----------------------------------------------------------
    {
      id: "hot",
      icon: "🔥",
      title: "Hot Cocktails",
      titleGr: "Ζεστά Cocktails",
      subtitle: "Warm & spiced",
      items: [
        { name: "Hot Elixir", desc: "Metaxa 5 stars, apple, ginger & spices", price: "8.0" },
        { name: "Polar Kiss", desc: "Spiced rum, hibiscus, maraschino, red berries & acids", price: "9.0" },
        { name: "Chamomile Delight", desc: "Beefeater gin, chamomile, honey & ginger", price: "8.0" }
      ]
    },

    // ----------------------------------------------------------
    {
      id: "nonalcohol",
      icon: "🍃",
      title: "Non Alcohol",
      titleGr: "Χωρίς Αλκοόλ",
      subtitle: "Mocktails",
      items: [
        { name: "Flower Power", desc: "Martini floreale, roses, elderflower, acids & CO2", price: "7.0" },
        { name: "Berries Mule", desc: "Beefeater 0.0, red berries, coconut, acids & ginger beer", price: "8.0" }
      ]
    },

    // ----------------------------------------------------------
    {
      id: "wine",
      icon: "🍷",
      title: "Wine",
      titleGr: "Κρασί",
      subtitle: "Urban pours for urban souls",
      // Τιμές με μορφή "7.0 / 28.0" σημαίνουν: ποτήρι / φιάλη.
      // ⚠ Επιβεβαίωσε ονόματα & τιμές (η φωτο ήταν θολή).
      items: [
        { name: "Meteoro", desc: "Ερυθρό — (επιβεβαίωσε ποικιλία/περιοχή)", price: "7.0 / 28.0" },
        { name: "Portes Σκούρα", desc: "Ερυθρό — Merlot, Κτήμα Σκούρα", price: "7.0 / 28.0" },
        { name: "Limniona", desc: "Ερυθρό — Κτήμα Ζαφειράκη, Τύρναβος–Λάρισα", price: "7.0 / 30.0" },
        { name: "Bostani", desc: "Ερυθρό — Αμπελώνες Αμύνταιο–Φλώρινα", price: "34.0" },
        { name: "Psani Old Vines", desc: "Ερυθρό — Βιολογικής Γεωργίας", price: "36.0" },
        { name: "Moscato d'Asti", desc: "Αφρώδες", price: "7.0 / 35.0" },
        { name: "Martini Prosecco", desc: "Αφρώδες", price: "7.0 / 35.0" },
        { name: "Louis Roederer Brut Champagne", desc: "Αφρώδες — Champagne", price: "100.0" }
      ]
    },

    // ----------------------------------------------------------
    {
      id: "whiskey",
      icon: "🥃",
      title: "Whiskey",
      titleGr: "Ουίσκι",
      subtitle: "Spirits, Stories, Sensations",
      // ΣΗΜ.: Το "group" ομαδοποιεί τα ουίσκι σε υπο-κατηγορίες (τίτλους).
      //       Αν προσθέσεις ποτό, βάλε του το ίδιο "group" με την ομάδα του.
      items: [
        // Scotch Whisky
        { name: "Dewar's", group: "Scotch Whisky", desc: "", price: "8.0" },
        { name: "Famous Grouse", group: "Scotch Whisky", desc: "", price: "8.0" },
        { name: "Haig", group: "Scotch Whisky", desc: "", price: "8.0" },
        { name: "Ballantine's", group: "Scotch Whisky", desc: "", price: "8.0" },
        { name: "Cutty Sark", group: "Scotch Whisky", desc: "", price: "8.0" },
        { name: "Dewar's 8yo Illegal Smooth", group: "Scotch Whisky", desc: "", price: "8.0" },
        { name: "Johnnie Walker Black Label", group: "Scotch Whisky", desc: "", price: "9.0" },
        { name: "Chivas Regal 12 Years Old", group: "Scotch Whisky", desc: "", price: "9.0" },
        { name: "Dimple Golden Selection", group: "Scotch Whisky", desc: "", price: "9.0" },
        { name: "Cutty Sark 12 Years Old", group: "Scotch Whisky", desc: "", price: "10.0" },
        // American Whiskey
        { name: "Canadian", group: "American Whiskey", desc: "", price: "8.0" },
        { name: "Jack Daniel's", group: "American Whiskey", desc: "", price: "9.0" },
        { name: "Jack Daniel's Single Barrel", group: "American Whiskey", desc: "", price: "10.0" },
        { name: "Jack Daniel's Honey", group: "American Whiskey", desc: "", price: "9.0" },
        { name: "Four Roses", group: "American Whiskey", desc: "", price: "8.0" },
        { name: "Maker's Mark", group: "American Whiskey", desc: "", price: "9.0" },
        { name: "Woodford Reserve", group: "American Whiskey", desc: "", price: "10.0" },
        { name: "Bulleit Rye", group: "American Whiskey", desc: "", price: "10.0" },
        { name: "Bulleit Bourbon", group: "American Whiskey", desc: "", price: "9.0" },
        { name: "Buffalo Trace", group: "American Whiskey", desc: "", price: "10.0" },
        // Single Malt Whisky
        { name: "Cardhu 12 Years Old", group: "Single Malt Whisky", desc: "", price: "10.0" },
        { name: "Laphroaig 10 Years Old", group: "Single Malt Whisky", desc: "", price: "12.0" },
        { name: "Glenfiddich 12 Years Old", group: "Single Malt Whisky", desc: "", price: "10.0" },
        { name: "Talisker 10 Years Old", group: "Single Malt Whisky", desc: "", price: "12.0" },
        // Irish Whiskey
        { name: "Jameson", group: "Irish Whiskey", desc: "", price: "8.0" },
        { name: "Jameson Triple Triple", group: "Irish Whiskey", desc: "Marsala cask edition (επιβεβαίωσε τιμή)", price: "—" },
        { name: "Bushmills Original", group: "Irish Whiskey", desc: "", price: "8.0" },
        { name: "Bushmills 10 Years Old", group: "Irish Whiskey", desc: "", price: "10.0" },
        { name: "Tullamore Dew", group: "Irish Whiskey", desc: "", price: "8.0" },
        { name: "Jameson Black Barrel", group: "Irish Whiskey", desc: "", price: "10.0" },
        { name: "Teeling Small Batch", group: "Irish Whiskey", desc: "", price: "10.0" },
        { name: "Teeling Single Grain", group: "Irish Whiskey", desc: "", price: "11.0" },
        { name: "Dunville's Three Crowns", group: "Irish Whiskey", desc: "", price: "12.0" },
        // Japanese Whisky
        { name: "Nikka From The Barrel", group: "Japanese Whisky", desc: "", price: "14.0" }
      ]
    }
  ]
};
