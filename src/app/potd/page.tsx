export default async function HomePage() {
    const nasaAPIKey = 'd5Kbh7xgEs3NULQTBiQ3jGsHDBkrrpfr88CIJWNO';
    const root = `https://api.nasa.gov/planetary/apod?api_key=${nasaAPIKey}`;
  
    const res = await fetch(root);
    const data = await res.json();
  
    return (
        <><title>Picture of the Day</title>
          <div id="container">
              <h1 id="title">{data.title}</h1>
              <p id="description">{data.explanation}</p>
              <img id="image" src={data.url} alt={data.title} />
          </div>
        </>
      
    );
  }
  
  