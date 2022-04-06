import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ProdutoDescricao from './ProdutoDescricao'

const Produto = () => {
  const [produtos, setProdutos] = useState(null)

  useEffect(() => {
    const request = async () => {
      await fetch('https://ranekapi.origamid.dev/json/api/produto')
        .then(async (res) => await res.json())
        .then((json) => setProdutos(json))
    }
    request()
  }, [])

  console.log(produtos)

  return (
    <div>
      <ul>
        {produtos.map(({ id, fotos, nome }) => (
          <li key={id}>
            <Route path={id} element={<ProdutoDescricao name={id} />} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Produto
