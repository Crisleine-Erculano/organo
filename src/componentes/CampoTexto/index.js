import './CampoTexto.css'
const CampoTexto = (props) =>{
   return(
      <div className="campo__texto">
         <label>{props.label}</label>
         <input placeholder={props.placeholder}></input>
      </div>
   )

}
export default CampoTexto