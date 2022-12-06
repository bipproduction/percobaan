import { Box, Button, Card, Center, Group, Input, Modal, Paper, Stack, Text, Textarea, Title } from "@mantine/core"
import { IconLock } from "@tabler/icons"
import { useState } from "react"
import KotakCard from "../../components/kotak_card"
import LayoutDefault from "../../layouts/layout_default"
import IsiTampungan from "../../models/dataku"

const listData: IsiTampungan | any = [
    {
        "id": 1,
        "nama": "malik"
    },
    {
        "id": 2,
        "nama": "bagas"
    },
    {
        "id": 3,
        "nama": "alif"
    }
]



const MyHome = () => {
    const [opened, setOpened] = useState(false)
    const [tampungan, settampungan] = useState<IsiTampungan>()

    return (<>
        <LayoutDefault>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Introduce yourself!"
            >
                <Box>
                    <Stack>
                        {listData.map((itm: IsiTampungan) =>
                            <Button
                                key={itm.id}
                                onClick={() => {
                                    settampungan(itm)
                                    setOpened(false)
                                }}>
                                {itm.nama}
                            </Button>)}

                        {JSON.stringify(tampungan)}
                    </Stack>
                </Box>
            </Modal>

            <Button onClick={() => setOpened(true)}>
                Buaka Modal
            </Button>
            {tampungan && <KotakCard key={tampungan.id} id={tampungan.id} nama={tampungan.nama} />}


            {/* {listData.map((itm: IsiTampungan) => <KotakCard id={itm.id} nama={itm.nama} key={itm.id} />)} */}
        </LayoutDefault>
    </>)
}



export default MyHome