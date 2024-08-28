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
            ]
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

    onToggleIncrease = (id) => { 
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }

                return item;
            })
        }));
    }

    onToggleRise = (id) => { 
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id),
                  oldObj = data[index],
                  newObj = {...oldObj, rise: !oldObj.rise},
                  newArr = [...data.slice(0, index), newObj, ...data.slice(index+1)];

            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <div className="app">
                <AppInfo 
                    numOfEmpl={this.state.data.length}
                    withAward={this.state.data.filter(item => item.increase === true).length}/>
    
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm
                    createEmpl={this.createItem}/>
            </div>
        );
    }
}
