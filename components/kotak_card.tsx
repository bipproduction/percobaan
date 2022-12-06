import { Card, Text, Title } from "@mantine/core"
import IsiTampungan from "../models/dataku"


const KotakCard = ({ id, nama }: IsiTampungan) => {

    if (!id || !nama) return <Text>data masih kosong</Text>
    return (<>
        <Card bg={"cyan"} p="lg" m={"xs"}>
            <Title color={"white"}>{id}</Title>
            <Text color={"white"}>{nama}</Text>
        </Card>
    </>)
}

export default KotakCard