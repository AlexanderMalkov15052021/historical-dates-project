export const getCircleAngles: (circleCount: number) => number[] = (circleCount = 6) => {
    const targetAngle = Math.PI * 2 / circleCount;
    const circleAngles = Array(circleCount).fill(0);
    return circleAngles.map((_, index) => Number((targetAngle * index).toFixed(2)));
}