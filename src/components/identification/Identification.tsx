import { Section, Title } from "./styled"
import { Card } from "@/Utils/card/Card"

import People from "@/assets/icons/people"
import Calender from "@/assets/icons/calender"
import Profession from "@/assets/icons/profession"
import School from "@/assets/icons/school"
import { useEffect, useState } from "react"
import { getPatientData } from "@/services/getPatient"



export const Identification = () => {
    const [patient, setPatient] = useState<Partial<Patient>>()

    useEffect(() => {
        const getPatient = async () => {

            if(!patient) {
                const { name, birthdate, profession,  schooling } = await getPatientData()
                setPatient({name, birthdate, profession,  schooling})   
            }
        }
        getPatient()

    }, [])
    
    return (
        <Card>
        <Section>
            <h1>Identificação do paciente</h1>
            <main>
                  <div>
                        <Title>
                            <People/>
                            <h1>Paciente</h1>
                        </Title>
                            <p>{patient?.name}</p>
                    </div>
                    <div>
                        <Title>
                            <Calender/>
                            <h1>Nascimento</h1>
                        </Title>
                            <p>{  patient?.birthdate ?  new Date(patient?.birthdate).toLocaleDateString() : "" }</p>
                    </div>
                    <div>
                        <Title>
                            <Profession/>
                            <h1>Profissão</h1>
                        </Title>
                            <p>{patient?.profession}</p>
                    </div>
                    <div>
                        <Title>
                            <School/>
                            <h1>Escolariadade</h1>
                        </Title>
                            <p>{patient?.schooling}</p>
                    </div>
            </main>
        </Section>
        </Card>
    )
}