import a1 from "./a1.png"
import a2 from "./a2.png"
import a3 from "./a3.png"
import a4 from "./a4.png"
import i from "./i.png"
import Credentials from "../components/Credentials";
import Map from "../components/Map"


const mapURL =`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`;
export const AboutPage = () =>{


    return(
      <section>
        <br/>
       <center><h2>Información de la empresa</h2></center>
       <center><img src={i} className="mb-8" alt="a1" width={200} />
       <h4><em> Nation of Code Center de SRL</em></h4>
       </center>
       <br/>
        <div className="card-group">
  <div className="card">
    <center><h5>Misión</h5></center>
  <p><em>“Nation of Code Center” orientados al desarrollo de software con la finalidad de ayudar a dar solución a los problemas o necesidades de la vida cotidiana, agilizando procesos de trabajo mediante software.</em></p>
  </div>
  <div  className="card">
    <center><h5>Visión</h5></center>
     <p><em>Ser reconocidos a nivel nacional en un lapso de 12 meses después de su creación, como una de las empresas mejor posicionadas para la calidad y seguridad de software que realiza detonando la utilidad de nuestros softwares.</em></p>
  </div>
</div>
<br></br>
<center><h1>Información de los desarrolladores</h1></center>
<br/>

        <div className="card-group">
  <div className="card">
    <br></br>
    <center><img src={a1} className="mb-8" alt="a1" width={118} /></center>
    <div className="card-body">
      <h5 className="card-title">ING. Julián Peñaloza Zárate</h5>
      <p className="card-text">ING. En Desarrollo y Gestión de Software. 
      TSU. En Desarrollo de Software Multiplataforma. <br></br>
      TEC. En Soporte y Mantenimiento de Equipo de Computo. <br></br>
      Colaborador en el desarrollo del proyecto "ShopGo". <br></br>
      Correo: julianpenaloza.019@gmail.com </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Programador Web</small>
    </div>
  </div>
  <div className="card">
  <br></br>
    <center><img src={a2} className="mb-8" alt="a1" width={130} /></center>
    <div className="card-body">
      <h5 className="card-title">ING. Manuel Hérnandez Osorio</h5>
      <p className="card-text">ING. En Desarrollo y Gestión de Software. <br></br>
      TSU. En Desarrollo de Software Multiplataforma.<br></br>
      Colaborador en el desarrollo del proyecto "ShopGo".<br></br>
      Correo: osorioevid157@gmail.com
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Programador Web</small>
    </div>
  </div>
  <div className="card">
    <br/>
  <center><img src={a3} className="mb-8" alt="a1" width={153} /></center>
    <div className="card-body">
      <h5 className="card-title">ING. Néstor Adrián Martínez Jiménez</h5>
      <p className="card-text">ING. En Desarrollo y Gestión de Software. <br></br>
      TSU. En Desarrollo de Software Multiplataforma.<br></br>
      Colaborador en el desarrollo del proyecto "ShopGo". <br></br>
      Correo: martinezjimeneznestoradrian@gmail.com
      </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Programador Móvil</small>
    </div>
  </div>
  <div className="card">
  <br></br>
    <center><img src={a4} className="mb-8" alt="a1" width={95} /></center>
    <div className="card-body">
      <h5 className="card-title">ING. Alfredo Pablo García</h5>
      <p className="card-text">ING. En Desarrollo y Gestión de Software.<br></br> 
      TSU. En Desarrollo de Software Multiplataforma.<br></br>
      Colaborador en el desarrollo del proyecto "ShopGo".<br></br>
      Correo: alga89953@gmail.com
      </p>
    </div> 
    <br/>
    <div><h5>Encuentranos en:</h5></div>
    <div className="card-footer">
      <small className="text-muted">Programador Móvil</small>
    </div>
  </div>
</div>
<div>
  <Map
googleMapURL = {mapURL}
containerElement= {<div style={{height:'400px'}} />}
mapElement= {<div style={{height:'100%'}} />}
loadingElement= {<p><em>Cargando...</em></p>}
/>
</div>
  
</section>

    )
}