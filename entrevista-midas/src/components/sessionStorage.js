
export const setSession=(user)=>{
  sessionStorage.setItem('logged',JSON.stringify(user)); 
}

export const getSession = ()=>{
 let access = sessionStorage.getItem('logged') 
  access = JSON.parse(access)
  if(access && access.name && access.password){
    return true
  }
 return false
}


export const endSession = ()=>{
  sessionStorage.removeItem('logged')
}