export interface TimerInfo{
    startClicks:number,
    pauseClicks:number,
    info:string,
} 

export interface CounterClicks{
    startClicks:number,
    pauseClicks:number,
}

export interface Category{
    name:string,
    description:string,
    price:number,
    img:string,
    type:string
}

// export enum CategoryTypes {
//     ELECTRONICS = 'electronics',
//     CLOTHING = 'clothing',
//     FURNITURE = 'furniture',
//     BEAUTY = 'beauty',
//     SPORTS = 'sports',
//     ALL = 'all'
// }

