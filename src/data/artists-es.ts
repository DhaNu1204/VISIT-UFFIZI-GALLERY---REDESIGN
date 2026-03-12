import type { Artist } from "./artists";
export type ArtistI18n = Omit<Artist, "slug">;
export const artistsEs: Record<string, ArtistI18n> = {
  "sandro-botticelli": {
    name: "Sandro Botticelli",
    title: "Botticelli en los Uffizi | Nacimiento de Venus",
    description:
      "Descubre el Nacimiento de Venus y la Primavera de Botticelli en la Galeria Uffizi. Guia de salas, obras maestras y biografia del pintor mas querido de Florencia.",
    h1: "Sandro Botticelli en la Galeria Uffizi",
    born: "c. 1445, Florencia",
    died: "17 de mayo de 1510, Florencia",
    movement: "Renacimiento temprano",
    ufficiRoom: "Salas 10-14 (Sala Botticelli)",
    masterpieces: [
      "Nacimiento de Venus (c. 1485)",
      "Primavera (c. 1482)",
      "Adoracion de los Magos (c. 1475)",
      "Madonna del Magnificat (c. 1481)",
      "Palas y el Centauro (c. 1482)",
    ],
    intro:
      "Entra en las Salas 10-14 de la Galeria Uffizi y entenderas de inmediato por que las llaman la Sala Botticelli. El Nacimiento de Venus esta justo delante de ti — y si, realmente es asi de hermoso en persona. Ninguna fotografia, ninguna reproduccion, ninguna pantalla puede captar la calidad luminosa de los colores de Botticelli ni la escala impresionante de esta pintura. Con casi 3 metros de ancho, Venus emergiendo del mar sobre su concha domina la sala como una vision.",
    atTheUffizi:
      'La Sala Botticelli es el corazon emocional de los Uffizi. La galeria dedica cinco salas interconectadas (10-14) a un solo artista — un honor reservado para el pintor mas importante del museo. El Nacimiento de Venus y la Primavera se miran desde paredes opuestas, creando un dialogo entre dos de las pinturas mas reconocidas del arte occidental.\n\nEl Nacimiento de Venus (c. 1485) muestra a la diosa llegando a la costa de Chipre, impulsada por los dioses del viento Zefiro y Cloris. La figura de Venus esta inspirada en una escultura romana antigua — la Venus Pudica (Venus modesta) — pero Botticelli la transforma en algo etereo. Su cuello imposiblemente largo, su cabello dorado ondeante y su pose ingrávida crean una figura que parece existir fuera de la anatomia normal. Es intencional. Botticelli no estaba pintando la realidad — estaba pintando un ideal.\n\nLa Primavera (c. 1482) es la obra mas compleja. Se han identificado botanicamente mas de 500 especies de plantas en el cuadro, todas representadas con precision cientifica. Las nueve figuras — Mercurio, las Tres Gracias, Venus, Cupido, Flora, Cloris y Zefiro — crean una alegoria de la primavera que los estudiosos han debatido durante siglos. Busca a Cupido justo encima de Venus, con los ojos vendados, apuntando su flecha hacia la Gracia central.\n\nNo te pierdas la Adoracion de los Magos — Botticelli se pinto a si mismo entre la multitud como un joven con tunica amarilla, mirandote directamente desde el borde derecho del cuadro. Varios miembros de la familia Medici tambien aparecen retratados entre los Magos.',
    biography:
      'Alessandro di Mariano di Vanni Filipepi — conocido en todo el mundo como Sandro Botticelli — nacio en Florencia hacia 1445. Su apodo "Botticelli" (barrilito) provenia de su hermano mayor. Se formo con Fra Filippo Lippi, uno de los principales pintores de la epoca, y rapidamente desarrollo un estilo distintivo caracterizado por lineas fluidas, figuras elegantes y un color luminoso.\n\nLa carrera de Botticelli estuvo marcada por su estrecha relacion con la familia Medici. Lorenzo de Medici (Lorenzo el Magnifico) fue su mayor mecenas, encargando obras que combinaban mitologia clasica con filosofia neoplatonica. El Nacimiento de Venus y la Primavera surgieron de este circulo intelectual — no son solo pinturas hermosas, sino complejas declaraciones filosoficas sobre el amor, la belleza y la naturaleza de lo divino.\n\nEn la decada de 1490, Botticelli cayo bajo la influencia del ardiente predicador dominico Savonarola, que condenaba la vanidad del arte secular. Segun Giorgio Vasari, Botticelli arrojo algunas de sus propias pinturas a la "Hoguera de las Vanidades" de Savonarola en 1497. Sus obras posteriores se volvieron cada vez mas religiosas y austeras. Murio en 1510, practicamente olvidado, y fue enterrado en la iglesia de Ognissanti — a pocos minutos a pie de los Uffizi.',
    legacy:
      "Botticelli fue practicamente olvidado durante 300 anos tras su muerte. Fueron los prerrafaelistas en la Inglaterra del siglo XIX quienes redescubrieron su obra, cautivados por las mismas lineas fluidas y la belleza eterea que cautivan a los visitantes hoy. El famoso ensayo de Walter Pater sobre Botticelli en 1870 ayudo a lanzar un renacimiento que no se ha detenido. Hoy, el Nacimiento de Venus es una de las imagenes mas reproducidas del mundo — y ver el original en la Sala Botticelli sigue siendo una de las experiencias mas poderosas de Florencia.",
    faq: [
      {
        q: "¿Donde estan los cuadros de Botticelli en los Uffizi?",
        a: "Las obras principales de Botticelli estan en las Salas 10-14, conocidas como la Sala Botticelli. Es la seccion mas popular de los Uffizi y puede estar muy concurrida entre las 10 de la manana y las 2 de la tarde.",
      },
      {
        q: "¿Cuantos cuadros de Botticelli hay en los Uffizi?",
        a: "Los Uffizi albergan aproximadamente 20 obras de Botticelli, lo que la convierte en la mayor coleccion del mundo. Las mas famosas son el Nacimiento de Venus, la Primavera, la Adoracion de los Magos y la Madonna del Magnificat.",
      },
      {
        q: "¿De que trata el Nacimiento de Venus?",
        a: "El cuadro representa a la diosa Venus llegando a la costa de Chipre tras nacer de la espuma del mar. Es impulsada hacia la orilla por los dioses del viento Zefiro y Cloris, mientras la Hora de la Primavera espera para cubrirla con un manto. Es una alegoria de la belleza divina entrando en el mundo mortal.",
      },
    ],
  },
  "michelangelo": {
    name: "Miguel Angel",
    title: "Miguel Angel en los Uffizi | Tondo Doni - Sala 35",
    description:
      "Descubre el Tondo Doni de Miguel Angel en la Sala 35 de los Uffizi. Su unica pintura sobre tabla — colores vibrantes que anticipan la Capilla Sixtina.",
    h1: "Miguel Angel en la Galeria Uffizi",
    born: "6 de marzo de 1475, Caprese, Toscana",
    died: "18 de febrero de 1564, Roma",
    movement: "Alto Renacimiento",
    ufficiRoom: "Sala 35",
    masterpieces: ["Tondo Doni (Sagrada Familia) (c. 1507)"],
    intro:
      "Miguel Angel se consideraba ante todo escultor, y en segundo lugar pintor. Asi que el hecho de que solo exista una pintura sobre tabla de su mano convierte al Tondo Doni en la Sala 35 de los Uffizi en algo extraordinario — una ventana unica a la mente del artista que pintaria el techo de la Capilla Sixtina. Colocate frente a el y los colores te impactaran primero: rosas electricos, azules brillantes, verdes acidos. Estos no son los tonos apagados de la pintura renacentista tipica. Son los colores de la revolucion.",
    atTheUffizi:
      "El Tondo Doni (c. 1507) cuelga en la Sala 35 junto a las obras de Leonardo da Vinci — una sala que pone a dos titanes del Renacimiento en confrontacion directa. El formato circular (tondo) era popular en Florencia para pinturas devocionales domesticas, pero Miguel Angel lo transformo en algo que nadie habia visto antes.\n\nLa Sagrada Familia — Maria, Jose y el nino Jesus — se retuerce en una compleja composicion en espiral. Maria se gira hacia atras para recibir al nino de manos de Jose, creando una energia dinamica y enrollada que pulsa a traves de la pintura. Los cuerpos musculosos, el modelado escultural, los audaces escorzos — todo aqui anticipa el techo de la Capilla Sixtina, que Miguel Angel comenzaria apenas un ano despues.\n\nObserva de cerca los colores. Fueron aun mas impactantes tras una restauracion en 1985 que revelo el brillo original oculto bajo siglos de barniz y suciedad. La misma controversia surgio cuando se limpio el techo de la Capilla Sixtina en los anos 90 — resulta que Miguel Angel siempre fue un colorista, no el pintor de tonos apagados que la gente habia supuesto.\n\nEl marco original es tan extraordinario como la pintura. Tallado con cabezas grotescas, motivos vegetales y cinco cabezas esculpidas (posiblemente profetas), se cree que fue disenado por el propio Miguel Angel — uno de los marcos renacentistas mas finos que existen.",
    biography:
      "Michelangelo di Lodovico Buonarroti Simoni nacio en 1475 en Caprese, un pequeno pueblo toscano. Su familia se traslado a Florencia cuando era joven, y la ciudad lo marco profundamente. Fue aprendiz brevemente del pintor Domenico Ghirlandaio, pero fue Lorenzo de Medici quien reconocio su talento e invito al joven Miguel Angel al hogar de los Medici, donde estudio escultura clasica en el jardin de los Medici.\n\nFlorencia dio al mundo a Miguel Angel, pero sus obras mas grandiosas se crearon en Roma: la Piedad (1499), el techo de la Capilla Sixtina (1508-1512), el Juicio Final (1536-1541) y el diseno de la Basilica de San Pedro. Sin embargo, siempre se considero florentino. El David (1504), tallado en un bloque de marmol que otros dos escultores habian abandonado, se encuentra en la Galeria de la Academia de Florencia — y el Tondo Doni en los Uffizi sigue siendo su pintura mas personal.",
    legacy:
      'Miguel Angel vivio hasta los 88 anos — una edad extraordinaria para el siglo XVI — y trabajo hasta los ultimos dias de su vida. Fue el primer artista cuya biografia se publico estando aun vivo (por Giorgio Vasari en 1550), y ya era llamado "Il Divino" (El Divino) por sus contemporaneos. Su influencia en el arte occidental es inconmensurable — desde el Barroco hasta Rodin y la escultura moderna, su vision del cuerpo humano como expresion del poder espiritual sigue siendo el estandar.',
    faq: [
      {
        q: "¿Que pintura de Miguel Angel hay en los Uffizi?",
        a: "El Tondo Doni (Sagrada Familia), c. 1507, en la Sala 35. Es la unica pintura sobre tabla completada por Miguel Angel — trabajo principalmente como escultor y pintor de frescos.",
      },
      {
        q: "¿Por que es importante el Tondo Doni?",
        a: "Es la unica pintura sobre tabla terminada de Miguel Angel, y anticipa el techo de la Capilla Sixtina en sus colores audaces, figuras esculturales y composicion compleja. El marco original tambien puede haber sido disenado por Miguel Angel.",
      },
      {
        q: "¿Esta el David de Miguel Angel en los Uffizi?",
        a: "No. El David esta en la Galeria de la Academia, a unos 15 minutos a pie de los Uffizi. Puedes visitar ambos museos con un tour combinado.",
      },
    ],
  },
  "leonardo-da-vinci": {
    name: "Leonardo da Vinci",
    title: "Leonardo da Vinci en los Uffizi | La Anunciacion",
    description:
      "Descubre la Anunciacion y la Adoracion de los Magos de Leonardo da Vinci en la Galeria Uffizi. Guia de la Sala 35 y obras maestras florentinas.",
    h1: "Leonardo da Vinci en la Galeria Uffizi",
    born: "15 de abril de 1452, Vinci, Toscana",
    died: "2 de mayo de 1519, Amboise, Francia",
    movement: "Alto Renacimiento",
    ufficiRoom: "Sala 35",
    masterpieces: [
      "La Anunciacion (c. 1472-1475)",
      "Adoracion de los Magos (c. 1481, inacabada)",
      "Bautismo de Cristo (c. 1475, con Verrocchio)",
    ],
    intro:
      "Leonardo tenia apenas 20 anos cuando pinto la Anunciacion que hoy cuelga en la Sala 35 de los Uffizi. Incluso a esa edad, su genio era inconfundible. Observa las alas del angel — no son los abanicos estilizados del arte medieval, sino alas de pajaro realistas, estudiadas a partir de especimenes reales que Leonardo habia diseccionado. Mira el paisaje detras de Maria — esa distancia borrosa, azul verdosa que se disuelve en la atmosfera es el sfumato caracteristico de Leonardo, una tecnica que perfeccionaria durante las cuatro decadas siguientes.",
    atTheUffizi:
      "La Sala 35 reune a Leonardo con Miguel Angel, creando una de las confrontaciones mas extraordinarias de la historia del arte. La Anunciacion de Leonardo domina la pared con su precision serena, mientras el Tondo Doni de Miguel Angel pulsa con energia muscular.\n\nLa Anunciacion (c. 1472-1475) muestra al Angel Gabriel visitando a la Virgen Maria para anunciarle que dara a luz al Hijo de Dios. Leonardo situa la escena en un jardin idealizado con un atril de marmol copiado de una tumba disenada por su maestro Verrocchio. La perspectiva esta meticulosamente calculada — intenta verla desde el lado derecho del cuadro, y las proporciones encajan en perfecta alineacion. Leonardo pudo haberla disenado para ser vista desde un angulo especifico en su iglesia original.\n\nLa Adoracion de los Magos (c. 1481) esta fascinantemente inacabada. Leonardo la abandono cuando dejo Florencia para ir a Milan en 1482, pero lo que queda revela su proceso de trabajo revolucionario. La composicion subyacente en tinta marron muestra su obsesion por el movimiento, la emocion y la geometria de los grupos. Los caballos se encabritan, las figuras gesticulan, y toda la escena gira en espiral alrededor de la figura central de la Madonna. El cuadro es esencialmente una radiografia de la mente de Leonardo en accion.\n\nBusca tambien el Bautismo de Cristo, creado en el taller de Andrea del Verrocchio. Leonardo pinto el angel del extremo izquierdo y partes del paisaje. Segun Vasari, cuando Verrocchio vio el angel de Leonardo, quedo tan impresionado por la superioridad de su alumno que juro no volver a pintar.",
    biography:
      "Leonardo nacio en 1452 en el pequeno pueblo toscano de Vinci. Como hijo ilegitimo de un notario, no podia seguir la profesion de su padre — un giro del destino que lo empujo hacia el arte. Fue aprendiz en Florencia con Andrea del Verrocchio, donde se formo junto a Botticelli, Perugino y Lorenzo di Credi.\n\nFlorencia le dio a Leonardo sus comienzos, pero paso la mayor parte de su carrera en otros lugares — Milan, Roma y finalmente Francia, donde murio en 1519 como huesped del rey Francisco I. Dejo menos de 20 pinturas terminadas, pero sus cuadernos — mas de 7.000 paginas de dibujos, observaciones cientificas e inventos — revelan una mente que abarcaba arte, anatomia, ingenieria, optica, geologia, botanica y vuelo.",
    legacy:
      "Las pinturas de Leonardo en los Uffizi representan su periodo florentino — los cimientos sobre los que se construyeron sus obras maestras posteriores (la Mona Lisa, la Ultima Cena, la Virgen de las Rocas). Al ver la Anunciacion en persona, puedes observar a un genio de 20 anos en el proceso de convertirse en el artista mas grande que jamas haya existido.",
    faq: [
      {
        q: "¿Que pinturas de Leonardo hay en los Uffizi?",
        a: "Los Uffizi tienen tres obras de o atribuidas a Leonardo: la Anunciacion (c. 1472-1475), la inacabada Adoracion de los Magos (c. 1481) y su contribucion al Bautismo de Cristo de Verrocchio. Todas estan en la Sala 35.",
      },
      {
        q: "¿Esta la Mona Lisa en los Uffizi?",
        a: "No. La Mona Lisa esta en el Museo del Louvre en Paris. Los Uffizi albergan las obras mas tempranas de Leonardo de su periodo florentino, incluyendo la Anunciacion y la inacabada Adoracion de los Magos.",
      },
      {
        q: "¿Que edad tenia Leonardo cuando pinto la Anunciacion?",
        a: "Leonardo tenia aproximadamente 20-23 anos cuando pinto la Anunciacion (c. 1472-1475). Todavia trabajaba en el taller de Verrocchio en Florencia en esa epoca.",
      },
    ],
  },
  "giotto": {
    name: "Giotto di Bondone",
    title: "Giotto en los Uffizi | Madonna Ognissanti - Sala 2",
    description:
      "Descubre la revolucionaria Madonna Ognissanti de Giotto en la Sala 2 de los Uffizi. Como un pintor rompio con el arte medieval e invento la pintura occidental.",
    h1: "Giotto en la Galeria Uffizi",
    born: "c. 1267, Vespignano, Florencia",
    died: "8 de enero de 1337, Florencia",
    movement: "Proto-Renacimiento",
    ufficiRoom: "Sala 2",
    masterpieces: ["Madonna Ognissanti (c. 1310)"],
    intro:
      "La Sala 2 de los Uffizi es donde comienza la pintura occidental. Tres enormes retablos llenan el espacio — inmensas imagenes con fondo dorado de la Madonna con el Nino por Cimabue, Duccio y Giotto. A primera vista parecen similares. Pero colocate frente a la Madonna Ognissanti de Giotto (c. 1310) y luego gira hacia la version de Cimabue, y veras la revolucion que cambio el arte para siempre. La Madonna de Giotto tiene peso. Se sienta en un trono real que crea profundidad real. Su rostro muestra una emocion humana genuina. Despues de Giotto, la pintura ya nunca pudo volver a ser plana.",
    atTheUffizi:
      "La Sala 2 esta deliberadamente disenada para permitirte presenciar el nacimiento de la pintura renacentista en una sola mirada. Los tres grandes paneles de la Maesta — de Cimabue (c. 1280), Duccio (c. 1285) y Giotto (c. 1310) — representan tres etapas en la revolucion del arte medieval al moderno.\n\nLa Madonna Ognissanti de Giotto rompe con la convencion bizantina de varias maneras cruciales. El trono esta representado con perspectiva consistente, creando una sensacion convincente de espacio tridimensional. El cuerpo de la Madonna tiene volumen genuino bajo sus ropajes — puedes percibir su peso sobre el trono. Los angeles que flanquean el trono se superponen naturalmente en lugar de estar apilados en un patron simbolico. Y los rostros — Maria, el nino Cristo, los angeles — expresan emociones humanas reales en lugar de las mascaras estilizadas del arte bizantino.\n\nEsto puede parecer sutil, pero en 1310 fue revolucionario. Durante mil anos, el arte occidental habia sido esencialmente plano y simbolico. Giotto invento por si solo la idea de que la pintura podia representar el mundo real y fisico. Cada artista que siguio — Masaccio, Botticelli, Leonardo, Miguel Angel — construyo sobre los cimientos que Giotto establecio en esta sala.",
    biography:
      "Giotto di Bondone nacio alrededor de 1267 cerca de Florencia. La historia mas famosa sobre su juventud proviene de Vasari: el pintor Cimabue supuestamente descubrio al joven Giotto dibujando una oveja sobre una roca de forma tan realista que Cimabue lo tomo inmediatamente como aprendiz. Sea cierta o no esta leyenda, Giotto se formo con Cimabue y rapidamente supero a su maestro.\n\nSu mayor logro es el ciclo de frescos en la Capilla de los Scrovegni en Padua (c. 1305), que narra la vida de Cristo y la Virgen Maria con una profundidad emocional y un realismo espacial sin precedentes. En Florencia, diseno el campanario (campanile) de la Catedral, que todavia lleva su nombre. Dante escribio en la Divina Comedia que la fama de Giotto habia eclipsado la de Cimabue — un notable tributo de un genio florentino a otro.",
    legacy:
      'A Giotto se le llama a menudo el "Padre de la Pintura Occidental". De pie en la Sala 2 de los Uffizi, puedes ver exactamente por que. La Madonna Ognissanti es el punto de inflexion entre el arte medieval y el moderno — y todo lo demas en los Uffizi parte de ella.',
    faq: [
      {
        q: "¿Donde esta el cuadro de Giotto en los Uffizi?",
        a: "La Madonna Ognissanti de Giotto (c. 1310) esta en la Sala 2, junto a obras similares de Cimabue y Duccio. Es la primera sala importante que encuentras al entrar en la galeria.",
      },
      {
        q: "¿Por que es importante Giotto?",
        a: 'A Giotto se le llama el "Padre de la Pintura Occidental" porque rompio con el estilo plano y simbolico del arte medieval e introdujo el naturalismo — espacio real, peso real, emocion real. Todos los artistas del Renacimiento construyeron sobre sus innovaciones.',
      },
      {
        q: "¿Que antiguedad tiene el cuadro de Giotto en los Uffizi?",
        a: "La Madonna Ognissanti data de aproximadamente 1310 — mas de 700 anos de antiguedad. Es una de las pinturas mas antiguas e historicamente significativas de los Uffizi.",
      },
    ],
  },
  "giorgio-vasari": {
    name: "Giorgio Vasari",
    title: "Vasari | Arquitecto de los Uffizi y el Corredor",
    description:
      "Giorgio Vasari diseno el edificio de los Uffizi y el famoso Corredor Vasariano. Arquitecto, pintor y autor de las Vidas de los artistas.",
    h1: "Giorgio Vasari — Arquitecto de los Uffizi",
    born: "30 de julio de 1511, Arezzo",
    died: "27 de junio de 1574, Florencia",
    movement: "Manierismo",
    ufficiRoom: "En todo el edificio",
    masterpieces: [
      "El edificio de los Uffizi (1560-1580)",
      "Corredor Vasariano (1565)",
      "Vidas de los mas excelentes pintores, escultores y arquitectos (1550/1568)",
    ],
    intro:
      "Cada visitante de los Uffizi camina a traves de la mayor obra de arte de Giorgio Vasari sin darse cuenta — el propio edificio. Vasari diseno los Uffizi en 1560 como oficinas administrativas para Cosme I de Medici, creando una elegante estructura en forma de U que enmarca una de las plazas mas bellas de Florencia. Cinco anos despues, construyo el extraordinario corredor elevado que lleva su nombre, conectando los Uffizi con el Palazzo Pitti a traves del Ponte Vecchio.",
    atTheUffizi:
      "La presencia de Vasari en los Uffizi es arquitectonica mas que pictorica. El diseno del edificio — con sus armoniosas columnas, logias abiertas y proporciones clasicas — se considera uno de los mejores ejemplos de arquitectura civica renacentista. El largo corredor del piso superior, originalmente disenado para exhibir la creciente coleccion de arte de los Medici, se convirtio en el modelo para las galerias de museos en toda Europa.\n\nEl Corredor Vasariano, construido en unos asombrosos cinco meses en 1565, sigue siendo una de las estructuras mas extraordinarias de Florencia. Recorriendo desde los Uffizi, sobre el Ponte Vecchio y hasta el Palazzo Pitti, permitia a los Medici desplazarse entre sus residencias sin pisar una calle publica. Hoy, tras una extensa restauracion, esta abierto a los visitantes.\n\nVasari tambien pinto prolificamente — su obra cuelga en varias salas de los Uffizi, aunque sus pinturas suelen quedar eclipsadas por los maestros sobre los que escribio. Su autorretrato forma parte de la famosa coleccion de autorretratos de artistas de la galeria.",
    biography:
      'Nacido en Arezzo en 1511, Vasari se formo en Florencia con Andrea del Sarto y brevemente con Miguel Angel. Se convirtio en un artista versatil y prolifico — pintor, arquitecto y escritor. Como artista y arquitecto de la corte de los Medici, superviso proyectos importantes como la renovacion del interior del Palazzo Vecchio, el diseno de los Uffizi y la construccion del Corredor Vasariano.\n\nPero el logro mas perdurable de Vasari no es un edificio ni una pintura — es un libro. Sus "Vidas de los mas excelentes pintores, escultores y arquitectos" (publicado por primera vez en 1550, ampliado en 1568) es el fundamento de la historia del arte occidental. Sin las biografias de Vasari sobre Giotto, Leonardo, Miguel Angel, Rafael y docenas de otros, gran parte de lo que sabemos sobre el arte renacentista se habria perdido.',
    legacy:
      'Vasari invento la historia del arte como disciplina. Su concepto de que el arte progresaba desde el "renacimiento" (rinascita) de los valores clasicos hasta la perfeccion de Miguel Angel nos dio la propia palabra "Renacimiento". Cada libro de historia del arte escrito desde entonces tiene una deuda con la obra fundacional de Vasari.',
    faq: [
      {
        q: "¿Vasari diseno los Uffizi?",
        a: "Si. Giorgio Vasari diseno el edificio de los Uffizi en 1560 para Cosme I de Medici. Originalmente eran oficinas administrativas, y mas tarde se convirtio en la galeria que alberga la coleccion de arte de los Medici.",
      },
      {
        q: "¿Que es el Corredor Vasariano?",
        a: "Un pasaje elevado construido por Vasari en 1565, que conecta los Uffizi con el Palazzo Pitti a traves del Ponte Vecchio. Permitia a los Medici desplazarse entre edificios sin usar calles publicas.",
      },
      {
        q: "¿Que mas hizo Vasari ademas de arquitectura?",
        a: "Vasari escribio las 'Vidas de los artistas' — el texto fundacional de la historia del arte occidental. Tambien fue un pintor prolifico y renovo el interior del Palazzo Vecchio.",
      },
    ],
  },
  "raphael": {
    name: "Rafael",
    title: "Rafael en los Uffizi | Madonna del Jilguero",
    description:
      "Descubre la Madonna del Jilguero de Rafael en la Sala 66 de los Uffizi. La pintura que sobrevivio a la destruccion — historia de restauracion y guia.",
    h1: "Rafael en la Galeria Uffizi",
    born: "6 de abril de 1483, Urbino",
    died: "6 de abril de 1520, Roma",
    movement: "Alto Renacimiento",
    ufficiRoom: "Sala 66",
    masterpieces: [
      "Madonna del Jilguero (1506)",
      "Autorretrato (c. 1506)",
      "Papa Leon X con Cardenales (1518-1519)",
    ],
    intro:
      "Rafael murio el dia de su 37 cumpleanos. En esos breves anos, creo obras de una armonia y gracia tan perfectas que fue llamado 'el pintor divino' incluso en vida. Los Uffizi albergan varios Rafaeles importantes, incluyendo la Madonna del Jilguero — una pintura con una de las historias de supervivencia mas dramaticas del arte.",
    atTheUffizi:
      "La Madonna del Jilguero (1506) en la Sala 66 fue pintada como regalo de boda para el amigo de Rafael, Lorenzo Nasi. Muestra a la Virgen Maria sentada en un paisaje con el joven Juan Bautista ofreciendo un jilguero — simbolo de la futura Pasion de Cristo — al nino Jesus.\n\nEn 1547, un devastador deslizamiento de tierra destruyo la casa de Lorenzo Nasi en la colina de San Giorgio. La pintura quedo destrozada en 17 fragmentos. El hijo de Nasi contrato inmediatamente a un restaurador para reensamblar las piezas, pero el dano era severo. Durante siglos, las grietas fueron visibles bajo capas de repintado.\n\nEn 2008, se completo una importante restauracion utilizando tecnicas modernas que incluian analisis infrarrojo y de rayos X. Los restauradores eliminaron siglos de barniz y repintados, revelando los colores originales de Rafael — azules luminosos, rojos calidos y verdes suaves que habian estado ocultos durante 400 anos. Si miras con mucho cuidado, aun puedes ver tenues lineas donde se unieron los fragmentos.\n\nTambien en los Uffizi: el juvenil Autorretrato de Rafael y el imponente Papa Leon X con Cardenales — un retrato politico del papa Medici que revela la profundidad psicologica de Rafael. Leon X (Giovanni de Medici) era hijo de Lorenzo el Magnifico, lo que convierte este cuadro en un vinculo directo entre la coleccion Medici y la familia Medici.",
    biography:
      "Nacido en Urbino en 1483, Rafael estudio con Perugino antes de trasladarse a Florencia en 1504, donde asimilo las innovaciones de Leonardo y Miguel Angel. Su periodo florentino produjo las pinturas de Madonnas que le dieron fama — composiciones serenas, perfectamente equilibradas que parecian alcanzar una gracia sin esfuerzo.\n\nEn 1508, el Papa Julio II llamo a Rafael a Roma para pintar las Estancias (salas) del Vaticano. El resultado — en particular la Escuela de Atenas — es uno de los logros supremos del arte occidental. Rafael se convirtio en el pintor mas solicitado de Europa, dirigiendo un gran taller y aceptando encargos de frescos, retratos, retablos y disenos arquitectonicos. Murio repentinamente en Roma en 1520, con solo 37 anos.",
    legacy:
      "Rafael representa el ideal del Alto Renacimiento — belleza, armonia y gracia llevadas a la perfeccion. Su influencia en la pintura academica perduro durante siglos. Al ver la Madonna del Jilguero en los Uffizi, eres testigo tanto de su genio como de la fragilidad de la supervivencia artistica.",
    faq: [
      {
        q: "¿Que cuadros de Rafael hay en los Uffizi?",
        a: "Los Uffizi albergan la Madonna del Jilguero (1506), el Autorretrato de Rafael, Papa Leon X con Cardenales y varias otras obras. Se encuentran principalmente en la Sala 66.",
      },
      {
        q: "¿Que le paso a la Madonna del Jilguero?",
        a: "En 1547, un deslizamiento de tierra destruyo la casa donde colgaba, destrozandola en 17 fragmentos. Fue reensamblada, pero mostro danos durante siglos. Una restauracion en 2008 revelo los colores originales de Rafael.",
      },
      {
        q: "¿A que edad murio Rafael?",
        a: "Rafael murio el dia de su 37 cumpleanos (6 de abril de 1520) en Roma. A pesar de su corta vida, creo algunas de las pinturas mas influyentes del arte occidental.",
      },
    ],
  },
  "titian": {
    name: "Tiziano",
    title: "Tiziano en los Uffizi | Venus de Urbino - Sala 83",
    description:
      "Descubre la Venus de Urbino de Tiziano en la Sala 83 de los Uffizi. El desnudo reclinado mas famoso de la historia del arte — analisis y guia de visita.",
    h1: "Tiziano en la Galeria Uffizi",
    born: "c. 1488, Pieve di Cadore, Veneto",
    died: "27 de agosto de 1576, Venecia",
    movement: "Renacimiento veneciano",
    ufficiRoom: "Sala 83",
    masterpieces: [
      "Venus de Urbino (1538)",
      "Flora (c. 1515)",
      "Retrato de Eleonora Gonzaga della Rovere (1536-1537)",
    ],
    intro:
      'Tiziano fue el maestro del color. Mientras los pintores florentinos construian su arte sobre el dibujo y la linea, Tiziano y la escuela veneciana lo construian sobre la riqueza sensual de la pintura al oleo. En ningun lugar es esto mas evidente que en la Venus de Urbino (1538) en la Sala 83 — una pintura tan provocativa que Mark Twain la llamo "la imagen mas sucia, vil y obscena que posee el mundo". Se equivocaba. Es una de las mas grandes.',
    atTheUffizi:
      "La Venus de Urbino domina la Sala 83. Una mujer desnuda yace sobre una cama, mirando directamente al espectador con calma confianza. Un pequeno perro duerme a sus pies (simbolo de fidelidad), sirvientas buscan en un baul nupcial al fondo, y una planta de mirto se encuentra en el alfeizar (asociada con Venus y el amor duradero).\n\nLo que hace extraordinaria a esta pintura no es la desnudez — es el dominio absoluto de la pintura al oleo. Tiziano construye la figura con capas de color translucido, creando una piel que parece brillar desde dentro. El contraste entre los tonos calidos de la carne y las sabanas blancas frias, la profunda cortina verde y la luz dorada — esto es pintura como pura experiencia sensorial.\n\nEl cuadro fue encargado por Guidobaldo II della Rovere, Duque de Urbino, posiblemente como regalo de boda. Si la mujer es Venus, una cortesana o una novia se ha debatido durante siglos. Sea lo que sea, ella es duena de la habitacion en la que esta — tanto en la pintura como en los Uffizi.\n\nTambien en los Uffizi: la Flora de Tiziano, un retrato de una mujer sosteniendo flores que se convirtio en el arquetipo de la belleza veneciana, y varios retratos de los Medici.",
    biography:
      "Tiziano Vecellio nacio alrededor de 1488 en las montanas Dolomitas del norte de Italia. Se traslado a Venecia siendo nino y se formo con los hermanos Bellini y Giorgione. A mediados de sus veinte anos, era el pintor dominante en Venecia — una posicion que mantuvo durante mas de 60 anos.\n\nTiziano trabajo para las figuras mas poderosas de Europa: papas, emperadores, reyes y dux. Sus retratos de Carlos V establecieron el modelo del retrato de estado que perduro hasta el siglo XVIII. Continuo pintando hasta bien entrados sus ochenta anos, con un estilo cada vez mas suelto y expresivo — algunas obras tardias parecen casi impresionistas.",
    legacy:
      "La influencia de Tiziano en la pintura es inmensa. Rubens, Velazquez, Rembrandt e incontables otros estudiaron su obra. La Venus de Urbino inspiro directamente la Olympia de Manet (1863), una de las pinturas definitorias del arte moderno. Al ver el original en los Uffizi, comprendes por que cada pintor posterior se sintio obligado a responder ante ella.",
    faq: [
      {
        q: "¿Donde esta la Venus de Urbino de Tiziano en los Uffizi?",
        a: "La Venus de Urbino esta en la Sala 83 de la Galeria Uffizi. Es una de las pinturas mas visitadas del museo.",
      },
      {
        q: "¿Por que es famosa la Venus de Urbino?",
        a: "Se considera el mayor desnudo reclinado del arte occidental — una obra revolucionaria por su mirada directa, su uso sensual del color y su presencia psicologica. Influyo en siglos de artistas, desde Velazquez hasta Manet.",
      },
      {
        q: "¿Quien es la mujer de la Venus de Urbino?",
        a: "Su identidad es debatida — puede ser Venus (la diosa mitologica), una novia o el retrato de una mujer especifica. El cuadro fue encargado por el Duque de Urbino, posiblemente como regalo de boda.",
      },
    ],
  },
  "rembrandt": {
    name: "Rembrandt",
    title: "Rembrandt en los Uffizi | Autorretratos - Sala 49",
    description:
      "Descubre los autorretratos de Rembrandt en la Galeria Uffizi. Las obras del maestro holandes en Florencia — guia de la Sala 49 e informacion de visita.",
    h1: "Rembrandt en la Galeria Uffizi",
    born: "15 de julio de 1606, Leiden, Paises Bajos",
    died: "4 de octubre de 1669, Amsterdam",
    movement: "Siglo de Oro Holandes / Barroco",
    ufficiRoom: "Sala 49",
    masterpieces: [
      "Autorretrato de joven (c. 1634)",
      "Autorretrato de anciano (c. 1664)",
    ],
    intro:
      "Rembrandt puede parecer una presencia inesperada en una galeria dominada por maestros del Renacimiento italiano, pero los Medici coleccionaban ampliamente, y los dos autorretratos de Rembrandt en los Uffizi se encuentran entre las obras mas psicologicamente penetrantes de toda la coleccion. Pintados con treinta anos de diferencia, documentan el viaje de un hombre desde la confianza juvenil hasta la sabiduria curtida de la vejez.",
    atTheUffizi:
      "La Sala 49 alberga la coleccion de arte del norte de Europa de los Uffizi, y los dos autorretratos de Rembrandt son sus joyas de la corona. El autorretrato temprano (c. 1634) muestra a un hombre joven en la cima de sus poderes — prospero, seguro de si mismo, vestido con ropa elegante. El autorretrato tardio (c. 1664) muestra a un hombre mayor que ha conocido la bancarrota, la muerte de su esposa e hijo, y el declive profesional. Pero la mirada es inquebrantable, y la tecnica pictorica es magistral — pinceladas amplias y expresivas que parecen disolver la forma en luz.\n\nEstas pinturas forman parte de la famosa coleccion de autorretratos de artistas de los Uffizi, que comenzo cuando el Cardenal Leopoldo de Medici empezo a coleccionarlos en el siglo XVII. La coleccion cuenta ahora con mas de 1.800 obras.",
    biography:
      "Rembrandt Harmenszoon van Rijn nacio en Leiden en 1606 y paso la mayor parte de su vida en Amsterdam. Fue el mayor pintor del Siglo de Oro Holandes — un maestro de la luz y la sombra (claroscuro) que aporto una profundidad psicologica sin precedentes al retrato, la pintura historica y el autorretrato.\n\nPinto, dibujo o grabo aproximadamente 80 autorretratos a lo largo de su vida — la autobiografia visual mas extensa de la historia del arte. Cada uno es un registro honesto del envejecimiento, la emocion y el autoexamen. Los dos de los Uffizi representan este extraordinario proyecto en dos momentos cruciales.",
    legacy:
      "Los autorretratos de Rembrandt influyeron en cada artista que intento pintarse a si mismo con honestidad — desde Van Gogh a Frida Kahlo y Lucian Freud. Ver ambos autorretratos de los Uffizi uno junto al otro es una experiencia singularmente conmovedora.",
    faq: [
      {
        q: "¿Que cuadros de Rembrandt hay en los Uffizi?",
        a: "Los Uffizi albergan dos autorretratos de Rembrandt — uno de su juventud (c. 1634) y otro de su vejez (c. 1664). Estan en la Sala 49 con otras obras del norte de Europa.",
      },
      {
        q: "¿Por que hay cuadros de Rembrandt en Florencia?",
        a: "La familia Medici coleccionaba arte de toda Europa. El Cardenal Leopoldo de Medici inicio la famosa coleccion de autorretratos de artistas de los Uffizi en el siglo XVII, que ahora incluye mas de 1.800 obras.",
      },
      {
        q: "¿Cuantos autorretratos pinto Rembrandt?",
        a: "Rembrandt creo aproximadamente 80 autorretratos (pinturas, grabados y dibujos) a lo largo de su vida — la autobiografia visual mas extensa de la historia del arte.",
      },
    ],
  },
  "filippo-brunelleschi": {
    name: "Filippo Brunelleschi",
    title: "Brunelleschi | Arquitecto de la Cupula de Florencia",
    description:
      "Filippo Brunelleschi — arquitecto de la iconica cupula del Duomo de Florencia. Su conexion con los Uffizi y la revolucion renacentista en arquitectura.",
    h1: "Filippo Brunelleschi — Arquitecto del Duomo",
    born: "1377, Florencia",
    died: "15 de abril de 1446, Florencia",
    movement: "Renacimiento temprano",
    ufficiRoom: "Referenciado en el contexto de la Sala 7",
    masterpieces: [
      "Cupula de la Catedral de Florencia (1420-1436)",
      "Ospedale degli Innocenti (1419)",
      "Basilica de San Lorenzo (1421-1459)",
    ],
    intro:
      "Puedes ver la mayor obra maestra de Brunelleschi desde la terraza panoramica de los Uffizi — la inmensa cupula de la Catedral de Florencia, alzandose sobre los tejados de la ciudad como un milagro geometrico. Brunelleschi no era pintor, asi que sus obras no cuelgan en las paredes de los Uffizi. Pero sin el, el Renacimiento tal como lo conocemos quizas nunca habria existido. El invento la perspectiva lineal, el sistema matematico que cada pintor en los Uffizi utilizo para crear la ilusion de profundidad.",
    atTheUffizi:
      "La conexion de Brunelleschi con los Uffizi es indirecta pero profunda. El sistema de perspectiva matematica que demostro en Florencia alrededor de 1415 — usando espejos y paneles pintados frente al Baptisterio — se convirtio en la base de la pintura renacentista. Cada pintura en los Uffizi que muestra un espacio realista, desde Masaccio hasta Rafael, se basa en el descubrimiento de Brunelleschi.\n\nDesde la terraza del segundo piso de los Uffizi y las ventanas a lo largo del corredor este, puedes ver su cupula del Duomo dominando el horizonte de Florencia. Construida entre 1420 y 1436 sin andamiaje temporal de madera (una hazana de ingenieria no repetida durante siglos), la cupula sigue siendo la mayor cupula de albanileria jamas construida.",
    biography:
      "Brunelleschi nacio en Florencia en 1377 y se formo como orfebre y escultor. En 1401, compitio con Lorenzo Ghiberti por el encargo de disenar las puertas del Baptisterio — y perdio. Esa derrota redirigió su carrera hacia la arquitectura y la ingenieria, donde cambiaria el mundo.\n\nSu cupula para la Catedral de Florencia resolvio un problema que habia desconcertado a los constructores durante mas de un siglo: como cubrir una abertura de 42 metros sin andamiaje tradicional. Brunelleschi invento una construccion de doble cascara, utilizando un patron de ladrillos en espiga y ingeniosas maquinas elevadoras de su propia invencion. El proyecto duro 16 anos y sigue siendo uno de los logros supremos de la ingenieria.",
    legacy:
      "Brunelleschi inauguro la arquitectura renacentista e invento la perspectiva lineal — la base matematica para representar el espacio tridimensional en una superficie plana. Cada pintura que ves en los Uffizi debe algo a su descubrimiento.",
    faq: [
      {
        q: "¿Hay obras de Brunelleschi en los Uffizi?",
        a: "Brunelleschi fue arquitecto, no pintor, asi que sus obras no estan colgadas en los Uffizi. Sin embargo, su cupula es visible desde la terraza de los Uffizi, y su invencion de la perspectiva lineal es la base de la pintura renacentista en toda la galeria.",
      },
      {
        q: "¿Que construyo Brunelleschi?",
        a: "Su obra mas famosa es la cupula de la Catedral de Florencia (1420-1436) — la mayor cupula de albanileria jamas construida. Tambien diseno el Ospedale degli Innocenti y la Basilica de San Lorenzo en Florencia.",
      },
      {
        q: "¿Por que es importante Brunelleschi para la pintura?",
        a: "Invento la perspectiva lineal alrededor de 1415 — el sistema matematico para crear profundidad realista en una superficie plana. Cada pintor renacentista de los Uffizi utilizo su descubrimiento.",
      },
    ],
  },
  "dante-alighieri": {
    name: "Dante Alighieri",
    title: "Dante Alighieri y los Uffizi | Poeta de Florencia",
    description:
      "Dante Alighieri — el mayor poeta de Florencia y autor de la Divina Comedia. Sus retratos en los Uffizi y su profunda conexion con la ciudad.",
    h1: "Dante Alighieri — El poeta de Florencia en los Uffizi",
    born: "c. 1265, Florencia",
    died: "14 de septiembre de 1321, Ravena",
    movement: "Literatura medieval / Proto-Renacimiento",
    ufficiRoom: "Varias salas (retratos y referencias)",
    masterpieces: [
      "Divina Comedia (c. 1308-1321)",
      "La Vita Nuova (c. 1294)",
      "Retratos de diversos artistas de los Uffizi",
    ],
    intro:
      "Dante Alighieri no fue pintor — fue el mayor poeta de Florencia y el autor de la Divina Comedia, uno de los logros supremos de la literatura universal. Pero su presencia impregna los Uffizi. Su retrato aparece en varias pinturas a lo largo de la galeria, y su influencia en la cultura florentina forjo el mundo que produjo a los artistas cuyas obras llenan estas salas.",
    atTheUffizi:
      "Dante aparece en multiples obras a lo largo de los Uffizi, reflejando su condicion de ciudadano mas venerado de Florencia. El ciclo de frescos de Andrea del Castagno (originalmente de la Villa Carducci) incluye un llamativo retrato de Dante con su caracteristico gorro rojo y corona de laurel. Botticelli ilustro la Divina Comedia con una serie de dibujos, algunos de los cuales se relacionan con los temas literarios de sus pinturas.\n\nLa influencia de Dante sobre los artistas de los Uffizi va mas alla de los retratos. Su vision del mas alla — el terrorífico Infierno, el esperanzador Purgatorio y el trascendente Paraiso — inspiro incontables pinturas y esculturas a lo largo del Renacimiento. El Juicio Final de Miguel Angel en la Capilla Sixtina se nutre profundamente del Infierno de Dante, y Botticelli dedico anos a crear ilustraciones para la Divina Comedia.",
    biography:
      "Nacido en Florencia alrededor de 1265, Dante pertenecia a una familia noble menor. Su vida temprana estuvo marcada por su amor por Beatriz Portinari, a quien vio por primera vez cuando ambos eran ninos. Aunque rara vez hablaron y ella se caso con otro hombre, Beatriz se convirtio en la musa de toda la vida de Dante. Tras su muerte en 1290, el canalizo su dolor en La Vita Nuova y finalmente en la Divina Comedia.\n\nDante tambien estuvo profundamente involucrado en la politica florentina. Como guelfo blanco, se opuso a la interferencia papal en los asuntos de la ciudad. Cuando los guelfos negros tomaron el poder en 1302, Dante fue desterrado de Florencia y nunca regreso. Paso el resto de su vida vagando entre ciudades italianas, escribiendo la obra que lo haria inmortal. Murio en Ravena en 1321, donde permanece su tumba — Florencia nunca ha dejado de intentar recuperar sus restos.",
    legacy:
      'Dante es llamado el "Padre de la Lengua Italiana" — escribio la Divina Comedia en italiano vernáculo en lugar de en latin, estableciendo el dialecto toscano como base del italiano moderno. Su influencia en el arte, la literatura y la identidad florentina es inconmensurable.',
    faq: [
      {
        q: "¿Hay pinturas de Dante en los Uffizi?",
        a: "Dante aparece como tema en varias pinturas de los Uffizi, incluyendo retratos de Andrea del Castagno y otros artistas florentinos. Como poeta, el mismo no creo arte visual.",
      },
      {
        q: "¿Por que es importante Dante para Florencia?",
        a: 'Dante es el ciudadano mas famoso de Florencia y el "Padre de la Lengua Italiana". Su Divina Comedia (1308-1321) fue escrita en italiano toscano en lugar de latin, estableciendo los cimientos del italiano moderno. Su influencia forjo el mundo cultural que produjo a los artistas de los Uffizi.',
      },
      {
        q: "¿Fue Dante desterrado de Florencia?",
        a: "Si. En 1302, Dante fue desterrado despues de que su faccion politica perdiera el poder. Nunca regreso a Florencia y murio en Ravena en 1321. Florencia ha solicitado repetidamente la devolucion de sus restos.",
      },
    ],
  },
  "piero-della-francesca": {
    name: "Piero della Francesca",
    title: "Piero della Francesca en los Uffizi | Duques de Urbino",
    description:
      "Descubre los famosos retratos del Duque y la Duquesa de Urbino de Piero della Francesca en la Sala 8 de los Uffizi. Retrato renacentista en su maxima expresion.",
    h1: "Piero della Francesca en la Galeria Uffizi",
    born: "c. 1415, Borgo Sansepolcro, Toscana",
    died: "12 de octubre de 1492, Borgo Sansepolcro",
    movement: "Renacimiento temprano",
    ufficiRoom: "Sala 8",
    masterpieces: [
      "Retratos del Duque y la Duquesa de Urbino (c. 1465-1472)",
    ],
    intro:
      "El doble retrato de Federico da Montefeltro y su esposa Battista Sforza por Piero della Francesca es una de las imagenes mas iconicas del Renacimiento italiano. Pintados de perfil contra un vasto paisaje de Umbria, el Duque y la Duquesa se miran a traves del cuadro con la serena dignidad de monedas romanas. La pintura trata tanto de matematicas y luz como de poder.",
    atTheUffizi:
      "La Sala 8 alberga una de las obras mas reconocibles de los Uffizi: el diptico (pintura en dos paneles) del Duque y la Duquesa de Urbino. Los paneles estan pintados por ambos lados — el frente muestra los famosos retratos de perfil, mientras el reverso representa a ambas figuras en carros triunfales acompanados de figuras alegoricas.\n\nFederico da Montefeltro, Duque de Urbino, fue uno de los comandantes militares mas exitosos del siglo XV. Se le muestra siempre de perfil izquierdo — porque perdio el ojo derecho y el puente de la nariz en un torneo. En lugar de ocultar la deformidad, Piero la incorporo al retrato con su honestidad caracteristica.\n\nLos paisajes detras de ambas figuras son extraordinarios. Piero representa las colinas ondulantes, los rios y los pueblos de la region de las Marcas con una precision y luminosidad que anticipa la pintura paisajistica holandesa en dos siglos. La luz esta perfectamente calibrada — todo bana en una atmosfera clara y fresca que crea una sensacion de espacio infinito.\n\nPiero fue tambien un matematico que escribio tratados sobre perspectiva y geometria. Sus pinturas reflejan esta doble pasion — cada elemento esta calculado con precision, pero el resultado se siente natural y sereno en lugar de rigido.",
    biography:
      "Nacido alrededor de 1415 en el pueblo toscano de Borgo Sansepolcro, Piero estudio en Florencia pero paso gran parte de su carrera trabajando para cortes de toda Italia central. Su mayor ciclo de frescos — la Leyenda de la Vera Cruz en Arezzo — es una de las obras maestras del Renacimiento temprano.\n\nPiero fue un verdadero polimatico del Renacimiento: pintor, matematico y teorico. Sus tratados sobre perspectiva (De Prospectiva Pingendi) y geometria influyeron en artistas y matematicos durante generaciones. Quedo ciego en sus ultimos anos y dejo de pintar, dedicandose enteramente a las matematicas hasta su muerte en 1492.",
    legacy:
      "Piero della Francesca fue practicamente olvidado tras su muerte y solo fue redescubierto en el siglo XX. Hoy es reconocido como uno de los mayores pintores del Renacimiento temprano, admirado por su color luminoso, su precision geometrica y su profundo sentido de quietud.",
    faq: [
      {
        q: "¿Donde esta la pintura de Piero della Francesca en los Uffizi?",
        a: "El doble retrato del Duque y la Duquesa de Urbino esta en la Sala 8. Los paneles estan pintados por ambos lados — no te pierdas el reverso con las procesiones triunfales.",
      },
      {
        q: "¿Por que se muestra al Duque de perfil?",
        a: "Federico da Montefeltro perdio el ojo derecho y el puente de la nariz en un torneo. Siempre se le muestra desde el lado izquierdo. Piero incorporo esto al retrato con su franqueza caracteristica.",
      },
      {
        q: "¿Que hace especial a Piero della Francesca?",
        a: "Piero combinaba la pintura con las matematicas — sus obras tienen una luminosidad unica, precision geometrica y sensacion de calma. Tambien escribio influyentes tratados sobre perspectiva que dieron forma al arte renacentista.",
      },
    ],
  },
  caravaggio: {
    name: "Caravaggio",
    title: "Caravaggio en los Uffizi | Medusa, Baco y Sacrificio de Isaac",
    description:
      "Admira Medusa, Baco y Sacrificio de Isaac de Caravaggio en los Uffizi, Sala 90. Obras maestras barrocas de luz y sombra dramaticas.",
    h1: "Caravaggio en la Galeria Uffizi",
    born: "29 de septiembre de 1571, Milan",
    died: "18 de julio de 1610, Porto Ercole, Toscana",
    movement: "Barroco",
    ufficiRoom: "Sala 90 (Primera Planta)",
    masterpieces: [
      "Medusa (c. 1597)",
      "Baco (c. 1598)",
      "Sacrificio de Isaac (c. 1603)",
    ],
    intro:
      "Entre en la Sala 90 y Caravaggio le golpea en la cara. Despues de la belleza eterea de Botticelli y la serena perfeccion de Rafael, la Medusa de Caravaggio — su boca congelada en un grito, sangre brotando de su cuello cortado — es un shock. Este es arte que no pide su admiracion. Exige su atencion.",
    atTheUffizi:
      "La coleccion de Caravaggio de los Uffizi ocupa la Sala 90 en la primera planta, un contraste dramatico con las obras maestras del Renacimiento en el piso superior. Estas tres pinturas representan a Caravaggio en la cima de sus poderes, antes de que su temperamento violento lo obligara a huir de Roma.\n\nMedusa (c. 1597) esta pintada sobre un escudo circular de madera — no sobre lienzo. Fue encargada por el cardenal Francesco Maria del Monte como regalo para el Gran Duque de Toscana. La Gorgona se muestra en el momento de su decapitacion por Perseo, boca abierta en un grito silencioso, serpientes retorciendose en su cabello. La sangre brota de su cuello. Lo que la hace aun mas perturbadora: es un autorretrato. Caravaggio pinto su propio rostro en el momento de la muerte.\n\nBaco (c. 1598) muestra al dios del vino como un pillo callejero — con los hombros desnudos, ligeramente ebrio, ofreciendole una copa de vino con una sonrisa complice. La fruta sobre la mesa esta pudriendose. Esta no es grandeza mitologica — es realidad aplicada a un tema clasico. Mire atentamente la garrafa de vino: puede ver el diminuto autorretrato de Caravaggio reflejado en el vidrio.\n\nSacrificio de Isaac (c. 1603) captura el instante aterrador antes de que el cuchillo de Abraham se clave en el cuello de su hijo. El rostro del nino esta congelado en horror, su boca abierta en un grito que refleja a Medusa. La mano del angel detiene la hoja en el ultimo momento posible. El cordero — el sacrificio sustituto — espera pacientemente en la esquina. Es insoportablemente tenso.\n\nLa tecnica revolucionaria de Caravaggio — el dramatico claroscuro (luz emergiendo de la oscuridad) — esta en plena exhibicion aqui. Los cuerpos emergen de fondos negros como actores iluminados en un escenario. Cada detalle se representa con brutal honestidad: unas sucias, piel arrugada, el peso de la carne.",
    biography:
      "Michelangelo Merisi da Caravaggio nacio en Milan en 1571 durante un brote de peste. Su padre murio cuando era joven. Se formo en Milan, luego se mudo a Roma alrededor de 1592, donde vivio en la pobreza, pintando escenas de genero y naturalezas muertas.\n\nSu gran avance llego cuando el cardenal Francesco Maria del Monte se convirtio en su mecenas alrededor de 1595. El cardenal encargo obras religiosas y temas mitologicos que mostraban el estilo revolucionario de Caravaggio. Pintaba directamente de modelos vivos — a menudo prostitutas, gente de la calle y criminales — sin dibujos preliminares. Lo que ves es lo que estaba frente a el.\n\nPero Caravaggio era tan violento como sus pinturas. Peleaba constantemente, fue arrestado varias veces, y en 1606 mato a un hombre durante una pelea por un partido de tenis. Huyo de Roma y paso sus ultimos cuatro anos fugitivo — Malta, Sicilia, Napoles — pintando obras cada vez mas oscuras y desesperadas. Murio en 1610 a los 38 anos, posiblemente de malaria, posiblemente de una infeccion de herida, posiblemente asesinado. Su cuerpo nunca fue encontrado.\n\nA pesar de su vida corta y caotica, Caravaggio revoluciono la pintura europea. Su uso dramatico de la luz y la sombra, su realismo inflexible y su intensidad psicologica influyeron en generaciones de artistas. Los 'Caravaggistas' — sus seguidores — difundieron su estilo por toda Europa.",
    legacy:
      "Caravaggio murio en la oscuridad y fue practicamente olvidado durante 200 anos. Su obra se consideraba demasiado impactante, demasiado realista, demasiado oscura. El siglo XX lo redescubrio, y hoy es reconocido como uno de los pintores mas influyentes del arte occidental. Su tecnica del claroscuro influyo en Rembrandt, Velazquez y casi todos los pintores barrocos. Su intensidad psicologica allano el camino para el realismo moderno.",
    faq: [
      {
        q: "¿Donde estan las pinturas de Caravaggio en los Uffizi?",
        a: "Las obras de Caravaggio estan en la Sala 90 en la primera planta (planta baja en numeracion europea). Esta sala presenta arte barroco y esta separada de las principales galerias renacentistas del piso superior.",
      },
      {
        q: "¿Por que Medusa esta en un escudo?",
        a: "En la mitologia griega, Perseo uso su escudo pulido como espejo para evitar mirar directamente a Medusa (cuya mirada convertia a las personas en piedra). Despues de decapitarla, monto su cabeza en su escudo. Caravaggio pinto sobre un escudo ceremonial real para autenticidad.",
      },
      {
        q: "¿Medusa es un autorretrato?",
        a: "Si. Caravaggio uso su propio rostro para los rasgos de Medusa. Esto no era inusual para el — a menudo se insertaba en sus pinturas, a veces de maneras impactantes.",
      },
      {
        q: "¿Por que Caravaggio es tan famoso?",
        a: "Caravaggio revoluciono la pintura con su uso dramatico de la luz y la sombra (claroscuro), realismo inflexible e intensidad psicologica. Pintaba directamente del natural sin bocetos preliminares, creando obras de inmediatez impactante. Su influencia en el arte barroco fue inmensa.",
      },
      {
        q: "¿Caravaggio era un criminal?",
        a: "Si. Caravaggio fue arrestado frecuentemente por peleas, vandalismo y agresiones. En 1606 mato a un hombre durante una pelea y paso sus ultimos cuatro anos huyendo de la justicia. Murio fugitivo en 1610.",
      },
    ],
  },
};
