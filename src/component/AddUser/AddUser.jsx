import Swal from "sweetalert2";

const AddUser = () => {

        const handleAddUser = event =>{
                event.preventDefault()
                const form = event.target 
                const name = form.name.value 
                const email = form.email.value 
                const phone = form.phone.value 
                console.log(name, email, phone)

                const users = { name, email, phone}

                fetch('http://localhost:5000/users',{
                        method:'POST',
                        headers:{
                                'content-type': 'application/json'
                        },
                        body:JSON.stringify(users)
                })
                .then(res=> res.json())
                .then(data=>{
                        console.log(data)
                        if(data.insertedId){
                          form.reset()
                          Swal.fire({
                                  position: 'top-center',
                                  icon: 'success',
                                  title: 'User has been Added',
                                  showConfirmButton: false,
                                  timer: 1500
                                })
                  }
                })
        }
  return (
    <>
    <h1 className="text-4xl text-center my-10">Add a User</h1>
    <form onSubmit={handleAddUser}>
      <div className="flex gap-10">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-medium">Name:</span>
          </label>
          <input
            type="text"
            placeholder="your name"
            name="name"
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
          className="input input-bordered w-full"
          required
        />
      </div>
     <div className="text-center w-full my-8">
     <button className="btn btn-wide  bg-[#688dc1] text-white hover:bg-[#070A52]">Add</button>
     </div>
    </form>
    </>
  );
};

export default AddUser;
