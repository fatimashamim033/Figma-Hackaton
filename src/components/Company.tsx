import React from 'react'
import Image from 'next/image'

const CompanyLogoPage = () => {
  return (
    <div className='flex w-[1321px] justify-between min-h-screen'>
      <div>
      <Image
          src="/images/Logo(a).svg"
          alt="Logo.a"
          width={85}
          height={87}
        ></Image></div>
         <div><Image
          src="/images/Logo(b).svg"
          alt="Logo.b"
          width={107}
          height={109}
        ></Image></div>
        <div><Image
          src="/images/Logo (c).svg"
          alt="Logo.c"
          width={135}
          height={139}
        ></Image></div>
         <div><Image
          src="/images/Logo (d).svg"
          alt="Logo.d"
          width={63}
          height={65}
        ></Image></div>
        <div><Image
          src="/images/Logo (e).svg"
          alt="Logo.e"
          width={98}
          height={101}
        ></Image></div>
         <div><Image
          src="/images/Logo (f).svg"
          alt="Logo.f"
          width={98}
          height={101}
        ></Image></div>
         <div><Image
          src="/images/Logo (g).svg"
          alt="Logo.g"
          width={98}
          height={101}
        ></Image></div>
      
    </div>
  )
}

export default CompanyLogoPage
