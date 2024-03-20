export const basicFetch = async <returnType>(endpoint: string): Promise<returnType> => {

   const response = await fetch(endpoint, {
      next: { revalidate: 100 },
   });
   if (!response.ok) {
      throw new Error('Error');
   }
   const data = await response.json();
   return data.data;
}

export const basicPost = async <T>(endpoint: string, data?: any): Promise<T | undefined> => {
   try {
      const response = await fetch(endpoint, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
         next: { revalidate: 10 },
      });
      const responseData = await response.json();
      return responseData.data;
   } 
   catch (error) {
      console.log(error);
      
   }
  
   // if (!response.ok) {
   //    console.log('Error');

   // }

   // const responseData = await response.json();
   // return responseData.data;
}