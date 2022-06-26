import React, { useEffect, useState } from "react";
import axios from "axios";
import Result from "./Result";
function Medicine() {
  const [medicineName, setMedicineName] = useState("");
  const [response, setResponse] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.fda.gov/drug/label.json?api_key=${process.env.REACT_APP_OPENFDA_API_KEY}&search=openfda.brand_name:"${medicineName}"`
      )
      .then((res) => {
        const brand_name = res.data.results[0].openfda.brand_name;
        const manufacturer = res.data.results[0].openfda.manufacturer_name;
        const substance_name = res.data.results[0].openfda.substance_name;
        const dosage_instruction = res.data.results[0].dosage_and_adminstration;
        const storage_and_handling = res.data.results[0].storage_and_handling;
        const indications_and_usage = res.data.results[0].indications_and_usage;
        const active_ingredient = res.data.results[0].active_ingredient;
        const inactive_ingredient = res.data.results[0].inactive_ingredient;
        const warnings = res.data.results[0].warnings;
        const keep_out_of_reach_of_children =
          res.data.results[0].keep_out_of_reach_of_children;
        const generic_name = res.data.results[0].openfda.generic_name;
        const route = res.data.results[0].openfda.route;

        const purpose = res.data.results[0].purpose;
        const boxed_warning = res.data.results[0].boxed_warning;
        const nui = res.data.results[0].openfda.nui;
        setResponse({
          brand_name,
          manufacturer,
          substance_name,
          dosage_instruction,
          storage_and_handling,
          indications_and_usage,
          active_ingredient,
          keep_out_of_reach_of_children,
          generic_name,
          route,
          purpose,
          inactive_ingredient,
          warnings,
          boxed_warning,
          nui,
        });
        const options = {
          method: "GET",
          url: "https://google-image-search1.p.rapidapi.com/v2/",
          params: {
            q: res.data.results[0].openfda.brand_name + " medicine",
            hl: "en",
          },
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
            "X-RapidAPI-Host": "google-image-search1.p.rapidapi.com",
          },
        };

        axios.request(options).then(function (res) {
          const img = res.data.response.images[0].image.url;
          console.log(res.data);
          setImageUrl(img);
        });
      });

    setIsSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          onChange={(event) => setMedicineName(event.target.value)}
          value={medicineName}
          className="mt-5 blockrounded drop-shadow-lg shadow-lg rounded-full w-1/3 h-10 p-2 text-center mx-auto focus-visible:placeholder-opacity-0 focus-visible:w-2/3 focus-visible:outline-0 origin-center transition-all ease-linear duration-200"
          placeholder="Medicine Name"
        />
      </form>
      {isSubmitted && <Result props={response} imgUrl={imageUrl} />}
      {/* {imageUrl && (
        <img width="200px" height="200px" src={imageUrl} alt="medicine" />
      )} */}
    </div>
  );
}

export default Medicine;
