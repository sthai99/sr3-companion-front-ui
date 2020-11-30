import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  it('renders', () => {
    const wrapper = mount(Home);
    expect(wrapper.exists);
  });
});
