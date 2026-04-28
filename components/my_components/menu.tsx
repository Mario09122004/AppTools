import {
    Drawer,
    DrawerBackdrop,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    DrawerCloseButton,
} from '@/components/ui/drawer';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Box } from '@/components/ui/box';
import React from 'react';
import { useColorScheme } from 'react-native';
import { Divider } from '../ui/divider';
import {
    Foundation,
    FontAwesome,
    MaterialIcons,
    FontAwesome6,
    Octicons,
    Icon,
    CloseIcon,
    AntDesign,
} from './icons_providers';

const menuItems = [
    { provider: Foundation, icon: 'page-edit', text: 'Notes' },
    { provider: FontAwesome, icon: 'birthday-cake', text: 'Birthdays' },
    { provider: MaterialIcons, icon: 'casino', text: 'Randoms' },
    { provider: FontAwesome, icon: 'calendar-check-o', text: 'Habits' },
    { provider: Octicons, icon: 'tasklist', text: 'Task' },
    { provider: MaterialIcons, icon: 'assignment', text: 'Projects' },
    { provider: FontAwesome6, icon: 'money-bill-transfer', text: 'Loans' },
    { provider: MaterialIcons, icon: 'message', text: 'Auto-Message' },
    { provider: MaterialIcons, icon: 'auto-graph', text: 'Entrepreneurship' },
];

export default function Menu() {
    const [showDrawer, setShowDrawer] = React.useState(false);

    //Detect the theme in the device
    const colorScheme = useColorScheme();
    const iconColor = colorScheme === 'dark' ? 'white' : 'black';

    return (
        <>
            <Button
                onPress={() => {
                    setShowDrawer(true);
                }}
            >
                <ButtonText>
                    <AntDesign name="menu" size={20} />
                </ButtonText>
            </Button>
            <Drawer
                isOpen={showDrawer}
                size="full"
                anchor="top"
                onClose={() => {
                    setShowDrawer(false);
                }}
            >
                <DrawerBackdrop />
                <DrawerContent className='pt-12'>
                    <DrawerCloseButton>
                        <Icon as={CloseIcon} color={iconColor} />
                    </DrawerCloseButton>
                    <DrawerHeader className='justify-center'>
                        <Heading size="xl">------ MENU -------</Heading>
                    </DrawerHeader>
                    <DrawerBody contentContainerStyle={{ flexGrow: 1 }}>

                        <Box className="flex-1 justify-between py-4 min-h-[600px]">
                            {menuItems.map((item, index) => {
                                const IconCmp = item.provider;
                                return (
                                    <React.Fragment key={index}>
                                        <Button variant="link" action="primary" className='border-none w-full h-auto flex-row items-center justify-center gap-4 py-3'>
                                            <IconCmp name={item.icon as any} size={30} color={iconColor} />
                                            <ButtonText className='text-2xl'>
                                                {item.text}
                                            </ButtonText>
                                        </Button>

                                        {index < menuItems.length - 1 && <Divider />}
                                    </React.Fragment>
                                )
                            })}
                        </Box>

                    </DrawerBody>
                    <DrawerFooter>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
