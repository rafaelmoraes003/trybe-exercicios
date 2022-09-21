import CepService, { CepApi } from "./CepService";

class MockCepApi implements CepApi {
  getAddressByCEP(cep: string, number: number): string {
    return `O endereço para o "CEP:${cep}, n°:${number}" é "endereço MockAddress"`;
  }

  getCepByAddress(address: string, number: number): string {
    return `O CEP para: "${address}, n°: ${number}" é "CEP MockCep"`;
  }
}

const cepService = new CepService(new MockCepApi());
console.log(cepService.addressByCep('xxxxx-xxx', 256));
console.log(cepService.cepByAddress('Rua X', 256));