describe('Pruebas de API - NASA APOD', () => {
  it('debería obtener la Foto del Día (APOD) correctamente', () => {
    
    // 1. Lee la clave 
    const nasaAPIKey = Cypress.env('NASA_API_KEY');

    // 2. Verifica que la clave se cargó 
    if (!nasaAPIKey) {
      throw new Error("Falta la variable de entorno CYPRESS_NASA_API_KEY");
    }

    const root = `https://api.nasa.gov/planetary/apod?api_key=${nasaAPIKey}`;

    // 3. Hacer la solicitud a la API
    cy.request('GET', root).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title');
    });
  });
});