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
            let time = new Date();

            document.getElementById("temprature").innerHTML = "it is "+ temp+" degrees";
        
            if(temp < 15){
                document.getElementById("text").innerHTML = "its cold warm up with a lot of liquer!"
            }
            else{
                document.getElementById("text").innerHTML = "Time for a iced coctail!"
            }
            localStorage.setItem("currentWeather", JSON.stringify(data));
            localStorage.setItem("time", JSON.stringify(time));

            
            
            
        })
        .catch(err => {
            console.log(err);
        })
        }

        localstorageTimeStamp(){
            localStorage.getItem()


        }
    }






let app = new App();