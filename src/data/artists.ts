export type Artist = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  born: string;
  died: string;
  movement: string;
  ufficiRoom: string;
  masterpieces: string[];
  intro: string;
  atTheUffizi: string;
  biography: string;
  legacy: string;
  faq: { q: string; a: string }[];
};

export const artists: Artist[] = [
  {
    slug: "sandro-botticelli",
    name: "Sandro Botticelli",
    title: "Sandro Botticelli at the Uffizi | Birth of Venus & Primavera",
    description:
      "See Botticelli's Birth of Venus & Primavera at the Uffizi Gallery. Room guide, masterpieces & biography of Florence's most beloved painter.",
    h1: "Sandro Botticelli at the Uffizi Gallery",
    born: "c. 1445, Florence",
    died: "May 17, 1510, Florence",
    movement: "Early Renaissance",
    ufficiRoom: "Rooms 10-14 (Botticelli Hall)",
    masterpieces: [
      "Birth of Venus (c. 1485)",
      "Primavera (c. 1482)",
      "Adoration of the Magi (c. 1475)",
      "Madonna of the Magnificat (c. 1481)",
      "Pallas and the Centaur (c. 1482)",
    ],
    intro:
      "Walk into Rooms 10-14 of the Uffizi Gallery and you'll understand immediately why they call it Botticelli Hall. The Birth of Venus is directly ahead — and yes, it really is that beautiful in person. No photograph, no print, no screen can capture the luminous quality of Botticelli's colors or the sheer scale of this painting. At nearly 3 meters wide, Venus rising from the sea on her shell dominates the room like a vision.",
    atTheUffizi:
      "Botticelli Hall is the emotional heart of the Uffizi. The gallery dedicates five interconnected rooms (10-14) to this one artist — an honor reserved for the museum's most important painter. The Birth of Venus and Primavera face each other from opposite walls, creating a dialogue between two of the most recognized paintings in Western art.\n\nThe Birth of Venus (c. 1485) shows the goddess arriving on the shore of Cyprus, blown by the wind gods Zephyr and Chloris. The figure of Venus is borrowed from an ancient Roman sculpture — the Venus Pudica (modest Venus) — but Botticelli transforms her into something ethereal. Her impossibly long neck, flowing golden hair, and weightless pose create a figure that seems to exist outside of normal anatomy. That's intentional. Botticelli wasn't painting reality — he was painting an ideal.\n\nPrimavera (c. 1482) is the more complex work. Over 500 plant species have been botanically identified in the painting, all rendered with scientific accuracy. The nine figures — Mercury, the Three Graces, Venus, Cupid, Flora, Chloris, and Zephyr — create an allegory of spring that scholars have debated for centuries. Look for Cupid directly above Venus, blindfolded, aiming his arrow at the middle Grace.\n\nDon't miss the Adoration of the Magi — Botticelli painted himself into the crowd as a young man in a yellow robe, looking directly at you from the right edge of the painting. Several Medici family members are also portrayed among the Magi.",
    biography:
      "Alessandro di Mariano di Vanni Filipepi — known to the world as Sandro Botticelli — was born in Florence around 1445. His nickname \"Botticelli\" (little barrel) came from his older brother. He trained under Fra Filippo Lippi, one of the leading painters of the day, and quickly developed a distinctive style characterized by flowing lines, graceful figures, and luminous color.\n\nBotticelli's career was shaped by his close relationship with the Medici family. Lorenzo de' Medici (Lorenzo the Magnificent) was his greatest patron, commissioning works that combined classical mythology with Neoplatonic philosophy. The Birth of Venus and Primavera both emerged from this intellectual circle — they're not just beautiful paintings but complex philosophical statements about love, beauty, and the nature of the divine.\n\nIn the 1490s, Botticelli fell under the influence of the fiery Dominican preacher Savonarola, who condemned the vanity of secular art. According to Giorgio Vasari, Botticelli threw some of his own paintings onto Savonarola's \"Bonfire of the Vanities\" in 1497. His later works became increasingly religious and austere. He died in 1510, largely forgotten, and was buried in the Church of Ognissanti — just a short walk from the Uffizi.",
    legacy:
      "Botticelli was virtually forgotten for 300 years after his death. It was the Pre-Raphaelites in 19th-century England who rediscovered his work, captivated by the same flowing lines and ethereal beauty that captivate visitors today. Walter Pater's famous essay on Botticelli in 1870 helped launch a revival that has never stopped. Today, the Birth of Venus is one of the most reproduced images in the world — and seeing the original in Botticelli Hall remains one of Florence's most powerful experiences.",
    faq: [
      {
        q: "Where are Botticelli's paintings in the Uffizi?",
        a: "Botticelli's major works are in Rooms 10-14, known as Botticelli Hall. This is the most popular section of the Uffizi and can get very crowded between 10 AM and 2 PM.",
      },
      {
        q: "How many Botticelli paintings are in the Uffizi?",
        a: "The Uffizi holds approximately 20 works by Botticelli, making it the world's largest collection. The most famous are the Birth of Venus, Primavera, Adoration of the Magi, and Madonna of the Magnificat.",
      },
      {
        q: "What is the Birth of Venus about?",
        a: "The painting depicts the goddess Venus arriving at the shore of Cyprus after being born from the sea foam. She's blown to shore by the wind gods Zephyr and Chloris, while the Hour of Spring waits to clothe her. It's an allegory of divine beauty entering the mortal world.",
      },
    ],
  },
  {
    slug: "michelangelo",
    name: "Michelangelo",
    title: "Michelangelo at the Uffizi | Doni Tondo — Room 35 Guide",
    description:
      "See Michelangelo's Doni Tondo at the Uffizi Gallery Room 35. His only panel painting — vivid colors that foreshadow the Sistine Chapel ceiling.",
    h1: "Michelangelo at the Uffizi Gallery",
    born: "March 6, 1475, Caprese, Tuscany",
    died: "February 18, 1564, Rome",
    movement: "High Renaissance",
    ufficiRoom: "Room 35",
    masterpieces: ["Doni Tondo (Holy Family) (c. 1507)"],
    intro:
      "Michelangelo considered himself a sculptor first, a painter second. So the fact that only one panel painting by his hand exists makes the Doni Tondo in Room 35 of the Uffizi something extraordinary — a rare window into the mind of the artist who would go on to paint the Sistine Chapel ceiling. Stand in front of it and the colors hit you first: electric pinks, brilliant blues, acid greens. These are not the muted tones of typical Renaissance painting. These are the colors of revolution.",
    atTheUffizi:
      "The Doni Tondo (c. 1507) hangs in Room 35 alongside Leonardo da Vinci's works — a room that brings two titans of the Renaissance into direct confrontation. The circular format (tondo) was popular in Florence for domestic devotional paintings, but Michelangelo transformed it into something no one had seen before.\n\nThe Holy Family — Mary, Joseph, and the infant Jesus — twist in a complex spiral composition. Mary reaches behind her to receive the Christ child from Joseph, creating a dynamic, coiled energy that pulses through the painting. The muscular bodies, the sculptural modeling, the bold foreshortening — everything here anticipates the Sistine Chapel ceiling, which Michelangelo would begin just a year later.\n\nLook closely at the colors. They were even more shocking after a 1985 restoration revealed the original brilliance hidden under centuries of varnish and grime. The same controversy erupted when the Sistine Chapel ceiling was cleaned in the 1990s — turns out Michelangelo was always a colorist, not the muted painter people had assumed.\n\nThe original frame is as remarkable as the painting. Carved with grotesque heads, plant motifs, and five carved heads (possibly prophets), it's believed to be designed by Michelangelo himself — one of the finest Renaissance frames in existence.",
    biography:
      "Michelangelo di Lodovico Buonarroti Simoni was born in 1475 in Caprese, a small Tuscan town. His family moved to Florence when he was young, and the city shaped him profoundly. He apprenticed briefly with the painter Domenico Ghirlandaio, but it was Lorenzo de' Medici who recognized his talent and invited the teenage Michelangelo into the Medici household, where he studied classical sculpture in the Medici garden.\n\nFlorence gave the world Michelangelo, but his greatest works were created in Rome: the Pietà (1499), the Sistine Chapel ceiling (1508-1512), the Last Judgment (1536-1541), and the design of St. Peter's Basilica. Yet he always considered himself Florentine. The David (1504), carved from a marble block that two other sculptors had abandoned, stands in Florence's Accademia Gallery — and the Doni Tondo in the Uffizi remains his most personal painting.",
    legacy:
      "Michelangelo lived to 88 — an extraordinary age for the 16th century — and worked until the final days of his life. He was the first artist whose biography was published while he was still alive (by Giorgio Vasari in 1550), and he was already called 'Il Divino' (The Divine One) by his contemporaries. His influence on Western art is immeasurable — from the Baroque to Rodin to modern sculpture, his vision of the human body as an expression of spiritual power remains the standard.",
    faq: [
      {
        q: "What painting by Michelangelo is in the Uffizi?",
        a: "The Doni Tondo (Holy Family), c. 1507, in Room 35. It's Michelangelo's only completed panel painting — he primarily worked as a sculptor and fresco painter.",
      },
      {
        q: "Why is the Doni Tondo important?",
        a: "It's the only finished panel painting by Michelangelo, and it foreshadows the Sistine Chapel ceiling in its bold colors, sculptural figures, and complex composition. The original frame may also be designed by Michelangelo.",
      },
      {
        q: "Is Michelangelo's David at the Uffizi?",
        a: "No. The David is at the Galleria dell'Accademia, about 15 minutes' walk from the Uffizi. You can see both museums with a combo tour.",
      },
    ],
  },
  {
    slug: "leonardo-da-vinci",
    name: "Leonardo da Vinci",
    title: "Leonardo da Vinci at the Uffizi | Annunciation & Early Works",
    description:
      "See Leonardo da Vinci's Annunciation and Adoration of the Magi at the Uffizi Gallery. Room 35 guide & early Florentine masterpieces.",
    h1: "Leonardo da Vinci at the Uffizi Gallery",
    born: "April 15, 1452, Vinci, Tuscany",
    died: "May 2, 1519, Amboise, France",
    movement: "High Renaissance",
    ufficiRoom: "Room 35",
    masterpieces: [
      "Annunciation (c. 1472-1475)",
      "Adoration of the Magi (c. 1481, unfinished)",
      "Baptism of Christ (c. 1475, with Verrocchio)",
    ],
    intro:
      "Leonardo was barely 20 years old when he painted the Annunciation that now hangs in Room 35 of the Uffizi. Even at that age, his genius was unmistakable. Look at the angel's wings — they're not the stylized fans of medieval art but realistic bird wings, studied from actual specimens Leonardo dissected. Look at the landscape behind Mary — that hazy, blue-green distance dissolving into atmosphere is Leonardo's signature sfumato, a technique he would perfect over the next four decades.",
    atTheUffizi:
      "Room 35 pairs Leonardo with Michelangelo, creating one of the most extraordinary confrontations in art history. Leonardo's Annunciation dominates the wall with its serene precision, while Michelangelo's Doni Tondo pulses with muscular energy.\n\nThe Annunciation (c. 1472-1475) shows the Angel Gabriel visiting the Virgin Mary to announce that she will bear the Son of God. Leonardo sets the scene in an idealized garden with a marble lectern copied from a tomb designed by his teacher Verrocchio. The perspective is meticulously calculated — try viewing it from the right side of the painting, and the proportions snap into perfect alignment. Leonardo may have designed it to be viewed from a specific angle in its original church setting.\n\nThe Adoration of the Magi (c. 1481) is fascinatingly unfinished. Leonardo abandoned it when he left Florence for Milan in 1482, but what remains reveals his revolutionary working process. The underlying brown ink composition shows his obsession with movement, emotion, and the geometry of groups. Horses rear, figures gesture, and the entire scene spirals around the central figure of the Madonna. The painting is essentially an X-ray of Leonardo's mind at work.\n\nAlso look for the Baptism of Christ, created in the workshop of Andrea del Verrocchio. Leonardo painted the angel on the far left and parts of the landscape. According to Vasari, when Verrocchio saw Leonardo's angel, he was so humbled by his student's superiority that he vowed never to paint again.",
    biography:
      "Leonardo was born in 1452 in the small Tuscan town of Vinci. As the illegitimate son of a notary, he couldn't follow his father into the profession — a stroke of fate that pushed him toward art. He apprenticed in Florence under Andrea del Verrocchio, where he trained alongside Botticelli, Perugino, and Lorenzo di Credi.\n\nFlorence gave Leonardo his start, but he spent most of his career elsewhere — Milan, Rome, and finally France, where he died in 1519 as a guest of King Francis I. He left behind fewer than 20 completed paintings, but his notebooks — over 7,000 pages of drawings, scientific observations, and inventions — reveal a mind that encompassed art, anatomy, engineering, optics, geology, botany, and flight.",
    legacy:
      "Leonardo's paintings in the Uffizi represent his Florentine period — the foundation on which his later masterpieces (the Mona Lisa, the Last Supper, the Virgin of the Rocks) were built. Seeing the Annunciation in person, you can watch a 20-year-old genius in the process of becoming the greatest artist who ever lived.",
    faq: [
      {
        q: "Which Leonardo paintings are in the Uffizi?",
        a: "The Uffizi has three works by or attributed to Leonardo: the Annunciation (c. 1472-1475), the unfinished Adoration of the Magi (c. 1481), and his contribution to Verrocchio's Baptism of Christ. All are in Room 35.",
      },
      {
        q: "Is the Mona Lisa at the Uffizi?",
        a: "No. The Mona Lisa is at the Louvre in Paris. The Uffizi holds Leonardo's earlier works from his Florentine period, including the Annunciation and the unfinished Adoration of the Magi.",
      },
      {
        q: "How old was Leonardo when he painted the Annunciation?",
        a: "Leonardo was approximately 20-23 years old when he painted the Annunciation (c. 1472-1475). He was still working in Verrocchio's workshop in Florence at the time.",
      },
    ],
  },
  {
    slug: "giotto",
    name: "Giotto di Bondone",
    title: "Giotto at the Uffizi | Ognissanti Madonna — Room 2 Guide",
    description:
      "See Giotto's revolutionary Ognissanti Madonna at the Uffizi Room 2. How one painter broke from medieval art and invented Western painting.",
    h1: "Giotto at the Uffizi Gallery",
    born: "c. 1267, Vespignano, Florence",
    died: "January 8, 1337, Florence",
    movement: "Proto-Renaissance",
    ufficiRoom: "Room 2",
    masterpieces: ["Ognissanti Madonna (c. 1310)"],
    intro:
      "Room 2 of the Uffizi is where Western painting begins. Three enormous altarpieces fill the space — massive gold-ground images of the Madonna and Child by Cimabue, Duccio, and Giotto. They look similar at first glance. But stand in front of Giotto's Ognissanti Madonna (c. 1310) and then turn to Cimabue's version, and you'll see the revolution that changed art forever. Giotto's Madonna has weight. She sits on a real throne that creates real depth. Her face shows genuine human emotion. After Giotto, painting could never go back to being flat.",
    atTheUffizi:
      "Room 2 is deliberately designed to let you witness the birth of Renaissance painting in a single glance. The three great Maestà panels — by Cimabue (c. 1280), Duccio (c. 1285), and Giotto (c. 1310) — represent three stages in the revolution from medieval to modern art.\n\nGiotto's Ognissanti Madonna breaks from Byzantine convention in several crucial ways. The throne is rendered with consistent perspective, creating a convincing sense of three-dimensional space. The Madonna's body has genuine volume beneath her robes — you can sense her weight on the throne. The angels flanking the throne overlap naturally rather than being stacked in a symbolic pattern. And the faces — Mary, the Christ child, the angels — express real human emotion rather than the stylized masks of Byzantine art.\n\nThis might sound subtle, but in 1310 it was revolutionary. For a thousand years, Western art had been essentially flat and symbolic. Giotto single-handedly invented the idea that painting could represent the real, physical world. Every artist who followed — Masaccio, Botticelli, Leonardo, Michelangelo — built on the foundation Giotto laid in this room.",
    biography:
      "Giotto di Bondone was born around 1267 near Florence. The most famous story about his youth comes from Vasari: the painter Cimabue supposedly discovered the young Giotto drawing a sheep on a rock so realistically that Cimabue immediately took him as an apprentice. Whether or not this legend is true, Giotto trained under Cimabue and quickly surpassed his master.\n\nHis greatest achievement is the fresco cycle in the Scrovegni Chapel in Padua (c. 1305), which tells the life of Christ and the Virgin Mary with unprecedented emotional depth and spatial realism. In Florence, he designed the bell tower (campanile) of the Cathedral, which still bears his name. Dante wrote in the Divine Comedy that Giotto's fame had eclipsed Cimabue's — a remarkable tribute from one Florentine genius to another.",
    legacy:
      "Giotto is often called the 'Father of Western Painting.' Standing in Room 2 of the Uffizi, you can see exactly why. The Ognissanti Madonna is the hinge point between medieval and modern art — and everything else in the Uffizi follows from it.",
    faq: [
      {
        q: "Where is Giotto's painting in the Uffizi?",
        a: "Giotto's Ognissanti Madonna (c. 1310) is in Room 2, alongside similar works by Cimabue and Duccio. It's the first major room you enter in the gallery.",
      },
      {
        q: "Why is Giotto important?",
        a: "Giotto is called the 'Father of Western Painting' because he broke from the flat, symbolic style of medieval art and introduced naturalism — real space, real weight, real emotion. Every Renaissance artist built on his innovations.",
      },
      {
        q: "How old is Giotto's painting in the Uffizi?",
        a: "The Ognissanti Madonna dates to approximately 1310 — over 700 years old. It's one of the oldest and most historically significant paintings in the Uffizi.",
      },
    ],
  },
  {
    slug: "giorgio-vasari",
    name: "Giorgio Vasari",
    title: "Giorgio Vasari | Architect of the Uffizi & Vasari Corridor",
    description:
      "Giorgio Vasari designed the Uffizi building and the famous Vasari Corridor. Architect, painter, and author of Lives of the Artists.",
    h1: "Giorgio Vasari — Architect of the Uffizi",
    born: "July 30, 1511, Arezzo",
    died: "June 27, 1574, Florence",
    movement: "Mannerism",
    ufficiRoom: "Throughout the building",
    masterpieces: [
      "The Uffizi Building (1560-1580)",
      "Vasari Corridor (1565)",
      "Lives of the Most Excellent Painters, Sculptors, and Architects (1550/1568)",
    ],
    intro:
      "Every visitor to the Uffizi walks through Giorgio Vasari's greatest artwork without realizing it — the building itself. Vasari designed the Uffizi in 1560 as administrative offices for Cosimo I de' Medici, creating an elegant U-shaped structure that frames one of Florence's most beautiful piazzas. Five years later, he built the extraordinary elevated corridor that bears his name, connecting the Uffizi to the Palazzo Pitti across the Ponte Vecchio.",
    atTheUffizi:
      "Vasari's presence at the Uffizi is architectural rather than pictorial. The building's design — with its harmonious columns, open loggias, and classical proportions — is considered one of the finest examples of Renaissance civic architecture. The long corridor on the upper floor, originally designed to display the Medici's growing art collection, became the template for museum galleries across Europe.\n\nThe Vasari Corridor, built in an astonishing five months in 1565, remains one of Florence's most extraordinary structures. Running from the Uffizi, across the top of the Ponte Vecchio, and into the Palazzo Pitti, it allowed the Medici to move between their residences without setting foot on a public street. Today, after extensive restoration, it's open to visitors.\n\nVasari also painted prolifically — his work hangs in various rooms of the Uffizi, though his paintings are often overshadowed by the masters he wrote about. His self-portrait is part of the gallery's famous collection of artist self-portraits.",
    biography:
      "Born in Arezzo in 1511, Vasari trained in Florence under Andrea del Sarto and Michelangelo (briefly). He became a versatile and prolific artist — painter, architect, and writer. As court artist and architect to the Medici, he oversaw major projects including the renovation of the Palazzo Vecchio's interior, the design of the Uffizi, and the construction of the Vasari Corridor.\n\nBut Vasari's most enduring achievement isn't a building or a painting — it's a book. His 'Lives of the Most Excellent Painters, Sculptors, and Architects' (first published in 1550, expanded in 1568) is the foundation of Western art history. Without Vasari's biographies of Giotto, Leonardo, Michelangelo, Raphael, and dozens of others, much of what we know about Renaissance art would be lost.",
    legacy:
      "Vasari invented art history as a discipline. His concept that art progressed from the 'rebirth' (rinascita) of classical values to the perfection of Michelangelo gave us the very word 'Renaissance.' Every art history textbook written since owes a debt to Vasari's foundational work.",
    faq: [
      {
        q: "Did Vasari design the Uffizi?",
        a: "Yes. Giorgio Vasari designed the Uffizi building in 1560 for Cosimo I de' Medici. Originally administrative offices, it later became the gallery that houses the Medici art collection.",
      },
      {
        q: "What is the Vasari Corridor?",
        a: "An elevated passageway built by Vasari in 1565, connecting the Uffizi to the Palazzo Pitti across the Ponte Vecchio. It allowed the Medici to move between buildings without using public streets.",
      },
      {
        q: "What else did Vasari do besides architecture?",
        a: "Vasari wrote 'Lives of the Artists' — the foundational text of Western art history. He was also a prolific painter and renovated the interior of the Palazzo Vecchio.",
      },
    ],
  },
  {
    slug: "raphael",
    name: "Raphael",
    title: "Raphael at the Uffizi | Madonna of the Goldfinch — Room 66",
    description:
      "See Raphael's Madonna of the Goldfinch at the Uffizi Room 66. The painting that survived destruction — restoration story & Florence guide.",
    h1: "Raphael at the Uffizi Gallery",
    born: "April 6, 1483, Urbino",
    died: "April 6, 1520, Rome",
    movement: "High Renaissance",
    ufficiRoom: "Room 66",
    masterpieces: [
      "Madonna of the Goldfinch (1506)",
      "Self-Portrait (c. 1506)",
      "Pope Leo X with Cardinals (1518-1519)",
    ],
    intro:
      "Raphael died on his 37th birthday. In those brief years, he created works of such perfect harmony and grace that he was called 'the divine painter' even during his lifetime. The Uffizi holds several important Raphaels, including the Madonna of the Goldfinch — a painting with one of the most dramatic survival stories in art history.",
    atTheUffizi:
      "The Madonna of the Goldfinch (1506) in Room 66 was painted as a wedding gift for Raphael's friend Lorenzo Nasi. It shows the Virgin Mary seated in a landscape with the young John the Baptist offering a goldfinch — a symbol of Christ's future Passion — to the Christ child.\n\nIn 1547, a devastating landslide destroyed Lorenzo Nasi's house on the hill of San Giorgio. The painting was smashed into 17 fragments. Nasi's son immediately hired a restorer to reassemble the pieces, but the damage was severe. For centuries, the cracks were visible beneath layers of overpainting.\n\nIn 2008, a major restoration was completed using modern techniques including infrared and X-ray analysis. Restorers removed centuries of varnish and overpainting, revealing Raphael's original colors — luminous blues, warm reds, and soft greens that had been hidden for 400 years. If you look very carefully, you can still see faint lines where the fragments were joined.\n\nAlso in the Uffizi: Raphael's youthful Self-Portrait and the imposing Pope Leo X with Cardinals — a political portrait of the Medici pope that reveals Raphael's psychological depth. Leo X (Giovanni de' Medici) was Lorenzo the Magnificent's son, making this painting a direct link between the Medici collection and the Medici family.",
    biography:
      "Born in Urbino in 1483, Raphael studied under Perugino before moving to Florence in 1504, where he absorbed the innovations of Leonardo and Michelangelo. His Florentine period produced the Madonna paintings that made his reputation — serene, perfectly balanced compositions that seemed to achieve effortless grace.\n\nIn 1508, Pope Julius II called Raphael to Rome to paint the Vatican's Stanze (rooms). The result — particularly the School of Athens — is one of the supreme achievements of Western art. Raphael became the most sought-after painter in Europe, running a large workshop and taking on commissions for frescoes, portraits, altarpieces, and architectural designs. He died suddenly in Rome in 1520, aged just 37.",
    legacy:
      "Raphael represents the ideal of the High Renaissance — beauty, harmony, and grace brought to perfection. His influence on academic painting lasted for centuries. Seeing the Madonna of the Goldfinch at the Uffizi, you witness both his genius and the fragility of artistic survival.",
    faq: [
      {
        q: "Which Raphael paintings are at the Uffizi?",
        a: "The Uffizi holds the Madonna of the Goldfinch (1506), Raphael's Self-Portrait, Pope Leo X with Cardinals, and several other works. They're primarily in Room 66.",
      },
      {
        q: "What happened to the Madonna of the Goldfinch?",
        a: "In 1547, a landslide destroyed the house where it hung, shattering it into 17 pieces. It was reassembled but showed damage for centuries. A 2008 restoration revealed Raphael's original colors.",
      },
      {
        q: "How old was Raphael when he died?",
        a: "Raphael died on his 37th birthday (April 6, 1520) in Rome. Despite his short life, he created some of the most influential paintings in Western art.",
      },
    ],
  },
  {
    slug: "titian",
    name: "Titian",
    title: "Titian at the Uffizi | Venus of Urbino — Room 83 Guide",
    description:
      "See Titian's Venus of Urbino at the Uffizi Gallery Room 83. The most famous reclining nude in art history — analysis & visiting guide.",
    h1: "Titian at the Uffizi Gallery",
    born: "c. 1488, Pieve di Cadore, Veneto",
    died: "August 27, 1576, Venice",
    movement: "Venetian Renaissance",
    ufficiRoom: "Room 83",
    masterpieces: [
      "Venus of Urbino (1538)",
      "Flora (c. 1515)",
      "Portrait of Eleonora Gonzaga della Rovere (1536-1537)",
    ],
    intro:
      "Titian was the master of color. While Florentine painters built their art on drawing and line, Titian and the Venetian school built theirs on the sensual richness of oil paint. Nowhere is this more evident than in the Venus of Urbino (1538) in Room 83 — a painting so provocative that Mark Twain called it 'the foulest, the vilest, the obscenest picture the world possesses.' He was wrong. It's one of the greatest.",
    atTheUffizi:
      "The Venus of Urbino dominates Room 83. A nude woman lies on a bed, looking directly at the viewer with calm confidence. A small dog sleeps at her feet (symbol of fidelity), servants search a marriage chest in the background, and a myrtle plant sits on the windowsill (associated with Venus and lasting love).\n\nWhat makes this painting extraordinary isn't the nudity — it's the total command of oil paint. Titian builds the figure with layers of translucent color, creating skin that seems to glow from within. The contrast between the warm flesh tones and the cool white sheets, the deep green curtain and the golden light — this is painting as pure sensory experience.\n\nThe painting was commissioned by Guidobaldo II della Rovere, Duke of Urbino, possibly as a marriage gift. Whether the woman is Venus, a courtesan, or a bride has been debated for centuries. Whatever she is, she owns the room she's in — both in the painting and in the Uffizi.\n\nAlso in the Uffizi: Titian's Flora, a portrait of a woman holding flowers that became the archetype of Venetian beauty, and several Medici portraits.",
    biography:
      "Tiziano Vecellio was born around 1488 in the Dolomite mountains of northern Italy. He moved to Venice as a child and trained under the Bellini brothers and Giorgione. By his mid-twenties, he was the dominant painter in Venice — a position he held for over 60 years.\n\nTitian worked for the most powerful figures in Europe: popes, emperors, kings, and doges. His portraits of Charles V established the model for state portraiture that lasted through the 18th century. He continued painting into his late eighties, his style becoming increasingly loose and expressive — some late works look almost impressionistic.",
    legacy:
      "Titian's influence on painting is immense. Rubens, Velázquez, Rembrandt, and countless others studied his work. The Venus of Urbino directly inspired Manet's Olympia (1863), one of the defining paintings of modern art. Seeing the original at the Uffizi, you understand why every painter who came after felt compelled to respond to it.",
    faq: [
      {
        q: "Where is Titian's Venus of Urbino in the Uffizi?",
        a: "The Venus of Urbino is in Room 83 of the Uffizi Gallery. It's one of the most visited paintings in the museum.",
      },
      {
        q: "Why is the Venus of Urbino famous?",
        a: "It's considered the greatest reclining nude in Western art — a revolutionary work for its direct gaze, sensual use of color, and psychological presence. It influenced centuries of artists from Velázquez to Manet.",
      },
      {
        q: "Who is the woman in Venus of Urbino?",
        a: "Her identity is debated — she may be Venus (the mythological goddess), a bride, or a portrait of a specific woman. The painting was commissioned by the Duke of Urbino, possibly as a marriage gift.",
      },
    ],
  },
  {
    slug: "rembrandt",
    name: "Rembrandt",
    title: "Rembrandt at the Uffizi | Self-Portraits — Room 49 Guide",
    description:
      "See Rembrandt's self-portraits at the Uffizi Gallery. The Dutch master's works in Florence — Room 49 guide and visiting information.",
    h1: "Rembrandt at the Uffizi Gallery",
    born: "July 15, 1606, Leiden, Netherlands",
    died: "October 4, 1669, Amsterdam",
    movement: "Dutch Golden Age / Baroque",
    ufficiRoom: "Room 49",
    masterpieces: [
      "Self-Portrait as a Young Man (c. 1634)",
      "Self-Portrait as an Old Man (c. 1664)",
    ],
    intro:
      "Rembrandt may seem like an unexpected presence in a gallery dominated by Italian Renaissance masters, but the Medici collected widely, and the two Rembrandt self-portraits at the Uffizi are among the most psychologically penetrating works in the entire collection. Painted thirty years apart, they document one man's journey from youthful confidence to the weathered wisdom of old age.",
    atTheUffizi:
      "Room 49 holds the Uffizi's Northern European collection, and Rembrandt's two self-portraits are its crown jewels. The early self-portrait (c. 1634) shows a young man at the height of his powers — prosperous, confident, dressed in fine clothing. The late self-portrait (c. 1664) shows an older man who has known bankruptcy, the death of his wife and son, and professional decline. But the gaze is unflinching, and the painting technique is masterful — broad, expressive brushstrokes that seem to dissolve form into light.\n\nThese paintings are part of the Uffizi's famous collection of artist self-portraits, which began when Cardinal Leopoldo de' Medici started collecting them in the 17th century. The collection now numbers over 1,800 works.",
    biography:
      "Rembrandt Harmenszoon van Rijn was born in Leiden in 1606 and spent most of his life in Amsterdam. He was the greatest painter of the Dutch Golden Age — a master of light and shadow (chiaroscuro) who brought unprecedented psychological depth to portraiture, history painting, and self-portraiture.\n\nHe painted, drew, or etched approximately 80 self-portraits over his lifetime — the most extensive visual autobiography in art history. Each one is an honest record of aging, emotion, and self-examination. The two at the Uffizi represent this extraordinary project at two pivotal moments.",
    legacy:
      "Rembrandt's self-portraits influenced every artist who attempted to paint themselves honestly — from Van Gogh to Frida Kahlo to Lucian Freud. Seeing both Uffizi self-portraits side by side is a uniquely moving experience.",
    faq: [
      {
        q: "What Rembrandt paintings are at the Uffizi?",
        a: "The Uffizi holds two Rembrandt self-portraits — one from his youth (c. 1634) and one from old age (c. 1664). They're in Room 49 with other Northern European works.",
      },
      {
        q: "Why are there Rembrandt paintings in Florence?",
        a: "The Medici family collected art from across Europe. Cardinal Leopoldo de' Medici began the Uffizi's famous collection of artist self-portraits in the 17th century, which now includes over 1,800 works.",
      },
      {
        q: "How many self-portraits did Rembrandt paint?",
        a: "Rembrandt created approximately 80 self-portraits (paintings, etchings, and drawings) over his lifetime — the most extensive visual autobiography in art history.",
      },
    ],
  },
  {
    slug: "filippo-brunelleschi",
    name: "Filippo Brunelleschi",
    title: "Filippo Brunelleschi | Duomo Architect & Florence Connection",
    description:
      "Filippo Brunelleschi — architect of Florence's iconic Duomo dome. His connection to the Uffizi and the Renaissance revolution in architecture.",
    h1: "Filippo Brunelleschi — Architect of the Duomo",
    born: "1377, Florence",
    died: "April 15, 1446, Florence",
    movement: "Early Renaissance",
    ufficiRoom: "Referenced in Room 7 context",
    masterpieces: [
      "Dome of Florence Cathedral (1420-1436)",
      "Ospedale degli Innocenti (1419)",
      "San Lorenzo Basilica (1421-1459)",
    ],
    intro:
      "You can see Brunelleschi's greatest masterpiece from the Uffizi's panoramic terrace — the immense dome of Florence Cathedral, rising above the city's rooftops like a geometric miracle. Brunelleschi wasn't a painter, so his works don't hang on the Uffizi's walls. But without him, the Renaissance as we know it might never have happened. He invented linear perspective, the mathematical system that every painter in the Uffizi used to create the illusion of depth.",
    atTheUffizi:
      "Brunelleschi's connection to the Uffizi is indirect but profound. The mathematical perspective system he demonstrated in Florence around 1415 — using mirrors and painted panels outside the Baptistery — became the foundation of Renaissance painting. Every painting in the Uffizi that shows realistic space, from Masaccio to Raphael, relies on Brunelleschi's discovery.\n\nFrom the Uffizi's second-floor terrace and the windows along the east corridor, you can see his Duomo dome dominating the Florence skyline. Built between 1420 and 1436 without temporary wooden scaffolding (an engineering feat not repeated for centuries), the dome remains the largest masonry dome ever constructed.",
    biography:
      "Brunelleschi was born in Florence in 1377 and trained as a goldsmith and sculptor. In 1401, he competed with Lorenzo Ghiberti for the commission to design the Baptistery doors — and lost. That defeat redirected his career toward architecture and engineering, where he would change the world.\n\nHis dome for the Florence Cathedral solved a problem that had baffled builders for over a century: how to span a 42-meter opening without traditional scaffolding. Brunelleschi invented a double-shell construction, using a herringbone brick pattern and ingenious lifting machines of his own design. The project took 16 years and remains one of the supreme achievements of engineering.",
    legacy:
      "Brunelleschi launched Renaissance architecture and invented linear perspective — the mathematical basis for representing three-dimensional space on a flat surface. Every painting you see in the Uffizi owes something to his discovery.",
    faq: [
      {
        q: "Are there Brunelleschi works in the Uffizi?",
        a: "Brunelleschi was an architect, not a painter, so his works don't hang in the Uffizi. However, his dome is visible from the Uffizi terrace, and his invention of linear perspective is the foundation of Renaissance painting throughout the gallery.",
      },
      {
        q: "What did Brunelleschi build?",
        a: "His most famous work is the dome of Florence Cathedral (1420-1436) — the largest masonry dome ever built. He also designed the Ospedale degli Innocenti and the Basilica of San Lorenzo in Florence.",
      },
      {
        q: "Why is Brunelleschi important for painting?",
        a: "He invented linear perspective around 1415 — the mathematical system for creating realistic depth on a flat surface. Every Renaissance painter in the Uffizi used his discovery.",
      },
    ],
  },
  {
    slug: "dante-alighieri",
    name: "Dante Alighieri",
    title: "Dante Alighieri & the Uffizi | Florence's Greatest Poet",
    description:
      "Dante Alighieri — Florence's greatest poet and author of the Divine Comedy. His portraits at the Uffizi and his deep connection to the city.",
    h1: "Dante Alighieri — Florence's Poet at the Uffizi",
    born: "c. 1265, Florence",
    died: "September 14, 1321, Ravenna",
    movement: "Medieval / Proto-Renaissance Literature",
    ufficiRoom: "Various rooms (portraits & references)",
    masterpieces: [
      "Divine Comedy (c. 1308-1321)",
      "La Vita Nuova (c. 1294)",
      "Portraits by various Uffizi artists",
    ],
    intro:
      "Dante Alighieri wasn't a painter — he was Florence's greatest poet and the author of the Divine Comedy, one of the supreme achievements of world literature. But his presence haunts the Uffizi. His portrait appears in several paintings throughout the gallery, and his influence on Florentine culture shaped the very world that produced the artists whose works fill these rooms.",
    atTheUffizi:
      "Dante appears in multiple works throughout the Uffizi, reflecting his status as Florence's most revered citizen. Andrea del Castagno's fresco cycle (originally from the Villa Carducci) includes a striking portrait of Dante in his characteristic red cap and laurel wreath. Botticelli illustrated the Divine Comedy with a series of drawings, some of which relate to the literary themes in his paintings.\n\nDante's influence on Uffizi artists runs deeper than portraits. His vision of the afterlife — the terrifying Inferno, the hopeful Purgatorio, and the transcendent Paradiso — inspired countless paintings and sculptures throughout the Renaissance. Michelangelo's Last Judgment in the Sistine Chapel draws heavily on Dante's Inferno, and Botticelli spent years creating illustrations for the Divine Comedy.",
    biography:
      "Born in Florence around 1265, Dante belonged to a minor noble family. His early life was shaped by his love for Beatrice Portinari, whom he first saw when both were children. Though they rarely spoke and she married another man, Beatrice became Dante's lifelong muse. After her death in 1290, he channeled his grief into La Vita Nuova and ultimately the Divine Comedy.\n\nDante was also deeply involved in Florentine politics. As a White Guelph, he opposed papal interference in city affairs. When the Black Guelphs seized power in 1302, Dante was exiled from Florence and never returned. He spent the rest of his life wandering between Italian cities, writing the work that would make him immortal. He died in Ravenna in 1321, where his tomb remains — Florence has never stopped trying to get his bones back.",
    legacy:
      "Dante is called the 'Father of the Italian Language' — he wrote the Divine Comedy in vernacular Italian rather than Latin, establishing Tuscan dialect as the basis of modern Italian. His influence on art, literature, and Florentine identity is immeasurable.",
    faq: [
      {
        q: "Are there Dante paintings in the Uffizi?",
        a: "Dante appears as a subject in several paintings at the Uffizi, including portraits by Andrea del Castagno and other Florentine artists. As a poet, he didn't create visual art himself.",
      },
      {
        q: "Why is Dante important to Florence?",
        a: "Dante is Florence's most famous citizen and the 'Father of the Italian Language.' His Divine Comedy (1308-1321) was written in Tuscan Italian rather than Latin, establishing the foundation of modern Italian. His influence shaped the cultural world that produced the Uffizi's artists.",
      },
      {
        q: "Was Dante exiled from Florence?",
        a: "Yes. In 1302, Dante was exiled after his political faction lost power. He never returned to Florence and died in Ravenna in 1321. Florence has repeatedly requested the return of his remains.",
      },
    ],
  },
  {
    slug: "piero-della-francesca",
    name: "Piero della Francesca",
    title: "Piero della Francesca at the Uffizi | Duke of Urbino Portraits",
    description:
      "See Piero della Francesca's famous Duke & Duchess of Urbino portraits at the Uffizi Room 8. Renaissance portraiture at its finest.",
    h1: "Piero della Francesca at the Uffizi Gallery",
    born: "c. 1415, Borgo Sansepolcro, Tuscany",
    died: "October 12, 1492, Borgo Sansepolcro",
    movement: "Early Renaissance",
    ufficiRoom: "Room 8",
    masterpieces: [
      "Portraits of the Duke and Duchess of Urbino (c. 1465-1472)",
    ],
    intro:
      "Piero della Francesca's double portrait of Federico da Montefeltro and his wife Battista Sforza is one of the most iconic images of the Italian Renaissance. Painted in profile against a vast Umbrian landscape, the Duke and Duchess face each other across the frame with the serene dignity of Roman coins. The painting is as much about mathematics and light as it is about power.",
    atTheUffizi:
      "Room 8 holds one of the Uffizi's most recognizable works: the diptych (two-panel painting) of the Duke and Duchess of Urbino. The panels are painted on both sides — the front shows the famous profile portraits, while the reverse depicts both figures riding triumphal chariots accompanied by allegorical figures.\n\nFederico da Montefeltro, Duke of Urbino, was one of the most successful military commanders of the 15th century. He's shown in left profile — always — because he lost his right eye and the bridge of his nose in a tournament. Rather than hide the deformity, Piero incorporated it into the portrait with characteristic honesty.\n\nThe landscapes behind both figures are extraordinary. Piero renders the rolling hills, rivers, and towns of the Marche region with a precision and luminosity that anticipates Dutch landscape painting by two centuries. The light is perfectly calibrated — everything bathes in a clear, cool atmosphere that creates a sense of infinite space.\n\nPiero was also a mathematician who wrote treatises on perspective and geometry. His paintings reflect this dual passion — every element is precisely calculated, yet the result feels natural and serene rather than rigid.",
    biography:
      "Born around 1415 in the Tuscan town of Borgo Sansepolcro, Piero studied in Florence but spent much of his career working for courts across central Italy. His greatest fresco cycle — the Legend of the True Cross in Arezzo — is one of the masterpieces of the Early Renaissance.\n\nPiero was a true Renaissance polymath: painter, mathematician, and theorist. His treatises on perspective (De Prospectiva Pingendi) and geometry influenced artists and mathematicians for generations. He went blind in his later years and stopped painting, devoting himself entirely to mathematics until his death in 1492.",
    legacy:
      "Piero della Francesca was largely forgotten after his death and only rediscovered in the 20th century. Today he's recognized as one of the greatest painters of the Early Renaissance, admired for his luminous color, geometric precision, and profound sense of stillness.",
    faq: [
      {
        q: "Where is Piero della Francesca's painting in the Uffizi?",
        a: "The double portrait of the Duke and Duchess of Urbino is in Room 8. The panels are painted on both sides — don't miss the reverse showing triumphal processions.",
      },
      {
        q: "Why is the Duke shown in profile?",
        a: "Federico da Montefeltro lost his right eye and the bridge of his nose in a tournament. He's always shown from the left side. Piero incorporated this into the portrait with characteristic directness.",
      },
      {
        q: "What makes Piero della Francesca special?",
        a: "Piero combined painting with mathematics — his works have a unique luminosity, geometric precision, and sense of calm. He also wrote influential treatises on perspective that shaped Renaissance art.",
      },
    ],
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}

export function getAllArtistSlugs(): string[] {
  return artists.map((a) => a.slug);
}

// Locale-aware getters
import { artistsIt } from "./artists-it";
import { artistsDe } from "./artists-de";
import { artistsFr } from "./artists-fr";
import { artistsEs } from "./artists-es";

const translationsMap: Record<string, Record<string, Omit<Artist, "slug">>> = {
  it: artistsIt,
  de: artistsDe,
  fr: artistsFr,
  es: artistsEs,
};

export function getLocalizedArtists(locale: string): Artist[] {
  if (locale === "en") return artists;
  const trans = translationsMap[locale] || {};
  return artists.map((a) => {
    const t = trans[a.slug];
    return t ? { ...a, ...t } : a;
  });
}

export function getLocalizedArtistBySlug(
  slug: string,
  locale: string
): Artist | undefined {
  const base = artists.find((a) => a.slug === slug);
  if (!base || locale === "en") return base;
  const t = translationsMap[locale]?.[slug];
  return t ? { ...base, ...t } : base;
}
