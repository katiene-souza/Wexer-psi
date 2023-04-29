import { DocumentsAnnex } from "@/components/historic/DocumentsAnnex"
import { Facts } from "@/components/historic/Facts"
import { Sessions } from "@/components/historic/Sessions"
import { Assessments } from "@/components/historic/assessments"



export const HistoricPatient = () => {
    return (
        <section style={{display: "flex", flexDirection: "column"}}>
            <Sessions /> 
            <Facts />
            <DocumentsAnnex />
            <Assessments />
        </section>
    )
}