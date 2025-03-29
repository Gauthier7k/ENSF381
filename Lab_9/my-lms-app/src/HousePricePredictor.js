import React, { useState } from "react";
import "./App.css";

function Predictor() {
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [leaseTerm, setLeaseTerm] = useState('');
  const [type, setType] = useState('');
  const [beds, setBeds] = useState('');
  const [baths, setBaths] = useState('');
  const [sqFeet, setSqFeet] = useState('');
  const [furnishing, setFurnishing] = useState('Unfurnished');
  const [smoking, setSmoking] = useState('');
  const [pets, setPets] = useState(false);
  const [predictedPrice, setPredictedPrice] = useState(null);

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
          city: city,
          province: province,
          latitude: latitude,
          longitude: longitude,
          lease_term: leaseTerm,
          type: type,
          beds: beds,
          baths: baths,
          sq_feet: sqFeet,
          furnishing: furnishing,
          smoking: smoking,
          pets: pets
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setPredictedPrice(data.predicted_price);
      } else {
        console.error("Error: ", response.statusText);
      }
    } catch (error) {
      console.error("Error", error);
    }
  }

  return (
    <div className="flexBoxPredictor">
      <form onSubmit={handleSubmit}>
        <div className="flexItemPredictor">
          <h1>House Price Predictor</h1>
        </div>
        <div className="flexItemPredictor">
          <label htmlFor="city">City:</label> <br />
          <input type="text"  className="textInput" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div className="flexItemPredictor">
          <label htmlFor="province">Province:</label> <br />
          <input type="text"  className="textInput" value={province} onChange={(e) => setProvince(e.target.value)} required />
        </div>
        <div className="flexItemPredictor">
          <label htmlFor="latitude">Latitude:</label> <br />
          <input type="text"  className="textInput" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
        </div>
        <div className="flexItemPredictor">
          <label htmlFor="longitude">Longitude:</label> <br />
          <input type="text"  className="textInput" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
        </div>
        <div className="flexItemPredictor">
          <label htmlFor="lease_term">Lease Term:</label> <br />
          <input type="text"  className="textInput" value={leaseTerm} onChange={(e) => setLeaseTerm(e.target.value)} required />
        </div>
        <div className="flexItemPredictor">
          <label htmlFor="type">Type of House:</label> <br />
          <input type="text"  className="textInput" value={type} onChange={(e) => setType(e.target.value)} required />
        </div>
        <div className="flexItemPredictor">
          <label htmlFor="beds">Number of Beds:</label> <br />
          <input type="text"  className="textInput" value={beds} onChange={(e) => setBeds(e.target.value)} required />
        </div>
        <div className="flexItemPredictor">
          <label htmlFor="baths">Number of Baths:</label> <br />
          <input type="text"  className="textInput" value={baths} onChange={(e) => setBaths(e.target.value)} required />
        </div>
        <div className="flexItemPredictor">
          <label htmlFor="sq_feet">Square Feet:</label> <br />
          <input type="text"  className="textInput" value={sqFeet} onChange={(e) => setSqFeet(e.target.value)} required />
        </div>
        <div className="flexItemPredictor">
          <label htmlFor="furnishing">Furnishing:</label> <br />
          <select id="furnishing"  className="textInput" value={furnishing} onChange={(e) => setFurnishing(e.target.value)} required>
            <option value="Unfurnished">Unfurnished</option>
            <option value="Partially Furnished">Partially Furnished</option>
            <option value="Fully Furnished">Fully Furnished</option>
          </select>
        </div>
        <div className="flexItemPredictor">
          <label htmlFor="smoking">Smoking:</label> <br />
          <input type="text"  className="textInput" value={smoking} onChange={(e) => setSmoking(e.target.value)} required />
        </div>
        <div className="flexItemPredictor">
          <label htmlFor="pets">I have pets:</label> <br />
          <input type="checkbox" id="pets"  className="textInput" checked={pets} onChange={(e) => setPets(e.target.checked)} />
        </div>
        <div className="flexItemPredictor">
          <input type="submit" className="submit" value="Predict Price" />
        </div>
        {predictedPrice !== null && (
            <div className="predictionResult">
                Predicted Rent Price: {predictedPrice}
            </div>
        )}
        </form>
    </div>
  );
}

export default Predictor;