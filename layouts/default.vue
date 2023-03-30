<template>
    <div>
        <header class="main-header">

<!-- <div class="main-header__top-bar">
    <div class="container ">


        <div class="flex-container">
            <ul class="flex-container">
                <li>Call Us Today For More Information: <a href="tel:03301 746 700">03301 746 700</a></li>
                <li style="font-weight: bold">Get ready for Winter – Order a new boiler with us before 3pm and we’ll
                    be out to fit the next day.
                </li>
            </ul>
        </div>
    </div>
</div> -->


<div class="header-inner p-6  bg-white relative">
    <div  class="container mr-auto ml-auto  pl-20  pr-20 w-full">
        <div class="flex-container flex flex-row items-center  justify-between">
            <div class="header-inner__logo-holder">
                <a href="">
                    <img class ="entered lazyloaded" src="https://letsheat.co.uk/wp-content/uploads/2022/08/Group-25.png" alt="" title="Group-25" data-lazy-src="https://letsheat.co.uk/wp-content/uploads/2022/08/Group-25.png" data-ll-status="loaded" >
                   
                </a>
            </div>
            <div class="header-inner__navigation flex-container">


                <!-- nav-button-wrap end-->
                <!--  navigation flex-container -->
                
                <ul class="advice">
                    <li>Support &amp; More</li>
                    
                </ul>
            </div>


        </div>

    </div>
</div>


</header>
        


        <!-- <header>
            <nav class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
                data-te-navbar-ref>
                <div class="flex w-full flex-wrap items-center justify-between px-6">
                
                    <div
                        class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContentY"
                        data-te-collapse-item>
                        <ul
                        class="mr-auto flex flex-col lg:flex-row"
                        data-te-navbar-nav-ref>
                        
                        <li data-te-nav-item-ref>
                            <NuxtLink
                            class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                            href="#!"
                            data-te-nav-link-ref
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            to="/">Home
                            </NuxtLink >        
                        </li>
                        <li data-te-nav-item-ref>
                            <NuxtLink
                            class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                            href="#!"
                            data-te-nav-link-ref
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            to="/about">About
                            </NuxtLink >        
                        </li>
                        <li data-te-nav-item-ref>
                            <NuxtLink
                            class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                            href="#!"
                            data-te-nav-link-ref
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            to="/products">Products
                            </NuxtLink >        
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header> -->
        <!-- output page content -->
        <div class ="container mx-auto p-4">
            <slot></slot>
        </div>
        <!-- <footer class="bg-neutral-900 text-center text-white fixed bottom-0">
  <div class="container px-6 pt-6">
    
   

    <div class="mb-6">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
        distinctio earum repellat quaerat voluptatibus placeat nam,
        commodi optio pariatur est quia magnam eum harum corrupti dicta,
        aliquam sequi voluptate quas.
      </p>
    </div>

    
  </div>

  <div
    class="p-4 text-center"
    style="background-color: rgba(0, 0, 0, 0.2)">
    © 2023 Copyright:
    <a class="text-white" href="https://tailwind-elements.com/"
      >Tailwind Elements</a
    >
  </div>
</footer> -->
    </div>
</template>
<style scoped>
.router-link-exact-active   {
    color:darkseagreen;
}


</style>