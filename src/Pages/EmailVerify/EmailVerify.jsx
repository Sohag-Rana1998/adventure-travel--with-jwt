import React, { useEffect } from "react";
import useAuth from "../../Components/useHooks/useAuth/useAuth";
import { useNavigate } from "react-router-dom";

const EmailVerify = () => {
  const { isVerified, updateUserStatus } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isVerified === true) {
      navigate("/");
    }
  }, [isVerified, navigate]);

  const handleStatus = () => {
    updateUserStatus();
    console.log(isVerified);
  };
  return (
    <div className="max-w-7xl mx-auto w-full md:w-1/2 px-10 h-full text-center">
      <div>
        <h1 className=" text-xl font-bold mb-5">Email Verification</h1>
        <p>
          A verification email has been sent to your email address. Please check
          your inbox.
        </p>
        <p>
          After verifying your email, you will be able to visit all the pages.
          Thank you.
        </p>
        <div className="flex justify-end mt-5">
          <button onClick={handleStatus} className="btn bg-blue-500 text-white">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
