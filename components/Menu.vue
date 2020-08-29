<template>
    <div class="menu">
        <Menubar :model="items" class="p-grid p-justify-end"/>
    </div>
</template>

<script>
    export default{
        name: "Menu",
        data(){
            const items = [
                {
                    label: "Portfolio",
                    url: "https://sarkozibalazs.dev"
                },
                {
                    label: "Projects",
                    url: "https://projects.sarkozibalazs.dev"
                },
                {
                    label: "Blog",
                    url: "https://blog.sarkozibalazs.dev"
                }
            ];
            return {
                items
            };
        }
    }
</script>

<style lang="scss">
    .menu{
        .p-component{
            font-size: 19px;
            margin: 0;
        }
        .p-menubar{
            border: none;
        }
    }
</style>