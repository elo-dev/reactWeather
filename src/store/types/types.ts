export type Weather = {
    name: string,
    main: {
        temp: number,
        feels_like: number,
        pressure: number
    }
}