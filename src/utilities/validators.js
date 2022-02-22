export const required = (value) => {
    if(value) {
        return undefined;
    }
    return 'Field is required';
}

export const maxLengthCreater = (maxlenght) => (value) => {
    if (value.length >= maxlenght) {
        return undefined;
    }
    return 'Minimum length should be ' + maxlenght;
}