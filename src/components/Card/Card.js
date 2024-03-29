import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./card.css"


const Card = () => {
    const [url, setUrl] = useState("");


    const generateQR = (e) => {
        e.preventDefault();
        setUrl(e.target.value);
    }

    return (
        <div className="body">
            <div className="searchBar" method="POST">
                <input
                    type="text"
                    placeholder="Search"
                    value={url}
                    onChange={generateQR}
                />
            </div>

            <div className="card">
                <div className="card__qr">
                    {url &&
                        <div className="qrcode">
                            <QRCodeCanvas
                                id="qrCode"
                                value={url}
                                size={300}
                                level={"H"}
                            /></div>}
                    {!url && <p>QR Code will be generated here</p>}
                </div>
                <div className="card__text">

                    <h2 >QR Code</h2>

                    <p>Scan the QR code to visit your website</p>
                </div>
            </div></div>
    )
}

export default Card;