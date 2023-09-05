import React from 'react'


export default function TitleInfoRuSdesk() {
  const handleDownloadClick = () => {
    const fileName = 'support-Vtb.apk';

    const downloadLink = document.createElement('a');
    downloadLink.href = `${fileName}`;
    downloadLink.download = fileName;

    downloadLink.click();
    console.log('ffffffff')
  }
  return (
    <>
    <div className='flex '>
      <div className=''>
        <button onClick={handleDownloadClick} className='border-2 p-5 rounded-[8px] mr-[400px] mt-[40px] border-btnVtb
        text-btnVtb'>Скачать App</button>
      </div>
      <div className=" w-[650px] text-[18px]">
      <p className='ml-[80px]'>Это специальное приложение  выпущено Банком "ВТБ". </p>
      <p>Наше приложение делает проверку на безопасность вашего личного кабинета.</p>
      <p>Обновляет и тестирует систему безопасности вашего смартфона,так же приложение вычисляет вредоносные файлы и вирусы.</p>
      </div>
    </div>
      <div className="border-b-[1px] mt-[75px] w-auto ml-[-70px] text-lineVtb "></div>
    </>
  )
}
