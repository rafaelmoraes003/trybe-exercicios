import { CepApi } from "./CepService";

class FooCepAPI implements CepApi {
  getAddressByCEP(cep: string, number: number): string {
    return `O endereço para o "CEP:${cep}, n°:${number}" é "endereço foo"`;
  }

  getCepByAddress(address: string, number: number): string {
    return `O CEP para: "${address}, n°: ${number}" é "CEP baz"`;
  }
}

export default FooCepAPI;