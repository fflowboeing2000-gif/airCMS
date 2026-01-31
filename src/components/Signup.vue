<script lang="ts"></script>

<template>
  <div
    dir="rtl"
    class="absolute h-full w-full top-0 bg-[url('https://images.unsplash.com/photo-1656589368115-dabd3d89922d?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=alpridephoto-y59QoMGFgsA-unsplash.jpg')] bg-cover bg-center"
  >
    <div class="absolute h-full w-full top-0 bg-overflow-200"></div>
    <div dir="ltr" class="absolute right-0 h-full bg-white p-10 w-150 rounded-s-lg">
      <h2 class="mb-10 font-bold text-2xl">Welcome in the Celestia!</h2>
      <p class="text-text mb-0">Discord name</p>
      <input
        class="focus:border-button-600 focus:outline-none py-1 px-2 w-full border-2 rounded-sm border-button-300"
        type="text"
        placeholder="Enter your Discord username"
      />
      <p class="text-text mt-5">Create password</p>
      <input
        class="focus:border-button-600 focus:outline-none py-1 px-2 w-full border-2 rounded-sm border-button-300"
        type="password"
        placeholder="Enter your password"
      />
      <button
        class="cursor-pointer hover:bg-text text-white mt-5 text-center w-full bg-button-600 rounded-sm py-2"
      >
        Sign up
      </button>
    </div>
  </div>
  <div class="absolute bottom-4 right-4 flex justify-between">
    <h1 class="text-xl text-button-600 cursor-default">
      NEX Air |
      <a
        href="https://unsplash.com/photos/a-small-airplane-flying-in-the-sky-y59QoMGFgsA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
        >Андрей Сизов</a
      >
    </h1>
  </div>
</template>
