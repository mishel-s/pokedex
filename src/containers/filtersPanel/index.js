import React, { Component } from 'react';
import styles from  './styles.css';
import ItemsPerPage from '../../components/common/filters/itemsPerPage';
import SearchName from "../../components/common/filters/searchName";

class filtersPanel extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={styles.filtersPanel}>
                    <SearchName />
                    <ItemsPerPage />
                </div>
            </React.Fragment>
        )
    }
}

export default filtersPanel;