<template>
    <div>
        <v-container>
            <v-row>

                <v-col sm="4" md="3" class="px-2">
                    <Filters />
                    <Orders />
                </v-col>

                <v-col sm="8" md="9">
                    <v-row style="padding-top: 20px;" v-if="filteredLessons">
                        <Lesson v-for="(lesson, index) in filteredLessons" :key="index">
                            <template v-slot:image>
                                {{ lesson.image}}
                            </template>
                            <template v-slot:subject>
                                Subject: {{lesson.subject}}
                            </template>
                            <template v-slot:location>
                                Location: {{lesson.location}}
                            </template>
                            <template v-slot:price>
                                Price: {{lesson.price}}
                            </template>
                            <template v-slot:spaces>
                                Spaces: {{lesson.spaces}}
                            </template>
                            <template v-slot:button>
                                <v-btn
                                        v-if="lesson.spaces > 0"
                                        outlined
                                        rounded
                                        text
                                        v-on:click="addToCart(lesson)"
                                >
                                    Add To Cart
                                </v-btn>
                            </template>
                        </Lesson>

                    </v-row>
                </v-col>

            </v-row>
        </v-container>

    </div>
</template>

<script>
    import Filters from '../components/Filters.vue';
    import Lesson from "../components/Lesson";
    import Orders from '../components/Orders.vue';
    export default {
        name: "Lessons",
        components: {
            Lesson, Filters, Orders
        },
        methods: {
            addToCart(lesson) {
                this.$store.commit('addToCart', lesson)
            }
        },
        created() {
            this.$store.dispatch('getLessons')
        },
        computed: {
            // eslint-disable-next-line vue/return-in-computed-property
            filteredLessons: function() {

                if (this.$store.state.lessons) {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    if (this.$store.state.orderBy === 'ascending') {

                        if (this.$store.state.sortBy === 'subject') {
                            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                            return this.$store.state.lessons.sort((a, b) => (a.subject.toLowerCase() < b.subject.toLowerCase()) ? -1 : (a.subject.toLowerCase() > b.subject.toLowerCase()) ? 1 : 0)
                        } else if (this.$store.state.sortBy === 'location') {
                            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                            return this.$store.state.lessons.sort((a, b) => (a.location.toLowerCase() < b.location.toLowerCase()) ? -1 : (a.location.toLowerCase() > b.location.toLowerCase()) ? 1 : 0)
                        } else if (this.$store.state.sortBy === 'price') {
                            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                            return this.$store.state.lessons.sort((a, b) => (a.price < b.price) ? -1 : (a.price > b.price) ? 1 : 0)
                        } else if (this.$store.state.sortBy === 'availability') {
                            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                            return this.$store.state.lessons.sort((a, b) => (a.spaces < b.spaces) ? -1 : (a.spaces > b.spaces) ? 1 : 0)
                        }

                    } else if (this.$store.state.orderBy === 'descending') {

                        if (this.$store.state.sortBy === 'subject') {
                            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                            return this.$store.state.lessons.sort((a, b) => (a.subject.toLowerCase() < b.subject.toLowerCase()) ? 1 : (a.subject.toLowerCase() > b.subject.toLowerCase()) ? -1 : 0)
                        } else if (this.$store.state.sortBy === 'location') {
                            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                            return this.$store.state.lessons.sort((a, b) => (a.location.toLowerCase() < b.location.toLowerCase()) ? 1 : (a.location.toLowerCase() > b.location.toLowerCase()) ? -1 : 0)
                        } else if (this.$store.state.sortBy === 'price') {
                            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                            return this.$store.state.lessons.sort((a, b) => (a.price < b.price) ? 1 : (a.price > b.price) ? -1 : 0)
                        } else if (this.$store.state.sortBy === 'availability') {
                            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                            return this.$store.state.lessons.sort((a, b) => (a.spaces < b.spaces) ? 1 : (a.spaces > b.spaces) ? -1 : 0)
                        }

                    }
                }
            }

        }
    }
</script>

<style scoped>

</style>