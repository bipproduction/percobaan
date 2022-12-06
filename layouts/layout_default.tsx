import { PropsWithChildren, useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    NavLink,
} from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconActivity } from "@tabler/icons"

const listNav = [
    {
        "id": 1,
        "label": "home",
        "href": "/home",
        "icon": IconActivity
    },
    {
        "id": 2,
        "label": "home 2",
        "href": "/home",
        "icon": IconActivity
    },
    {
        "id": 3,
        "label": "List Data",
        "href": "/home",
        "icon": IconActivity
    },
    {
        "id": 4,
        "label": "Laporan",
        "href": "/home",
        "icon": IconActivity
    },
    {
        "id": 5,
        "label": "Setting",
        "href": "/home",
        "icon": IconActivity
    }
]

export default function LayoutDefault({ children }: PropsWithChildren) {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const router = useRouter()
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                    {listNav.map((item) => <NavLink key={item.id} label={item.label} onClick={() => router.push('/home')} icon={<item.icon color={"orange"} stroke={2}/>} />)}
                </Navbar>
            }
            // aside={
            //     <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            //         <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            //             <Text>Application sidebar</Text>
            //         </Aside>
            //     </MediaQuery>
            // }
            // footer={
            //     <Footer height={60} p="md">
            //         Application footer
            //     </Footer>
            // }
            header={
                <Header height={{ base: 50, md: 70 }} p="md">
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <Text>Application header</Text>
                    </div>
                </Header>
            }
        >
            {children}
        </AppShell>
    );
}