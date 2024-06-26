import Link from 'next/link';
// component
import Slide from '@/component/layout/slide';
// data
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
// style
import styles from '@/style/home.module.scss';

const Group_obj: { [key: string]: string } = {
  High_Rating: 'minimum_rating=8',
  Romance: 'genre=romance',
  Music: 'genre=music',
  Animation: 'genre=animation',
};
const Group_key_arr = Object.keys(Group_obj);

const Home = () => {
  return (
    <div>
      {Group_key_arr.map((group) => {
        return (
          <div key={group}>
            <div className={styles.slideBox}>
              <Link className={styles.titleBox} href={`/group?${Group_obj[group]}`}>
                <div className={styles.titleIcon}>
                  <FontAwesomeIcon icon={faCompactDisc}></FontAwesomeIcon>
                </div>
                <div>
                  <span className={styles.title}>{group}</span>
                </div>
              </Link>
              <Slide query={Group_obj[group]} />
            </div>
          </div>
        );
      })}
      <div className={styles.footer}>
        <div className={styles.copyright}>
          <h3 className={styles.copyright_letter}>Copyright belongs to Kyungsle</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
