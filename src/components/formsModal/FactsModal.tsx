import { Modal } from "@/Utils/modalGlobal/ModalGlobal"
import { ButtonsForms, Container, ContentForm } from "./styled"

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import { Input } from "@/Utils/input/InputControl"
import { Button } from "@/Utils/button/Button"


type Props = {
  isOpen: boolean
  onClose: () => void
}


const schema = yup.object({
  date: yup
    .string()
    .required("O campo data é obrigatório!"),
  title: yup
    .string()
    .required("O campo título é obrigatório!"),
    description: yup
    .string()
    .required("O campo resumo da sessão é obrigatório!")
}).required()

type Values = yup.InferType<typeof schema>

export const FactsModal = ({ isOpen, onClose }: Props) => {
  const { handleSubmit, register, control, formState: { errors } } = useForm<Values>({
    resolver: yupResolver(schema)
  })

  const addFacts = (data: Values) => console.log(data)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Container>
        <h1>Novo fato relevante</h1>
        <ContentForm>
          <form onSubmit={handleSubmit(addFacts)}>
            <main>
              <div>
                <Input type="date" name="date" label="Data*" control={control} />
                {errors?.date && <p className="errorYup">{errors.date.message}</p>}
              </div>
              <div>
                <Input type="text" name="title" label="Título*" placeholder="Digite" control={control} />
                {errors?.title && <p className="errorYup">{errors.title.message}</p>}
              </div>
            </main>
            <div>
              <label>Descrição*</label>
              <textarea {...register('description')} name= "description" placeholder="Text"></textarea>
              {errors?.description && <p className="errorYup">{errors.description.message}</p>}
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