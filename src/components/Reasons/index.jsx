import ReasonItem from './ReasonItem';
import styles from '../Reasons/reason.module.scss';

const ReasonList = () => {
  return (
    <div className={styles.listWrapper}>
      <div className="container">
        <div className={`row`}>
          <div className="col-6 col-md-3">
            <ReasonItem
              title="Lộ trình tinh gọn"
              desc="Đề cao tính thực tiễn thực tế trong học tập và giảng dạy"
            />
          </div>
          <div className="col-6 col-md-3">
            <ReasonItem
              title="Lộ trình tinh gọn"
              desc="Đề cao tính thực tiễn thực tế trong học tập và giảng dạy"
            />
          </div>
          <div className="col-6 col-md-3">
            <ReasonItem
              title="Lộ trình tinh gọn"
              desc="Đề cao tính thực tiễn thực tế trong học tập và giảng dạy"
            />
          </div>
          <div className="col-6 col-md-3">
            <ReasonItem
              title="Lộ trình tinh gọn"
              desc="Đề cao tính thực tiễn thực tế trong học tập và giảng dạy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReasonList;
