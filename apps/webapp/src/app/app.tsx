import { SimpleGrid } from '@chakra-ui/react';
import MetricsPanel from '../components/MetricsPanel';
import TimePanel from '../components/TimePanel';

export function App() {
  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} spacing={10}>
        <TimePanel />
        <MetricsPanel />
      </SimpleGrid>
    </>
  );
}

export default App;
