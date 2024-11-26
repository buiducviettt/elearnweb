import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './detail.module.scss';
import DefaultLayout from '../../components/Layout/Default Layout';
import ReactStars from 'react-rating-stars-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import ReasonList from '../../components/Reasons';
import Testimonials from '../../components/Testimonials';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import Images from '../../assets/image/Images';
import FeedbackItem from '../../components/Feedback Item';
import 'swiper/css/navigation';
import ContactForm from '../../components/contactform';
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProducts] = useState({});

  useEffect(() => {
    const fetchURL = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchURL();
  }, [productId]);
  const price = product.price * 24000; // Giá nhân với 24000
  const formattedPrice = price.toLocaleString('vi-VN');

  return (
    <DefaultLayout>
      <div className={styles.productDetail}>
        <div className="container">
          <div className="row">
            <div className={`col col-md-8 ${styles.productWrapper}`}>
              <div className={styles.productImg}>
                {product.image && (
                  <img src={product.image} alt={product.title} />
                )}
              </div>
              <h1>{product.title}</h1>
              <div
                className={`${styles.ratingAndInfo} d-flex justify-content-between align-items-center`}
              >
                <div className={styles.ratingWrapper}>
                  {product.rating && (
                    <ReactStars
                      count={5} // Hiển thị 5 ngôi sao
                      value={product.rating.rate} // Giá trị rating ban đầu
                      size={30} // Kích thước mỗi ngôi sao
                      activeColor="#ffd700" // Màu sắc của ngôi sao được chọn
                      isHalf={true} // Cho phép hiển thị nửa sao
                      edit={false}
                    />
                  )}
                  <p>{product.rating?.rate || 0}</p>
                  <p>{product.rating?.count || 0} reviews</p>
                </div>
                <div className={`${styles.info} `}>
                  <ul className="d-flex flex-direction-row align-items-center">
                    <li>200 câu hỏi</li>
                    <li>340 đã trải nghiệm</li>
                    <li>240 phút giờ học</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`col col-md-4  ${styles.productInfoWrapper}  `}>
              <div className={styles.wrapper}>
                <div className={styles.inner}>
                  <h1 style={{ color: '#DC2626' }}>{formattedPrice}đ</h1>
                  <div className={styles.productInfo}>
                    <h2 style={{ fontWeight: '700' }} className={styles.title}>
                      Thông tin khoá học
                    </h2>
                    <ul className={styles.listInfo}>
                      <li className={styles.listDetail}>
                        <div className={styles.icon}>
                          <FontAwesomeIcon
                            icon={faPersonChalkboard}
                            style={{ color: '#eeb404' }}
                          />
                        </div>
                        <div className={styles.detail}>
                          <span>Cấp độ khoá học:</span>
                          <p>IELTS 5.5+</p>
                        </div>
                      </li>
                      <li className={styles.listDetail}>
                        <div className={styles.icon}>
                          <FontAwesomeIcon
                            icon={faPersonChalkboard}
                            style={{ color: '#eeb404' }}
                          />
                        </div>
                        <div className={styles.detail}>
                          <span>Giảng viên:</span>
                          <p>IELTS 5.5+</p>
                        </div>
                      </li>
                      <li className={styles.listDetail}>
                        <div className={styles.icon}>
                          <FontAwesomeIcon
                            icon={faPersonChalkboard}
                            style={{ color: '#eeb404' }}
                          />
                        </div>
                        <div className={styles.detail}>
                          <span>Bài học:</span>
                          <p>240 bài</p>
                        </div>
                      </li>
                      <li className={styles.listDetail}>
                        <div className={styles.icon}>
                          <FontAwesomeIcon
                            icon={faPersonChalkboard}
                            style={{ color: '#eeb404' }}
                          />
                        </div>
                        <div className={styles.detail}>
                          <span>Thời gian:</span>
                          <p>15h30 phút</p>
                        </div>
                      </li>
                      <li className={styles.listDetail}>
                        <div className={styles.icon}>
                          <FontAwesomeIcon
                            icon={faPersonChalkboard}
                            style={{ color: '#eeb404' }}
                          />
                        </div>
                        <div className={styles.detail}>
                          <span>Cập nhật:</span>
                          <p>4 ngày trước</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Button title="Mua Ngay" className={styles.btn} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.reasonWrapper}>
          <div className="container">
            <div className={styles.inner}>
              <h1 className={styles.heading}>ƯU ĐIỂM KHÓA HỌC </h1>
              <h1 className={styles.heading} style={{ color: '#fecd0e' }}>
                5.5+ IELTS
              </h1>
              <ReasonList />
              <ReasonList />
            </div>
          </div>
        </section>
        <section className={styles.achieve}>
          <div className="container">
            <div className={styles.inner}>
              <h1 className={styles.heading}>
                BẠN ĐƯỢC GÌ{' '}
                <span style={{ color: '#fecd0e' }}>SAU KHÓA HỌC!</span>
              </h1>
              <ul className={`mt-5 ${styles.achieveTable}`}>
                <li className={styles.achieveList}>
                  <div className={styles.achieveDetails}>
                    <h2>
                      <span style={{ color: '#fecd0e' }}>01. </span>
                      Nâng cao
                    </h2>
                    <div className={styles.content}>
                      <p>
                        Bằng cấp IELTS giúp bạn nổi bật hơn khi xin việc, đặc
                        biệt tại các công ty đa quốc gia và tổ chức quốc tế, tạo
                        điều kiện phát triển sự nghiệp và tăng cơ hội thăng
                        tiến.
                      </p>
                    </div>
                  </div>
                </li>
                <li className={styles.achieveList}>
                  <div className={styles.achieveDetails}>
                    <h2>
                      <span style={{ color: '#fecd0e' }}>02. </span>
                      Tự tin
                    </h2>
                    <div className={styles.content}>
                      <p>
                        hóa học giúp bạn làm quen với các ngữ cảnh và cách sử
                        dụng tiếng Anh trong giao tiếp hàng ngày, giúp bạn tự
                        tin khi nói chuyện với người nước ngoài, đi du lịch
                      </p>
                    </div>
                  </div>
                </li>
                <li className={styles.achieveList}>
                  <div className={styles.achieveDetails}>
                    <h2>
                      <span style={{ color: '#fecd0e' }}>03. </span>
                      Phát triển
                    </h2>
                    <div className={styles.content}>
                      <p>
                        Bằng cấp IELTS giúp bạn nổi bật hơn khi xin việc, đặc
                        biệt tại các công ty đa quốc gia và tổ chức quốc tế, tạo
                        điều kiện phát triển sự nghiệp và tăng cơ hội thăng
                        tiến.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className={`${styles.tesimonials} product_page_swiper`}>
          <h1 className={styles.heading}>BẢNG VÀNG THÀNH TÍCH</h1>
          <Swiper
            loop={true}
            navigation
            modules={[Navigation]}
            pagination={{ clickable: true }}
            slidesPerView={5}
            spaceBetween={40} // Khoảng cách giữa các slide
            centeredSlides={true}
          >
            <SwiperSlide>
              <Testimonials
                name="Bùi Đức Việt"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                course="Khoá Ielts K14"
                score="8.5"
                image={Images.testimonial}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Testimonials
                name="Bùi Đức Việt"
                score="9.5"
                image={Images.testimonial}
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                course="Khoá Ielts K14"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                name="Bùi Đức Việt"
                score="9.5"
                image={Images.testimonial}
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                course="Khoá Ielts K14"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                score="7.5"
                image={Images.testimonial}
                name="Bùi Đức Việt"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                course="Khoá Ielts K14"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                name="Bùi Đức Việt"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                course="Khoá Ielts K14"
                image={Images.testimonial}
                score="8.5"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                image={Images.testimonial}
                name="Bùi Đức Việt"
                score="8.5"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                course="Khoá Ielts K14"
              />
            </SwiperSlide>
          </Swiper>
        </section>
        <section className={styles.feedbackSec}>
          <div className="container">
            <h1>FEEDBACK HỌC VIÊN VÀ PHỤ HUYNH</h1>

            <div className="row">
              <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={40}
                navigation
                pagination={{ clickable: true }}
              >
                <div className="col-md-4">
                  <SwiperSlide>
                    <FeedbackItem
                      avt={Images.student}
                      name="Đức Việt"
                      comment="Trung tâm quá tuyệt vời!!!!"
                    />
                  </SwiperSlide>
                </div>

                <div className="col-md-4">
                  <SwiperSlide>
                    <FeedbackItem
                      avt={Images.student}
                      name="Việt Bùi"
                      comment="Đáng để bỏ tiền ra học!!!!"
                    />
                  </SwiperSlide>
                </div>
                <div className="col-md-4">
                  <SwiperSlide>
                    <FeedbackItem
                      avt={Images.student}
                      name="Việt Bùi"
                      comment="Đáng để bỏ tiền ra học!!!!"
                    />
                  </SwiperSlide>
                </div>

                <div className="col-md-4">
                  <SwiperSlide>
                    <FeedbackItem
                      avt={Images.student}
                      name="Việt"
                      comment="Không có gì để chê!!!!"
                    />
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </section>
        <section>
          <ContactForm />
        </section>
      </div>
    </DefaultLayout>
  );
};

export default ProductDetail;