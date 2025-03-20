import React, { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard';
import Templates from '../../(data)/Templates';

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  airPrompt: string;
  form?: FORM[];
}

export interface FORM {
  name: string;
  field: string;
  label: string;


}

function TemplateListSection({userSearchInput}:any) {
  const[templateList, setTemplateList] = useState(Templates)
  useEffect(()=>{
    // console.log(userSearchInput)
    if(userSearchInput){
      const filterData = Templates.filter(item =>
        item.name.toLocaleLowerCase().includes(userSearchInput));
        setTemplateList(filterData)
    }
    else{
      setTemplateList(Templates)
    }


  },[userSearchInput])


  return (
    <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-10 cursor-pointer ">
          {templateList.map((item: TEMPLATE, index: number) => (
            <TemplateCard key={index} {...item} />
      ))}
    </div>
  );
}

export default TemplateListSection;
