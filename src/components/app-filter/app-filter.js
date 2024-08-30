import { Component } from 'react';
import './app-filter.css';

export default class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            atrFilter: ''
        }
    }

    toggleClassBtns = (elem) => {
        const btns = elem.parentNode.children;

        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove('btn-light');

            if (btns[i] !== elem) {
                btns[i].classList.remove('btn-light');
                btns[i].classList.add('btn-outline-light');
            } else {
                btns[i].classList.remove('btn-outline-light');
                btns[i].classList.add('btn-light');
            }
        }
    }

    onUpdateAtrFilter = (e) => {
        const atr = e.target.getAttribute('data-filter');

        this.setState({atrFilter: atr});
        this.props.onUpdateAtrFilter(atr);

        this.toggleClassBtns(e.target);
    }

    render() {
        return (
            <div className='btn-group'>
                <button 
                    className='btn btn-light'
                    data-filter="all"
                    type='button'
                    onClick={this.onUpdateAtrFilter}>
                        Все сотрудники
                </button>
                <button 
                    className='btn btn-outline-light'
                    data-filter="promotion"
                    type='button'
                    onClick={this.onUpdateAtrFilter}>
                        На повышение
                </button>
                <button 
                    className='btn btn-outline-light'
                    data-filter="1000"
                    type='button'
                    onClick={this.onUpdateAtrFilter}>
                        Зарплата больше 1000$
                </button>
            </div>
        );
    }
}