import { mount } from '@vue/test-utils';
import Reference from '@/views/Reference.vue';

describe('Reference.vue', () => {
  it('renders', () => {
    const wrapper = mount(Reference);
    expect(wrapper.exists);
  });
});
