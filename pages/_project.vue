<template>
    <div class="project">
        <div
            v-for="(val, locale) in project.fields.title"
            v-if="locale === $store.getters['locale/selectedLocale'].name"
        >
            <h1>
                {{val}}
            </h1>
        </div>
        <small>
            <span>
            Tags:
                <span
                    v-for="(val,locale) in project.fields.tags"
                    v-if="locale === $store.getters['locale/selectedLocale'].name"
                >
                    <span v-for="tag in val">
                        {{tag}};
                    </span>
                </span>
            </span>
            <span class="align-right">
                By Balázs on {{project.fields.publicationDate['en-US']}}
            </span>
        </small>

        <div v-for="(val, locale) in project.fields.content">
            <div v-if="locale === $store.getters['locale/selectedLocale'].name" v-html="$md.render(val)">
            </div>
        </div>
    </div>
</template>

<script>
    import {contentfulClient} from '../services/contentful'

    export default {
        data(){
            return {
                project: null
            }
        },
        async fetch() {
            const client = await contentfulClient();

            const project = await client.getEntries({
                content_type: "blogPost",
                'fields.slug.en-US' : this.$route.params.project
            })

            this.project = project.items[0]
        }
    }
</script>

<style lang="scss">

    h1{
        color: #000;
        font-size: 3em;
        font-weight:400;
    }

    img{
        max-width: 100%;
    }

    em{
        display: block;
        font-size: 0.8em;
        text-align: center;
    }

    .project{
        font-size: 20px;
        max-width: 800px !important;
        margin: auto;
    }

    small{
        color: #00000085;
        margin-top: -2.5em;
        display: block;
        position: relative;

        span.align-right{
            position: absolute;
            right: 0;
        }
    }
</style>