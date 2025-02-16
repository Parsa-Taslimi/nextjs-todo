const fetchTodos = async () => {
   try {
         
      const res = await fetch('http://localhost:3000/api/todos')
      if (res.status !== 200) {
         throw new Error('Failed to fetch todos');
      }
      const data = await res.json();

      return await data;
      
   } catch (err) {
      throw new Error(err.message);
   }
}

export default fetchTodos;