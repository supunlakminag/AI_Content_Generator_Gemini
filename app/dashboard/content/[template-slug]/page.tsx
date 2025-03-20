"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";


interface PROPS {
  params: Promise<{ "template-slug": string }>;
}

function CreateNewContent({ params }: PROPS) {
  const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE | undefined>();
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string>("");
  const {user} = useUser();


  // Unwrap the params promise
  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params; // Unwrap the params promise
      const templateSlug = resolvedParams["template-slug"];


      // Find the selected template based on the slug
      const template = Templates?.find((item) => item.slug === templateSlug);
      setSelectedTemplate(template);
    };

    getParams();
  }, [params]);

  const GenerateAIContent = async (formData: any) => {
      setLoading(true);

      const SelectedPrompt = selectedTemplate?.airPrompt;
      const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
      const result = await chatSession.sendMessage(FinalAIPrompt);

      setOutput(result?.response.text());
      await SaveInDb(formData,selectedTemplate?.slug,result?.response.text())
      setLoading(false);

  };

  const SaveInDb = async(formData: any, slug: any,aiResp:string)=>{
    const result = await db.insert(output).values({
      formData:formData,
      templateSlug:slug,
      aiResponse:aiResp,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD/MM/yyyy')

    });
    console.log(result)
  }


  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 py-7">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={GenerateAIContent}
          loading={loading}
        />

        {/* Output section */}
        <div className="">
          <OutputSection output={output} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
