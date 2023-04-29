import { Button } from "@/Utils/button/Button"
import Delete from "@/assets/icons/delete"
import Export from "@/assets/icons/export"
import Modify from "@/assets/icons/modify"
import { ContainerPopup } from "./styled"
import { useRef } from "react"

type Props = {
  isOpen: boolean
  onClose: () => void
  clickOutside?: boolean,
}

export const OpenPopupMenu = ({ isOpen, onClose, clickOutside = true }: Props) => {

  const container = useRef<HTMLDivElement>(null);
  const backgroudClick = (e: React.MouseEvent) => {
    if (!container.current?.contains(e.target as Node)) onClose();
  };

  return (
    <ContainerPopup isOpen={isOpen} onClick={clickOutside ? backgroudClick : undefined}>
      <div ref={container}>
        <Button type="button">
          <Modify />
          <p className="bluePopup">Editar</p>
        </Button>
        <Button type="button">
          <Delete />
          <p className="redPopup">Deletar</p>
        </Button>
        <Button type="button">
          <Export />
          <p className="greenPopup">Exportar</p>
        </Button>
      </div>
    </ContainerPopup>
  )
}
