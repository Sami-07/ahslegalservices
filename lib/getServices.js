export async function getServices() {
      try {
        let data = await fetch(`/api/servicefetch`);
        let allServices = await data.json();
    
        return allServices;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    }