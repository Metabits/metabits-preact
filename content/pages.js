const routes = {
  home: '/',
  services: '/utvikling',
  work: '/referanser',
  technologies: '/teknologier',
  contact: '/kontakt-oss',
  jamstack: '/jamstack-og-serverless',
}

const pages = [
  {
    url: routes.home,
    title: 'Metabits - utvikling av nettsider og applikasjoner',
    description:
      'Utvikling av raske, moderne nettsider med top ytelse, gjerne med integrasjoner mot netthandel, abonnement og mye mer',
    menuName: 'Hjem',
    hero: {
      image: 'content/images/pages/rocket.svg',
      imageAlt:
        'Rakett. Illustrasjon: vijay verma / https://vijayverma.co / The MIT License',
      title: 'Vi utvikler ekstremt  raske nettsider',
      subTitle:
        'Brukervennlighet, synlighet i søkemotorer, og perfekt tilpasset mobil er en selvfølge!',
      primaryLink: routes.work,
      primaryLinkName: 'Se referanser',
      secondaryLink: routes.contact,
      secondaryLinkName: 'Ta kontakt',
    },
    blocks: [
      {
        image: 'content/images/pages/fish.svg',
        imageAlt:
          'En oppblåst fisk. Illustrasjon: vijay verma / https://vijayverma.co / The MIT License',
        preTitle: 'Sannheten er:',
        title:
          'De fleste nettsider er oppblåste og bygd i rammeverk som aldri lar deg nå maks ytelse',
        link: routes.services,
        linkText: 'Les om raske nettsider',
      },
      {
        image: 'content/images/pages/ux-screen.svg',
        imageAlt:
          'Ux skjermer.. Illustrasjon: vijay verma / https://vijayverma.co / The MIT License',
        preTitle: 'En utfordring:',
        title:
          'Hvordan levere topp ytelse til et globalt publikum på budsjett som ikke koster skjorta',
        link: routes.jamstack,
        linkText: 'Les om serverless og JAMStack',
      },
    ],
  },
  {
    url: routes.jamstack,
    title: 'JAMStack og serverless',
    description:
      'JAMStack og serverless - hvordan levere topp ytelse til et globalt publikum på budsjett som ikke koster skjorta',
    subTitle: 'Topp ytelse til et globalt publikum',
    image: 'content/images/pages/fish.svg',
    imageAlt:
      'Utvikling. Illustrasjon: vijay verma / https://vijayverma.co / The MIT License',
    content: `## Hva er JAMStack?

JAMStack er en motode for hvordan nettsider utvikles og distribueres som gjør dem raskere, sikrere og enklere å skalere.

Tradisjonelle nettsider er avhenging av mange ulike cache-teknikker for å beskytte server og database mot overbelastning. JAMStack løser dette ut av boksen fordi hele nettsiden forhåndsgenereres til statiske filer, noe som vil gjøre at sider kan leveres lynraskt.

## Serverless hosting

JAMStack nettsider egner seg godt for serverless hosting, siden sluttproduktet er enkle statiske filer. Via slike tjenester distribueres globalt, uten noen sentralisert som kan påvirke ytelsen.`,
  },
  {
    url: routes.services,
    title: 'Utvikling av nettsider',
    description:
      'Utvikling av raske, moderne nettsider med fokus på ytelse, brukervennlighet og synlighet i søkemotorer',
    menuName: 'Utvikling',
    subTitle: 'Lynraske moderne nettsider som fungerer perfekt på mobil',
    image: 'content/images/pages/ux-screen.svg',
    imageAlt:
      'Utvikling. Illustrasjon: vijay verma / https://vijayverma.co / The MIT License',
    content: `Vi utvikler raske, moderne nettsider som er tilpasset deres behov og ønsker, og som er enkle å vedlikeholde.

  ## Utvikling av raskere nettsider

  Noen elsker raske biler, vi elsker raske nettsider. Teknisk handler dette om moderne teknikker for å sende akkurat det man trenger, for vise siden man først kommer til, men det handler også om en strategi i forhold til hvordan innhold og utforming av nettsidene løses både med tanke på ytelse og salgsbudskap.

  Mange nettsider har en andel på 80% av trafikk fra mobil, allikevel ser vi at mange eiere fortsatt fokuserer mest på hvordan sidene laster inn og ser ut på større skjermer.

  ## Utvikling av brukervennlige nettsider

  Brukervennlighet handler om forståelse. Man må forstå produktet, man må forstå kunden og man må forstå kjøpsprosessen. Gjennom dette kan man utforme et effektivt design som formidler og øker lønnsomheten.

  ## Utvikling av synlige nettsider

  For de fleste nettsider vil trafikk fra søkemotorer utgjøre en viktigst del av innkommende trafikk. Derfor er det spesielt viktig at HTML-koden på nettstedet er utformet riktig.`,
  },
  {
    url: routes.work,
    title: 'Referanser',
    description:
      'Se eksempler på jobber her - utvikling av raske, moderne nettsider',
    menuName: 'Referanser',
    subTitle:
      'Et utvalg at noen av våre kundecaser innen utvikling og design av nettsider',
    contentItems: [
      {
        title: 'Moderne nettsider for Navnelapper.no',
        content:
          'Navnelapper.no er en ledende aktør innen merking og navnelapper. Deres nettside er en moderne nettside som også er utviklet for flerspråklighet i de forskjellige landene de er etablert. [Se nettsiden her](https://www.navnelapper.no)',
        image: 'content/images/portfolio/navnelapper-nettside.jpg',
      },
      {
        title: 'Mobil app for Bokklubben',
        content:
          'Utvikling av mobil app for iOS og Android hvor medlemmer i Bokklubben kan handle produkter, avbestille medlemsbok og lese e-bøker. [Les om appen her](https://www.bokklubben.no/side.do?dokId=637209)',
        image: 'content/images/portfolio/bokklubben-app.jpg',
      },
      {
        title: 'Treningsvideoer med abonnement-løsning for Webtrening.no',
        content:
          'Webtrening treningsvideor og livetimer på en moderne nettside-plattform med integrasjoner mot innholdstjenester og betalingsløsningen Stripe. [Se nettsiden her](https://webtrening.no)',
        image: 'content/images/portfolio/webtrening-nettside.jpg',
      },
      {
        title: 'Moderne nettsider for Ordnett.no',
        content:
          'Ordnett er en tjeneste for digitale ordbøker for Kunnskapsforlaget. Nettsidene deres er en moderne javascript-applikasjon skrevet i ReactJS som via sitt backend kommuniserer med deres egen søketjeneste og deres CMS for sideinnhold for de forskjellige undersidene deres. [Se nettsiden her](https://www.ordnett.no)',
        image: 'content/images/portfolio/ordnett-nettside.jpg',
      },
      {
        title: 'Sykkelsportsnyheter med abonnement-løsning for Procycling.no',
        content:
          'Procycling.no er den ledende nettsider for sykkelsport nyheter i Norge, og vi har utviklet en abonnement-løsning på toppen av deres Wordpress-løsning som bruker abonnement-tjenesteene til betalingsløsningen Stripe. [Se nettsiden her](https://www.procycling.no)',
        image: 'content/images/portfolio/procycling-nettside.jpg',
      },
      {
        title: 'Gyldendal responsivt redesign',
        content:
          'Gyldendal er et av norges ledende forlag innen skjønn, fag og undervisningslitteratur. Sidene deres ble skrevet om med komponent-biblioteket Bootstrap som base for en mest mulig effektiv omskriving til responsive nettsider.',
        image: 'content/images/portfolio/gyldendal-nettside.jpg',
      },
      {
        title: 'Bedriftsside med profil for FjeldÅsheim & Nilsen AS',
        content:
          'FjeldÅsheim & Nilsen AS er et ingeniør og tømrer-firmat i Oslo. Sidene deres er en fullstack wordpress side. [Se nettsiden her](https://www.fjeldaasheim.no)',
        image: 'content/images/portfolio/fjeldaasheim-nettside.jpg',
      },
      {
        title: 'Nettside for Norges Bridge Forbund',
        content:
          'Design og utvikling av nettside for Norges Bridge Forbund. [Se nettsiden her](https://www.bridge.no)',
        image: 'content/images/portfolio/bridge-nettside.jpg',
      },
    ],
  },
  {
    url: routes.technologies,
    title: 'Teknologi og kompetanse',
    subTitle:
      'Våre kompetanseområder innen utvikling og design av nettløsninger',
    menuName: 'Teknologier',
    description:
      'Hvilke verktøy jobber vi med - utvikling av raske, moderne nettsider',
    image: 'content/images/pages/programming.svg',
    imageAlt:
      'Verktøy. Illustrasjon: vijay verma / https://vijayverma.co / The MIT License',
    content: `Generelt jobber vi med et riktig og allsidig utvalg innen mange forskjellige områder rundt leveranse av nettsider og applikasjoner.

Spesielt anbefaler vi teknologi og løsninger innen åpen kildekode som programvaremodel, fordi dette generelt fører til en høyere kvalitet på koden, siden alle kan være med å bidra med videreutvikling og feilretting.

## Moderne nettsider med JSX og lignende

Vårt hovedfelt er utvikling av nettsider innenfor rammeverkene ReactJS, Preact, NextJS, GatsbyJS og Svelte. Dette er visningsrammeverk som tillater dynamiske oppdateringer av nettsidene, som i kombinasjon med en NodeJS server lar oss skrive koden som kan kjøre både på server og ute i nettleseren til brukeren.

## NodeJS

Javascript ble opprinnelig funnet opp for å gi interaktivitet i nettleserene, men har siden beveget seg over til servere og backends, og i kombinasjon med rammeverkene for visningsrammeverkene over kan man med NodeJS utvikle nettsider med topp ytelse, samtidig som de oppfyller alle ønsker man har rundt moderne nettsider.

Gjennom NodeJS og økosystemet av moduler distribuert gjennom pakkesystemet NPM kan vi utvikle server og system-integrasjoner mot databaser og api-integrasjoner mot systemer som leverer innhold, betalingstjenester og lignende som de overliggende nettsidene har behov for.

## CMS og innholdstjenester

Siden de fleste CMS og innholdstjenester idag enten har et REST eller GraphQl api, så kan de fleste løsninger integreres mot moderne nettsider. Litt etter hva slags innholdsbehov en nettside har, bør man finne en løsning til er mest mulig egnet til dette.

For enklere nettsider til bedrifter og lignende så benytter vi ofte Wordpress fordi mange har høyre om og gjerne ønsker denne løsningen, og fordi det finnes et riktig utvalgt av maler som gir en kortere leveransetid og kostnad for nettsiden. 

Wordpress har også en REST api som gjør at den kan integreres modern en moderne nettside med en React frontend.
`,
  },
  {
    url: routes.contact,
    title: 'Kontakt oss',
    menuName: 'Kontakt oss',
    description:
      'Metabits AS ble stiftet i 2011 har har siden den gang jobbet både som underleverandør innen utvikling av nettsider og applikasjoner og som total-leverandør av fullstendige prosjekter.',
    image: 'content/images/pages/cafe.svg',
    imageAlt:
      'Kul sykkel. Illustrasjon: vijay verma / https://vijayverma.co / The MIT License',
    isButton: true,
    content: `Metabits AS ble stiftet i 2011 har har siden den gang jobbet både som underleverandør innen utvikling av nettsider og applikasjoner og som total-leverandør av fullstendige prosjekter med rådgiving, design av nettsider og utvikling av frontend og backend.

## Vi leverer kvalitet

Vårt fokus er å holde et konkurransedyktig prisnivå uten å kompromisse på kvaliteten. Uansett om prosjektet er stort eller lite, mener vi at et godt sluttresultat bare kan oppnås ved kvalitet i alle ledd i arbeidet.

## Tett samarbeid for best mulig produkt

Et godt samarbeid er alfa og omega for å utvikle akkurat de produktene dere ønsker dere. Deres kjennskap til målgruppe, bransje og konkurrenter er like viktig som våre kunnskaper om design og teknologi. Hvis avdelingene i virksomheten som senere skal bruke løsningen, blir involvert i prosjektet fra starten, skaper det både engasjement, eierskap og høy kompetanse.

*[Ta gjerne kontakt](mailto:gerhard@metabits.no) for et hyggelig samarbeid!*`,
  },
]

module.exports = {
  pages,
  routes,
}
