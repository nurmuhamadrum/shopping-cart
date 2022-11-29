import React from 'react';
import {
  Flex,
  Text,
  Card,
  CardBody,
  Image,
  HStack,
  Input,
  Button,
  Divider,
  Select,
  useNumberInput,
  useMediaQuery
} from '@chakra-ui/react';
// ASSETS
import { iconHeart, iconShoppingCart, iconTrash } from '../../Assets';

export default function HomeScreen() {
  const [isMobileView] = useMediaQuery('(max-width: 1000px)');

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 3,
      // onChange: (number) => countPrice(number)
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Flex flexDirection={'column'} alignItems={'center'} padding={isMobileView ? '34px 20px 34px 20px' : '64px 100px 24px 100px'} background={'#F4F4F4'} h={isMobileView ? 'auto' :'100vh'}>
      <Text fontSize={24} fontWeight={'extrabold'} mb={'32px'}>Shopping Cart</Text>
      <Flex w={'100%'} flexDirection={isMobileView ? 'column' : 'row'}>

        {/** Content Section */}
        <Card flex={3} mr={!isMobileView && '28px'} shadow={'lg'} background={'#FAFAFA'}>
          <CardBody>
            <Text fontWeight={'bold'}>Cart (2 Item)</Text>
            <Flex mt={6} justifyContent={'space-between'} flexDirection={isMobileView ? 'column' : 'row'}>
              <Image h={'300px'} w={isMobileView ? '100%' :'200px'} objectFit={'cover'} rounded={'lg'} src={'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80'} />
              <Flex flex={1} padding={isMobileView ? '20px 0px 20px 0px' : '0px 24px 0px 24px'} flexDirection={'column'}>
                <Text fontWeight={'bold'} fontSize={'24px'}>Yellow Flanel</Text>
                <Text mt={2} fontSize={'14px'}>FLANEL - YELLOW</Text>
                <Text mt={8} fontSize={'14px'}>COLOR - YELLOW</Text>
                <Text mt={2} fontSize={'14px'}>SIZE - M</Text>
                <Flex mt={10} flexDirection={isMobileView ? 'column' : 'row'}>
                  <Button alignItems={'center'} background={isMobileView ? '#F4F4F4' : '#FAFAFA'}>
                    <Image src={iconShoppingCart} h={4} w={4} mr={2} />
                    <Text>ADD ITEM ITEM</Text>
                  </Button>
                  <Button ml={!isMobileView && 4} mt={isMobileView && 4} alignItems={'center'} background={isMobileView ? '#F4F4F4' : '#FAFAFA'}>
                    <Image src={iconHeart} h={4} w={4} mr={2} />
                    <Text>MOVE TO WISH LIST</Text>
                  </Button>
                </Flex>
              </Flex>
              <Flex flexDirection={'column'} alignItems={isMobileView && 'center'}>
                <HStack maxW='220px' mb={4}>
                  <Button {...dec} h={8}>-</Button>
                  <Input h={8} width={'45px'} {...input} />
                  <Button {...inc} h={8}>+</Button>
                </HStack>
                <Flex justifyContent={'center'}>
                  <Text fontSize={'14px'}>Note (1 Place)</Text>
                </Flex>
                <Flex justifyContent={'end'} mt={isMobileView ? '24px' :'120px'}>
                  <Text fontSize={'24px'} fontWeight={'bold'} >$35.99</Text>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>

        {/** Cart Section */}
        <Flex flexDirection={'column'} flex={1.5} mt={isMobileView && 4}>
          <Card shadow={'lg'} background={'#FAFAFA'} h={'85%'} mb={4}>
            <CardBody>
              <Text fontSize={'18px'} fontWeight={'bold'}>The total amount of</Text>
              <Flex justifyContent={'space-between'} mt={8} alignItems={'center'}>
                <Text>Temporary amount</Text>
                <Text>$35.99</Text>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2.5} alignItems={'center'}>
                <Text>Shipping</Text>
                <Text>Free</Text>
              </Flex>
              <Divider mt={16} mb={4} />
              <Flex justifyContent={'space-between'} alignItems={'center'} mb={4}>
                <Text fontSize={'18px'} fontWeight={'bold'}>The total amount of</Text>
                <Text fontWeight={'bold'}>$54.99</Text>
              </Flex>
              <Button w={'100%'} colorScheme={'blue'}>
                <Text>GO TO CHECKOUT</Text>
              </Button>
            </CardBody>
          </Card>
          <Select fontSize={'16px'} placeholder='Add a discount [optional]' background={'#FAFAFA'} shadow={'lg'} size={'lg'}>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Flex>
      </Flex>
    </Flex>
  )
}
