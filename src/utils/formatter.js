const formatter = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });

export const formattedDate = (date) => {
    return formatter.format(date);
};
