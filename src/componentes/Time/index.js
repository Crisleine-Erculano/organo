import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
   const colorCss = { backgroundColor: props.corSecundaria }
   return (

      props.colaboradores.length > 0 && <section className='time' style={colorCss}>
         <h3 style={{ borderColor: props.corPrimaria }}>{props.nome} </h3>
         <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador
               key={colaborador.nome}
               corDeFundo={props.corPrimaria}
               nome={colaborador.nome}
               cargo={colaborador.cargo}
               imagem={colaborador.imagem}
            />)}
         </div>
      </section>


   )
}
export default Time