const routes = {
  home: '/',
  services: '/utvikling',
  work: '/referanser',
  technologies: '/teknologier',
  contact: '/kontakt-oss',
}

const content = `## Lorem ipsum dolor sit amet (h2)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Lorem ipsum dolor sit amet (h3)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

#### Lorem ipsum dolor sit amet (h4)

Lorem ipsum [dolor sit amet](/), consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`

async function getContent() {
  const pages = [
    {
      url: routes.home,
      title: 'Metabits - utvikling av nettsider og applikasjoner',
      description: 'Noe kommer her',
      menuName: 'Hjem',
      hero: {
        img: 'rocket',
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
          img: 'fish',
          preTitle: 'Sannheten er:',
          title:
            'De fleste nettsider er oppblåste og bygd i rammeverk som aldri lar deg nå maks ytelse',
          link: routes.services,
          linkText: 'Les om serverless og JAMStack',
        },
        {
          img: 'devices',
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
      content,
    },
    {
      url: routes.work,
      title: 'Referanser',
      menuName: 'Referanser',
      content: 'Here comes content for about page',
    },
    {
      url: routes.technologies,
      title: 'Teknologi og verktøy',
      menuName: 'Teknologier',
      content: 'Here comes content for about page',
    },
    {
      url: routes.contact,
      title: 'Kontakt oss',
      menuName: 'Kontakt oss',
      isButton: true,
      content: 'Here comes content for about page',
    },
  ]
  const layout = {
    menu: pages
      .filter(({ menuName }) => menuName)
      .map(({ menuName, url, isButton }) => ({
        menuName,
        url,
        isButton,
      })),
  }
  return pages.map(({ url, title, description, ...page }) => ({
    url,
    title,
    description,
    seo: {
      title,
      description,
    },
    layout,
    ...page,
  }))
}

module.exports = getContent
