import { Card } from "@/Utils/card/Card"
import { BoxLine, Container, Image, Main, SaveAnnex } from "./styled"
import { Button } from "@/Utils/button/Button"
import { OpenPopupMenu } from "./PopupMenu"

import AnnexElipse from "@/assets/icons/annexElipse"
import Points from "@/assets/icons/points"

import { useState } from "react"
import Pdf from "@/assets/pdf"

type Props = {
    title: string;
    date: string;
    content: string;
    file: any;
}

export const DocumentsAnnex = ({ title, content, date, file }: Props) => {
    const [documentsAnnex, setDocumentsAnnex] = useState(false)

    const showDocumentsAnnex = () => setDocumentsAnnex(!documentsAnnex)

    const dataFormatada = new Intl.DateTimeFormat('pt-Br', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date(date))

    return (
        <Container >
            {documentsAnnex && <OpenPopupMenu isOpen={documentsAnnex} onClose={() => setDocumentsAnnex(false)} />}
            <Card className="purple">
                <Image>
                    <BoxLine className="purple" />
                    <AnnexElipse />
                </Image>
                <Main>
                    <Button type="button" onClick={showDocumentsAnnex}><Points /></Button>
                    <div>
                        <h1>{title}</h1>
                        <h2>{dataFormatada}</h2>
                    </div>
                    <p>{content}</p>
                    <SaveAnnex>
                        <p>02 anexos</p>
                        <Button type="button">
                            <Pdf />
                            <p>{file[0]?.filename}</p>
                        </Button>
                    </SaveAnnex>
                </Main>
            </Card>
        </Container>
    )
}