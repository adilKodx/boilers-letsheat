<template>
  <div>
      <div class="container">
        <div  class="container mr-auto ml-auto  pl-[75px]  pr-[75px] w-full">
          <div class="flex flex-row items-center">

            <div class="w-full sm:w-3/4  h-full sm:mr-4">
              <div class="">
                  <h1>Let’s Get Started</h1>
                  <p>Your new boiler is a few clicks away…</p>
                  <div class="">
                    <form id="outcode_form">
                        <h4>Enter your postcode</h4>
                        <div class="form-group">
                            <input id="outcode" type="text" placeholder="e.g.CF3" maxlength="4" class="form-control required validate[required]">
                        </div>
                        <button class="rounded-full bg-red-400">Next</button>
                        <button type="button" class="text-white bg-orange-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>
                        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Blue</button>
                      </form>
                  </div>
                  <div class="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="5fd7fd4888d51f0001bcf912" data-style-height="24px" data-style-width="100%" data-theme="light" data-style-alignment="center" style="position: relative;"><iframe title="Customer reviews powered by Trustpilot" loading="auto" src="https://widget.trustpilot.com/trustboxes/5419b6a8b0d04a076446a9ad/index.html?templateId=5419b6a8b0d04a076446a9ad&amp;businessunitId=5fd7fd4888d51f0001bcf912#locale=en-GB&amp;styleHeight=24px&amp;styleWidth=100%25&amp;theme=light&amp;styleAlignment=center" style="position: relative; height: 24px; width: 100%; border-style: none; display: block; overflow: hidden;"></iframe></div>
              </div>
            </div>

            <div class="w-full sm:w-1/4 sm:mr-4 ">
              <div class="col-md-5 d-none d-md-block">
                <img src="https://boilers.letsheat.co.uk/assets/frontend/images/getStarted.png" alt="">
              </div>
            </div>  

            
          </div>
        </div>
      </div>
</div>
</template>


<script setup>
  definePageMeta({
    layout: 'default'
  })
</script>


<style  scoped>

</style>