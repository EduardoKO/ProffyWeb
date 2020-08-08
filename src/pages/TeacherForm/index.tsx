import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader description="O Primeiro passo é preencher este formulário de inscrição." title="Que incrível que você quer dar aulas."/>
      
      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo"/>
          <Input name="avatar" label="Avatar"/>
          <Input name="whatsapp" label="WhatsApp"/>
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select name="subject" options={[
            { value: 'Artes', label: 'Artes'},
            { value: 'Biologia', label: 'Biologia'},
            { value: 'Ciências', label: 'Ciências'},
            { value: 'Matemática', label: 'Matemática'},
            { value: 'Português', label: 'Português'},
            { value: 'Física', label: 'Física'},
            { value: 'Química', label: 'Química'},
            { value: 'Educação Física', label: 'Educação Física'},
            { value: 'História', label: 'História'},
            { value: 'Geografia', label: 'Geografia'},
          ]} label="Matéria"/>
          <Input name="cost" label="Custo da sua hora por aula"/>
        </fieldset>

        <fieldset>
          <legend>Horários disponíveis
          <button type="button">
            + Novo horário
          </button>
          </legend>

          <div className="schedule-item">
            <Select name="subject" options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Ciências', label: 'Ciências'},
              { value: 'Matemática', label: 'Matemática'},
              { value: 'Português', label: 'Português'},
              { value: 'Física', label: 'Física'},
              { value: 'Química', label: 'Química'},
              { value: 'Educação Física', label: 'Educação Física'},
              { value: 'História', label: 'História'},
              { value: 'Geografia', label: 'Geografia'},
          ]} label="Matéria"/>
            <Input name="from" label="Das" type="time"/>
            <Input name="to" label="Até" type="time"/>
          </div>

        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br/>
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;
