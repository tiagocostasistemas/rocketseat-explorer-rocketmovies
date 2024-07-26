import { useState } from 'react'
import { Container, SideBar, Content } from './styles'
import { FiArrowLeft } from 'react-icons/fi'

import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { NoteItem } from '../../components/NoteItem'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { api } from '../../services/api'


export function CreateMovie() {
  //adicionando title, rating e description
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")
  //adicionando uma tag/marcador
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  //função do botão voltar
  function handleBack() {
    navigate(-1)
  }

  //função que adiciona tag
  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  //função que exclui tag
  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag != deleted))
  }

  //função para criar novo filme
  async function handleNewMovie() {
    //validando os campos do formulário
    if(!title) {
      return alert("Digite o título do filme")
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    await api.post("/notes", {
      title,
      rating,
      description,
      tags
    })

    alert("Filme criado com sucesso!")
    navigate("/") //retorna para a página inicial após adicionar o filme
  }
  
  return (
    <Container>
      <Header />
      <Content>
        
        <ButtonText 
          title="Voltar" 
          icon={FiArrowLeft}
          onClick={handleBack}
        />
            
            <h2 id='title'>Novo filme</h2>
            <div className='inputs'>
              <Input 
                placeholder='Título'
                type="text"
                onChange={e => setTitle(e.target.value)}
              />          
              <Input 
                placeholder='Sua nota (de 0 a 5)'
                type="number"
                onChange={e => setRating(e.target.value)}
              />          
            </div>

            <TextArea 
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
            />

          <Section>
            <h2 id='tags'>Marcadores</h2>
            <div className='tags'>
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)} 
                  />
                ))
              }

              <NoteItem 
               isNew
               placeholder="Novo marcador"
               value={newTag}
               onChange={e => setNewTag(e.target.value)}
               onClick={handleAddTag}
              />
            </div>
          </Section>
          
            <div className='buttons'>
              <Button 
                id="btn-delete-movie" 
                title="Excluir filme"
              />
              <Button 
                title="Salvar alterações"
                onClick={handleNewMovie}
              />
            </div>
            
          <SideBar />
          
      </Content>
        
    </Container>
  )
}