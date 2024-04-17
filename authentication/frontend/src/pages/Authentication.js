import AuthForm from '../components/AuthForm';
import {json} from 'react-router-dom'
function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;


export async function action({request}){
const searchParams = new URL(request.url).searchParams;

const mode = searchParams.get('mode') || 'signup';

if(mode !== 'login' && mode!=='signup'){
  throw json({message:'unsupported mode'},{status:422})
}

  const  data = await request.formData();
  const authData = {
    email:data.get('email'),
    password:data.get('password'),
  };
  const response = await fetch('http://localhost:8080/'+mode,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(authData)
  });
  
}

