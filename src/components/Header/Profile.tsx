import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Victor Novais</Text>
          <Text color="gray.300" fontSize="small">
            victor96novais@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Victor Novais" src="https://github.com/victorb132.png" />
    </Flex>
  )
}