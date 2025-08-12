import React, { useState } from 'react';
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function OpenNow() {
    const [mobileNumber, setMobileNumber] = useState('');
    const leftImageRef = useScrollAnimation();
    const formRef = useScrollAnimation();

    return ( 
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Left side - Platform visuals */}
                <div 
                  ref={leftImageRef}
                  className="col-lg-6 scroll-animate-left scroll-animate-delay-1"
                >
                    <img 
                        src="media/images/account_open.svg" 
                        alt="App_overview" 
                        className="img-fluid"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>

                {/* Right side - Signup form */}
                <div className="col-lg-6">
                     <div 
                       ref={formRef}
                       className="bg-white p-4 rounded shadow-sm scroll-animate-right scroll-animate-delay-2" 
                       style={{ 
                        maxWidth: '400px', 
                        margin: '0 auto',
                        borderRadius: '16px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)'
                      }}>
                        <h3 className="mb-2" style={{ color: "#3c3c3c", fontWeight: "600" }}>
                            Signup now
                        </h3>
                        <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
                            Or track your existing application
                        </p>
                        
                                                 {/* Mobile number input with country code */}
                         <div className="mb-4">
                             <div className="input-group">
                                 <div className="input-group-prepend">
                                     <span className="input-group-text d-flex align-items-center" 
                                           style={{ 
                                               backgroundColor: '#f8f9fa', 
                                               border: '1px solid #dee2e6',
                                               borderRight: 'none',
                                               borderRadius: '8px 0 0 8px',
                                               padding: '12px 16px',
                                               fontSize: '16px'
                                           }}>
                                         <img 
                                             src="media/images/india-flag.svg" 
                                             alt="Indian_Flag" 
                                             style={{ width: '24px', height: '18px', marginRight: '8px' }}
                                         />
                                         <span style={{ color: '#6c757d', fontWeight: '500', fontSize: '16px' }}>+91</span>
                                     </span>
                                 </div>
                                 <input 
                                     type="tel" 
                                     className="form-control" 
                                     placeholder="Enter your mobile number"
                                     value={mobileNumber}
                                     onChange={(e) => setMobileNumber(e.target.value)}
                                     style={{ 
                                         border: '1px solid #dee2e6',
                                         borderRadius: '0 8px 8px 0',
                                         padding: '12px 16px',
                                         fontSize: '16px'
                                     }}
                                 />
                             </div>
                         </div>

                        {/* Get OTP Button */}
                        <button 
                            className="btn btn-primary w-100 mb-3"
                            style={{ 
                                background: 'linear-gradient(135deg, #2962ff, #387ED1)',
                                border: 'none',
                                borderRadius: '12px',
                                padding: '14px 24px',
                                fontSize: '16px',
                                fontWeight: '600',
                                boxShadow: '0 6px 20px rgba(41, 98, 255, 0.3)',
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                transform: 'perspective(1000px) rotateX(0deg)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px) scale(1.02) perspective(1000px) rotateX(3deg)';
                                e.target.style.boxShadow = '0 10px 25px rgba(41, 98, 255, 0.4)';
                                e.target.style.filter = 'brightness(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0) scale(1) perspective(1000px) rotateX(0deg)';
                                e.target.style.boxShadow = '0 6px 20px rgba(41, 98, 255, 0.3)';
                                e.target.style.filter = 'brightness(1)';
                            }}
                        >
                            Get OTP
                        </button>

                        {/* Terms and Privacy Policy */}
                        <p className="text-muted text-center" style={{ fontSize: "12px", lineHeight: "1.4" }}>
                            By proceeding, you agree to the FinPlot{' '}
                            <a href="#" style={{ color: '#2962ff', textDecoration: 'underline' }}>
                                terms & privacy policy
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default OpenNow;