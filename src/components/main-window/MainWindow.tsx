import React from 'react';
import styles from './MainWindow.module.css';
import EditTree from '../edit-tree/EditTree';
import ObjDisplay from '../obj-display/ObjDisplay';
import ToolSettingsTree from '../tool-settings-tree/ToolSettingsTree';

const MainWindow: React.FC = () => {
    return (
        <div className={styles.mainWindow}>
            <EditTree />
            <ObjDisplay />
            <ToolSettingsTree />
        </div>
    );
};

export default MainWindow;