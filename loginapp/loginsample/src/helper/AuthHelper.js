export const authHeader = () => {
   let user = localStorage.getItem('user');

   if(user && user.authData){
      return {'Authorization': 'Basic' + user.authData};
   }
   return {};
   
   

}