import Link from 'next/link'
import React from 'react'

export default function TitleInfoISO() {
  return (
    <>
    <div className='absolute left-[-120px]'>
        <p className='ml-[55px] text-[#606981] text-[18px]'>Установка приложения</p>
      <div className='mt-[-27px] ml-[370px] text-[18px] w-[600px] h-[44px]'>
        <div className='ml-[250px] w-[600px]'>
      <p className='mb-[9px]'>Приложение ВТБ Онлайн недоступно для скачивания и обновления в магазине App Store.</p>
      
      <p>Воспользуйтесь веб-версией – она такая же, как приложение, только удобнее: ее не надо скачивать и обновлять.</p>
        </div>

      <div className="border-b-[1px] mt-[75px] w-[1180px] ml-[-320px] text-lineVtb "></div>
      </div>
    </div>
    <div className=" flex mt-[240px] w-full h-[100px] relative left-[-65px] ">
      <p className='text-[#606981] text-[18px]'>Как добавить ВТБ Онлайн на стартовый экран телефона</p>
      <ul className='ml-[98px]'>
        <li className='mb-[10px] text-[17px]'>1.&nbsp; В браузере Safari перейти по <Link href='https://online.vtb.ru/login' className=' text-border_blue hover:text-btnVtb'>ссылке.</Link></li>
        <li className='mb-[10px] text-[17px] w-[550px]'>2.&nbsp; В нижнем меню нажмите на иконку «Поделиться», а затем &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;выберите «Добавить на экран Домой»</li>
        <li className='mb-[10px] text-[17px]'>3.&nbsp; Нажмите «Добавить». Иконка появится на экране смартфона.</li>
        <li className='mb-[10px] text-[17px] border-l-4 text-[#19AEDE]'>&nbsp;&nbsp;&nbsp; Подключите вход по биометрии, и вы сможете входить в ВТБ <br/>&nbsp;&nbsp;&nbsp; Онлайн за 1 клик.</li>
      </ul>
    </div>
    </>
  )
}
