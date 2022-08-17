<template>
    <form class="search">
        <input type="text" placeholder="Search" class="inp" autocomplete="search">
        <button type="submit" class="search-btn flat-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>
</template>

<script>
export default {
    name: 'SearchBar'
};
</script>

<style lang="scss">
.search {
    width: 250px;
    position: relative;
    .inp {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        padding: 13px 17px;
        padding-right: 30px;
        border-radius: 20px;
        outline: none;
        border: 1px solid #ddd;
        width: 100%;
    }
    .search-btn {
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
        font-size: 16px;
        color: #111;
    }
}
</style>