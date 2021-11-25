<template>
    <dropdown-menu
        :right="right"
        :class="classWrapper"
        class="dropdown-custom"
        v-model="show"
        interactive
    >
        <slot name="active-text"> </slot>
        <div slot="dropdown" @click="close">
            <slot name="dropdown-content"></slot>
        </div>
    </dropdown-menu>
</template>
<script>
import DropdownMenu from "@innologica/vue-dropdown-menu";
export default {
    props: {
        classWrapper: {
            type: String
        },
        right: {
            default: false,
            type: Boolean
        }
    },
    data() {
        return {
            show: false
        };
    },
    methods: {
        close() {
            this.show = false;
        }
    },
    components: {
        DropdownMenu
    }
};
</script>
