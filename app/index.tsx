import React from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import Header from '@/components/my_components/header';
import { SafeAreaView } from '@/components/ui/safe-area-view';

export default function Home() {
  return (
    <SafeAreaView >
      <Box className="flex-1 bg-background-0">
        <Header />
        <Text className="text-typography-900 bg-yellow-600">Hello World!</Text>
      </Box>
    </SafeAreaView>
  );
}
