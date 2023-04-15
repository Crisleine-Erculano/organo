import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
   const colorCss = { backgroundColor: props.corSecundaria }
   return (
     
      <section className='time' style={colorCss}>
         <h3 style={{ borderColor: props.corPrimaria }}>{props.nome} </h3>
         <div className='colaboradores'>
         {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
             />)}
         </div>
      </section>
      

   )
}
export default Time