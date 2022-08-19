<template>
    <div class="welcome">
        <h1><span>Salam,</span><br> Amr</h1>
        <img src="../../assets/images/prayer.png" alt="user image">
    </div>
</template>

<script>
export default {
    name: 'Welcome'
};
</script>

<style lang="scss" scoped>
.welcome {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h1 {
        font-size: 23px;
        font-weight: 500;
        span {
            font-weight: 400;
            font-size: 20px;
        }
    }
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
}
</style>