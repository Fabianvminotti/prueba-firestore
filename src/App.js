import React ,{useState, useEfecct} from 'react';
import {stores} from './firebaseconf.js'



function App() {
const [user, setUser] = useState('')
const [phone , setPhone] = useState('')
const [error, setError] = useState('')


const agendarUser = async (e) =>{
  e.preventDefault()
  setError('')//para que cada vez que se envie se borren errores anteriores
  if(user.trim()===''){
      setError("El nombre esta vacio")
  }  
  if(phone.trim()===''){
    setError("El telefono esta vacio")
  }
  
  try{

  }
  catch(e){
      console.log(e)
  }



  setUser('')
  setPhone('')

}


  return (
    <div className='container'>
      <div className="row justify-content-around">
        <div className="col-4">
          <h2>Agendar persona</h2>
          <form action="" className="form-group" onSubmit={agendarUser}>
            <input
                  value={user}
                  className="form-control block"
                  placeholder="Insertar nombre"
                  onChange={(e)=>{setUser(e.target.value)}}
                  >
            </input>
            <input
                  value={phone}
                  className="form-control"
                  placeholder="Insertar numero"
                  onChange={(e)=>{setPhone(e.target.value)}}
                  >
            </input>
            <input
                  type="submit"
                  className="btn btn-primary btn-block mt-3"
                  value="Guardar Contacto"></input>
            
          </form>
          
            {
              error!=='' ?
              (<div className="alert alert-danger">
                {error}
              </div>)
              :
              (<div></div>)
            }
          
        </div>
        <div className="col-4">
          <h2>Lista de agendados</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
