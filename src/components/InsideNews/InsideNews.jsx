import React from 'react';
import "./InsideNews.css";

const InsideNews = () => {
    return (
        <div className="insideNews container">
            <div className="row mx-auto">
                <div className="col-md-4">
                    <h1>Our <span style={{color:'red', borderBottom:"3px solid red"}}>inside</span> <br /> News</h1>
                    <p>Check all news <i class="fas fa-chevron-right"></i></p>
                </div>
                <div className="col-md-4">
                    <div className="columnContainer" style={{width:"70%"}}>
                    <h6 style={{background:'black',display:'inline', color:'white', padding:'5px', borderRadius:'15px'}}>SOLUTION</h6>
                    <br /><br />
                    <h5>Our experience at WordCamp Nagpur</h5>
                    <br />
                    <h6>Featured - <span style={{opacity:'0.4'}}>18 Jul 2018</span></h6>
                    <br />
                    <div className="insideCardBottom">
                        <h6>Pinterest</h6>
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                    <hr />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="columnContainer" style={{width:"70%"}}>
                    <h6 style={{background:'black',display:'inline', color:'white', padding:'5px', borderRadius:'15px'}}>THEME</h6>
                    <br /><br />
                    <h5>Our experience at WordCamp Nagpur</h5>
                    <br />
                    <h6>Featured - <span style={{opacity:'0.4'}}>18 Jul 2018</span></h6>
                    <br />
                    <div className="insideCardBottom">
                        <h6>Fire</h6>
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                    <hr />
                    </div>
                </div>
                <div className="col-md-4" >
                    <div className="columnContainer" style={{width:"70%", background:'#F6F6F6', padding:'0 10px'}}>
                    <h6 style={{background:'black',display:'inline', color:'white', padding:'5px', borderRadius:'15px'}}>PLUGIN</h6>
                    <br /><br />
                    <h5>Our experience at WordCamp Nagpur</h5>
                    <br />
                    <h6>Featured - <span style={{opacity:'0.4'}}>18 Jul 2018</span></h6>
                    <br />
                    <div className="insideCardBottom">
                        <h6>Hash</h6>
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="columnContainer" style={{width:"70%"}}>
                    <h6 style={{background:'black',display:'inline', color:'white', padding:'5px', borderRadius:'15px'}}>WORDPRESS</h6>
                    <br /><br />
                    <h5>Our experience at WordCamp Nagpur</h5>
                    <br />
                    <h6>Featured - <span style={{opacity:'0.4'}}>18 Jul 2018</span></h6>
                    <br />
                    <div className="insideCardBottom">
                        <h6>Google</h6>
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                    <hr />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="columnContainer" style={{width:"70%"}}>
                    <h6 style={{background:'black',display:'inline', color:'white', padding:'5px', borderRadius:'15px'}}>EVENT</h6>
                    <br /><br />
                    <h5>Our experience at WordCamp Nagpur</h5>
                    <br />
                    <h6>Featured - <span style={{opacity:'0.4'}}>18 Jul 2018</span></h6>
                    <br />
                    <div className="insideCardBottom">
                        <h6>Netflix</h6>
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </div>
                    <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsideNews;