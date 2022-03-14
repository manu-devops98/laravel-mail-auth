<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-5">
                <li
                    class="nav-item"
                    v-for="(item, index) in menuItems"
                    :key="index"
                >
                    <router-link
                        class="nav-link active"
                        :to="{ name: item.href }"
                    >
                        {{ item.label }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            menuItems: [
                {
                    label: "Home",
                    href: "home",
                },
                {
                    label: "Contacts",
                    href: "contacts",
                },
            ],
        };
    },
};
</script>

<style lang="scss"></style>
