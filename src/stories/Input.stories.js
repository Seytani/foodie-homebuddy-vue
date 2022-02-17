import Input from '@/components/base/Input.vue'

export default {
    title: 'Base/Input',
    component: Input,
}

const Template = args => ({
    components: { Input },

    setup() {
        return { args }
    },

    template: '<Input />'
});

export const Default = Template.bind({});
