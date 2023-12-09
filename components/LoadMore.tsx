"use client"
import { fetchanime } from "@/app/action";
import Image from "next/image";
import { data } from "@/app/_data";
import AnimeCard from "./AnimeCard";
import { useEffect, useState } from "react";
import {useInView} from 'react-intersection-observer'
import { AnimeProp } from "./AnimeCard";
function LoadMore() {
  let page=2;
  const {ref,inView}=useInView();
  const [data,setdata]=useState<AnimeProp[]>([])
  useEffect(()=>{
    if(inView){
      fetchanime(page).then((res)=>setdata([...data,...res]))
      page++;
    }
    }
    ,[inView,])
  return (
    <>
     <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index:number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
