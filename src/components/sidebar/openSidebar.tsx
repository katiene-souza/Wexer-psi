import Configurations from "@/assets/icons/configurations"
import Models from "@/assets/icons/models"
import Peoples from "@/assets/icons/peoples"
import Records from "@/assets/icons/records"

import { Button } from "@/Utils/button/Button"
import { Container } from "./styled"


type Props = {
  isOpen: boolean
  onClose: () => void

}

export const OpenSidebar = ({ isOpen, onClose }: Props) => {

  return (
    <Container isOpen={isOpen} onClick={onClose} >
        <Button type="button">
          <Peoples />
          <p>Meus pacientes</p>
        </Button>
        <Button type="button">
          <Models />
          <p>Modelos</p>
        </Button>
        <Button type="button">
          <Records />
          <p>Cadastro</p>
        </Button>
        <Button type="button">
          <Configurations />
          <p>Preferências</p>
        </Button>
    </Container>
  )
}
