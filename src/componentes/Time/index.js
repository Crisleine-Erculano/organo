import './Time.css'

const Time =(props) =>{
   const colorCss = {backgroundColor: props.corSecundaria}
   return (
      <section className='time' style={colorCss}>
         <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
      </section>

   )
}
export default Time