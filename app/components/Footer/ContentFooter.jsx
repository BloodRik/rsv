import Link from 'next/link'
import React from 'react'

export default function ContentFooter() {
  return (
    <section className='flex flex-wrap'>
        <div className="mt-[70px]">
            <h2 className='text-[32px] ml-[170px] cursor-pointer'>1000</h2>
            <span className='ml-[170px] text-[13px] text-[#606981] font-[300] '>Бесплатно с мобильного</span>
            <h2 className='text-[32px] ml-[170px] mt-[16px] cursor-pointer'>8(800)100-24-24</h2>
            <span className='ml-[170px] text-[13px] text-[#606981]'>Бесплатный звонок по России</span>
            <h2 className='text-[32px] ml-[170px] mt-[16px] cursor-pointer'>8(495)785-53-05</h2>
            <span className='ml-[170px] text-[13px] text-[#606981]'>для звонков за пределами России</span>
        </div>
        <nav className="mt-[70px]">
            <ul>
                <li className='text-[#30498f] cursor-pointer mb-[16px] pl-[160px] text-[18px] hover:text-btnVtb '>
                    <Link href='https://www.vtb.ru/about/offices/'>
                    Отделения и банкоматы
                    </Link>
                    </li>
                <li className='text-[#30498f] cursor-pointer mb-[16px] pl-[160px] text-[18px] hover:text-btnVtb '><Link href='https://www.vtb.ru/personal/platezhi-i-perevody/obmen-valjuty/'>
                    Курсы валют
                    </Link>
                    </li>
                <li className='text-[#30498f] cursor-pointer mb-[16px] pl-[160px] text-[18px] hover:text-btnVtb '>
                    <Link href='https://www.vtb.ru/about/contacts/'>
                    Контакты
                    </Link>
                    </li>
            </ul>
        </nav>
        <nav className="mt-[70px] ml-[130px]">
            <ul className='flex mb-[15px]'>
                <li className='text-[18px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link href='https://www.vtb.ru/about/bank/'>
                    О банке
                    </Link>
                    </li>
                <li className='text-[18px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link href='https://www.vtb.ru/about/'>
                        О группе
                        </Link>
                        </li>
                <li className='text-[18px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link href='https://www.vtb.ru/about/bank/general/'>
                    Реквизиты
                    </Link>
                    </li>
                <li className='text-[18px] text-[#606981] cursor-pointer hover:text-btnVtb'>
                    <Link href='https://www.vtb.ru/akcii/'>
                    Акции и скидки
                    </Link>
                    </li>
            </ul>
            <ul className="flex mb-[15px]">
                <li className='text-[18px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link href='https://www.vtb.ru/tarify/'>
                    Тарифы и документы
                    </Link>
                    </li>
                <li className='text-[18px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link href='https://www.vtb.ru/about/press/'>
                    Пресс-служба
                    </Link>
                    </li>
            </ul>
            <ul className="flex mb-[15px]">
                <li className='text-[18px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link href='https://www.vtb.ru/ir/disclosure/'>
                    Раскрытие информации
                    </Link>
                    </li>
                <li className='text-[18px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link href='https://www.vtb.ru/about/bank/partners/'>
                    Партнерам
                    </Link>
                    </li>
            </ul>
            <ul className="flex mb-[15px]">
                <li className='text-[18px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link href='https://www.vtb.ru/about/bank/insurance/'>
                    Страховым компаниям
                    </Link>
                    </li>
                <li className='text-[18px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link href='https://www.vtb.ru/articles/'>
                    Статьи
                    </Link>
                    </li>
                <li className='text-[18px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link href='https://www.vtb.ru/personal/kredit/'>
                    Кредиты
                    </Link>
                    </li>
            </ul>
            <ul className="flex mb-[15px]">
                <li className='text-[18px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link href='https://www.vtb.ru/personal/karty/'>
                    Карты
                    </Link>
                    </li>
                <li className='text-[18px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link href='https://www.vtb.ru/personal/ipoteka/'>
                    Ипотека
                    </Link>
                    </li>
                <li className='text-[18px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link href='https://www.vtb.ru/personal/avtokredity/'>
                    Автокредиты
                    </Link>
                    </li>
                <li className='text-[18px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link href='https://www.vtb.ru/personal/vklady-i-scheta/'>
                    Вклады
                    </Link>
                    </li>
            </ul>
            <ul>
                <li className='text-[18px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                   <Link href='https://learn.vtb.ru/fingram/'>
                    Финансовая грамотность
                   </Link>
                    </li>
            </ul>
        </nav>
        <div className="flex mt-[30px] ml-[550px]">
            <div className="flex ml-[30px]">
            <span className='darkFooter '></span>
                <p className='text-[#0A2896] text-[18px] cursor-pointer hover:text-btnVtb'>Темная тема</p>
            </div>
            <div className=" flex ml-[220px]">
                <span className='flagFooter mr-[8px] cursor-pointer'></span>
               <p className='text-[#0A2896] text-[18px] cursor-pointer hover:text-btnVtb'>English</p>
            <div className="border-b-[1px] w-[1253px] ml-[-760px] text-lineVtb absolute top-[1410px]"></div>
            <br />
            <br />
            <br />
            </div>
        </div>
    </section>
  )
}
