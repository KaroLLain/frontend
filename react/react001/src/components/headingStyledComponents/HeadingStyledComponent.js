import React from "react";
import '../heading/heading.css'
import ListItem from '../headingStyledComponents/styled/ListItem.js';
import {BorderListItem} from '../headingStyledComponents/styled/ListItem'


class HeadingStyledComponent extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <BorderListItem>Home</BorderListItem>
                        <ListItem active>About</ListItem>
                        <ListItem>Articles</ListItem>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default HeadingStyledComponent;