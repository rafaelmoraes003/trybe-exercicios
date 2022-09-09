const convertCapacity = (value: number, baseUn: string, convertUn: string): number => {
    const units: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

    const fromIndex = units.indexOf(baseUn);
    const toIndex = units.indexOf(convertUn);
    const expoent = (toIndex - fromIndex);
    return value * Math.pow(10, expoent);
};