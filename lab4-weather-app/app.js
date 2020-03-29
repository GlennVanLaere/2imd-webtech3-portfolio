class App{

    constructor(){
        this.getLocation();
        this.lat;
        this.long;
        this.localstorageTimeStamp();
        this.getTrump();
        

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
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/578f34885a24431ca5ea046be74456ce/${this.lat},${this.long}?units=auto`;
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
            localStorage.setItem("time", time.getTime());
            

            
            
            
        })
        .catch(err => {
            console.log(err);
        })
        }

        // getCoctail(){
        //     let urlCoctail = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
        //     fetch(urlCoctail).
        //     then(coctailResponse => {
        //         return coctailResponse.json();
        //     })
        //     .then(coctailData =>{
        //         let summary  = coctailData.drinks;
        //         console.log(summary);
        //     })
        // }
        
         //api runtest
        //         getTrump(){
        //     let urlTrump = `https://www.tronalddump.io/tag`;
        //     fetch(urlTrump).
        //     then(trumpResponse => {
        //         return trumpResponse.json();
        //     })
        //     .then(trumpData =>{
        //         let summary  = trumpData;
        //         console.log(summary);
        //     })
        // }
                 getTrump(){
            let urlTrump = `https://www.tronalddump.io/quote/Il_bY0K2QkWWaQIQHzcCtw`;
            fetch(urlTrump).
            then(trumpResponse => {
                return trumpResponse.json();
            })
            .then(trumpData =>{
                let summary  = trumpData.value;
                console.log(summary);
                document.getElementById("trump").innerHTML = summary + "<br>" + "-trump";
            })
        }


        localstorageTimeStamp(){
            let time = localStorage.getItem("time");

            let currentTime = new Date();
            let timeCanPass = 3600;
            let calculation = currentTime.getTime()-time;
            console.log(calculation);
            if(calculation < timeCanPass){
                this.getFromLocalStorage();
            }
            else{
                this.getWeather();
            }


        }
        getFromLocalStorage(){
            let current = new Date();
            localStorage.setItem("time", current.getTime());
            this.getLocation();
            return current;
        }
    }






let app = new App();