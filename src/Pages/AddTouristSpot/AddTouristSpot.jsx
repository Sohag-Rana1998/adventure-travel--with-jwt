import Swal from 'sweetalert2';

const AddTouristSpot = () => {
  const handleAddSpot = e => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const spotName = form.spot.value;
    const CountryName = form.countryName.value;
    const location = form.location.value;
    const description = form.description.value;
    const averageCost = form.averageCost.value;
    const season = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const visitor = form.visitor.value;
    const userName = form.userName.value;
    const email = form.email.value;

    const addTouristSpot = {
      photo,
      spotName,
      CountryName,
      location,
      description,
      averageCost,
      season,
      travelTime,
      visitor,
      userName,
      email,
    };
    console.log(addTouristSpot);
    fetch('http://localhost:5000/add-tourist-spot', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addTouristSpot),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Coffee Added Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="gadgetContainer  my-10">
      <div className="shadow-lg rounded-lg   p-5 md:p-8 border border-blue-400">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold dark:text-white">
            Add Your Tourist Spot
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleAddSpot}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="photo">
                Photo URL
              </label>
              <input
                className="w-full p-2 border  rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Add Image URL"
                id="photo"
                name="photo"
              />

              <label
                className="block mb-2 mt-4 dark:text-white"
                htmlFor="countryName"
              >
                Country Name
              </label>
              <input
                className="w-full p-2  border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder=" Country Name"
                id="countryName"
                name="countryName"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="description"
              >
                Short Description
              </label>
              <input
                className="w-full p-2  border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter short description"
                id="description"
                name="description"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="seasonality"
              >
                Seasonality Of Tour
              </label>
              <input
                className="w-full p-2  border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Add Season Name "
                id="seasonality"
                name="seasonality"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="visitor"
              >
                Visitors-Per-Year
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="number"
                placeholder="Number of visitors per year"
                id="visitor"
                name="visitor"
              />
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="spot">
                Name Of Tourist Spot
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Name Of Tourist Spot"
                id="spot"
                name="spot"
              />
              <label
                className="block mb-2 mt-4 dark:text-white"
                htmlFor="location"
              >
                Location
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Spot Location"
                id="location"
                name="location"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="averageCost"
              >
                Average Cost
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Average-cost"
                id="averageCost"
                name="averageCost"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="travelTime"
              >
                Travel Time
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Add Travel Time (e.g 3days / 7days)"
                id="travelTime"
                name="travelTime"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="userName"
              >
                User Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="User Name"
                id="userName"
                name="userName"
              />
            </div>
          </div>
          <label className="block mt-4 mb-2 dark:text-white" htmlFor="email">
            User Email
          </label>
          <input
            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
            type="email"
            placeholder="User Email"
            id="email"
            name="email"
          />

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Your Tourist Spot"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTouristSpot;
