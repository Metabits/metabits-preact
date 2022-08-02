import { h } from 'preact'
import { Link } from 'preact-router/match'
import tw, { styled, css } from 'twin.macro'
import { icon as faBars } from '@fortawesome/fontawesome-free-solid/faBars'
import { useState, useEffect, useRef } from 'preact/hooks'

import Logo from 'atoms/Logo'
import Wrapper from 'atoms/Wrapper'
import Button from 'atoms/Button'
import Icon from 'atoms/Icon'
import Sidebar from 'components/Sidebar'

const Container = styled.header([tw`py-4`])
const HeaderInner = styled.header([tw`flex items-center justify-between`])
const SidebarNav = styled.nav([
  {
    a: tw`block text-white text-lg py-3 mr-2 font-light mb-1 text-xl text-center`,
    'a.active': tw`text-primary`,
  },
])
const DesktopNav = styled.nav([
  tw`hidden lg:block`,
  {
    'a.nav-item': tw`inline-block text-white text-lg py-3 px-4 mr-4 font-light hocus:(text-primary underline)`,
    'a.active': tw`text-primary`,
  },
])

const Header = ({ menu, url }) => {
  const primaryMenu = menu?.filter(({ isButton }) => !isButton)
  const secondaryMenu = menu?.filter(({ isButton }) => isButton)
  const [visible, setVisible] = useState(false)
  const onToggle = () => setVisible(!visible)
  const refUrl = useRef(url)
  useEffect(() => {
    if (url !== refUrl.current) {
      window.scrollTo(0, 0)
      refUrl.current = url
      setVisible(false)
    }
  }, [url, setVisible, refUrl])
  return (
    <Container>
      <Wrapper>
        <HeaderInner>
          <Logo />
          <DesktopNav>
            {primaryMenu &&
              primaryMenu.map(({ menuName, url }, i) => (
                <Link
                  key={i}
                  href={url}
                  class="nav-item"
                  activeClassName="active"
                >
                  {menuName}
                </Link>
              ))}
            {secondaryMenu &&
              secondaryMenu.map(({ menuName, url }, i) => (
                <Button key={i} as={Link} href={url} rounded={false}>
                  {menuName}
                </Button>
              ))}
          </DesktopNav>
          <Button
            className={css(tw`lg:hidden text-xl px-0 w-10 h-10`)}
            onClick={onToggle}
            aria-label="Vis meny"
          >
            <Icon icon={faBars} />
          </Button>
        </HeaderInner>
      </Wrapper>
      <Sidebar
        visible={visible}
        onClose={onToggle}
        className={css(tw`lg:hidden`)}
      >
        <SidebarNav>
          {menu &&
            menu.map(({ menuName, url }, i) => (
              <Link key={i} href={url} activeClassName="active">
                {menuName}
              </Link>
            ))}
        </SidebarNav>
      </Sidebar>
    </Container>
  )
}

export default Header
