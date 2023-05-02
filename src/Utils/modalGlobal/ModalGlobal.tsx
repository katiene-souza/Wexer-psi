import { Button } from "@/Utils/button/Button"
import { ModalContent, ModalOutside } from "../modalGlobal/styleModal"
import { useRef } from "react"

import Close from "@/assets/icons/close"


type Props = {
    isOpen: boolean
    onClose: () => void
    clickOutside?: boolean,
    children?: React.ReactNode
  }
 
  export const Modal = ({ isOpen, onClose, clickOutside = true, children }: Props) => {

  const container = useRef<HTMLDivElement>(null);
  const backgroudClick = (e: React.MouseEvent) => {
  if (!container.current?.contains(e.target as Node)) onClose();
  };
  
  return (
    <ModalOutside isOpen={isOpen} onClick={ clickOutside ? backgroudClick : undefined}>
        <ModalContent ref={container}>
            <Button type="button" onClick={onClose}><Close/></Button>
            {children}
        </ModalContent>
      </ModalOutside>
    )    
}