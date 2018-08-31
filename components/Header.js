import Text from '../components/system/Text'
import Box from '../components/system/Box'
import Link from 'next/link'

const Header = () => (
  <Box pt={3} pl={3}>
    <Text letterSpacing='0.5em' fontWeight={'bold'} fontSize={20}>
      <Link href='/'><a className='link black hover'>LEGAL BUILDER</a></Link>
    </Text>
  </Box>
)

export default Header
