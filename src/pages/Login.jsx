import React, { useState } from "react";
import NavBar from "../components/header/NavBar";
import { EyeOff, Eye } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "padi@test.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "https://padiumkm.id/";
    } else {
      alert("Email atau kata sandi salah!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-row flex-wrap justify-between w-full">
        <section className="flex md:items-center items-start flex-col text-center w-full px-5 py-5 lg:px-40 lg:py-20 xl:px-40 xl:py-20 max-md:relative max-md:overflow-auto">
          <div className="max-w-screen-lg w-full bg-white rounded-lg lg:flex overflow-hidden h-fit">
            <div className="relative bg-gradient-to-r from-[#0193AC] to-[#3EC4DB] lg:max-w-screen-sm w-full hidden lg:flex flex-col justify-center items-center space-y-7 p-10">
              <div className="flex justify-center items-center flex-1">
                <div className="relative w-[300px] h-[270px]">
                  <img
                    className="w-full h-full"
                    src="https://padiumkm.id/_next/static/media/login-card.067a7ac1.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="space-y-4 flex-1 min-h-[144px]">
                <div className="text-2xl text-white font-bold text-center">
                  Pasti Untung di PaDi UMKM!
                </div>
                <div className="text-white text-center font-normal">
                  Berbagai promo dan penawaran menarik setiap bulannya!
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full h-full lg:h-full p-10 border ">
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="text-2xl text-paletteText-primary font-bold">
                    Login
                  </div>
                  <a href="/">
                    <div className="relative w-24 h-24 cursor-pointer">
                      <img
                        className="w-full h-full"
                        alt="logo"
                        src="https://padiumkm.id/_next/static/media/logo.08a5ef96.svg"
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full">
                <form onSubmit={handleLogin}>
                  <div className="w-full space-y-2 mb-4">
                    <label className="block text-sm font-bold text-paletteText-primary text-left">
                      Alamat Email
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 focus:outline-none false"
                      id="email"
                      type="text"
                      placeholder="padi@test.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="w-full space-y-2 mb-6">
                    <label className="block text-sm font-bold text-paletteText-primary text-left">
                      Kata Sandi
                    </label>
                    <div className="relative">
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 focus:outline-none false"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="123456"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span
                        onClick={togglePasswordVisibility}
                        className="absolute cursor-pointer top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2"
                      >
                        {showPassword ? (
                          <Eye className="w-4 h-4" />
                        ) : (
                          <EyeOff className="w-4 h-4" />
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="w-full mb-6">
                    <button
                      className="w-full py-2 bg-[#009EA9] text-white rounded-lg"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center space-y-2">
                  <div>
                    <span className="font-light text-sm">
                      Lupa Kata Sandi?{" "}
                    </span>
                    <a
                      href="/forgot-password"
                      className="text-sm font-semibold text-[#0193AC] hover:underline"
                    >
                      Tekan Disini
                    </a>
                  </div>
                  <div className="text-sm text-slate-500">Atau</div>
                  <div>
                    <span className="font-light text-sm">
                      Belum punya akun?{" "}
                    </span>
                    <a
                      href="/register"
                      className="text-sm font-semibold text-[#0193AC] hover:underline"
                    >
                      Daftar Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
