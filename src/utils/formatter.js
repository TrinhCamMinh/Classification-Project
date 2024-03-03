const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/New_York', // Assuming US time zone, you can change it to your desired time zone
};

export const formattedDate = (date) => {
    const dateString = new Date(date);
    const formattedDate = dateString.toLocaleDateString('en-US', options);
    return formattedDate;
};
