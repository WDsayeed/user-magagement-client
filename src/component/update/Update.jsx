import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {

        const userUpdate = useLoaderData()
        const {name, email, phone, _id} = userUpdate

        const handleUpdateUser = event=>{
                event.preventDefault()
                const form= event.target 
                const name = form.name.value 
                const email = form.email.value 
                const phone = form.phone.value 

                const updateUser = {name, email, phone}

                fetch(`http://localhost:5000/usersUpdate/${_id}`,{
                        method:'PUT',
                        headers:{
                                'content-type': 'application/json'
                        },
                        body:JSON.stringify(updateUser)
                })
                .then(res=> res.json())
                .then(data=>{
                        console.log(data)
                        if(data.modifiedCount > 0){
                                Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'User Updated',
                                        showConfirmButton: false,
                                        timer: 1500
                                      })
                        }
                })
        }
        return (
              <>
              <h1 className="text-4xl text-center my-10">Update a User</h1>
                <form onSubmit={handleUpdateUser}>
                <div className="flex gap-10">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-medium">Name:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="your name"
                      name="name"
                      defaultValue={name}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-medium">Email:</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email address"
                      name="email"
                      defaultValue={email}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium">Phone No:</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="phone number"
                    defaultValue={phone}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
               <div className="text-center w-full mt-10">
               <button className="btn btn-wide  bg-[#688dc1] text-white hover:bg-[#070A52]">Update</button>
               </div>
              </form>
              </>
        );
};

export default Update;