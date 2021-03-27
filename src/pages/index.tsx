import Seo from '../components/Seo'
import { Container } from '../styles/pages/Home/style'

export default function Home() {
  return (
    <div>
      <Seo title="Hello" description="Uma descrição aqui" />
      <Container>
        <h1>Hello NextJS</h1>
      </Container>
    </div>
  )
}
