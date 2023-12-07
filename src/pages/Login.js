import { startLoginEmailPassword } from '../actions/auth'
import { useForm } from '../hook/useForm'
import i1 from './i1.png'
import i2 from './i2.png'
import {useDispatch, useSelector} from "react-redux"

export const Login= () =>{
  const dispatch = useDispatch()
  const {loading, msgError} = useSelector(state => state.ui)
  const [formValues,handleInputChange] = useForm({
    email : '',
    password : ''
  })
  const {email, password} = formValues

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(startLoginEmailPassword(email,password))
  }

    return(    
<section className="vh-100" id='section-style2'>
  <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-md-9 col-lg-6 col-xl-5">
        <img src={i2}
          className="img-fluid" alt="Sample image"/>
      </div>
      
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong">
          <div className="card-body p-4 text-center"id='section-style'>
          {(msgError) && <p>{msgError}</p>}
          <div><center><img src={i1} className="mb-2" alt="i1" width={180} height={180}/></center></div>
            <h3 className="mb-3">Inicio de Sesión</h3>
            <div className="form-outline mb-2">
              <input onChange={handleInputChange} name="email" value={email} type="email" id="typeEmailX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlhtmlFor="typeEmailX-2"><h5>Email</h5></label>
            </div>
            <div className="form-outline mb-2">
              <input onChange={handleInputChange} name="password" value={password} type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlhtmlFor="typePasswordX-2"><h5>Contraseña</h5></label>
            </div>
            <button onClick={handleLogin} disabled={loading} className="btn btn-primary btn-lg btn-block" type="submit" id='cb'><h5>Iniciar</h5></button>
            <hr className="my-2" htmlhtmlFor="typebtn"/>

            <br/>
            <p>
            <a href="https://drive.google.com/drive/folders/1vtWsQSxQWTQuN9vnl8PWvQxQ2NNIoCqd" className="text-reset">ShopGo Móvil</a>
          </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p/>
</section>

)
}