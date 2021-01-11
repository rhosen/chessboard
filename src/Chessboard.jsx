import React from 'react';
import "./Chessboard.css"

function Chessboard() {
    return (
        <div className="feild">

            {/* white 1 */}

            <div className="w-sq">&#x2656;</div>
            <div className="b-sq">&#x2657;</div>
            <div className="w-sq">&#x2658;</div>
            <div className="b-sq">&#x2655;</div>
            <div className="w-sq">&#x2654;</div>
            <div className="b-sq">&#x2658;</div>
            <div className="w-sq">&#x2657;</div>
            <div className="b-sq">&#x2656;</div>

            {/* white 2 */}
            <div className="b-sq">&#x2659;</div>
            <div className="w-sq">&#x2659;</div>
            <div className="b-sq">&#x2659;</div>
            <div className="w-sq">&#x2659;</div>
            <div className="b-sq">&#x2659;</div>
            <div className="w-sq">&#x2659;</div>
            <div className="b-sq">&#x2659;</div>
            <div className="w-sq">&#x2659;</div>

            {/* white 3 */}
            <div className="w-sq"></div>
            <div className="b-sq"></div>
            <div className="w-sq"></div>
            <div className="b-sq"></div>
            <div className="w-sq"></div>
            <div className="b-sq"></div>
            <div className="w-sq"></div>
            <div className="b-sq"></div>


            {/* white 4 */}
            <div className="b-sq"></div>
            <div className="w-sq"></div>
            <div className="b-sq"></div>
            <div className="w-sq"></div>
            <div className="b-sq"></div>
            <div className="w-sq"></div>
            <div className="b-sq"></div>
            <div className="w-sq"></div>

            {/* white 5 */}
            <div className="w-sq"></div>
            <div className="b-sq"></div>
            <div className="w-sq"></div>
            <div className="b-sq"></div>
            <div className="w-sq"></div>
            <div className="b-sq"></div>
            <div className="w-sq"></div>
            <div className="b-sq"></div>


            {/* white 6 */}
            <div className="b-sq"></div>
            <div className="w-sq"></div>
            <div className="b-sq"></div>
            <div className="w-sq"></div>
            <div className="b-sq"></div>
            <div className="w-sq"></div>
            <div className="b-sq"></div>
            <div className="w-sq"></div>

            {/* white 7 */}
            <div className="w-sq">&#x265F;</div>
            <div className="b-sq">&#x265F;</div>
            <div className="w-sq">&#x265F;</div>
            <div className="b-sq">&#x265F;</div>
            <div className="w-sq">&#x265F;</div>
            <div className="b-sq">&#x265F;</div>
            <div className="w-sq">&#x265F;</div>
            <div className="b-sq">&#x265F;</div>

            {/* white 8 */}
            <div className="b-sq">&#x265C;</div>
            <div className="w-sq">&#x265D;</div>
            <div className="b-sq">&#x265E;</div>
            <div className="w-sq">&#x265B;</div>
            <div className="b-sq">&#x265A;</div>
            <div className="w-sq">&#x265E;</div>
            <div className="b-sq">&#x265D;</div>
            <div className="w-sq">&#x265C;</div>

        </div>
    )
}

export default Chessboard;