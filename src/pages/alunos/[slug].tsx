import { useRouter } from 'next/router'

interface IProps {
  id: string
}

export default function Students(  ) {
  const route = useRouter()
  console.log(route.query.id) // Se user algo como /joaquim/?id=20

  return (
    <div>
      <h1> {route.query.slug} </h1>
    </div>
  )
}
