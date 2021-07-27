function handleResponse (response) {
    console.log(`
        ${response.id} , ${response.city} , ${response.region_name}`);
}
let script = document.createElement("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);