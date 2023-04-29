import { Research } from "@/components/research/Researsh"
import { Main } from "./styled"
import { Identification } from "@/components/identification/Identification"

import { Notes } from "@/components/InfoEvents/Notes"
import { Goals } from "@/components/InfoEvents/Goals"
import { NewHistory } from "@/components/newHistory/NewHistory"
import { HistoricPatient } from "../historicPatient/historicPatient"



export const Timeline = () => {
    return (
        <Main>
          <Research />
          <section>
            <div className="contentBox">
              <Identification />
              <Goals />
              <Notes />
            </div>

            <div className="contentBox">
              <NewHistory />
              <HistoricPatient />
            </div>
          </section>
        </Main>
    )
}