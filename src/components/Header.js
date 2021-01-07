import { h } from 'preact'
import { Link } from 'preact-router/match'
import tw, { styled, theme, css } from 'twin.macro'
import { icon as faBars } from '@fortawesome/fontawesome-free-solid/faBars'
import { useState, useEffect } from 'preact/hooks'

import Logo from 'atoms/Logo'
import Wrapper from 'atoms/Wrapper'
import Button from 'atoms/Button'
import Icon from 'atoms/Icon'
import Sidebar from 'components/Sidebar'

const Container = styled.header([tw`py-4`])
const HeaderInner = styled.header([tw`flex items-center justify-between`])
const NavItem = styled(Link)([
  tw`inline-block text-white text-lg py-3 px-4 mr-4 font-light`,
  {
    '&.active': {
      color: theme`colors.primary`,
    },
  },
])
const NavItemSidebar = styled(Link)([
  tw`block text-white text-lg py-3  mr-2 font-light mb-1 text-xl text-center`,
  {
    '&.active': {
      color: theme`colors.primary`,
    },
  },
])
const DesktopNav = styled.nav([tw`hidden lg:block`])

const Header = ({ menu, url }) => {
  const primaryMenu = menu.filter(({ isButton }) => !isButton)
  const secondaryMenu = menu.filter(({ isButton }) => isButton)
  const [visible, setVisible] = useState(false)
  const onToggle = () => setVisible(!visible)
  useEffect(() => {
    setVisible(false)
  }, [url, setVisible])
  return (
    <Container>
      <Wrapper>
        <HeaderInner>
          <Logo />
          <DesktopNav>
            {primaryMenu.map(({ menuName, url }, i) => (
              <NavItem key={i} href={url} activeClassName="active">
                {menuName}
              </NavItem>
            ))}
            {secondaryMenu.map(({ menuName, url }, i) => (
              <Button key={i} as={Link} href={url} rounded={false} size="md">
                {menuName}
              </Button>
            ))}
          </DesktopNav>
          <Button
            className={css(tw`lg:hidden text-xl px-0 w-10 h-10`)}
            onClick={onToggle}
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
        {menu.map(({ menuName, url }, i) => (
          <NavItemSidebar key={i} href={url} activeClassName="active">
            {menuName}
          </NavItemSidebar>
        ))}
      </Sidebar>
    </Container>
  )
}

export default Header
