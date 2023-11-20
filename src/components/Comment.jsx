import { Avatar } from '@chakra-ui/react';
import { Flex, Text } from '@chakra-ui/react';

const Comment = ({reply}) => {
  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
      <Avatar src={reply.userProfilePic} size={"sm"}/>
        <Flex gap={1} w={"full"} flexDirection={"column"}>
        <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize="sm" fontWeight="bold">
            {reply.username}
        </Text>
        <Flex>
            <Text>{reply.text}
            </Text>
        </Flex>
        </Flex></Flex>
      </Flex>
    </>
  )
}

export default Comment