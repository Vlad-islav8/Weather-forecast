import axios  from "axios";

const apiKey = "bdb9ffc2bb20c80df963dcf1766e8313"

const geocoding = axios.create({
    baseURL: "http://api.openweathermap.org/geo/1.0/"
})

const getCurrentForecast = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/"
})


export const geocodingAPI = {
    getCoordinatesCity(city:string) {
        return (
            geocoding
                .get(`direct?q=${city},3166-1&limit=5&appid=${apiKey}`)
                .then(responce => responce.data)
        )
    }
}


export const getCurrentForecastAPI = {
    getForecast(lat:number, lon:number) {
        return (
            getCurrentForecast
                .get(`weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ru`)
                .then(responce => responce.data)
        )
    }
}