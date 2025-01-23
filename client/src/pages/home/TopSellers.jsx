import BookCard from "../book/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useGetBooksQuery } from "../../store/features/books/bookApi";
import { useEffect, useState } from "react";

const TopSellers = () => {
  // const [books, setBooks] = useState([]);
  const { data: books = [] } = useGetBooksQuery();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const category = ["Choose a genre", "business", "books", "romance"];

  useEffect(() => {
    if (books.length !== 0) setFilteredBooks(books);
  }, [books]);

  const filterBooks = (e) => {
    const value = e.target.value;

    const filteredBooks =
      value === "Choose a genre"
        ? books
        : books.filter((book) => book.category === value);
    setFilteredBooks(filteredBooks);
  };

  return (
    <>
      <div className="py-10">
        <h2 className="text-3xl font-semibold mb-6">Top Seller</h2>
        <div>
          <div className="mb-8 flex justify-between items-center">
            <select
              onChange={(e) => filterBooks(e)}
              name="category"
              id="category"
              className="py-2 px-4 rounded-md border border-gray-300 bg-[#eaeaea] focus:outline-none"
            >
              {category.map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
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
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, index) => {
                return (
                  <SwiperSlide key={index}>
                    <BookCard book={book} />
                  </SwiperSlide>
                );
              })
            ) : (
              <>
                <h2 className="text-2xl font-semibold ">No Books Found</h2>
              </>
            )}
          </Swiper>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default TopSellers;
