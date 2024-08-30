//import { Component } from 'react';
import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'promotion', label: 'На повышение'},
        {name: 'more1000', label: 'Зарплата больше 1000$'}
    ],
          buttons = buttonsData.map(({name, label}) => {
            const active = props.filter === name,
                  clazz = active ? 'btn-light' : 'btn-outline-light';
            return (
                <button 
                    className={`btn ${clazz}`}
                    key={name}
                    type='button'
                    onClick={() => props.onUpdateFilter(name)}>
                        {label}
                </button>
            )
          })
    
    return (
        <div className='btn-group'>
           {buttons}
        </div>
    );
}

export default AppFilter;

