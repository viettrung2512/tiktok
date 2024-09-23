import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310942706023268358~c5_720x720.jpeg?lk3s=a5d48078&nonce=76214&refresh_token=33425b53c77790870721d57e7f2558f6&x-expires=1727247600&x-signature=O0fJ%2FOw7u6ILRM1WBNFvKHKAyuM%3D&shp=a5d48078&shcp=81f88b70"
                alt="Ronaldo"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Ronaldo</span>
            </div>
        </div>
    );
}

export default AccountItem;
