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
    manufacturedBy:string
}

export interface Student{
    name:string,
    class:number,
    section:string,
    sub1:number,
    sub2:number,
    sub3:number
}
