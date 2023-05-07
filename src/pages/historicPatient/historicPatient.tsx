/* eslint-disable no-console */
import { TimelineId } from "@/Utils/timelineId/TimilineId"
import { DocumentsAnnex } from "@/components/historic/DocumentsAnnex"
import { Facts } from "@/components/historic/Facts"
import { Sessions } from "@/components/historic/Sessions"
import { Assessments } from "@/components/historic/assessments"
import api from "@/services/api"

import { useEffect, useState } from "react"



export const HistoricPatient = () => {

    const [occurrences, setOcurrences] = useState([])

    const loadOcurrences = async () => {
        const token = localStorage.getItem('jwt');

        const response = await api.get(`/timeline/${TimelineId}`, {
            headers: {
                Authorization: token,
                'Accept': '*/*',
            }
        })
        setOcurrences(response.data.timeline.occurrences)
    }

    useEffect(() => {
        loadOcurrences()
    }, [])

    return (
        <section style={{ display: "flex", flexDirection: "column" }}>
            {
                occurrences.map((occurrence: OcurrencesCard) => {
                    switch (occurrence.type) {
                        case "session":
                            return (
                                <Sessions key={occurrence._id}
                                    title={occurrence.title}
                                    date={occurrence.createdOn}
                                    content={occurrence.content} />
                            )
                        case "attachment":
                            return (
                                <DocumentsAnnex key={occurrence._id}
                                    title={occurrence.title}
                                    date={occurrence.createdOn}
                                    content={occurrence.content}
                                    file={occurrence.files} />
                            )
                        case "relevant_fact":
                            return (
                                <Facts key={occurrence._id}
                                    title={occurrence.title}
                                    date={occurrence.createdOn}
                                    content={occurrence.content} />
                            )
                    }
                })
            }
            <Assessments />
        </section>
    )
}