import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Picture of the Day',
};

export default async function HomePage() {
  const nasaAPIKey = process.env.NASA_API_KEY;
  const root = `https://api.nasa.gov/planetary/apod?api_key=${nasaAPIKey}`;

  console.log("Fetching data from:", root);

  const res = await fetch(root);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Error de la API de NASA:", errorText);

    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h1>Error al cargar la imagen</h1>
        <p>La API de NASA devolvió un error: {res.status} {res.statusText}</p>
        <pre>{errorText}</pre>
      </div>
    );
  }

  const data = await res.json();

  return (
    <div id="container">
      <h1 id="title">{data.title}</h1>
      <p id="description">{data.explanation}</p>
      <img id="image" src={data.url} alt={data.title} />
    </div>
  );
}