import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: 'Jhon', surname: 'Smith', salary: 500, increase: true, rise: true, id: 1},
                {name: 'Peter', surname: 'Parker', increase: false, rise: false, id: 2},
                {name: 'Tomas', surname: 'Anderson', salary: 3500, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    createId = (arr, max) => {
        let num = 0;

        label: for (let i = 0; i < max; i++) {
            let id = Math.floor(Math.random() * (max - 1 + 1) + 1);

            if (id === num) continue;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id === id) {
                    num = id;
                    continue label;
                }
            }

            return id;
        }  
    }

    createItem = (name, salary, increase = false) => {
        this.setState(({data}) => {
            const id = this.createId(data, 100);
            if (id === undefined) {
                return {
                    data: data
                };
            }

            const newData = [...data];
            newData.push({name, salary, increase, id});

            return {
                data: newData
            };
        });
    }

    onToggleProp = (id, prop) => { 
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }

                return item;
            })
        }));
    }

    searchEmpl = (item, term) => {
        if (term.length === 0) {
            return item;
        }

        return item.filter(el => {
            return el.name.indexOf(term) > -1 || el.surname.indexOf(term) > -1;
        });
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterEmpl = (data, filter) => {
        switch(filter) {
            case 'promotion': 
                return data.filter(item => item.rise === true);
            case 'more1000':
                return data.filter(item => item.salary > 1000);
            default:
                return data;
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state,
              visibleData = this.filterEmpl(this.searchEmpl(data, term), filter);
        
        return (
            <div className="app">
                <AppInfo 
                    numOfEmpl={data.length}
                    withAward={data.filter(item => item.increase === true).length}/>
    
                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                    createEmpl={this.createItem}/>
            </div>
        );
    }
}
