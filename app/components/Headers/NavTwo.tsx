"use client"
import Link from "next/link";
import { useState } from "react";
import CardInfoProc from '../Headers/Modals/CardInfoProc'


export default function NavTwo() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <nav>
      <ul className="flex ml-[-13px]">
        <li className="transition hover:transition-all text-[15px] hover:text-btnVtb cursor-pointer"
        onClick={() => setShowModal(true)}
        >
          Кредиты
          </li>
        <li className="transition hover:transition-all ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">
         
          Карты
          </li>
        <li className="transition hover:transition-all ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Ипотека</li>
        <li className="transition hover:transition-all ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Автокредиты</li>
        <li className="transition hover:transition-all ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Вклады и счета</li>
        <li className="transition hover:transition-all ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Инвестиции</li>
        <li className="transition hover:transition-all ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Онлайн-сервисы</li>
        <li className="transition hover:transition-all ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Платежи и переводы</li>
        <li className="transition hover:transition-all ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Другие услуги</li>
        <li className="transition hover:transition-all ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">Привилегия</li>
        <li className="transition hover:transition-all ml-[13px] text-[15px] tracking-[.4px] hover:text-btnVtb cursor-pointer">
         <Link href='https://private.vtb.ru/'>
          Private Banking
         </Link>
          </li>
      </ul>
    </nav>

    {showModal ? (
        <>
          <div
            className=" top-[78px] left-[-460px] flex  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5   border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  Кредиты
                  </h3>
                  <svg
              width="28px"
              height="28px"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00707 8.41421L14.9055 16.3126H7.00409C6.45255 16.3126 6 16.7651 6 17.3167C6 17.8682 6.44548 18.3137 6.99702 18.3137L17.3167 18.3137C17.8682 18.3137 18.3137 17.8682 18.3137 17.3167L18.3278 6.99702C18.3278 6.44548 17.8824 6 17.3308 6C16.7793 6 16.3338 6.44548 16.3338 6.99702L16.3197 14.8984L8.42128 7C8.03237 6.61109 7.39598 6.61109 7.00707 7C6.61816 7.38891 6.61816 8.0253 7.00707 8.41421Z"
                fill="currentColor"
              ></path>
            </svg>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex my-4 text-slate-500 text-lg leading-relaxed">
                   <ul>
                    <li>КРЕДИТНЫЕ ПРОДУКТЫ</li>
                    <li>Кредит наличными</li>
                    <li>Экспресс-кредит</li>
                    <li>Рефинансирование</li>
                    <li>Кредит под залог недвижимости</li>
                   </ul>
                   <ul>
                    <li>ВАМ МОЖЕТ БЫТЬ ИНТЕРЕСНО</li>
                    <li>Информация для заемщиков</li>
                    <li>Калькулятор кредита</li>
                   </ul>
                   <CardInfoProc/>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
