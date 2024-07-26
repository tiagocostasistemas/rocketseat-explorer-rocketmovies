import { Container } from './styles'
import { AiFillStar } from 'react-icons/ai'
import { Tag } from '../Tag'

export function Note({ data, onClick, ...rest }) {
  return (
    <Container onClick={onClick} {...rest}>
      <h1>{data.title}</h1>

      <h3>
        <AiFillStar className={data.rating >= 1 ? 'rated' : ''} />
        <AiFillStar className={data.rating >= 2 ? 'rated' : ''} />
        <AiFillStar className={data.rating >= 3 ? 'rated' : ''} />
        <AiFillStar className={data.rating >= 4 ? 'rated' : ''} />
        <AiFillStar className={data.rating >= 5 ? 'rated' : ''} />
      </h3>

      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map( tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}