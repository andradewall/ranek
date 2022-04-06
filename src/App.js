import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Produto from './Produto'
import Contato from './Contato'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Produto />} />
        <Route path='contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
