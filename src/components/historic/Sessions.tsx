import { Card } from "@/Utils/card/Card"
import { BoxLine, Container, Image, Main } from "./styled"
import { Button } from "@/Utils/button/Button"
import { OpenPopupMenu } from "./PopupMenu"
import { useState } from "react"

import SessionElipse from "@/assets/icons/sessionElipse"
import Points from "@/assets/icons/points"
import { Link } from "react-router-dom"

type Props = {
    title: string;
    date: string;
    content: string;
}


export const Sessions = ({title, date, content}: Props) => {
    const [session, setSession] = useState(false)

    const showSession= () => setSession(!session)

    const dataFormatada = new Intl.DateTimeFormat('pt-Br', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date(date))

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
                        <h1>{title}</h1>
                        <h2>{dataFormatada}</h2>
                    </div>
                        <p>{content} <Link to="/review"><p>Ver mais</p></Link></p>
                </Main>
            </Card>
        </Container>
    )
}