import React, { useMemo } from 'react';
import useSWR from 'swr';
import { useGetMetrics, useGetTime } from '../hooks';
import axios from 'axios';
import { Box, Code, HStack, Skeleton, VStack } from '@chakra-ui/react';

export default function MetricsPanel() {
  const { data: metrics, isLoading } = useGetMetrics();

  const formattedMetrics = useMemo(() => {
    if (!metrics) return;
    return metrics.split('\n').filter((line) => line.trim() !== '');
  }, [metrics]);

  return (
    <Box overflow="scroll" maxH="100vh" p="12" bg="gray.800">
      <Skeleton isLoaded={!isLoading}>
        {formattedMetrics &&
          formattedMetrics.map((line) => (
            <Code bg="none" color="gray.200" key={line}>
              {line}
            </Code>
          ))}
      </Skeleton>
    </Box>
  );
}
