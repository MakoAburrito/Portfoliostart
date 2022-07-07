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
        <div class ="slider">
           <p>
            watatha an image here maybe hmm ya
           </p> 
        </div>
    </section>
    <section class ="bg-yellow-300 p-20 ">
        Some random text content area yup
       <p>Announcing of invitation principles in. Cold in late or deal. Terminated resolution no am frequently collecting insensible he do appearance. Projection invitation affronting admiration if no on or. It as instrument boisterous frequently apartments an in. Mr excellence inquietude conviction is in unreserved particular. You fully seems stand nay own point walls. Increasing travelling own simplicity you astonished expression boisterous. Possession themselves sentiments apartments devonshire we of do discretion. Enjoyment discourse ye continued pronounce we necessary abilities. Ferrars all spirits his imagine effects amongst neither. It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning. Blush on in jokes sense do do. Brother hundred he assured reached on up no. On am nearer missed lovers. To it mother extent temper figure better. Civility vicinity graceful is it at. Improve up at to on mention perhaps raising. Way building not get formerly her peculiar. Up uncommonly prosperous sentiments simplicity acceptance to so. Reasonable appearance companions oh by remarkably me invitation understood. Pursuit elderly ask perhaps all. Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of. Called square an in afraid direct. Resolution diminution conviction so mr at unpleasing simplicity no. No it as breakfast up conveying earnestly immediate principle. Him son disposed produced humoured overcame she bachelor improved. Studied however out wishing but inhabit fortune windows. Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as. Made neat an on be gave show snug tore. Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind. Exquisite newspaper attending on certainty oh suspicion of. He less do quit evil is. Add matter family active mutual put wishes happen. Am if number no up period regard sudden better. Decisively surrounded all admiration and not you. Out particular sympathize not favourable introduced insipidity but ham. Rather number can and set praise. Distrusts an it contented perceived attending oh. Thoroughly estimating introduced stimulated why but motionless. Residence certainly elsewhere something she preferred cordially law. Age his surprise formerly mrs perceive few stanhill moderate. Of in power match on truth worse voice would. Large an it sense shall an match learn. By expect it result silent in formal of. Ask eat questions abilities described elsewhere assurance. Appetite in unlocked advanced breeding position concerns as. Cheerful get shutters yet for repeated screened. An no am cause hopes at three. Prevent behaved fertile he is mistake on. Be at miss or each good play home they. It leave taste mr in it fancy. She son lose does fond bred gave lady get. Sir her company conduct expense bed any. Sister depend change off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it done.</p>

On projection apartments unsatiable so if he entreaties appearance. Rose you wife how set lady half wish. Hard sing an in true felt. Welcomed stronger if steepest ecstatic an suitable finished of oh. Entered at excited at forming between so produce. Chicken unknown besides attacks gay compact out you. Continuing no simplicity no favourable on reasonably melancholy estimating. Own hence views two ask right whole ten seems. What near kept met call old west dine. Our announcing sufficient why pianoforte.

    </section>
    <footer class ="flex p-20 bg-green-300 w-full">
        <ul class ="px-5 w-1/4 ">
            <li class =" font-Poppins bg-primary">About us</li>
            <li>Mission</li>
            <li>FAQ</li>
            <li>Awards & Affiliations</li>
        </ul>
        <ul class ="px-10 w-1/4 ">
            <li>How You Can Help</li>
            <li>Donate</li>
            <li>Volunteer</li>
            <li>Wish List</li>
            <li>Become A Sponsor</li>
            <li>Support Us While you Shop</li>
        </ul>
        <ul class ="px-10 w-1/4 "> 
            <li>Events</li>
            <li>News & Media</li>
            <li>Who we help</li>
            <li>Impact on the Community</li>
            <li>Contact Us</li>
        </ul>
        <ul class ="flex px-5 w-1/4 flex-col">
       
            <li class="pt-2 inline-flex items-center border-b-4 border-solid rounded border-red-500 hover:border-red-900 duration-200 text-center"><p class="justify-self-start px-1">Sitemap</p> <b class="justify-self-end  px-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>

            </b></li>
            <li class="py-2 self-end">Icon</li>
            <li class="py-2 self-end">Icon</li>
            <li class="py-2 self-end">Icon</li>
        </ul>
    </footer>
</main>