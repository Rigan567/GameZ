import {
  Heading,
  Container,
  Button,
  Box,
  Input,
  VStack,
} from '@chakra-ui/react';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Signup = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const submitHandler=(e)=>{
  //   e.preventDefault();

  // }

  return (
    <Box h={'100vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'5'}>
        <BsFillPersonLinesFill size={'15vmax'} colorScheme={'purple'} />
        <Heading textAlign={'center'}>Sign UP</Heading>
        <form>
          <VStack
            spacing={'4'}
            alignItems={'stretch'}
            w={'96'}
            m={'auto'}
            my={'16'}
          >
            <Input
              type="email"
              placeholder="Enter Email .. "
              borderRadius={'20px 0 20px 0 '}
              // borderBottom={'2px solid white'}

              required
              focusBorderColor={'purple.500'}
              textAlign={'center'}
              // onChange={e => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Enter Password .. "
              borderRadius={'20px 0 20px 0 '}
              // borderBottom={'2px solid white'}

              required
              focusBorderColor={'purple.500'}
              textAlign={'center'}
              // onChange={e => setPassword(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Enter Password Again .. "
              borderRadius={'20px 0 20px 0 '}
              // borderBottom={'2px solid white'}

              required
              focusBorderColor={'purple.500'}
              // onChange={e => setEmail(e.target.value)}
              textAlign={'center'}
            />
            <Input
              type="number"
              placeholder="Enter Phone Number .. "
              borderRadius={'20px 0 20px 0 '}
              // borderBottom={'2px solid white'}

              required
              focusBorderColor={'purple.500'}
              // onChange={e => setEmail(e.target.value)}
              textAlign={'center'}
            />

            <Button type="submit" colorScheme="purple">
              Signup
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default Signup;
