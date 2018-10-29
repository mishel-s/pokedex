import React, { Component } from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import {SET_ITEMS_PER_PAGE} from '../../../../constants/types.js';

class ItemsPerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'bt_10',
            value: '10'
        }
    }
    getStyles = (name) => {
        const {active} = this.state;
        return active === name ? styles.active : '';
    }
    render() {
        this.props.setItems(this.state.value);
        return (
            <React.Fragment>
                <div className={styles.itemsPerPage}>
                    <span>Items per page:</span>
                    <button id='bt_10' value='10' onClick={(e) => {this.setState( { active: e.target.id, value: e.target.value } ); this.props.setItems(this.state.value);}} className={styles.bt + ' ' + this.getStyles('bt_10')}>10</button>
                    <button id='bt_20' value='20' onClick={(e) => {this.setState( { active: e.target.id, value: e.target.value } ); this.props.setItems(this.state.value);}} className={styles.bt + ' ' + this.getStyles('bt_20')}>20</button>
                    <button id='bt_50' value='50' onClick={(e) => {this.setState( { active: e.target.id, value: e.target.value } ); this.props.setItems(this.state.value);}} className={styles.bt + ' ' + this.getStyles('bt_50')}>50</button>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(
    state => ({
        itemsPerPage: state.itemsPerPage
    }),
    dispatch => ({
        setItems(value) {
            dispatch({type: SET_ITEMS_PER_PAGE, payload: value})
        }
    })
)(ItemsPerPage)