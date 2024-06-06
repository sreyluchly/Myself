<template>
  <header class="header-vue">
    <div class="header-left">
      <h3>Welcome to my portfolio!🎉</h3>
      <h1>I'm Sreyluch Ly</h1>
      <p>I’m a web developer passionate about creating beautiful, user-friendly websites.</p>
    </div>
    <div class="header-right">
      <img src="https://img.freepik.com/free-vector/programmer-working-with-php_52683-22998.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716854400&semt=ais_user" alt="Programmer working">
    </div>
  </header>
</template>

<script>
export default {
  name: ' HomePage',
}
</script>

<style scoped>
  header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
  }
</style>
