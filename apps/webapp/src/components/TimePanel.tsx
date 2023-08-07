import { useGetTime, useTimeDifference } from '../hooks';
import { Box, Center, Skeleton, Text, VStack } from '@chakra-ui/react';

type Props = {};

export default function TimePanel({}: Props) {
  const { data, isLoading } = useGetTime();
  const diff = useTimeDifference(data?.epoch);

  return (
    <Center p="12">
      <Skeleton isLoaded={!isLoading}>
        <VStack align="start" spacing={10}>
          {data && (
            <Text fontSize="x-large">
              <Box as="strong">Server Time (EPOCH)</Box>:{data.epoch}
            </Text>
          )}
          {diff && (
            <Text fontSize="x-large">
              <Box as="strong">Client/Service Time Difference</Box>:{diff}
            </Text>
          )}
        </VStack>
      </Skeleton>
    </Center>
  );
}
