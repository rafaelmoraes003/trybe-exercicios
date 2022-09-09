const convertMass = (value: number, baseUn: string, convertUn: string): number => {
    const units: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

    const fromIndex = units.indexOf(baseUn);
    const toIndex = units.indexOf(convertUn);
    const expoent = (toIndex - fromIndex);
    return value * Math.pow(10, expoent);
};