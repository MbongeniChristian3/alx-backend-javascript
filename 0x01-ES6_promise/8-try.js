export default function divideFunction(a, b) {
    if (b === 0) {
        throw new Error("cannot divide by 0");
    }
    return a / b;
}
