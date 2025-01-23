import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../store/features/books/bookApi";
import { getImgUrl } from "../../utils/utils";

const SignleBook = () => {
  const { id } = useParams();
  const {data: book } = useGetBookQuery(id);

  

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p className="text-xl text-gray-700 mb-2">by {book.author}</p>
      <img src={getImgUrl(book.coverImage)} alt={book.title} className="size-2/12 mb-4" />
      <p className="text-gray-600 mb-4">{book.description}</p>
      <p className="text-gray-500">Published on: {book.publishedDate}</p>
    </div>
  );
};

export default SignleBook;