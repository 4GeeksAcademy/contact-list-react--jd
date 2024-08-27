import React from "react";
import { FaAddressBook, FaEnvelope, FaPencilAlt, FaPhone, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ContactCard = ({ contact, contactDelete, contactUpdate }) => {
    return (
        <div className="list-group-item">
            <div className="d-flex align-items-center">
                <img
                    style={{
                        width: '50px',
                        height: '50px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        marginRight: '15px'
                    }}
                    src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
                    alt="profile"
                />
                <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                        <div>
                            <h5 className="mb-1">{contact.name}</h5>
                            <p className="mb-1"><i ></i> <FaEnvelope />   {contact.email}</p>
                            <p className="mb-1"><i ></i> <FaPhone/>{contact.phone}</p>
                            <p className="mb-1"><i ></i> <FaAddressBook/> {contact.address}</p>
                        </div>
                        <div>
                            <Link
                                to={`/edit/${contact.id}`}
                                className="btn btn-sm btn-outline-secondary me-2"
                            >
                             <FaPencilAlt />
                            </Link>
                            <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => contactDelete(contact.id)}
                            >
                               <FaTrashAlt />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};