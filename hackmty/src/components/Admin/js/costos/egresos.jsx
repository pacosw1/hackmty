import React, { Component } from 'react';

import Pagination from './pagination'
import {paginate} from './paginate_utils'
import {getEgresos} from './fakecostos'

class Egresos extends Component {
    state = {  
        egresos: [],
        pageSize: 4,
        currentPage: 1
    }

    componentDidMount() {
        this.setState({egresos: getEgresos()})
    } 

    handlePageChange =  page => {
        this.setState({ currentPage: page})
    }

    handleDelete = (egreso) =>  {
        const egresos = this.state.egresos.filter(m => m.costID !== egreso.costID)
        this.setState({egresos})
    }
    render() { 
        const {length: count} = this.state.egresos
        const {pageSize, currentPage, egresos: allegresos} = this.state
        
        if (this.state.egresos.length === 0) return <p>Lo siento! No hay ningun egreso </p>

        const egresos = paginate(allegresos, currentPage, pageSize)
            
        return ( 
            <div className="row">

                <div className="col"> 
                
                
                <p>Mostrando {this.state.egresos.length} egresos de la base de datos</p>
        <tabler className="table"> 
            <thead> 
                <tr>
                    <th>ID del costo</th>
                    <th>Cantidad</th>
                    <th>Costo</th>
                    <th>Salario Mensual</th>
                    <th><button className="btn btn-danger btn-sm">Borrar </button></th>
                </tr>
            </thead>
            <tbody>
                {egresos.map(egreso => (
            <tr key={egreso.costID}>
                <td>{egreso.costID}</td>
                <td>{egreso.quantity}</td>
                <td>{egreso.cost}</td>
                <td>{egreso.monthlySalary}</td>
                <th><button onClick={() => this.handleDelete(egreso)}  className="btn btn-danger btn-sm">Borrar </button></th>
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
 
export default Egresos;