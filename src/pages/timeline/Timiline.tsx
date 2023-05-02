import { Research } from "@/components/research/Researsh"
import { Main } from "./styled"
import { Identification } from "@/components/identification/Identification"

import { Notes } from "@/components/InfoEvents/Notes"
import { Goals } from "@/components/InfoEvents/Goals"
import { NewHistory } from "@/components/newHistory/NewHistory"
import { HistoricPatient } from "../historicPatient/historicPatient"
import TopPage from "@/assets/icons/topPage"



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
      <footer>
        <TopPage/>
        <p>Volte para o topo</p>
      </footer>
    </Main>
  )
}