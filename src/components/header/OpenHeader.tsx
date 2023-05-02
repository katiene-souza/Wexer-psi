import { Button } from "@/Utils/button/Button"
import { ContainerLogin, Identify } from "./styled"

import User from "@/assets/icons/user"
import Quit from "@/assets/icons/quit"

type Props = {
  isOpen: boolean
  onClose: () => void

}

export const OpenLogin = ({ isOpen, onClose }: Props) => {

  return (
    <ContainerLogin isOpen={isOpen} onClick={onClose} >
      <Identify>
        <div>
          <h1>Admin</h1>
          <p>Joãopedro@gmail.com</p>
        </div>
      </Identify>
      <Button type="button">
        <User />
        <div>
          <h1>Meus dados</h1>
          <p>Pessoais, dados e cartões</p>
        </div>
      </Button>
      <Button type="button">
        <Quit />
        <div>
          <h1>Sair</h1>
        </div>
      </Button>
    </ContainerLogin>
  )
}
