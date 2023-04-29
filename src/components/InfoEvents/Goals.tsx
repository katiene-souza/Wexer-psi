import { Card } from "@/Utils/card/Card"
import { Section } from "./styled"
import { Button } from "@/Utils/button/Button"
import Edit from "@/assets/icons/edit"
import { GoalsModal } from "../formsModal/GoalsModal"
import { useEffect, useState } from "react"
import { getPatientData } from "@/services/getPatient"


export const Goals = () => {
    const [isGoalsOpen, setGoalsOpen] = useState(false);

    const [patient, setPatient] = useState<Partial<Patient>>()

    useEffect(() => {
        const getInfo = async () => {

            if(!patient) {
                const { demands } = await getPatientData()
                setPatient({demands})   
            }
        }
        getInfo()

    }, [])

    return (
        <Card>
            <Section>
                <div>
                    <h1>Demandas e objetivos</h1>
                    <Button type="button" onClick={() => setGoalsOpen(true)}><Edit/></Button>
                </div> 
                <p>{patient?.demands}</p>
            </Section>
            <GoalsModal isOpen={isGoalsOpen} onClose={() => setGoalsOpen(false)} />
        </Card>
    )
}