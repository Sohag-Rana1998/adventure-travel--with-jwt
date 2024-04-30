import { Rating } from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const FullReview = () => {
  const { id } = useParams();
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(setLoading, 800, false);
    axios
      .get(`https://travel-zone-server-side.vercel.app/testimonials/${id}`)
      .then(data => {
        setReview(data.data);
      });
  }, [id]);
  console.log(review);
  return loading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : (
    <div className="px-0 md:px-32">
      <Helmet>
        <title>Adventure Travel | Details Review</title>
      </Helmet>
      <div className="container  mx-auto  bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg bg-blue-300 h-24 overflow-hidden">
          {/* <img
                className="object-cover object-top w-full"
                src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Mountain"
              /> */}
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img className="object-cover object-center h-32" src={review.img} />
        </div>
        <div className="w-full flex px-5 pb-5 flex-col items-center justify-center text-center mx-auto mt-2">
          <h2 className="font-semibold">{review.user}</h2>
          <h2 className="font-semibold">From:{review.location}</h2>
          <p className=" font-semibold">
            <Rating value={parseInt(review.rating)} className="" />
          </p>
          <p className=" font-semibold">{review?.comment}.....</p>
        </div>
      </div>
    </div>
  );
};

export default FullReview;
