import React from 'react';
import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingStyles = {
  w: '50%',
  pos: 'absolute',
  left: '50%',
  right: '50%',
  top: '480',
  transform: 'translate(-50%,-50%)',
  px: '2',
  py: '4',
  size: '3xl',
  textTransform: 'uppercase',
};
const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      swipeable={true}
      showStatus={false}
      showThumbs={true}
      showArrows={false}
    >
      <Box w={'full'} h={['fit-content', '100vh']}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingStyles}>
          Watch The Future
        </Heading>
      </Box>
      <Box w={'full'} h={['fit-content', '100vh']}>
        <Image src={img2} />
        <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingStyles}>
          Future is Gaming
        </Heading>
      </Box>
      <Box w={'full'} h={['fit-content', '100vh']}>
        <Image src={img3} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingStyles}>
          Gaming on Console
        </Heading>
      </Box>
      <Box w={'full'} h={['fit-content', '100vh']}>
        <Image src={img4} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingStyles}>
          Imagination is Cool
        </Heading>
      </Box>
    </Carousel>
  );
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          borderBottom={'2px solid'}
          w={'fit-content'}
          py={'2'}
          m="auto"
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} filter={'hue-rotate(-480deg)'} h={['40', '400']} />
          <Text letterSpacing={'widest'}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            repellat quod sunt natus, est enim minima eius adipisci aut quos
            assumenda ipsa omnis, dolor ex itaque veritatis facilis odio
            deserunt.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatem repellat quod sunt natus, est enim minima eius adipisci
            aut quos assumenda ipsa omnis, dolor ex itaque veritatis facilis
            odio deserunt.Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Voluptatem repellat quod sunt natus, est enim minima eius
            adipisci aut quos assumenda ipsa omnis, dolor ex itaque veritatis
            facilis odio deserunt.Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Voluptatem repellat quod sunt natus, est enim
            minima eius adipisci aut quos assumenda ipsa omnis, dolor ex itaque
            veritatis facilis odio deserunt.Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Voluptatem repellat quod sunt natus,
            est enim minima eius adipisci aut quos assumenda ipsa omnis, dolor
            ex itaque veritatis facilis odio deserunt.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
