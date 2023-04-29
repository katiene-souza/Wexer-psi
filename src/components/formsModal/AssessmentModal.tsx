import { Modal } from "@/Utils/modalGlobal/ModalGlobal"
import { ButtonsForms, Container, Content, ContentForm } from "./styled"
import { Input } from "@/Utils/input/InputControl"

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import { Button } from "@/Utils/button/Button"

type Props = {
  isOpen: boolean
  onClose: () => void
}


const schema = yup.object({
  date: yup
    .string()
    .required("O campo data é obrigatório!"),
}).required()

type Values = yup.InferType<typeof schema>

export const AssesmentModal = ({ isOpen, onClose }: Props) => {

  const { handleSubmit, control, formState: { errors } } = useForm<Values>({
    resolver: yupResolver(schema)
  })

  const addAssessment = (data: Values) => console.log(data)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Container>
        <h1>Nova avaliação psicológica</h1>
        <ContentForm>
          <form onSubmit={handleSubmit(addAssessment)}>
            <main style={{ width: "20%" }}>
              <div>
                <Input control={control} type="date" name="date" label="Data*" />
                {errors?.date && <p className="errorYup">{errors.date.message}</p>}
              </div>
            </main>
            <Content>
              <h1>Atenção!</h1>
              <p>Você será redirecionado para uma nova página onde irá preencher os dados da avaliação psicológica.</p>
            </Content>
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