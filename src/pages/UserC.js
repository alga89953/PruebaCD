// import React, { useState, useEffect } from "react";
// import { getFirestore, collection, getDocs } from "firebase/firestore";



// export const UserC = () => {
//   const [users, setusers] = useState([]);
  

//   useEffect(() => {
//     const db = getFirestore();
//     const usersRef = collection(db, "users");

   

//     getDocs(usersRef)
//       .then((snapshot) => {
//         const users = snapshot.docs.map((doc) => ({
//           email: doc.data().email,
//           plan: doc.data().plan,
//           rool: doc.data().rool,
//         }));
//         setusers(users);
        
//       });
      
//   }, []);
  
//   return (
//     <section className="vh-50">
//            <div className="container py-3 h-100" >
//              <center><h1>Administración de Usuarios Clientes</h1></center>
//            </div>
//            <p/>
//          <table className="table py-5" center>
//            <thead>
//              <tr>
//                <th scope="col">E-mail</th>
//                <th scope="col">Plan</th>
//                <th scope="col">Rol</th>
//                <th scope="col"></th>
//              </tr>
//            </thead>
//            <tbody>
//            {users.map((users, i) => (
//              <tr key={i}>
               
//                <td>{users.email}</td>
//                <td>{users.plan}</td>
//                <td>{users.rool}</td>
//                <td>
//                 <button onClick="" /*{() => borrarCliente(cliente.id)} */ className=" btn-primary " type="submit" id='cb'>Borrar</button>
//               </td>
//             </tr>
//           ))}
//            </tbody>
//          </table>
//          </section>
    
//   );
// };


import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, doc, deleteDoc } from "firebase/firestore";

export const UserC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const usersRef = collection(db, "users");

    getDocs(usersRef)
      .then((snapshot) => {
        const users = snapshot.docs.map((doc) => ({
          id: doc.id,
          email: doc.data().email,
          plan: doc.data().plan,
          rol: doc.data().rol,
        }));
        setUsers(users);
      });
  }, []);

  const borrarCliente = (userId) => {
    const db = getFirestore();
    const userRef = doc(db, "users", userId);

    deleteDoc(userRef)
      .then(() => {
        console.log("Usuario borrado con éxito");
        // Update the users list after deletion
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error("Error al borrar el usuario:", error);
      });
  };

  return (
    <section className="vh-50">
      <div className="container py-3 h-100">
        <center>
          <h1>Administración de Usuarios Clientes</h1>
        </center>
      </div>
      <p></p>
      <table className="table py-5" center>
        <thead>
          <tr>
            <th scope="col">E-mail</th>
            <th scope="col">Plan</th>
            <th scope="col">Rol</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.plan}</td>
              <td>{user.rol}</td>
              <td>
                <button
                  onClick={() => borrarCliente(user.id)}
                  className="btn-primary"
                  type="submit"
                  id="cb"
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
