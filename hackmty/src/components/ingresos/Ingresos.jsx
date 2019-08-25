import React, { Component } from 'react';

import Pagination from './pagination'
import {paginate} from './paginate_utils'
import {getIngresos} from './fakeIngresos'

class Ingresos extends Component {
    state = {  
        ingresos: [],
        pageSize: 4,
        currentPage: 1
    }

    componentDidMount() {
        this.setState({ingresos: getIngresos()})
    } //We are changing the name of the variables, similar to object decunstruction

    handlePageChange =  page => {
        this.setState({ currentPage: page})
    }

    handleDelete = (ingreso) =>  {
        const ingresos = this.state.ingresos.filter(m => m.billNumber !== ingreso.billNumber)
        this.setState({ingresos})
    }
    render() { 
        const {length: count} = this.state.ingresos
        const {pageSize, currentPage, ingresos: allingresos} = this.state
        
        if (this.state.ingresos.length === 0) return <p>Lo siento! No hay ningun ingreso </p>

        const ingresos = paginate(allingresos, currentPage, pageSize)
            
        return ( 
            <div className="row">

                <div className="col"> 
                
                
                <p>Mostrando {this.state.ingresos.length} ingresos de la base de datos</p>
        <tabler className="table"> 
            <thead> 
                <tr>
                    <th>Numero de Factura</th>
                    <th>Moneda</th>
                    <th>Metodo de Pago</th>
                    <th>Subtotal</th>
                    <th>Total</th>
                    <th>Lugar Generado</th>
                    <th>Fecha</th>
                    <th>RFC Cliente</th>
                    <th>Nombre Cliente</th>
                    <th>ID producto</th>
                    <th>Cantidad</th>
                    <th><button className="btn btn-danger btn-sm">Borrar </button></th>
                </tr>
            </thead>
            <tbody>
                {ingresos.map(ingreso => (
            <tr key={ingreso.billNumber}>
                <td>{ingreso.billNumber}</td>
                <td>{ingreso.currency}</td>
                <td>{ingreso.paymentMethod}</td>
                <td>{ingreso.subtotal}</td>
                <td>{ingreso.total}</td>
                <td>{ingreso.placeGenerated}</td>
                <td>{ingreso.date}</td>
                <td>{ingreso.clientRFC}</td>
                <td>{ingreso.clientName}</td>
                <td>{ingreso.productID}</td>
                <td>{ingreso.quantity}</td>

                <th><button onClick={() => this.handleDelete(ingreso)}  className="btn btn-danger btn-sm">Borrar </button></th>
            </tr>
                ))}
                
            </tbody>
        </tabler> 
        <Pagination  
        itemsCount={count} 
        pageSize={pageSize}
        currentPage={currentPage} 
        onPageChange={this.handlePageChange} />
        </div> 

        </div> 
        );
    }
}
 
export default Ingresos;