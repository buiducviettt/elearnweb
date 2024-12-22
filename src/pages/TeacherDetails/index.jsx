import BannerText from '../../components/BannerText';
import DefaultLayout from '../../components/Layout/Default Layout';
import styles from './details.module.scss';
import Images from '../../assets/image/Images';
import classnames from 'classnames/bind';
import { useParams } from 'react-router-dom';
const cx = classnames.bind(styles);
const TeacherDetails = () => {
  const { teacherId } = useParams();
  const teacherData = {
    1: {
      name: 'Ms. Trang Đặng',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      images: Images.teacher,
      title: ' Cử nhân ngôn ngữ Anh ',
    },
    2: {
      name: 'Ms. Thuỳ Dương',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      images: Images.teacher,
      title: ' Cử nhân QTKD',
    },
    3: {
      name: 'Ms. Tùng Phạm',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      images: Images.teacher,
      title: ' 9.0 Ielts',
    },
    4: {
      name: 'Ms. Duy Phạm',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      images: Images.teacher,
      title: ' 8.0 Ielts',
    },
    5: {
      name: 'Ms. Trang Đặng',
      desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
      images: Images.teacher,
      title: 'Cử nhân ngôn ngữ Anh',
    },
  };
  const teacher = teacherData[teacherId];

  return (
    <DefaultLayout>
      <BannerText title={teacher ? teacher.name : ''} desc={teacher.title} />
      <main className="mt-5">
        <div className={cx('teacherInfo', 'container')}>
          <div className={cx('teacherInfo_box')}>
            <div className={cx('teacherInfo_box_inner')}>
              <p className={cx('teacherInfo_box_inner_title')}>Giới thiệu </p>
              <p className={cx('teacherInfo_box_inner_desc')}>
                Giới thiệu Tôi là {teacher.name} - {teacher.title}, hiện tôi
                đang giảng dạy tại Trung tâm Anh Ngữ Quốc Tế PEP. Với hơn 3 năm
                kinh nghiệm trong lĩnh vực giảng dạy tiếng Anh, tôi đã chia sẻ
                rất nhiều kiến thức bổ ích và thúc đẩy niềm đam mê học ngoại ngữ
                cho các em học sinh. Hy vọng rằng, những kiến thức tôi chia sẻ
                sẽ mang lại nhiều giá trị, giúp các em tự tin trong quá trình sử
                dụng và vận dụng kỹ năng tiếng Anh.
              </p>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};
export default TeacherDetails;
