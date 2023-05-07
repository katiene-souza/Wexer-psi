import { Card } from "@/Utils/card/Card"
import { BoxLine, Container, Image, Main } from "./styled"
import { Button } from "@/Utils/button/Button"
import { OpenPopupMenu } from "./PopupMenu"
import { useState } from "react"

import EssentialElipse from "@/assets/icons/essentialElipse"
import Points from "@/assets/icons/points"



type Props = {
    title: string;
    date: string;
    content: string;
}

export const Facts = ({ title, content, date }: Props) => {
    const [facts, setfacts] = useState(false)

    const showFacts = () => setfacts(!facts)

    const dataFormatada = new Intl.DateTimeFormat('pt-Br', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date(date))


    return (
        <>
            <Container >
                {facts && <OpenPopupMenu isOpen={facts} onClose={() => setfacts(false)} />}
                <Card className="blue">
                    <Image>
                        <BoxLine className="blue" />
                        <EssentialElipse />
                    </Image>
                    <Main>
                        <Button type="button" onClick={showFacts}><Points /></Button>
                        <div>
                            <h1>{title}</h1>
                            <h2>{dataFormatada}</h2>
                        </div>
                        <p>{content}</p>
                    </Main>
                </Card>
            </Container>
        </>
    )
}