
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




    function Footer() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ display: 'flex', justifyContent: 'center'}}>
            Get in touch
        </h1>

            <div style={{ display: 'flex', 
                        justifyContent: 'space-around',
                        width: '900px'
                        }}>
								<FontAwesomeIcon icon={<i class="far envelope"></i>} />
                      	<div>
                            Email
                            <div>info@godfatherng.com</div>
                        </div>

                    <div>
                        Phone
                        <div>08034567890</div>
                    </div>

                    <div>
                        office
                        <div>10 Razak street</div>
                    </div>
            </div>
        </div>
    );
    }

    export default Footer;
