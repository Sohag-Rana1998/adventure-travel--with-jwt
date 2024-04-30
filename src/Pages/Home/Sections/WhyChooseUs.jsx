import { Card, CardBody } from '@material-tailwind/react';
import { Zoom } from 'react-awesome-reveal';

const WhyChooseUs = () => {
  return (
    <div className="mt-10">
      <div className="text-center mb-5">
        <Zoom cascade>
          <h3 className="text-xl font-bold">Our Specials</h3>
          <h1 className="text-5xl font-bold">Why Travel with Us?</h1>
        </Zoom>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full">
            <img
              src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-1.jpg"
              alt=""
              className="w-full h-52 rounded-t-2xl"
            />
          </div>
          <CardBody className="text-2xl text-center font-bold">
            2000+ Our Worldwide Guide
          </CardBody>
        </Card>
        <Card className="w-full h-full  flex flex-col items-center justify-center">
          <div className="w-full">
            <img
              src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-2.jpg"
              alt=""
              className="w-full h-52 rounded-t-2xl"
            />
          </div>
          <CardBody className="text-2xl text-center font-bold">
            100% Trusted Tour Agency
          </CardBody>
        </Card>
        <Card className="w-full h-full  flex flex-col items-center justify-center">
          <div className="w-full">
            <img
              src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-3.jpg"
              alt=""
              className="w-full h-52 rounded-t-2xl"
            />
          </div>
          <CardBody className="text-2xl text-center font-bold">
            12+ Years of Travel Experience
          </CardBody>
        </Card>
        <Card className="w-full h-full  flex flex-col items-center justify-center">
          <div className="w-full">
            <img
              src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-4.jpg"
              alt=""
              className="w-full h-52 rounded-t-2xl"
            />
          </div>
          <CardBody className="text-2xl text-center font-bold">
            98% of Our Travelers are Happy
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default WhyChooseUs;
