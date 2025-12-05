"use client";
import axios from "axios";
import { Post } from "../Product.type";

export async function fetchPosts(): Promise<Post[]> {
   const res = await axios.get("https://fakestoreapi.com/products");
   return res.data;
}

// export async function fetchPost(id:string){
//    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
//    return res.data;

// }