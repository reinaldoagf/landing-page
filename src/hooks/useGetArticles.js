import { useEffect, useState } from "react";
import axios from 'axios';
const useGetArticles = (API) =>{
    const [articles, setArticles] = useState([]);
	useEffect(()=>{
		async function getData() {
			const response = await axios(API)
			setArticles(response.data);
		}
		getData();
	},[])
    return articles;
}
export default useGetArticles;