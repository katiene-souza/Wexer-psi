import { Card } from "@/Utils/card/Card"
import { BoxLine, Container, Image, Main, SaveFile, TableContent, TableData } from "./styled"
import { Button } from "@/Utils/button/Button"
import { OpenPopupMenu } from "./PopupMenu"

import AssessmentElipse from "@/assets/icons/assessmentElipse"
import Points from "@/assets/icons/points"

import { useState } from "react"
import Edit from "@/assets/icons/edit"
import EyeIcon from "@/assets/icons/eyeIcon"


export const Assessments = () => {
    const [assessments, setAssessments] = useState(false);

    const showAssessments = () => setAssessments(!assessments);

    return (
        <Container >
            {assessments && <OpenPopupMenu isOpen={assessments} onClose={() => setAssessments(false)} />}
            <Card className="pink">
                <Image>
                    <BoxLine className="pink" />
                    <AssessmentElipse />
                </Image>
                <Main>
                    <Button type="button" onClick={showAssessments}><Points /></Button>
                    <div>
                        <h1>Avaliação Psicológica</h1>
                        <h2>22 de setembro 2022</h2>
                    </div>
                    <TableData>
                        <TableContent>
                            <p>Entrevista psicológica</p>
                            <div>
                                <p>Realizado</p>
                                <Button type="button"><EyeIcon /></Button>
                                <Button type="button"><Edit /></Button>
                            </div>
                        </TableContent>
                        <TableContent>
                            <p>Aplicação de teste</p>
                            <div>
                                <p>Realizado</p>
                                <Button type="button"><EyeIcon /></Button>
                                <Button type="button"><Edit /></Button>
                            </div>
                        </TableContent>
                        <TableContent>
                            <p>Observação computacional</p>
                            <div>
                                <p>Realizado</p>
                                <Button type="button"><EyeIcon /></Button>
                                <Button type="button"><Edit /></Button>
                            </div>
                        </TableContent>
                    </TableData>
                </Main>
                <SaveFile>
                    <p>Emitir</p>
                    <div>
                        <Button type="button">
                            <p>Laudo</p>
                        </Button>
                        <Button type="button">
                            <p>Atestado</p>
                        </Button>
                        <Button type="button">
                            <p>Relatório</p>
                        </Button>
                        <Button type="button">
                            <p>Declaração</p>
                        </Button>
                    </div>
                </SaveFile>
            </Card>
        </Container>
    )
}