import {Component} from 'react';
import './employees-list-item.css';

export default class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            star: false
        };
    }

    changeIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        })) 
    }

    addStar = () => {
        this.setState(({star}) => ({
            star: !star
        }))
    }

    render() {
        const {name, surname, salary} = this.props,
              {increase, star} = this.state,
              increaseClass = increase ? ' increase' : '',
              starClass = star ? ' like' : '';

        return (
        <li className={"list-group-item d-flex justify-content-between" + increaseClass + starClass}>
            <span 
                className="list-group-item-label"
                onClick={this.addStar}>
                    {name} {surname}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary ? salary + "$" : '1000$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={this.changeIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
        );
    }
}