<template>
    <div class="menu">
        <Menubar :model="items" class="p-grid p-justify-end">
            <template #end>
                <Dropdown
                    v-model="selectedLocale"
                    :options="locales"
                    optionLabel="title"
                >
                    <template #value="slotProps">
                        <img :src="require(`../assets/${slotProps.value.icon}`)" :alt="slotProps.value.title" />
                    </template>
                </Dropdown>
            </template>
        </Menubar>
    </div>
</template>

<script>
    import {mapActions,mapGetters} from "vuex"

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
        },
        methods:{
            ...mapActions("locale",[
                "setLocale"
            ])
        },
        computed:{
            ...mapGetters("locale",[
                "locales"
            ]),
            selectedLocale: {
                get(){
                    return this.$store.getters["locale/selectedLocale"]
                },
                set(locale){
                    this.setLocale(locale.name)
                }
            }
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

            .p-menuitem-text{
                color: #868e96 !important;
            }

            .p-menubar-end{
                margin-left: initial;
            }

            .p-dropdown-label{
                img{
                    max-height:20px;
                }
            }
        }
    }
</style>