import { Fragment, useEffect, useState } from "react";
import { Connection } from "../hooks/Web3";
import "./Navbar.css";

export default function Navbar({ onNavbarEffectComplete }) {
    const [address, setAddress] = useState("");

    useEffect(() => {
        const connect = async () => {
            const account = await Connection.initialization();
            if (account) {
                setAddress(account);
                onNavbarEffectComplete();
            }
        };
        connect();
    }, []);

    return (
        <Fragment>
            <div className="navbar">
                <h1 className="title">DApp FileStorage</h1>
                <h1 className="address">Account : {address === "" ? "No account found" : address}</h1>
            </div>
        </Fragment>
    );
}
