/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Modal } from "@/Utils/modalGlobal/ModalGlobal"
import { ButtonsForms, Container, ContentForm } from "./styled"
import { Button } from "@/Utils/button/Button"
import { Input } from "@/Utils/input/InputControl"

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import api from "@/services/api"
import { useState } from "react"
import { TimelineId } from "@/Utils/timelineId/TimilineId"


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
    .object()
}).required()

type Values = yup.InferType<typeof schema>

export const AnnexModal = ({ isOpen, onClose }: Props) => {
  const [files, setFiles] = useState<FileList | any>(null);


  const { handleSubmit, register, control, formState: { errors } } = useForm<Values>({
    resolver: yupResolver(schema)
  });

  const addAnnex = async (data: Values): Promise<void> => {
    const token = localStorage.getItem('jwt');

    const occurrenceToApi = {
      "type": "attachment",
      "timelineId": TimelineId,
      "title": data.title,
      "content": data.resumeSession,
      files: [
        {
          filename: files[0].name,
          filesize: files[0].size
        }
      ]
    }
    console.log(files)
    try {
      await api.post('/occurrence', occurrenceToApi, {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
          'Accept': '*/*',
        }
      })
      onClose()

    } catch (error) {
      console.log(error)
    }
  }

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
              {/*  <Input type="file" value={files} onChange={(e) => setFiles(e.target.files)} name="fileUpload" className="annex" label="Anexar arquivos*" control={control} placeholder="Digite" />
              {errors?.file && <div className="errorYup">{errors.file.message}</div>}  */}
              <input type="file" name="fileUpload" onChange={(e) => { setFiles(e.target.files) }} />
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