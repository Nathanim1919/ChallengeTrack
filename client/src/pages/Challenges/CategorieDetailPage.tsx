import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getCategorieByName } from "../../features/categories/categorieActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import ButtonLoading from "../../components/loading/buttonLoading";
import { IChallenge } from "../../interfaces/IChallenge";
import { MdOutlinePending } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { FaRegDotCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { categoryConfig } from "../../utils/categorieConfig";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";





const CategoryDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { selectedCategory, loading } = useAppSelector(
    (state) => state.categories
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategorieByName(name as string));
  }, [name]);

  if (loading) {
    return <ButtonLoading />;
  }

  return (
    <div className="grid grid-cols-[_.3fr_.4fr_.3fr] bg-gray-100">
      <div className="grid grid-rows-[_.4fr_.6fr]">
        <div className="bg-gray-100">
          <div className="flex flex-col p-3 gap-1">
            <h1 className="font-bold text-2xl">Personal Development</h1>
            <p className="text-[14px] text-gray-500">
              Personal development is a lifelong process. It is a way for people
              to assess their skills and qualities, consider their aims in life
              and set goals in order to realise and maximise their potential.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1 p-3">
            <div className="flex-1 border border-gray-300 p-3 bg-white grid place-items-center">
              <h1 className="font-bold text-3xl">
                140<sup>+</sup>
              </h1>
              <h2>Challenges</h2>
            </div>
            <div className="flex-1 border border-gray-300 p-3 bg-white grid place-items-center">
              <h1 className="font-bold text-3xl">
                20<sup>+</sup>
              </h1>
              <h2>Participants</h2>
            </div>
            <div className="flex-1 border border-gray-300 p-3 bg-white grid place-items-center col-span-2">
              <h1 className="font-bold text-3xl">
                10<sup>+</sup>
              </h1>
              <h2>Completed</h2>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div>
            <h2 className="font-bold flex items-center gap-1"><GiProgression/>My Progress</h2>
          </div>
          <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-4"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-8"></div>
                    <h2 className="relative -left-8">
                      100<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full"><MdOutlinePending/>Pending</p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl"/>
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-4"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-8"></div>
                    <h2 className="relative -left-8">
                      100<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full"><MdOutlinePending/>Pending</p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl"/>
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-4"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-8"></div>
                    <h2 className="relative -left-8">
                      100<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full"><MdOutlinePending/>Pending</p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl"/>
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-4"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-8"></div>
                    <h2 className="relative -left-8">
                      100<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full"><MdOutlinePending/>Pending</p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl"/>
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-4"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-8"></div>
                    <h2 className="relative -left-8">
                      100<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full"><MdOutlinePending/>Pending</p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl"/>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="grid grid-rows-2 h-[100vh] overflow-hidden">
        <div className="bg-gray-100">
          <div className="flex justify-between items-center pt-2">
            <h1 className="font-bold flex items-center gap-1"><IoMdTrendingUp/>Trending Challenges</h1>
            <IoSearch />
          </div>
          <div className="challenges p-2 h-[85vh] overflow-y-auto">
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-4"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-8"></div>
                    <h2 className="relative -left-8">
                      100<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full"><MdOutlinePending/>Pending</p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl"/>
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-4"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-8"></div>
                    <h2 className="relative -left-8">
                      100<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full"><MdOutlinePending/>Pending</p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl"/>
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-4"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-8"></div>
                    <h2 className="relative -left-8">
                      100<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full"><MdOutlinePending/>Pending</p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl"/>
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-4"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-8"></div>
                    <h2 className="relative -left-8">
                      100<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full"><MdOutlinePending/>Pending</p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl"/>
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-4"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-8"></div>
                    <h2 className="relative -left-8">
                      100<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full"><MdOutlinePending/>Pending</p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl"/>
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-4"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-8"></div>
                    <h2 className="relative -left-8">
                      100<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full"><MdOutlinePending/>Pending</p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl"/>
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-4"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-8"></div>
                    <h2 className="relative -left-8">
                      100<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full"><MdOutlinePending/>Pending</p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl"/>
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-4"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-8"></div>
                    <h2 className="relative -left-8">
                      100<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full"><MdOutlinePending/>Pending</p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl"/>
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-4"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-8"></div>
                    <h2 className="relative -left-8">
                      100<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full"><MdOutlinePending/>Pending</p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl"/>
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-4"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-8"></div>
                    <h2 className="relative -left-8">
                      100<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full"><MdOutlinePending/>Pending</p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl"/>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text p-3 border-b border-gray-200">
          Other Categories
        </h1>
        <div className="flex flex-wrap gap-2 bg-gray-100 p-3">
          {
            // Other categories
            Object.keys(categoryConfig).map((key) => {
              if (key !== name) {
                return (
                  <div key={key} className="text-[14px] ">
                    <Link to={`/categories/${key}`} className="text-white">
                      <div
                        className={`flex items-center gap-1 ${categoryConfig[key].bgColor} py-1 px-2 rounded-full border border-transparent hover:border-sky-700 hover:opacity-70`}
                      >
                        <div className="">{categoryConfig[key].icon()}</div>
                        <p>{categoryConfig[key].name}</p>
                      </div>
                    </Link>
                  </div>
                );
              }
            })
          }
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;
