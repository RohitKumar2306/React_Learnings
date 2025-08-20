import './Example.css'

function Example({title, description, code}) {
    return (
        <div>
            <li>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{code}</p>
            </li>
        </div>
    );
}

export default Example;