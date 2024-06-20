
import './App.css'
import Welcome from './components/Welcome'
import Mensagem from './components/Mensagem'
import BomDia from './components/BomDia'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import UserInfoForm from './components/UserInfoForm'
import Button from './components/Button'
import PaiFunc from './components/PaiFunc'

function App() {
  return (
    <>
      {/* Criação de Componente */}
      <Welcome /><br></br>
      <Mensagem/><br></br>
      {/* Expressão do JSX */}
      <BomDia />
      {/* Componente dentro de Componente */}
      <Pai />
      {/* Props */}
      <Descricao  nome="Augusto" idade={20}/>
      {/* Desestruturação de Props */}
      <Cachorro nome="Shark" raca="Caramelo"/>
      {/* useState / Hook */}
      <Counter />
      {/* Multiplos estados */}
      <UserInfoForm/>
      {/* Evento */}
      <Button/>
      {/* Passando funções de manipulação de eventos com props */}
      <PaiFunc/>
    </>
  )
}

export default App
