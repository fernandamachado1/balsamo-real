import Component_2_1 from './Component_2_1';
import Component_2_2 from './Component_2_2';
import Component_2_3 from './Component_2_3';
import Component_2_4 from './Component_2_4';

function Component_2() {
  return (
    <section
      className="bg-[#f4f1ea] caret-neutral-900"
      data-component-id="Component_2"
    >
      <div className="bg-[#f4f1ea] min-h-[834px] caret-neutral-900">
        <Component_2_1 />
        <Component_2_2 />
        <Component_2_3 />
        <Component_2_4 />
      </div>
    </section>
  );
}

export default Component_2;
