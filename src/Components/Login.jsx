import {
  Heading,
  Container,
  Button,
  Box,
  Input,
  VStack,
} from '@chakra-ui/react';

import { AiOutlineLogin } from 'react-icons/ai';

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const submitHandler=(e)=>{
  //   e.preventDefault();

  // }

  return (
    <Box h={'100vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'5'}>
        <AiOutlineLogin size={'20vmax'} colorScheme={'purple'} />
        <Heading textAlign={'center'}>Login</Heading>
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
              // onChange={e => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Enter Password .. "
              borderRadius={'20px 0 20px 0 '}
              // borderBottom={'2px solid white'}

              required
              focusBorderColor={'purple.500'}

              // onChange={e => setPassword(e.target.value)}
            />

            <Button type="submit" colorScheme="purple">
              Login
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default Login;
