export async function searchPhotosPix(query, page = 1, per_page = 4) {

  console.log("pixabay req sent..");
  
  let API = import.meta.env.VITE_PIXABAY_KEY
  const params = new URLSearchParams({
    key: API,
    q: query,
    page,
    per_page,
    image_type: "photo",
    safesearch: "true",
  });
  //   console.log(params);

  const res = await fetch(`https://pixabay.com/api/?${params}`);

//   console.log(res.status);
  if (res.status === 429) {
    throw new Error("Too many requests..Try after an hour");
  }
  if (!res.ok) throw new Error("Pixabay error");

  let data = await res.json();
//   console.log(data.hits);
  return data.hits;
}
