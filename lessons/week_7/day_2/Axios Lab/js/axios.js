const icons = {
    clear: "☀",
    rain: "️🌧",
    storm: "⛈",
    snow: "🌨",
    mist: "🌫",
    clouds: "☁",
  };
  axios({
    method: "get",
    url:
      "http://api.openweathermap.org/data/2.5/weather?q=jeddah&units=imperial&appid=f8b87d64c041ce7b5605851648b2d171",
  })
    .then((response) => {
      if (response.status == 200) {
        //   console.log(response);
        switch (response.data.weather[0].main.toLowerCase()) {
          case "clear":
            $(".icon").html(icons.clear);
            break;
          case "rain":
            $(".icon").html(icons.rain);
            break;
          case "storm":
            $(".icon").html(icons.storm);
            break;
          case "snow":
            $(".icon").html(icons.snow);
            break;
          case "mist":
            $(".icon").html(icons.mist);
            break;
          case "clouds":
            $(".icon").html(icons.clouds);
            break;
        }
        $(".temp").append(
          Math.round(((response.data.main.temp - 32) * 5) / 9) + "°"
        );
        $(".city").append(response.data.name);
      }
    })
    .catch((err) => {
      console.log(err);
    });
    setInterval(function(){$(".time").html(moment().format("LT").split(" ")[0])}, 3000);
    
    let name = "Ghadeer";
    moment().format("LT").split(" ")[1] === "AM"
      ? $(".name").append("Good morning, " + name)
      : $(".name").append("Good afternoon, " + name);

axios({
    method: 'get',
    url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en' 
})
.then(res => {
    $('body').append(`<div class= "qouteCon"></div>`)
    $('.qouteCon').append(`<p class= "quote">"${res.data.quoteText}"</p>`)
    $('.qouteCon').append(`<p class= "quote">-${res.data.quoteAuthor}</p>`)

})
.catch( err => console.log(err))

axios({
    method: "get",
    url: "https://api.unsplash.com/photos/random?query=sea&client_id=WUMSoTTYcY-osxFPWbV39zuVAWIESLSRLNY7nv_I-m8",
})
.then(response => {
    $('body').css('backgroundImage','url('+response.data.urls.full+')');
})
.catch(error => {
        console.log(error);
})