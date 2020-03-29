function Hoc(Base) {
    return {
        mounted() {
            console.log('我是高阶组件');
        },
        props: Base.props,
        methods: {
            hocFn() {
                this.$emit('hocFnEmit', '我是高阶组件方法');
            }
        },
        render(h) {
            const solts = Object.keys(this.$slots)
                .reduce((arr, key) => arr.concat(this.$slots[key]), [])
                .map(vnode => {
                    vnode.context = this._self; // 手动更正context,绑定到高阶组件上
                    return vnode;
                });
            return h(Base, {
                on: this.$listeners,
                props: this.$props,
                scopedSlots: this.$scopedSlots,
                attrs: this.$attrs
            }, solts);
        }
    };
}
export default Hoc;
