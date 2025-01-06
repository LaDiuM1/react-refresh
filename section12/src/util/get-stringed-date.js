export const getStringedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1 < 10 ? `0${targetDate.getMonth() + 1}` : targetDate.getMonth() + 1;
    let date = targetDate.getDate() < 10 ? `0${targetDate.getDate()}` : targetDate.getDate();

    return `${year}-${month}-${date}`;
}