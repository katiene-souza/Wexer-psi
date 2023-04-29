import { Card } from "@/Utils/card/Card"
import EssentialElipse from "@/assets/icons/essentialElipse"
import { BoxLine, Container, Image, Main } from "./styled"
import Points from "@/assets/icons/points"
import { Button } from "@/Utils/button/Button"
import { useState } from "react"
import { OpenPopupMenu } from "./PopupMenu"



export const Facts = () => {

    const [facts, setfacts] = useState(false)

    const showFacts = () => setfacts(!facts)

    return (
        <>
        <Container >
        {facts && <OpenPopupMenu isOpen={facts} onClose={() => setfacts(false)} />}
            <Card className="blue">
                <Image>
                    <BoxLine className="blue"/>
                    <EssentialElipse />
                </Image>
                <Main>
                    <Button type="button" onClick={showFacts}><Points /></Button>
                    <div>
                        <h1>Fato relevante</h1>
                        <h2>22 de setembro 2022</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum temporibus incidunt odio sed dolorem est mollitia quaerat exercitationem recusandae tenetur. Ullam doloremque illo perspiciatis soluta, qui odit inventore ab itaque!</p>
                </Main>
            </Card>
        </Container>
        </>
    )
}