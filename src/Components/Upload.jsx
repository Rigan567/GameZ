import { Button, Container, HStack, VStack, Input } from '@chakra-ui/react';
import React from 'react';
import { RiUploadCloud2Fill } from 'react-icons/ri';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <VStack justifyContent={'center'} h={'full'} color={'purple.500'}>
        <RiUploadCloud2Fill size={'20vmax'} colorScheme={'purple'} />
        <form>
          <HStack>
            <Input
              required
              type={'file'}
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100%+36px)',
                  height: '100%',
                  marginLeft: '-18px',
                  color: 'purple',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                },
              }}
            />

            <Button type="submit" colorScheme="purple">
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
