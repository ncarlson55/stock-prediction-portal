import React from "react";
import Button from "./Button";

const Main = () => {
    return (
        <>
            <div className="container">
                <div className="p-5 text-center bg-light-dark rounded">
                    <h1 className="text-light">Stock Prediction Portal</h1>
                    <p className="text-light lead">This stock prediction application uses machine learning to predict the future price of a stock.</p>
                    <Button text="Login" className="btn-outline-info"/>
                </div>
            </div>
        </>
    )
}

export default Main