const routes = {
  home: '/',
  services: '/utvikling',
  work: '/referanser',
  technologies: '/teknologier',
  contact: '/kontakt-oss',
}

const pages = [
  {
    url: routes.home,
    title: 'Metabits - utvikling av nettsider og applikasjoner',
    description: 'Noe kommer her',
    menuName: 'Hjem',
    hero: {
      image: 'content/images/pages/rocket.svg',
      imageAlt:
        'Rakett. Illustrasjon: vijay verma / https://vijayverma.co / The MIT License',
      title:
        'Utvikling, design, universelt utformet, ytelse, intuitiv grensesnitt, analyse',
      subTitle:
        'Veien er smal, farene mange, men stien til den perfekte nettsiden er innenfor rekkevidde!',
      primaryLink: routes.services,
      primaryLinkName: 'Fortell mer',
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
        linkText: 'Les om serverless og JAMStack',
      },
      {
        image: 'content/images/pages/ux-screen.svg',
        imageAlt:
          'Ux skjermer.. Illustrasjon: vijay verma / https://vijayverma.co / The MIT License',
        preTitle: 'En utfordring:',
        title:
          'Hvordan lever top ytelse til et globalt publikum, uten lorem ipsum deja vu?',
        link: routes.services,
        linkText: 'Les om serverless og JAMStack',
      },
    ],
  },
  {
    url: routes.services,
    title: 'Utvikling av nettsider',
    menuName: 'Utvikling',
    subTitle: 'Here comes content for about page',
    image: 'content/images/pages/app-development.svg',
    imageAlt:
      'Utvikling. Illustrasjon: vijay verma / https://vijayverma.co / The MIT License',
    content: `Noe mer kommer her`,
  },
  {
    url: routes.work,
    title: 'Referanser',
    menuName: 'Referanser',
    subTitle: 'Her er noen av produktene vi har vært med å jobbe med',
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
    description: 'Hvilke ',
    image: 'content/images/pages/tools.svg',
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
    image: 'content/images/pages/bike.svg',
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
