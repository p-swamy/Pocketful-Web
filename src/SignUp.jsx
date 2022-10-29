import React from 'react';
import rocket from "./Assets/rocket.gif";
import close from "./Assets/close.webp";
import google from "./Assets/Google.webp";
import right from "./Assets/right.png"
import git from "./Assets/git.webp"
import './news.css';

export default function SignUp() {
    
    return (
        <div className='w-100 ' style={{ backgroundColor: 'purple', height: '39rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '5rem' }}>
                <div className='d-flex justify-content-center' style={{ borderRadius: '10px', width: '20rem', height: '30rem', backgroundColor: '#ffffff' }}>
                    <div className='d-flex justify-content-center' style={{ paddingTop: '1.6rem' }}>
                        <img src={rocket} style={{ width: '30%' }} />
                    </div>
                    <div className='d-flex justify-content-center' style={{ paddingTop: '0.3rem' }}>
                        <div style={{ color: 'purple', fontSize: '14px', fontWeight: '700' }}>Welcome to Bardeen</div>

                    </div>
                    <div className='d-flex justify-content-center mb-1' style={{ paddingTop: '0.2rem' }}>
                        <div style={{ color: '#888888', fontSize: '14px', fontWeight: '500' }}>Lets log in to launch your automations.</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '10px', paddingTop: '15px' }}>
                        <input placeholder={'Email Address'} type="text" style={{ width: '90%', border: '1px solid #DFDFDF', height: '2.2rem', paddingLeft: '10px', borderRadius: '4px' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '10px', paddingTop: '10px' }}>
                        <input placeholder={'Password'} type="password" style={{ width: '90%', border: '1px solid #DFDFDF', height: '2.2rem', paddingLeft: '10px', borderRadius: '4px' }} />
                        <div style={{ position: 'absolute' }}>
                            <img src={close}  role="button" style={{ width: '5%',cursor:'pointer', position: 'relative', right: '0px', top: '5px' }} />
                        </div>
                    </div>
                    <div style={{ width: '91%', display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                        <div style={{ color: 'purple', fontSize: '14px', fontWeight: '600',cursor:'pointer' }}  role="button">
                            Create Account
                        </div>
                        <div style={{ color: 'purple', fontSize: '14px', fontWeight: '600' ,cursor:'pointer'}}  role="button">Forgot Password?</div>
                    </div>
                    <div>
                        <button style={{ width: '91%', height: '2.4rem', backgroundColor: 'purple', borderRadius: '5px', border: '1px solid #ffffff', color: '#ffffff', fontSize: '12px' }} >Sign In</button>
                    </div>
                    <div style={{ width: '90%', border: '1px solid #DFDFDF', marginLeft: '15px', marginTop: '15px', display: 'flex',height:'2.2rem',borderRadius:'4px' }}>
                        <div style={{display:'flex',width:'90%'}}>
                            <img src={google} style={{ width: '1.4rem',objectFit:'contain',marginRight:'5px',marginLeft:'5px' }} />
                            <div style={{display:'flex',alignItems:'center'}}>
                                <div style={{ color: '#888888', fontSize: '12px', fontWeight: '500', display: 'flex', justifyContent: 'center' }}>Sign In with Google</div>
                            </div>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <img src={right}  role="button" style={{width:'40%',objectFit:'contain',cursor:'pointer'}}/>
                        </div>
                    </div>
                    <div style={{ width: '90%', border: '1px solid #DFDFDF', marginLeft: '15px', marginTop: '10px', display: 'flex',height:'2.2rem',borderRadius:'4px' }}>
                        <div style={{display:'flex',width:'90%'}}>
                            <img src={git} style={{ width: '1.2rem',objectFit:'contain',marginRight:'8px',marginLeft:'5px' }} />
                            <div style={{display:'flex',alignItems:'center'}}>
                                <div style={{ color: '#888888', fontSize: '12px', fontWeight: '500', display: 'flex', justifyContent: 'center' }}>Sign In with Github</div>
                            </div>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <img src={right} role="button" style={{width:'40%',objectFit:'contain',cursor:'pointer'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}