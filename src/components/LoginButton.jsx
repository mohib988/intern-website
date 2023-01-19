import {GoogleLogin} from 'react-google-login'
export default function LoginButton() {
  const clientId="323861071961-imh6t53v0kmurp1uv5ush3404fqs3d51.apps.googleusercontent.com"
    
    const onSuccess=(res)=>{
console.log("login succes! ",res.profileObj)
    }
    const onFailure=(res)=>{
console.log("login succes! ",res)
    }
  return (
    <div className="signup" >
      <button  style={{width:"300px",border:"0px"}} >

     <GoogleLogin
    clientId={clientId}
    buttonText="Sign in  with google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
    
    />
    </button>
    </div>
  )
}
