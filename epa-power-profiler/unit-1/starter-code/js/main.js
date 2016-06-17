var nationalFuelMix = {
    "hydro": 6.7,
    "nuclear": 19,
    "oil": 0.7,
    "gas": 30.3,
    "coal": 37.4,
    "non-hydro": 5.4
};

$("#national-fuel-mix").append(
    "<tr>" +
    "<td>" + nationalFuelMix["hydro"] + "%</td>" +
    "<td>" + nationalFuelMix["oil"] + "%</td>" +
    "</tr>");