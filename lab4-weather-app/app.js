class App{

    constructor(){
        this.getLocation();
        this.lat;
        this.long;

    }
    getLocation(){
        navigator.geolocation.getCurrentPosition(
            this.gotLocation.bind(this), 
            this.errorLocation.bind((this)));
    
    };
    
    gotLocation(result){
        this.lat = result.coords.latitude;
        this.long = result.coords.longitude;
        this.getWeather();

    };
    
    
    errorLocation(err){
        console.log(err);
    
    }
    getWeather(){
        //https://api.darksky.net/forecast/b3a2ea193e79fb57e5af2cb459c254bf/37.8267,-122.4233
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/18f1011af8a4c766973b12b265bd590b/${this.lat},${this.long}?units=auto`;
        fetch(url)
        .then(response => {
           
           return response.json();

        })
        .then(data => {
            let temp = data.currently.temperature;
            let text = "no data";
            console.log(temp);
            localStorage.setItem("currentWeather", JSON.stringify(data));

            if(temp < 15){
                text = "";
            }
            else{
                text = "hot";
            }
            console.log(text);
            document.querySelector("#text").innerHTML=text;
            
        })
        .catch(err => {
            console.log(err);
        })
        }
    }






let app = new App();