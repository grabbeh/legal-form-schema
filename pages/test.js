import Button from '../components/system/Button'
import Box from '../components/system/Box'
import theme from '../components/styles/theme'
import Text from '../components/system/Text'
import { ThemeProvider } from 'styled-components'

const Test = () => (
  <ThemeProvider theme={theme}>
    <Box
      mt={3}
      justifyContent='center'
      p={3}
      bg={'light-blue'}
      width={1 / 2}
      height={150}
      m={'auto'}
    >
      <Button m={'auto'} px={3} py={2} color='white' bg='blue'>
        <Text fontWeight='bold'>TEST</Text>
      </Button>
    </Box>
  </ThemeProvider>
)

export default Test
