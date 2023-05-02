import { Sidebar } from "@/components/sidebar/Sidebar"
import { Header } from "@/components/header/Header"

import { Content, Section } from "./styled"
import { Navigation } from "@/routes"

export const Screen = () => {
    return (
        <Section>
                <Header />
                <Sidebar/>
            <Content>
                <Navigation />
            </Content>
        </Section>
    )
}