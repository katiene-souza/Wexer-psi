import { Card } from "@/Utils/card/Card"
import { BoxLine, Container, Image, Main } from "./styled"
import { Button } from "@/Utils/button/Button"
import { OpenPopupMenu } from "./PopupMenu"
import { useState } from "react"

import SessionElipse from "@/assets/icons/sessionElipse"
import Points from "@/assets/icons/points"

export const Sessions = () => {
    const [session, setSession] = useState(false)

    const showSession= () => setSession(!session)

    return (

        <Container >
              {session && <OpenPopupMenu isOpen={session} onClose={() => setSession(false)} />}
            <Card className="green">
                <Image>
                    <BoxLine className="green"/>
                    <SessionElipse />  
                </Image>
                <Main>
                    <Button type="button" onClick={showSession}><Points /></Button>
                    <div>
                        <h1>Sessão</h1>
                        <h2>22 de setembro 2022</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum temporibus incidunt odio sed dolorem est mollitia quaerat exercitationem recusandae tenetur. Ullam doloremque illo perspiciatis soluta, qui odit inventore ab itaque!</p>
                </Main>
            </Card>
        </Container>
    )
}