<template>
    <a-modal class="the-modal"
            title=""
            :visible="visible"
            @ok="handleOk"
            @cancel="handleCancel"
            >
             <div class="the-modal__content">  
                 <slot />
            </div>
        </a-modal>
</template>
<script>
export default {
  name: "TheModal",
  data() {
    return {
      bodyVisibility: false,
    };
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: "Modal default title",
    },
  },
  methods: {
    handleOk() {
      this.$emit("handle-ok");
    },
    handleCancel() {
      this.$emit("handle-cancel");
    },
  },
};
</script>
<style lang="scss">
.the-modal {
      /*  @include flex(center,center);
        & .ant-modal-body {
           
        }
       
       &__wrap-image {
            width: 100px;
            @include padding-hack($padding: 23%, $size: cover);
       }
       &__product {
           display: flex;
           flex-direction: column;
           margin-bottom: 10px;
       }

       &__product-info {
           display:flex;
           flex-direction: row;
       }*/

    }
</style>