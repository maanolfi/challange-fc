import React, { useState } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { createMessage } from '../../store/modules/menssages/actions';

import { Wrapper } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required(),
  name: Yup.string().required(),
  email: Yup.string()
    .email('Custom invalid email message')
    .required('Custom required message'),
  subject: Yup.string(),
  phone: Yup.number(),
  description: Yup.string()
    .max(500)
    .required('Max 500 caracters'),
});

const NewMenssage = () => {
  const [description, setDescription] = useState('');
  const dispath = useDispatch();

  const handleSubmit = (data, { resetForm }) => {
    const dados = {
      ...data,
      date: format(new Date(), "'Recebida em' dd-MM-yyyy', às' HH:mm'h'", {
        locale: ptBR,
      }),
    };
    dispath(createMessage(dados));
    resetForm();
  };

  const options = [
    { id: 'Orçamento', title: 'Orçamento' },
    { id: 'Dúvidanode', title: 'Dúvida' },
    { id: 'Elogio', title: 'Elogio' },
    { id: 'Reclamação', title: 'Reclamação' },
  ];

  return (
    <Wrapper>
      <Form schema={schema} onSubmit={handleSubmit} id="form-msg">
        <Input name="title" placeholder="Título da menssagem" />
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="example@email.com" />
        <Input name="phone" type="text" placeholder="Telefone" />

        <Select name="subject" placeholder="Assunto" options={options} />
        <hr />

        <Input
          multiline
          name="description"
          placeholder="Descrição"
          onChange={e => setDescription(e.target.value)}
        />
        <div>
          <p>{`${description.length}/500`}</p>

          <button type="submit">Enviar</button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default NewMenssage;
