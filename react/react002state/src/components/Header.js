import React from 'react';
import '../components/Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            link: "home",
            linkedClicked: false
        };
    }

    toggle = (event) => {
        console.log(event.target.id + "clicked");
        this.setState((state) => ({linkedClicked: !state.linkedClicked}));
    }

render () {
    return (
        <div>
            <nav>
                <ul>
                    <li className={this.state.linkedClicked ? "clicked" : ""}>
                        <a href="#" id='link1' onClick={this.toggle}>
                            {this.state.link}
                        </a>
                        <p>{this.state.linkedClicked ? "clicked" : "not clicked"}</p>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

}

