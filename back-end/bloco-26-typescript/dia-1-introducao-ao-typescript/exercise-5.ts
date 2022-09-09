const convertLength = (value: number, baseUn: string, convertUn: string): number => {
    const units: string[] = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

    const fromIndex = units.indexOf(baseUn);
    const toIndex = units.indexOf(convertUn);
    const expoent = (toIndex - fromIndex);
    return value * Math.pow(10, expoent);
};