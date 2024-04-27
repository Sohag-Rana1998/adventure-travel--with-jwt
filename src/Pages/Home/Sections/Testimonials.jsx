import { useEffect, useState } from 'react';
import UseTestimonials from '../../../Components/useHooks/useTestimonials/UseTestimonials';
import { Button, Rating } from '@material-tailwind/react';

const Testimonials = () => {
  const { data } = UseTestimonials();
  const [reviews, setReviews] = useState([]);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const testimonials = data?.slice(0, 3);
    setReviews(testimonials);
  }, [data]);

  const handleShowMore = () => {
    setReviews(data);
    setHide(true);
  };

  return (
    <div className="my-10">
      <div className="text-center mb-5">
        <h3 className="text-xl font-bold underline underline-offset-4">
          REVIEW & TESTIMONIALS
        </h3>

        <h1 className="text-5xl font-bold"> Top Reviews For Us</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews?.map(testimonial => (
          <div
            key={testimonial._id}
            className="container  mx-auto  bg-white shadow-xl rounded-lg text-gray-900"
          >
            <div className="rounded-t-lg h-32 overflow-hidden">
              <img
                className="object-cover object-top w-full"
                src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Mountain"
              />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center h-32"
                src={testimonial.img}
              />
            </div>
            <div className="w-full flex px-5 pb-5 flex-col items-center justify-center text-center mx-auto mt-2">
              <h2 className="font-semibold">{testimonial.user}</h2>
              <h2 className="font-semibold">From:{testimonial.location}</h2>
              <p className=" font-semibold">
                <Rating value={testimonial.rating} className="" />
              </p>
              <p className=" font-semibold">
                {testimonial?.comment?.slice(0, 250)}
              </p>
              <button className="btn">Continue Reading</button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        {hide ? (
          ''
        ) : (
          <Button
            onClick={handleShowMore}
            size="lg"
            className="bg-orange-500 my-5"
          >
            Show More Reviews
          </Button>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
