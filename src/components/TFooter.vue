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
                        <svg class="icon icon-tabler icon-tabler-brand-github mx-auto" fill="none" height="40"
                             stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                             viewBox="0 0 24 24"
                             width="40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                            <path
                                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
                        </svg>
                    </a>
                    <p class="leading-relaxed">Github</p>
                </div>
                <div class="px-8 py-2">
                    <a href="https://www.instagram.com/turingdiscordbot/">
                        <svg class="icon icon-tabler icon-tabler-brand-instagram mx-auto" fill="none"
                             height="40" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="1.5" viewBox="0 0 24 24"
                             width="40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                            <rect height="16" rx="4" width="16" x="4" y="4"/>
                            <circle cx="12" cy="12" r="3"/>
                            <line x1="16.5" x2="16.5" y1="7.5" y2="7.501"/>
                        </svg>
                    </a>
                    <p class="leading-relaxed">Instagram</p>
                </div>
                <div class="px-8 py-2">
                    <a href="https://discord.gg/TtdcMSuCK4">
                        <svg class="icon icon-tabler icon-tabler-brand-discord mx-auto" fill="none"
                             height="40" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="1.5" viewBox="0 0 24 24"
                             width="40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                            <circle cx="9" cy="12" r="1"/>
                            <circle cx="15" cy="12" r="1"/>
                            <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"/>
                            <path d="M7 16.5c3.5 1 6.5 1 10 0"/>
                            <path
                                d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"/>
                            <path
                                d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"/>
                        </svg>
                    </a>
                    <p class="leading-relaxed">Discord</p>
                </div>
            </div>
        </div>
    </section>
    <div class="p-2 w-full text-gray-400 bg-gray-900 body-font relative">
        <a href="https://discord.com/api/oauth2/authorize?client_id=840913496128487453&permissions=8&redirect_uri=https%3A%2F%2Fturingdiscordbot.netlify.app%2F&response_type=code&scope=bot%20identify"
            class="flex my-8 mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
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
