/* Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos */

function isTrue() {
    return true;
}

function hiIn5() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hola soy una promesa');
      }, 5000);
    });
  }
  async function asyncCall() {
    const result = await hiIn5();
    console.log(result);
  }
  
  asyncCall();

let sum=0;
function autoPares(){
    let a=1;
    sum+=a*2;
    return sum
}
console.log(isTrue())
console.log(hiIn5())
console.group();
console.log(autoPares())
console.log(autoPares())
console.log(autoPares())
console.groupEnd();