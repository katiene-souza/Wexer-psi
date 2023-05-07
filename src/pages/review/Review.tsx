import { Button } from "@/Utils/button/Button"
import { ContainerContent, ContentExpand, Payment, Titlebar, Wrapper } from "./styled"
import { Link } from "react-router-dom"
import { Card } from "@/Utils/card/Card"
import Edit from "@/assets/icons/edit"
import Bin from "@/assets/icons/bin"
import ExitArrow from "@/assets/icons/exitArrow"


export const Review = () => {
    return (
        <ContainerContent>
            <Button type="button">
                <Link className="link" to="/">
                    <ExitArrow />
                    <p>Voltar</p>
                </Link>
            </Button>
            <h1>Sessão</h1>
            <Card>
                <Wrapper>
                    <Titlebar>
                        <div>
                            <h2>Sessão 2</h2>
                            <div>
                                <Button type="button"><Edit /></Button>
                                <Button type="button"><Bin /></Button>
                            </div>
                        </div>
                        <p>22 de setembro de 2022 | 16:00h - 17:00h</p>
                    </Titlebar>
                    <ContentExpand>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sequi eaque incidunt quaerat assumenda neque cupiditate non unde blanditiis voluptas. Debitis perspiciatis voluptas ipsam pariatur blanditiis, labore autem dolore quam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dolor, voluptas labore facere deserunt animi delectus adipisci porro quam illo reiciendis dolore quaerat quisquam ea placeat ducimus odio neque? Placeat?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, dignissimos sequi deserunt cupiditate nesciunt sint hic, fugit, totam eum voluptate quisquam consequatur temporibus vitae. Odio repudiandae quae fugiat in dolore.</p>
                    </ContentExpand>
                    <section>
                        <h2>Pagamento</h2>
                        <Payment>
                            <div>
                                <h1>Valor</h1>
                                <p>R$200,00</p>
                            </div>
                            <div>
                                <h1>Formato de pagamento</h1>
                                <p>PIX</p>
                            </div><div>
                                <h1>Status</h1>
                                <p>Pago</p>
                            </div>
                        </Payment>
                    </section>
                </Wrapper>
            </Card>
        </ContainerContent>
    )
}