function updateCities(data) {
    let st = document.getElementById("stateabbrv");

    let citydd = document.getElementById("cities");

    console.log(JSON.stringify(data));
    citydd.innerHTML = "";
    data[st.value].forEach(element => {
        console.log(element);
        let opt = document.createElement("option");
        opt.value = element;
        opt.innerText = element;
        citydd.appendChild(opt);
    });

}

document.addEventListener("DOMContentLoaded", function () {
    let st = document.getElementById("stateabbrv");

    st.addEventListener("change", function () {
        console.log(st.value);

        getData("/cities", st.value).then(data => updateCities(data));
    })
})

function getData(url, data) {
    return fetch(url, {
        //body: JSON.stringify(data),
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "user-agent": "Mozilla/4.0 MDN Example",
            "content-type": "application/json"
        },
        method: "GET", // POST to post data
        mode: "same-origin",
        redirect: "follow",
        referrer: "no-referrer"
    }).then(response => response.json());
}