import React from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../features/auth/authActions';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import ButtonLoading from '../components/loading/buttonLoading';
// Define the type for form data
type FormDataType = {
    name: string;
    email: string;
    username: string;
    password: string;
};

const RegistrationPage: React.FC = () => {
    const [formData, setFormData] = React.useState<FormDataType>({
        name: "",
        email: "",
        username: "",
        password: "",
    });
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {navigateto, loading} = useAppSelector((state) => state.auth);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(registerUser(formData));
        navigate(navigateto);
    
    };

    return (
        <div className={'grid grid-cols-2 h-screen w-screen shadow-lg'}>
            <div className={"invalid:border-red-500 absolute border border-gray-400 top-1/2 left-1/2 transform  rounded-md -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col items-center justify-center p-5"}>
                <h1 className={"text-3xl font-bold"}>Create Account For Free</h1>
                <form className={"flex flex-col gap-2"} onSubmit={handleSubmit}>
                <label className={"font-bold mt-3"}>Full Name</label>
                    <input 
                        onChange={(e) => setFormData({...formData, name: e.target.value})} 
                        className={"py-1 bg-gray-100 outline-0 focus:bg-white px-2 border border-gray-400 font-Montserrat"} 
                        placeholder="Full Name" 
                        value={formData.name}
                    />
                    <label className={"font-bold mt-3"}>Email</label>
                    <input 
                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                        className={"py-1 bg-gray-100 outline-0 focus:bg-white px-2 border border-gray-400 font-Montserrat"} 
                        placeholder="Email" 
                        value={formData.email}
                    />
                    <label className={"font-bold mt-3"}>Username</label>
                    <input 
                        onChange={(e) => setFormData({...formData, username: e.target.value})} 
                        className={"py-1 bg-gray-100 outline-0 focus:bg-white px-2 border border-gray-400 font-Montserrat"} 
                        placeholder="Username" 
                        value={formData.username}
                    />
                    <label className={"font-bold mt-3"}>Password</label>
                    <input 
                        onChange={(e) => setFormData({...formData, password: e.target.value})} 
                        className={"py-1 bg-gray-100 outline-0 focus:bg-white px-2 border border-gray-400 font-Montserrat"} 
                        type="password" 
                        placeholder="Password" 
                        value={formData.password}
                    />
                    <button disabled={loading} className={`mt-3 grid place-items-center font-Montserrat p-2 ${loading?"bg-gray-600":"bg-gray-800"} text-teal-50`}>{loading?<ButtonLoading/>:<>Sign Up</>}</button>
                </form>
        
                <p>
                    Already have an account? <Link to={"/login"} className={"text-blue-600"}>Login</Link>
                </p>
            </div>
            <div className={"bg-sky-400"}></div>
            <div className={"bg-white"}></div>
        </div>
    );
};

export default RegistrationPage;