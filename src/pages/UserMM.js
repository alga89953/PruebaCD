import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";



export const UserMM = () => {
  const [motoristas, setMotoristas] = useState([]);
  

  useEffect(() => {
    const db = getFirestore();
    const motoristasRef = collection(db, "Motoristas");

   

    getDocs(motoristasRef)
      .then((snapshot) => {
        const motoristas = snapshot.docs.map((doc) => ({
          Id: doc.data().Id,
          Nombre: doc.data().Nombre,
          Apellido: doc.data().Apellido,
          Edad: doc.data().Edad,
          Domicilio: doc.data().Domicilio,
          Email: doc.data().Email,
          Licencia: doc.data().Licencia,
          Telefono: doc.data().Telefono,
        }));
        setMotoristas(motoristas);
        
      });
      
  }, []);
  
  return (
    <section className="vh-50">
           <div className="container py-3 h-100" >
             <center><h1>Administración de Usuarios Moto-Mandaditos</h1></center>
           </div>
           <p/>
         <table className="table py-5" center>
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">Nombre</th>
               <th scope="col">Apellido</th>
               <th scope="col">Edad</th>
               <th scope="col">Domicilio</th>
               <th scope="col">E-mail</th>
               <th scope="col">Numero</th>
               <th scope="col">Licencia</th>
               <th scope="col">Borrar</th>
             </tr>
           </thead>
           <tbody>
           {motoristas.map((motorista, i) => (
             <tr key={i}>
               <td>{motorista.Id}</td>
               <td>{motorista.Nombre}</td>
               <td>{motorista.Apellido}</td>
               <td>{motorista.Edad}</td>
               <td>{motorista.Domicilio}</td>
               <td>{motorista.Email}</td>
               <td>{motorista.Telefono}</td>
               <td>{motorista.Licencia}</td>
               <td>
                <button onClick="" /*{() => borrarCliente(cliente.id)} */ className=" btn-primary " type="submit" id='cb'>Borrar</button>
              </td>
            </tr>
          ))}
           </tbody>
         </table>
         </section>
    
  );
};