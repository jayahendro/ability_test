"use client";
import LoginForm from "@/components/authentication/LoginForm";

export default function Login() {
  return (
    <section className="w-full h-full gradient-form bg-gray-200 md:h-screen">
      <div className="w-full h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12 h-full">
            <div className="block bg-white h-full">
              <div className="lg:flex lg:flex-wrap g-0 h-full">
                <div className="lg:w-6/12 px-4 md:px-0 flex items-center justify-center">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <div className="text-4xl text-blue">
                        <span className="font-bold">Hai, </span>
                        <span className="font-gilroybold">Selamat Datang</span>
                      </div>
                    </div>
                    <LoginForm />
                  </div>
                </div>
                <div
                  className="lg:w-6/12 flex items-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #0582CA, #002061)",
                  }}
                >
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
