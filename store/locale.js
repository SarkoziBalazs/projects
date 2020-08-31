export default {
    state(){
        const locales = [
            {
                title: "English",
                name: "en-US",
                icon: "en.svg",
                selected: true
            },
            {
                title: "Magyar",
                name: "hu",
                icon: "hu.svg",
                selected: false
            }
        ]

        return {
            locales
        }
    },
    mutations: {
        SET_LOCALE(state,name){
            state.locales.forEach((locale) => {
                locale.selected = locale.name === name
            })
        }
    },
    actions: {
        setLocale({commit},locale){
            commit("SET_LOCALE",locale)
        }
    },
    getters:{
        locales(state){
            let locales = []
            state.locales.forEach(function(locale){
                locales.push(locale)
            })

            return locales
        },
        selectedLocale(state){
            let locale = null
            state.locales.forEach(function(stateLocale){
                if(stateLocale.selected){
                    locale = stateLocale
                }
            })

            return locale
        }
    }
}