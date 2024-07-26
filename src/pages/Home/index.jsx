import { Container, Links, SideBar } from './styles'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

import { api } from '../../services/api'

export function Home() {
  //armazena os dados de pesquisa
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  //função para abrir a página com os detalhes do filme
  function handleDetails(id) {
    navigate(`/moviepreview/${id}`)
  }

  function handleCreateMovie() {
    navigate(`/createmovie`)
  }

  //busca as notas cadastradas
  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }
    fetchNotes()
  }, [search])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }
    fetchNotes()
  }, [])

  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />

    <div className='head'>
      <h2 id='title'>Meus filmes</h2>

      <Button
         id='button' 
         title="+ Adicionar filme"
         onClick={handleCreateMovie} 
      />
    </div>

      <Section>
        
        <Links>{/* children */}

          {
            notes.map((note) => (
              <Note 
                key={String(note.id)} 
                data={note} 
                onClick={() => handleDetails(note.id)}
              />
            ))
          }

          <SideBar />
          
        </Links>
      </Section>
        
    </Container>
  )
}