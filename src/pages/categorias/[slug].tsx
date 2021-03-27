import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'node:querystring'

import api from '../../service/api'
import { Container } from '../../styles/pages/Home/style'
import { CurrencyTemplate } from '../../lib'

interface IRecommended{
  id: number;
  title: number;
  price: number;
  category_id: string;
  slug: string;
}

interface AllRecomended{
  courses: IRecommended[]
}

export default function Categories( { courses }: AllRecomended ){
  const route = useRouter()

  if (route.isFallback) {
    return <p>Aguarde estamos montando este conteúdo</p>
  }

  return(
    <Container>
      <h1>{route.query.slug}</h1>
      <div>
        <ul>
          { courses.map(course => (
            <li key={course.id}>{course.title} {CurrencyTemplate(course.price)}</li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

// Listagem de categorias estática
export const getStaticPaths: GetStaticPaths = async ( context ) => {
  try {
    const response = await api.get(`categories`)
    const categories = response.data

    const paths = categories.map( category => {
      return {
        params: { slug: category.id }
      }
    })

    return {
      paths,
      fallback: true
    }
  } catch (error) {
    console.log(error)
  }

}

// Gerar conteúdo estático
export const getStaticProps: GetStaticProps<AllRecomended | ParsedUrlQuery> = async ( context ) => {
  try {
    const { slug } = context.params
    const response = await api.get(`courses?category_id=hacker`)
    const courses = response.data

    return {
      props: {
        courses
      }
    }
  } catch (error) {
    console.log(error)
  }

}
