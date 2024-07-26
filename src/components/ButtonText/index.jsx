import { Container } from "./styles";

export function ButtonText({ icon: Icon, title, loading = false, ...rest }) {
  return (
  <Container 
    type="button"
    {...rest}
  >
    {Icon && <Icon size={20} />}
    {loading ? 'Carregando...' : title}
  
  </Container>
  )
}