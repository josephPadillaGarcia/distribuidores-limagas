<template>
    <div class="col-lg-6">
        <div v-if="!success">
            <h3
                v-if="title"
            >
                {{ title }}
            </h3>
            <div
                v-if="description && withDescription"
                v-html="description"
            ></div>
        </div>
        <Form
            :success-prop.sync="success"
            :quantity="quantity"
            :showServices="showServices"
            :services="services"
        />
    </div>
</template>

<script>
import Form from "./Form";
export default {
    name: "FormQuote",
    components: {
        Form
    },
    props: {
        title: {
            type: String
        },
        description: {
            type: String
        },
        quantity: {
            type: Array
        },
        services: {
            type: Array
        },
        showServices: {
            default: false,
            type: Boolean
        },
        withDescription: {
            default: true,
            type: Boolean
        },
    },
    data() {
        return {
            success: false
        };
    }
};
</script>
