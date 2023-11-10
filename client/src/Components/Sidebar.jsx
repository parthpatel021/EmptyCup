import React from 'react'
import "../app.css";

const Sidebar = () => {
    return (
        <>
            <div className='left top-part'>
                <a href="/">
                    <svg className='svg' width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.6562 1.875C26.8635 1.875 27.0622 1.97377 27.2087 2.14959C27.3552 2.3254 27.4375 2.56386 27.4375 2.8125V19.6875C27.4375 19.9361 27.3552 20.1746 27.2087 20.3504C27.0622 20.5262 26.8635 20.625 26.6562 20.625H6.34375C6.13655 20.625 5.93784 20.5262 5.79132 20.3504C5.64481 20.1746 5.5625 19.9361 5.5625 19.6875V2.8125C5.5625 2.56386 5.64481 2.3254 5.79132 2.14959C5.93784 1.97377 6.13655 1.875 6.34375 1.875H26.6562ZM6.34375 0C5.72215 0 5.12601 0.296316 4.68647 0.823762C4.24693 1.35121 4 2.06658 4 2.8125V19.6875C4 20.4334 4.24693 21.1488 4.68647 21.6762C5.12601 22.2037 5.72215 22.5 6.34375 22.5H26.6562C27.2779 22.5 27.874 22.2037 28.3135 21.6762C28.7531 21.1488 29 20.4334 29 19.6875V2.8125C29 2.06658 28.7531 1.35121 28.3135 0.823762C27.874 0.296316 27.2779 0 26.6562 0H6.34375Z" fill="#E0A64E" />
                        <path d="M8.6875 12.1875C8.6875 11.9389 8.76981 11.7004 8.91632 11.5246C9.06284 11.3488 9.26155 11.25 9.46875 11.25H23.5312C23.7385 11.25 23.9372 11.3488 24.0837 11.5246C24.2302 11.7004 24.3125 11.9389 24.3125 12.1875C24.3125 12.4361 24.2302 12.6746 24.0837 12.8504C23.9372 13.0262 23.7385 13.125 23.5312 13.125H9.46875C9.26155 13.125 9.06284 13.0262 8.91632 12.8504C8.76981 12.6746 8.6875 12.4361 8.6875 12.1875ZM8.6875 15.9375C8.6875 15.6889 8.76981 15.4504 8.91632 15.2746C9.06284 15.0988 9.26155 15 9.46875 15H18.8438C19.051 15 19.2497 15.0988 19.3962 15.2746C19.5427 15.4504 19.625 15.6889 19.625 15.9375C19.625 16.1861 19.5427 16.4246 19.3962 16.6004C19.2497 16.7762 19.051 16.875 18.8438 16.875H9.46875C9.26155 16.875 9.06284 16.7762 8.91632 16.6004C8.76981 16.4246 8.6875 16.1861 8.6875 15.9375ZM8.6875 6.5625C8.6875 6.31386 8.76981 6.0754 8.91632 5.89959C9.06284 5.72377 9.26155 5.625 9.46875 5.625H23.5312C23.7385 5.625 23.9372 5.72377 24.0837 5.89959C24.2302 6.0754 24.3125 6.31386 24.3125 6.5625V8.4375C24.3125 8.68614 24.2302 8.9246 24.0837 9.10041C23.9372 9.27623 23.7385 9.375 23.5312 9.375H9.46875C9.26155 9.375 9.06284 9.27623 8.91632 9.10041C8.76981 8.9246 8.6875 8.68614 8.6875 8.4375V6.5625Z" fill="#E0A64E" />
                    </svg>
                    <p>Contacts</p>
                </a>
                <a href="/">
                    <svg width="27" height="41" viewBox="0 0 27 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 7.4375C12.5 8.08397 12.2629 8.70395 11.841 9.16107C11.419 9.61819 10.8467 9.875 10.25 9.875C9.65326 9.875 9.08097 9.61819 8.65901 9.16107C8.23705 8.70395 8 8.08397 8 7.4375C8 6.79103 8.23705 6.17105 8.65901 5.71393C9.08097 5.25681 9.65326 5 10.25 5C10.8467 5 11.419 5.25681 11.841 5.71393C12.2629 6.17105 12.5 6.79103 12.5 7.4375Z" fill="#3A312E" />
                        <path d="M4.25 0C3.65326 0 3.08097 0.256807 2.65901 0.713927C2.23705 1.17105 2 1.79103 2 2.4375L2 17.0625C2 17.709 2.23705 18.329 2.65901 18.7861C3.08097 19.2432 3.65326 19.5 4.25 19.5H23.75C24.3467 19.5 24.919 19.2432 25.341 18.7861C25.7629 18.329 26 17.709 26 17.0625V2.4375C26 1.79103 25.7629 1.17105 25.341 0.713927C24.919 0.256807 24.3467 0 23.75 0H4.25ZM23.75 1.625C23.9489 1.625 24.1397 1.7106 24.2803 1.86298C24.421 2.01535 24.5 2.22201 24.5 2.4375V12.1875L18.8375 9.02363C18.6968 8.94729 18.5376 8.92081 18.3822 8.94793C18.2269 8.97505 18.0834 9.0544 17.972 9.17475L12.407 15.2035L8.417 12.324C8.27294 12.2201 8.10014 12.1734 7.92791 12.1917C7.75567 12.2101 7.5946 12.2924 7.472 12.4247L3.503 16.25V17.1275C3.50121 17.1059 3.50021 17.0842 3.5 17.0625V2.4375C3.5 2.22201 3.57902 2.01535 3.71967 1.86298C3.86032 1.7106 4.05109 1.625 4.25 1.625H23.75Z" fill="#3A312E" />  
                    </svg>
                    <p>Gallary</p>  
                </a>
                <a href="/">
                    <svg width="17" height="41" viewBox="0 0 17 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.54922 19.5C11.8203 16.9922 17 10.9141 17 7.5C17 3.35938 13.1927 0 8.5 0C3.80729 0 0 3.35938 0 7.5C0 10.9141 5.17969 16.9922 7.45078 19.5C7.99531 20.0977 9.00469 20.0977 9.54922 19.5ZM8.5 5C9.25145 5 9.97212 5.26339 10.5035 5.73223C11.0348 6.20107 11.3333 6.83696 11.3333 7.5C11.3333 8.16304 11.0348 8.79893 10.5035 9.26777C9.97212 9.73661 9.25145 10 8.5 10C7.74855 10 7.02788 9.73661 6.49653 9.26777C5.96518 8.79893 5.66667 8.16304 5.66667 7.5C5.66667 6.83696 5.96518 6.20107 6.49653 5.73223C7.02788 5.26339 7.74855 5 8.5 5Z" fill="#D7D7D7" />
                    </svg>
                    <p>Map</p>
                </a>

            </div>
            <div className="right top-part">
                <a href="/">
                    <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0625 2.625C15.0625 1.92881 15.3489 1.26113 15.8588 0.768845C16.3687 0.276562 17.0602 0 17.7812 0L23.2188 0C23.9398 0 24.6313 0.276562 25.1412 0.768845C25.6511 1.26113 25.9375 1.92881 25.9375 2.625V4.375C25.9375 5.07119 25.6511 5.73887 25.1412 6.23116C24.6313 6.72344 23.9398 7 23.2188 7H17.7812C17.0602 7 16.3687 6.72344 15.8588 6.23116C15.3489 5.73887 15.0625 5.07119 15.0625 4.375V2.625ZM24.125 2.625C24.125 2.39294 24.0295 2.17038 23.8596 2.00628C23.6896 1.84219 23.4591 1.75 23.2188 1.75H17.7812C17.5409 1.75 17.3104 1.84219 17.1404 2.00628C16.9705 2.17038 16.875 2.39294 16.875 2.625V4.375C16.875 4.60706 16.9705 4.82962 17.1404 4.99372C17.3104 5.15781 17.5409 5.25 17.7812 5.25H23.2188C23.4591 5.25 23.6896 5.15781 23.8596 4.99372C24.0295 4.82962 24.125 4.60706 24.125 4.375V2.625Z" fill="#3A312E" />
                        <path d="M11.4375 2.625H13.25V4.375H11.4375C10.9568 4.375 10.4958 4.55937 10.1559 4.88756C9.81596 5.21575 9.625 5.66087 9.625 6.125V24.5C9.625 24.9641 9.81596 25.4092 10.1559 25.7374C10.4958 26.0656 10.9568 26.25 11.4375 26.25H29.5625C30.0432 26.25 30.5042 26.0656 30.8441 25.7374C31.184 25.4092 31.375 24.9641 31.375 24.5V6.125C31.375 5.66087 31.184 5.21575 30.8441 4.88756C30.5042 4.55937 30.0432 4.375 29.5625 4.375H27.75V2.625H29.5625C30.5239 2.625 31.4459 2.99375 32.1258 3.65013C32.8056 4.3065 33.1875 5.19674 33.1875 6.125V24.5C33.1875 25.4283 32.8056 26.3185 32.1258 26.9749C31.4459 27.6313 30.5239 28 29.5625 28H11.4375C10.4761 28 9.55406 27.6313 8.87424 26.9749C8.19442 26.3185 7.8125 25.4283 7.8125 24.5V6.125C7.8125 5.19674 8.19442 4.3065 8.87424 3.65013C9.55406 2.99375 10.4761 2.625 11.4375 2.625Z" fill="#3A312E" />
                        <path d="M20.5 12.2184C23.516 9.29067 31.0578 14.4129 20.5 20.9999C9.94218 14.4129 17.484 9.29242 20.5 12.2184Z" fill="#3A312E" />
                    </svg>
                    <p>Shortlisted</p>
                </a>

                <a href="/">
                    <svg width="31" height="44" viewBox="0 0 31 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.41486 1.13624C6.41486 0.834893 6.30225 0.545885 6.10178 0.332798C5.90132 0.119711 5.62944 0 5.34594 0C5.06245 0 4.79057 0.119711 4.59011 0.332798C4.38964 0.545885 4.27703 0.834893 4.27703 1.13624V21.1182L1.82706 18.5117C1.72768 18.406 1.60969 18.3222 1.47984 18.2651C1.34999 18.2079 1.21082 18.1785 1.07027 18.1785C0.929719 18.1785 0.790546 18.2079 0.660695 18.2651C0.530844 18.3222 0.412858 18.406 0.313475 18.5117C0.214091 18.6173 0.135255 18.7427 0.0814694 18.8808C0.0276833 19.0188 0 19.1667 0 19.3161C0 19.4655 0.0276833 19.6135 0.0814694 19.7515C0.135255 19.8895 0.214091 20.0149 0.313475 20.1206L4.58915 24.6633L4.60412 24.6792C4.80481 24.8872 5.0747 25.0025 5.355 25C5.6353 24.9974 5.90329 24.8772 6.1006 24.6656L10.3763 20.1206C10.577 19.9075 10.6899 19.6185 10.6901 19.3169C10.6903 19.0154 10.5778 18.7262 10.3773 18.5128C10.1769 18.2995 9.90496 18.1795 9.62131 18.1793C9.33766 18.179 9.06554 18.2986 8.86483 18.5117L6.41486 21.1182V1.13624ZM14.9662 2.27249C14.6827 2.27249 14.4108 2.15278 14.2104 1.93969C14.0099 1.7266 13.8973 1.43759 13.8973 1.13624C13.8973 0.834893 14.0099 0.545885 14.2104 0.332798C14.4108 0.119711 14.6827 0 14.9662 0H17.1041C17.3875 0 17.6594 0.119711 17.8599 0.332798C18.0604 0.545885 18.173 0.834893 18.173 1.13624C18.173 1.43759 18.0604 1.7266 17.8599 1.93969C17.6594 2.15278 17.3875 2.27249 17.1041 2.27249H14.9662ZM14.9662 9.08994C14.6827 9.08994 14.4108 8.97023 14.2104 8.75715C14.0099 8.54406 13.8973 8.25505 13.8973 7.9537C13.8973 7.65235 14.0099 7.36334 14.2104 7.15026C14.4108 6.93717 14.6827 6.81746 14.9662 6.81746H21.3797C21.6632 6.81746 21.9351 6.93717 22.1356 7.15026C22.336 7.36334 22.4486 7.65235 22.4486 7.9537C22.4486 8.25505 22.336 8.54406 22.1356 8.75715C21.9351 8.97023 21.6632 9.08994 21.3797 9.08994H14.9662ZM14.9662 15.9074C14.6827 15.9074 14.4108 15.7877 14.2104 15.5746C14.0099 15.3615 13.8973 15.0725 13.8973 14.7712C13.8973 14.4698 14.0099 14.1808 14.2104 13.9677C14.4108 13.7546 14.6827 13.6349 14.9662 13.6349H25.6554C25.9389 13.6349 26.2108 13.7546 26.4112 13.9677C26.6117 14.1808 26.7243 14.4698 26.7243 14.7712C26.7243 15.0725 26.6117 15.3615 26.4112 15.5746C26.2108 15.7877 25.9389 15.9074 25.6554 15.9074H14.9662ZM13.8973 21.5886C13.8973 21.89 14.0099 22.179 14.2104 22.3921C14.4108 22.6052 14.6827 22.7249 14.9662 22.7249H29.9311C30.2146 22.7249 30.4865 22.6052 30.6869 22.3921C30.8874 22.179 31 21.89 31 21.5886C31 21.2873 30.8874 20.9983 30.6869 20.7852C30.4865 20.5721 30.2146 20.4524 29.9311 20.4524H14.9662C14.6827 20.4524 14.4108 20.5721 14.2104 20.7852C14.0099 20.9983 13.8973 21.2873 13.8973 21.5886Z" fill="#3A312E" />
                    </svg>
                    <p>Sort</p>
                </a>

            </div>
        </>
    )
}

export default Sidebar