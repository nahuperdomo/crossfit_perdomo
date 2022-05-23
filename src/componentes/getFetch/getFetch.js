let objetos = [
    {
      id: ':1',
      imagen: 'https://cdn.shopify.com/s/files/1/2137/4785/products/CallerasCarbono3agujerosRosadas2.jpg?v=1631892947&width=960',
      descripcion: 'Las mejores calleras para tus entrenamientos mas duros.',
    },
    {
      id: ':2',
      imagen:
        'https://cdn.shopify.com/s/files/1/2137/4785/files/Botellas_PHone.jpg?v=1642995176&width=640',
      descripcion: 'Botella para motivarte a estar siempre hidratado',
    },
    {
      id: ':3',
      imagen:
        'https://cdn.shopify.com/s/files/1/2137/4785/files/Straps.jpg?v=1638189332&width=640',
      descripcion: 'Straps para ayudar a tu agarre y que no te limite tu entrenamiento.',
    },
  ];


  export const getFetch = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                const query = id ? objetos.find(objetos => objetos.id === id ) : objetos                                  
                resolve( query )                           
            }, 2000)
        })            
    
}