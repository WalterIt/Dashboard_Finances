import React, {FC, JSX} from "react";
import { GridType } from "./grid-type";


const GridLayout:FC<GridType> = ({ children, direction , count, gap, rowGap, colGap } ) => {
    // Calculate the grid template columns or rows based on the direction
    const gridTemplate = direction === "column" ? `grid-cols-${count}` : `grid-rows-${count}`;
  
    // Calculate the gap classes based on the gap, rowGap, and colGap props
    const gapClasses = [];
    if (gap) {
      gapClasses.push(`gap-${gap}`);
    }
    if (rowGap) {
      gapClasses.push(`row-gap-${rowGap}`);
    }
    if (colGap) {
      gapClasses.push(`col-gap-${colGap}`);
    }
  
    return (
      <div  className={`grid ${gridTemplate} ${gapClasses.join(" ")}`} >
        {children}
      </div>
    );
  };

  export default GridLayout;







// const GridLayout = styled.div<GridType>`
//     display: grid;
//     // gird row or column
//     ${({direction, count}) => direction === 'column' ? `grid-template-columns: repeat(${count ? count : 12}, 1fr)` : direction === 'row' ? `grid-template-rows: repeat(${count ? count : 12}, 1fr)` : null};
//     // gap
//     ${({gap}) => gap && `gap: ${gap}px;`}
//     // row gap
//     ${({rowGap}) => rowGap && `row-gap: ${rowGap}px;`}
//     // column gap
//     ${({colGap}) => colGap && `column-gap: ${colGap}px;`}
// `;
// export default GridLayout;