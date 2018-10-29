import React, { Component } from "react";
import MDSpinner from "react-md-spinner";
import styles from "./styles.css";

export default class SpinnerThin extends Component {
    render() {
        return (
            <div className={styles.spinnerThin}>
                <MDSpinner size={70} borderSize={3} duration={2000} />
            </div>
        );
    }
}