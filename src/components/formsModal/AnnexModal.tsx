import { Modal } from "@/Utils/modalGlobal/ModalGlobal"
import { ButtonsForms, Container, ContentForm } from "./styled"
import { Button } from "@/Utils/button/Button"

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import { Input } from "@/Utils/input/InputControl"


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
  resumeSession: yup
    .string()
    .required("O campo resumo da sessão é obrigatório!"),
  file: yup
    .string()
    .required("O campo anexar arquivo é obrigatório!")
}).required()

type Values = yup.InferType<typeof schema>

export const AnnexModal = ({ isOpen, onClose }: Props) => {

  const { handleSubmit, register, control, formState: { errors } } = useForm<Values>({
    resolver: yupResolver(schema)
  })

  const addAnnex = (data: Values) => console.log(data)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Container>
        <h1>Novo Anexo</h1>
        <ContentForm>
          <form onSubmit={handleSubmit(addAnnex)}>
            <main>
              <div>
                <Input name="date" label="titulo*" type="date" control={control} />
                {errors?.date && <p className="errorYup">{errors.date.message}</p>}
              </div>
              <div style={{ width: "100%" }}>
                <Input type="text" name="title" label="título*" control={control} placeholder="Digite" />
                {errors?.title && <p className="errorYup">{errors.title.message}</p>}
              </div>
            </main>
            <div>
              <label>Resumo da sessão*</label>
              <textarea {...register("resumeSession")} name="resumeSession" placeholder="Text"></textarea>
              {errors?.resumeSession && <div className="errorYup">{errors.resumeSession.message}</div>}
            </div>
            <div>
              <Input type="file" name="fileUpload" className="annex" label="Anexar arquivos*" control={control} placeholder="Digite" />
              {errors?.file && <div className="errorYup">{errors.file.message}</div>}
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