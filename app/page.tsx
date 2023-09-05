import Image from "next/image";
import './globals.css'
import BtnApp from "./components/Content/BtnApp";
import ContenntFooter from "./components/Footer/ContentFooter";
import ContentFooterTwo from "./components/Footer/ContentFooterTwo";
import ContentFooterThree from "./components/Footer/ContentFooterThree";
import Link from "next/link";


export default function Home() {

  return (
    <>
    <main className="min-h-screen p-24 h-[1000px] bg-[#f3f7fa]">
      <div className="m-[-36px] mt-[60px] ml-[76px]">
        <p className="text-[12.5px] text-[#2e4598] cursor-pointer hover:text-btnVtb ">
          <Link href='https://www.vtb.ru/personal/online-servisy/'>
          /&nbsp; Онлайн-Сервисы &nbsp;/&nbsp;  
          </Link>
        <span className="text-[13px]
        text-[rgba(10,40,150,0.4)]"> Мобильное приложение ВТБ Онлайн</span></p>

<div className=" ">
        <h1 className="text-[50px] mt-[50px] ml-[-6.5px] tracking-[-3px] text-[#2F3441]">Приложение ВТБ Онлайн</h1>
        <p className="text-[17.3px] ml-[-6.5px]">Финансовая суперсила твоего смартфона</p>
      
      <div className="">
<BtnApp/>
     </div>
      </div>
      </div>
    </main>
      <footer className="bg-white">
        <ContenntFooter/>
        <ContentFooterTwo/>
        {/* <div className="border-b-[1px] w-[1180px] ml-[-1350px] text-lineVtb "></div> */}
        <div className="border-b-[1px] w-[1245px] ml-[180px] text-lineVtb "></div>
        <ContentFooterThree/>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </footer>
      </>
  );
}
