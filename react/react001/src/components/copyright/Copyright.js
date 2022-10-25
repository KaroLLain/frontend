import React from "react";
import'../copyright/copyright.css';
import styles from '../copyright/styles.module.css'
import '../copyright/sassStyles.scss'

class Copyright extends React.Component {
    render() {
        return (
            <div className="copyrightBox">
                <span className={styles.info}> Copyright &copy;
                    {this.props.year} example.com
                    All rights reserved
                </span>
            </div>
        );
    }
}

export default Copyright;