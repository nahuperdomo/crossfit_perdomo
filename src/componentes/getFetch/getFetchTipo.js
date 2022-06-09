let objetos = [
    {
      tipo: 'accesorio',
      precio:'$20',
      stock:'5',
      minimo:'0',
      id: ':1',
      nombre:'Calleras Dojo',
      imagen: 'https://cdn.shopify.com/s/files/1/2137/4785/products/CallerasCarbono3agujerosRosadas2.jpg?v=1631892947&width=960',
      descripcion: 'Las mejores calleras para tus entrenamientos mas duros.',
      descripcionLarga:"Uso: Son ideales para entrenamientos como pullups, c2b, t2b, muscule ups y todo tipo de ejercicios donde necesites disminuir la fricción de la palma contra otro objeto.Proteccion: Las calleras Dojo de Carbono de tres agujeros brindan mayor protección en tus palmas. Al cubrir mayor área que las de 2 agujeros, emplean mayor superficie de contacto, obteniendo mayor protección contra ampollas. "
    },
    {
      tipo: 'accesorio',
      precio:'$20',
      stock:'10',
      minimo:'0',
      nombre:'Botella Motivacional Dojo',
      id: ':2',
      imagen:
        'https://cdn.shopify.com/s/files/1/2137/4785/files/Botellas_PHone.jpg?v=1642995176&width=640',
      descripcion: 'Botella para motivarte a estar siempre hidratado',
      descripcionLarga:"Hidratacion Correcta: Toma 2lt diarios con nuestra botella motivacional. Esta botella te impulsa a lograrlo con su medidor de consumo y sus frases motivacionales. Sentite Bien: Hidratarte correctamente ayuda al rendimiento físico, a mejorar el humor, a controlar tu peso y al funcionamiento de tus riñones."
    },
    { 
      tipo: 'accesorio',
      precio:'$20',
      stock:'8',
      minimo:'0',
      nombre:'Straps Dojo',
      id: ':3',
      imagen:
        'https://cdn.shopify.com/s/files/1/2137/4785/files/Straps.jpg?v=1638189332&width=640',
      descripcion: 'Straps para ayudar a tu agarre y que no te limite tu entrenamiento.',
      descripcionLarga:"Las correas o “straps” son simplemente 2 tiras cortas de tela que se suelen fabricar principalmente en algodón o en lona. Estas pequeñas tiras suelen medir de 30 a 45 cms y se enrollan tanto a la muñeca como a la barra o mancuerna para los ejercicios de tirón como pesos muertos, remos, encogimientos, rack pulls… También se utilizan mucho en los movimientos olímpicos como arrancadas (snatch)."
    },
    {
      tipo: 'suplemento',
      precio:'$20',
      stock:'10',
      minimo:'0',
      nombre:'Star Nutrition Whey Protein 2,2lb',
      id: ':4',
      imagen:
        'https://cdn.shopify.com/s/files/1/2137/4785/products/star-nutrition-wheyprotein-1000grs-vainilla-copia-scaled.jpg?v=1638801752&width=960',
      descripcion: 'Botella para motivarte a estar siempre hidratado',
      descripcionLarga:"Desarrolla el crecimiento de masa muscular.Premium Whey Protein de Star Nutrition es un suplemento dietario a base de concentrado de proteínas de suero de leche. Recomendado para deportistas o cualquiera que realice actividad física y busca desarrollar masa muscular. Contiene una fuente natural de aminoácidos esenciales como Glutamina, Arginina, BCAA y otros que actúan en pos de una mejor asimilación y reducción de fatiga a la hora de desarrollar cualquier actividad. Aporta 25 gramos de proteína por cada medida de Premium Whey Protein."
    },
    {
      tipo: 'suplemento',
      precio:'$20',
      stock:'10',
      minimo:'0',
      nombre:'ENA WHEY PROTEIN TRUE MADE 1KG',
      id: ':5',
      imagen:
        'https://cdn.shopify.com/s/files/1/2137/4785/products/ENA_WHEY_PROTEIN.jpg?v=1559559448&width=420',
      descripcion: 'ENA WHEY PROTEIN TRUE MADE 1KG',
      descripcionLarga:"TRUEMADE WHEY PROTEIN contiene un blend de máxima pureza con una rápida absorción y una excelente calidad, garantizando una efectiva y rápida recuperación del tejido muscular: WHEY PROTEIN CONCENTRATE (VVPC): Perfil completo de aminoácidos esenciales, brindando la mejora calidad de proteínas para aumentar la-energía durante el entrenamiento."
    },
    {
      tipo: 'suplemento',
      precio:'$20',
      stock:'10',
      minimo:'0',
      nombre:'Whey Protein 5lb / Optimum Nutrition.',
      id: ':6',
      imagen:'https://cdn.shopify.com/s/files/1/2137/4785/products/optimum-nutrition-100-gold-standard-5lb-chocolate.jpg?v=1544340450&width=960',
      descripcion: 'Whey Protein 5lb / Optimum Nutrition.',
      descripcionLarga:"100% Whey Gold Standard de Optimun Nutrition es una proteína de alta calidad elaborada principalmente a base de aislado y concentrado de proteína de suero.100% Whey Gold Standard es una proteína de referencia, perfecta para alcanzar los requerimientos proteicos diarios, contribuyendo al adecuado desarrollo y recuperación muscular."
    },
  ];


  export const getFetchTipo = (tipo) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                const query = tipo ? objetos.find(objetos => objetos.tipo === tipo ) : objetos                                  
                resolve( query )                           
            })
        })            
    
}