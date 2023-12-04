<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <script defer src="https://unpkg.com/alpinejs@3.2.3/dist/cdn.min.js"></script>
    <link rel="stylesheet" href="css/utilities.css">
    <style>

    </style>
</head>

<body>
    <?php include('includes/header.php') ?>

    <article x-data="slider" class="relative w-full flex flex-shrink-0 overflow-hidden shadow-2xl">
        <div class="rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10">
            <span x-text="currentIndex"></span>/
            <span x-text="images.length"></span>
        </div>

        <template x-for="(image, index) in images">
            <figure class="h-96" x-show="currentIndex == index + 1" x-transition:enter="transition transform duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition transform duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
                <img :src="image" alt="Image" class="absolute inset-0 z-10 h-full w-full object-cover opacity-90" />
                <figcaption class="absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-strong text-sm text-center tracking-widest leading-snug bg-gray-300 bg-opacity-25">
                    Welcome to Pashupati
                </figcaption>
            </figure>
        </template>

        <button @click="back()" class="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
            <svg class=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7">
                </path>
            </svg>
        </button>

        <button @click="next()" class="nextslide absolute right-14 top-1/2 translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
            <svg class=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
            </svg>
        </button>
    </article>

    <h1 class="mt-8 ml-5 mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">Shree Pashupati Technical Secondary School</h1>
    <p class="ml-5 mr-5 text-lg font-normal text-gray-500 lg:text-xxx dark:text-gray-400">We embrace students from diverse faiths, races, and backgrounds, offering enhanced facilities to cater to their educational requirements. As a dynamic and inspiring educational institution, our community school serves as a model for the broader learning community. We uphold the highest standards of education across various specializations, providing excellent teachers, quality support materials, and a welcoming atmosphere to foster skill development in students. Our educational reach extends from nursery to grade 12, including Computer Engineering courses for classes 9 to 12.</p>

    <h1 class="mt-8 ml-5 mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">Why Pashupati ?</h1>
    <p class="ml-5 mr-5 text-lg font-normal text-gray-500 lg:text-xxx dark:text-gray-400">Numerous compelling reasons make us the ideal choice as your educators at Pashupati. Here, we provide:</p>


    <div class="container mx-auto px-20">

        <div style='background-color:rgb(255, 255, 255)'>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20" style="cursor: auto; padding-top: 10px;">

                <div class="p-6 bg-gray-100 rounded-lg">

                    <div class="mb-5">

                        <svg class="hi-outline hi-template inline-block w-12 h-12 text-indigo-500" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                        </svg>

                    </div>

                    <h3 class="text-lg font-bold mb-2">
                        Highly Qualified Teachers
                    </h3>

                    <p class="text-sm leading-6 text-gray-600">

                        A highly qualified teacher is integral to our education system, making learning enjoyable and engaging. With innovative teaching techniques, our educators ensure swift and effective learning. Choose our team for an enlightening and tailored educational experience that enhances your learning journey.
                    </p>

                </div>

                <div class="p-6 bg-gray-100 rounded-lg">

                    <div class="mb-5">

                        <svg class="hi-outline hi-cube inline-block w-12 h-12 text-indigo-500" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                        </svg>

                    </div>

                    <h3 class="text-lg font-bold mb-2">
                        Peaceful Environment
                    </h3>

                    <p class="text-sm leading-6 text-gray-600">

                        Your study environment significantly influences learning effectiveness. A tidy, tranquil space aids information absorption. Our serene and clean setting promotes efficient studying, ensuring a positive impact on your academic focus and productivity.
                    </p>

                </div>

                <div class="p-6 bg-gray-100 rounded-lg" style="cursor: auto;">

                    <div class="mb-5" style="cursor: auto;">

                        <svg class="hi-outline hi-cog inline-block w-12 h-12 text-indigo-500" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>

                    </div>

                    <h3 class="text-lg font-bold mb-2">
                        Digital Learning
                    </h3>

                    <p class="text-sm leading-6 text-gray-600">

                        Digital learning leverages technologies such as multimedia and the internet, fostering comprehensive student development and enhancing societal digital literacy. Our offerings include audio-visual learning experiences and computer labs equipped with high-speed internet, enriching the educational journey.
                    </p>

                </div>

                <div class="p-6 bg-gray-100 rounded-lg">

                    <div class="mb-5">

                        <svg class="hi-outline hi-sparkles inline-block w-12 h-12 text-indigo-500" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                        </svg>

                    </div>

                    <h3 class="text-lg font-bold mb-2">
                        Facilited Development Enviroment
                    </h3>

                    <p class="text-sm leading-6 text-gray-600">

                        Discover an educational haven where excellence meets innovation! Our school provides a vibrant environment that fuels curiosity and sparks creativity. With qualified teachers, state-of-the-art facilities, and a focus on holistic development, we pave the way for a bright future. Enroll today for an inspiring educational journey!
                    </p>

                </div>

            </div>
        </div>
    </div>
    <h1 class="ml-5 mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">What student says about us ?</h1>
    <p class="ml-5 mr-5 text-lg font-normal text-gray-500 lg:text-xxx dark:text-gray-400">The school setting is highly invigorating, characterized by openness and brightness, and our staff members are truly exceptional. Our time spent in school is enjoyable, thanks to the presence of good-natured and approachable teachers. Within the school, we delve into a variety of topics that pique our interest and are relevant to our future endeavors. The presence of supportive teachers is instrumental in helping us comprehend and navigate challenges seamlessly. Additionally, the school frequently organizes extracurricular activities, contributing to the development of our interpersonal skills and more.</p>

    <h1 class="mt-8 ml-5 mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">Computer Engineering</h1>
    <p class="ml-5 mr-5 text-lg font-normal text-gray-500 lg:text-xxx dark:text-gray-400">The inaugural batch of Computer Engineering, commencing from class 9, was initiated in the year 2078 B.S. Presently, we conduct regular engineering classes spanning from class 9 to class 11. Computer engineering, situated at the intersection of electrical engineering and computer science, amalgamates various facets of both disciplines essential for the development of computer hardware and software. This field not only employs techniques and principles from electrical engineering and computer science but also encompasses domains like artificial intelligence (AI), robotics, computer networks, computer architecture, and operating systems.</p>

    <?php include('includes/footer.php') ?>
    <script src="javaScript/indexjs.js"></script>
</body>

</html>