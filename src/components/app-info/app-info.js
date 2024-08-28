import './app-info.css';

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h1>Ует сотрудников в моей компании</h1>
            <h2>Общее число сотрудников: {props.numOfEmpl}</h2>
            <h2>Сотрудники с премией: {props.withAward} </h2>
        </div>
    );
}

export default AppInfo;