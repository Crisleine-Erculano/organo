import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {
   const times = [
      'Programação',
      'Front-End',
      'Data Science',
      'Devops',
      'UX e Design',
      'Mobile',
      'Inovação e Gestão'
   ]
   
   const aoSalvar =(evento)=>{
      evento.preventDefault()
      console.log('O form foi submetido')
   }
   return (
      <section className="formulario">
         <form onSubmit={aoSalvar}>
            <h2>Preencha os campos para criar os cards do colaborador</h2>
            
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome." />
            <CampoTexto label="Cargo " placeholder="Digite o seu Cargo." />
            <CampoTexto label="Imagem" placeholder="Digite o endereço da  imagem." />
            
            <ListaSuspensa label="Time" itens={times}/>
            
            <Botao>
               Criar Card
            </Botao>
         </form>
      </section>
   )


}
export default Formulario