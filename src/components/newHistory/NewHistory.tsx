import { Card } from "@/Utils/card/Card"
import { FilterContainer, Main, Section, Service } from "./styled"
import { Button } from "@/Utils/button/Button"
import { SessionModal } from "../formsModal/SessionModal"
import { FactsModal } from "../formsModal/FactsModal"
import { AnnexModal } from "../formsModal/AnnexModal"
import { AssesmentModal } from "../formsModal/AssessmentModal"

import Session from "@/assets/icons/session"
import Bin from "@/assets/icons/bin"
import Edit from "@/assets/icons/edit"
import Essential from "@/assets/icons/essential"
import Annex from "@/assets/icons/annex"
import Assessment from "@/assets/icons/assessment"
import Arrow from "@/assets/icons/arrow"

import { useState } from "react"

export const NewHistory = () => {
    const [isSectionOpen, setSectionOpen] = useState(false);
    const [isFactsOpen, setFactsOpen] = useState(false);
    const [isAnnexOpen, setAnnexOpen] = useState(false);
    const [isAssesmentOpen, setAssessmentOpen] = useState(false);

    return (
        <>
            <Card>
                <Section>
                    <Service>
                        <label>
                            Serviço:
                            <select name="service">
                                <option value="monitoring">Novo Acompanhamento</option>
                                <option value="carry" >Porte de Arma</option>
                                <option value="newService">Adicionar Novo Serviço</option>
                            </select>
                        </label>
                        <div>
                            <p>Data inicial: 18/10/2022</p>
                            <Button type="button"><Bin /></Button>
                            <Button type="button"><Edit /></Button>
                        </div>
                    </Service>
                    <Main>
                        <div>
                            <Button type="button" onClick={() => setSectionOpen(true)}>
                                <Session />
                                <p>Sessão</p>
                            </Button>
                        </div>
                        <div>
                            <Button type="button" onClick={() => setFactsOpen(true)}>
                                <Essential />
                                <p>Fato Relevante</p>
                            </Button>
                        </div>
                        <div>
                            <Button type="button" onClick={() => setAnnexOpen(true)}>
                                <Annex />
                                <p>Anexo</p>
                            </Button>
                        </div>
                        <div>
                            <Button type="button" onClick={() => setAssessmentOpen(true)}>
                                <Assessment />
                                <p>Avaliação Psicológica</p>
                            </Button>
                        </div>
                    </Main>
                </Section>
            </Card>
            <SessionModal isOpen={isSectionOpen} onClose={() => setSectionOpen(false)} />
            <FactsModal isOpen={isFactsOpen} onClose={() => setFactsOpen(false)} />
            <AnnexModal isOpen={isAnnexOpen} onClose={() => setAnnexOpen(false)} />
            <AssesmentModal isOpen={isAssesmentOpen} onClose={() => setAssessmentOpen(false)} />
            <FilterContainer>
                <div></div>
                <label htmlFor="filter">
                    Filtrar por:
                    <select name="filter">
                        <option value="all">Todos</option>
                        <option value="session" >Sessão</option>
                        <option value="facts">Fato Relevante</option>
                        <option value="annex">Anexo</option>
                        <option value="assessment">Avaliação Psicológica</option>\
                    </select>
                    <Arrow />
                </label>
            </FilterContainer>
        </>
    )
}