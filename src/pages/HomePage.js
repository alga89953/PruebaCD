import i3 from './i3.png'
import i2 from './i2.png'

export const HomePage = () =>{
    return(
<section className="vh-100">
  <div className="container py-3 h-100" >
    <center><h1>Bienvenido</h1></center>
    <center>
    <img src={i3}className="aling-right" alt="Sample image" width={450} height={450}/>
    <img src={i2}className="aling-left" alt="Sample image" width={450} height={450}/>
    </center>
  </div>
  <p/>
</section>

)
}