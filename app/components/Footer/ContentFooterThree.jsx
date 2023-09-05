import Link from "next/link";
import React from "react";

export default function ContentFooterThree() {
  return (
    <section className="flex">
      <div className="flex mt-[50px] ml-[180px] mr-[517px]">
        <svg
          color="gray"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-[23px] cursor-pointer"
        >
          <path
            d="M15.0699 2H8.93013C3.32675 2 2 3.32675 2 8.93013V15.0699C2 20.6733 3.32675 22 8.93013 22H15.0699C20.6733 22 22 20.6733 22 15.0699V8.93013C22 3.32675 20.6591 2 15.0699 2ZM18.1468 16.2696H16.693C16.1426 16.2696 15.9732 15.832 14.9852 14.8299C14.1242 13.9972 13.7431 13.8843 13.5314 13.8843C13.235 13.8843 13.1503 13.9689 13.1503 14.3783V15.6909C13.1503 16.0438 13.0374 16.2555 12.1059 16.2555C10.5674 16.2555 8.85956 15.3239 7.65984 13.5879C5.85321 11.0473 5.35921 9.14185 5.35921 8.74665C5.35921 8.53493 5.44389 8.33733 5.85321 8.33733H7.30699C7.67396 8.33733 7.8151 8.5067 7.95624 8.90191C8.67607 10.9767 9.87579 12.7975 10.3698 12.7975C10.5533 12.7975 10.638 12.7128 10.638 12.247V10.1016C10.5815 9.11362 10.0593 9.02893 10.0593 8.67607C10.0593 8.5067 10.2004 8.33733 10.4263 8.33733H12.7128C13.0233 8.33733 13.1362 8.5067 13.1362 8.87368V11.7671C13.1362 12.0776 13.2773 12.1905 13.362 12.1905C13.5455 12.1905 13.7008 12.0776 14.0395 11.7389C15.084 10.5674 15.832 8.76076 15.832 8.76076C15.9308 8.54905 16.1002 8.35145 16.4672 8.35145H17.921C18.3585 8.35145 18.4573 8.57727 18.3585 8.88779C18.175 9.73465 16.3966 12.247 16.3966 12.247C16.2414 12.5011 16.1849 12.614 16.3966 12.8963C16.5519 13.108 17.06 13.5455 17.3987 13.9407C18.0198 14.6464 18.4996 15.2392 18.6267 15.6486C18.7678 16.0579 18.5561 16.2696 18.1468 16.2696Z"
            fill="currentColor"
          ></path>
        </svg>

        <svg
          color="gray"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M11.9995 10.4336C12.6827 10.4336 13.2392 9.87715 13.2392 9.1948C13.2392 8.51152 12.6827 7.95508 11.9995 7.95508C11.3162 7.95508 10.7598 8.51059 10.7598 9.1948C10.7598 9.87715 11.3162 10.4336 11.9995 10.4336Z"
            fill="currentColor"
          ></path>
          <path
            d="M11.9998 2.00012C6.47712 2.00012 1.99976 6.47749 1.99976 12.0001C1.99976 17.5228 6.47712 22.0001 11.9998 22.0001C17.5224 22.0001 21.9998 17.5228 21.9998 12.0001C21.9998 6.47749 17.5224 2.00012 11.9998 2.00012ZM11.9998 6.20066C13.6505 6.20066 14.993 7.54313 14.993 9.19483C14.993 10.8456 13.6505 12.1871 11.9998 12.1871C10.349 12.1871 9.00651 10.8447 9.00651 9.19483C9.00651 7.54313 10.349 6.20066 11.9998 6.20066ZM14.8837 16.3025C15.2272 16.6451 15.2272 17.1996 14.8837 17.5422C14.5412 17.8848 13.9866 17.8848 13.644 17.5422L11.9988 15.8979L10.3545 17.5422C10.1833 17.7135 9.95921 17.7987 9.73423 17.7987C9.51017 17.7987 9.28612 17.7135 9.11484 17.5422C8.77228 17.1996 8.77228 16.6441 9.11484 16.3025L10.7878 14.6286C10.1786 14.4897 9.59072 14.2481 9.05003 13.9083C8.63988 13.65 8.51675 13.1093 8.77506 12.6991C9.03244 12.289 9.57405 12.1649 9.9842 12.4232C11.21 13.1935 12.7886 13.1945 14.0144 12.4232C14.4245 12.1649 14.9661 12.2881 15.2235 12.6991C15.4818 13.1084 15.3578 13.65 14.9486 13.9083C14.4079 14.2481 13.82 14.4897 13.2108 14.6286L14.8837 16.3025Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <nav className=" mt-[45px]">
        <ul>
            <li className="text-[13.5px] text-[#606981] mb-[16px] font-[400] hover:text-btnVtb cursor-pointer">
                <Link href='https://www.vtb.ru/ir/disclosure/regulatory/'>
                Раскрытие информации профессиональным участником рынка ценных бумаг
                </Link>
                </li>
            <li className="text-[13.5px] text-[#606981] mb-[16px] font-[400] hover:text-btnVtb cursor-pointer">
                <Link href='https://www.e-disclosure.ru/portal/company.aspx?id=1210&attempt=1'>
                Раскрытие информации на сайте агентства «Интерфакс»
                </Link>
                </li>
            <li className="text-[13.5px] text-[#606981] mb-[16px] font-[400] hover:text-btnVtb cursor-pointer">
                <Link href='https://www.vtb.ru/ir/disclosure/regulation/#onlyTabId=max-stavka'>
                Информация о процентных ставках по договорам банковского вклада с физическими лицами
                </Link>
                </li>
            <li className="text-[13.5px] text-[#606981] mb-[16px] font-[400] hover:text-btnVtb cursor-pointer">
                <Link href='https://www.vtb.ru/finombudsman/'>
                Обеспечение защиты прав потребителей финансовых услуг
                </Link>
                </li>
            <li className="text-[13.5px] text-[#606981] mb-[16px] font-[400] hover:text-btnVtb cursor-pointer">
                <Link href='https://www.vtb.ru/tarify/chastnim-licam/#tabId=rules.accId=pko'>
                Правила комплексного обслуживания
                </Link>
                </li>
            <li className="text-[13.5px] text-[#606981] mb-[16px] font-[400] hover:text-btnVtb cursor-pointer">
                <Link href='https://www.vtb.ru/uvedomlenie/'>
                Обновление сведений в целях ПОД/ФТ
                </Link>
                </li>
            <li className="text-[13.5px] text-[#606981] mb-[16px] font-[400] hover:text-btnVtb cursor-pointer">
                <Link href='https://www.vtb.ru/media-files/vtb.ru/sitepages/ir/disclosure/documents/Polozhenie_ob_organizatsii_obrabotki_personalnykh_dannykh_vypiska.pdf'>
                Положение об организации обработки персональных данных в Банке ВТБ (ПАО) (выписка)
                </Link>
                </li>
        </ul>
        <div className="border-b-[1px] w-[1245px] ml-[-579px] text-lineVtb "></div>
       
      </nav>
    </section>
  );
}
