import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [ scheduleItem, setScheduleItem ] = useState([
    {week_day: 0, from: '', to: ''}
  ]);

  function addNewScheduleItem () {
    setScheduleItem([
      ...scheduleItem,
      {week_day: 0, from: '', to: ''}
    ])
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    console.log({ name, avatar, whatsapp, bio, subject, cost})
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader description="O Primeiro passo é preencher este formulário de inscrição." title="Que incrível que você quer dar aulas."/>
      
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input value={name} onChange={t => setName(t.target.value)} name="name" label="Nome completo"/>
            <Input value={avatar} onChange={t => setAvatar(t.target.value)} name="avatar" label="Avatar"/>
            <Input value={whatsapp} onChange={t => setWhatsapp(t.target.value)} name="whatsapp" label="WhatsApp"/>
            <Textarea value={bio} onChange={t => setBio(t.target.value)} name="bio" label="Biografia" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select onChange={e => setSubject(e.target.value)} value={subject} name="subject" options={[
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
            <Input onChange={e => setCost(e.target.value)} value={cost} name="cost" label="Custo da sua hora por aula"/>
          </fieldset>

          <fieldset>
            <legend>Horários disponíveis
            <button onClick={addNewScheduleItem} type="button">
              + Novo horário
            </button>
            </legend>

            {scheduleItem.map(schedule => {
              return (
                <div key={schedule.week_day} className="schedule-item">
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
              )
            })}

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante! <br/>
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm;
