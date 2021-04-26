import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Victor Novais</Text>
        <Text color="gray.300" fontSize="small">
          victor96novais@gmail.com
            </Text>
      </Box>

      <Avatar size="md" name="Victor Novais" src="https://github.com/victorb132.png" />
    </Flex>
  )
}