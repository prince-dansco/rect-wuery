// import { useQuery } from "@tanstack/react-query"
// import axios from "axios"

// function App() {
//   const {
//     isLoading,
//     isError,
//     data,
//     dataUpdatedAt,
//     refetch
//   } = useQuery({
//     queryKey: ['/users/1'],
//     queryFn: () =>
//       axios
//         .get('https://jsonplaceholder.typicode.com/users/1')
//         .then(res => res.data)
//   })

//   console.log(data, isLoading, isError, dataUpdatedAt, refetch);

//   if (isLoading) {
//     return <h1>Loading...</h1>
//   }
  
//   if (isError) {
//     return <h1>Error...</h1>
//   }

//   // Check if data exists before rendering
//   if (!data) {
//     return <h1>No data found</h1>
//   }

//   return (
//     <div>
//       {/* Since we're fetching a single user, don't use map */}
//       <div key={data.id}>
//         <h1>{data.name}</h1>
//         <p>{data.email}</p>
//         <p>Phone: {data.phone}</p>
//         <p>Website: {data.website}</p>
//       </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
import JSCourse from "./testing"

export default function App() {
  return (
    <div>
      <JSCourse  />
    </div>
  )
}
