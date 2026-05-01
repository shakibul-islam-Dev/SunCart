import Image from "next/image";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-screen bg-white font-poppins">
      {/* Left Side: Image Section */}
      <div className="w-full md:w-1/2 bg-[#CBE4E8] flex items-end justify-center pt-20 overflow-hidden">
        <div className="relative w-full h-150 lg:h-175">
          <Image
            src="/side-image.png" // আপনার ইমেজের পাথ এখানে দিন
            alt="Shopping Illustration"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      {/* Right Side: Empty for your custom content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-20">
        <div className="w-full max-w-100">
          {/* এখানে আপনার ফর্ম বা অন্য কন্টেন্ট যোগ করুন */}
          <h2 className="text-3xl font-medium mb-2">Log in to Exclusive</h2>
          <p className="text-sm mb-10">Enter your details below</p>

          {/* placeholder for your next steps */}
          <div className="border-2 border-dashed border-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-400">
            Your custom content goes here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
