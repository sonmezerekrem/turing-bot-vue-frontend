<template>
    <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-16 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Have An Idea or Problem</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">If you have an idea or a problem please contact
                    us. We will return you as soon as possible.</p>
            </div>
            <div
                class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">

                <div class="relative sm:mb-0 flex-grow w-full">
                    <label class="leading-7 text-sm text-gray-400" for="email">Email</label>
                    <input id="email"
                           v-model="footerEmail"
                           class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                           name="email"
                           type="email">
                </div>
                <div class="relative sm:mb-0 flex-grow w-full">
                    <label class="leading-7 text-sm text-gray-400" for="full-name">Your Message</label>
                    <input id="message"
                           v-model="footerMessage"
                           class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                           name="message"
                           type="text">
                </div>
                <button
                    class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    Send
                </button>
            </div>
        </div>
    </section>
    <section class="text-gray-400 bg-gray-900 body-font mx-auto">
        <div class="container px-5 py-4 mx-auto sm:w-full md:w-8/12 max-w-lg">
            <div class="flex flex-wrap -m-4 text-center justify-between mx-auto">
                <div class="px-8 py-2">
                    <a href="https://github.com/turing-discord-bot">
                        <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z" fill="rgba(255,255,255,1)"/></svg>   </a>
                    <p class="leading-relaxed">Github</p>
                </div>
                <div class="px-8 py-2">
                    <a href="https://www.instagram.com/turingdiscordbot/">
                        <svg class="mx-auto" height="36" viewBox="0 0 24 24" width="36"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
                                fill="rgba(255,255,255,1)"/>
                        </svg>
                    </a>
                    <p class="leading-relaxed">Instagram</p>
                </div>
                <div class="px-8 py-2">
                    <a href="https://discord.gg/TtdcMSuCK4">
                        <svg class="mx-auto" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M13.914 14.58a8.998 8.998 0 0 1-.484.104 7.06 7.06 0 0 1-2.664-.01c-.154-.03-.372-.083-.653-.158l-.921 1.197c-2.273-.073-3.137-1.596-3.137-1.596 0-3.381 1.481-6.122 1.481-6.122 1.481-1.133 2.89-1.102 2.89-1.102l.403.525a1.12 1.12 0 0 1 .112-.01 8.527 8.527 0 0 1 2.314.01l.442-.525s1.41-.031 2.89 1.103c0 0 1.482 2.74 1.482 6.121 0 0-.875 1.522-3.148 1.596l-1.007-1.134zM10.076 11C9.475 11 9 11.45 9 12s.485 1 1.076 1c.6 0 1.075-.45 1.075-1 .01-.55-.474-1-1.075-1zm3.848 0c-.6 0-1.075.45-1.075 1s.485 1 1.075 1c.601 0 1.076-.45 1.076-1s-.475-1-1.076-1zM21 23l-4.99-5H19V4H5v14h11.003l.57 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v19z"
                                fill="rgba(255,255,255,1)"/>
                        </svg>
                    </a>
                    <p class="leading-relaxed">Discord</p>
                </div>
            </div>
        </div>
    </section>
    <div class="p-2 w-full text-gray-400 bg-gray-900 body-font relative">
        <a class="flex justify-center my-8 mx-auto text-white bg-blue-500 max-w-sm  text-center border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
           href="https://discord.com/api/oauth2/authorize?client_id=840913496128487453&permissions=8&redirect_uri=https%3A%2F%2Fturingdiscordbot.netlify.app%2F&response_type=code&scope=bot%20identify">
            Add to Discord
        </a>
    </div>
    <footer class="text-gray-400 bg-gray-900 border-t border-gray-800 body-font text-center">
        <div class="container px-5 py-8 mx-auto flex sm:flex-row flex-col justify-center text-center">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-white" href="/">
                <span class="ml-3 text-xl">Turing Discord Bot</span>
            </a>
            <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">©
                2021 Turing Discord Bot
                <a class="text-gray-500 ml-1" href="https://github.com/turing-discord-bot" rel="noopener noreferrer"
                   target="_blank">@turingbot</a>
            </p>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'TFooter',
    data: function () {
        return {
            footerEmail: "",
            footerMessage: "",
        }
    }
}
</script>

<style scoped>

</style>
