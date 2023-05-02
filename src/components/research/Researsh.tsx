import { Card } from "@/Utils/card/Card"
import { Button } from "@/Utils/button/Button"
import { Section } from "./styled"

import Search from "@/assets/icons/search"

export const Research = () => {
    
    return (
        <Card>
            <Section>
                <div>
                    <p>Prontuário</p>  
                </div>
                <Button type="button">
                    <main>
                        <p>O que você está procurando?</p>
                        <Search />
                    </main>
                </Button>
            </Section>
        </Card>
    )
}