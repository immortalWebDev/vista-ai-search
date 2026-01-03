export async function searchPhotosPix(query) {

  console.log("pixabay req sent..");
  
  let API = import.meta.env.VITE_PIXABAY_KEY
  const params = new URLSearchParams({
    key: API,
    q: query,
  });

  const res = await fetch(`https://pixabay.com/api/?${params}`);

  console.log(res.status);
  if (res.status === 429) {
    throw new Error("Too many requests..Try after an hour");
  }

  let data = await res.json();

  return data.hits;
}
