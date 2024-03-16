import CompleteProfileForm from "../features/Authentication/CompleteProfileForm"

function CompleteProfile() {
  return (
     <div className="container xl:max-w-screen-xl ">
    <div className="shadow-2xl max-w-lg mx-auto mt-10 flex justify-center items-start  h-[500px] bg-gray-800  text-white rounded-lg">
        <CompleteProfileForm/>
    </div>
        </div>
  )
}

export default CompleteProfile