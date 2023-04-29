import { Card } from "@/Utils/card/Card"
import { Section } from "./styled"
import { Button } from "@/Utils/button/Button"
import Edit from "@/assets/icons/edit"
import { useEffect, useState } from "react"
import { NotesModal } from "../formsModal/NotesModal"
import { getPatientData } from "@/services/getPatient"

export const Notes = () => {
    const [isNotesOpen, setNotesOpen] = useState(false);

    const [patient, setPatient] = useState<Partial<Patient>>()

    useEffect(() => {
        const getNotes = async () => {

            if(!patient) {
                const {  personalAnnotations } = await getPatientData()
                setPatient({ personalAnnotations})   
            }
        }
        getNotes()

    }, [])
    return (
        <Card>
            <Section>
                <div>
                    <h1>Anotações pessoais</h1>
                    <Button type="button" onClick={() => setNotesOpen(true)}><Edit/></Button>
                </div>
                <p>{patient?.personalAnnotations}</p>
            </Section>
            <NotesModal isOpen={isNotesOpen} onClose={() => setNotesOpen(false)} />
        </Card>
    )
}