export default function HOC2(WrappedComponent) {
  return class HOC2 extends WrappedComponent {
    test(a, b) {
      console.log('继承原始组件的state: ' + this.state.number)
      return this.add(a, b);
    }

    render() {
      return super.render();
    }
  }
}