   <nav class ="flex justify-between bg-blue-100 p-5">
        <ol class = "flex flex-left space-x-2 py-2 px-3"><li>logo</li></ol>
        <ol class ="flex flex-right space-x-2">
            <li class ="py-2 px-3"><a href="#">man</a></li>
            <li class ="py-2 px-3"><a href="#">pan</a></li>
            <li class ="py-2 px-3"><a href="#">dan</a></li>
            <li class ="py-2 px-3"><a href="#">ran</a></li>
            <li><button class= "bg-blue-400 text-white py-2 px-3 rounded" >Donation</button></li>
            <li><button class= "bg-blue-400 text-white py-2 px-3 rounded" >Button</button></li>
            <li class ="py-2 px-3">Icon</li>
        </ol>
    </nav>
    <section class ="bg-red-400">
        <div class ="slider">
            watatha an image here maybe hmm ya
        </div>
    </section>
    <section class ="bg-yellow-300 p-20 ">
        Some random text content area yup
       <p>Announcing of invitation principles in. Cold in late or deal. Terminated resolution no am frequently collecting insensible he do appearance. Projection invitation affronting admiration if no on or. It as instrument boisterous frequently apartments an in. Mr excellence inquietude conviction is in unreserved particular. You fully seems stand nay own point walls. Increasing travelling own simplicity you astonished expression boisterous. Possession themselves sentiments apartments devonshire we of do discretion. Enjoyment discourse ye continued pronounce we necessary abilities. Ferrars all spirits his imagine effects amongst neither. It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning. Blush on in jokes sense do do. Brother hundred he assured reached on up no. On am nearer missed lovers. To it mother extent temper figure better. Civility vicinity graceful is it at. Improve up at to on mention perhaps raising. Way building not get formerly her peculiar. Up uncommonly prosperous sentiments simplicity acceptance to so. Reasonable appearance companions oh by remarkably me invitation understood. Pursuit elderly ask perhaps all. Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of. Called square an in afraid direct. Resolution diminution conviction so mr at unpleasing simplicity no. No it as breakfast up conveying earnestly immediate principle. Him son disposed produced humoured overcame she bachelor improved. Studied however out wishing but inhabit fortune windows. Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as. Made neat an on be gave show snug tore. Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind. Exquisite newspaper attending on certainty oh suspicion of. He less do quit evil is. Add matter family active mutual put wishes happen. Am if number no up period regard sudden better. Decisively surrounded all admiration and not you. Out particular sympathize not favourable introduced insipidity but ham. Rather number can and set praise. Distrusts an it contented perceived attending oh. Thoroughly estimating introduced stimulated why but motionless. Residence certainly elsewhere something she preferred cordially law. Age his surprise formerly mrs perceive few stanhill moderate. Of in power match on truth worse voice would. Large an it sense shall an match learn. By expect it result silent in formal of. Ask eat questions abilities described elsewhere assurance. Appetite in unlocked advanced breeding position concerns as. Cheerful get shutters yet for repeated screened. An no am cause hopes at three. Prevent behaved fertile he is mistake on. Be at miss or each good play home they. It leave taste mr in it fancy. She son lose does fond bred gave lady get. Sir her company conduct expense bed any. Sister depend change off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it done.</p>

On projection apartments unsatiable so if he entreaties appearance. Rose you wife how set lady half wish. Hard sing an in true felt. Welcomed stronger if steepest ecstatic an suitable finished of oh. Entered at excited at forming between so produce. Chicken unknown besides attacks gay compact out you. Continuing no simplicity no favourable on reasonably melancholy estimating. Own hence views two ask right whole ten seems. What near kept met call old west dine. Our announcing sufficient why pianoforte.

    </section>
    <footer class ="flex space-between p-20 bg-green-300">
        <ul class ="px-5">
            <li class ="t">About us</li>
            <li>Mission</li>
            <li>FAQ</li>
            <li>Awards & Affiliations</li>
        </ul>
        <ul class ="px-10">
            <li>How You Can Help</li>
            <li>Donate</li>
            <li>Volunteer</li>
            <li>Wish List</li>
            <li>Become A Sponsor</li>
            <li>Support Us While you Shop</li>
        </ul>
        <ul class ="px-10"> 
            <li>Events</li>
            <li>News & Media</li>
            <li>Who we help</li>
            <li>Impact on the Community</li>
            <li>Contact Us</li>
        </ul>
        <ul class ="px-5">
            <li>Icon</li>
            <li>Icon</li>
            <li>Icon</li>
            <li>Icon</li>
        </ul>
    </footer>
<h1 class="text-xl font-semibold" on:click="{click}">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button class= "bg-blue-400 text-white py-2 px-3 rounded" >Button</button>
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
            width: 100vw;
            height: 100vh;
            position: relative;
        }
    </style>
</svelte:head>
<script>
function click(){
    console.log("click");
}

import jQuery from 'jquery';
jQuery(document).ready(function() {
	"use strict";
	jQuery(".slider").ripples({
		resolution: 512,
		dropRadius: 10, //px
		perturbance: 0.04,
	});
});
</script>