import './employees-list-item.css';

const EmployeesListItem = (props) => {
    const {name, surname, salary, onDelete, onToggleProp} = props,
          increaseClass = props.increase ? ' increase' : '',
          starClass = props.rise ? ' like' : '',
          secondName = surname ? surname : '';

    return (
    <li className={"list-group-item d-flex justify-content-between" + increaseClass + starClass}>
        <span 
            className="list-group-item-label"
            onClick={onToggleProp}
            data-toggle="rise">
                {name} {secondName}
        </span>
        <input type="text" className="list-group-item-input" defaultValue={salary ? salary + "$" : '1000$'}/>
        <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
                className="btn-cookie btn-sm "
                onClick={onToggleProp}
                data-toggle="increase">
                <i className="fas fa-cookie"></i>
            </button>

            <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
    );
    
}

export default EmployeesListItem;