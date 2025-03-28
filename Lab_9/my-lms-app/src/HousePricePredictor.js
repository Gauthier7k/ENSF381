import React from "react";
import "./App.css";

async function handleSubmit(event) {
    event.preventDefault();

    const backendEndpoint = 'http://127.0.0.1:5000/predict_house_price';
    try {
        const response = await fetch(backendEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                city: event.target.city.value,
                province: event.target.province.value,
                lattitude: event.target.lattitude.value,
                longitude: event.target.longitude.value,
                lease_term: event.target.lease_term.value,
                type: event.target.type.value,
                beds: event.target.beds.value,
                baths: event.target.baths.value,
                square_feet: event.target.square_feet.value,
                furnishing: event.target.furnishing.value,
                smoking: event.target.smoking.value,

                //add cat and dog and communication things reee

                pet: event.target.pet.checked
            }),
        });

        console.log(response);

    } catch (error) {
        console.error("Error", error);
    }
    
};


function Predictor() {
    return(
        <body>
            <form className="flexBox">
                <div className="flexItem">
                    <div>
                        <h2>House Price Predictor</h2>
                    </div>
                    <div>
                        <label htmlFor="city">City:</label><br />
                        <input type="text" className="textInput" required />
                    </div>
                    <div>
                        <label htmlFor="province">Province:</label><br />
                        <input type="text" className="textInput" required />
                    </div>
                    <div>
                        <label htmlFor="lattitude">Lattitude:</label><br />
                        <input type="text" className="textInput" required />
                    </div>
                    <div>
                        <label htmlFor="longitude">Longitude:</label><br />
                        <input type="text" className="textInput" required />
                    </div>
                    <div>
                        <label htmlFor="lease_term">Lease Term:</label><br />
                        <input type="text" className="textInput" required />
                    </div>
                    <div>
                        <label htmlFor="type">Type:</label><br />
                        <input type="text" className="textInput" required />
                    </div>
                    <div>
                        <label htmlFor="beds">Beds:</label><br />
                        <input type="text" className="textInput" required />
                    </div>
                    <div>
                        <label htmlFor="baths">Baths:</label><br />
                        <input type="text" className="textInput" required />
                    </div>
                    <div>
                        <label htmlFor="sq_feet">Square Feet:</label><br />
                        <input type="text" className="textInput" required />
                    </div>
                    <div>
                        <label htmlFor="furnishing">Furnishing:</label><br />
                        <select name="Furnishing">
                        <option value="Furnished">Furnished</option>
                        <option value="Unfurnished">Unfurnished</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="smoking">Smoking:</label><br />
                        <input type="text" className="textInput" required />
                    </div>
                    <div>
                        <label htmlFor="username">I have a pet:</label><br />
                        <input type="checkbox" className="textInput"/>
                    </div>
                    <div classname="submit">
                        <input type="submit" className="submit"/>
                    </div>
                    <div>
                        Predicted Price: <br />
                    </div>
                    </div>
            </form>
        </body>
    );
}

export default Predictor