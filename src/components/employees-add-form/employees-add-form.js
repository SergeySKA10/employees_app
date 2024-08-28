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
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.createEmpl(this.state.name, this.state.salary);
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