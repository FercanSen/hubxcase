import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import 'react-horizontal-scrolling-menu/dist/styles.css';
import './SliderMenu.scss';

import { DragDealer } from './Helpers/DragDealer';
import SliderMenuItems from './SliderMenuItems/SliderMenuItems';

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function SliderMenu() {
  const dragState = React.useRef(new DragDealer());

  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragState.current.dragMove(ev, (posDiff: number) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  return (
    <>
      <div className="slider-menu">
        <div onMouseLeave={dragState.current.dragStop}>
          <ScrollMenu
            onMouseDown={() => dragState.current.dragStart}
            onMouseUp={() => dragState.current.dragStop}
            onMouseMove={handleDrag}
          >
            <SliderMenuItems />
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}
export default SliderMenu;
