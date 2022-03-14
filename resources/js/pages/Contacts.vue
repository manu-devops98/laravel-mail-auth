<template>
    <div class="container">
        <div v-if="success" class="alert alert-success" role="alert">
            Mail inviata correttamente!
        </div>
        <h1>Contacts</h1>
        <form class="w-50 mx-auto" @submit.prevent="sendForm">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                />

                <p
                    class="alert alert-danger"
                    v-for="(error, index) in errors.name"
                    :key="index"
                >
                    {{ error }}
                </p>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                />
                <p
                    class="alert alert-danger"
                    v-for="(error, index) in errors.email"
                    :key="index"
                >
                    {{ error }}
                </p>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea
                    v-model="message"
                    class="form-control"
                    placeholder="Lascia un messaggio"
                    id="message"
                    style="height: 100px"
                ></textarea>
                <p
                    class="alert alert-danger"
                    v-for="(error, index) in errors.message"
                    :key="index"
                >
                    {{ error }}
                </p>
            </div>
            <button type="submit" class="btn btn-primary">Invia</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Contacts",
    data() {
        return {
            name: "",
            email: "",
            message: "",
            success: false,
            errors: [],
        };
    },
    methods: {
        sendForm() {
            this.success = false;
            axios
                .post("/api/contacts", {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                })
                .then((result) => {
                    this.success = false;
                    console.log(result);
                    if (!result.data.success) {
                        this.errors = result.data.errors;
                    } else {
                        this.errors = [];
                        this.success = true;
                        this.name = "";
                        this.email = "";
                        this.message = "";
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<style lang="scss"></style>
