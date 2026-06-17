function getBathValue() {

    let bathrooms =
        document.getElementsByName("uiBathrooms");

    for(let i=0;i<bathrooms.length;i++){

        if(bathrooms[i].checked){
            return parseInt(bathrooms[i].value);
        }
    }

    return 2;
}

function getBHKValue() {

    let bhk =
        document.getElementsByName("uiBHK");

    for(let i=0;i<bhk.length;i++){

        if(bhk[i].checked){
            return parseInt(bhk[i].value);
        }
    }

    return 2;
}

function onClickedEstimatePrice(){

    let sqft =
        document.getElementById("uiSqft").value;

    let bhk =
        getBHKValue();

    let bath =
        getBathValue();

    let location =
        document.getElementById("uiLocations").value;

    let result =
        document.getElementById("uiEstimatedPrice");

    result.innerHTML="⏳ Predicting...";

    $.post(
        "http://127.0.0.1:5000/predict_home_price",
        {
            total_sqft:sqft,
            bhk:bhk,
            bath:bath,
            location:location
        },

        function(data){

            result.innerHTML =
            "₹ " +
            Number(data.estimated_price).toFixed(2) +
            " Lakhs";
        }

    ).fail(function(){

        result.innerHTML =
        "❌ Prediction Failed";
    });
}

function onPageLoad(){

    $.get(
        "http://127.0.0.1:5000/get_location_names",

        function(data){

            let locations =
                data.locations;

            let uiLocations =
                document.getElementById("uiLocations");

            uiLocations.innerHTML="";

            locations.forEach(function(location){

                let option =
                    document.createElement("option");

                option.value=location;
                option.text=location;

                uiLocations.appendChild(option);
            });
        }
    );
}

window.onload = onPageLoad;