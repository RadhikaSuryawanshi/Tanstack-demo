"use client";
import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import { Card, CardAction, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { ShineBorder } from "@/components/ui/shine-border";

export default function UserPage() {
  const { id } = useParams()
  const {data, isLoading, isError} = useQuery({
       queryKey:["Posts", id],
        queryFn:async () => {
         const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
          return res.data;
       },
    enabled : !!id,     
    }
  );
     if (isLoading) return <h1>Loading...</h1>
  return (
    <div className="container w-full p-2 flex flex-col  gap-8 ">
        <div>
      <h1 className=" text-xl md:lg:text-3xl font-boldonse text-center">Product Details</h1>
      </div>
      <div className="w-full flex justify-center items-center">
          <Card className="flex gap-2 w-[70%] md:lg:w-[60%] relative">
             <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}/>
          <CardTitle>{data.title}</CardTitle>
          <CardAction>Price: {data.price} </CardAction>
          <CardContent>category: {data.category}</CardContent>
          <CardDescription>Description:{data.description}</CardDescription>
          
          </Card>
          </div>
        
    </div>
  )
}