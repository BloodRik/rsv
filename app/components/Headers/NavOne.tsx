import Link from 'next/link'
import React from 'react'

export default function NavOne() {
  return (
    <>
    <nav className='flex'>
        <ul className='flex space-x-3 ml-[-28px] text-xs/[1px] text-[#adb2c1] font-black tracking-[.05em]'>
            <li className='text-btnVtb'>
              <Link href='https://www.vtb.ru/'>
              Частным лицам
              </Link>
              </li>
            <li className='cursor-pointer hover:text-nevOne transition hover:transition-all'>
              <Link href='https://www.vtb.ru/samozanyatym/'>
              Самозанятым
              </Link>
              </li>
            <li className='cursor-pointer hover:text-nevOne transition hover:transition-all'>
              <Link href='https://www.vtb.ru/malyj-biznes/'>
              Малый и средний бизнес
              </Link>
              </li>
            <li className='cursor-pointer hover:text-nevOne transition hover:transition-all'>
              <Link href='https://www.vtb.ru/krupnyj-biznes/'>
              Крупный бизнес
              </Link>
              </li>
        </ul>

        <div className="m-[-10px] ml-[4px] transition ease-in-out hover:-translate-x-1 cursor-pointer">
        <svg
      aria-label="Раскрыть меню"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="#606981"
      className=""
    >
      <path
        d="M14.9949 12.415L10.4049 17.005C10.0149 17.395 9.38485 17.395 8.99485 17.005C8.60485 16.615 8.60485 15.985 8.99485 15.595L12.8749 11.705L8.99485 7.82499C8.60485 7.43499 8.60485 6.80499 8.99485 6.41498C9.38485 6.02498 10.0149 6.02498 10.4049 6.41498L14.9949 11.005C15.3849 11.385 15.3849 12.025 14.9949 12.415Z"
        fill="#606981"
      ></path>
    </svg>
</div>
    </nav>

    </>
  )
}
