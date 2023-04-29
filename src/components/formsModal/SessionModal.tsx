import { Modal } from "@/Utils/modalGlobal/ModalGlobal"
import { ButtonsForms, Container, ContentForm, NumberCircle, OptionPay } from "./styled"
import { Input } from "@/Utils/input/InputControl"
import { Button } from "@/Utils/button/Button"


import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"



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
    .required("O campo resumo da sessão é obrigatório!"),
  timeStart: yup
    .string()
    .required("O campo hora de ínicio é obrigatório!"),
  timeEnd: yup
    .string()
    .required("O campo hora fim é obrigatório!"),
  amount: yup
    .string()
    .required("O campo valor é obrigatório!"),
  payment: yup
    .string()
    .required("O campo tipo de pagamento é obrigatório!"),
  statusPay: yup
    .string()
    .required("O campo status é obrigatório!"),
}).required()

type Values = yup.InferType<typeof schema>

export const SessionModal = ({ isOpen, onClose }: Props,) => {

  const { handleSubmit, register, control, formState: { errors } } = useForm<Values>({
    resolver: yupResolver(schema)
  })

  const addSession = (data: Values) => console.log(data)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Container>
        <h1>Nova Sessão</h1>
        <ContentForm>
          <section>
            <NumberCircle>1</NumberCircle>
            <p>Dados Gerais</p>
          </section>
          <form onSubmit={handleSubmit(addSession)}>
            <main>
              <div>
                <Input type="date" name="date" label="Data*" control={control} />
                {errors?.date && <p className="errorYup">{errors.date.message}</p>}
              </div>
              <div>
                <Input type="time" name="timeStart" label="Hora de inicio*" control={control} />
                {errors?.timeStart && <p className="errorYup">{errors.timeStart.message}</p>}
              </div>
              <div>
                <Input type="time" name="timeEnd" label="Hora fim*" control={control} />
                {errors?.timeEnd && <p className="errorYup">{errors.timeEnd.message}</p>}
              </div>

            </main>
          </form>
        </ContentForm>
        <ContentForm>
          <section>
            <NumberCircle>2</NumberCircle>
            <p>Sessão</p>
          </section>
          <form onSubmit={handleSubmit(addSession)}>
            <Input type="text" name="title" label="Título*" placeholder="Digite" control={control} />
            {errors?.title && <p className="errorYup">{errors.title.message}</p>}
            <div>
              <label>Resumo da sessão*</label>
              <textarea {...register("description")} name="description" placeholder="Text"></textarea>
              {errors?.description && <p className="errorYup">{errors.description.message}</p>}
            </div>
          </form>
        </ContentForm>
        <ContentForm>
          <section>
            <NumberCircle>3</NumberCircle>
            <p>Pagamento</p>
          </section>
          <form onSubmit={handleSubmit(addSession)}>
            <main>
              <div>
                <Input type="number" name="amount" label="Valor*" placeholder="R$150,99" control={control} />
                {errors?.amount && <p className="errorYup">{errors.amount.message}</p>}
              </div>
              <div>
                <label>Formas de pagamento</label>
                <select {...register("payment")} name="payment" >
                  <option value="pix">Pix</option>
                  <option value="ticket" >Boleto</option>
                  <option value="card">Cartão de crédito ou débito</option>
                </select>
                {errors?.payment && <p className="errorYup">{errors.payment.message}</p>}
              </div>
              <OptionPay>
                <label>Status</label>
                <div>
                  <Input type="radio" name="statusPay" label="Pago" control={control} />
                  <Input type="radio" name="notPay" label="Não pago" control={control} />
                </div>
                {errors?.statusPay && <p className="errorYup">{errors.statusPay.message}</p>}
              </OptionPay>
            </main>
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