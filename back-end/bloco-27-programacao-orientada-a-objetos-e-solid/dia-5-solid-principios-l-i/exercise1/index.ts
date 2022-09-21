import CepService from './CepService';
import FooCepAPI from './FooCepAPI';

function main() {
  const cepSvc = new CepService(new FooCepAPI());

  console.log(
    'get address by cep', 
    '->', 
    cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
}

main();