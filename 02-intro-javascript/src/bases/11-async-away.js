//Asynd-await

const getImagen = async () => {
  try {
    const apiKey = "SGc2a3eLgu8NpCom6lIsmFWvbrmVAEQB";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    //manejo de error
    console.error(error)
  }
};

getImagen();
