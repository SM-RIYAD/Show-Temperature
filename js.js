document.getElementById("search_btn").addEventListener("click", function() {
    const input_text_data = document.getElementById("input_text").value;

    // console.log(input_text_data);
    call_api(input_text_data);

})

function call_api(input_text_data) {

    fetch(`http://api.openweathermap.org/data/2.5/find?q= ${input_text_data} &units=metric&appid=e816f6f9b889801ef785494835875206`)

    .then(response => response.json())
        .then(data => {
            console.log("users", data);
            display_data(data);
        })
}

function display_data(data) {

    const temp_num_data = data.list[0].main.temp;
    const weather_data = data.list[0].weather[0].main;
    const city_name_data = data.list[0].name;
    const image_code = data.list[0].weather[0].icon;

    document.getElementById("temp_num").innerText = temp_num_data;
    document.getElementById("weather").innerText = weather_data;
    document.getElementById("city_name").innerText = city_name_data;
    document.getElementById("weather_image").src = `http://openweathermap.org/img/wn/${image_code}@2x.png`;

}