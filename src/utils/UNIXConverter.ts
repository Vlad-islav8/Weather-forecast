interface Time {
    hour: number ;
    minute: number | null;
    seconds: number | null;
}

interface Date {
    year: number | null;
    month: number | null;
    day: number | null;
}

export interface DateTime {
    time: Time;
    date: Date;
}

const UNIXConverter = (unixTimestamp: number):DateTime => {
    const date = new Date(unixTimestamp * 1000);

     const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    
    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    
    return {
        time: {
            hour,
            minute,
            seconds
        },
        date: {
            year,
            month,
            day
        }
    };
}   

export default UNIXConverter