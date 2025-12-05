import { useQuery } from "@tanstack/react-query";
import { Post } from "../Product.type";
import {  fetchPosts } from "./Product.function";

export function useProducts() {
  return useQuery({
   queryKey:["Posts"],
   queryFn: fetchPosts,
  });
}

// export function useProduct(id:string){
//   return useQuery({
//     queryKey:["Posts", id],
//     queryFn:()=> fetchPost(id),
//     enabled:!!id,
//   })
// }