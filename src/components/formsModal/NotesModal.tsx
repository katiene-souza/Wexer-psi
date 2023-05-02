import { Modal } from "@/Utils/modalGlobal/ModalGlobal"
import { ButtonsForms, Container, ContentForm } from "./styled"
import { Button } from "@/Utils/button/Button"

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"

type Props = {
  isOpen: boolean
  onClose: () => void
}

const schema = yup.object({
  descriptionNotes: yup
    .string()
    .required("O campo notas e objetivos é obrigatório!")
}).required()

type Values = yup.InferType<typeof schema>

export const NotesModal = ({ isOpen, onClose }: Props) => {

  const { handleSubmit, register, formState: { errors } } = useForm<Values>({
    resolver: yupResolver(schema)
  })

  const addNotes = (data: Values) => console.log(data)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Container>
        <h1>Anotações pessoais</h1>
        <ContentForm>
          <form onSubmit={handleSubmit(addNotes)}>
            <div>
              <textarea {...register("descriptionNotes")} name="descriptionNotes" placeholder="Text"></textarea>
              {errors?.descriptionNotes && <p className="errorYup">{errors.descriptionNotes.message}</p>}
            </div>
            <ButtonsForms>
              <div>
                <p>*campos obrigatórios</p>
                <Button type="button" className="cancel" onClick={onClose}>Cancelar</Button>
                <Button type="submit" className="submit">Criar</Button>
              </div>
            </ButtonsForms>
          </form>
        </ContentForm>
      </Container>
    </Modal>
  )
}