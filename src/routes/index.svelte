<h1 class="text-xl font-semibold" on:click="{click}">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button class= "bg-blue-400 text-white py-2 px-3 m-2 rounded" >Button</button>

<svelte:head>
    <style>
        body{
            background-color: bisque;
        }
    </style>
</svelte:head>
<script>
function click(){
    console.log("click");
}
</script>