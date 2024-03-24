/* Crear una aplicacion React que contenga una sola pagina. En esta pagina dividida en carts tenemos 5 cards cada uno mostrando el dia y la hora en distintas ciudades (Los angeles, Nueva York, Madrir ,  Moscu y Tokio ).
Restricciones:
Solo un state dentro del tsx conteniendo el current Date, sin setter
const [fechaBase] = useState(valorInicial)
El sistema debe ejecutarse correctamente independientemente de donde se ejecute (no siempre en argentina)
Usar moment.js para soporte.  vs usar Luxon
*/

//MomentJS es una libreria (deprecada) para JavaScript que nos permite trabajar con Objetos Mutables de tipo fecha (sumar, restar, cambiar formato ect).
// Por ser mutables es importante entender que las operaciones que se realicen con el objeto en muchos casos lo modifican, por lo que hay que siempre clonar el objeto y guardarlo en una nueva variable antes de operar con el.
// Independientemente del pais donde su utilce nuestra solucion que aplica moment, (es decir sin importar el formato que se reciba como variable de ingreso), con Moment podemos definir el formato  de salida a mostrar. Esto no lo podemos hacer de manera directa con Date()  

"use client"
import { Card } from "../componets/card/Card";
import moment from "moment";
import { useState } from "react";

export default function Home() {

  let valorUTC = moment(moment.utc());
  let valorInicial = moment()
  console.log(valorInicial);
  console.log(valorUTC);
  const [fechaUTC] = useState(valorUTC);

  // const [valorIniciar, setValorInicial] = useState(valorInicial);
  // function cambiarHora (): any {
  //   return setValorInicial(valorInicial.add(1, 's') );
  // }

  return (
    <>
      <main className="main">
        <h1> Horarios del mundo </h1>
        <div className="tarjetas-UTC" >
          <Card
            id="0"
            ciudad="BsAs-UTC"
            fecha={fechaUTC.clone().subtract(3, 'h').format('LLLL')}>
          </Card>
          <Card
            id="1"
            ciudad="Tokio-UTC"
            fecha={fechaUTC.clone().add(9, 'h').format('LLLL')}
          />
          <Card
            id="2"
            ciudad="Nueva York-UTC"
            fecha={fechaUTC.clone().subtract(4, 'h').format('LLLL')}
          />
          <Card
            id="3"
            ciudad="Madrid-UTC"
            fecha={fechaUTC.clone().add(1, 'h').format('LLLL')}
          />
          <Card
            id="4"
            ciudad="Los Angeles-UTC"
            fecha={fechaUTC.clone().subtract(7, 'h').format('LLLL')}
          />
          <Card 
            id="5" cd
            ciudad="Moscú-UTC"
            fecha={fechaUTC.clone().add(3, 'h').format('LLLL')}
          />
        </div>

        {/* <button onClick={cambiarHora}>Actualizar</button> */}

      </main>
    </>
  )
}
