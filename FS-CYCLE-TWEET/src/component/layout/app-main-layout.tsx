import { Flex, Grid, GridItem } from '@chakra-ui/react';
import SidebarLeft from '../ui/Left-sidebar';

interface LayoutProps {
  mainContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export const MainLayout = ({ mainContent, rightContent }: LayoutProps) => (
  <Grid
    p="20px"
    gridTemplateColumns={{ base: '1fr', md: 'repeat(6, 1fr)' }}
    templateAreas={`
      "sidebar-left main main sidebar-right"
      "sidebar-left main main sidebar-right"`}
    templateRows="repeat(2, 1fr)"
    gap="2"
  >
    <GridItem
      colSpan={{ base: 0, md: 1 }}
      maxWidth={'300px'}
      rowSpan={2}
      area="sidebar-left"
    >
      <SidebarLeft />
    </GridItem>
    <GridItem
      colSpan={{ base: 2, md: 3 }}
      rowSpan={2}
      area="main"
      minWidth={'360px'}
    >
      <Flex
        h="full"
        flexDir="column"
        borderX="1px"
        borderColor="#3F3F3F"
      >
        {mainContent}
      </Flex>
    </GridItem>
    <GridItem
      colSpan={{ base: 0, md: 2 }}
      display={{ base: 'none', md: 'block' }}
      rowSpan={2}
      area="sidebar-right"
    >
      {rightContent}
    </GridItem>
  </Grid>
);
