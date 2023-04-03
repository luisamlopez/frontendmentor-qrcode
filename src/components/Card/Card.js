import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./card.css"


export const Card = (props) => {
    const qrRef = useRef();
    return (
        <div className="card">
            <div className="card__qr">
                {props.url &&
                    <div className="qrcode">
                        <QRCodeCanvas
                            id="qrCode"
                            value={props.url}
                            size={300}
                            bgColor={"#00ff00"}
                            level={"H"}
                        /></div>}
                {!props.url && <p>QR Code will be generated here</p>}



            </div>
            <div className="card__text">
                {/* {props.title && <h2 >{props.title}</h2>} */}
                {!props.title && <h2 >QR Code</h2>}

                <p>Scan the QR code to visit your website</p>
            </div>
        </div>
    )
}