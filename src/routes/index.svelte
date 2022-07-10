<script>
    // SSR
// Image From https://th.bing.com/th/id/R.fe693025db2081927fac88522d73f0d3?rik=V%2bEpClwf1cqldg&pid=ImgRaw&r=0


function click(){
    console.log("click");
}
import { onMount } from 'svelte';

console.log("UnMounted")
onMount(() => {
 
});
let customClass = "rounded justify-self-end w-full customClass";
</script>
<svelte:head>
    <style>
            *{
        font-family:
    }
    body{
        background-color: bisque;
    }
        .slider{
            background: url("./images/photo.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            height: 100vh;
            position: relative;
        }
        .slider:before{
            content:'';
            position:absolute;
            background: linear-gradient(to top, #23252B, transparent);
            width: 100%;
            height: 80px;
            bottom: 0;
        }

p{
    font-family: 'Poppins', sans-serif; font-weight: 300; font-size: auto; line-height: 18.5px;
}
.customClass{
    background-color:red; font-weight:bold;
}
.icons-after:after{
    content: '🔗';
}

    </style>
</svelte:head>
<main>

    <nav class ="flex justify-between bg-blue-100 p-5 ">
        <ol class = "flex flex-left space-x-2 py-2 px-3 items-center"><li>logo</li></ol>
        <ol class ="flex flex-right space-x-2 items-center">
            <li class ="py-2 px-3"><a href="#">man</a></li>
            <li class ="py-2 px-3"><a href="#">pan</a></li>
            <li class ="py-2 px-3"><a href="#">dan</a></li>
            <li class ="py-2 px-3"><a href="#">ran</a></li>
            <li><button class= "bg-blue-400 text-white py-2 px-3 rounded" >Donation</button></li>
            <li><button class= "bg-blue-400 text-white py-2 px-3 rounded" >Button</button></li>
            <li class =" bg-blue-600 hover:bg-blue-800 duration-200 m-3 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8  text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
            </li>
        </ol>
    </nav>
    <section class ="bg-red-400">
        <div class ="slider bg-gradient-to-t">
           <p>
            watatha an image here maybe hmm ya
           </p> 
        </div>
    </section>
    <section class ="bg-yellow-300 p-20 ">
<p>On projection apartments unsatiable so if he entreaties appearance. Rose you wife how set lady half wish. Hard sing an in true felt. Welcomed stronger if steepest ecstatic an suitable finished of oh. Entered at excited at forming between so produce. Chicken unknown besides attacks gay compact out you. Continuing no simplicity no favourable on reasonably melancholy estimating. Own hence views two ask right whole ten seems. What near kept met call old west dine. Our announcing sufficient why pianoforte.</p>
</section>
    <footer class ="md:grid md:grid-cols-4 md:gap-4  space-between py-20 px-10 bg-green-300 w-full 2xl:flex">
        <div class ="  w-1/4 bg-blue-500">
            <a href="#" class ="border-b-4 font-medium font-Poppins w-full inline-block">Events</a>
            <p>
                <a href="#" >News & Media</a>
            </p>
            <p>

                <a href="#" class="break-after-row" >Who we help</a>
            </p>
            
            <p>
                <a href="#" class="break-after-row" >Impact on the Community</a>
            </p>
            <p>
                <a href="#" class="break-after-row" >Contact Us</a>
            </p>
        </div>
       
        <div class ="  w-1/4">
            <a href="#" class ="border-b-4 font-medium font-Poppins w-full inline-block">Events</a>
            <p>
                <a href="#" >News & Media</a>
            </p>
            <p>

                <a href="#" class="break-after-row" >Who we help</a>
            </p>
            
            <p>
                <a href="#" class="break-after-row" >Impact on the Community</a>
            </p>
            <p>
                <a href="#" class="break-after-row" >Contact Us</a>
            </p>
        </div>
        
        <div class ="  w-1/4  break-after-auto"> 
            <a href="#" class ="border-b-4 font-medium font-Poppins w-full inline-block">Events</a>
            <p>
                <a href="#" >News & Media</a>
            </p>
            <p>

                <a href="#" class="break-after-row" >Who we help</a>
            </p>
            
            <p>
                <a href="#" class="break-after-row" >Impact on the Community</a>
            </p>
            <p>
                <a href="#" class="break-after-row" >Contact Us</a>
            </p>
        </div>
        
        <div class =" md: lg:w-1/4  "> 
            <a href="#" class ="border-b-4 font-medium font-Poppins w-full inline-block">Events</a>
            <p>
                <a href="#" >News & Media</a>
            </p>
            <p>

                <a href="#" class="block" >Who we help</a>
            </p>
            
            <p>
                <a href="#" class="block" >Impact on the Community</a>
            </p>
            <p>
                <a href="#" class="break-after-row" >Contact Us</a>
            </p>

        </div>
    </footer>



<section class="py-10 px-5 bg-slate-700 text-white">

 <div class="block">

<div class="footer-example flex">

<div class=" w-1/3"  hidden>
    <div class="inline-flex bg-white rounded-full py-5 px-5">
        <h3 class=" self-center  text-black font-bold text-2xl">
          News.ly
        </h3>
        <svg xmlns="http://www.w3.org/2000/svg" class=" ml-1 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="blue" stroke-width="1.25">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
    </div>
  
  

   
 

</div>

<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center sm:w-full md:w-2/3">

    

<div>
<p class="footer-header font-semibold pb-2 underline">
Category 1
</p>
<a href="http://" class="icons-after">
Link To Page
</a>
<a href="http://" class="icons-after2 inline-flex self-center hover:underline">
    Link To Page
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    </span>
</a>
    

</div>
<div> 2</div>
<div> 3</div>
<div> 4</div>

</div>

</div>
  

<div class=" w-full md:block lg:hidden mx-auto justify-center items-center place-self-center">
    <div class="inline-flex bg-white rounded-full py-5 px-5">
        <h3 class=" self-center  text-black font-bold text-2xl">
          News.ly
        </h3>
        <svg xmlns="http://www.w3.org/2000/svg" class=" ml-1 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="blue" stroke-width="1.25">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
    </div>
</div>
  




</section>


</main>