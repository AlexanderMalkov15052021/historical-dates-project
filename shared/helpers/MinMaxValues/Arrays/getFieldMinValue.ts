export const getFieldMinValue = (field: string, arr?: any[]) => {
    return arr?.reduce((prev, next) => {
        return (prev[field] < next[field] ? prev : next);
    });
}