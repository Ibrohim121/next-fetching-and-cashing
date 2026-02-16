

async function getSimpleData() {
 
  const res = await fetch('https://api.escuelajs.co/api/v1/products/1', {
    next: { revalidate: 10 } 
  });

  return res.json();
}

export default async function Page() {
  const data = await getSimpleData();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div style={{ padding: '40px', backgroundColor: 'white', color: 'black', minHeight: '100vh' }}>
      <div style={{ border: '2px solid black', padding: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
          Fetching & Caching Amaliyoti
        </h1>

        <p><strong>Malumot nomi:</strong> {data.title}</p>
        <p><strong>Narxi:</strong> ${data.price}</p>
        
        <hr style={{ margin: '20px 0', border: '1px solid black' }} />

        <p style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
          <strong>Hozirgi vaqt:</strong> {currentTime} <br />
          <small>(Agar 10 soniyadan so`ng sahifani yangilasangiz va vaqt o`zgarmasa, demak kesh ishlayapti)</small>
        </p>
      </div>
    </div>
  );
}