export interface CepApi {
  getAddressByCEP(cep: string, number: number): string,
  getCepByAddress(address: string, number: number): string
}

class CepService {
  private readonly cepApi: CepApi;

  constructor(cepApi: CepApi) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;