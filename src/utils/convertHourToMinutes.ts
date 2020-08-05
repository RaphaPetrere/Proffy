export default function convertHourToMinutes(time: string) {
    const [hour, minutes] = time.split(':').map(Number); //pega a hora e os minutos e transforma em tipo numérico
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;
}