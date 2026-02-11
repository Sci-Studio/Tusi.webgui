import React from 'react';
import EditTree from '../edit-tree/EditTree';
import styles from './MainWindow.module.css';

const MainWindow: React.FC = () => {
    return (
        <div className={styles.mainWindow}>
            <EditTree />
        </div>
    );
};

export default MainWindow;