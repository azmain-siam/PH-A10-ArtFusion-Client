import { useLoaderData, useParams } from "react-router-dom";
import { saveBook, saveWishlist } from "../Utils";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();

  const book = books.find((book) => book.bookId == bookId);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleAddRead = (book) => {
    saveBook(book);
  };

  const handleAddWishlist = (book) => {
    saveWishlist(book);
  };
  // console.log(bookId, books);

  return (
    <section className="flex flex-col md:flex-row gap-12 work-sans mt-3 border px-4 md:border-none md:px-0 rounded-3xl">
      {/* Image Container */}
      <div className="min-w-[45%] h-[350px] md:h-[520px]  rounded-2xl flex justify-center mt-8 ">
        <img className="h-full object-cover" src={image} alt="" />
      </div>

      {/* Details Container */}
      <div className="pb-10">
        <h3 className="playfair text-3xl md:text-5xl font-bold text-[#131313] mb-4">
          {bookName}
        </h3>
        <p className="font-medium text-[#131313CC] md:text-xl">By: {author}</p>
        <hr className="my-4" />
        <p className="font-medium text-[#131313CC] md:text-xl">{category}</p>
        <hr className="my-4" />
        <p className="text-[#131313] font-bold mb-5 md:mb-14">
          Review:{" "}
          <span className="text-[#131313CC]  font-normal">{review}</span>
        </p>
        <h4 className="text-[#131313] font-bold mb-5 flex gap-5 items-center">
          Tags:
          <div className="flex gap-3 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-2 bg-[#23BE0A0D] text-[#23BE0A] text-sm md:text-base font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </h4>
        <hr className="my-4" />
        <div className="flex gap-6 mb-8">
          <div className="space-y-3">
            <h4>Number of pages:</h4>
            <h4>Publisher:</h4>
            <h4>Year of Publishing:</h4>
            <h4>Rating:</h4>
          </div>
          <div className="space-y-3 font-semibold text-[#131313]">
            <h4>{totalPages}</h4>
            <h4>{publisher}</h4>
            <h4>{yearOfPublishing}</h4>
            <h4>{rating}</h4>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 mb-6">
          <button
            onClick={() => handleAddRead(book)}
            className="bg-white hover:bg-[#23BE0A] border border-[#23BE0A] hover:text-white duration-300 md:text-lg font-semibold px-4 lg:px-5 py-3 lg:py-3 rounded-lg w-full md:w-auto"
          >
            Read
          </button>
          <button
            onClick={() => handleAddWishlist(book)}
            className="bg-[#59C6D2] hover:bg-white border border-[#59C6D2] hover:text-black duration-300 md:text-lg font-semibold px-4 lg:px-5 py-3 lg:py-3 rounded-lg text-white w-full md:w-auto"
          >
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
