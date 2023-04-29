import { Modal } from "@/Utils/modalGlobal/ModalGlobal"
import { ButtonsForms, Container, ContentForm } from "./styled"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from "@/Utils/button/Button"


type Props = {
  isOpen: boolean
  onClose: () => void
}

const schema = yup.object({
  descriptionGoals: yup
    .string()
    .required("O campo demandas e objetivos é obrigatório!")
}).required()

type Values = yup.InferType<typeof schema>

export const GoalsModal = ({ isOpen, onClose }: Props) => {

  const { handleSubmit, register, formState: { errors } } = useForm<Values>({
    resolver: yupResolver(schema)
  })

  const addGoals = (data: Values) => console.log(data)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Container>
        <h1>Demandas e Objetivos</h1>
        <ContentForm>
          <form onSubmit={handleSubmit(addGoals)}>
            <div>
              <textarea {...register("descriptionGoals")} name="descriptionGoals"  placeholder="Text"></textarea>
              {errors?.descriptionGoals && <p className="errorYup">{errors.descriptionGoals.message}</p>}
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