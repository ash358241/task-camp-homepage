import React from 'react';
import "./Promote.css";
import developer from "../../assests/developer.jpg";
import wordpress from "../../assests/wordpress.png"

const Promote = () => {
    return (
        <div className="promote">
            <div className="thoughts">
            <i class="fab fa-slack-hash fa-2x text-white bg-black p-3 rounded-circle mb-2"></i>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatum veniam dolor eligendi minus rem enim voluptatem quasi, ipsa voluptas"</p>
                <div className="developer">
                    <div className="devSpecific">
                        <img style={{width: "50px", height: "50px", borderRadius: "100%"}} src={developer} alt="" />
                        <p className="ms-2">Jannat far, VP technology</p>
                    </div>
                    <div className="icon">
                    <i class="fas fa-long-arrow-alt-left"></i> <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                </div>
            </div>
            <div className="promoteImg">
                <img  src={wordpress} alt="" />
            </div>
        </div>
    );
};

export default Promote;