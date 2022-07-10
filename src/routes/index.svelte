<script>
    // SSR
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
            background: url("https://th.bing.com/th/id/R.fe693025db2081927fac88522d73f0d3?rik=V%2bEpClwf1cqldg&pid=ImgRaw&r=0");
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
    <footer class ="flex space-between p-20 bg-green-300 w-full">
        <ul class ="flex-none px-5">
            <li class ="border-b-4 font-medium font-Poppins">About us</li>
            <li>Mission</li>
            <li>FAQ</li>
            <li>Awards & Affiliations</li>
        </ul>
        <ul class =" px-5 w-1/3"></ul>
        <ul class ="flex-none px-10">
            <li class ="border-b-4 font-medium font-Poppins">How You Can Help</li>
            <li>Donate</li>
            <li>Volunteer</li>
            <li>Become A Sponsor</li>
            <li>Support Us While you Shop</li>
        </ul>
        <ul class =" px-5 w-1/3"></ul>
        <ul class ="flex-none px-10"> 
            <li class ="border-b-4 font-medium font-Poppins">Events</li>
            <li>News & Media</li>
            <li>Who we help</li>
            <li>Impact on the Community</li>
            <li>Contact Us</li>
        </ul>
        <ul class =" px-5 w-1/3"></ul>
        <ul class ="flex px-5 w-1/4 flex-col self-end">
            <li class="pt-2 inline-flex items-center border-b-4 border-solid rounded border-red-500 hover:border-red-900 duration-200 text-center self-end"><p class="justify-self-start px-1">Sitemap</p> <b class="justify-self-end  px-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>

            </li>
            <li class="self-end">Icon</li>
            <li class="self-end">Icon</li>
            <li class="self-end">Icon</li>
        </ul>
    </footer>
</main>