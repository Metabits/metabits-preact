async function getContent() {
  const pages = [
    {
      url: '/',
      title: 'Metabits - utvikling av nettsider og applikasjoner',
      menuName: 'Hjem',
      content: 'Here comes content for homepage',
    },
    {
      url: '/utvikling',
      title: 'Utvikling av nettsider',
      menuName: 'Tjenester',
      content: 'Here comes content for about page',
    },
    {
      url: '/referanser',
      title: 'Referanser',
      menuName: 'Referanser',
      content: 'Here comes content for about page',
    },
    {
      url: '/teknologier',
      title: 'Teknologi og verktøy',
      menuName: 'Teknologier',
      content: 'Here comes content for about page',
    },
    {
      url: '/kontakt-oss',
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
  return pages.map(({ url, title, ...page }) => ({
    url,
    title,
    seo: {
      title,
    },
    layout,
    ...page,
  }))
}

module.exports = getContent
