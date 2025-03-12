import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import calender from "../assets/calender.png";
import outlook from "../assets/outlook.png";
import zoom from "../assets/zoom.png";
import outlook_calender from "../assets/outlook_calender.png";
import gmail from "../assets/gmail.png";
import zapier from "../assets/zapier.png";
import './component.css';

function Integrations() {
    const ProductDetails = [
        { "Name": "Google Calendar", "Image": calender, "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
        { "Name": "Zoom", "Image": zoom, "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
        { "Name": "Outlook", "Image": outlook, "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
        { "Name": "Outlook Calendar", "Image": outlook_calender, "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
        { "Name": "Gmail", "Image": gmail, "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
        { "Name": "Zapier", "Image": zapier, "Text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." }
    ];

    const [toggleStates, setToggleStates] = useState(
        ProductDetails.reduce((productState, product) => {
            productState[product.Name] = false;
            return productState;
        }, {})
    );

    const handleToggle = (name) => {
        setToggleStates(prevState => {
            const newState = { ...prevState, [name]: !prevState[name] };
            return newState;
        });

        setTimeout(() => {
            toast(toggleStates[name] ? `${name} Disabled` : `${name} Enabled`, {
                position: "top-center",
                autoClose: 2000,
                type: toggleStates[name] ? "warning" : "success",
            });
        }, 0);
    };

    return (
        <>
            <h3 className="page-head">Integrations</h3>
            <ToastContainer />
            <div className="invite-members"><button>+ Invite members</button></div>
            
            <div className="row">
                {ProductDetails.map((product, index) => (
                    <div key={index} className="col-md-4">
                        <div className="integration-item">
                            <div className="img-btn">
                                <img src={product.Image} alt={product.Name} />
                                <label className="toggle-switch">
                                    <input
                                        type="checkbox"
                                        checked={toggleStates[product.Name]}
                                        onChange={() => handleToggle(product.Name)}
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>
                            <p className="integrations-head">{product.Name}</p>
                            <p>{product.Text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Integrations;
