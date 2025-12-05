"use client";

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { useProducts } from '@/lib/Product/Product.hook';
import Link from 'next/link';

import { useParams } from 'next/navigation';

export default function HomePage(){
  const {id} =useParams();
  const {data, isLoading, isError} = useProducts();


  if (isLoading) return <p>Loading....</p>

  return(
    <div className='w-full h-full p-1 grid grid-flow-row grid-cols-1 md:lg:grid-cols-4 gap-4'>
       
      {data?.map((p)=>(
        <div key={p.id}>
            <Link href={`/Product/${p.id}`}>
             
           <Card>
          <CardTitle>{p.title}</CardTitle>
          <CardDescription>Price: {p.price} <br />
          category: {p.category}</CardDescription>
          </Card>
         
            </Link> 
          </div>
      ))}
    
    </div>
  )
}