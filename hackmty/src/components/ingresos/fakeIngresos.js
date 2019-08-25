
  const ingresos = [
      {
        billNumber: "21C64A08-FCA7-4A9D-AACE-4EA6EE696D24",
        currency: "MXN",
        paymentMethod: "Credit",
        subtotal: 347.89,
        total: 402.95,
        placeGenerated: 3940,
        date: "01/06/2018",
        clientRFC: "PST1205156S0",
        clientName: "Pacosw",
        productID: 83121703,
        quantity: 1
    }, 
    {
        billNumber: "6A14D8FD-78CC-4D97-92C4-157A2E58F6BE",
        currency: "MXN",
        paymentMethod: "Cash",
        subtotal: 200.54,
        total: 232.62,
        placeGenerated: 3940,
        date: "11/06/2018",
        clientRFC: "PNI4112052LA",
        clientName: "Moyo",
        productID: 81112105,
        quantity: 1
      }, 
      {
        billNumber: "47CC190B-631B-48FD-9D92-77385E5BCC61",
        currency: "MXN",
        paymentMethod: "Cash",
        subtotal: 17.89,
        total: 20.75,
        placeGenerated: 3543,
        date: "08/06/2018",
        clientRFC: "PST1205156S0",
        clientName: "GM",
        productID: 88129703,
        quantity: 1

      }
  ];

  export function getIngresos() {
    return ingresos;
  }