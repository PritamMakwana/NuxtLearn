export default defineNuxtRouteMiddleware((to,from)=>{
console.log('Middleware auth.ts is running');

const isLoggedIn = true; // This should be replaced with actual authentication logic
// to is the destination
console.log('to', to);
// from is the source
console.log('from', from);
if(isLoggedIn){
    //redirect to the home page
    // return navigateTo(to.fullPath);
}
//redirecrt to a login page
// return navigateTo('/login');
});