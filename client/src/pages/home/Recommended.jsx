import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from '../book/BookCard';
import { useGetBooksQuery } from '../../store/features/books/bookApi';


const Recommended = () => {
    const { data: books = [] } = useGetBooksQuery();
   
  return (
    <>
        <div className="py-10">
        <h2 className="text-3xl font-semibold mb-6">Recommended</h2>
        <div>
          
          <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
       
        {
                books.length > 0 ? books.map((book, index) => {
                    if(book.trending === true) return <SwiperSlide key={index}><BookCard  book={book} /></SwiperSlide> 
                }): <>
                <h2 className="text-2xl font-semibold ">No Books Found</h2>
                </>
            }
        
      </Swiper>
          <div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Recommended