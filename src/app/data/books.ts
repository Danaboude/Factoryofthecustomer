export interface Book {
    id: string;
    title: string;
    subtitle: string;
    author: string;
    description: string;
    fullDescription: string;
    price: number;
    image: string;
    video?: string;
    details: {
        pages: number;
        publisher: string;
        releaseDate: string;
        isbn: string;
        dimensions?: string;
        binding?: string;
    }
}

export const BOOKS: Book[] = [
    {
        id: 'customers-truffle',
        title: 'The Customer’s Truffle',
        subtitle: 'True customer-centricity in i4.0',
        author: 'Ives De Saeger',
        description: 'Discover the secrets of customer-centric manufacturing. In a world of distraction, this book brings focus back to what truly matters: value for the customer.',
        fullDescription: `True customer-centricity is recognizing each customer as an individual with unique needs and responding swiftly to deliver personalized experiences.

'The Customer's Truffle' shows how aligning factory operations with each customer's precise requirements relies on three specific directions:

1. **Smart Technology:** Verbs linked to internal processes of production or administration.
2. **Smart Organisation:** Promoting agility and transparency by integrating data flows and redefining organizational boundaries.
3. **Smart Knowledge:** Knowledge development and the elimination of scrap failure demand.`,
        price: 85.00,
        image: '/book image.jpg',
        video: '/new book/1.mp4', // Has video cover
        details: {
            pages: 405,
            publisher: 'P41 Bv press',
            releaseDate: '1/3/2026',
            isbn: '9789090415857'
        }
    },
    {
        id: 'grenzeling',
        title: 'Grenzeling',
        subtitle: 'Durven denken buiten de sector',
        author: 'Ives De Saeger',
        description: 'Op zoek gaan naar oplossingen uit een andere sector. Dat is waar grenzeling voor staat. Dankzij sectoroverschrijdende innovatie moet je als bedrijf niet telkens weer het warm water opnieuw uitvinden.',
        fullDescription: `Op zoek gaan naar oplossingen uit een andere sector. Dat is waar grenzeling voor staat. Dankzij sectoroverschrijdende innovatie moet je als bedrijf niet telkens weer het warm water opnieuw uitvinden. Zoekt naar innovatieve oplossingen, op basis van bestaande kennis en technologie. Grenzeling durft te denken buiten de sector.

Unieke combinatie van psychologische inzichten met technologische verbeteringen. Introduceert nieuwe taal welke leidt tot innovatief denken en gedrag. Opgevat als een businessroman met korte hoofdstukken (threads), wat de leesbaarheid en herkenbaarheid aanzienlijk vergroot.

Grenzeling is opgevat als een roman en vertelt het verhaal van een jonge proces engineer, Regine. Ze komt een aantal belemmeringen tegen tijdens haar zoektocht naar bedrijfsverbeteringen. Regine ervaart de vernieuwende kracht van het functioneel modelleren, een volgende generatie tijdstudie, Idea Sensitive Area, nieuwe inzichten in het kwaliteitsdenken...`,
        price: 34.95,
        image: '/g.jpg',
        details: {
            pages: 256,
            publisher: 'Lannoo Campus',
            releaseDate: '8/12/2009',
            isbn: '978-9020988697',
            dimensions: '15x3x22 cm',
            binding: 'Hardcover'
        }
    },
    {
        id: 'puberende-leider',
        title: 'De puberende leider',
        subtitle: 'Over Lean, omgaan met variatie en onvolwassen organisaties',
        author: 'Ives De Saeger',
        description: 'Wat maakt een bedrijf echt volwassen? Vandaag gedragen industriële organisaties zich nog al te vaak als pubers.',
        fullDescription: `Wat maakt een bedrijf echt volwassen? Vandaag gedragen industriële organisaties zich nog al te vaak als pubers. Ze zijn log, statisch, te creatief met te weinig focus, en te gericht op zichzelf eerder dan op de dynamische, complexe buitenwereld.

Via de uitbouw van het fictieve bedrijf Taste4U gaat dit boek zo op zoek naar manieren om in een steeds sneller veranderende en onvoorspelbare bedrijfswereld, een echte volwassen bedrijfsstructuur en -cultuur op te zetten.

De puberende leider is een realistische bedrijfskroniek die aantoont hoe jouw bedrijf wendbaar en efficiënt kan werken. Daarbij speelt de omgang met de Leancultuur een grote rol: echte Lean zoekt niet naar gestandaardiseerde eenheidsworst, maar helpt je bij een juiste aanpak om de nodige waarde te creëren voor je klant en de concurrentie achterwege te laten.`,
        price: 34.95,
        image: '/De.jpg',
        details: {
            pages: 320,
            publisher: 'LannooCampus',
            releaseDate: '19/12/2017',
            isbn: '9789401451666',
            dimensions: '249x180 mm',
            binding: 'Other binding'
        }
    }
];
