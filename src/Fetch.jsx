import { useState, useEffect } from "react";

export function useFetchData(region, countryName) {
  const [countries, setCountries] = useState([]);
  const [status, setStatus] = useState("idle"); // idle, pending, success, rejected

  useEffect(() => {
    let url = "https://restcountries.com/v3.1/all"; //allcountries//
    if (region !== "all" && !countryName) {
      url = `https://restcountries.com/v3.1/region/${region}`; //countries by region//
    }
    if (countryName) {
      url = `https://restcountries.com/v3.1/name/${countryName}`; //countries by input-search//
    }
    setStatus("pending");
    fetch(url).then((response) =>
      response
        .json()
        .then((data) => {
          setStatus("success");
          setCountries(data.splice(0, 20));
        })
        .catch((error) => {
          setStatus("rejected");
          console.log("error");
        })
    );
  }, [region, countryName]); // se ponen los props para que no renderize mas de lo debido//

  // estados de carga necesarios para visualizar mejor//
  const isLoading = status === "pending";
  const isSuccess = status === "success";
  const isError = status === "rejected";

  return { countries, isLoading, isSuccess, isError };
}
