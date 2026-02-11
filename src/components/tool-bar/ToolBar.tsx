import styles from './ToolBar.module.css';
import PushButton from '../../widgets/push-button/PushButton';
import help from '../../assets/svg/help.svg';
import Open from '../../assets/svg/open.svg';

export default function() {
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.fileContainer}>
                    <PushButton imageUrl={Open} text='Open'/>
                </div>
                <div className={styles.helpContainer}>
                   <PushButton imageUrl={help} text=''/>
                </div>
            </div>
        </main>
    )
}