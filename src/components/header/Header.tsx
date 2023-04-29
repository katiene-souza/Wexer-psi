import { Button } from "@/Utils/button/Button"
import { Section } from "./styled"

import Arrow from "@/assets/icons/arrow"
import { useState } from "react"
import { OpenLogin } from "./OpenHeader"



export const Header = () => {

    const [login, setLogin] = useState(false)

    const showLogin = () => setLogin(!login)

    return (
        <>
            <Section>
                <div>
                    <Button type="button" onClick={showLogin}>
                        <h1>Bem vindo(a), <b>Daniel</b></h1>
                        <Arrow />
                    </Button>
                </div>
            </Section>
            {login && <OpenLogin isOpen={login} onClose={() => setLogin(false)} />}
        </>
    )
}