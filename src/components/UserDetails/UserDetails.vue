<template>
    <aside class="user-details">
        User details
    </aside>
</template>

<script>
export default {
    name: 'UserDetails'
};
</script>

<style lang="scss" scoped>
.user-details {
    position: fixed;
    top: 75px;
    right: 0;
    width: 250px;
    height: calc(100% - 75px);
    background-color: #fff;
    padding: 30px 20px;
}
</style>