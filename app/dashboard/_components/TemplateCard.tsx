import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item:TEMPLATE) {
  return (

    <div className="p-5 shadow-md rounded-md border bg-white flex-col gap-3 cursor-pointer hover:scale-110 transition-all hover:bg-orange-300 hover:border-gray-300">
    <Link href={'/dashboard/content/'+ item.slug}>

      <Image src={item.icon} alt='icon' width={50} height={50}/>
      <h2 className="font-medium text-lg">{item.name}</h2>
      <p className="text-gray-500 line-clamp-6 ">{item.desc}</p>
    </Link>

    </div>
  )
}

export default TemplateCard
