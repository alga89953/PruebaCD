import React, { useState, useEffect } from "react";
import { getFirestore, doc, collection, getDocs } from "firebase/firestore";

const db = getFirestore();
const serviceDocRef = doc(db, "services", "szVtg3W6iBuu7Vx0HxVy"); // Reference the specific service document

export const Pedidos = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const servicesSubcollectionRef = collection(serviceDocRef, "services"); // Reference the subcollection
      const snapshot = await getDocs(servicesSubcollectionRef); // Use async/await to retrieve documents

      const servicesData = snapshot.docs.map((doc) => ({
        // ... Extract service data from document
        addressDeliver: doc.data().addressDeliver,
        addressReceive: doc.data().addressReceive,
        category: doc.data().category,
        dateRequest: doc.data().dateRequest,
        descripction: doc.data().descripction,
        idCustomer: doc.data().idCustomer,
        state: doc.data().state,
        type: doc.data().type,
      }));
      setServices(servicesData);
    };

    fetchServices();
  }, []);

  return (
    <section className="vh-50">
      <div className="container py-3 h-100" >
        <center><h1>Administración de Pedidos</h1></center>
      </div>
      <p/>
      <table className="table py-5" center>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Dirección de Entrega</th>
            <th scope="col">Dirección de Recogida</th>
            <th scope="col">Categoría</th>
            <th scope="col">Fecha de Solicitud</th>
            <th scope="col">Descripción</th>
            <th scope="col">ID del Cliente</th>
            <th scope="col">Estado</th>
            <th scope="col">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{service.addressDeliver}</td>
              <td>{service.addressReceive}</td>
              <td>{service.category}</td>
              <td>{service.dateRequest}</td>
              <td>{service.descripction}</td>
              <td>{service.idCustomer}</td>
              <td>{service.state}</td>
              <td>{service.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
