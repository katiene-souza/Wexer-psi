import { Card } from "@/Utils/card/Card"
import { BoxLine, Container, Image, Main } from "./styled"
import { Button } from "@/Utils/button/Button"

import AnnexElipse from "@/assets/icons/annexElipse"
import Points from "@/assets/icons/points"
import { useState } from "react"
import { OpenPopupMenu } from "./PopupMenu"


export const DocumentsAnnex = () => {

    const [documentsAnnex, setDocumentsAnnex] = useState(false)

    const showDocumentsAnnex = () => setDocumentsAnnex(!documentsAnnex)

    return (
        <Container >
             {documentsAnnex && <OpenPopupMenu isOpen={documentsAnnex} onClose={() => setDocumentsAnnex(false)} />}
            <Card className="purple">
                <Image>
                    <BoxLine className="purple"/>
                    <AnnexElipse />
                </Image>
                <Main>
                    <Button type="button" onClick={showDocumentsAnnex}><Points /></Button>
                    <div>
                        <h1>Documentos importantes</h1>
                        <h2>22 de setembro 2022</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum temporibus incidunt odio sed dolorem est mollitia quaerat exercitationem recusandae tenetur. Ullam doloremque illo perspiciatis soluta, qui odit inventore ab itaque!</p>
                </Main>
            </Card> 
        </Container>
    )
}