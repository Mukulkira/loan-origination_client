export const fetchData=async (company_code:string) => {
    const res = await fetch('http://127.0.0.1:8000/api/predict/', {
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
        "company_name":company_code,
    }),
    method:"POST",
  })
  const articles:ArticlesType = await res.json();
  return articles;
}