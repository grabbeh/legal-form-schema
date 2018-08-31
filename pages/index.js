import React from 'react'
import Box from '../components/system/Box'
import Text from '../components/system/Text'
import Flex from '../components/system/Flex'
import { ThemeProvider } from 'styled-components'
import theme from '../components/system/theme'
import Link from 'next/link'
import ClearFix from '../components/styles/ClearFix'

class Index extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Box
          backgroundImage='linear-gradient(to right, #f2545b, #ff7a59)'
          bg={'light-red'}
          p={4}
        >
          <Text letterSpacing='0.5em' fontWeight={'bold'} mb={4} fontSize={32}>
            LEGAL BUILDER
          </Text>
          <Flex flexWrap='wrap' flex='1 1 auto'>
            <Box className='fl' width={[1 / 4]}>
              <Box
                className='home-shadow'
                display='inline-block'
                bg={'white'}
                color={'black'}
                mb={4}
                mr={4}
                p={3}
                height={200}
              >
                <Text fontSize={24} mb={2} fontWeight='bold'>
                  Build agreements with step-by-step forms and data
                </Text>
                <Link href='/agreement-builder'><a>Agreement builder</a></Link>
              </Box>
            </Box>
            <Box className='fl' width={[1 / 4]}>
              <Box
                className='home-shadow'
                color={'black'}
                bg={'white'}
                mb={4}
                height={200}
                p={3}
              >
                <Text fontSize={24} mb={2} fontWeight='bold'>
                  Build forms so people can build agreements
                </Text>
                <Link href='/form-builder'><a>Form builder</a></Link>
              </Box>
            </Box>
            <ClearFix />
            <Box
              className='home-shadow'
              color={'black'}
              bg={'white'}
              height={200}
              width={[1 / 2]}
              p={3}
            >
              <Text fontSize={24} mb={2} fontWeight='bold'>
                JSON-based Schema to define form steps for interoperability
              </Text>
              <Link href='/schema-definition'>
                <a>Schema definition</a>
              </Link>
            </Box>
          </Flex>
        </Box>
      </ThemeProvider>
    )
  }
}

export default Index
