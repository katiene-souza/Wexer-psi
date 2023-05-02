import { Button } from "@/Utils/button/Button"
import { MainContainer, MenuOptions } from "./styled"
import { OpenSidebar } from "./openSidebar"

import Configurations from "@/assets/icons/configurations"
import Models from "@/assets/icons/models"
import Peoples from "@/assets/icons/peoples"
import Records from "@/assets/icons/records"
import Logo from "@/assets/icons/logo"
import Menu from "@/assets/icons/menu"

import { useState } from "react"

export const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <MainContainer>
            <main onClick={showSiderbar}>
                <section>
                    <Logo />
                </section>
                <Button type="button"><Peoples /></Button>
                <Button type="button"><Models /></Button>
                <Button type="button"><Records /></Button>
                <Button type="button"><Configurations /></Button>
            </main>
            <MenuOptions>
                <Button type="button" onClick={showSiderbar}><Menu /></Button>
            </MenuOptions>
            {sidebar && <OpenSidebar isOpen={sidebar} onClose={() => setSidebar(false)} />}
        </MainContainer>
    )
}