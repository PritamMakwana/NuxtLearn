<template>
  <div>
    <NuxtLayout>
      <ul>
        <li>
          <NuxtLink to="/"> Home</NuxtLink>
          <NuxtLink to="/about-us"> About Us</NuxtLink>
          <NuxtLink to="/events"> Events</NuxtLink>
          <NuxtLink to="/events/10"> EventsId</NuxtLink>
          <NuxtLink to="/events/profile"> Profile</NuxtLink>
        </li>
      </ul>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>