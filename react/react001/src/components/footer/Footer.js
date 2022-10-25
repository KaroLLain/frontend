import React from 'react';
import '../footer/footer.css';
import Copyright from '../copyright/Copyright';

const elements1 = ["Tos", "About", "Models"];
const items = [];
const elements2 = ["Bla", "Bla", "kla"];

function Footer(props) {

    for( const [index, value] of elements1.entries()){
        items.push(<li>{value}</li>);
    }

    let isLogged = false;
    let button;
    if(isLogged) {
        button = <button>Logout</button>
    } else {
        button = <button>Log in</button>
    }

    return (
        <div>
            <footer>
                <ul>
                    {items}
                    <li>Regulamin</li>
                    <li>FAQ</li>
                    <li>Contact: {props.contactEmail}, 
                                {props.companyData.city}
                    </li>
                    {elements2.map( (value, index) => {
                        return <li>{value}</li>
                    })}
                </ul>
                <Copyright year = "2020"/>
                {button}

                {isLogged == true &&
                    <div>Sprawdź pocztę</div>
                } 
                {isLogged
                ? <div>Zobacz notyfikacje</div>
                : <div>Zaolguj się</div>
                }
            </footer>
        </div>
    );
}

export default Footer;