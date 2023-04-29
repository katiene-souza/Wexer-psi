import { Card } from "@/Utils/card/Card"
import { BoxLine, Container, Image, Main } from "./styled"
import { Button } from "@/Utils/button/Button"

import AssessmentElipse from "@/assets/icons/assessmentElipse"
import Points from "@/assets/icons/points"
import { useState } from "react"
import { OpenPopupMenu } from "./PopupMenu"

export const Assessments = () => {
    const [assessments, setAssessments] = useState(false)

    const showAssessments= () => setAssessments(!assessments)

    return (
        <Container >
             {assessments && <OpenPopupMenu isOpen={assessments} onClose={() => setAssessments(false)} />}
            <Card className="pink">
                <Image>
                    <BoxLine className="pink"/>
                    <AssessmentElipse />
                </Image>
                <Main>
                    <Button type="button" onClick={showAssessments}><Points /></Button>
                    <div>
                        <h1>avaliação psicológica</h1>
                        <h2>22 de setembro 2022</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum temporibus incidunt odio sed dolorem est mollitia quaerat exercitationem recusandae tenetur. Ullam doloremque illo perspiciatis soluta, qui odit inventore ab itaque!</p>
                </Main>
            </Card>
        </Container>
    )
}