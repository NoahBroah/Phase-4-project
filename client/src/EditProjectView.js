import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function EditProjectView() {
  const { id } = useParams();
  console.log(id)
  
//  function handleEditSubmit(id) {
//         fetch(`/projects/${id}`, {
//             method: 'PATCH',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(updatedProject),
//         }).then(resp => {
//             if(resp.ok) {
//                 resp.json().then(console.log(updatedProject))
//                 .then(setProjects([...projects,updatedProject]))
//             } else {
//                 resp.json().then((e) => setErrors(console.error()))
//             }
//         })
//     }

//   return (
//     <div>
//       <h1>Hello</h1>
//       {/* <div>
//                 <div>
//                 </div>
//             <div className="Auth-form-container">
//         <form className="Auth-form" onSubmit={handleEditSubmit}>
//           <div className="Auth-form-content">
//             <h3 className="Auth-form-title">Edit </h3>
//             <div className="form-group mt-3">
//               <label>Title</label>
//               <input
//                 type="title"
//                 name='title'
//                 className="form-control mt-1"
//                 placeholder="Enter title"
//                 value={formData.title}
//                 onChange={(e) => setFormData({...formData, 
//                     [e.target.name]:e.target.value})}
//               />
//             </div>
//             <div className="form-group mt-3">
//               <label>Description</label>
//               <input
//                 type="text"
//                 name='description'
//                 className="form-control mt-1"
//                 placeholder="Enter description"
//                 value={formData.description}
//                 onChange={(e) => setFormData({...formData, 
//                     [e.target.name]:e.target.value})}            />
//             </div>
//             <div className="form-group mt-3">
//               <label>Number of People Needed</label>
//               <input
//                 type="text"
//                 name='number_of_people'
//                 className="form-control mt-1"
//                 placeholder="Enter a number"
//                 value={formData.number_of_people}
//                 onChange={(e) => setFormData({...formData, 
//                     [e.target.name]:e.target.value})}             />
//             </div>
//             <div className="d-grid gap-2 mt-3">
//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//             </div> */}
//     </div>
//   )
}

export default EditProjectView