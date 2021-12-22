
function wsconsume() {
    let data = document.getElementById("view");
    let url = "http://localhost:8080/datamahasiswajson";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
            //let json = JSON.parse(result);
            //console.log(json);
            //data.innerHTML = result;
        });
};