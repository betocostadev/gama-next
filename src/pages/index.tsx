import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'

import Seo from '../components/Seo'
import { Container } from '../styles/pages/Home/style'

// Lazy Loading
const ModalContent = dynamic(
  () => import('../components/Modal'),
  { loading: () => <p>Carregando...</p> }
)

export default function Home() {
  const [ isShow, setIsShow ] = useState(false)

  function handleOpenModal(){
    setIsShow(!isShow)
  }

  return (
    <>
      <Seo title="Fala galera" description="Seja bem vindo e blá" />
      <Container>
        <Image src="/img/logo.png" height={80} width={200}/>
        <h1>Hello NextJS</h1>
        <p>Esse é um simples site utilizado para entender os conceitos do <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a></p>
        <button onClick={ handleOpenModal }>{ isShow ? 'Fechar Modal' : 'Abrir modal'}</button>
        <div>
          { isShow && <ModalContent />}
        </div>

        <h2>Conteúdo gerado automaticamente baseado nos slugs</h2>
        <h3>Categorias</h3>
        <ul>
          <li><a href="/categorias/hyper">Hyper</a></li>
          <li><a href="/categorias/hipster">Hipster</a></li>
          <li><a href="/categorias/hacker">Hacker</a></li>
          <li><a href="/categorias/hustler">Hustler</a></li>
          <li><a href="/categorias/productManager">Product Manager</a></li>
        </ul>
        <h3><a href="/mais-procurados">Mais procurados</a></h3>

      </Container>
    </>
  )
}
