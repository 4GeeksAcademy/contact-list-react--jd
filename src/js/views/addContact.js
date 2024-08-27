import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navbar } from "../component/navbar.js";
import { ContactCard } from "../component/concatCard.js";

export const AddContacto = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
          actions.fetchContactos();
    }, []);

    const handleDelete = (id) => {
        actions.deleteContact(id);
    };
    
console.log(store)
    return (
        <React.Fragment>
            <Navbar />
            <div>
                {store.contactos.map((contacts, index) => (
                    <ContactCard
                    key={index} 
                    contact={contacts} 
                    contactDelete={handleDelete} />
                ))}
            </div>
        </React.Fragment>
    );
};