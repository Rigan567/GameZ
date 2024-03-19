import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { MdSend } from 'react-icons/md';
// import { FaFacebook } from 'react-icons/fa6';
import { SiInstagram, SiFacebook, SiGithub } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box bgColor={'black'} minH={'40'} w={'full'} color={'white'}>
      <Stack direction={['column', 'row']} py={'5'}>
        <VStack px={'4'} w={'full'} alignContent={'stretch'}>
          <Heading
            size="md"
            w={'full'}
            textTransform={'uppercase'}
            color={'white'}
            textAlign={['center', 'left']}
          >
            A Platform dedicated to Gamers
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'} w={'full'}>
            <Input
              w={'full'}
              placeholder="Enter your Email .. "
              outline={'none'}
              border={'none'}
              borderRadius={'none'}
              // borderBottom={'2px solid white'}
              color={'white'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme="purple"
              borderRadius={'0 25px 25px 0'}
              variant={'ghost'}
            >
              <MdSend size={'25'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          justifyContent={'center'}
        >
          <Heading color={'white'} textAlign={'center'}>
            GameHub
          </Heading>
          <Text>All Right Reserved </Text>
        </VStack>
        <VStack w={'full'}>
          <Heading
            py={['5', '0']}
            color={'white'}
            textAlign={'center'}
            size={'md'}
            textTransform={'uppercase'}
          >
            Social Media
          </Heading>
          <HStack py={['none', '5']}>
            <Button variant={'ghost'} colorScheme="white">
              <Link to={'https://www.facebook.com/'}>
                <SiFacebook size={'30px'} />
              </Link>
            </Button>
            <Button variant={'ghost'} colorScheme="white">
              <Link to={'https://www.instagram.com'}>
                <SiInstagram size={'30px'} />
              </Link>
            </Button>
            <Button variant={'ghost'} colorScheme="white">
              <Link to={'https://www.github.com'}>
                <SiGithub size={'30px'} />
              </Link>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
