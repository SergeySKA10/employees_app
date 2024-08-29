import { Component } from 'react';
import './employees-add-form.css';

export default class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        if (e.target.name === 'name' && e.target.value !== '') {
            this.setState({
                [e.target.name]: e.target.value.match(/[a-zA-Z]/gi).join('')
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value.replace(/\D/g, '')
            });
        }
        
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {name, salary} = this.state;
        
        if (name.length > 0 && +salary > 499) {
            this.props.createEmpl(this.state.name, this.state.salary);
        }
        
        this.setState({
            name: '',
            salary: ''
        });
    }

    render() {

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        name="name"
                        placeholder="Имя сотрудника"
                        onChange={this.onValueChange}
                        value={this.state.name} />
                    <input type="number"
                        className="form-control new-post-label"
                        name="salary"
                        placeholder="Запрлата в $"
                        onChange={this.onValueChange}
                        value={this.state.salary} />
    
                    <button type="submit"
                            className="btn btn-outline-light"> Добавить
                    </button>
                </form>
            </div>
        );
    }
}