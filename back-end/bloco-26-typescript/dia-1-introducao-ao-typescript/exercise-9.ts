const convertVolume = (value: number, baseUn: string, convertUn: string): number => {
    const units: string[] = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

    const fromIndex = units.indexOf(baseUn);
    const toIndex = units.indexOf(convertUn);
    const expoent = (toIndex - fromIndex);
    return value * Math.pow(1000, expoent);

};