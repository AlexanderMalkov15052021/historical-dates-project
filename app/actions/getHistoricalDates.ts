
export const getHistoricalDates = async () => {

    const dataId = 1;
    const limit = 10;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/dates?dataId=${dataId}&_limit=${limit}`, { cache: 'no-store' });

    const dates = await res.json();

    return dates;
}