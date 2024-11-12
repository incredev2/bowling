export const isValidScore = (pins: any): boolean => {
    if (parseInt(pins) === pins) {
        return pins >= 0 && pins <= 10;
    }
    return false;
};
